(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire9e2e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire9e2e"] = parcelRequire;
}
parcelRequire.register("bv3xR", function(module, exports) {
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var $fx06q = parcelRequire("fx06q");
"use strict";
function $02291e4e29691b8a$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $02291e4e29691b8a$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $02291e4e29691b8a$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $02291e4e29691b8a$var$_typeof(obj);
}
function $02291e4e29691b8a$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

var $5NG3l = parcelRequire("5NG3l");
var $02291e4e29691b8a$var$_require$codes = $5NG3l.codes, $02291e4e29691b8a$var$ERR_AMBIGUOUS_ARGUMENT = $02291e4e29691b8a$var$_require$codes.ERR_AMBIGUOUS_ARGUMENT, $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE = $02291e4e29691b8a$var$_require$codes.ERR_INVALID_ARG_TYPE, $02291e4e29691b8a$var$ERR_INVALID_ARG_VALUE = $02291e4e29691b8a$var$_require$codes.ERR_INVALID_ARG_VALUE, $02291e4e29691b8a$var$ERR_INVALID_RETURN_VALUE = $02291e4e29691b8a$var$_require$codes.ERR_INVALID_RETURN_VALUE, $02291e4e29691b8a$var$ERR_MISSING_ARGS = $02291e4e29691b8a$var$_require$codes.ERR_MISSING_ARGS;

var $kIBFF = parcelRequire("kIBFF");

var $cQObD = parcelRequire("cQObD");
var $02291e4e29691b8a$var$inspect = $cQObD.inspect;

var $cQObD = parcelRequire("cQObD");
var $02291e4e29691b8a$require$_require$types = $cQObD.types;
var $02291e4e29691b8a$var$isPromise = $02291e4e29691b8a$require$_require$types.isPromise, $02291e4e29691b8a$var$isRegExp = $02291e4e29691b8a$require$_require$types.isRegExp;

var $02291e4e29691b8a$var$objectAssign = Object.assign ? Object.assign : (parcelRequire("7Vv1U")).assign;

var $02291e4e29691b8a$var$objectIs = Object.is ? Object.is : (parcelRequire("1mAhH"));
var $02291e4e29691b8a$var$errorCache = new Map();
var $02291e4e29691b8a$var$isDeepEqual;
var $02291e4e29691b8a$var$isDeepStrictEqual;
var $02291e4e29691b8a$var$parseExpressionAt;
var $02291e4e29691b8a$var$findNodeAround;
var $02291e4e29691b8a$var$decoder;

function $02291e4e29691b8a$var$lazyLoadComparison() {
    var comparison = (parcelRequire("iQn0B"));
    $02291e4e29691b8a$var$isDeepEqual = comparison.isDeepEqual;
    $02291e4e29691b8a$var$isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var $02291e4e29691b8a$var$escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var $02291e4e29691b8a$var$meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "",
    "",
    "\\u000b",
    "\\f",
    "",
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var $02291e4e29691b8a$var$escapeFn = function escapeFn(str) {
    return $02291e4e29691b8a$var$meta[str.charCodeAt(0)];
};
var $02291e4e29691b8a$var$warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var $02291e4e29691b8a$var$assert = module.exports = $02291e4e29691b8a$var$ok;
var $02291e4e29691b8a$var$NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function $02291e4e29691b8a$var$innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new $kIBFF(obj);
}
function $02291e4e29691b8a$var$fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = "Failed";
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if ($02291e4e29691b8a$var$warned === false) {
            $02291e4e29691b8a$var$warned = true;
            var warn = $fx06q.emitWarning ? $fx06q.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? "fail" : operator,
        stackStartFn: stackStartFn || $02291e4e29691b8a$var$fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new $kIBFF(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
$02291e4e29691b8a$var$assert.fail = $02291e4e29691b8a$var$fail; // The AssertionError is defined in internal/error.
$02291e4e29691b8a$var$assert.AssertionError = $kIBFF;
function $02291e4e29691b8a$var$innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) throw message;
        var err = new $kIBFF({
            actual: value,
            expected: true,
            message: message,
            operator: "==",
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function $02291e4e29691b8a$var$ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    $02291e4e29691b8a$var$innerOk.apply(void 0, [
        $02291e4e29691b8a$var$ok,
        args.length
    ].concat(args));
}
$02291e4e29691b8a$var$assert.ok = $02291e4e29691b8a$var$ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ $02291e4e29691b8a$var$assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual != expected) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "==",
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
$02291e4e29691b8a$var$assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual == expected) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "!=",
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
$02291e4e29691b8a$var$assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if ($02291e4e29691b8a$var$isDeepEqual === undefined) $02291e4e29691b8a$var$lazyLoadComparison();
    if (!$02291e4e29691b8a$var$isDeepEqual(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepEqual",
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
$02291e4e29691b8a$var$assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if ($02291e4e29691b8a$var$isDeepEqual === undefined) $02291e4e29691b8a$var$lazyLoadComparison();
    if ($02291e4e29691b8a$var$isDeepEqual(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ $02291e4e29691b8a$var$assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if ($02291e4e29691b8a$var$isDeepEqual === undefined) $02291e4e29691b8a$var$lazyLoadComparison();
    if (!$02291e4e29691b8a$var$isDeepStrictEqual(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
    });
};
$02291e4e29691b8a$var$assert.notDeepStrictEqual = $02291e4e29691b8a$var$notDeepStrictEqual;
function $02291e4e29691b8a$var$notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if ($02291e4e29691b8a$var$isDeepEqual === undefined) $02291e4e29691b8a$var$lazyLoadComparison();
    if ($02291e4e29691b8a$var$isDeepStrictEqual(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepStrictEqual",
        stackStartFn: $02291e4e29691b8a$var$notDeepStrictEqual
    });
}
$02291e4e29691b8a$var$assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if (!$02291e4e29691b8a$var$objectIs(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "strictEqual",
        stackStartFn: strictEqual
    });
};
$02291e4e29691b8a$var$assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $02291e4e29691b8a$var$ERR_MISSING_ARGS("actual", "expected");
    if ($02291e4e29691b8a$var$objectIs(actual, expected)) $02291e4e29691b8a$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
    });
};
var $02291e4e29691b8a$var$Comparison = function Comparison(obj, keys, actual) {
    var _this = this;
    $02291e4e29691b8a$var$_classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === "string" && $02291e4e29691b8a$var$isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function $02291e4e29691b8a$var$compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !$02291e4e29691b8a$var$isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new $02291e4e29691b8a$var$Comparison(actual, keys);
            var b = new $02291e4e29691b8a$var$Comparison(expected, keys, actual);
            var err = new $kIBFF({
                actual: a,
                expected: b,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        $02291e4e29691b8a$var$innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function $02291e4e29691b8a$var$expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
        if ($02291e4e29691b8a$var$isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
        ], expected);
         // Handle primitives properly.
        if ($02291e4e29691b8a$var$_typeof(actual) !== "object" || actual === null) {
            var err = new $kIBFF({
                actual: actual,
                expected: expected,
                message: msg,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push("name", "message");
        else if (keys.length === 0) throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        if ($02291e4e29691b8a$var$isDeepEqual === undefined) $02291e4e29691b8a$var$lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === "string" && $02291e4e29691b8a$var$isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            $02291e4e29691b8a$var$compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({}, actual) === true;
}
function $02291e4e29691b8a$var$getActual(fn) {
    if (typeof fn !== "function") throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return $02291e4e29691b8a$var$NO_EXCEPTION_SENTINEL;
}
function $02291e4e29691b8a$var$checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return $02291e4e29691b8a$var$isPromise(obj) || obj !== null && $02291e4e29691b8a$var$_typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function $02291e4e29691b8a$var$waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!$02291e4e29691b8a$var$checkIsPromise(resultPromise)) throw new $02291e4e29691b8a$var$ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        } else if ($02291e4e29691b8a$var$checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return $02291e4e29691b8a$var$NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function $02291e4e29691b8a$var$expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
        if (arguments.length === 4) throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], error);
        if ($02291e4e29691b8a$var$_typeof(actual) === "object" && actual !== null) {
            if (actual.message === error) throw new $02291e4e29691b8a$var$ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        } else if (actual === error) throw new $02291e4e29691b8a$var$ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        message = error;
        error = undefined;
    } else if (error != null && $02291e4e29691b8a$var$_typeof(error) !== "object" && typeof error !== "function") throw new $02291e4e29691b8a$var$ERR_INVALID_ARG_TYPE("error", [
        "Object",
        "Error",
        "Function",
        "RegExp"
    ], error);
    if (actual === $02291e4e29691b8a$var$NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        $02291e4e29691b8a$var$innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !$02291e4e29691b8a$var$expectedException(actual, error, message, stackStartFn)) throw actual;
}
function $02291e4e29691b8a$var$expectsNoError(stackStartFn, actual, error, message) {
    if (actual === $02291e4e29691b8a$var$NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
        message = error;
        error = undefined;
    }
    if (!error || $02291e4e29691b8a$var$expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        $02291e4e29691b8a$var$innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
$02291e4e29691b8a$var$assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    $02291e4e29691b8a$var$expectsError.apply(void 0, [
        throws,
        $02291e4e29691b8a$var$getActual(promiseFn)
    ].concat(args));
};
$02291e4e29691b8a$var$assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return $02291e4e29691b8a$var$waitForActual(promiseFn).then(function(result) {
        return $02291e4e29691b8a$var$expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
$02291e4e29691b8a$var$assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    $02291e4e29691b8a$var$expectsNoError.apply(void 0, [
        doesNotThrow,
        $02291e4e29691b8a$var$getActual(fn)
    ].concat(args));
};
$02291e4e29691b8a$var$assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return $02291e4e29691b8a$var$waitForActual(fn).then(function(result) {
        return $02291e4e29691b8a$var$expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
$02291e4e29691b8a$var$assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = "ifError got unwanted exception: ";
        if ($02291e4e29691b8a$var$_typeof(err) === "object" && typeof err.message === "string") {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += $02291e4e29691b8a$var$inspect(err);
        var newErr = new $kIBFF({
            actual: err,
            expected: null,
            operator: "ifError",
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === "string") {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split("\n");
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split("\n");
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function $02291e4e29691b8a$var$strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    $02291e4e29691b8a$var$innerOk.apply(void 0, [
        $02291e4e29691b8a$var$strict,
        args.length
    ].concat(args));
}
$02291e4e29691b8a$var$assert.strict = $02291e4e29691b8a$var$objectAssign($02291e4e29691b8a$var$strict, $02291e4e29691b8a$var$assert, {
    equal: $02291e4e29691b8a$var$assert.strictEqual,
    deepEqual: $02291e4e29691b8a$var$assert.deepStrictEqual,
    notEqual: $02291e4e29691b8a$var$assert.notStrictEqual,
    notDeepEqual: $02291e4e29691b8a$var$assert.notDeepStrictEqual
});
$02291e4e29691b8a$var$assert.strict.strict = $02291e4e29691b8a$var$assert.strict;

});
parcelRequire.register("fx06q", function(module, exports) {
// shim for using process in browser
var $b4ea04772357066a$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $b4ea04772357066a$var$cachedSetTimeout;
var $b4ea04772357066a$var$cachedClearTimeout;
function $b4ea04772357066a$var$defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function $b4ea04772357066a$var$defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") $b4ea04772357066a$var$cachedSetTimeout = setTimeout;
        else $b4ea04772357066a$var$cachedSetTimeout = $b4ea04772357066a$var$defaultSetTimout;
    } catch (e) {
        $b4ea04772357066a$var$cachedSetTimeout = $b4ea04772357066a$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") $b4ea04772357066a$var$cachedClearTimeout = clearTimeout;
        else $b4ea04772357066a$var$cachedClearTimeout = $b4ea04772357066a$var$defaultClearTimeout;
    } catch (e) {
        $b4ea04772357066a$var$cachedClearTimeout = $b4ea04772357066a$var$defaultClearTimeout;
    }
})();
function $b4ea04772357066a$var$runTimeout(fun) {
    if ($b4ea04772357066a$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($b4ea04772357066a$var$cachedSetTimeout === $b4ea04772357066a$var$defaultSetTimout || !$b4ea04772357066a$var$cachedSetTimeout) && setTimeout) {
        $b4ea04772357066a$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $b4ea04772357066a$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $b4ea04772357066a$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $b4ea04772357066a$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $b4ea04772357066a$var$runClearTimeout(marker) {
    if ($b4ea04772357066a$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($b4ea04772357066a$var$cachedClearTimeout === $b4ea04772357066a$var$defaultClearTimeout || !$b4ea04772357066a$var$cachedClearTimeout) && clearTimeout) {
        $b4ea04772357066a$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $b4ea04772357066a$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $b4ea04772357066a$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $b4ea04772357066a$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $b4ea04772357066a$var$queue = [];
var $b4ea04772357066a$var$draining = false;
var $b4ea04772357066a$var$currentQueue;
var $b4ea04772357066a$var$queueIndex = -1;
function $b4ea04772357066a$var$cleanUpNextTick() {
    if (!$b4ea04772357066a$var$draining || !$b4ea04772357066a$var$currentQueue) return;
    $b4ea04772357066a$var$draining = false;
    if ($b4ea04772357066a$var$currentQueue.length) $b4ea04772357066a$var$queue = $b4ea04772357066a$var$currentQueue.concat($b4ea04772357066a$var$queue);
    else $b4ea04772357066a$var$queueIndex = -1;
    if ($b4ea04772357066a$var$queue.length) $b4ea04772357066a$var$drainQueue();
}
function $b4ea04772357066a$var$drainQueue() {
    if ($b4ea04772357066a$var$draining) return;
    var timeout = $b4ea04772357066a$var$runTimeout($b4ea04772357066a$var$cleanUpNextTick);
    $b4ea04772357066a$var$draining = true;
    var len = $b4ea04772357066a$var$queue.length;
    while(len){
        $b4ea04772357066a$var$currentQueue = $b4ea04772357066a$var$queue;
        $b4ea04772357066a$var$queue = [];
        while(++$b4ea04772357066a$var$queueIndex < len)if ($b4ea04772357066a$var$currentQueue) $b4ea04772357066a$var$currentQueue[$b4ea04772357066a$var$queueIndex].run();
        $b4ea04772357066a$var$queueIndex = -1;
        len = $b4ea04772357066a$var$queue.length;
    }
    $b4ea04772357066a$var$currentQueue = null;
    $b4ea04772357066a$var$draining = false;
    $b4ea04772357066a$var$runClearTimeout(timeout);
}
$b4ea04772357066a$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $b4ea04772357066a$var$queue.push(new $b4ea04772357066a$var$Item(fun, args));
    if ($b4ea04772357066a$var$queue.length === 1 && !$b4ea04772357066a$var$draining) $b4ea04772357066a$var$runTimeout($b4ea04772357066a$var$drainQueue);
};
// v8 likes predictible objects
function $b4ea04772357066a$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$b4ea04772357066a$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$b4ea04772357066a$var$process.title = "browser";
$b4ea04772357066a$var$process.browser = true;
$b4ea04772357066a$var$process.env = {};
$b4ea04772357066a$var$process.argv = [];
$b4ea04772357066a$var$process.version = ""; // empty string to avoid regexp issues
$b4ea04772357066a$var$process.versions = {};
function $b4ea04772357066a$var$noop() {}
$b4ea04772357066a$var$process.on = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.addListener = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.once = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.off = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.removeListener = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.removeAllListeners = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.emit = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.prependListener = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.prependOnceListener = $b4ea04772357066a$var$noop;
$b4ea04772357066a$var$process.listeners = function(name) {
    return [];
};
$b4ea04772357066a$var$process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
$b4ea04772357066a$var$process.cwd = function() {
    return "/";
};
$b4ea04772357066a$var$process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
$b4ea04772357066a$var$process.umask = function() {
    return 0;
};

});

parcelRequire.register("5NG3l", function(module, exports) {

$parcel$export(module.exports, "codes", function () { return $4392262d5a86c8c6$export$e45cb6485273080e; }, function (v) { return $4392262d5a86c8c6$export$e45cb6485273080e = v; });
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ var $4392262d5a86c8c6$export$e45cb6485273080e;
"use strict"; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function $4392262d5a86c8c6$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $4392262d5a86c8c6$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $4392262d5a86c8c6$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $4392262d5a86c8c6$var$_typeof(obj);
}
function $4392262d5a86c8c6$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $4392262d5a86c8c6$var$_possibleConstructorReturn(self, call) {
    if (call && ($4392262d5a86c8c6$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $4392262d5a86c8c6$var$_assertThisInitialized(self);
}
function $4392262d5a86c8c6$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $4392262d5a86c8c6$var$_getPrototypeOf(o) {
    $4392262d5a86c8c6$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $4392262d5a86c8c6$var$_getPrototypeOf(o);
}
function $4392262d5a86c8c6$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $4392262d5a86c8c6$var$_setPrototypeOf(subClass, superClass);
}
function $4392262d5a86c8c6$var$_setPrototypeOf(o, p) {
    $4392262d5a86c8c6$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $4392262d5a86c8c6$var$_setPrototypeOf(o, p);
}
var $4392262d5a86c8c6$var$codes = {}; // Lazy loaded
var $4392262d5a86c8c6$var$assert;
var $4392262d5a86c8c6$var$util;
function $4392262d5a86c8c6$var$createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        $4392262d5a86c8c6$var$_inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            $4392262d5a86c8c6$var$_classCallCheck(this, NodeError);
            _this = $4392262d5a86c8c6$var$_possibleConstructorReturn(this, $4392262d5a86c8c6$var$_getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    $4392262d5a86c8c6$var$codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $4392262d5a86c8c6$var$oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function $4392262d5a86c8c6$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $4392262d5a86c8c6$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $4392262d5a86c8c6$var$includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$4392262d5a86c8c6$var$createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);

$4392262d5a86c8c6$var$createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if ($4392262d5a86c8c6$var$assert === undefined) $4392262d5a86c8c6$var$assert = (parcelRequire("bv3xR"));
    $4392262d5a86c8c6$var$assert(typeof name === "string", "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && $4392262d5a86c8c6$var$startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if ($4392262d5a86c8c6$var$endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat($4392262d5a86c8c6$var$oneOf(expected, "type"));
    else {
        var type = $4392262d5a86c8c6$var$includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat($4392262d5a86c8c6$var$oneOf(expected, "type"));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat($4392262d5a86c8c6$var$_typeof(actual));
    return msg;
}, TypeError);

$4392262d5a86c8c6$var$createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if ($4392262d5a86c8c6$var$util === undefined) $4392262d5a86c8c6$var$util = (parcelRequire("cQObD"));
    var inspected = $4392262d5a86c8c6$var$util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
$4392262d5a86c8c6$var$createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat($4392262d5a86c8c6$var$_typeof(value));
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
}, TypeError);

$4392262d5a86c8c6$var$createErrorType("ERR_MISSING_ARGS", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if ($4392262d5a86c8c6$var$assert === undefined) $4392262d5a86c8c6$var$assert = (parcelRequire("bv3xR"));
    $4392262d5a86c8c6$var$assert(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
        return '"'.concat(a, '"');
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(", ");
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
$4392262d5a86c8c6$export$e45cb6485273080e = $4392262d5a86c8c6$var$codes;

});
parcelRequire.register("cQObD", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var $fx06q = parcelRequire("fx06q");
var $95b14567a80ed1ab$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $95b14567a80ed1ab$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$95b14567a80ed1ab$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($95b14567a80ed1ab$var$inspect(arguments[i]));
        return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($95b14567a80ed1ab$var$formatRegExp, function(x) {
        if (x === "%%") return "%";
        if (i >= len) return x;
        switch(x){
            case "%s":
                return String(args[i++]);
            case "%d":
                return Number(args[i++]);
            case "%j":
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return "[Circular]";
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if ($95b14567a80ed1ab$var$isNull(x) || !$95b14567a80ed1ab$var$isObject(x)) str += " " + x;
    else str += " " + $95b14567a80ed1ab$var$inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
module.exports.deprecate = function(fn, msg) {
    if (typeof $fx06q !== "undefined" && $fx06q.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof $fx06q === "undefined") return function() {
        return module.exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if ($fx06q.throwDeprecation) throw new Error(msg);
            else if ($fx06q.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var $95b14567a80ed1ab$var$debugs = {};
var $95b14567a80ed1ab$var$debugEnvRegex = /^$/;
var $95b14567a80ed1ab$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$95b14567a80ed1ab$var$debugs[set]) {
        if ($95b14567a80ed1ab$var$debugEnvRegex.test(set)) {
            var pid = $fx06q.pid;
            $95b14567a80ed1ab$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
            };
        } else $95b14567a80ed1ab$var$debugs[set] = function() {};
    }
    return $95b14567a80ed1ab$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $95b14567a80ed1ab$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $95b14567a80ed1ab$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($95b14567a80ed1ab$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($95b14567a80ed1ab$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($95b14567a80ed1ab$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($95b14567a80ed1ab$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($95b14567a80ed1ab$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $95b14567a80ed1ab$var$stylizeWithColor;
    return $95b14567a80ed1ab$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $95b14567a80ed1ab$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$95b14567a80ed1ab$var$inspect.colors = {
    "bold": [
        1,
        22
    ],
    "italic": [
        3,
        23
    ],
    "underline": [
        4,
        24
    ],
    "inverse": [
        7,
        27
    ],
    "white": [
        37,
        39
    ],
    "grey": [
        90,
        39
    ],
    "black": [
        30,
        39
    ],
    "blue": [
        34,
        39
    ],
    "cyan": [
        36,
        39
    ],
    "green": [
        32,
        39
    ],
    "magenta": [
        35,
        39
    ],
    "red": [
        31,
        39
    ],
    "yellow": [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
$95b14567a80ed1ab$var$inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
};
function $95b14567a80ed1ab$var$stylizeWithColor(str, styleType) {
    var style = $95b14567a80ed1ab$var$inspect.styles[styleType];
    if (style) return "\x1b[" + $95b14567a80ed1ab$var$inspect.colors[style][0] + "m" + str + "\x1b[" + $95b14567a80ed1ab$var$inspect.colors[style][1] + "m";
    else return str;
}
function $95b14567a80ed1ab$var$stylizeNoColor(str, styleType) {
    return str;
}
function $95b14567a80ed1ab$var$arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $95b14567a80ed1ab$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $95b14567a80ed1ab$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$95b14567a80ed1ab$var$isString(ret)) ret = $95b14567a80ed1ab$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $95b14567a80ed1ab$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $95b14567a80ed1ab$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($95b14567a80ed1ab$var$isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return $95b14567a80ed1ab$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($95b14567a80ed1ab$var$isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
        }
        if ($95b14567a80ed1ab$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if ($95b14567a80ed1ab$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if ($95b14567a80ed1ab$var$isError(value)) return $95b14567a80ed1ab$var$formatError(value);
    }
    var base = "", array = false, braces = [
        "{",
        "}"
    ];
    // Make Array say that they are Array
    if ($95b14567a80ed1ab$var$isArray(value)) {
        array = true;
        braces = [
            "[",
            "]"
        ];
    }
    // Make functions say that they are functions
    if ($95b14567a80ed1ab$var$isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    // Make RegExps say that they are RegExps
    if ($95b14567a80ed1ab$var$isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($95b14567a80ed1ab$var$isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($95b14567a80ed1ab$var$isError(value)) base = " " + $95b14567a80ed1ab$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($95b14567a80ed1ab$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        else return ctx.stylize("[Object]", "special");
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $95b14567a80ed1ab$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $95b14567a80ed1ab$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $95b14567a80ed1ab$var$reduceToSingleString(output, base, braces);
}
function $95b14567a80ed1ab$var$formatPrimitive(ctx, value) {
    if ($95b14567a80ed1ab$var$isUndefined(value)) return ctx.stylize("undefined", "undefined");
    if ($95b14567a80ed1ab$var$isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
    }
    if ($95b14567a80ed1ab$var$isNumber(value)) return ctx.stylize("" + value, "number");
    if ($95b14567a80ed1ab$var$isBoolean(value)) return ctx.stylize("" + value, "boolean");
    // For some reason typeof null is "object", so special case here.
    if ($95b14567a80ed1ab$var$isNull(value)) return ctx.stylize("null", "null");
}
function $95b14567a80ed1ab$var$formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function $95b14567a80ed1ab$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($95b14567a80ed1ab$var$hasOwnProperty(value, String(i))) output.push($95b14567a80ed1ab$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push("");
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($95b14567a80ed1ab$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $95b14567a80ed1ab$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
        else str = ctx.stylize("[Getter]", "special");
    } else if (desc.set) str = ctx.stylize("[Setter]", "special");
    if (!$95b14567a80ed1ab$var$hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($95b14567a80ed1ab$var$isNull(recurseTimes)) str = $95b14567a80ed1ab$var$formatValue(ctx, desc.value, null);
            else str = $95b14567a80ed1ab$var$formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf("\n") > -1) {
                if (array) str = str.split("\n").map(function(line) {
                    return "  " + line;
                }).join("\n").slice(2);
                else str = "\n" + str.split("\n").map(function(line) {
                    return "   " + line;
                }).join("\n");
            }
        } else str = ctx.stylize("[Circular]", "special");
    }
    if ($95b14567a80ed1ab$var$isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
        }
    }
    return name + ": " + str;
}
function $95b14567a80ed1ab$var$reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
module.exports.types = (parcelRequire("hhzYk"));
function $95b14567a80ed1ab$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $95b14567a80ed1ab$var$isArray;
function $95b14567a80ed1ab$var$isBoolean(arg) {
    return typeof arg === "boolean";
}
module.exports.isBoolean = $95b14567a80ed1ab$var$isBoolean;
function $95b14567a80ed1ab$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $95b14567a80ed1ab$var$isNull;
function $95b14567a80ed1ab$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $95b14567a80ed1ab$var$isNullOrUndefined;
function $95b14567a80ed1ab$var$isNumber(arg) {
    return typeof arg === "number";
}
module.exports.isNumber = $95b14567a80ed1ab$var$isNumber;
function $95b14567a80ed1ab$var$isString(arg) {
    return typeof arg === "string";
}
module.exports.isString = $95b14567a80ed1ab$var$isString;
function $95b14567a80ed1ab$var$isSymbol(arg) {
    return typeof arg === "symbol";
}
module.exports.isSymbol = $95b14567a80ed1ab$var$isSymbol;
function $95b14567a80ed1ab$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $95b14567a80ed1ab$var$isUndefined;
function $95b14567a80ed1ab$var$isRegExp(re) {
    return $95b14567a80ed1ab$var$isObject(re) && $95b14567a80ed1ab$var$objectToString(re) === "[object RegExp]";
}
module.exports.isRegExp = $95b14567a80ed1ab$var$isRegExp;
module.exports.types.isRegExp = $95b14567a80ed1ab$var$isRegExp;
function $95b14567a80ed1ab$var$isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
module.exports.isObject = $95b14567a80ed1ab$var$isObject;
function $95b14567a80ed1ab$var$isDate(d) {
    return $95b14567a80ed1ab$var$isObject(d) && $95b14567a80ed1ab$var$objectToString(d) === "[object Date]";
}
module.exports.isDate = $95b14567a80ed1ab$var$isDate;
module.exports.types.isDate = $95b14567a80ed1ab$var$isDate;
function $95b14567a80ed1ab$var$isError(e) {
    return $95b14567a80ed1ab$var$isObject(e) && ($95b14567a80ed1ab$var$objectToString(e) === "[object Error]" || e instanceof Error);
}
module.exports.isError = $95b14567a80ed1ab$var$isError;
module.exports.types.isNativeError = $95b14567a80ed1ab$var$isError;
function $95b14567a80ed1ab$var$isFunction(arg) {
    return typeof arg === "function";
}
module.exports.isFunction = $95b14567a80ed1ab$var$isFunction;
function $95b14567a80ed1ab$var$isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
module.exports.isPrimitive = $95b14567a80ed1ab$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("dvrpm"));
function $95b14567a80ed1ab$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $95b14567a80ed1ab$var$pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var $95b14567a80ed1ab$var$months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
// 26 Feb 16:19:34
function $95b14567a80ed1ab$var$timestamp() {
    var d = new Date();
    var time = [
        $95b14567a80ed1ab$var$pad(d.getHours()),
        $95b14567a80ed1ab$var$pad(d.getMinutes()),
        $95b14567a80ed1ab$var$pad(d.getSeconds())
    ].join(":");
    return [
        d.getDate(),
        $95b14567a80ed1ab$var$months[d.getMonth()],
        time
    ].join(" ");
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log("%s - %s", $95b14567a80ed1ab$var$timestamp(), module.exports.format.apply(module.exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ module.exports.inherits = (parcelRequire("eLCAI"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$95b14567a80ed1ab$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $95b14567a80ed1ab$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $95b14567a80ed1ab$var$kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
module.exports.promisify = function promisify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    if ($95b14567a80ed1ab$var$kCustomPromisifiedSymbol && original[$95b14567a80ed1ab$var$kCustomPromisifiedSymbol]) {
        var fn = original[$95b14567a80ed1ab$var$kCustomPromisifiedSymbol];
        if (typeof fn !== "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $95b14567a80ed1ab$var$kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if ($95b14567a80ed1ab$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $95b14567a80ed1ab$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $95b14567a80ed1ab$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $95b14567a80ed1ab$var$kCustomPromisifiedSymbol;
function $95b14567a80ed1ab$var$callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function $95b14567a80ed1ab$var$callbackify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            $fx06q.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $fx06q.nextTick($95b14567a80ed1ab$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $95b14567a80ed1ab$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $95b14567a80ed1ab$var$callbackify;

});
parcelRequire.register("hhzYk", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";

var $aFVVl = parcelRequire("aFVVl");

var $67Ua0 = parcelRequire("67Ua0");

var $iDnm5 = parcelRequire("iDnm5");

var $jatUB = parcelRequire("jatUB");
function $c94fed8282cf4e18$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $c94fed8282cf4e18$var$BigIntSupported = typeof BigInt !== "undefined";
var $c94fed8282cf4e18$var$SymbolSupported = typeof Symbol !== "undefined";
var $c94fed8282cf4e18$var$ObjectToString = $c94fed8282cf4e18$var$uncurryThis(Object.prototype.toString);
var $c94fed8282cf4e18$var$numberValue = $c94fed8282cf4e18$var$uncurryThis(Number.prototype.valueOf);
var $c94fed8282cf4e18$var$stringValue = $c94fed8282cf4e18$var$uncurryThis(String.prototype.valueOf);
var $c94fed8282cf4e18$var$booleanValue = $c94fed8282cf4e18$var$uncurryThis(Boolean.prototype.valueOf);
if ($c94fed8282cf4e18$var$BigIntSupported) var $c94fed8282cf4e18$var$bigIntValue = $c94fed8282cf4e18$var$uncurryThis(BigInt.prototype.valueOf);
if ($c94fed8282cf4e18$var$SymbolSupported) var $c94fed8282cf4e18$var$symbolValue = $c94fed8282cf4e18$var$uncurryThis(Symbol.prototype.valueOf);
function $c94fed8282cf4e18$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $aFVVl;
module.exports.isGeneratorFunction = $67Ua0;
module.exports.isTypedArray = $jatUB;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $c94fed8282cf4e18$var$isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
module.exports.isPromise = $c94fed8282cf4e18$var$isPromise;
function $c94fed8282cf4e18$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $jatUB(value) || $c94fed8282cf4e18$var$isDataView(value);
}
module.exports.isArrayBufferView = $c94fed8282cf4e18$var$isArrayBufferView;
function $c94fed8282cf4e18$var$isUint8Array(value) {
    return $iDnm5(value) === "Uint8Array";
}
module.exports.isUint8Array = $c94fed8282cf4e18$var$isUint8Array;
function $c94fed8282cf4e18$var$isUint8ClampedArray(value) {
    return $iDnm5(value) === "Uint8ClampedArray";
}
module.exports.isUint8ClampedArray = $c94fed8282cf4e18$var$isUint8ClampedArray;
function $c94fed8282cf4e18$var$isUint16Array(value) {
    return $iDnm5(value) === "Uint16Array";
}
module.exports.isUint16Array = $c94fed8282cf4e18$var$isUint16Array;
function $c94fed8282cf4e18$var$isUint32Array(value) {
    return $iDnm5(value) === "Uint32Array";
}
module.exports.isUint32Array = $c94fed8282cf4e18$var$isUint32Array;
function $c94fed8282cf4e18$var$isInt8Array(value) {
    return $iDnm5(value) === "Int8Array";
}
module.exports.isInt8Array = $c94fed8282cf4e18$var$isInt8Array;
function $c94fed8282cf4e18$var$isInt16Array(value) {
    return $iDnm5(value) === "Int16Array";
}
module.exports.isInt16Array = $c94fed8282cf4e18$var$isInt16Array;
function $c94fed8282cf4e18$var$isInt32Array(value) {
    return $iDnm5(value) === "Int32Array";
}
module.exports.isInt32Array = $c94fed8282cf4e18$var$isInt32Array;
function $c94fed8282cf4e18$var$isFloat32Array(value) {
    return $iDnm5(value) === "Float32Array";
}
module.exports.isFloat32Array = $c94fed8282cf4e18$var$isFloat32Array;
function $c94fed8282cf4e18$var$isFloat64Array(value) {
    return $iDnm5(value) === "Float64Array";
}
module.exports.isFloat64Array = $c94fed8282cf4e18$var$isFloat64Array;
function $c94fed8282cf4e18$var$isBigInt64Array(value) {
    return $iDnm5(value) === "BigInt64Array";
}
module.exports.isBigInt64Array = $c94fed8282cf4e18$var$isBigInt64Array;
function $c94fed8282cf4e18$var$isBigUint64Array(value) {
    return $iDnm5(value) === "BigUint64Array";
}
module.exports.isBigUint64Array = $c94fed8282cf4e18$var$isBigUint64Array;
function $c94fed8282cf4e18$var$isMapToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object Map]";
}
$c94fed8282cf4e18$var$isMapToString.working = typeof Map !== "undefined" && $c94fed8282cf4e18$var$isMapToString(new Map());
function $c94fed8282cf4e18$var$isMap(value) {
    if (typeof Map === "undefined") return false;
    return $c94fed8282cf4e18$var$isMapToString.working ? $c94fed8282cf4e18$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $c94fed8282cf4e18$var$isMap;
function $c94fed8282cf4e18$var$isSetToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object Set]";
}
$c94fed8282cf4e18$var$isSetToString.working = typeof Set !== "undefined" && $c94fed8282cf4e18$var$isSetToString(new Set());
function $c94fed8282cf4e18$var$isSet(value) {
    if (typeof Set === "undefined") return false;
    return $c94fed8282cf4e18$var$isSetToString.working ? $c94fed8282cf4e18$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $c94fed8282cf4e18$var$isSet;
function $c94fed8282cf4e18$var$isWeakMapToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object WeakMap]";
}
$c94fed8282cf4e18$var$isWeakMapToString.working = typeof WeakMap !== "undefined" && $c94fed8282cf4e18$var$isWeakMapToString(new WeakMap());
function $c94fed8282cf4e18$var$isWeakMap(value) {
    if (typeof WeakMap === "undefined") return false;
    return $c94fed8282cf4e18$var$isWeakMapToString.working ? $c94fed8282cf4e18$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $c94fed8282cf4e18$var$isWeakMap;
function $c94fed8282cf4e18$var$isWeakSetToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object WeakSet]";
}
$c94fed8282cf4e18$var$isWeakSetToString.working = typeof WeakSet !== "undefined" && $c94fed8282cf4e18$var$isWeakSetToString(new WeakSet());
function $c94fed8282cf4e18$var$isWeakSet(value) {
    return $c94fed8282cf4e18$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $c94fed8282cf4e18$var$isWeakSet;
function $c94fed8282cf4e18$var$isArrayBufferToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object ArrayBuffer]";
}
$c94fed8282cf4e18$var$isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && $c94fed8282cf4e18$var$isArrayBufferToString(new ArrayBuffer());
function $c94fed8282cf4e18$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") return false;
    return $c94fed8282cf4e18$var$isArrayBufferToString.working ? $c94fed8282cf4e18$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $c94fed8282cf4e18$var$isArrayBuffer;
function $c94fed8282cf4e18$var$isDataViewToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object DataView]";
}
$c94fed8282cf4e18$var$isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && $c94fed8282cf4e18$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $c94fed8282cf4e18$var$isDataView(value) {
    if (typeof DataView === "undefined") return false;
    return $c94fed8282cf4e18$var$isDataViewToString.working ? $c94fed8282cf4e18$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $c94fed8282cf4e18$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $c94fed8282cf4e18$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
function $c94fed8282cf4e18$var$isSharedArrayBufferToString(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object SharedArrayBuffer]";
}
function $c94fed8282cf4e18$var$isSharedArrayBuffer(value) {
    if (typeof $c94fed8282cf4e18$var$SharedArrayBufferCopy === "undefined") return false;
    if (typeof $c94fed8282cf4e18$var$isSharedArrayBufferToString.working === "undefined") $c94fed8282cf4e18$var$isSharedArrayBufferToString.working = $c94fed8282cf4e18$var$isSharedArrayBufferToString(new $c94fed8282cf4e18$var$SharedArrayBufferCopy());
    return $c94fed8282cf4e18$var$isSharedArrayBufferToString.working ? $c94fed8282cf4e18$var$isSharedArrayBufferToString(value) : value instanceof $c94fed8282cf4e18$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $c94fed8282cf4e18$var$isSharedArrayBuffer;
function $c94fed8282cf4e18$var$isAsyncFunction(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object AsyncFunction]";
}
module.exports.isAsyncFunction = $c94fed8282cf4e18$var$isAsyncFunction;
function $c94fed8282cf4e18$var$isMapIterator(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object Map Iterator]";
}
module.exports.isMapIterator = $c94fed8282cf4e18$var$isMapIterator;
function $c94fed8282cf4e18$var$isSetIterator(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object Set Iterator]";
}
module.exports.isSetIterator = $c94fed8282cf4e18$var$isSetIterator;
function $c94fed8282cf4e18$var$isGeneratorObject(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object Generator]";
}
module.exports.isGeneratorObject = $c94fed8282cf4e18$var$isGeneratorObject;
function $c94fed8282cf4e18$var$isWebAssemblyCompiledModule(value) {
    return $c94fed8282cf4e18$var$ObjectToString(value) === "[object WebAssembly.Module]";
}
module.exports.isWebAssemblyCompiledModule = $c94fed8282cf4e18$var$isWebAssemblyCompiledModule;
function $c94fed8282cf4e18$var$isNumberObject(value) {
    return $c94fed8282cf4e18$var$checkBoxedPrimitive(value, $c94fed8282cf4e18$var$numberValue);
}
module.exports.isNumberObject = $c94fed8282cf4e18$var$isNumberObject;
function $c94fed8282cf4e18$var$isStringObject(value) {
    return $c94fed8282cf4e18$var$checkBoxedPrimitive(value, $c94fed8282cf4e18$var$stringValue);
}
module.exports.isStringObject = $c94fed8282cf4e18$var$isStringObject;
function $c94fed8282cf4e18$var$isBooleanObject(value) {
    return $c94fed8282cf4e18$var$checkBoxedPrimitive(value, $c94fed8282cf4e18$var$booleanValue);
}
module.exports.isBooleanObject = $c94fed8282cf4e18$var$isBooleanObject;
function $c94fed8282cf4e18$var$isBigIntObject(value) {
    return $c94fed8282cf4e18$var$BigIntSupported && $c94fed8282cf4e18$var$checkBoxedPrimitive(value, $c94fed8282cf4e18$var$bigIntValue);
}
module.exports.isBigIntObject = $c94fed8282cf4e18$var$isBigIntObject;
function $c94fed8282cf4e18$var$isSymbolObject(value) {
    return $c94fed8282cf4e18$var$SymbolSupported && $c94fed8282cf4e18$var$checkBoxedPrimitive(value, $c94fed8282cf4e18$var$symbolValue);
}
module.exports.isSymbolObject = $c94fed8282cf4e18$var$isSymbolObject;
function $c94fed8282cf4e18$var$isBoxedPrimitive(value) {
    return $c94fed8282cf4e18$var$isNumberObject(value) || $c94fed8282cf4e18$var$isStringObject(value) || $c94fed8282cf4e18$var$isBooleanObject(value) || $c94fed8282cf4e18$var$isBigIntObject(value) || $c94fed8282cf4e18$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $c94fed8282cf4e18$var$isBoxedPrimitive;
function $c94fed8282cf4e18$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && ($c94fed8282cf4e18$var$isArrayBuffer(value) || $c94fed8282cf4e18$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $c94fed8282cf4e18$var$isAnyArrayBuffer;
[
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(method) {
    Object.defineProperty(module.exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + " is not supported in userland");
        }
    });
});

});
parcelRequire.register("aFVVl", function(module, exports) {
"use strict";

var $7c5aaa31bf66b900$var$hasToStringTag = (parcelRequire("bRQ1z"))();

var $hixHu = parcelRequire("hixHu");
var $7c5aaa31bf66b900$var$$toString = $hixHu("Object.prototype.toString");
var $7c5aaa31bf66b900$var$isStandardArguments = function isArguments(value) {
    if ($7c5aaa31bf66b900$var$hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $7c5aaa31bf66b900$var$$toString(value) === "[object Arguments]";
};
var $7c5aaa31bf66b900$var$isLegacyArguments = function isArguments(value) {
    if ($7c5aaa31bf66b900$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $7c5aaa31bf66b900$var$$toString(value) !== "[object Array]" && $7c5aaa31bf66b900$var$$toString(value.callee) === "[object Function]";
};
var $7c5aaa31bf66b900$var$supportsStandardArguments = function() {
    return $7c5aaa31bf66b900$var$isStandardArguments(arguments);
}();
$7c5aaa31bf66b900$var$isStandardArguments.isLegacyArguments = $7c5aaa31bf66b900$var$isLegacyArguments; // for tests
module.exports = $7c5aaa31bf66b900$var$supportsStandardArguments ? $7c5aaa31bf66b900$var$isStandardArguments : $7c5aaa31bf66b900$var$isLegacyArguments;

});
parcelRequire.register("bRQ1z", function(module, exports) {
"use strict";

var $9CIBt = parcelRequire("9CIBt");
module.exports = function hasToStringTagShams() {
    return $9CIBt() && !!Symbol.toStringTag;
};

});
parcelRequire.register("9CIBt", function(module, exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

});


parcelRequire.register("hixHu", function(module, exports) {
"use strict";

var $eLvu2 = parcelRequire("eLvu2");

var $4vCVp = parcelRequire("4vCVp");
var $c97e424d7da295db$var$$indexOf = $4vCVp($eLvu2("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = $eLvu2(name, !!allowMissing);
    if (typeof intrinsic === "function" && $c97e424d7da295db$var$$indexOf(name, ".prototype.") > -1) return $4vCVp(intrinsic);
    return intrinsic;
};

});
parcelRequire.register("eLvu2", function(module, exports) {
"use strict";
var $abfde0765dd71b6c$var$undefined;
var $abfde0765dd71b6c$var$$SyntaxError = SyntaxError;
var $abfde0765dd71b6c$var$$Function = Function;
var $abfde0765dd71b6c$var$$TypeError = TypeError;
// eslint-disable-next-line consistent-return
var $abfde0765dd71b6c$var$getEvalledConstructor = function(expressionSyntax) {
    try {
        return $abfde0765dd71b6c$var$$Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $abfde0765dd71b6c$var$$gOPD = Object.getOwnPropertyDescriptor;
if ($abfde0765dd71b6c$var$$gOPD) try {
    $abfde0765dd71b6c$var$$gOPD({}, "");
} catch (e) {
    $abfde0765dd71b6c$var$$gOPD = null; // this is IE 8, which has a broken gOPD
}
var $abfde0765dd71b6c$var$throwTypeError = function() {
    throw new $abfde0765dd71b6c$var$$TypeError();
};
var $abfde0765dd71b6c$var$ThrowTypeError = $abfde0765dd71b6c$var$$gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $abfde0765dd71b6c$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $abfde0765dd71b6c$var$$gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return $abfde0765dd71b6c$var$throwTypeError;
        }
    }
}() : $abfde0765dd71b6c$var$throwTypeError;

var $abfde0765dd71b6c$var$hasSymbols = (parcelRequire("gk9jG"))();
var $abfde0765dd71b6c$var$getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var $abfde0765dd71b6c$var$needsEval = {};
var $abfde0765dd71b6c$var$TypedArray = typeof Uint8Array === "undefined" ? $abfde0765dd71b6c$var$undefined : $abfde0765dd71b6c$var$getProto(Uint8Array);
var $abfde0765dd71b6c$var$INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? $abfde0765dd71b6c$var$undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? $abfde0765dd71b6c$var$undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": $abfde0765dd71b6c$var$hasSymbols ? $abfde0765dd71b6c$var$getProto([][Symbol.iterator]()) : $abfde0765dd71b6c$var$undefined,
    "%AsyncFromSyncIteratorPrototype%": $abfde0765dd71b6c$var$undefined,
    "%AsyncFunction%": $abfde0765dd71b6c$var$needsEval,
    "%AsyncGenerator%": $abfde0765dd71b6c$var$needsEval,
    "%AsyncGeneratorFunction%": $abfde0765dd71b6c$var$needsEval,
    "%AsyncIteratorPrototype%": $abfde0765dd71b6c$var$needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? $abfde0765dd71b6c$var$undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? $abfde0765dd71b6c$var$undefined : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? $abfde0765dd71b6c$var$undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? $abfde0765dd71b6c$var$undefined : FinalizationRegistry,
    "%Function%": $abfde0765dd71b6c$var$$Function,
    "%GeneratorFunction%": $abfde0765dd71b6c$var$needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $abfde0765dd71b6c$var$hasSymbols ? $abfde0765dd71b6c$var$getProto($abfde0765dd71b6c$var$getProto([][Symbol.iterator]())) : $abfde0765dd71b6c$var$undefined,
    "%JSON%": typeof JSON === "object" ? JSON : $abfde0765dd71b6c$var$undefined,
    "%Map%": typeof Map === "undefined" ? $abfde0765dd71b6c$var$undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !$abfde0765dd71b6c$var$hasSymbols ? $abfde0765dd71b6c$var$undefined : $abfde0765dd71b6c$var$getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? $abfde0765dd71b6c$var$undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? $abfde0765dd71b6c$var$undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? $abfde0765dd71b6c$var$undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? $abfde0765dd71b6c$var$undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !$abfde0765dd71b6c$var$hasSymbols ? $abfde0765dd71b6c$var$undefined : $abfde0765dd71b6c$var$getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? $abfde0765dd71b6c$var$undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $abfde0765dd71b6c$var$hasSymbols ? $abfde0765dd71b6c$var$getProto(""[Symbol.iterator]()) : $abfde0765dd71b6c$var$undefined,
    "%Symbol%": $abfde0765dd71b6c$var$hasSymbols ? Symbol : $abfde0765dd71b6c$var$undefined,
    "%SyntaxError%": $abfde0765dd71b6c$var$$SyntaxError,
    "%ThrowTypeError%": $abfde0765dd71b6c$var$ThrowTypeError,
    "%TypedArray%": $abfde0765dd71b6c$var$TypedArray,
    "%TypeError%": $abfde0765dd71b6c$var$$TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? $abfde0765dd71b6c$var$undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? $abfde0765dd71b6c$var$undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? $abfde0765dd71b6c$var$undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? $abfde0765dd71b6c$var$undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? $abfde0765dd71b6c$var$undefined : WeakSet
};
var $abfde0765dd71b6c$var$doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = $abfde0765dd71b6c$var$getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = $abfde0765dd71b6c$var$getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = $abfde0765dd71b6c$var$getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen) value = $abfde0765dd71b6c$var$getProto(gen.prototype);
    }
    $abfde0765dd71b6c$var$INTRINSICS[name] = value;
    return value;
};
var $abfde0765dd71b6c$var$LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};

var $cGUiJ = parcelRequire("cGUiJ");

var $bAyil = parcelRequire("bAyil");
var $abfde0765dd71b6c$var$$concat = $cGUiJ.call(Function.call, Array.prototype.concat);
var $abfde0765dd71b6c$var$$spliceApply = $cGUiJ.call(Function.apply, Array.prototype.splice);
var $abfde0765dd71b6c$var$$replace = $cGUiJ.call(Function.call, String.prototype.replace);
var $abfde0765dd71b6c$var$$strSlice = $cGUiJ.call(Function.call, String.prototype.slice);
var $abfde0765dd71b6c$var$$exec = $cGUiJ.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $abfde0765dd71b6c$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $abfde0765dd71b6c$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $abfde0765dd71b6c$var$stringToPath = function stringToPath(string) {
    var first = $abfde0765dd71b6c$var$$strSlice(string, 0, 1);
    var last = $abfde0765dd71b6c$var$$strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $abfde0765dd71b6c$var$$SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $abfde0765dd71b6c$var$$SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $abfde0765dd71b6c$var$$replace(string, $abfde0765dd71b6c$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $abfde0765dd71b6c$var$$replace(subString, $abfde0765dd71b6c$var$reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var $abfde0765dd71b6c$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($bAyil($abfde0765dd71b6c$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $abfde0765dd71b6c$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if ($bAyil($abfde0765dd71b6c$var$INTRINSICS, intrinsicName)) {
        var value = $abfde0765dd71b6c$var$INTRINSICS[intrinsicName];
        if (value === $abfde0765dd71b6c$var$needsEval) value = $abfde0765dd71b6c$var$doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $abfde0765dd71b6c$var$$TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $abfde0765dd71b6c$var$$SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $abfde0765dd71b6c$var$$TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $abfde0765dd71b6c$var$$TypeError('"allowMissing" argument must be a boolean');
    if ($abfde0765dd71b6c$var$$exec(/^%?[^%]*%?$/, name) === null) throw new $abfde0765dd71b6c$var$$SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = $abfde0765dd71b6c$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = $abfde0765dd71b6c$var$getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $abfde0765dd71b6c$var$$spliceApply(parts, $abfde0765dd71b6c$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $abfde0765dd71b6c$var$$strSlice(part, 0, 1);
        var last = $abfde0765dd71b6c$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $abfde0765dd71b6c$var$$SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if ($bAyil($abfde0765dd71b6c$var$INTRINSICS, intrinsicRealName)) value = $abfde0765dd71b6c$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $abfde0765dd71b6c$var$$TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($abfde0765dd71b6c$var$$gOPD && i + 1 >= parts.length) {
                var desc = $abfde0765dd71b6c$var$$gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = $bAyil(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $abfde0765dd71b6c$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRequire.register("gk9jG", function(module, exports) {
"use strict";
var $be25bda16824ef33$var$origSymbol = typeof Symbol !== "undefined" && Symbol;

var $9CIBt = parcelRequire("9CIBt");
module.exports = function hasNativeSymbols() {
    if (typeof $be25bda16824ef33$var$origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof $be25bda16824ef33$var$origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return $9CIBt();
};

});

parcelRequire.register("cGUiJ", function(module, exports) {
"use strict";

var $kRslE = parcelRequire("kRslE");
module.exports = Function.prototype.bind || $kRslE;

});
parcelRequire.register("kRslE", function(module, exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var $f2febf3995b2dbf8$var$ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var $f2febf3995b2dbf8$var$slice = Array.prototype.slice;
var $f2febf3995b2dbf8$var$toStr = Object.prototype.toString;
var $f2febf3995b2dbf8$var$funcType = "[object Function]";
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || $f2febf3995b2dbf8$var$toStr.call(target) !== $f2febf3995b2dbf8$var$funcType) throw new TypeError($f2febf3995b2dbf8$var$ERROR_MESSAGE + target);
    var args = $f2febf3995b2dbf8$var$slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat($f2febf3995b2dbf8$var$slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat($f2febf3995b2dbf8$var$slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push("$" + i);
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

});


parcelRequire.register("bAyil", function(module, exports) {
"use strict";

var $cGUiJ = parcelRequire("cGUiJ");
module.exports = $cGUiJ.call(Function.call, Object.prototype.hasOwnProperty);

});


parcelRequire.register("4vCVp", function(module, exports) {
"use strict";

var $cGUiJ = parcelRequire("cGUiJ");

var $eLvu2 = parcelRequire("eLvu2");
var $3488405fab8fc9c9$var$$apply = $eLvu2("%Function.prototype.apply%");
var $3488405fab8fc9c9$var$$call = $eLvu2("%Function.prototype.call%");
var $3488405fab8fc9c9$var$$reflectApply = $eLvu2("%Reflect.apply%", true) || $cGUiJ.call($3488405fab8fc9c9$var$$call, $3488405fab8fc9c9$var$$apply);
var $3488405fab8fc9c9$var$$gOPD = $eLvu2("%Object.getOwnPropertyDescriptor%", true);
var $3488405fab8fc9c9$var$$defineProperty = $eLvu2("%Object.defineProperty%", true);
var $3488405fab8fc9c9$var$$max = $eLvu2("%Math.max%");
if ($3488405fab8fc9c9$var$$defineProperty) try {
    $3488405fab8fc9c9$var$$defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $3488405fab8fc9c9$var$$defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $3488405fab8fc9c9$var$$reflectApply($cGUiJ, $3488405fab8fc9c9$var$$call, arguments);
    if ($3488405fab8fc9c9$var$$gOPD && $3488405fab8fc9c9$var$$defineProperty) {
        var desc = $3488405fab8fc9c9$var$$gOPD(func, "length");
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $3488405fab8fc9c9$var$$defineProperty(func, "length", {
            value: 1 + $3488405fab8fc9c9$var$$max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var $3488405fab8fc9c9$var$applyBind = function applyBind() {
    return $3488405fab8fc9c9$var$$reflectApply($cGUiJ, $3488405fab8fc9c9$var$$apply, arguments);
};
if ($3488405fab8fc9c9$var$$defineProperty) $3488405fab8fc9c9$var$$defineProperty(module.exports, "apply", {
    value: $3488405fab8fc9c9$var$applyBind
});
else module.exports.apply = $3488405fab8fc9c9$var$applyBind;

});



parcelRequire.register("67Ua0", function(module, exports) {
"use strict";
var $0126b1624ec5517e$var$toStr = Object.prototype.toString;
var $0126b1624ec5517e$var$fnToStr = Function.prototype.toString;
var $0126b1624ec5517e$var$isFnRegex = /^\s*(?:function)?\*/;

var $0126b1624ec5517e$var$hasToStringTag = (parcelRequire("bRQ1z"))();
var $0126b1624ec5517e$var$getProto = Object.getPrototypeOf;
var $0126b1624ec5517e$var$getGeneratorFunc = function() {
    if (!$0126b1624ec5517e$var$hasToStringTag) return false;
    try {
        return Function("return function*() {}")();
    } catch (e) {}
};
var $0126b1624ec5517e$var$GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") return false;
    if ($0126b1624ec5517e$var$isFnRegex.test($0126b1624ec5517e$var$fnToStr.call(fn))) return true;
    if (!$0126b1624ec5517e$var$hasToStringTag) {
        var str = $0126b1624ec5517e$var$toStr.call(fn);
        return str === "[object GeneratorFunction]";
    }
    if (!$0126b1624ec5517e$var$getProto) return false;
    if (typeof $0126b1624ec5517e$var$GeneratorFunction === "undefined") {
        var generatorFunc = $0126b1624ec5517e$var$getGeneratorFunc();
        $0126b1624ec5517e$var$GeneratorFunction = generatorFunc ? $0126b1624ec5517e$var$getProto(generatorFunc) : false;
    }
    return $0126b1624ec5517e$var$getProto(fn) === $0126b1624ec5517e$var$GeneratorFunction;
};

});

parcelRequire.register("iDnm5", function(module, exports) {
"use strict";

var $2rNzo = parcelRequire("2rNzo");

var $12rNh = parcelRequire("12rNh");

var $hixHu = parcelRequire("hixHu");

var $eURs7 = parcelRequire("eURs7");
var $d90dfc6439fdfa04$var$$toString = $hixHu("Object.prototype.toString");

var $d90dfc6439fdfa04$var$hasToStringTag = (parcelRequire("bRQ1z"))();
var $d90dfc6439fdfa04$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
var $d90dfc6439fdfa04$var$typedArrays = $12rNh();
var $d90dfc6439fdfa04$var$$slice = $hixHu("String.prototype.slice");
var $d90dfc6439fdfa04$var$toStrTags = {};
var $d90dfc6439fdfa04$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($d90dfc6439fdfa04$var$hasToStringTag && $eURs7 && $d90dfc6439fdfa04$var$getPrototypeOf) $2rNzo($d90dfc6439fdfa04$var$typedArrays, function(typedArray) {
    if (typeof $d90dfc6439fdfa04$var$g[typedArray] === "function") {
        var arr = new $d90dfc6439fdfa04$var$g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = $d90dfc6439fdfa04$var$getPrototypeOf(arr);
            var descriptor = $eURs7(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = $d90dfc6439fdfa04$var$getPrototypeOf(proto);
                descriptor = $eURs7(superProto, Symbol.toStringTag);
            }
            $d90dfc6439fdfa04$var$toStrTags[typedArray] = descriptor.get;
        }
    }
});
var $d90dfc6439fdfa04$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    $2rNzo($d90dfc6439fdfa04$var$toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {}
    });
    return foundName;
};

var $jatUB = parcelRequire("jatUB");
module.exports = function whichTypedArray(value) {
    if (!$jatUB(value)) return false;
    if (!$d90dfc6439fdfa04$var$hasToStringTag || !(Symbol.toStringTag in value)) return $d90dfc6439fdfa04$var$$slice($d90dfc6439fdfa04$var$$toString(value), 8, -1);
    return $d90dfc6439fdfa04$var$tryTypedArrays(value);
};

});
parcelRequire.register("2rNzo", function(module, exports) {
"use strict";

var $5Ri5u = parcelRequire("5Ri5u");
var $1c848ded1fddae7e$var$toStr = Object.prototype.toString;
var $1c848ded1fddae7e$var$hasOwnProperty = Object.prototype.hasOwnProperty;
var $1c848ded1fddae7e$var$forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if ($1c848ded1fddae7e$var$hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var $1c848ded1fddae7e$var$forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var $1c848ded1fddae7e$var$forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if ($1c848ded1fddae7e$var$hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var $1c848ded1fddae7e$var$forEach = function forEach(list, iterator, thisArg) {
    if (!$5Ri5u(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if ($1c848ded1fddae7e$var$toStr.call(list) === "[object Array]") $1c848ded1fddae7e$var$forEachArray(list, iterator, receiver);
    else if (typeof list === "string") $1c848ded1fddae7e$var$forEachString(list, iterator, receiver);
    else $1c848ded1fddae7e$var$forEachObject(list, iterator, receiver);
};
module.exports = $1c848ded1fddae7e$var$forEach;

});
parcelRequire.register("5Ri5u", function(module, exports) {
"use strict";
var $443feecf1b70b2c5$var$fnToStr = Function.prototype.toString;
var $443feecf1b70b2c5$var$reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var $443feecf1b70b2c5$var$badArrayLike;
var $443feecf1b70b2c5$var$isCallableMarker;
if (typeof $443feecf1b70b2c5$var$reflectApply === "function" && typeof Object.defineProperty === "function") try {
    $443feecf1b70b2c5$var$badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
            throw $443feecf1b70b2c5$var$isCallableMarker;
        }
    });
    $443feecf1b70b2c5$var$isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    $443feecf1b70b2c5$var$reflectApply(function() {
        throw 42;
    }, null, $443feecf1b70b2c5$var$badArrayLike);
} catch (_) {
    if (_ !== $443feecf1b70b2c5$var$isCallableMarker) $443feecf1b70b2c5$var$reflectApply = null;
}
else $443feecf1b70b2c5$var$reflectApply = null;
var $443feecf1b70b2c5$var$constructorRegex = /^\s*class\b/;
var $443feecf1b70b2c5$var$isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = $443feecf1b70b2c5$var$fnToStr.call(value);
        return $443feecf1b70b2c5$var$constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var $443feecf1b70b2c5$var$tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if ($443feecf1b70b2c5$var$isES6ClassFn(value)) return false;
        $443feecf1b70b2c5$var$fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var $443feecf1b70b2c5$var$toStr = Object.prototype.toString;
var $443feecf1b70b2c5$var$objectClass = "[object Object]";
var $443feecf1b70b2c5$var$fnClass = "[object Function]";
var $443feecf1b70b2c5$var$genClass = "[object GeneratorFunction]";
var $443feecf1b70b2c5$var$ddaClass = "[object HTMLAllCollection]"; // IE 11
var $443feecf1b70b2c5$var$ddaClass2 = "[object HTML document.all class]";
var $443feecf1b70b2c5$var$ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var $443feecf1b70b2c5$var$hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var $443feecf1b70b2c5$var$isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var $443feecf1b70b2c5$var$isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var $443feecf1b70b2c5$var$all = document.all;
    if ($443feecf1b70b2c5$var$toStr.call($443feecf1b70b2c5$var$all) === $443feecf1b70b2c5$var$toStr.call(document.all)) $443feecf1b70b2c5$var$isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if (($443feecf1b70b2c5$var$isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = $443feecf1b70b2c5$var$toStr.call(value);
            return (str === $443feecf1b70b2c5$var$ddaClass || str === $443feecf1b70b2c5$var$ddaClass2 || str === $443feecf1b70b2c5$var$ddaClass3 // opera 12.16
             || str === $443feecf1b70b2c5$var$objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = $443feecf1b70b2c5$var$reflectApply ? function isCallable(value) {
    if ($443feecf1b70b2c5$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        $443feecf1b70b2c5$var$reflectApply(value, null, $443feecf1b70b2c5$var$badArrayLike);
    } catch (e) {
        if (e !== $443feecf1b70b2c5$var$isCallableMarker) return false;
    }
    return !$443feecf1b70b2c5$var$isES6ClassFn(value) && $443feecf1b70b2c5$var$tryFunctionObject(value);
} : function isCallable(value) {
    if ($443feecf1b70b2c5$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if ($443feecf1b70b2c5$var$hasToStringTag) return $443feecf1b70b2c5$var$tryFunctionObject(value);
    if ($443feecf1b70b2c5$var$isES6ClassFn(value)) return false;
    var strClass = $443feecf1b70b2c5$var$toStr.call(value);
    if (strClass !== $443feecf1b70b2c5$var$fnClass && strClass !== $443feecf1b70b2c5$var$genClass && !/^\[object HTML/.test(strClass)) return false;
    return $443feecf1b70b2c5$var$tryFunctionObject(value);
};

});


parcelRequire.register("12rNh", function(module, exports) {
"use strict";
var $0c1b899ff13e9c3d$var$possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
];
var $0c1b899ff13e9c3d$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < $0c1b899ff13e9c3d$var$possibleNames.length; i++)if (typeof $0c1b899ff13e9c3d$var$g[$0c1b899ff13e9c3d$var$possibleNames[i]] === "function") out[out.length] = $0c1b899ff13e9c3d$var$possibleNames[i];
    return out;
};

});

parcelRequire.register("eURs7", function(module, exports) {
"use strict";

var $eLvu2 = parcelRequire("eLvu2");
var $adbfc237a776fda0$var$$gOPD = $eLvu2("%Object.getOwnPropertyDescriptor%", true);
if ($adbfc237a776fda0$var$$gOPD) try {
    $adbfc237a776fda0$var$$gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $adbfc237a776fda0$var$$gOPD = null;
}
module.exports = $adbfc237a776fda0$var$$gOPD;

});

parcelRequire.register("jatUB", function(module, exports) {
"use strict";

var $2rNzo = parcelRequire("2rNzo");

var $12rNh = parcelRequire("12rNh");

var $hixHu = parcelRequire("hixHu");
var $df4627646d614549$var$$toString = $hixHu("Object.prototype.toString");

var $df4627646d614549$var$hasToStringTag = (parcelRequire("bRQ1z"))();

var $eURs7 = parcelRequire("eURs7");
var $df4627646d614549$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
var $df4627646d614549$var$typedArrays = $12rNh();
var $df4627646d614549$var$$indexOf = $hixHu("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $df4627646d614549$var$$slice = $hixHu("String.prototype.slice");
var $df4627646d614549$var$toStrTags = {};
var $df4627646d614549$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($df4627646d614549$var$hasToStringTag && $eURs7 && $df4627646d614549$var$getPrototypeOf) $2rNzo($df4627646d614549$var$typedArrays, function(typedArray) {
    var arr = new $df4627646d614549$var$g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = $df4627646d614549$var$getPrototypeOf(arr);
        var descriptor = $eURs7(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = $df4627646d614549$var$getPrototypeOf(proto);
            descriptor = $eURs7(superProto, Symbol.toStringTag);
        }
        $df4627646d614549$var$toStrTags[typedArray] = descriptor.get;
    }
});
var $df4627646d614549$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    $2rNzo($df4627646d614549$var$toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {}
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!$df4627646d614549$var$hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $df4627646d614549$var$$slice($df4627646d614549$var$$toString(value), 8, -1);
        return $df4627646d614549$var$$indexOf($df4627646d614549$var$typedArrays, tag) > -1;
    }
    if (!$eURs7) return false;
    return $df4627646d614549$var$tryTypedArrays(value);
};

});



parcelRequire.register("dvrpm", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};

});

parcelRequire.register("eLCAI", function(module, exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});



parcelRequire.register("kIBFF", function(module, exports) {
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c

var $fx06q = parcelRequire("fx06q");
"use strict";
function $f1552360e08be7ef$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $f1552360e08be7ef$var$_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function $f1552360e08be7ef$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $f1552360e08be7ef$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $f1552360e08be7ef$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $f1552360e08be7ef$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $f1552360e08be7ef$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $f1552360e08be7ef$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $f1552360e08be7ef$var$_possibleConstructorReturn(self, call) {
    if (call && ($f1552360e08be7ef$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $f1552360e08be7ef$var$_assertThisInitialized(self);
}
function $f1552360e08be7ef$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $f1552360e08be7ef$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $f1552360e08be7ef$var$_setPrototypeOf(subClass, superClass);
}
function $f1552360e08be7ef$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $f1552360e08be7ef$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !$f1552360e08be7ef$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $f1552360e08be7ef$var$_construct(Class, arguments, $f1552360e08be7ef$var$_getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $f1552360e08be7ef$var$_setPrototypeOf(Wrapper, Class);
    };
    return $f1552360e08be7ef$var$_wrapNativeSuper(Class);
}
function $f1552360e08be7ef$var$isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function $f1552360e08be7ef$var$_construct(Parent, args, Class) {
    if ($f1552360e08be7ef$var$isNativeReflectConstruct()) $f1552360e08be7ef$var$_construct = Reflect.construct;
    else $f1552360e08be7ef$var$_construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $f1552360e08be7ef$var$_setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return $f1552360e08be7ef$var$_construct.apply(null, arguments);
}
function $f1552360e08be7ef$var$_isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function $f1552360e08be7ef$var$_setPrototypeOf(o, p) {
    $f1552360e08be7ef$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $f1552360e08be7ef$var$_setPrototypeOf(o, p);
}
function $f1552360e08be7ef$var$_getPrototypeOf(o) {
    $f1552360e08be7ef$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $f1552360e08be7ef$var$_getPrototypeOf(o);
}
function $f1552360e08be7ef$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $f1552360e08be7ef$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $f1552360e08be7ef$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $f1552360e08be7ef$var$_typeof(obj);
}

var $cQObD = parcelRequire("cQObD");
var $f1552360e08be7ef$var$inspect = $cQObD.inspect;

var $5NG3l = parcelRequire("5NG3l");
var $f1552360e08be7ef$var$ERR_INVALID_ARG_TYPE = $5NG3l.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $f1552360e08be7ef$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function $f1552360e08be7ef$var$repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var $f1552360e08be7ef$var$blue = "";
var $f1552360e08be7ef$var$green = "";
var $f1552360e08be7ef$var$red = "";
var $f1552360e08be7ef$var$white = "";
var $f1552360e08be7ef$var$kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var $f1552360e08be7ef$var$kMaxShortLength = 10;
function $f1552360e08be7ef$var$copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
        value: source.message
    });
    return target;
}
function $f1552360e08be7ef$var$inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return $f1552360e08be7ef$var$inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function $f1552360e08be7ef$var$createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = $f1552360e08be7ef$var$inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = $f1552360e08be7ef$var$inspectValue(expected).split("\n");
    var i = 0;
    var indicator = ""; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === "strictEqual" && $f1552360e08be7ef$var$_typeof(actual) === "object" && $f1552360e08be7ef$var$_typeof(expected) === "object" && actual !== null && expected !== null) operator = "strictEqualObject";
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= $f1552360e08be7ef$var$kMaxShortLength) {
            if (($f1552360e08be7ef$var$_typeof(actual) !== "object" || actual === null) && ($f1552360e08be7ef$var$_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat($f1552360e08be7ef$var$kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== "strictEqualObject") {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = $fx06q.stderr && $fx06q.stderr.isTTY ? $fx06q.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat($f1552360e08be7ef$var$repeat(" ", i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split("\n"); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat($f1552360e08be7ef$var$kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
        end = "\n".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white).concat(end);
        skipped = true;
    }
    if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
    }
    var printedLines = 0;
    var msg = $f1552360e08be7ef$var$kReadableOperator[operator] + "\n".concat($f1552360e08be7ef$var$green, "+ actual").concat($f1552360e08be7ef$var$white, " ").concat($f1552360e08be7ef$var$red, "- expected").concat($f1552360e08be7ef$var$white);
    var skippedMsg = " ".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat($f1552360e08be7ef$var$red, "-").concat($f1552360e08be7ef$var$white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat($f1552360e08be7ef$var$green, "+").concat($f1552360e08be7ef$var$white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!$f1552360e08be7ef$var$endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && $f1552360e08be7ef$var$endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ",";
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat($f1552360e08be7ef$var$green, "+").concat($f1552360e08be7ef$var$white, " ").concat(actualLine);
                other += "\n".concat($f1552360e08be7ef$var$red, "-").concat($f1552360e08be7ef$var$white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ""; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white).concat(other, "\n") + "".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var $f1552360e08be7ef$var$AssertionError = /*#__PURE__*/ function(_Error) {
    $f1552360e08be7ef$var$_inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        $f1552360e08be7ef$var$_classCallCheck(this, AssertionError);
        if ($f1552360e08be7ef$var$_typeof(options) !== "object" || options === null) throw new $f1552360e08be7ef$var$ERR_INVALID_ARG_TYPE("options", "Object", options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = $f1552360e08be7ef$var$_possibleConstructorReturn(this, $f1552360e08be7ef$var$_getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if ($fx06q.stderr && $fx06q.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if ($fx06q.stderr && $fx06q.stderr.getColorDepth && $fx06q.stderr.getColorDepth() !== 1) {
                    $f1552360e08be7ef$var$blue = "\x1b[34m";
                    $f1552360e08be7ef$var$green = "\x1b[32m";
                    $f1552360e08be7ef$var$white = "\x1b[39m";
                    $f1552360e08be7ef$var$red = "\x1b[31m";
                } else {
                    $f1552360e08be7ef$var$blue = "";
                    $f1552360e08be7ef$var$green = "";
                    $f1552360e08be7ef$var$white = "";
                    $f1552360e08be7ef$var$red = "";
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if ($f1552360e08be7ef$var$_typeof(actual) === "object" && actual !== null && $f1552360e08be7ef$var$_typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                actual = $f1552360e08be7ef$var$copyError(actual);
                expected = $f1552360e08be7ef$var$copyError(expected);
            }
            if (operator === "deepStrictEqual" || operator === "strictEqual") _this = $f1552360e08be7ef$var$_possibleConstructorReturn(this, $f1552360e08be7ef$var$_getPrototypeOf(AssertionError).call(this, $f1552360e08be7ef$var$createErrDiff(actual, expected, operator)));
            else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = $f1552360e08be7ef$var$kReadableOperator[operator];
                var res = $f1552360e08be7ef$var$inspectValue(actual).split("\n"); // In case "actual" is an object, it should not be reference equal.
                if (operator === "notStrictEqual" && $f1552360e08be7ef$var$_typeof(actual) === "object" && actual !== null) base = $f1552360e08be7ef$var$kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat($f1552360e08be7ef$var$blue, "...").concat($f1552360e08be7ef$var$white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = $f1552360e08be7ef$var$_possibleConstructorReturn(this, $f1552360e08be7ef$var$_getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = $f1552360e08be7ef$var$_possibleConstructorReturn(this, $f1552360e08be7ef$var$_getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
            } else {
                var _res = $f1552360e08be7ef$var$inspectValue(actual);
                var other = "";
                var knownOperators = $f1552360e08be7ef$var$kReadableOperator[operator];
                if (operator === "notDeepEqual" || operator === "notEqual") {
                    _res = "".concat($f1552360e08be7ef$var$kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat($f1552360e08be7ef$var$inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === "deepEqual" || operator === "equal") _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = $f1552360e08be7ef$var$_possibleConstructorReturn(this, $f1552360e08be7ef$var$_getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty($f1552360e08be7ef$var$_assertThisInitialized(_this), "name", {
            value: "AssertionError [ERR_ASSERTION]",
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace($f1552360e08be7ef$var$_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = "AssertionError";
        return $f1552360e08be7ef$var$_possibleConstructorReturn(_this);
    }
    $f1552360e08be7ef$var$_createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: $f1552360e08be7ef$var$inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return $f1552360e08be7ef$var$inspect(this, $f1552360e08be7ef$var$_objectSpread({}, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}($f1552360e08be7ef$var$_wrapNativeSuper(Error));
module.exports = $f1552360e08be7ef$var$AssertionError;

});

parcelRequire.register("7Vv1U", function(module, exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ "use strict";
function $5c55ed29c29e2cf7$var$assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError("Cannot convert first argument to object");
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function $5c55ed29c29e2cf7$var$polyfill() {
    if (!Object.assign) Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: $5c55ed29c29e2cf7$var$assign
    });
}
module.exports = {
    assign: $5c55ed29c29e2cf7$var$assign,
    polyfill: $5c55ed29c29e2cf7$var$polyfill
};

});

parcelRequire.register("1mAhH", function(module, exports) {
"use strict";

var $5JxQV = parcelRequire("5JxQV");

var $4vCVp = parcelRequire("4vCVp");

var $6mYeO = parcelRequire("6mYeO");

var $9g2uC = parcelRequire("9g2uC");

var $7u8U2 = parcelRequire("7u8U2");
var $0fe3fddbae693863$var$polyfill = $4vCVp($9g2uC(), Object);
$5JxQV($0fe3fddbae693863$var$polyfill, {
    getPolyfill: $9g2uC,
    implementation: $6mYeO,
    shim: $7u8U2
});
module.exports = $0fe3fddbae693863$var$polyfill;

});
parcelRequire.register("5JxQV", function(module, exports) {
"use strict";

var $absJY = parcelRequire("absJY");
var $42cb6a28a3fbb755$var$hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var $42cb6a28a3fbb755$var$toStr = Object.prototype.toString;
var $42cb6a28a3fbb755$var$concat = Array.prototype.concat;
var $42cb6a28a3fbb755$var$origDefineProperty = Object.defineProperty;
var $42cb6a28a3fbb755$var$isFunction = function(fn) {
    return typeof fn === "function" && $42cb6a28a3fbb755$var$toStr.call(fn) === "[object Function]";
};

var $42cb6a28a3fbb755$var$hasPropertyDescriptors = (parcelRequire("131to"))();
var $42cb6a28a3fbb755$var$supportsDescriptors = $42cb6a28a3fbb755$var$origDefineProperty && $42cb6a28a3fbb755$var$hasPropertyDescriptors;
var $42cb6a28a3fbb755$var$defineProperty = function(object, name, value, predicate) {
    if (name in object && (!$42cb6a28a3fbb755$var$isFunction(predicate) || !predicate())) return;
    if ($42cb6a28a3fbb755$var$supportsDescriptors) $42cb6a28a3fbb755$var$origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value; // eslint-disable-line no-param-reassign
};
var $42cb6a28a3fbb755$var$defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = $absJY(map);
    if ($42cb6a28a3fbb755$var$hasSymbols) props = $42cb6a28a3fbb755$var$concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)$42cb6a28a3fbb755$var$defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
$42cb6a28a3fbb755$var$defineProperties.supportsDescriptors = !!$42cb6a28a3fbb755$var$supportsDescriptors;
module.exports = $42cb6a28a3fbb755$var$defineProperties;

});
parcelRequire.register("absJY", function(module, exports) {
"use strict";
var $76a139baeed5ac9b$var$slice = Array.prototype.slice;

var $aGw5n = parcelRequire("aGw5n");
var $76a139baeed5ac9b$var$origKeys = Object.keys;

var $76a139baeed5ac9b$var$keysShim = $76a139baeed5ac9b$var$origKeys ? function keys(o) {
    return $76a139baeed5ac9b$var$origKeys(o);
} : (parcelRequire("aS4CG"));
var $76a139baeed5ac9b$var$originalKeys = Object.keys;
$76a139baeed5ac9b$var$keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if ($aGw5n(object)) return $76a139baeed5ac9b$var$originalKeys($76a139baeed5ac9b$var$slice.call(object));
            return $76a139baeed5ac9b$var$originalKeys(object);
        };
    } else Object.keys = $76a139baeed5ac9b$var$keysShim;
    return Object.keys || $76a139baeed5ac9b$var$keysShim;
};
module.exports = $76a139baeed5ac9b$var$keysShim;

});
parcelRequire.register("aGw5n", function(module, exports) {
"use strict";
var $7c76b73304879d1f$var$toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = $7c76b73304879d1f$var$toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $7c76b73304879d1f$var$toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

});

parcelRequire.register("aS4CG", function(module, exports) {
"use strict";
var $7ea2888624a9811e$var$keysShim;

if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var $7ea2888624a9811e$var$has = Object.prototype.hasOwnProperty;
    var $7ea2888624a9811e$var$toStr = Object.prototype.toString;
    var $7ea2888624a9811e$var$isArgs = (parcelRequire("aGw5n")); // eslint-disable-line global-require
    var $7ea2888624a9811e$var$isEnumerable = Object.prototype.propertyIsEnumerable;
    var $7ea2888624a9811e$var$hasDontEnumBug = !$7ea2888624a9811e$var$isEnumerable.call({
        toString: null
    }, "toString");
    var $7ea2888624a9811e$var$hasProtoEnumBug = $7ea2888624a9811e$var$isEnumerable.call(function() {}, "prototype");
    var $7ea2888624a9811e$var$dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var $7ea2888624a9811e$var$equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var $7ea2888624a9811e$var$excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var $7ea2888624a9811e$var$hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!$7ea2888624a9811e$var$excludedKeys["$" + k] && $7ea2888624a9811e$var$has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                $7ea2888624a9811e$var$equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var $7ea2888624a9811e$var$equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !$7ea2888624a9811e$var$hasAutomationEqualityBug) return $7ea2888624a9811e$var$equalsConstructorPrototype(o);
        try {
            return $7ea2888624a9811e$var$equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    $7ea2888624a9811e$var$keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = $7ea2888624a9811e$var$toStr.call(object) === "[object Function]";
        var isArguments = $7ea2888624a9811e$var$isArgs(object);
        var isString = isObject && $7ea2888624a9811e$var$toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = $7ea2888624a9811e$var$hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !$7ea2888624a9811e$var$has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && $7ea2888624a9811e$var$has.call(object, name)) theKeys.push(String(name));
        }
        if ($7ea2888624a9811e$var$hasDontEnumBug) {
            var skipConstructor = $7ea2888624a9811e$var$equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < $7ea2888624a9811e$var$dontEnums.length; ++k)if (!(skipConstructor && $7ea2888624a9811e$var$dontEnums[k] === "constructor") && $7ea2888624a9811e$var$has.call(object, $7ea2888624a9811e$var$dontEnums[k])) theKeys.push($7ea2888624a9811e$var$dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = $7ea2888624a9811e$var$keysShim;

});


parcelRequire.register("131to", function(module, exports) {
"use strict";

var $eLvu2 = parcelRequire("eLvu2");
var $0c3736c6e8de1404$var$$defineProperty = $eLvu2("%Object.defineProperty%", true);
var $0c3736c6e8de1404$var$hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($0c3736c6e8de1404$var$$defineProperty) try {
        $0c3736c6e8de1404$var$$defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
$0c3736c6e8de1404$var$hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$0c3736c6e8de1404$var$hasPropertyDescriptors()) return null;
    try {
        return $0c3736c6e8de1404$var$$defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = $0c3736c6e8de1404$var$hasPropertyDescriptors;

});


parcelRequire.register("6mYeO", function(module, exports) {
"use strict";
var $4a338626610f9234$var$numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if ($4a338626610f9234$var$numberIsNaN(a) && $4a338626610f9234$var$numberIsNaN(b)) return true;
    return false;
};

});

parcelRequire.register("9g2uC", function(module, exports) {
"use strict";

var $6mYeO = parcelRequire("6mYeO");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : $6mYeO;
};

});

parcelRequire.register("7u8U2", function(module, exports) {
"use strict";

var $9g2uC = parcelRequire("9g2uC");

var $5JxQV = parcelRequire("5JxQV");
module.exports = function shimObjectIs() {
    var polyfill = $9g2uC();
    $5JxQV(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

});


parcelRequire.register("iQn0B", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
function $db7eee64200fc425$var$_slicedToArray(arr, i) {
    return $db7eee64200fc425$var$_arrayWithHoles(arr) || $db7eee64200fc425$var$_iterableToArrayLimit(arr, i) || $db7eee64200fc425$var$_nonIterableRest();
}
function $db7eee64200fc425$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function $db7eee64200fc425$var$_iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $db7eee64200fc425$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $db7eee64200fc425$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $db7eee64200fc425$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $db7eee64200fc425$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $db7eee64200fc425$var$_typeof(obj);
}
var $db7eee64200fc425$var$regexFlagsSupported = /a/g.flags !== undefined;
var $db7eee64200fc425$var$arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var $db7eee64200fc425$var$arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};

var $db7eee64200fc425$var$objectIs = Object.is ? Object.is : (parcelRequire("1mAhH"));
var $db7eee64200fc425$var$objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};

var $db7eee64200fc425$var$numberIsNaN = Number.isNaN ? Number.isNaN : (parcelRequire("6Wntc"));
function $db7eee64200fc425$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $db7eee64200fc425$var$hasOwnProperty = $db7eee64200fc425$var$uncurryThis(Object.prototype.hasOwnProperty);
var $db7eee64200fc425$var$propertyIsEnumerable = $db7eee64200fc425$var$uncurryThis(Object.prototype.propertyIsEnumerable);
var $db7eee64200fc425$var$objectToString = $db7eee64200fc425$var$uncurryThis(Object.prototype.toString);

var $cQObD = parcelRequire("cQObD");
var $db7eee64200fc425$require$_require$types = $cQObD.types;
var $db7eee64200fc425$var$isAnyArrayBuffer = $db7eee64200fc425$require$_require$types.isAnyArrayBuffer, $db7eee64200fc425$var$isArrayBufferView = $db7eee64200fc425$require$_require$types.isArrayBufferView, $db7eee64200fc425$var$isDate = $db7eee64200fc425$require$_require$types.isDate, $db7eee64200fc425$var$isMap = $db7eee64200fc425$require$_require$types.isMap, $db7eee64200fc425$var$isRegExp = $db7eee64200fc425$require$_require$types.isRegExp, $db7eee64200fc425$var$isSet = $db7eee64200fc425$require$_require$types.isSet, $db7eee64200fc425$var$isNativeError = $db7eee64200fc425$require$_require$types.isNativeError, $db7eee64200fc425$var$isBoxedPrimitive = $db7eee64200fc425$require$_require$types.isBoxedPrimitive, $db7eee64200fc425$var$isNumberObject = $db7eee64200fc425$require$_require$types.isNumberObject, $db7eee64200fc425$var$isStringObject = $db7eee64200fc425$require$_require$types.isStringObject, $db7eee64200fc425$var$isBooleanObject = $db7eee64200fc425$require$_require$types.isBooleanObject, $db7eee64200fc425$var$isBigIntObject = $db7eee64200fc425$require$_require$types.isBigIntObject, $db7eee64200fc425$var$isSymbolObject = $db7eee64200fc425$require$_require$types.isSymbolObject, $db7eee64200fc425$var$isFloat32Array = $db7eee64200fc425$require$_require$types.isFloat32Array, $db7eee64200fc425$var$isFloat64Array = $db7eee64200fc425$require$_require$types.isFloat64Array;
function $db7eee64200fc425$var$isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function $db7eee64200fc425$var$getOwnNonIndexProperties(value) {
    return Object.keys(value).filter($db7eee64200fc425$var$isNonIndex).concat($db7eee64200fc425$var$objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function $db7eee64200fc425$var$compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var $db7eee64200fc425$var$ONLY_ENUMERABLE = undefined;
var $db7eee64200fc425$var$kStrict = true;
var $db7eee64200fc425$var$kLoose = false;
var $db7eee64200fc425$var$kNoIterator = 0;
var $db7eee64200fc425$var$kIsArray = 1;
var $db7eee64200fc425$var$kIsSet = 2;
var $db7eee64200fc425$var$kIsMap = 3; // Check if they have the same source and flags
function $db7eee64200fc425$var$areSimilarRegExps(a, b) {
    return $db7eee64200fc425$var$regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function $db7eee64200fc425$var$areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function $db7eee64200fc425$var$areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return $db7eee64200fc425$var$compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function $db7eee64200fc425$var$areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && $db7eee64200fc425$var$compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function $db7eee64200fc425$var$isEqualBoxedPrimitive(val1, val2) {
    if ($db7eee64200fc425$var$isNumberObject(val1)) return $db7eee64200fc425$var$isNumberObject(val2) && $db7eee64200fc425$var$objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if ($db7eee64200fc425$var$isStringObject(val1)) return $db7eee64200fc425$var$isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if ($db7eee64200fc425$var$isBooleanObject(val1)) return $db7eee64200fc425$var$isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if ($db7eee64200fc425$var$isBigIntObject(val1)) return $db7eee64200fc425$var$isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return $db7eee64200fc425$var$isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function $db7eee64200fc425$var$innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? $db7eee64200fc425$var$objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if ($db7eee64200fc425$var$_typeof(val1) !== "object") return typeof val1 === "number" && $db7eee64200fc425$var$numberIsNaN(val1) && $db7eee64200fc425$var$numberIsNaN(val2);
        if ($db7eee64200fc425$var$_typeof(val2) !== "object" || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || $db7eee64200fc425$var$_typeof(val1) !== "object") {
            if (val2 === null || $db7eee64200fc425$var$_typeof(val2) !== "object") // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || $db7eee64200fc425$var$_typeof(val2) !== "object") return false;
    }
    var val1Tag = $db7eee64200fc425$var$objectToString(val1);
    var val2Tag = $db7eee64200fc425$var$objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = $db7eee64200fc425$var$getOwnNonIndexProperties(val1, $db7eee64200fc425$var$ONLY_ENUMERABLE);
        var keys2 = $db7eee64200fc425$var$getOwnNonIndexProperties(val2, $db7eee64200fc425$var$ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, $db7eee64200fc425$var$kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === "[object Object]") {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!$db7eee64200fc425$var$isMap(val1) && $db7eee64200fc425$var$isMap(val2) || !$db7eee64200fc425$var$isSet(val1) && $db7eee64200fc425$var$isSet(val2)) return false;
    }
    if ($db7eee64200fc425$var$isDate(val1)) {
        if (!$db7eee64200fc425$var$isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if ($db7eee64200fc425$var$isRegExp(val1)) {
        if (!$db7eee64200fc425$var$isRegExp(val2) || !$db7eee64200fc425$var$areSimilarRegExps(val1, val2)) return false;
    } else if ($db7eee64200fc425$var$isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if ($db7eee64200fc425$var$isArrayBufferView(val1)) {
        if (!strict && ($db7eee64200fc425$var$isFloat32Array(val1) || $db7eee64200fc425$var$isFloat64Array(val1))) {
            if (!$db7eee64200fc425$var$areSimilarFloatArrays(val1, val2)) return false;
        } else if (!$db7eee64200fc425$var$areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = $db7eee64200fc425$var$getOwnNonIndexProperties(val1, $db7eee64200fc425$var$ONLY_ENUMERABLE);
        var _keys2 = $db7eee64200fc425$var$getOwnNonIndexProperties(val2, $db7eee64200fc425$var$ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, $db7eee64200fc425$var$kNoIterator, _keys);
    } else if ($db7eee64200fc425$var$isSet(val1)) {
        if (!$db7eee64200fc425$var$isSet(val2) || val1.size !== val2.size) return false;
        return $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, $db7eee64200fc425$var$kIsSet);
    } else if ($db7eee64200fc425$var$isMap(val1)) {
        if (!$db7eee64200fc425$var$isMap(val2) || val1.size !== val2.size) return false;
        return $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, $db7eee64200fc425$var$kIsMap);
    } else if ($db7eee64200fc425$var$isAnyArrayBuffer(val1)) {
        if (!$db7eee64200fc425$var$areEqualArrayBuffers(val1, val2)) return false;
    } else if ($db7eee64200fc425$var$isBoxedPrimitive(val1) && !$db7eee64200fc425$var$isEqualBoxedPrimitive(val1, val2)) return false;
    return $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, $db7eee64200fc425$var$kNoIterator);
}
function $db7eee64200fc425$var$getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return $db7eee64200fc425$var$propertyIsEnumerable(val, k);
    });
}
function $db7eee64200fc425$var$keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!$db7eee64200fc425$var$hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = $db7eee64200fc425$var$objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if ($db7eee64200fc425$var$propertyIsEnumerable(val1, key)) {
                    if (!$db7eee64200fc425$var$propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if ($db7eee64200fc425$var$propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = $db7eee64200fc425$var$objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && $db7eee64200fc425$var$getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = $db7eee64200fc425$var$objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && $db7eee64200fc425$var$getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === $db7eee64200fc425$var$kNoIterator || iterationType === $db7eee64200fc425$var$kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = $db7eee64200fc425$var$objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function $db7eee64200fc425$var$setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = $db7eee64200fc425$var$arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if ($db7eee64200fc425$var$innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function $db7eee64200fc425$var$findLooseMatchingPrimitives(prim) {
    switch($db7eee64200fc425$var$_typeof(prim)){
        case "undefined":
            return null;
        case "object":
            // Only pass in null as object!
            return undefined;
        case "symbol":
            return false;
        case "string":
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case "number":
            if ($db7eee64200fc425$var$numberIsNaN(prim)) return false;
    }
    return true;
}
function $db7eee64200fc425$var$setMightHaveLoosePrim(a, b, prim) {
    var altValue = $db7eee64200fc425$var$findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function $db7eee64200fc425$var$mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = $db7eee64200fc425$var$findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !$db7eee64200fc425$var$innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && $db7eee64200fc425$var$innerDeepEqual(item, curB, false, memo);
}
function $db7eee64200fc425$var$setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = $db7eee64200fc425$var$arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if ($db7eee64200fc425$var$_typeof(val) === "object" && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!$db7eee64200fc425$var$setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = $db7eee64200fc425$var$arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if ($db7eee64200fc425$var$_typeof(_val) === "object" && _val !== null) {
                if (!$db7eee64200fc425$var$setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !$db7eee64200fc425$var$setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function $db7eee64200fc425$var$mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = $db7eee64200fc425$var$arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if ($db7eee64200fc425$var$innerDeepEqual(key1, key2, strict, memo) && $db7eee64200fc425$var$innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function $db7eee64200fc425$var$mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = $db7eee64200fc425$var$arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = $db7eee64200fc425$var$_slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if ($db7eee64200fc425$var$_typeof(key) === "object" && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !$db7eee64200fc425$var$innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!$db7eee64200fc425$var$mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = $db7eee64200fc425$var$arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = $db7eee64200fc425$var$_slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if ($db7eee64200fc425$var$_typeof(key) === "object" && key !== null) {
                if (!$db7eee64200fc425$var$mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !$db7eee64200fc425$var$innerDeepEqual(a.get(key), item, false, memo)) && !$db7eee64200fc425$var$mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function $db7eee64200fc425$var$objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === $db7eee64200fc425$var$kIsSet) {
        if (!$db7eee64200fc425$var$setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === $db7eee64200fc425$var$kIsMap) {
        if (!$db7eee64200fc425$var$mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === $db7eee64200fc425$var$kIsArray) for(; i < a.length; i++){
        if ($db7eee64200fc425$var$hasOwnProperty(a, i)) {
            if (!$db7eee64200fc425$var$hasOwnProperty(b, i) || !$db7eee64200fc425$var$innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if ($db7eee64200fc425$var$hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!$db7eee64200fc425$var$hasOwnProperty(b, key) || !$db7eee64200fc425$var$innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!$db7eee64200fc425$var$innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function $db7eee64200fc425$var$isDeepEqual(val1, val2) {
    return $db7eee64200fc425$var$innerDeepEqual(val1, val2, $db7eee64200fc425$var$kLoose);
}
function $db7eee64200fc425$var$isDeepStrictEqual(val1, val2) {
    return $db7eee64200fc425$var$innerDeepEqual(val1, val2, $db7eee64200fc425$var$kStrict);
}
module.exports = {
    isDeepEqual: $db7eee64200fc425$var$isDeepEqual,
    isDeepStrictEqual: $db7eee64200fc425$var$isDeepStrictEqual
};

});
parcelRequire.register("6Wntc", function(module, exports) {
"use strict";

var $4vCVp = parcelRequire("4vCVp");

var $5JxQV = parcelRequire("5JxQV");

var $fWV7r = parcelRequire("fWV7r");

var $k13Ts = parcelRequire("k13Ts");

var $blo81 = parcelRequire("blo81");
var $50da5d7df554bd10$var$polyfill = $4vCVp($k13Ts(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ $5JxQV($50da5d7df554bd10$var$polyfill, {
    getPolyfill: $k13Ts,
    implementation: $fWV7r,
    shim: $blo81
});
module.exports = $50da5d7df554bd10$var$polyfill;

});
parcelRequire.register("fWV7r", function(module, exports) {
"use strict";
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

});

parcelRequire.register("k13Ts", function(module, exports) {
"use strict";

var $fWV7r = parcelRequire("fWV7r");
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
    return $fWV7r;
};

});

parcelRequire.register("blo81", function(module, exports) {
"use strict";

var $5JxQV = parcelRequire("5JxQV");

var $k13Ts = parcelRequire("k13Ts");
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = $k13Ts();
    $5JxQV(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

});





var $bv3xR = parcelRequire("bv3xR");
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="declarations.d.ts"/>
function $c7c0c0e6fd56e928$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


var $029146892dcf0f5b$exports = {};

$parcel$export($029146892dcf0f5b$exports, "ring", function () { return $029146892dcf0f5b$export$e7d0da6968da5dd; }, function (v) { return $029146892dcf0f5b$export$e7d0da6968da5dd = v; });
$parcel$export($029146892dcf0f5b$exports, "pointer", function () { return $029146892dcf0f5b$export$b7fd2c2937973304; }, function (v) { return $029146892dcf0f5b$export$b7fd2c2937973304 = v; });
$parcel$export($029146892dcf0f5b$exports, "pane", function () { return $029146892dcf0f5b$export$6dff30574f79a202; }, function (v) { return $029146892dcf0f5b$export$6dff30574f79a202 = v; });
var $029146892dcf0f5b$export$e7d0da6968da5dd;
var $029146892dcf0f5b$export$b7fd2c2937973304;
var $029146892dcf0f5b$export$6dff30574f79a202;
$029146892dcf0f5b$export$e7d0da6968da5dd = `GmrByW_ring`;
$029146892dcf0f5b$export$b7fd2c2937973304 = `GmrByW_pointer`;
$029146892dcf0f5b$export$6dff30574f79a202 = `GmrByW_pane`;



function $3c9c5937284b6048$export$5638338adfdf154f(t, min, max) {
    return min + (max - min) * t;
}
function $3c9c5937284b6048$export$61db5837c8aecee1(t, min, max) {
    // The base of the logarithm cancels out during the computation,
    // so we will just use any base, e.g. Euler's number.
    const logMin = Math.log(min);
    const logMax = Math.log(max);
    const logValue = logMin + (logMax - logMin) * t;
    return Math.exp(logValue);
}
function $3c9c5937284b6048$export$79263550b33b988b(pe, elem) {
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
function $3c9c5937284b6048$export$f9b088a47202d605(element, x, y) {
    const { style: style  } = element;
    style.transform = `translate(${x}px, ${y}px)`;
}
const $3c9c5937284b6048$export$fcbc63750ec2a81f = window.AudioContext || window.webkitAudioContext;
/**
 * This is a workaround for some browsers not supporting
 * AudioParam.cancelAndHoldAtTime().
 */ function $3c9c5937284b6048$export$e204a5962a9c046d(audioParam, audioContext) {
    const { currentTime: currentTime  } = audioContext;
    const { value: value  } = audioParam;
    audioParam.cancelScheduledValues(currentTime);
    // eslint-disable-next-line no-param-reassign
    audioParam.value = value;
}


function $c94c7c5f6c0c8eaa$var$extractToneData(toneDataExt) {
    const { tGain: tGain , tFrequency: tFrequency  } = toneDataExt;
    return {
        tGain: tGain,
        tFrequency: tFrequency
    };
}
const $c94c7c5f6c0c8eaa$export$ba43bf67f3d48107 = {
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
class $c94c7c5f6c0c8eaa$var$Tones {
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
                $c94c7c5f6c0c8eaa$var$extractToneData(t)
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
        const gain = (0, $3c9c5937284b6048$export$5638338adfdf154f)(tGain, gainMin, gainMax);
        const { frequencyMinHz: frequencyMinHz , frequencyMaxHz: frequencyMaxHz  } = this._options;
        const frequency = (0, $3c9c5937284b6048$export$61db5837c8aecee1)(tFrequency, frequencyMinHz, frequencyMaxHz);
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
        (0, $3c9c5937284b6048$export$e204a5962a9c046d)(gainParam, this.audioContext);
        (0, $3c9c5937284b6048$export$e204a5962a9c046d)(frequencyParam, this.audioContext);
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
        (0, $3c9c5937284b6048$export$e204a5962a9c046d)(gain, this.audioContext);
        gain.linearRampToValueAtTime(targetGain, updateDoneTimestamp);
    }
    constructor(options = {}){
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "_options", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "toneObjects", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "releasingToneObjects", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "audioContext", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "globalGain", void 0);
        this._options = {
            ...$c94c7c5f6c0c8eaa$export$ba43bf67f3d48107,
            ...options
        };
        this.toneObjects = new Map();
        this.releasingToneObjects = new Set();
        this.audioContext = new (0, $3c9c5937284b6048$export$fcbc63750ec2a81f)();
        this.globalGain = this.audioContext.createGain();
        this.globalGain.gain.value = 0.0;
        this.globalGain.connect(this.audioContext.destination);
        this.applyMute();
    }
}
var $c94c7c5f6c0c8eaa$export$2e2bcd8739ae039 = $c94c7c5f6c0c8eaa$var$Tones;



const $744cb75350643cd4$export$ba43bf67f3d48107 = {
    touchElementCssClasses: [
        (0, (/*@__PURE__*/$parcel$interopDefault($029146892dcf0f5b$exports))).ring
    ],
    touchElementStyle: ""
};
function $744cb75350643cd4$var$queryForPointerIdAll(parent, id) {
    return parent.querySelectorAll(`.${(0, (/*@__PURE__*/$parcel$interopDefault($029146892dcf0f5b$exports))).pointer}[data-pointer-id="${id}"]`);
}
class $744cb75350643cd4$export$2e2bcd8739ae039 {
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
        const { relX: relX , relY: relY  } = (0, $3c9c5937284b6048$export$79263550b33b988b)(pe, this.pane);
        const internalElem = document.createElement("div");
        internalElem.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
        this.refreshPointerElementCss(internalElem);
        const elem = document.createElement("div");
        elem.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
        elem.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($029146892dcf0f5b$exports))).pointer);
        elem.dataset.pointerId = `${pe.pointerId}`;
        elem.appendChild(internalElem);
        this.pane.append(elem);
        this.tones.add(pe.pointerId, relX, relY);
        this.updatePointer(pe);
    }
    updatePointer(pe) {
        if (pe.buttons === 0) return;
        const id = pe.pointerId;
        const elems = $744cb75350643cd4$var$queryForPointerIdAll(this.pane, id);
        const { x: x , y: y , relX: relX , relY: relY  } = (0, $3c9c5937284b6048$export$79263550b33b988b)(pe, this.pane);
        elems.forEach((e)=>(0, $3c9c5937284b6048$export$f9b088a47202d605)(e, x, y));
        this.tones.update(id, relX, relY);
    }
    removePointer(pe) {
        const id = pe.pointerId;
        const elems = $744cb75350643cd4$var$queryForPointerIdAll(this.pane, id);
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
        const elements = this.pane.querySelectorAll(`.${(0, (/*@__PURE__*/$parcel$interopDefault($029146892dcf0f5b$exports))).pointer} > *`);
        elements.forEach(this.refreshPointerElementCss.bind(this));
    }
    constructor(element, options = {}, toneOptions = {}){
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "_options", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "tones", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "handlers", this.getHandlers());
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "element", void 0);
        (0, $c7c0c0e6fd56e928$export$2e2bcd8739ae039)(this, "pane", void 0);
        this._options = {
            ...$744cb75350643cd4$export$ba43bf67f3d48107,
            ...options
        };
        const pane = document.createElement("div");
        pane.setAttribute("touch-action", "none"); // for Pointer Events Polyfill
        pane.classList.add((0, (/*@__PURE__*/$parcel$interopDefault($029146892dcf0f5b$exports))).pane);
        pane.addEventListener("pointerdown", this.handlers.addPointer);
        pane.addEventListener("pointerup", this.handlers.removePointer);
        pane.addEventListener("pointercancel", this.handlers.removePointer);
        pane.addEventListener("contextmenu", (event)=>event.preventDefault());
        while(element.firstChild)element.firstChild.remove();
        element.appendChild(pane);
        this.pane = pane;
        this.element = element;
        this.tones = new (0, $c94c7c5f6c0c8eaa$export$2e2bcd8739ae039)(toneOptions);
    }
}



var $7a022f52578d9005$export$2e2bcd8739ae039 = (0, $744cb75350643cd4$export$2e2bcd8739ae039);


const $dfbc4d2123e1a208$var$d2CElem = document.createElement("div");
function $dfbc4d2123e1a208$export$1e2520dc1e5e78b0(s) {
    const dataAttributeNameDashCase = `data-${s}`;
    $dfbc4d2123e1a208$var$d2CElem.setAttribute(dataAttributeNameDashCase, "");
    const attributeNameCamelCase = Object.keys({
        ...$dfbc4d2123e1a208$var$d2CElem.dataset
    })[0];
    $dfbc4d2123e1a208$var$d2CElem.removeAttribute(dataAttributeNameDashCase);
    return attributeNameCamelCase;
}
function $dfbc4d2123e1a208$export$8e392bba563832c0(s) {
    $dfbc4d2123e1a208$var$d2CElem.dataset[s] = "";
    const dataAttributeNameDashCase = $dfbc4d2123e1a208$var$d2CElem.getAttributeNames()[0];
    $dfbc4d2123e1a208$var$d2CElem.removeAttribute(dataAttributeNameDashCase);
    const attributeNameDashCase = dataAttributeNameDashCase.replace(/^data-/, "");
    return attributeNameDashCase;
}


function $0b794208a63c4534$var$migrateDataAttribute(o, key, e, coerce) {
    const attributeValue = e.dataset[key];
    if (typeof attributeValue !== "undefined") // eslint-disable-next-line no-param-reassign
    o[key] = coerce(attributeValue);
}
const $0b794208a63c4534$var$thereminAttrCoercionMap = new Map();
$0b794208a63c4534$var$thereminAttrCoercionMap.set("touchElementCssClasses", (s)=>s.split(" "));
$0b794208a63c4534$var$thereminAttrCoercionMap.set("touchElementStyle", (s)=>s);
const $0b794208a63c4534$var$toneAttrCoercionMap = new Map();
$0b794208a63c4534$var$toneAttrCoercionMap.set("waveType", (s)=>s);
$0b794208a63c4534$var$toneAttrCoercionMap.set("gainMin", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("gainMax", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("frequencyMinHz", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("frequencyMaxHz", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("attackMs", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("releaseMs", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("updateMs", Number.parseFloat);
$0b794208a63c4534$var$toneAttrCoercionMap.set("mute", ()=>true);
const $0b794208a63c4534$var$attrCoercionMap = new Map([
    ...$0b794208a63c4534$var$thereminAttrCoercionMap.entries(),
    ...$0b794208a63c4534$var$toneAttrCoercionMap.entries()
]);
const $0b794208a63c4534$var$thereminAttrNames = [
    ...$0b794208a63c4534$var$thereminAttrCoercionMap.keys()
].map((k)=>`data-${(0, $dfbc4d2123e1a208$export$8e392bba563832c0)(k)}`);
const $0b794208a63c4534$var$toneAttrNames = [
    ...$0b794208a63c4534$var$toneAttrCoercionMap.keys()
].map((k)=>`data-${(0, $dfbc4d2123e1a208$export$8e392bba563832c0)(k)}`);
const $0b794208a63c4534$var$attrNames = [
    ...$0b794208a63c4534$var$thereminAttrNames,
    ...$0b794208a63c4534$var$toneAttrNames
];
function $0b794208a63c4534$var$initMuskiThereminComponent(e) {
    const m = $0b794208a63c4534$var$migrateDataAttribute;
    const o = {};
    [
        ...$0b794208a63c4534$var$thereminAttrCoercionMap.entries()
    ].forEach(([attr, coerce])=>m(o, attr, e, coerce));
    const to = {};
    [
        ...$0b794208a63c4534$var$toneAttrCoercionMap.entries()
    ].forEach(([attr, coerce])=>m(to, attr, e, coerce));
    const polyphonicTheremin = new (0, $7a022f52578d9005$export$2e2bcd8739ae039)(e, o, to);
    const thereMinAttrObserver = new MutationObserver((mutations)=>{
        // This MutationObserver callback is quite ugly because we have to deal with the
        // PolyphonicThereminOptions and ToneOptions at the same time,
        // which is not easy to get right in TypeScript.
        // TODO: Refactor to avoid @ts-ignore comments
        const thereminOptions = {};
        const toneOptions = {};
        mutations.forEach((mutation)=>{
            if (mutation.attributeName !== null) {
                const camelCaseAttrName = (0, $dfbc4d2123e1a208$export$1e2520dc1e5e78b0)(mutation.attributeName.replace(/^data-/, ""));
                const [options, defaultOptions] = $0b794208a63c4534$var$thereminAttrNames.includes(camelCaseAttrName) ? [
                    thereminOptions,
                    (0, $744cb75350643cd4$export$ba43bf67f3d48107)
                ] : [
                    toneOptions,
                    (0, $c94c7c5f6c0c8eaa$export$ba43bf67f3d48107)
                ];
                const newValue = e.getAttribute(mutation.attributeName);
                if (newValue !== null) // attribute added or changed
                {
                    if (newValue !== mutation.oldValue) {
                        const coerce = $0b794208a63c4534$var$attrCoercionMap.get(camelCaseAttrName);
                        (0, $bv3xR.strict)(typeof coerce !== "undefined");
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        options[camelCaseAttrName] = coerce(newValue);
                    }
                } else // attribute removed -> set to default value
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                options[camelCaseAttrName] = defaultOptions[camelCaseAttrName];
            }
        });
        polyphonicTheremin.applyOptions(thereminOptions);
        polyphonicTheremin.applyToneOptions(toneOptions);
    });
    thereMinAttrObserver.observe(e, {
        attributeFilter: $0b794208a63c4534$var$attrNames,
        attributes: true,
        attributeOldValue: true
    });
}
document.querySelectorAll('*[data-component="muski-theremin"]').forEach($0b794208a63c4534$var$initMuskiThereminComponent);

})();
//# sourceMappingURL=muski-theremin.js.map
