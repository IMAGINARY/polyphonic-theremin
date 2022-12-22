(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="declarations.d.ts"/>
function $1116f75704701d1d$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}


function $d8e0bd28d81a04e3$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $d8e0bd28d81a04e3$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $d8e0bd28d81a04e3$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $d8e0bd28d81a04e3$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}


function $446dbbd08931032f$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}



function $640317966ad3eaf9$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $446dbbd08931032f$export$2e2bcd8739ae039)(target, key, source[key]);
        });
    }
    return target;
}


function $ceffc0a19f6864ba$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $9f9b5d88319e4a66$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(arr);
}


function $bef4077408992241$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}


function $b8753e6fb483330f$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



function $f9fc3e8dc2b5850c$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(o, minLen);
}


function $6c3cfc3eaf24aa04$export$2e2bcd8739ae039(arr) {
    return (0, $9f9b5d88319e4a66$export$2e2bcd8739ae039)(arr) || (0, $bef4077408992241$export$2e2bcd8739ae039)(arr) || (0, $f9fc3e8dc2b5850c$export$2e2bcd8739ae039)(arr) || (0, $b8753e6fb483330f$export$2e2bcd8739ae039)();
}


var $57a8c525f18472a5$exports = {};

$parcel$export($57a8c525f18472a5$exports, "ring", function () { return $57a8c525f18472a5$export$e7d0da6968da5dd; }, function (v) { return $57a8c525f18472a5$export$e7d0da6968da5dd = v; });
$parcel$export($57a8c525f18472a5$exports, "pane", function () { return $57a8c525f18472a5$export$6dff30574f79a202; }, function (v) { return $57a8c525f18472a5$export$6dff30574f79a202 = v; });
$parcel$export($57a8c525f18472a5$exports, "pointer", function () { return $57a8c525f18472a5$export$b7fd2c2937973304; }, function (v) { return $57a8c525f18472a5$export$b7fd2c2937973304 = v; });
var $57a8c525f18472a5$export$e7d0da6968da5dd;
var $57a8c525f18472a5$export$6dff30574f79a202;
var $57a8c525f18472a5$export$b7fd2c2937973304;
$57a8c525f18472a5$export$e7d0da6968da5dd = "GmrByW_ring";
$57a8c525f18472a5$export$6dff30574f79a202 = "GmrByW_pane";
$57a8c525f18472a5$export$b7fd2c2937973304 = "GmrByW_pointer";






function $9f7a653730d83ba2$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $9f7a653730d83ba2$export$2e2bcd8739ae039(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $9f7a653730d83ba2$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}


function $a52502134587cc7c$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}



function $1ab94dbc974f75c3$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



function $7221d375061d681f$export$2e2bcd8739ae039(arr, i) {
    return (0, $a52502134587cc7c$export$2e2bcd8739ae039)(arr) || (0, $bef4077408992241$export$2e2bcd8739ae039)(arr, i) || (0, $f9fc3e8dc2b5850c$export$2e2bcd8739ae039)(arr, i) || (0, $1ab94dbc974f75c3$export$2e2bcd8739ae039)();
}



function $1a31c97f8b186460$export$5638338adfdf154f(t, min, max) {
    return min + (max - min) * t;
}
function $1a31c97f8b186460$export$61db5837c8aecee1(t, min, max) {
    // The base of the logarithm cancels out during the computation,
    // so we will just use any base, e.g. Euler's number.
    var logMin = Math.log(min);
    var logMax = Math.log(max);
    var logValue = logMin + (logMax - logMin) * t;
    return Math.exp(logValue);
}
function $1a31c97f8b186460$export$79263550b33b988b(pe, elem) {
    var _elem_getBoundingClientRect = elem.getBoundingClientRect(), left = _elem_getBoundingClientRect.left, top = _elem_getBoundingClientRect.top, width = _elem_getBoundingClientRect.width, height = _elem_getBoundingClientRect.height;
    var x = Math.max(0, Math.min(pe.clientX - left, width));
    var y = Math.max(0, Math.min(pe.clientY - top, height));
    var relX = x / width;
    var relY = y / height;
    return {
        x: x,
        y: y,
        relX: relX,
        relY: relY,
        width: width,
        height: height
    };
}
function $1a31c97f8b186460$export$f9b088a47202d605(element, x, y) {
    var style = element.style;
    style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
}
var $1a31c97f8b186460$export$fcbc63750ec2a81f = window.AudioContext || window.webkitAudioContext;
/**
 * This is a workaround for some browsers not supporting
 * AudioParam.cancelAndHoldAtTime().
 */ function $1a31c97f8b186460$export$e204a5962a9c046d(audioParam, audioContext) {
    var currentTime = audioContext.currentTime;
    var value = audioParam.value;
    audioParam.cancelScheduledValues(currentTime);
    // eslint-disable-next-line no-param-reassign
    audioParam.value = value;
}


function $bf6ef698d861fc89$var$extractToneData(toneDataExt) {
    var tGain = toneDataExt.tGain, tFrequency = toneDataExt.tFrequency;
    return {
        tGain: tGain,
        tFrequency: tFrequency
    };
}
var $bf6ef698d861fc89$export$ba43bf67f3d48107 = {
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
var $bf6ef698d861fc89$var$Tones = /*#__PURE__*/ function() {
    "use strict";
    function Tones() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, $1116f75704701d1d$export$2e2bcd8739ae039)(this, Tones);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "_options", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "toneObjects", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "releasingToneObjects", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "audioContext", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "globalGain", void 0);
        this._options = (0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, $bf6ef698d861fc89$export$ba43bf67f3d48107, options);
        this.toneObjects = new Map();
        this.releasingToneObjects = new Set();
        this.audioContext = new (0, $1a31c97f8b186460$export$fcbc63750ec2a81f)();
        this.globalGain = this.audioContext.createGain();
        this.globalGain.gain.value = 0.0;
        this.globalGain.connect(this.audioContext.destination);
        this.applyMute();
    }
    (0, $d8e0bd28d81a04e3$export$2e2bcd8739ae039)(Tones, [
        {
            key: "getOptions",
            value: function getOptions() {
                return (0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, this._options);
            }
        },
        {
            key: "applyOptions",
            value: function applyOptions(o) {
                Object.assign(this._options, o);
                // TODO: Optimize by updating only what actually changed.
                this.applyMute();
                this.refresh();
            }
        },
        {
            key: "getToneData",
            value: function getToneData() {
                var convertEntries = function(param) {
                    var _param = (0, $7221d375061d681f$export$2e2bcd8739ae039)(param, 2), id = _param[0], t = _param[1];
                    return [
                        id,
                        $bf6ef698d861fc89$var$extractToneData(t)
                    ];
                };
                var entriesExt = (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)(this.toneObjects.entries());
                var entries = entriesExt.map(convertEntries);
                return new Map(entries);
            }
        },
        {
            key: "size",
            get: function get() {
                return this.toneObjects.size;
            }
        },
        {
            key: "createTone",
            value: function createTone() {
                // create envelope Gain node
                var envelopeGainNode = this.audioContext.createGain();
                envelopeGainNode.gain.value = 0;
                envelopeGainNode.connect(this.globalGain);
                // create Gain node
                var gainNode = this.audioContext.createGain();
                gainNode.connect(envelopeGainNode);
                // create variable-frequency Oscillator node
                var waveType = this._options.waveType;
                var oscillatorNode = this.audioContext.createOscillator();
                oscillatorNode.type = waveType;
                oscillatorNode.connect(gainNode);
                oscillatorNode.start();
                return {
                    envelopeGainNode: envelopeGainNode,
                    gainNode: gainNode,
                    oscillatorNode: oscillatorNode
                };
            }
        },
        {
            key: "getToneParams",
            value: function getToneParams(tGain, tFrequency) {
                var _this__options = this._options, gainMin = _this__options.gainMin, gainMax = _this__options.gainMax;
                var gain = (0, $1a31c97f8b186460$export$5638338adfdf154f)(tGain, gainMin, gainMax);
                var _this__options1 = this._options, frequencyMinHz = _this__options1.frequencyMinHz, frequencyMaxHz = _this__options1.frequencyMaxHz;
                var frequency = (0, $1a31c97f8b186460$export$61db5837c8aecee1)(tFrequency, frequencyMinHz, frequencyMaxHz);
                return {
                    gain: gain,
                    frequency: frequency
                };
            }
        },
        {
            key: "add",
            value: function add(id, tGain, tFrequency) {
                var tone = this.createTone();
                var envelopeGainNode = tone.envelopeGainNode, gainNode = tone.gainNode, oscillatorNode = tone.oscillatorNode;
                var _this_getToneParams = this.getToneParams(tGain, tFrequency), gain = _this_getToneParams.gain, frequency = _this_getToneParams.frequency;
                var attackMs = this._options.attackMs;
                var attackTimestamp = this.audioContext.currentTime + attackMs / 1000;
                envelopeGainNode.gain.linearRampToValueAtTime(1.0, attackTimestamp);
                gainNode.gain.value = gain;
                oscillatorNode.frequency.value = frequency;
                this.remove(id);
                var toneData = (0, $9f7a653730d83ba2$export$2e2bcd8739ae039)((0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, tone), {
                    tGain: tGain,
                    tFrequency: tFrequency
                });
                this.toneObjects.set(id, toneData);
                return toneData;
            }
        },
        {
            key: "update",
            value: function update(id, tGain, tFrequency) {
                this.audioContext.resume().catch(function() {});
                var toneDataWithNodes = this.toneObjects.get(id);
                if (!toneDataWithNodes) return;
                toneDataWithNodes.tGain = tGain;
                toneDataWithNodes.tFrequency = tFrequency;
                this.refreshNodes(toneDataWithNodes);
            }
        },
        {
            key: "refreshNodes",
            value: function refreshNodes(toneDataWithNodes) {
                var tGain = toneDataWithNodes.tGain, tFrequency = toneDataWithNodes.tFrequency;
                var _this_getToneParams = this.getToneParams(tGain, tFrequency), gain = _this_getToneParams.gain, frequency = _this_getToneParams.frequency;
                var gainNode = toneDataWithNodes.gainNode, oscillatorNode = toneDataWithNodes.oscillatorNode;
                var updateMs = this._options.updateMs;
                var currentTime = this.audioContext.currentTime;
                var updateDoneTimestamp = currentTime + updateMs / 1000.0;
                var gainParam = gainNode.gain;
                var frequencyParam = oscillatorNode.frequency;
                (0, $1a31c97f8b186460$export$e204a5962a9c046d)(gainParam, this.audioContext);
                (0, $1a31c97f8b186460$export$e204a5962a9c046d)(frequencyParam, this.audioContext);
                gainParam.linearRampToValueAtTime(gain, updateDoneTimestamp);
                var _frequencyParam_exponentialRampToValueAtTime_bind;
                // Use exponential ramp if available and linear ramp otherwise.
                var frequencyRamp = (_frequencyParam_exponentialRampToValueAtTime_bind = frequencyParam.exponentialRampToValueAtTime.bind(frequencyParam)) !== null && _frequencyParam_exponentialRampToValueAtTime_bind !== void 0 ? _frequencyParam_exponentialRampToValueAtTime_bind : frequencyParam.linearRampToValueAtTime.bind(frequencyParam);
                frequencyRamp(frequency, updateDoneTimestamp);
            }
        },
        {
            key: "remove",
            value: function remove(id) {
                var _this = this;
                var toneData = this.toneObjects.get(id);
                if (!toneData) return;
                var envelopeGainNode = toneData.envelopeGainNode, gainNode = toneData.gainNode, oscillatorNode = toneData.oscillatorNode;
                var releaseMs = this._options.releaseMs;
                var decayTimestamp = this.audioContext.currentTime + releaseMs / 1000;
                envelopeGainNode.gain.linearRampToValueAtTime(0.0, decayTimestamp);
                setTimeout(function() {
                    envelopeGainNode.disconnect();
                    gainNode.disconnect();
                    oscillatorNode.stop();
                    oscillatorNode.disconnect();
                    _this.releasingToneObjects.delete(toneData);
                    var tonesLeftPlaying = _this.toneObjects.size + _this.releasingToneObjects.size;
                    if (tonesLeftPlaying === 0) _this.audioContext.suspend().catch(function() {});
                }, releaseMs);
                this.toneObjects.delete(id);
                this.releasingToneObjects.add(toneData);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)(this.toneObjects.values()).forEach(function(t) {
                    return _this.refreshNodes(t);
                });
            }
        },
        {
            key: "applyMute",
            value: function applyMute() {
                var currentTime = this.audioContext.currentTime;
                var gain = this.globalGain.gain;
                var updateDoneTimestamp = currentTime + 0.02;
                var targetGain = this._options.mute ? 0.0 : 1.0;
                (0, $1a31c97f8b186460$export$e204a5962a9c046d)(gain, this.audioContext);
                gain.linearRampToValueAtTime(targetGain, updateDoneTimestamp);
            }
        }
    ]);
    return Tones;
}();
var $bf6ef698d861fc89$export$2e2bcd8739ae039 = $bf6ef698d861fc89$var$Tones;



var $a189909cce53f31a$export$ba43bf67f3d48107 = {
    touchElementCssClasses: [
        (0, (/*@__PURE__*/$parcel$interopDefault($57a8c525f18472a5$exports))).ring
    ],
    touchElementStyle: ""
};
function $a189909cce53f31a$var$queryForPointerIdAll(parent, id) {
    return parent.querySelectorAll(".".concat((0, (/*@__PURE__*/$parcel$interopDefault($57a8c525f18472a5$exports))).pointer, '[data-pointer-id="').concat(id, '"]'));
}
var $a189909cce53f31a$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function PolyphonicTheremin(element) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, toneOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, $1116f75704701d1d$export$2e2bcd8739ae039)(this, PolyphonicTheremin);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "_options", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "tones", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "handlers", this.getHandlers());
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "element", void 0);
        (0, $446dbbd08931032f$export$2e2bcd8739ae039)(this, "pane", void 0);
        this._options = (0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, $a189909cce53f31a$export$ba43bf67f3d48107, options);
        var pane = document.createElement("div");
        pane.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($57a8c525f18472a5$exports))).pane);
        pane.addEventListener("pointerdown", this.handlers.addPointer);
        pane.addEventListener("pointerup", this.handlers.removePointer);
        pane.addEventListener("pointercancel", this.handlers.removePointer);
        pane.addEventListener("contextmenu", function(event) {
            return event.preventDefault();
        });
        while(element.firstChild)element.firstChild.remove();
        element.appendChild(pane);
        this.pane = pane;
        this.element = element;
        this.tones = new (0, $bf6ef698d861fc89$export$2e2bcd8739ae039)(toneOptions);
    }
    (0, $d8e0bd28d81a04e3$export$2e2bcd8739ae039)(PolyphonicTheremin, [
        {
            key: "getOptions",
            value: function getOptions() {
                return (0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, this._options);
            }
        },
        {
            key: "applyOptions",
            value: function applyOptions(o) {
                Object.assign(this._options, o);
                this.refreshPointerElementCssAll();
            }
        },
        {
            key: "getToneOptions",
            value: function getToneOptions() {
                return this.tones.getOptions();
            }
        },
        {
            key: "applyToneOptions",
            value: function applyToneOptions(o) {
                this.tones.applyOptions(o);
            }
        },
        {
            key: "getHandlers",
            value: function getHandlers() {
                return {
                    addPointer: this.addPointer.bind(this),
                    updatePointer: this.updatePointer.bind(this),
                    removePointer: this.removePointer.bind(this)
                };
            }
        },
        {
            key: "addPointer",
            value: function addPointer(pe) {
                this.removePointer(pe);
                this.pane.addEventListener("pointermove", this.handlers.updatePointer);
                this.pane.setPointerCapture(pe.pointerId);
                var _getRelativePointerPosition = (0, $1a31c97f8b186460$export$79263550b33b988b)(pe, this.pane), relX = _getRelativePointerPosition.relX, relY = _getRelativePointerPosition.relY;
                var internalElem = document.createElement("div");
                this.refreshPointerElementCss(internalElem);
                var elem = document.createElement("div");
                elem.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($57a8c525f18472a5$exports))).pointer);
                elem.dataset.pointerId = "".concat(pe.pointerId);
                elem.appendChild(internalElem);
                this.pane.append(elem);
                this.tones.add(pe.pointerId, relX, relY);
                this.updatePointer(pe);
            }
        },
        {
            key: "updatePointer",
            value: function updatePointer(pe) {
                if (pe.buttons === 0) return;
                var id = pe.pointerId;
                var elems = $a189909cce53f31a$var$queryForPointerIdAll(this.pane, id);
                var _getRelativePointerPosition = (0, $1a31c97f8b186460$export$79263550b33b988b)(pe, this.pane), x = _getRelativePointerPosition.x, y = _getRelativePointerPosition.y, relX = _getRelativePointerPosition.relX, relY = _getRelativePointerPosition.relY;
                elems.forEach(function(e) {
                    return (0, $1a31c97f8b186460$export$f9b088a47202d605)(e, x, y);
                });
                this.tones.update(id, relX, relY);
            }
        },
        {
            key: "removePointer",
            value: function removePointer(pe) {
                var id = pe.pointerId;
                var elems = $a189909cce53f31a$var$queryForPointerIdAll(this.pane, id);
                elems.forEach(function(e) {
                    return e.remove();
                });
                this.pane.releasePointerCapture(pe.pointerId);
                this.tones.remove(id);
                if (this.tones.size === 0) this.pane.removeEventListener("pointermove", this.handlers.updatePointer);
            }
        },
        {
            key: "refreshPointerElementCss",
            value: function refreshPointerElementCss(element) {
                var _element_classList;
                var _this__options = this._options, touchElementCssClasses = _this__options.touchElementCssClasses, touchElementStyle = _this__options.touchElementStyle;
                (_element_classList = element.classList).add.apply(_element_classList, (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)(touchElementCssClasses));
                element.setAttribute("style", touchElementStyle);
            }
        },
        {
            key: "refreshPointerElementCssAll",
            value: function refreshPointerElementCssAll() {
                var elements = this.pane.querySelectorAll(".".concat((0, (/*@__PURE__*/$parcel$interopDefault($57a8c525f18472a5$exports))).pointer, " > *"));
                elements.forEach(this.refreshPointerElementCss.bind(this));
            }
        }
    ]);
    return PolyphonicTheremin;
}();



var $23085247b9f95d4c$export$2e2bcd8739ae039 = (0, $a189909cce53f31a$export$2e2bcd8739ae039);


function $89a7ff243d13e2f0$var$migrateDataAttribute(o, key, e, coerce) {
    var attributeValue = e.dataset[key];
    if (typeof attributeValue !== "undefined") // eslint-disable-next-line no-param-reassign
    o[key] = coerce(attributeValue);
}
function $89a7ff243d13e2f0$var$initMuskiThereminComponent(e) {
    var m = $89a7ff243d13e2f0$var$migrateDataAttribute;
    var o = {};
    m(o, "touchElementCssClasses", e, function(s) {
        return s.split(" ");
    });
    m(o, "touchElementStyle", e, function(s) {
        return s;
    });
    var to = {};
    m(to, "waveType", e, function(s) {
        return s;
    });
    m(to, "gainMin", e, Number.parseFloat);
    m(to, "gainMax", e, Number.parseFloat);
    m(to, "frequencyMinHz", e, Number.parseFloat);
    m(to, "frequencyMaxHz", e, Number.parseFloat);
    m(to, "attackMs", e, Number.parseFloat);
    m(to, "releaseMs", e, Number.parseFloat);
    m(to, "updateMs", e, Number.parseFloat);
    m(to, "mute", e, function(s) {
        return true;
    });
    var polyphonicTheremin = new (0, $23085247b9f95d4c$export$2e2bcd8739ae039)(e, o, to);
}
document.querySelectorAll('*[data-component="muski-theremin"]').forEach($89a7ff243d13e2f0$var$initMuskiThereminComponent);

})();
//# sourceMappingURL=muski-theremin.js.map
