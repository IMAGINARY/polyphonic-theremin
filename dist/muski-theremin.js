(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $fb01605c656f925a$exports = {};
/*!
 * PEP v0.5.1 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */ (function(global, factory) {
    $fb01605c656f925a$exports = factory();
})($fb01605c656f925a$exports, function() {
    "use strict";
    var PointerEvent = function PointerEvent(inType, inDict) {
        inDict = inDict || Object.create(null);
        var e = document.createEvent("Event");
        e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);
        // define inherited MouseEvent properties
        // skip bubbles and cancelable since they're set above in initEvent()
        for(var i = 2, p; i < MOUSE_PROPS.length; i++){
            p = MOUSE_PROPS[i];
            e[p] = inDict[p] || MOUSE_DEFAULTS[i];
        }
        e.buttons = inDict.buttons || 0;
        // Spec requires that pointers without pressure specified use 0.5 for down
        // state and 0 for up state.
        var pressure = 0;
        if (inDict.pressure !== undefined && e.buttons) pressure = inDict.pressure;
        else pressure = e.buttons ? 0.5 : 0;
        // add x/y properties aliased to clientX/Y
        e.x = e.clientX;
        e.y = e.clientY;
        // define the properties of the PointerEvent interface
        e.pointerId = inDict.pointerId || 0;
        e.width = inDict.width || 1;
        e.height = inDict.height || 1;
        e.pressure = pressure;
        e.tiltX = inDict.tiltX || 0;
        e.tiltY = inDict.tiltY || 0;
        e.twist = inDict.twist || 0;
        e.tangentialPressure = inDict.tangentialPressure || 0;
        e.pointerType = inDict.pointerType || "";
        e.hwTimestamp = inDict.hwTimestamp || 0;
        e.isPrimary = inDict.isPrimary || false;
        e.detail = 0;
        return e;
    };
    var SparseArrayMap = function SparseArrayMap() {
        this.array = [];
        this.size = 0;
    };
    var Installer = function Installer(add, remove, changed, binder) {
        this.addCallback = add.bind(binder);
        this.removeCallback = remove.bind(binder);
        this.changedCallback = changed.bind(binder);
        if (MO) this.observer = new MO(this.mutationWatcher.bind(this));
    };
    var shadowSelector = function shadowSelector(s) {
        return "body /shadow-deep/ " + s;
    };
    var rule = function rule(v) {
        return "{ -ms-touch-action: " + v + "; touch-action: " + v + "; }";
    };
    var applyAttributeStyles = function applyAttributeStyles() {
        if (hasNativePE) {
            attrib2css.forEach(function(r) {
                styles += r.selector + rule(r.value) + "\n";
                if (hasShadowRoot) styles += shadowSelector(r.selector) + rule(r.value) + "\n";
            });
            var el = document.createElement("style");
            el.textContent = styles;
            document.head.appendChild(el);
        }
    };
    var applyPolyfill = function applyPolyfill() {
        // only activate if this platform does not have pointer events
        if (!window.PointerEvent) {
            window.PointerEvent = PointerEvent;
            if (window.navigator.msPointerEnabled) {
                var tp = window.navigator.msMaxTouchPoints;
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                    value: tp,
                    enumerable: true
                });
                dispatcher.registerSource("ms", msEvents);
            } else {
                Object.defineProperty(window.navigator, "maxTouchPoints", {
                    value: 0,
                    enumerable: true
                });
                dispatcher.registerSource("mouse", mouseEvents);
                if (window.ontouchstart !== undefined) dispatcher.registerSource("touch", touchEvents);
            }
            dispatcher.register(document);
        }
    };
    var assertActive = function assertActive(id) {
        if (!dispatcher.pointermap.has(id)) {
            var error = new Error("NotFoundError");
            error.name = "NotFoundError";
            throw error;
        }
    };
    var assertConnected = function assertConnected(elem) {
        var parent = elem.parentNode;
        while(parent && parent !== elem.ownerDocument)parent = parent.parentNode;
        if (!parent) {
            var error = new Error("InvalidStateError");
            error.name = "InvalidStateError";
            throw error;
        }
    };
    var inActiveButtonState = function inActiveButtonState(id) {
        var p = dispatcher.pointermap.get(id);
        return p.buttons !== 0;
    };
    var applyPolyfill$1 = function applyPolyfill$1() {
        if (window.Element && !window.Element.prototype.setPointerCapture) Object.defineProperties(window.Element.prototype, {
            "setPointerCapture": {
                value: s
            },
            "releasePointerCapture": {
                value: r
            },
            "hasPointerCapture": {
                value: h
            }
        });
    };
    /**
   * This is the constructor for new PointerEvents.
   *
   * New Pointer Events must be given a type, and an optional dictionary of
   * initialization properties.
   *
   * Due to certain platform requirements, events returned from the constructor
   * identify as MouseEvents.
   *
   * @constructor
   * @param {String} inType The type of the event to create.
   * @param {Object} [inDict] An optional dictionary of initial event properties.
   * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
   */ var MOUSE_PROPS = [
        "bubbles",
        "cancelable",
        "view",
        "screenX",
        "screenY",
        "clientX",
        "clientY",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "button",
        "relatedTarget",
        "pageX",
        "pageY"
    ];
    var MOUSE_DEFAULTS = [
        false,
        false,
        null,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
        0,
        0
    ];
    /**
   * This module implements a map of pointer states
   */ var USE_MAP = window.Map && window.Map.prototype.forEach;
    var PointerMap = USE_MAP ? Map : SparseArrayMap;
    SparseArrayMap.prototype = {
        set: function set(k, v) {
            if (v === undefined) return this.delete(k);
            if (!this.has(k)) this.size++;
            this.array[k] = v;
        },
        has: function has(k) {
            return this.array[k] !== undefined;
        },
        delete: function _delete(k) {
            if (this.has(k)) {
                delete this.array[k];
                this.size--;
            }
        },
        get: function get(k) {
            return this.array[k];
        },
        clear: function clear() {
            this.array.length = 0;
            this.size = 0;
        },
        // return value, key, map
        forEach: function forEach(callback, thisArg) {
            return this.array.forEach(function(v, k) {
                callback.call(thisArg, v, k, this);
            }, this);
        }
    };
    var CLONE_PROPS = [
        // MouseEvent
        "bubbles",
        "cancelable",
        "view",
        "detail",
        "screenX",
        "screenY",
        "clientX",
        "clientY",
        "ctrlKey",
        "altKey",
        "shiftKey",
        "metaKey",
        "button",
        "relatedTarget",
        // DOM Level 3
        "buttons",
        // PointerEvent
        "pointerId",
        "width",
        "height",
        "pressure",
        "tiltX",
        "tiltY",
        "pointerType",
        "hwTimestamp",
        "isPrimary",
        // event instance
        "type",
        "target",
        "currentTarget",
        "which",
        "pageX",
        "pageY",
        "timeStamp"
    ];
    var CLONE_DEFAULTS = [
        // MouseEvent
        false,
        false,
        null,
        null,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
        // DOM Level 3
        0,
        // PointerEvent
        0,
        0,
        0,
        0,
        0,
        0,
        "",
        0,
        false,
        // event instance
        "",
        null,
        null,
        0,
        0,
        0,
        0
    ];
    var BOUNDARY_EVENTS = {
        "pointerover": 1,
        "pointerout": 1,
        "pointerenter": 1,
        "pointerleave": 1
    };
    var HAS_SVG_INSTANCE = typeof SVGElementInstance !== "undefined";
    /**
   * This module is for normalizing events. Mouse and Touch events will be
   * collected here, and fire PointerEvents that have the same semantics, no
   * matter the source.
   * Events fired:
   *   - pointerdown: a pointing is added
   *   - pointerup: a pointer is removed
   *   - pointermove: a pointer is moved
   *   - pointerover: a pointer crosses into an element
   *   - pointerout: a pointer leaves an element
   *   - pointercancel: a pointer will no longer generate events
   */ var dispatcher = {
        pointermap: new PointerMap(),
        eventMap: Object.create(null),
        captureInfo: Object.create(null),
        // Scope objects for native events.
        // This exists for ease of testing.
        eventSources: Object.create(null),
        eventSourceList: [],
        /**
     * Add a new event source that will generate pointer events.
     *
     * `inSource` must contain an array of event names named `events`, and
     * functions with the names specified in the `events` array.
     * @param {string} name A name for the event source
     * @param {Object} source A new source of platform events.
     */ registerSource: function registerSource(name, source) {
            var s = source;
            var newEvents = s.events;
            if (newEvents) {
                newEvents.forEach(function(e) {
                    if (s[e]) this.eventMap[e] = s[e].bind(s);
                }, this);
                this.eventSources[name] = s;
                this.eventSourceList.push(s);
            }
        },
        register: function register(element) {
            var l = this.eventSourceList.length;
            for(var i = 0, es; i < l && (es = this.eventSourceList[i]); i++)// call eventsource register
            es.register.call(es, element);
        },
        unregister: function unregister(element) {
            var l = this.eventSourceList.length;
            for(var i = 0, es; i < l && (es = this.eventSourceList[i]); i++)// call eventsource register
            es.unregister.call(es, element);
        },
        contains: /*scope.external.contains || */ function contains(container, contained) {
            try {
                return container.contains(contained);
            } catch (ex) {
                // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
                return false;
            }
        },
        // EVENTS
        down: function down(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointerdown", inEvent);
        },
        move: function move(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointermove", inEvent);
        },
        up: function up(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointerup", inEvent);
        },
        enter: function enter(inEvent) {
            inEvent.bubbles = false;
            this.fireEvent("pointerenter", inEvent);
        },
        leave: function leave(inEvent) {
            inEvent.bubbles = false;
            this.fireEvent("pointerleave", inEvent);
        },
        over: function over(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointerover", inEvent);
        },
        out: function out(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointerout", inEvent);
        },
        cancel: function cancel(inEvent) {
            inEvent.bubbles = true;
            this.fireEvent("pointercancel", inEvent);
        },
        leaveOut: function leaveOut(event) {
            this.out(event);
            this.propagate(event, this.leave, false);
        },
        enterOver: function enterOver(event) {
            this.over(event);
            this.propagate(event, this.enter, true);
        },
        // LISTENER LOGIC
        eventHandler: function eventHandler(inEvent) {
            // This is used to prevent multiple dispatch of pointerevents from
            // platform events. This can happen when two elements in different scopes
            // are set up to create pointer events, which is relevant to Shadow DOM.
            if (inEvent._handledByPE) return;
            var type = inEvent.type;
            var fn = this.eventMap && this.eventMap[type];
            if (fn) fn(inEvent);
            inEvent._handledByPE = true;
        },
        // set up event listeners
        listen: function listen(target, events) {
            events.forEach(function(e) {
                this.addEvent(target, e);
            }, this);
        },
        // remove event listeners
        unlisten: function unlisten(target, events) {
            events.forEach(function(e) {
                this.removeEvent(target, e);
            }, this);
        },
        addEvent: /*scope.external.addEvent || */ function addEvent(target, eventName) {
            target.addEventListener(eventName, this.boundHandler);
        },
        removeEvent: /*scope.external.removeEvent || */ function removeEvent(target, eventName) {
            target.removeEventListener(eventName, this.boundHandler);
        },
        // EVENT CREATION AND TRACKING
        /**
     * Creates a new Event of type `inType`, based on the information in
     * `inEvent`.
     *
     * @param {string} inType A string representing the type of event to create
     * @param {Event} inEvent A platform event with a target
     * @return {Event} A PointerEvent of type `inType`
     */ makeEvent: function makeEvent(inType, inEvent) {
            // relatedTarget must be null if pointer is captured
            if (this.captureInfo[inEvent.pointerId]) inEvent.relatedTarget = null;
            var e = new PointerEvent(inType, inEvent);
            if (inEvent.preventDefault) e.preventDefault = inEvent.preventDefault;
            e._target = e._target || inEvent.target;
            return e;
        },
        // make and dispatch an event in one call
        fireEvent: function fireEvent(inType, inEvent) {
            var e = this.makeEvent(inType, inEvent);
            return this.dispatchEvent(e);
        },
        /**
     * Returns a snapshot of inEvent, with writable properties.
     *
     * @param {Event} inEvent An event that contains properties to copy.
     * @return {Object} An object containing shallow copies of `inEvent`'s
     *    properties.
     */ cloneEvent: function cloneEvent(inEvent) {
            var eventCopy = Object.create(null);
            var p;
            for(var i = 0; i < CLONE_PROPS.length; i++){
                p = CLONE_PROPS[i];
                eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];
                // Work around SVGInstanceElement shadow tree
                // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
                // This is the behavior implemented by Firefox.
                if (HAS_SVG_INSTANCE && (p === "target" || p === "relatedTarget")) {
                    if (eventCopy[p] instanceof SVGElementInstance) eventCopy[p] = eventCopy[p].correspondingUseElement;
                }
            }
            // keep the semantics of preventDefault
            if (inEvent.preventDefault) eventCopy.preventDefault = function() {
                inEvent.preventDefault();
            };
            return eventCopy;
        },
        getTarget: function getTarget(inEvent) {
            var capture = this.captureInfo[inEvent.pointerId];
            if (!capture) return inEvent._target;
            if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) return capture;
        },
        propagate: function propagate(event, fn, propagateDown) {
            var target = event.target;
            var targets = [];
            // Order of conditions due to document.contains() missing in IE.
            while(target != null && target !== document && !target.contains(event.relatedTarget)){
                targets.push(target);
                target = target.parentNode;
                // Touch: Do not propagate if node is detached.
                if (!target) return;
            }
            if (propagateDown) targets.reverse();
            targets.forEach(function(target) {
                event.target = target;
                fn.call(this, event);
            }, this);
        },
        setCapture: function setCapture(inPointerId, inTarget, skipDispatch) {
            if (this.captureInfo[inPointerId]) this.releaseCapture(inPointerId, skipDispatch);
            this.captureInfo[inPointerId] = inTarget;
            this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
            document.addEventListener("pointerup", this.implicitRelease);
            document.addEventListener("pointercancel", this.implicitRelease);
            var e = new PointerEvent("gotpointercapture", {
                bubbles: true
            });
            e.pointerId = inPointerId;
            e._target = inTarget;
            if (!skipDispatch) this.asyncDispatchEvent(e);
        },
        releaseCapture: function releaseCapture(inPointerId, skipDispatch) {
            var t = this.captureInfo[inPointerId];
            if (!t) return;
            this.captureInfo[inPointerId] = undefined;
            document.removeEventListener("pointerup", this.implicitRelease);
            document.removeEventListener("pointercancel", this.implicitRelease);
            var e = new PointerEvent("lostpointercapture", {
                bubbles: true
            });
            e.pointerId = inPointerId;
            e._target = t;
            if (!skipDispatch) this.asyncDispatchEvent(e);
        },
        /**
     * Dispatches the event to its target.
     *
     * @param {Event} inEvent The event to be dispatched.
     * @return {Boolean} True if an event handler returns true, false otherwise.
     */ dispatchEvent: /*scope.external.dispatchEvent || */ function dispatchEvent(inEvent) {
            var t = this.getTarget(inEvent);
            if (t) return t.dispatchEvent(inEvent);
        },
        asyncDispatchEvent: function asyncDispatchEvent(inEvent) {
            requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
        }
    };
    dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);
    var targeting = {
        shadow: function shadow(inEl) {
            if (inEl) return inEl.shadowRoot || inEl.webkitShadowRoot;
        },
        canTarget: function canTarget(shadow) {
            return shadow && Boolean(shadow.elementFromPoint);
        },
        targetingShadow: function targetingShadow(inEl) {
            var s = this.shadow(inEl);
            if (this.canTarget(s)) return s;
        },
        olderShadow: function olderShadow(shadow) {
            var os = shadow.olderShadowRoot;
            if (!os) {
                var se = shadow.querySelector("shadow");
                if (se) os = se.olderShadowRoot;
            }
            return os;
        },
        allShadows: function allShadows(element) {
            var shadows = [];
            var s = this.shadow(element);
            while(s){
                shadows.push(s);
                s = this.olderShadow(s);
            }
            return shadows;
        },
        searchRoot: function searchRoot(inRoot, x, y) {
            if (inRoot) {
                var t = inRoot.elementFromPoint(x, y);
                var st, sr;
                // is element a shadow host?
                sr = this.targetingShadow(t);
                while(sr){
                    // find the the element inside the shadow root
                    st = sr.elementFromPoint(x, y);
                    if (!st) // check for older shadows
                    sr = this.olderShadow(sr);
                    else {
                        // shadowed element may contain a shadow root
                        var ssr = this.targetingShadow(st);
                        return this.searchRoot(ssr, x, y) || st;
                    }
                }
                // light dom element is the target
                return t;
            }
        },
        owner: function owner(element) {
            var s = element;
            // walk up until you hit the shadow root or document
            while(s.parentNode)s = s.parentNode;
            // the owner element is expected to be a Document or ShadowRoot
            if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) s = document;
            return s;
        },
        findTarget: function findTarget(inEvent) {
            var x = inEvent.clientX;
            var y = inEvent.clientY;
            // if the listener is in the shadow root, it is much faster to start there
            var s = this.owner(inEvent.target);
            // if x, y is not in this root, fall back to document search
            if (!s.elementFromPoint(x, y)) s = document;
            return this.searchRoot(s, x, y);
        }
    };
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    var map = Array.prototype.map.call.bind(Array.prototype.map);
    var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
    var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
    var MO = window.MutationObserver || window.WebKitMutationObserver;
    var SELECTOR = "[touch-action]";
    var OBSERVER_INIT = {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: [
            "touch-action"
        ]
    };
    Installer.prototype = {
        watchSubtree: function watchSubtree(target) {
            // Only watch scopes that can target find, as these are top-level.
            // Otherwise we can see duplicate additions and removals that add noise.
            //
            // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
            // a removal without an insertion when a node is redistributed among
            // shadows. Since it all ends up correct in the document, watching only
            // the document will yield the correct mutations to watch.
            if (this.observer && targeting.canTarget(target)) this.observer.observe(target, OBSERVER_INIT);
        },
        enableOnSubtree: function enableOnSubtree(target) {
            this.watchSubtree(target);
            if (target === document && document.readyState !== "complete") this.installOnLoad();
            else this.installNewSubtree(target);
        },
        installNewSubtree: function installNewSubtree(target) {
            forEach(this.findElements(target), this.addElement, this);
        },
        findElements: function findElements(target) {
            if (target.querySelectorAll) return target.querySelectorAll(SELECTOR);
            return [];
        },
        removeElement: function removeElement(el) {
            this.removeCallback(el);
        },
        addElement: function addElement(el) {
            this.addCallback(el);
        },
        elementChanged: function elementChanged(el, oldValue) {
            this.changedCallback(el, oldValue);
        },
        concatLists: function concatLists(accum, list) {
            return accum.concat(toArray(list));
        },
        // register all touch-action = none nodes on document load
        installOnLoad: function installOnLoad() {
            document.addEventListener("readystatechange", (function() {
                if (document.readyState === "complete") this.installNewSubtree(document);
            }).bind(this));
        },
        isElement: function isElement(n) {
            return n.nodeType === Node.ELEMENT_NODE;
        },
        flattenMutationTree: function flattenMutationTree(inNodes) {
            // find children with touch-action
            var tree = map(inNodes, this.findElements, this);
            // make sure the added nodes are accounted for
            tree.push(filter(inNodes, this.isElement));
            // flatten the list
            return tree.reduce(this.concatLists, []);
        },
        mutationWatcher: function mutationWatcher(mutations) {
            mutations.forEach(this.mutationHandler, this);
        },
        mutationHandler: function mutationHandler(m) {
            if (m.type === "childList") {
                var added = this.flattenMutationTree(m.addedNodes);
                added.forEach(this.addElement, this);
                var removed = this.flattenMutationTree(m.removedNodes);
                removed.forEach(this.removeElement, this);
            } else if (m.type === "attributes") this.elementChanged(m.target, m.oldValue);
        }
    };
    var attrib2css = [
        {
            selector: '[touch-action="none"]',
            value: "none"
        },
        {
            selector: '[touch-action="auto"]',
            value: "auto"
        },
        {
            selector: '[touch-action~="pan-x"]',
            value: "pan-x"
        },
        {
            selector: '[touch-action~="pan-y"]',
            value: "pan-y"
        },
        {
            selector: '[touch-action~="pan-up"]',
            value: "pan-up"
        },
        {
            selector: '[touch-action~="pan-down"]',
            value: "pan-down"
        },
        {
            selector: '[touch-action~="pan-left"]',
            value: "pan-left"
        },
        {
            selector: '[touch-action~="pan-right"]',
            value: "pan-right"
        }
    ];
    var styles = "";
    // only install stylesheet if the browser has touch action support
    var hasNativePE = window.PointerEvent || window.MSPointerEvent;
    // only add shadow selectors if shadowdom is supported
    var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;
    var pointermap = dispatcher.pointermap;
    // radius around touchend that swallows mouse events
    var DEDUP_DIST = 25;
    // left, middle, right, back, forward
    var BUTTON_TO_BUTTONS = [
        1,
        4,
        2,
        8,
        16
    ];
    var HAS_BUTTONS = false;
    try {
        HAS_BUTTONS = new MouseEvent("test", {
            buttons: 1
        }).buttons === 1;
    } catch (e) {}
    // handler block for native mouse events
    var mouseEvents = {
        POINTER_ID: 1,
        POINTER_TYPE: "mouse",
        events: [
            "mousedown",
            "webkitmouseforcechanged",
            "mousemove",
            "mouseup",
            "mouseover",
            "mouseout"
        ],
        register: function register(target) {
            dispatcher.listen(target, this.events);
        },
        unregister: function unregister(target) {
            dispatcher.unlisten(target, this.events);
        },
        lastTouches: [],
        // collide with the global mouse listener
        isEventSimulatedFromTouch: function isEventSimulatedFromTouch(inEvent) {
            var lts = this.lastTouches;
            var x = inEvent.clientX;
            var y = inEvent.clientY;
            for(var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++){
                // simulated mouse events will be swallowed near a primary touchend
                var dx = Math.abs(x - t.x);
                var dy = Math.abs(y - t.y);
                if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) return true;
            }
        },
        prepareEvent: function prepareEvent(inEvent) {
            var e = dispatcher.cloneEvent(inEvent);
            // forward mouse preventDefault
            var pd = e.preventDefault;
            e.preventDefault = function() {
                inEvent.preventDefault();
                pd();
            };
            e.pointerId = this.POINTER_ID;
            e.isPrimary = true;
            e.pointerType = this.POINTER_TYPE;
            if ("webkitForce" in inEvent) e.pressure = inEvent.webkitForce - MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN;
            return e;
        },
        prepareButtonsForMove: function prepareButtonsForMove(e, inEvent) {
            var p = pointermap.get(this.POINTER_ID);
            // Update buttons state after possible out-of-document mouseup.
            if (inEvent.which === 0 || !p) e.buttons = 0;
            else e.buttons = p.buttons;
            inEvent.buttons = e.buttons;
        },
        mousedown: function mousedown(inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var p = pointermap.get(this.POINTER_ID);
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    e.buttons = BUTTON_TO_BUTTONS[e.button];
                    if (p) e.buttons |= p.buttons;
                    inEvent.buttons = e.buttons;
                }
                pointermap.set(this.POINTER_ID, inEvent);
                if (!p || p.buttons === 0) dispatcher.down(e);
                else dispatcher.move(e);
            }
        },
        // This is called when the user force presses without moving x/y
        webkitmouseforcechanged: function webkitmouseforcechanged(inEvent) {
            this.mousemove(inEvent);
        },
        mousemove: function mousemove(inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) this.prepareButtonsForMove(e, inEvent);
                e.button = -1;
                pointermap.set(this.POINTER_ID, inEvent);
                dispatcher.move(e);
            }
        },
        mouseup: function mouseup(inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var p = pointermap.get(this.POINTER_ID);
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    var up = BUTTON_TO_BUTTONS[e.button];
                    // Produces wrong state of buttons in Browsers without `buttons` support
                    // when a mouse button that was pressed outside the document is released
                    // inside and other buttons are still pressed down.
                    e.buttons = p ? p.buttons & ~up : 0;
                    inEvent.buttons = e.buttons;
                }
                pointermap.set(this.POINTER_ID, inEvent);
                // Support: Firefox <=44 only
                // FF Ubuntu includes the lifted button in the `buttons` property on
                // mouseup.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
                e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
                if (e.buttons === 0) dispatcher.up(e);
                else dispatcher.move(e);
            }
        },
        mouseover: function mouseover(inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) this.prepareButtonsForMove(e, inEvent);
                e.button = -1;
                pointermap.set(this.POINTER_ID, inEvent);
                dispatcher.enterOver(e);
            }
        },
        mouseout: function mouseout(inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) this.prepareButtonsForMove(e, inEvent);
                e.button = -1;
                dispatcher.leaveOut(e);
            }
        },
        cancel: function cancel(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.cancel(e);
            this.deactivateMouse();
        },
        deactivateMouse: function deactivateMouse() {
            pointermap.delete(this.POINTER_ID);
        }
    };
    var captureInfo = dispatcher.captureInfo;
    var findTarget = targeting.findTarget.bind(targeting);
    var allShadows = targeting.allShadows.bind(targeting);
    var pointermap$1 = dispatcher.pointermap;
    // this should be long enough to ignore compat mouse events made by touch
    var DEDUP_TIMEOUT = 2500;
    var ATTRIB = "touch-action";
    var INSTALLER;
    // bitmask for _scrollType
    var UP = 1;
    var DOWN = 2;
    var LEFT = 4;
    var RIGHT = 8;
    var AUTO = UP | DOWN | LEFT | RIGHT;
    // handler block for native touch events
    var touchEvents = {
        events: [
            "touchstart",
            "touchmove",
            "touchforcechange",
            "touchend",
            "touchcancel"
        ],
        register: function register(target) {
            INSTALLER.enableOnSubtree(target);
        },
        unregister: function unregister() {
        // TODO(dfreedman): is it worth it to disconnect the MO?
        },
        elementAdded: function elementAdded(el) {
            var a = el.getAttribute(ATTRIB);
            var st = this.touchActionToScrollType(a);
            if (typeof st === "number") {
                el._scrollType = st;
                dispatcher.listen(el, this.events);
                // set touch-action on shadows as well
                allShadows(el).forEach(function(s) {
                    s._scrollType = st;
                    dispatcher.listen(s, this.events);
                }, this);
            }
        },
        elementRemoved: function elementRemoved(el) {
            // In some cases, an element is removed before a touchend.
            // When this is the case, we should wait for the touchend before unlistening,
            // because we still want pointer events to bubble up after removing from DOM.
            if (pointermap$1.size > 0) {
                var evts = this.events;
                el.addEventListener("touchend", function() {
                    el._scrollType = undefined;
                    dispatcher.unlisten(el, evts);
                });
            } else {
                el._scrollType = undefined;
                dispatcher.unlisten(el, this.events);
            }
            // remove touch-action from shadow
            allShadows(el).forEach(function(s) {
                s._scrollType = undefined;
                dispatcher.unlisten(s, this.events);
            }, this);
        },
        elementChanged: function elementChanged(el, oldValue) {
            var a = el.getAttribute(ATTRIB);
            var st = this.touchActionToScrollType(a);
            var oldSt = this.touchActionToScrollType(oldValue);
            // simply update scrollType if listeners are already established
            if (typeof st === "number" && typeof oldSt === "number") {
                el._scrollType = st;
                allShadows(el).forEach(function(s) {
                    s._scrollType = st;
                }, this);
            } else if (typeof oldSt === "number") this.elementRemoved(el);
            else if (typeof st === "number") this.elementAdded(el);
        },
        scrollTypes: {
            UP: function UP1(s) {
                return s.includes("pan-y") || s.includes("pan-up") ? UP : 0;
            },
            DOWN: function DOWN1(s) {
                return s.includes("pan-y") || s.includes("pan-down") ? DOWN : 0;
            },
            LEFT: function LEFT1(s) {
                return s.includes("pan-x") || s.includes("pan-left") ? LEFT : 0;
            },
            RIGHT: function RIGHT1(s) {
                return s.includes("pan-x") || s.includes("pan-right") ? RIGHT : 0;
            }
        },
        touchActionToScrollType: function touchActionToScrollType(touchAction) {
            if (!touchAction) return;
            if (touchAction === "auto") return AUTO;
            if (touchAction === "none") return 0;
            var s = touchAction.split(" ");
            var st = this.scrollTypes;
            // construct a bitmask of allowed scroll directions
            return st.UP(s) | st.DOWN(s) | st.LEFT(s) | st.RIGHT(s);
        },
        POINTER_TYPE: "touch",
        firstTouch: null,
        isPrimaryTouch: function isPrimaryTouch(inTouch) {
            return this.firstTouch === inTouch.identifier;
        },
        setPrimaryTouch: function setPrimaryTouch(inTouch) {
            // set primary touch if there no pointers, or the only pointer is the mouse
            if (pointermap$1.size === 0 || pointermap$1.size === 1 && pointermap$1.has(1)) {
                this.firstTouch = inTouch.identifier;
                this.firstXY = {
                    X: inTouch.clientX,
                    Y: inTouch.clientY
                };
                this.scrolling = false;
            }
        },
        removePrimaryPointer: function removePrimaryPointer(inPointer) {
            if (inPointer.isPrimary) {
                this.firstTouch = null;
                this.firstXY = null;
            }
        },
        typeToButtons: function typeToButtons(type) {
            var ret = 0;
            if (type === "touchstart" || type === "touchmove" || type === "touchforcechange") ret = 1;
            return ret;
        },
        touchToPointer: function touchToPointer(inTouch) {
            var cte = this.currentTouchEvent;
            var e = dispatcher.cloneEvent(inTouch);
            // We reserve pointerId 1 for Mouse.
            // Touch identifiers can start at 0.
            // Add 2 to the touch identifier for compatibility.
            var id = e.pointerId = inTouch.identifier + 2;
            e.target = captureInfo[id] || findTarget(e);
            e.bubbles = true;
            e.cancelable = true;
            e.button = 0;
            e.buttons = this.typeToButtons(cte.type);
            e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
            e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
            e.pressure = inTouch.force !== undefined ? inTouch.force : inTouch.webkitForce !== undefined ? inTouch.webkitForce : undefined;
            e.isPrimary = this.isPrimaryTouch(inTouch);
            if (inTouch.altitudeAngle) {
                var tan = Math.tan(inTouch.altitudeAngle);
                var radToDeg = 180 / Math.PI;
                e.tiltX = Math.atan(Math.cos(inTouch.azimuthAngle) / tan) * radToDeg;
                e.tiltY = Math.atan(Math.sin(inTouch.azimuthAngle) / tan) * radToDeg;
            } else {
                e.tiltX = 0;
                e.tiltY = 0;
            }
            if (inTouch.touchType === "stylus") e.pointerType = "pen";
            else e.pointerType = this.POINTER_TYPE;
            // forward modifier keys
            e.altKey = cte.altKey;
            e.ctrlKey = cte.ctrlKey;
            e.metaKey = cte.metaKey;
            e.shiftKey = cte.shiftKey;
            // forward touch preventDefaults
            var self = this;
            e.preventDefault = function() {
                self.scrolling = false;
                self.firstXY = null;
                cte.preventDefault();
            };
            return e;
        },
        processTouches: function processTouches(inEvent, inFunction) {
            var tl = inEvent.changedTouches;
            this.currentTouchEvent = inEvent;
            for(var i = 0, t; i < tl.length; i++){
                t = tl[i];
                inFunction.call(this, this.touchToPointer(t));
            }
        },
        // For single axis scrollers, determines whether the element should emit
        // pointer events or behave as a scroller
        shouldScroll: function shouldScroll(inEvent) {
            if (this.firstXY) {
                var ret;
                var st = inEvent.currentTarget._scrollType;
                if (st === 0) // this element is a `touch-action: none`, should never scroll
                ret = false;
                else if (st === AUTO) // this element is a `touch-action: auto`, should always scroll
                ret = true;
                else {
                    var t = inEvent.changedTouches[0];
                    var dy = t.clientY - this.firstXY.Y;
                    var dya = Math.abs(dy);
                    var dx = t.clientX - this.firstXY.X;
                    var dxa = Math.abs(dx);
                    var up = st & UP;
                    var down = st & DOWN;
                    var left = st & LEFT;
                    var right = st & RIGHT;
                    if (left && right) // should scroll on the x axis
                    ret = dxa > dya;
                    else if (left) // should scroll left
                    ret = dxa > dya && dx > 0;
                    else if (right) // should scroll right
                    ret = dxa > dya && dx < 0;
                    if (!ret) {
                        if (up && down) // should scroll on the y axis
                        ret = dxa < dya;
                        else if (up) // should scroll up
                        ret = dxa < dya && dy > 0;
                        else if (down) // should scroll down
                        ret = dxa < dya && dy < 0;
                    }
                }
                this.firstXY = null;
                return ret;
            }
        },
        findTouch: function findTouch(inTL, inId) {
            for(var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++){
                if (t.identifier === inId) return true;
            }
        },
        // In some instances, a touchstart can happen without a touchend. This
        // leaves the pointermap in a broken state.
        // Therefore, on every touchstart, we remove the touches that did not fire a
        // touchend event.
        // To keep state globally consistent, we fire a
        // pointercancel for this "abandoned" touch
        vacuumTouches: function vacuumTouches(inEvent) {
            var tl = inEvent.touches;
            // pointermap.size should be < tl.length here, as the touchstart has not
            // been processed yet.
            if (pointermap$1.size >= tl.length) {
                var d = [];
                pointermap$1.forEach(function(value, key) {
                    // Never remove pointerId == 1, which is mouse.
                    // Touch identifiers are 2 smaller than their pointerId, which is the
                    // index in pointermap.
                    if (key !== 1 && !this.findTouch(tl, key - 2)) {
                        var p = value.out;
                        d.push(p);
                    }
                }, this);
                d.forEach(this.cancelOut, this);
            }
        },
        touchstart: function touchstart(inEvent) {
            this.vacuumTouches(inEvent);
            this.setPrimaryTouch(inEvent.changedTouches[0]);
            this.dedupSynthMouse(inEvent);
            if (!this.scrolling) this.processTouches(inEvent, this.overDown);
        },
        overDown: function overDown(inPointer) {
            pointermap$1.set(inPointer.pointerId, {
                target: inPointer.target,
                out: inPointer,
                outTarget: inPointer.target
            });
            dispatcher.enterOver(inPointer);
            dispatcher.down(inPointer);
        },
        // Called when pressure or tilt changes without the x/y changing
        touchforcechange: function touchforcechange(inEvent) {
            this.touchmove(inEvent);
        },
        touchmove: function touchmove(inEvent) {
            if (!this.scrolling) {
                if (this.shouldScroll(inEvent)) {
                    this.scrolling = true;
                    this.touchcancel(inEvent);
                } else {
                    if (inEvent.type !== "touchforcechange") inEvent.preventDefault();
                    this.processTouches(inEvent, this.moveOverOut);
                }
            }
        },
        moveOverOut: function moveOverOut(inPointer) {
            var event = inPointer;
            var pointer = pointermap$1.get(event.pointerId);
            // a finger drifted off the screen, ignore it
            if (!pointer) return;
            var outEvent = pointer.out;
            var outTarget = pointer.outTarget;
            dispatcher.move(event);
            if (outEvent && outTarget !== event.target) {
                outEvent.relatedTarget = event.target;
                event.relatedTarget = outTarget;
                // recover from retargeting by shadow
                outEvent.target = outTarget;
                if (event.target) {
                    dispatcher.leaveOut(outEvent);
                    dispatcher.enterOver(event);
                } else {
                    // clean up case when finger leaves the screen
                    event.target = outTarget;
                    event.relatedTarget = null;
                    this.cancelOut(event);
                }
            }
            pointer.out = event;
            pointer.outTarget = event.target;
        },
        touchend: function touchend(inEvent) {
            this.dedupSynthMouse(inEvent);
            this.processTouches(inEvent, this.upOut);
        },
        upOut: function upOut(inPointer) {
            if (!this.scrolling) {
                dispatcher.up(inPointer);
                dispatcher.leaveOut(inPointer);
            }
            this.cleanUpPointer(inPointer);
        },
        touchcancel: function touchcancel(inEvent) {
            this.processTouches(inEvent, this.cancelOut);
        },
        cancelOut: function cancelOut(inPointer) {
            dispatcher.cancel(inPointer);
            dispatcher.leaveOut(inPointer);
            this.cleanUpPointer(inPointer);
        },
        cleanUpPointer: function cleanUpPointer(inPointer) {
            pointermap$1.delete(inPointer.pointerId);
            this.removePrimaryPointer(inPointer);
        },
        // prevent synth mouse events from creating pointer events
        dedupSynthMouse: function dedupSynthMouse(inEvent) {
            var lts = mouseEvents.lastTouches;
            var t = inEvent.changedTouches[0];
            // only the primary finger will synth mouse events
            if (this.isPrimaryTouch(t)) {
                // remember x/y of last touch
                var lt = {
                    x: t.clientX,
                    y: t.clientY
                };
                lts.push(lt);
                var fn = (function(lts, lt) {
                    var i = lts.indexOf(lt);
                    if (i > -1) lts.splice(i, 1);
                }).bind(null, lts, lt);
                setTimeout(fn, DEDUP_TIMEOUT);
            }
        }
    };
    INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved, touchEvents.elementChanged, touchEvents);
    var pointermap$2 = dispatcher.pointermap;
    var HAS_BITMAP_TYPE = window.MSPointerEvent && typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === "number";
    var msEvents = {
        events: [
            "MSPointerDown",
            "MSPointerMove",
            "MSPointerUp",
            "MSPointerOut",
            "MSPointerOver",
            "MSPointerCancel",
            "MSGotPointerCapture",
            "MSLostPointerCapture"
        ],
        register: function register(target) {
            dispatcher.listen(target, this.events);
        },
        unregister: function unregister(target) {
            dispatcher.unlisten(target, this.events);
        },
        POINTER_TYPES: [
            "",
            "unavailable",
            "touch",
            "pen",
            "mouse"
        ],
        prepareEvent: function prepareEvent(inEvent) {
            var e = inEvent;
            if (HAS_BITMAP_TYPE) {
                e = dispatcher.cloneEvent(inEvent);
                e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
            }
            return e;
        },
        cleanup: function cleanup(id) {
            pointermap$2.delete(id);
        },
        MSPointerDown: function MSPointerDown(inEvent) {
            pointermap$2.set(inEvent.pointerId, inEvent);
            var e = this.prepareEvent(inEvent);
            dispatcher.down(e);
        },
        MSPointerMove: function MSPointerMove(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.move(e);
        },
        MSPointerUp: function MSPointerUp(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.up(e);
            this.cleanup(inEvent.pointerId);
        },
        MSPointerOut: function MSPointerOut(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.leaveOut(e);
        },
        MSPointerOver: function MSPointerOver(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.enterOver(e);
        },
        MSPointerCancel: function MSPointerCancel(inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.cancel(e);
            this.cleanup(inEvent.pointerId);
        },
        MSLostPointerCapture: function MSLostPointerCapture(inEvent) {
            var e = dispatcher.makeEvent("lostpointercapture", inEvent);
            dispatcher.dispatchEvent(e);
        },
        MSGotPointerCapture: function MSGotPointerCapture(inEvent) {
            var e = dispatcher.makeEvent("gotpointercapture", inEvent);
            dispatcher.dispatchEvent(e);
        }
    };
    var n = window.navigator;
    var s;
    var r;
    var h;
    if (n.msPointerEnabled) {
        s = function s(pointerId) {
            assertActive(pointerId);
            assertConnected(this);
            if (inActiveButtonState(pointerId)) {
                dispatcher.setCapture(pointerId, this, true);
                this.msSetPointerCapture(pointerId);
            }
        };
        r = function r(pointerId) {
            assertActive(pointerId);
            dispatcher.releaseCapture(pointerId, true);
            this.msReleasePointerCapture(pointerId);
        };
    } else {
        s = function setPointerCapture(pointerId) {
            assertActive(pointerId);
            assertConnected(this);
            if (inActiveButtonState(pointerId)) dispatcher.setCapture(pointerId, this);
        };
        r = function releasePointerCapture(pointerId) {
            assertActive(pointerId);
            dispatcher.releaseCapture(pointerId);
        };
    }
    h = function hasPointerCapture(pointerId) {
        return !!dispatcher.captureInfo[pointerId];
    };
    applyAttributeStyles();
    applyPolyfill();
    applyPolyfill$1();
    var pointerevents = {
        dispatcher: dispatcher,
        Installer: Installer,
        PointerEvent: PointerEvent,
        PointerMap: PointerMap,
        targetFinding: targeting
    };
    return pointerevents;
});


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

$parcel$export($57a8c525f18472a5$exports, "pointer", function () { return $57a8c525f18472a5$export$b7fd2c2937973304; }, function (v) { return $57a8c525f18472a5$export$b7fd2c2937973304 = v; });
$parcel$export($57a8c525f18472a5$exports, "ring", function () { return $57a8c525f18472a5$export$e7d0da6968da5dd; }, function (v) { return $57a8c525f18472a5$export$e7d0da6968da5dd = v; });
$parcel$export($57a8c525f18472a5$exports, "pane", function () { return $57a8c525f18472a5$export$6dff30574f79a202; }, function (v) { return $57a8c525f18472a5$export$6dff30574f79a202 = v; });
var $57a8c525f18472a5$export$b7fd2c2937973304;
var $57a8c525f18472a5$export$e7d0da6968da5dd;
var $57a8c525f18472a5$export$6dff30574f79a202;
$57a8c525f18472a5$export$b7fd2c2937973304 = "GmrByW_pointer";
$57a8c525f18472a5$export$e7d0da6968da5dd = "GmrByW_ring";
$57a8c525f18472a5$export$6dff30574f79a202 = "GmrByW_pane";






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
        pane.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
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
                internalElem.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
                this.refreshPointerElementCss(internalElem);
                var elem = document.createElement("div");
                elem.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
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
