interface ToneData {
    tGain: number;
    tFrequency: number;
}
interface ToneDataWithNodes extends ToneData {
    envelopeGainNode: GainNode;
    gainNode: GainNode;
    oscillatorNode: OscillatorNode;
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
declare class Tones {
    readonly options: ToneOptions;
    protected toneObjects: Map<number, ToneDataWithNodes>;
    protected audioContext: AudioContext;
    protected needsRefresh: boolean;
    constructor(options?: Partial<ToneOptions>);
    getToneData(): Map<number, ToneData>;
    get size(): number;
    createTone(): {
        envelopeGainNode: GainNode;
        gainNode: GainNode;
        oscillatorNode: OscillatorNode;
    };
    getToneParams(tGain: number, tFrequency: number): {
        gain: number;
        frequency: number;
    };
    add(id: number, tGain: number, tFrequency: number): ToneData;
    update(id: number, tGain: number, tFrequency: number): void;
    protected refreshNodes(toneDataWithNodes: ToneDataWithNodes): void;
    remove(id: number): void;
    refresh(): void;
    scheduleRefresh(): void;
    refreshIfNeeded(): boolean;
}
type PolyphonicThereminOptions = ToneOptions;
declare class PolyphonicTheremin {
    protected tones: Tones;
    protected handlers: {
        addPointer: (pe: PointerEvent) => void;
        updatePointer: (pe: PointerEvent) => void;
        removePointer: (pe: PointerEvent) => void;
    };
    protected element: Element;
    protected pane: HTMLDivElement;
    constructor(element: Element, options?: Partial<PolyphonicThereminOptions>);
    get options(): ToneOptions;
    protected getHandlers(): {
        addPointer: (pe: PointerEvent) => void;
        updatePointer: (pe: PointerEvent) => void;
        removePointer: (pe: PointerEvent) => void;
    };
    addPointer(pe: PointerEvent): void;
    updatePointer(pe: PointerEvent): void;
    removePointer(pe: PointerEvent): void;
}
export default PolyphonicTheremin;

//# sourceMappingURL=index.d.ts.map
