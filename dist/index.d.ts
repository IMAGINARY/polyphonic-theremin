interface ToneData {
    tGain: number;
    tFrequency: number;
}
interface ToneDataWithNodes extends ToneData {
    envelopeGainNode: GainNode;
    gainNode: GainNode;
    oscillatorNode: OscillatorNode;
}
type _ToneOptions1 = {
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
export const defaultToneOptions: Readonly<_ToneOptions1>;
declare class Tones {
    protected readonly _options: _ToneOptions1;
    protected toneObjects: Map<number, ToneDataWithNodes>;
    protected releasingToneObjects: Set<ToneDataWithNodes>;
    protected audioContext: AudioContext;
    protected globalGain: GainNode;
    constructor(options?: Partial<_ToneOptions1>);
    getOptions(): _ToneOptions1;
    applyOptions(o: Partial<_ToneOptions1>): void;
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
    protected applyMute(): void;
}
type _ToneOptions2 = _ToneOptions1;
type _PolyphonicThereminOptions1 = {
    touchElementCssClasses: string[];
    touchElementStyle: string;
};
export const defaultOptions: Readonly<_PolyphonicThereminOptions1>;
declare class PolyphonicTheremin {
    protected readonly _options: _PolyphonicThereminOptions1;
    protected tones: Tones;
    protected handlers: {
        addPointer: (pe: PointerEvent) => void;
        updatePointer: (pe: PointerEvent) => void;
        removePointer: (pe: PointerEvent) => void;
    };
    protected element: Element;
    protected pane: HTMLDivElement;
    constructor(element: Element, options?: Partial<_PolyphonicThereminOptions1>, toneOptions?: Partial<_ToneOptions2>);
    getOptions(): {
        touchElementCssClasses: string[];
        touchElementStyle: string;
    };
    applyOptions(o: Partial<_PolyphonicThereminOptions1>): void;
    getToneOptions(): _ToneOptions2;
    applyToneOptions(o: Partial<_ToneOptions2>): void;
    protected getHandlers(): {
        addPointer: (pe: PointerEvent) => void;
        updatePointer: (pe: PointerEvent) => void;
        removePointer: (pe: PointerEvent) => void;
    };
    protected addPointer(pe: PointerEvent): void;
    protected updatePointer(pe: PointerEvent): void;
    protected removePointer(pe: PointerEvent): void;
    protected refreshPointerElementCss(element: Element): void;
    protected refreshPointerElementCssAll(): void;
}
export default PolyphonicTheremin;
export type PolyphonicThereminOptions = _PolyphonicThereminOptions1;
export type ToneOptions = _ToneOptions2;

//# sourceMappingURL=index.d.ts.map
