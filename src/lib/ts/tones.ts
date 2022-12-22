import {
  hasKey,
  interpolateLinear,
  interpolateLogarithmic,
  AudioContext,
} from './util';

interface ToneData {
  tGain: number;
  tFrequency: number;
}

interface ToneDataWithNodes extends ToneData {
  envelopeGainNode: GainNode;
  gainNode: GainNode;
  oscillatorNode: OscillatorNode;
}

function extractToneData<T extends ToneData>(toneDataExt: T): ToneData {
  const { tGain, tFrequency } = toneDataExt;
  return {
    tGain,
    tFrequency,
  };
}

type ToneOptions = {
  waveType: OscillatorType;
  gainMin: number;
  gainMax: number;
  frequencyMinHz: number;
  frequencyMaxHz: number;
  attackMs: number;
  releaseMs: number;
  updateMs: number;
};

const defaultToneOptions: Readonly<ToneOptions> = {
  waveType: 'square',
  gainMin: 0.01,
  gainMax: 0.3,
  frequencyMinHz: 65,
  frequencyMaxHz: 3000,
  attackMs: 10,
  releaseMs: 200,
  updateMs: 10,
};

class Tones {
  public readonly options: ToneOptions;

  protected toneObjects: Map<number, ToneDataWithNodes>;

  protected releasingToneObjects: Set<ToneDataWithNodes>;

  protected audioContext: AudioContext;

  protected needsRefresh: boolean;

  constructor(options: Partial<ToneOptions> = {}) {
    const optionsWithDefaults = { ...defaultToneOptions, ...options };
    this.options = new Proxy<ToneOptions>(optionsWithDefaults, {
      set: (target: typeof optionsWithDefaults, key, newValue): boolean => {
        // The TypeScript compiler already enforces the correct type on the Proxy level,
        // so the following assignment is safe even if we can't determine the type of
        // `newValue` statically.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,no-param-reassign
        target[key] = newValue;
        if (hasKey(optionsWithDefaults, key)) this.scheduleRefresh();
        return true;
      },
    });

    this.toneObjects = new Map();
    this.releasingToneObjects = new Set();
    this.audioContext = new AudioContext();
    this.needsRefresh = false;
  }

  getToneData(): Map<number, ToneData> {
    const convertEntries = ([id, t]: [id: number, t: ToneDataWithNodes]): [
      number,
      ToneData,
    ] => [id, extractToneData(t)];
    const entriesExt = [...this.toneObjects.entries()];
    const entries = entriesExt.map(convertEntries);
    return new Map(entries);
  }

  get size() {
    return this.toneObjects.size;
  }

  createTone() {
    // create envelope Gain node
    const envelopeGainNode = this.audioContext.createGain();
    envelopeGainNode.gain.value = 0;
    envelopeGainNode.connect(this.audioContext.destination);

    // create Gain node
    const gainNode = this.audioContext.createGain();
    gainNode.connect(envelopeGainNode);

    // create variable-frequency Oscillator node
    const { waveType } = this.options;
    const oscillatorNode = this.audioContext.createOscillator();
    oscillatorNode.type = waveType;
    oscillatorNode.connect(gainNode);
    oscillatorNode.start();

    return {
      envelopeGainNode,
      gainNode,
      oscillatorNode,
    };
  }

  getToneParams(tGain: number, tFrequency: number) {
    const { gainMin, gainMax } = this.options;
    const gain = interpolateLinear(tGain, gainMin, gainMax);
    const { frequencyMinHz, frequencyMaxHz } = this.options;
    const frequency = interpolateLogarithmic(
      tFrequency,
      frequencyMinHz,
      frequencyMaxHz,
    );
    return { gain, frequency };
  }

  add(id: number, tGain: number, tFrequency: number): ToneData {
    const tone = this.createTone();
    const { envelopeGainNode, gainNode, oscillatorNode } = tone;
    const { gain, frequency } = this.getToneParams(tGain, tFrequency);
    const { attackMs } = this.options;
    const attackTimestamp = this.audioContext.currentTime + attackMs / 1000;
    envelopeGainNode.gain.linearRampToValueAtTime(1.0, attackTimestamp);
    gainNode.gain.value = gain;
    oscillatorNode.frequency.value = frequency;

    this.remove(id);

    const toneData = { ...tone, tGain, tFrequency };
    this.toneObjects.set(id, toneData);

    return toneData;
  }

  update(id: number, tGain: number, tFrequency: number) {
    this.audioContext.resume().catch(() => {});

    const toneDataWithNodes = this.toneObjects.get(id);
    if (!toneDataWithNodes) return;

    toneDataWithNodes.tGain = tGain;
    toneDataWithNodes.tFrequency = tFrequency;
    this.refreshNodes(toneDataWithNodes);
  }

  protected refreshNodes(toneDataWithNodes: ToneDataWithNodes) {
    const { tGain, tFrequency } = toneDataWithNodes;
    const { gain, frequency } = this.getToneParams(tGain, tFrequency);
    const { gainNode, oscillatorNode } = toneDataWithNodes;
    const { updateMs } = this.options;
    const { currentTime } = this.audioContext;
    gainNode.gain.cancelScheduledValues(currentTime);
    if (updateMs <= 0) {
      gainNode.gain.value = gain;
      oscillatorNode.frequency.value = frequency;
    } else {
      const updateDoneTimestamp = currentTime + updateMs / 1000.0;
      gainNode.gain.linearRampToValueAtTime(gain, updateDoneTimestamp);
      oscillatorNode.frequency.linearRampToValueAtTime(
        frequency,
        updateDoneTimestamp,
      );
    }
  }

  remove(id: number) {
    const toneData = this.toneObjects.get(id);
    if (!toneData) return;

    const { envelopeGainNode, gainNode, oscillatorNode } = toneData;
    const { releaseMs } = this.options;
    const decayTimestamp = this.audioContext.currentTime + releaseMs / 1000;
    envelopeGainNode.gain.linearRampToValueAtTime(0.0, decayTimestamp);
    setTimeout(() => {
      envelopeGainNode.disconnect();
      gainNode.disconnect();
      oscillatorNode.stop();
      oscillatorNode.disconnect();
      this.releasingToneObjects.delete(toneData);

      const tonesLeftPlaying =
        this.toneObjects.size + this.releasingToneObjects.size;
      if (tonesLeftPlaying === 0) this.audioContext.suspend().catch(() => {});
    }, releaseMs);

    this.toneObjects.delete(id);
    this.releasingToneObjects.add(toneData);
  }

  refresh() {
    [...this.toneObjects.values()].forEach((t) => this.refreshNodes(t));
  }

  scheduleRefresh() {
    this.needsRefresh = true;
    this.needsRefresh = true;
    queueMicrotask(() => this.refreshIfNeeded());
  }

  refreshIfNeeded(): boolean {
    if (this.needsRefresh) {
      this.refresh();
      return true;
    }

    return false;
  }
}

export { ToneOptions, defaultToneOptions };
export default Tones;
