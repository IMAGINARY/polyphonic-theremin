require("./index.css");
var $49SJR$swchelperslib_class_call_checkjs = require("@swc/helpers/lib/_class_call_check.js");
var $49SJR$swchelperslib_create_classjs = require("@swc/helpers/lib/_create_class.js");
var $49SJR$swchelperslib_define_propertyjs = require("@swc/helpers/lib/_define_property.js");
var $49SJR$swchelperslib_object_spreadjs = require("@swc/helpers/lib/_object_spread.js");
var $49SJR$swchelperslib_object_spread_propsjs = require("@swc/helpers/lib/_object_spread_props.js");
var $49SJR$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");
var $49SJR$swchelperslib_to_consumable_arrayjs = require("@swc/helpers/lib/_to_consumable_array.js");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $8762181023e429c8$export$2e2bcd8739ae039; });











function $aba086a96c3a6af4$export$94df19ecb868bc1a(obj, k) {
    return k in obj;
}
function $aba086a96c3a6af4$export$5638338adfdf154f(t, min, max) {
    return min + (max - min) * t;
}
function $aba086a96c3a6af4$export$61db5837c8aecee1(t, min, max) {
    // The base of the logarithm cancels out during the computation,
    // so we will just use any base, e.g. Euler's number.
    var logMin = Math.log(min);
    var logMax = Math.log(max);
    var logValue = logMin + (logMax - logMin) * t;
    return Math.exp(logValue);
}
function $aba086a96c3a6af4$export$79263550b33b988b(pe, elem) {
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
function $aba086a96c3a6af4$export$f9b088a47202d605(element, x, y) {
    var style = element.style;
    style.left = "".concat(x, "px");
    style.top = "".concat(y, "px");
}
var $aba086a96c3a6af4$export$fcbc63750ec2a81f = window.AudioContext || window.webkitAudioContext;


function $4a6fa07094503093$var$extractToneData(toneDataExt) {
    var tGain = toneDataExt.tGain, tFrequency = toneDataExt.tFrequency;
    return {
        tGain: tGain,
        tFrequency: tFrequency
    };
}
var $4a6fa07094503093$export$c3f131c7971faff7 = {
    waveType: "square",
    gainMin: 0.01,
    gainMax: 0.3,
    frequencyMinHz: 65,
    frequencyMaxHz: 3000,
    attackMs: 10,
    releaseMs: 200,
    updateMs: 10
};
var $4a6fa07094503093$var$Tones = /*#__PURE__*/ function() {
    "use strict";
    function Tones() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this = this;
        (0, ($parcel$interopDefault($49SJR$swchelperslib_class_call_checkjs)))(this, Tones);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "options", void 0);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "toneObjects", void 0);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "audioContext", void 0);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "needsRefresh", void 0);
        var optionsWithDefaults = (0, ($parcel$interopDefault($49SJR$swchelperslib_object_spreadjs)))({}, $4a6fa07094503093$export$c3f131c7971faff7, options);
        this.options = new Proxy(optionsWithDefaults, {
            set: function(target, key, newValue) {
                // The TypeScript compiler already enforces the correct type on the Proxy level,
                // so the following assignment is safe even if we can't determine the type of
                // `newValue` statically.
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,no-param-reassign
                target[key] = newValue;
                if ((0, $aba086a96c3a6af4$export$94df19ecb868bc1a)(optionsWithDefaults, key)) {
                    // update tones
                    console.log("Update!!");
                    _this.scheduleRefresh();
                }
                return true;
            }
        });
        this.toneObjects = new Map();
        this.audioContext = new (0, $aba086a96c3a6af4$export$fcbc63750ec2a81f)();
        this.needsRefresh = false;
    }
    (0, ($parcel$interopDefault($49SJR$swchelperslib_create_classjs)))(Tones, [
        {
            key: "getToneData",
            value: function getToneData() {
                var convertEntries = function(param) {
                    var _param = (0, ($parcel$interopDefault($49SJR$swchelperslib_sliced_to_arrayjs)))(param, 2), id = _param[0], t = _param[1];
                    return [
                        id,
                        $4a6fa07094503093$var$extractToneData(t)
                    ];
                };
                var entriesExt = (0, ($parcel$interopDefault($49SJR$swchelperslib_to_consumable_arrayjs)))(this.toneObjects.entries());
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
                envelopeGainNode.connect(this.audioContext.destination);
                // create Gain node
                var gainNode = this.audioContext.createGain();
                gainNode.connect(envelopeGainNode);
                // create variable-frequency Oscillator node
                var waveType = this.options.waveType;
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
                var _this_options = this.options, gainMin = _this_options.gainMin, gainMax = _this_options.gainMax;
                var gain = (0, $aba086a96c3a6af4$export$5638338adfdf154f)(tGain, gainMin, gainMax);
                var _this_options1 = this.options, frequencyMinHz = _this_options1.frequencyMinHz, frequencyMaxHz = _this_options1.frequencyMaxHz;
                var frequency = (0, $aba086a96c3a6af4$export$61db5837c8aecee1)(tFrequency, frequencyMinHz, frequencyMaxHz);
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
                var attackMs = this.options.attackMs;
                var attackTimestamp = this.audioContext.currentTime + attackMs / 1000;
                envelopeGainNode.gain.linearRampToValueAtTime(1.0, attackTimestamp);
                gainNode.gain.value = gain;
                oscillatorNode.frequency.value = frequency;
                this.remove(id);
                var toneData = (0, ($parcel$interopDefault($49SJR$swchelperslib_object_spread_propsjs)))((0, ($parcel$interopDefault($49SJR$swchelperslib_object_spreadjs)))({}, tone), {
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
                var updateMs = this.options.updateMs;
                if (updateMs <= 0) {
                    gainNode.gain.value = gain;
                    oscillatorNode.frequency.value = frequency;
                } else {
                    var updateDoneTimestamp = this.audioContext.currentTime + updateMs / 1000.0;
                    gainNode.gain.linearRampToValueAtTime(gain, updateDoneTimestamp);
                    oscillatorNode.frequency.linearRampToValueAtTime(frequency, updateDoneTimestamp);
                }
            }
        },
        {
            key: "remove",
            value: function remove(id) {
                var toneData = this.toneObjects.get(id);
                if (!toneData) return;
                var envelopeGainNode = toneData.envelopeGainNode, gainNode = toneData.gainNode, oscillatorNode = toneData.oscillatorNode;
                var releaseMs = this.options.releaseMs;
                var decayTimestamp = this.audioContext.currentTime + releaseMs / 1000;
                envelopeGainNode.gain.linearRampToValueAtTime(0.0, decayTimestamp);
                setTimeout(function() {
                    gainNode.disconnect();
                    oscillatorNode.stop();
                    oscillatorNode.disconnect();
                }, releaseMs);
                this.toneObjects.delete(id);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                (0, ($parcel$interopDefault($49SJR$swchelperslib_to_consumable_arrayjs)))(this.toneObjects.values()).forEach(function(t) {
                    return _this.refreshNodes(t);
                });
            }
        },
        {
            key: "scheduleRefresh",
            value: function scheduleRefresh() {
                var _this = this;
                this.needsRefresh = true;
                this.needsRefresh = true;
                queueMicrotask(function() {
                    return _this.refreshIfNeeded();
                });
            }
        },
        {
            key: "refreshIfNeeded",
            value: function refreshIfNeeded() {
                if (this.needsRefresh) {
                    this.refresh();
                    return true;
                }
                return false;
            }
        }
    ]);
    return Tones;
}();
var $4a6fa07094503093$export$2e2bcd8739ae039 = $4a6fa07094503093$var$Tones;



function $75f0e964df14042f$var$queryForPointerIdAll(parent, id) {
    return parent.querySelectorAll(".".concat((0, {}).pointer, '[data-pointer-id="').concat(id, '"]'));
}
var $75f0e964df14042f$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function PolyphonicTheremin(element) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, ($parcel$interopDefault($49SJR$swchelperslib_class_call_checkjs)))(this, PolyphonicTheremin);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "tones", void 0);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "handlers", this.getHandlers());
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "element", void 0);
        (0, ($parcel$interopDefault($49SJR$swchelperslib_define_propertyjs)))(this, "pane", void 0);
        var pane = document.createElement("div");
        pane.classList.add((0, {}).pane);
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
        this.tones = new (0, $4a6fa07094503093$export$2e2bcd8739ae039)(options);
    }
    (0, ($parcel$interopDefault($49SJR$swchelperslib_create_classjs)))(PolyphonicTheremin, [
        {
            key: "options",
            get: function get() {
                return this.tones.options;
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
                var _getRelativePointerPosition = (0, $aba086a96c3a6af4$export$79263550b33b988b)(pe, this.pane), relX = _getRelativePointerPosition.relX, relY = _getRelativePointerPosition.relY;
                var internalElem = document.createElement("div");
                var elem = document.createElement("div");
                elem.classList.add((0, {}).pointer);
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
                var elems = $75f0e964df14042f$var$queryForPointerIdAll(this.pane, id);
                var _getRelativePointerPosition = (0, $aba086a96c3a6af4$export$79263550b33b988b)(pe, this.pane), x = _getRelativePointerPosition.x, y = _getRelativePointerPosition.y, relX = _getRelativePointerPosition.relX, relY = _getRelativePointerPosition.relY;
                elems.forEach(function(e) {
                    return (0, $aba086a96c3a6af4$export$f9b088a47202d605)(e, x, y);
                });
                this.tones.update(id, relX, relY);
            }
        },
        {
            key: "removePointer",
            value: function removePointer(pe) {
                var id = pe.pointerId;
                var elems = $75f0e964df14042f$var$queryForPointerIdAll(this.pane, id);
                elems.forEach(function(e) {
                    return e.remove();
                });
                this.pane.releasePointerCapture(pe.pointerId);
                this.tones.remove(id);
                if (this.tones.size) this.pane.removeEventListener("pointermove", this.handlers.updatePointer);
            }
        }
    ]);
    return PolyphonicTheremin;
}();


var $8762181023e429c8$export$2e2bcd8739ae039 = (0, $75f0e964df14042f$export$2e2bcd8739ae039);


//# sourceMappingURL=index.js.map
