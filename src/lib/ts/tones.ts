import {
  interpolateLinear,
  interpolateLogarithmic,
  AudioContext,
  cancelAndHoldNow,
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
  mute: boolean;
};

const defaultOptions: Readonly<ToneOptions> = {
  waveType: 'square',
  gainMin: 0.01,
  gainMax: 0.3,
  frequencyMinHz: 65,
  frequencyMaxHz: 3000,
  attackMs: 10,
  releaseMs: 200,
  updateMs: 10,
  mute: false,
};

class Tones {
  protected readonly _options: ToneOptions;

  protected toneObjects: Map<number, ToneDataWithNodes>;

  protected releasingToneObjects: Set<ToneDataWithNodes>;

  protected audioContext: AudioContext;

  protected globalGain: GainNode;

  constructor(options: Partial<ToneOptions> = {}) {
    this._options = { ...defaultOptions, ...options };
    this.toneObjects = new Map();
    this.releasingToneObjects = new Set();
    this.audioContext = new AudioContext();
    this.globalGain = this.audioContext.createGain();
    this.globalGain.gain.value = 0.0;
    this.globalGain.connect(this.audioContext.destination);
    this.applyMute();
  }

  getOptions(): ToneOptions {
    return { ...this._options };
  }

  applyOptions(o: Partial<ToneOptions>) {
    Object.assign(this._options, o);
    // TODO: Optimize by updating only what actually changed.
    this.applyMute();
    this.refresh();
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
    envelopeGainNode.connect(this.globalGain);

    // create Gain node
    const gainNode = this.audioContext.createGain();
    gainNode.connect(envelopeGainNode);

    // create variable-frequency Oscillator node
    const { waveType } = this._options;
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
    const { gainMin, gainMax } = this._options;
    const gain = interpolateLinear(tGain, gainMin, gainMax);
    const { frequencyMinHz, frequencyMaxHz } = this._options;
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
    const { attackMs } = this._options;
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
    const { updateMs } = this._options;
    const { currentTime } = this.audioContext;
    const updateDoneTimestamp = currentTime + updateMs / 1000.0;
    const gainParam = gainNode.gain;
    const frequencyParam = oscillatorNode.frequency;
    cancelAndHoldNow(gainParam, this.audioContext);
    cancelAndHoldNow(frequencyParam, this.audioContext);
    gainParam.linearRampToValueAtTime(gain, updateDoneTimestamp);

    // Use exponential ramp if available and linear ramp otherwise.
    const frequencyRamp =
      frequencyParam.exponentialRampToValueAtTime.bind(frequencyParam) ??
      frequencyParam.linearRampToValueAtTime.bind(frequencyParam);
    frequencyRamp(frequency, updateDoneTimestamp);
  }

  remove(id: number) {
    const toneData = this.toneObjects.get(id);
    if (!toneData) return;

    const { envelopeGainNode, gainNode, oscillatorNode } = toneData;
    const { releaseMs } = this._options;
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

  protected applyMute() {
    const { currentTime } = this.audioContext;
    const { gain } = this.globalGain;
    const updateDoneTimestamp = currentTime + 0.02;
    const targetGain = this._options.mute ? 0.0 : 1.0;
    cancelAndHoldNow(gain, this.audioContext);
    gain.linearRampToValueAtTime(targetGain, updateDoneTimestamp);
  }
}

export { ToneOptions, defaultOptions };
export default Tones;
