import "./index.css";
import $1xfY9$swchelperssrc_define_propertymjs from "@swc/helpers/src/_define_property.mjs";




function $12f1dd3205f197c4$export$94df19ecb868bc1a(obj, k) {
    return k in obj;
}
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
    style.left = `${x}px`;
    style.top = `${y}px`;
}
const $12f1dd3205f197c4$export$fcbc63750ec2a81f = window.AudioContext || window.webkitAudioContext;


function $044ea5267f7f44ae$var$extractToneData(toneDataExt) {
    const { tGain: tGain , tFrequency: tFrequency  } = toneDataExt;
    return {
        tGain: tGain,
        tFrequency: tFrequency
    };
}
const $044ea5267f7f44ae$export$c3f131c7971faff7 = {
    waveType: "square",
    gainMin: 0.01,
    gainMax: 0.3,
    frequencyMinHz: 65,
    frequencyMaxHz: 3000,
    attackMs: 10,
    releaseMs: 200,
    updateMs: 10
};
class $044ea5267f7f44ae$var$Tones {
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
        envelopeGainNode.connect(this.audioContext.destination);
        // create Gain node
        const gainNode = this.audioContext.createGain();
        gainNode.connect(envelopeGainNode);
        // create variable-frequency Oscillator node
        const { waveType: waveType  } = this.options;
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
        const { gainMin: gainMin , gainMax: gainMax  } = this.options;
        const gain = (0, $12f1dd3205f197c4$export$5638338adfdf154f)(tGain, gainMin, gainMax);
        const { frequencyMinHz: frequencyMinHz , frequencyMaxHz: frequencyMaxHz  } = this.options;
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
        const { attackMs: attackMs  } = this.options;
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
        const { updateMs: updateMs  } = this.options;
        if (updateMs <= 0) {
            gainNode.gain.value = gain;
            oscillatorNode.frequency.value = frequency;
        } else {
            const updateDoneTimestamp = this.audioContext.currentTime + updateMs / 1000.0;
            gainNode.gain.linearRampToValueAtTime(gain, updateDoneTimestamp);
            oscillatorNode.frequency.linearRampToValueAtTime(frequency, updateDoneTimestamp);
        }
    }
    remove(id) {
        const toneData = this.toneObjects.get(id);
        if (!toneData) return;
        const { envelopeGainNode: envelopeGainNode , gainNode: gainNode , oscillatorNode: oscillatorNode  } = toneData;
        const { releaseMs: releaseMs  } = this.options;
        const decayTimestamp = this.audioContext.currentTime + releaseMs / 1000;
        envelopeGainNode.gain.linearRampToValueAtTime(0.0, decayTimestamp);
        setTimeout(()=>{
            gainNode.disconnect();
            oscillatorNode.stop();
            oscillatorNode.disconnect();
        }, releaseMs);
        this.toneObjects.delete(id);
    }
    refresh() {
        [
            ...this.toneObjects.values()
        ].forEach((t)=>this.refreshNodes(t));
    }
    scheduleRefresh() {
        this.needsRefresh = true;
        this.needsRefresh = true;
        queueMicrotask(()=>this.refreshIfNeeded());
    }
    refreshIfNeeded() {
        if (this.needsRefresh) {
            this.refresh();
            return true;
        }
        return false;
    }
    constructor(options = {}){
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "options", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "toneObjects", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "audioContext", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "needsRefresh", void 0);
        const optionsWithDefaults = {
            ...$044ea5267f7f44ae$export$c3f131c7971faff7,
            ...options
        };
        this.options = new Proxy(optionsWithDefaults, {
            set: (target, key, newValue)=>{
                // The TypeScript compiler already enforces the correct type on the Proxy level,
                // so the following assignment is safe even if we can't determine the type of
                // `newValue` statically.
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,no-param-reassign
                target[key] = newValue;
                if ((0, $12f1dd3205f197c4$export$94df19ecb868bc1a)(optionsWithDefaults, key)) {
                    // update tones
                    console.log("Update!!");
                    this.scheduleRefresh();
                }
                return true;
            }
        });
        this.toneObjects = new Map();
        this.audioContext = new (0, $12f1dd3205f197c4$export$fcbc63750ec2a81f)();
        this.needsRefresh = false;
    }
}
var $044ea5267f7f44ae$export$2e2bcd8739ae039 = $044ea5267f7f44ae$var$Tones;



function $5659b36a18e30c2e$var$queryForPointerIdAll(parent, id) {
    return parent.querySelectorAll(`.${(0, {}).pointer}[data-pointer-id="${id}"]`);
}
class $5659b36a18e30c2e$export$2e2bcd8739ae039 {
    get options() {
        return this.tones.options;
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
        const elem = document.createElement("div");
        elem.classList.add((0, {}).pointer);
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
        if (this.tones.size) this.pane.removeEventListener("pointermove", this.handlers.updatePointer);
    }
    constructor(element, options = {}){
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "tones", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "handlers", this.getHandlers());
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "element", void 0);
        (0, $1xfY9$swchelperssrc_define_propertymjs)(this, "pane", void 0);
        const pane = document.createElement("div");
        pane.classList.add((0, {}).pane);
        pane.addEventListener("pointerdown", this.handlers.addPointer);
        pane.addEventListener("pointerup", this.handlers.removePointer);
        pane.addEventListener("pointercancel", this.handlers.removePointer);
        pane.addEventListener("contextmenu", (event)=>event.preventDefault());
        while(element.firstChild)element.firstChild.remove();
        element.appendChild(pane);
        this.pane = pane;
        this.element = element;
        this.tones = new (0, $044ea5267f7f44ae$export$2e2bcd8739ae039)(options);
    }
}


var $e8a6df3c5af17b1e$export$2e2bcd8739ae039 = (0, $5659b36a18e30c2e$export$2e2bcd8739ae039);


export {$e8a6df3c5af17b1e$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.mjs.map
