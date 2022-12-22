import "./index.css";
import $1xfY9$swchelperssrc_define_propertymjs from "@swc/helpers/src/_define_property.mjs";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="declarations.d.ts"/>
var $5659b36a18e30c2e$exports = {};

$parcel$defineInteropFlag($5659b36a18e30c2e$exports);

$parcel$export($5659b36a18e30c2e$exports, "defaultOptions", function () { return $5659b36a18e30c2e$export$ba43bf67f3d48107; });
$parcel$export($5659b36a18e30c2e$exports, "default", function () { return $5659b36a18e30c2e$export$2e2bcd8739ae039; });
$parcel$export($5659b36a18e30c2e$exports, "defaultToneOptions", function () { return $044ea5267f7f44ae$export$ba43bf67f3d48107; });

var $f856531edfd933e8$exports = {};

$parcel$export($f856531edfd933e8$exports, "ring", function () { return $f856531edfd933e8$export$e7d0da6968da5dd; }, function (v) { return $f856531edfd933e8$export$e7d0da6968da5dd = v; });
$parcel$export($f856531edfd933e8$exports, "pane", function () { return $f856531edfd933e8$export$6dff30574f79a202; }, function (v) { return $f856531edfd933e8$export$6dff30574f79a202 = v; });
$parcel$export($f856531edfd933e8$exports, "pointer", function () { return $f856531edfd933e8$export$b7fd2c2937973304; }, function (v) { return $f856531edfd933e8$export$b7fd2c2937973304 = v; });
var $f856531edfd933e8$export$e7d0da6968da5dd;
var $f856531edfd933e8$export$6dff30574f79a202;
var $f856531edfd933e8$export$b7fd2c2937973304;
$f856531edfd933e8$export$e7d0da6968da5dd = `GmrByW_ring`;
$f856531edfd933e8$export$6dff30574f79a202 = `GmrByW_pane`;
$f856531edfd933e8$export$b7fd2c2937973304 = `GmrByW_pointer`;



function $12f1dd3205f197c4$export$5638338adfdf154f(t, min, max) {
    return min + (max - min) * t;
}
function $12f1dd3205f197c4$export$61db5837c8aecee1(t, min, max) {
    // The base of the logarithm cancels out during the computation,
    // so we will just use any base, e.g. Euler's number.
    const logMin = Math.log(min);
    const logMax = Math.log(max);
    const logValue = logMin + (logMax - logMin) * t;
    return Math.exp(logValue);
}
function $12f1dd3205f197c4$export$79263550b33b988b(pe, elem) {
    const { left: left , top: top , width: width , height: height  } = elem.getBoundingClientRect();
    const x = Math.max(0, Math.min(pe.clientX - left, width));
    const y = Math.max(0, Math.min(pe.clientY - top, height));
    const relX = x / width;
    const relY = y / height;
    return {
        x: x,
        y: y,
        relX: relX,
        relY: relY,
        width: width,
        height: height
    };
}
function $12f1dd3205f197c4$export$f9b088a47202d605(element, x, y) {
    const { style: style  } = element;
    style.transform = `translate(${x}px, ${y}px)`;
}
const $12f1dd3205f197c4$export$fcbc63750ec2a81f = window.AudioContext || window.webkitAudioContext;
/**
 * This is a workaround for some browsers not supporting
 * AudioParam.cancelAndHoldAtTime().
 */ function $12f1dd3205f197c4$export$e204a5962a9c046d(audioParam, audioContext) {
    const { currentTime: currentTime  } = audioContext;
    const { value: value  } = audioParam;
    audioParam.cancelScheduledValues(currentTime);
    // eslint-disable-next-line no-param-reassign
    audioParam.value = value;
}


function $044ea5267f7f44ae$var$extractToneData(toneDataExt) {
    const { tGain: tGain , tFrequency: tFrequency  } = toneDataExt;
    return {
        tGain: tGain,
        tFrequency: tFrequency
    };
}
const $044ea5267f7f44ae$export$ba43bf67f3d48107 = {
    waveType: "square",
    gainMin: 0.01,
    gainMax: 0.3,
    frequencyMinHz: 65,
    frequencyMaxHz: 3000,
    attackMs: 10,
    releaseMs: 200,
    updateMs: 10,
    mute: false
};
class $044ea5267f7f44ae$var$Tones {
    getOptions() {
        return {
            ...this._options
        };
    }
    applyOptions(o) {
        Object.assign(this._options, o);
        // TODO: Optimize by updating only what actually changed.
        this.applyMute();
        this.refresh();
    }
    getToneData() {
        const convertEntries = ([id, t])=>[
                id,
                $044ea5267f7f44ae$var$extractToneData(t)
            ];
        const entriesExt = [
            ...this.toneObjects.entries()
        ];
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
        const { waveType: waveType  } = this._options;
        const oscillatorNode = this.audioContext.createOscillator();
        oscillatorNode.type = waveType;
        oscillatorNode.connect(gainNode);
        oscillatorNode.start();
        return {
            envelopeGainNode: envelopeGainNode,
            gainNode: gainNode,
            oscillatorNode: oscillatorNode
        };
    }
    getToneParams(tGain, tFrequency) {
        const { gainMin: gainMin , gainMax: gainMax  } = this._options;
        const gain = (0, $12f1dd3205f197c4$export$5638338adfdf154f)(tGain, gainMin, gainMax);
        const { frequencyMinHz: frequencyMinHz , frequencyMaxHz: frequencyMaxHz  } = this._options;
        const frequency = (0, $12f1dd3205f197c4$export$61db5837c8aecee1)(tFrequency, frequencyMinHz, frequencyMaxHz);
        return {
            gain: gain,
            frequency: frequency
        };
    }
    add(id, tGain, tFrequency) {
        const tone = this.createTone();
        const { envelopeGainNode: envelopeGainNode , gainNode: gainNode , oscillatorNode: oscillatorNode  } = tone;
        const { gain: gain , frequency: frequency  } = this.getToneParams(tGain, tFrequency);
        const { attackMs: attackMs  } = this._options;
        const attackTimestamp = this.audioContext.currentTime + attackMs / 1000;
        envelopeGainNode.gain.linearRampToValueAtTime(1.0, attackTimestamp);
        gainNode.gain.value = gain;
        oscillatorNode.frequency.value = frequency;
        this.remove(id);
        const toneData = {
            ...tone,
            tGain: tGain,
            tFrequency: tFrequency
        };
        this.toneObjects.set(id, toneData);
        return toneData;
    }
    update(id, tGain, tFrequency) {
        this.audioContext.resume().catch(()=>{});
        const toneDataWithNodes = this.toneObjects.get(id);
        if (!toneDataWithNodes) return;
        toneDataWithNodes.tGain = tGain;
        toneDataWithNodes.tFrequency = tFrequency;
        this.refreshNodes(toneDataWithNodes);
    }
    refreshNodes(toneDataWithNodes) {
        const { tGain: tGain , tFrequency: tFrequency  } = toneDataWithNodes;
        const { gain: gain , frequency: frequency  } = this.getToneParams(tGain, tFrequency);
        const { gainNode: gainNode , oscillatorNode: oscillatorNode  } = toneDataWithNodes;
        const { updateMs: updateMs  } = this._options;
        const { currentTime: currentTime  } = this.audioContext;
        const updateDoneTimestamp = currentTime + updateMs / 1000.0;
        const gainParam = gainNode.gain;
        const frequencyParam = oscillatorNode.frequency;
        (0, $12f1dd3205f197c4$export$e204a5962a9c046d)(gainParam, this.audioContext);
        (0, $12f1dd3205f197c4$export$e204a5962a9c046d)(frequencyParam, this.audioContext);
        gainParam.linearRampToValueAtTime(gain, updateDoneTimestamp);
        var _frequencyParam_exponentialRampToValueAtTime_bind;
        // Use exponential ramp if available and linear ramp otherwise.
        const frequencyRamp = (_frequencyParam_exponentialRampToValueAtTime_bind = frequencyParam.exponentialRampToValueAtTime.bind(frequencyParam)) !== null && _frequencyParam_exponentialRampToValueAtTime_bind !== void 0 ? _frequencyParam_exponentialRampToValueAtTime_bind : frequencyParam.linearRampToValueAtTime.bind(frequencyParam);
        frequencyRamp(frequency, updateDoneTimestamp);
    }
    remove(id) {
        const toneData = this.toneObjects.get(id);
        if (!toneData) return;
        const { envelopeGainNode: envelopeGainNode , gainNode: gainNode , oscillatorNode: oscillatorNode  } = toneData;
        const { releaseMs: releaseMs  } = this._options;
        const decayTimestamp = this.audioContext.currentTime + releaseMs / 1000;
        envelopeGainNode.gain.linearRampToValueAtTime(0.0, decayTimestamp);
        setTimeout(()=>{
            envelopeGainNode.disconnect();
            gainNode.disconnect();
            oscillatorNode.stop();
            oscillatorNode.disconnect();
            this.releasingToneObjects.delete(toneData);
            const tonesLeftPlaying = this.toneObjects.size + this.releasingToneObjects.size;
            if (tonesLeftPlaying === 0) this.audioContext.suspend().catch(()=>{});
        }, releaseMs);
        this.toneObjects.delete(id);
        this.releasingToneObjects.add(toneData);
    }
    refresh() {
        [
            ...this.toneObjects.values()
        ].forEach((t)=>this.refreshNodes(t));
    }
    applyMute() {
        const { currentTime: currentTime  } = this.audioContext;
        const { gain: gain  } = this.globalGain;
        const updateDoneTimestamp = currentTime + 0.02;
        const targetGain = this._options.mute ? 0.0 : 1.0;
        (0, $12f1dd3205f197c4$export$e204a5962a9c046d)(gain, this.audioContext);
        gain.linearRampToValueAtTime(targetGain, updateDoneTimestamp);
    }
    constructor(options = {}){
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "_options", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "toneObjects", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "releasingToneObjects", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "audioContext", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "globalGain", void 0);
        this._options = {
            ...$044ea5267f7f44ae$export$ba43bf67f3d48107,
            ...options
        };
        this.toneObjects = new Map();
        this.releasingToneObjects = new Set();
        this.audioContext = new (0, $12f1dd3205f197c4$export$fcbc63750ec2a81f)();
        this.globalGain = this.audioContext.createGain();
        this.globalGain.gain.value = 0.0;
        this.globalGain.connect(this.audioContext.destination);
        this.applyMute();
    }
}
var $044ea5267f7f44ae$export$2e2bcd8739ae039 = $044ea5267f7f44ae$var$Tones;



const $5659b36a18e30c2e$export$ba43bf67f3d48107 = {
    touchElementCssClasses: [
        (0, (/*@__PURE__*/$parcel$interopDefault($f856531edfd933e8$exports))).ring
    ],
    touchElementStyle: ""
};
function $5659b36a18e30c2e$var$queryForPointerIdAll(parent, id) {
    return parent.querySelectorAll(`.${(0, (/*@__PURE__*/$parcel$interopDefault($f856531edfd933e8$exports))).pointer}[data-pointer-id="${id}"]`);
}
class $5659b36a18e30c2e$export$2e2bcd8739ae039 {
    getOptions() {
        return {
            ...this._options
        };
    }
    applyOptions(o) {
        Object.assign(this._options, o);
        this.refreshPointerElementCssAll();
    }
    getToneOptions() {
        return this.tones.getOptions();
    }
    applyToneOptions(o) {
        this.tones.applyOptions(o);
    }
    getHandlers() {
        return {
            addPointer: this.addPointer.bind(this),
            updatePointer: this.updatePointer.bind(this),
            removePointer: this.removePointer.bind(this)
        };
    }
    addPointer(pe) {
        this.removePointer(pe);
        this.pane.addEventListener("pointermove", this.handlers.updatePointer);
        this.pane.setPointerCapture(pe.pointerId);
        const { relX: relX , relY: relY  } = (0, $12f1dd3205f197c4$export$79263550b33b988b)(pe, this.pane);
        const internalElem = document.createElement("div");
        this.refreshPointerElementCss(internalElem);
        const elem = document.createElement("div");
        elem.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($f856531edfd933e8$exports))).pointer);
        elem.dataset.pointerId = `${pe.pointerId}`;
        elem.appendChild(internalElem);
        this.pane.append(elem);
        this.tones.add(pe.pointerId, relX, relY);
        this.updatePointer(pe);
    }
    updatePointer(pe) {
        if (pe.buttons === 0) return;
        const id = pe.pointerId;
        const elems = $5659b36a18e30c2e$var$queryForPointerIdAll(this.pane, id);
        const { x: x , y: y , relX: relX , relY: relY  } = (0, $12f1dd3205f197c4$export$79263550b33b988b)(pe, this.pane);
        elems.forEach((e)=>(0, $12f1dd3205f197c4$export$f9b088a47202d605)(e, x, y));
        this.tones.update(id, relX, relY);
    }
    removePointer(pe) {
        const id = pe.pointerId;
        const elems = $5659b36a18e30c2e$var$queryForPointerIdAll(this.pane, id);
        elems.forEach((e)=>e.remove());
        this.pane.releasePointerCapture(pe.pointerId);
        this.tones.remove(id);
        if (this.tones.size === 0) this.pane.removeEventListener("pointermove", this.handlers.updatePointer);
    }
    refreshPointerElementCss(element) {
        const { touchElementCssClasses: touchElementCssClasses , touchElementStyle: touchElementStyle  } = this._options;
        element.classList.add(...touchElementCssClasses);
        element.setAttribute("style", touchElementStyle);
    }
    refreshPointerElementCssAll() {
        const elements = this.pane.querySelectorAll(`.${(0, (/*@__PURE__*/$parcel$interopDefault($f856531edfd933e8$exports))).pointer} > *`);
        elements.forEach(this.refreshPointerElementCss.bind(this));
    }
    constructor(element, options = {}, toneOptions = {}){
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "_options", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "tones", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "handlers", this.getHandlers());
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "element", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "pane", void 0);
        this._options = {
            ...$5659b36a18e30c2e$export$ba43bf67f3d48107,
            ...options
        };
        const pane = document.createElement("div");
        pane.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($f856531edfd933e8$exports))).pane);
        pane.addEventListener("pointerdown", this.handlers.addPointer);
        pane.addEventListener("pointerup", this.handlers.removePointer);
        pane.addEventListener("pointercancel", this.handlers.removePointer);
        pane.addEventListener("contextmenu", (event)=>event.preventDefault());
        while(element.firstChild)element.firstChild.remove();
        element.appendChild(pane);
        this.pane = pane;
        this.element = element;
        this.tones = new (0, $044ea5267f7f44ae$export$2e2bcd8739ae039)(toneOptions);
    }
}



var $e8a6df3c5af17b1e$export$2e2bcd8739ae039 = (0, $5659b36a18e30c2e$export$2e2bcd8739ae039);


export {$e8a6df3c5af17b1e$export$2e2bcd8739ae039 as default, $5659b36a18e30c2e$export$ba43bf67f3d48107 as defaultOptions, $044ea5267f7f44ae$export$ba43bf67f3d48107 as defaultOptions};
//# sourceMappingURL=index.mjs.map
