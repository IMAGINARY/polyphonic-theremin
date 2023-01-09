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
parcelRequire.register("01fxr", function(module, exports) {
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

var $aL6Yv = parcelRequire("aL6Yv");
"use strict";
function $003c25bbaad3f93e$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $003c25bbaad3f93e$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $003c25bbaad3f93e$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $003c25bbaad3f93e$var$_typeof(obj);
}
function $003c25bbaad3f93e$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

var $8AOCM = parcelRequire("8AOCM");
var $003c25bbaad3f93e$var$_require$codes = $8AOCM.codes, $003c25bbaad3f93e$var$ERR_AMBIGUOUS_ARGUMENT = $003c25bbaad3f93e$var$_require$codes.ERR_AMBIGUOUS_ARGUMENT, $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE = $003c25bbaad3f93e$var$_require$codes.ERR_INVALID_ARG_TYPE, $003c25bbaad3f93e$var$ERR_INVALID_ARG_VALUE = $003c25bbaad3f93e$var$_require$codes.ERR_INVALID_ARG_VALUE, $003c25bbaad3f93e$var$ERR_INVALID_RETURN_VALUE = $003c25bbaad3f93e$var$_require$codes.ERR_INVALID_RETURN_VALUE, $003c25bbaad3f93e$var$ERR_MISSING_ARGS = $003c25bbaad3f93e$var$_require$codes.ERR_MISSING_ARGS;

var $hBVdF = parcelRequire("hBVdF");

var $js5mz = parcelRequire("js5mz");
var $003c25bbaad3f93e$var$inspect = $js5mz.inspect;

var $js5mz = parcelRequire("js5mz");
var $003c25bbaad3f93e$require$_require$types = $js5mz.types;
var $003c25bbaad3f93e$var$isPromise = $003c25bbaad3f93e$require$_require$types.isPromise, $003c25bbaad3f93e$var$isRegExp = $003c25bbaad3f93e$require$_require$types.isRegExp;

var $003c25bbaad3f93e$var$objectAssign = Object.assign ? Object.assign : (parcelRequire("kJg6d")).assign;

var $003c25bbaad3f93e$var$objectIs = Object.is ? Object.is : (parcelRequire("545l1"));
var $003c25bbaad3f93e$var$errorCache = new Map();
var $003c25bbaad3f93e$var$isDeepEqual;
var $003c25bbaad3f93e$var$isDeepStrictEqual;
var $003c25bbaad3f93e$var$parseExpressionAt;
var $003c25bbaad3f93e$var$findNodeAround;
var $003c25bbaad3f93e$var$decoder;

function $003c25bbaad3f93e$var$lazyLoadComparison() {
    var comparison = (parcelRequire("6EL2C"));
    $003c25bbaad3f93e$var$isDeepEqual = comparison.isDeepEqual;
    $003c25bbaad3f93e$var$isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var $003c25bbaad3f93e$var$escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var $003c25bbaad3f93e$var$meta = [
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
var $003c25bbaad3f93e$var$escapeFn = function escapeFn(str) {
    return $003c25bbaad3f93e$var$meta[str.charCodeAt(0)];
};
var $003c25bbaad3f93e$var$warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var $003c25bbaad3f93e$var$assert = module.exports = $003c25bbaad3f93e$var$ok;
var $003c25bbaad3f93e$var$NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function $003c25bbaad3f93e$var$innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new $hBVdF(obj);
}
function $003c25bbaad3f93e$var$fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = "Failed";
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if ($003c25bbaad3f93e$var$warned === false) {
            $003c25bbaad3f93e$var$warned = true;
            var warn = $aL6Yv.emitWarning ? $aL6Yv.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? "fail" : operator,
        stackStartFn: stackStartFn || $003c25bbaad3f93e$var$fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new $hBVdF(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
$003c25bbaad3f93e$var$assert.fail = $003c25bbaad3f93e$var$fail; // The AssertionError is defined in internal/error.
$003c25bbaad3f93e$var$assert.AssertionError = $hBVdF;
function $003c25bbaad3f93e$var$innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) throw message;
        var err = new $hBVdF({
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
function $003c25bbaad3f93e$var$ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    $003c25bbaad3f93e$var$innerOk.apply(void 0, [
        $003c25bbaad3f93e$var$ok,
        args.length
    ].concat(args));
}
$003c25bbaad3f93e$var$assert.ok = $003c25bbaad3f93e$var$ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ $003c25bbaad3f93e$var$assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual != expected) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "==",
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
$003c25bbaad3f93e$var$assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual == expected) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "!=",
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
$003c25bbaad3f93e$var$assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if ($003c25bbaad3f93e$var$isDeepEqual === undefined) $003c25bbaad3f93e$var$lazyLoadComparison();
    if (!$003c25bbaad3f93e$var$isDeepEqual(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepEqual",
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
$003c25bbaad3f93e$var$assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if ($003c25bbaad3f93e$var$isDeepEqual === undefined) $003c25bbaad3f93e$var$lazyLoadComparison();
    if ($003c25bbaad3f93e$var$isDeepEqual(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ $003c25bbaad3f93e$var$assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if ($003c25bbaad3f93e$var$isDeepEqual === undefined) $003c25bbaad3f93e$var$lazyLoadComparison();
    if (!$003c25bbaad3f93e$var$isDeepStrictEqual(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
    });
};
$003c25bbaad3f93e$var$assert.notDeepStrictEqual = $003c25bbaad3f93e$var$notDeepStrictEqual;
function $003c25bbaad3f93e$var$notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if ($003c25bbaad3f93e$var$isDeepEqual === undefined) $003c25bbaad3f93e$var$lazyLoadComparison();
    if ($003c25bbaad3f93e$var$isDeepStrictEqual(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepStrictEqual",
        stackStartFn: $003c25bbaad3f93e$var$notDeepStrictEqual
    });
}
$003c25bbaad3f93e$var$assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if (!$003c25bbaad3f93e$var$objectIs(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "strictEqual",
        stackStartFn: strictEqual
    });
};
$003c25bbaad3f93e$var$assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new $003c25bbaad3f93e$var$ERR_MISSING_ARGS("actual", "expected");
    if ($003c25bbaad3f93e$var$objectIs(actual, expected)) $003c25bbaad3f93e$var$innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
    });
};
var $003c25bbaad3f93e$var$Comparison = function Comparison(obj, keys, actual) {
    var _this = this;
    $003c25bbaad3f93e$var$_classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === "string" && $003c25bbaad3f93e$var$isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function $003c25bbaad3f93e$var$compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !$003c25bbaad3f93e$var$isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new $003c25bbaad3f93e$var$Comparison(actual, keys);
            var b = new $003c25bbaad3f93e$var$Comparison(expected, keys, actual);
            var err = new $hBVdF({
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
        $003c25bbaad3f93e$var$innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function $003c25bbaad3f93e$var$expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
        if ($003c25bbaad3f93e$var$isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
        ], expected);
         // Handle primitives properly.
        if ($003c25bbaad3f93e$var$_typeof(actual) !== "object" || actual === null) {
            var err = new $hBVdF({
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
        else if (keys.length === 0) throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        if ($003c25bbaad3f93e$var$isDeepEqual === undefined) $003c25bbaad3f93e$var$lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === "string" && $003c25bbaad3f93e$var$isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            $003c25bbaad3f93e$var$compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({}, actual) === true;
}
function $003c25bbaad3f93e$var$getActual(fn) {
    if (typeof fn !== "function") throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return $003c25bbaad3f93e$var$NO_EXCEPTION_SENTINEL;
}
function $003c25bbaad3f93e$var$checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return $003c25bbaad3f93e$var$isPromise(obj) || obj !== null && $003c25bbaad3f93e$var$_typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function $003c25bbaad3f93e$var$waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!$003c25bbaad3f93e$var$checkIsPromise(resultPromise)) throw new $003c25bbaad3f93e$var$ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        } else if ($003c25bbaad3f93e$var$checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return $003c25bbaad3f93e$var$NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function $003c25bbaad3f93e$var$expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
        if (arguments.length === 4) throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], error);
        if ($003c25bbaad3f93e$var$_typeof(actual) === "object" && actual !== null) {
            if (actual.message === error) throw new $003c25bbaad3f93e$var$ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        } else if (actual === error) throw new $003c25bbaad3f93e$var$ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        message = error;
        error = undefined;
    } else if (error != null && $003c25bbaad3f93e$var$_typeof(error) !== "object" && typeof error !== "function") throw new $003c25bbaad3f93e$var$ERR_INVALID_ARG_TYPE("error", [
        "Object",
        "Error",
        "Function",
        "RegExp"
    ], error);
    if (actual === $003c25bbaad3f93e$var$NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        $003c25bbaad3f93e$var$innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !$003c25bbaad3f93e$var$expectedException(actual, error, message, stackStartFn)) throw actual;
}
function $003c25bbaad3f93e$var$expectsNoError(stackStartFn, actual, error, message) {
    if (actual === $003c25bbaad3f93e$var$NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
        message = error;
        error = undefined;
    }
    if (!error || $003c25bbaad3f93e$var$expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        $003c25bbaad3f93e$var$innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
$003c25bbaad3f93e$var$assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    $003c25bbaad3f93e$var$expectsError.apply(void 0, [
        throws,
        $003c25bbaad3f93e$var$getActual(promiseFn)
    ].concat(args));
};
$003c25bbaad3f93e$var$assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return $003c25bbaad3f93e$var$waitForActual(promiseFn).then(function(result) {
        return $003c25bbaad3f93e$var$expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
$003c25bbaad3f93e$var$assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    $003c25bbaad3f93e$var$expectsNoError.apply(void 0, [
        doesNotThrow,
        $003c25bbaad3f93e$var$getActual(fn)
    ].concat(args));
};
$003c25bbaad3f93e$var$assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return $003c25bbaad3f93e$var$waitForActual(fn).then(function(result) {
        return $003c25bbaad3f93e$var$expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
$003c25bbaad3f93e$var$assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = "ifError got unwanted exception: ";
        if ($003c25bbaad3f93e$var$_typeof(err) === "object" && typeof err.message === "string") {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += $003c25bbaad3f93e$var$inspect(err);
        var newErr = new $hBVdF({
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
function $003c25bbaad3f93e$var$strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    $003c25bbaad3f93e$var$innerOk.apply(void 0, [
        $003c25bbaad3f93e$var$strict,
        args.length
    ].concat(args));
}
$003c25bbaad3f93e$var$assert.strict = $003c25bbaad3f93e$var$objectAssign($003c25bbaad3f93e$var$strict, $003c25bbaad3f93e$var$assert, {
    equal: $003c25bbaad3f93e$var$assert.strictEqual,
    deepEqual: $003c25bbaad3f93e$var$assert.deepStrictEqual,
    notEqual: $003c25bbaad3f93e$var$assert.notStrictEqual,
    notDeepEqual: $003c25bbaad3f93e$var$assert.notDeepStrictEqual
});
$003c25bbaad3f93e$var$assert.strict.strict = $003c25bbaad3f93e$var$assert.strict;

});
parcelRequire.register("aL6Yv", function(module, exports) {
// shim for using process in browser
var $7d53b442853756b0$var$process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $7d53b442853756b0$var$cachedSetTimeout;
var $7d53b442853756b0$var$cachedClearTimeout;
function $7d53b442853756b0$var$defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function $7d53b442853756b0$var$defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") $7d53b442853756b0$var$cachedSetTimeout = setTimeout;
        else $7d53b442853756b0$var$cachedSetTimeout = $7d53b442853756b0$var$defaultSetTimout;
    } catch (e) {
        $7d53b442853756b0$var$cachedSetTimeout = $7d53b442853756b0$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") $7d53b442853756b0$var$cachedClearTimeout = clearTimeout;
        else $7d53b442853756b0$var$cachedClearTimeout = $7d53b442853756b0$var$defaultClearTimeout;
    } catch (e1) {
        $7d53b442853756b0$var$cachedClearTimeout = $7d53b442853756b0$var$defaultClearTimeout;
    }
})();
function $7d53b442853756b0$var$runTimeout(fun) {
    if ($7d53b442853756b0$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($7d53b442853756b0$var$cachedSetTimeout === $7d53b442853756b0$var$defaultSetTimout || !$7d53b442853756b0$var$cachedSetTimeout) && setTimeout) {
        $7d53b442853756b0$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $7d53b442853756b0$var$cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $7d53b442853756b0$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $7d53b442853756b0$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $7d53b442853756b0$var$runClearTimeout(marker) {
    if ($7d53b442853756b0$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($7d53b442853756b0$var$cachedClearTimeout === $7d53b442853756b0$var$defaultClearTimeout || !$7d53b442853756b0$var$cachedClearTimeout) && clearTimeout) {
        $7d53b442853756b0$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $7d53b442853756b0$var$cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $7d53b442853756b0$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $7d53b442853756b0$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $7d53b442853756b0$var$queue = [];
var $7d53b442853756b0$var$draining = false;
var $7d53b442853756b0$var$currentQueue;
var $7d53b442853756b0$var$queueIndex = -1;
function $7d53b442853756b0$var$cleanUpNextTick() {
    if (!$7d53b442853756b0$var$draining || !$7d53b442853756b0$var$currentQueue) return;
    $7d53b442853756b0$var$draining = false;
    if ($7d53b442853756b0$var$currentQueue.length) $7d53b442853756b0$var$queue = $7d53b442853756b0$var$currentQueue.concat($7d53b442853756b0$var$queue);
    else $7d53b442853756b0$var$queueIndex = -1;
    if ($7d53b442853756b0$var$queue.length) $7d53b442853756b0$var$drainQueue();
}
function $7d53b442853756b0$var$drainQueue() {
    if ($7d53b442853756b0$var$draining) return;
    var timeout = $7d53b442853756b0$var$runTimeout($7d53b442853756b0$var$cleanUpNextTick);
    $7d53b442853756b0$var$draining = true;
    var len = $7d53b442853756b0$var$queue.length;
    while(len){
        $7d53b442853756b0$var$currentQueue = $7d53b442853756b0$var$queue;
        $7d53b442853756b0$var$queue = [];
        while(++$7d53b442853756b0$var$queueIndex < len)if ($7d53b442853756b0$var$currentQueue) $7d53b442853756b0$var$currentQueue[$7d53b442853756b0$var$queueIndex].run();
        $7d53b442853756b0$var$queueIndex = -1;
        len = $7d53b442853756b0$var$queue.length;
    }
    $7d53b442853756b0$var$currentQueue = null;
    $7d53b442853756b0$var$draining = false;
    $7d53b442853756b0$var$runClearTimeout(timeout);
}
$7d53b442853756b0$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $7d53b442853756b0$var$queue.push(new $7d53b442853756b0$var$Item(fun, args));
    if ($7d53b442853756b0$var$queue.length === 1 && !$7d53b442853756b0$var$draining) $7d53b442853756b0$var$runTimeout($7d53b442853756b0$var$drainQueue);
};
// v8 likes predictible objects
function $7d53b442853756b0$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$7d53b442853756b0$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$7d53b442853756b0$var$process.title = "browser";
$7d53b442853756b0$var$process.browser = true;
$7d53b442853756b0$var$process.env = {};
$7d53b442853756b0$var$process.argv = [];
$7d53b442853756b0$var$process.version = ""; // empty string to avoid regexp issues
$7d53b442853756b0$var$process.versions = {};
function $7d53b442853756b0$var$noop() {}
$7d53b442853756b0$var$process.on = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.addListener = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.once = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.off = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.removeListener = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.removeAllListeners = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.emit = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.prependListener = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.prependOnceListener = $7d53b442853756b0$var$noop;
$7d53b442853756b0$var$process.listeners = function(name) {
    return [];
};
$7d53b442853756b0$var$process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
$7d53b442853756b0$var$process.cwd = function() {
    return "/";
};
$7d53b442853756b0$var$process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
$7d53b442853756b0$var$process.umask = function() {
    return 0;
};

});

parcelRequire.register("8AOCM", function(module, exports) {

$parcel$export(module.exports, "codes", function () { return $6418f477732b8149$export$e45cb6485273080e; }, function (v) { return $6418f477732b8149$export$e45cb6485273080e = v; });
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ var $6418f477732b8149$export$e45cb6485273080e;
"use strict"; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function $6418f477732b8149$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $6418f477732b8149$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $6418f477732b8149$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $6418f477732b8149$var$_typeof(obj);
}
function $6418f477732b8149$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $6418f477732b8149$var$_possibleConstructorReturn(self, call) {
    if (call && ($6418f477732b8149$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $6418f477732b8149$var$_assertThisInitialized(self);
}
function $6418f477732b8149$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $6418f477732b8149$var$_getPrototypeOf(o) {
    $6418f477732b8149$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $6418f477732b8149$var$_getPrototypeOf(o);
}
function $6418f477732b8149$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $6418f477732b8149$var$_setPrototypeOf(subClass, superClass);
}
function $6418f477732b8149$var$_setPrototypeOf(o, p) {
    $6418f477732b8149$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $6418f477732b8149$var$_setPrototypeOf(o, p);
}
var $6418f477732b8149$var$codes = {}; // Lazy loaded
var $6418f477732b8149$var$assert;
var $6418f477732b8149$var$util;
function $6418f477732b8149$var$createErrorType(code, message, Base) {
    var getMessage = function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    };
    if (!Base) Base = Error;
    var NodeError = /*#__PURE__*/ function(_Base) {
        $6418f477732b8149$var$_inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            $6418f477732b8149$var$_classCallCheck(this, NodeError);
            _this = $6418f477732b8149$var$_possibleConstructorReturn(this, $6418f477732b8149$var$_getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    $6418f477732b8149$var$codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $6418f477732b8149$var$oneOf(expected, thing) {
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
function $6418f477732b8149$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $6418f477732b8149$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $6418f477732b8149$var$includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$6418f477732b8149$var$createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);

$6418f477732b8149$var$createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if ($6418f477732b8149$var$assert === undefined) $6418f477732b8149$var$assert = (parcelRequire("01fxr"));
    $6418f477732b8149$var$assert(typeof name === "string", "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && $6418f477732b8149$var$startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if ($6418f477732b8149$var$endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat($6418f477732b8149$var$oneOf(expected, "type"));
    else {
        var type = $6418f477732b8149$var$includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat($6418f477732b8149$var$oneOf(expected, "type"));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat($6418f477732b8149$var$_typeof(actual));
    return msg;
}, TypeError);

$6418f477732b8149$var$createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if ($6418f477732b8149$var$util === undefined) $6418f477732b8149$var$util = (parcelRequire("js5mz"));
    var inspected = $6418f477732b8149$var$util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
$6418f477732b8149$var$createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat($6418f477732b8149$var$_typeof(value));
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
}, TypeError);

$6418f477732b8149$var$createErrorType("ERR_MISSING_ARGS", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if ($6418f477732b8149$var$assert === undefined) $6418f477732b8149$var$assert = (parcelRequire("01fxr"));
    $6418f477732b8149$var$assert(args.length > 0, "At least one arg needs to be specified");
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
$6418f477732b8149$export$e45cb6485273080e = $6418f477732b8149$var$codes;

});
parcelRequire.register("js5mz", function(module, exports) {
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

var $04Vs3 = parcelRequire("04Vs3");

var $aL6Yv = parcelRequire("aL6Yv");
var $e294cad1f2e00985$var$getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var $e294cad1f2e00985$var$formatRegExp = /%[sdj%]/g;
module.exports.format = function(f) {
    if (!$e294cad1f2e00985$var$isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push($e294cad1f2e00985$var$inspect(arguments[i]));
        return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace($e294cad1f2e00985$var$formatRegExp, function(x) {
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
    for(var x = args[i]; i < len; x = args[++i])if ($e294cad1f2e00985$var$isNull(x) || !$e294cad1f2e00985$var$isObject(x)) str += " " + x;
    else str += " " + $e294cad1f2e00985$var$inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
module.exports.deprecate = function(fn, msg) {
    var deprecated = function deprecated() {
        if (!warned) {
            if ($aL6Yv.throwDeprecation) throw new Error(msg);
            else if ($aL6Yv.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    };
    if (typeof $aL6Yv !== "undefined" && $aL6Yv.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof $aL6Yv === "undefined") return function() {
        return module.exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    return deprecated;
};
var $e294cad1f2e00985$var$debugs = {};
var $e294cad1f2e00985$var$debugEnvRegex = /^$/;
var $e294cad1f2e00985$var$debugEnv;
module.exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!$e294cad1f2e00985$var$debugs[set]) {
        if ($e294cad1f2e00985$var$debugEnvRegex.test(set)) {
            var pid = $aL6Yv.pid;
            $e294cad1f2e00985$var$debugs[set] = function() {
                var msg = module.exports.format.apply(module.exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
            };
        } else $e294cad1f2e00985$var$debugs[set] = function() {};
    }
    return $e294cad1f2e00985$var$debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function $e294cad1f2e00985$var$inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: $e294cad1f2e00985$var$stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if ($e294cad1f2e00985$var$isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    module.exports._extend(ctx, opts);
    // set default options
    if ($e294cad1f2e00985$var$isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if ($e294cad1f2e00985$var$isUndefined(ctx.depth)) ctx.depth = 2;
    if ($e294cad1f2e00985$var$isUndefined(ctx.colors)) ctx.colors = false;
    if ($e294cad1f2e00985$var$isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = $e294cad1f2e00985$var$stylizeWithColor;
    return $e294cad1f2e00985$var$formatValue(ctx, obj, ctx.depth);
}
module.exports.inspect = $e294cad1f2e00985$var$inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
$e294cad1f2e00985$var$inspect.colors = {
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
$e294cad1f2e00985$var$inspect.styles = {
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
function $e294cad1f2e00985$var$stylizeWithColor(str, styleType) {
    var style = $e294cad1f2e00985$var$inspect.styles[styleType];
    if (style) return "\x1b[" + $e294cad1f2e00985$var$inspect.colors[style][0] + "m" + str + "\x1b[" + $e294cad1f2e00985$var$inspect.colors[style][1] + "m";
    else return str;
}
function $e294cad1f2e00985$var$stylizeNoColor(str, styleType) {
    return str;
}
function $e294cad1f2e00985$var$arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function $e294cad1f2e00985$var$formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && $e294cad1f2e00985$var$isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== module.exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!$e294cad1f2e00985$var$isString(ret)) ret = $e294cad1f2e00985$var$formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = $e294cad1f2e00985$var$formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = $e294cad1f2e00985$var$arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if ($e294cad1f2e00985$var$isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return $e294cad1f2e00985$var$formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if ($e294cad1f2e00985$var$isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
        }
        if ($e294cad1f2e00985$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if ($e294cad1f2e00985$var$isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if ($e294cad1f2e00985$var$isError(value)) return $e294cad1f2e00985$var$formatError(value);
    }
    var base = "", array = false, braces = [
        "{",
        "}"
    ];
    // Make Array say that they are Array
    if ($e294cad1f2e00985$var$isArray(value)) {
        array = true;
        braces = [
            "[",
            "]"
        ];
    }
    // Make functions say that they are functions
    if ($e294cad1f2e00985$var$isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    // Make RegExps say that they are RegExps
    if ($e294cad1f2e00985$var$isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if ($e294cad1f2e00985$var$isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if ($e294cad1f2e00985$var$isError(value)) base = " " + $e294cad1f2e00985$var$formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if ($e294cad1f2e00985$var$isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        else return ctx.stylize("[Object]", "special");
    }
    ctx.seen.push(value);
    var output;
    if (array) output = $e294cad1f2e00985$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return $e294cad1f2e00985$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return $e294cad1f2e00985$var$reduceToSingleString(output, base, braces);
}
function $e294cad1f2e00985$var$formatPrimitive(ctx, value) {
    if ($e294cad1f2e00985$var$isUndefined(value)) return ctx.stylize("undefined", "undefined");
    if ($e294cad1f2e00985$var$isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
    }
    if ($e294cad1f2e00985$var$isNumber(value)) return ctx.stylize("" + value, "number");
    if ($e294cad1f2e00985$var$isBoolean(value)) return ctx.stylize("" + value, "boolean");
    // For some reason typeof null is "object", so special case here.
    if ($e294cad1f2e00985$var$isNull(value)) return ctx.stylize("null", "null");
}
function $e294cad1f2e00985$var$formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function $e294cad1f2e00985$var$formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if ($e294cad1f2e00985$var$hasOwnProperty(value, String(i))) output.push($e294cad1f2e00985$var$formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push("");
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push($e294cad1f2e00985$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function $e294cad1f2e00985$var$formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
        else str = ctx.stylize("[Getter]", "special");
    } else if (desc.set) str = ctx.stylize("[Setter]", "special");
    if (!$e294cad1f2e00985$var$hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if ($e294cad1f2e00985$var$isNull(recurseTimes)) str = $e294cad1f2e00985$var$formatValue(ctx, desc.value, null);
            else str = $e294cad1f2e00985$var$formatValue(ctx, desc.value, recurseTimes - 1);
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
    if ($e294cad1f2e00985$var$isUndefined(name)) {
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
function $e294cad1f2e00985$var$reduceToSingleString(output, base, braces) {
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
module.exports.types = (parcelRequire("iro3p"));
function $e294cad1f2e00985$var$isArray(ar) {
    return Array.isArray(ar);
}
module.exports.isArray = $e294cad1f2e00985$var$isArray;
function $e294cad1f2e00985$var$isBoolean(arg) {
    return typeof arg === "boolean";
}
module.exports.isBoolean = $e294cad1f2e00985$var$isBoolean;
function $e294cad1f2e00985$var$isNull(arg) {
    return arg === null;
}
module.exports.isNull = $e294cad1f2e00985$var$isNull;
function $e294cad1f2e00985$var$isNullOrUndefined(arg) {
    return arg == null;
}
module.exports.isNullOrUndefined = $e294cad1f2e00985$var$isNullOrUndefined;
function $e294cad1f2e00985$var$isNumber(arg) {
    return typeof arg === "number";
}
module.exports.isNumber = $e294cad1f2e00985$var$isNumber;
function $e294cad1f2e00985$var$isString(arg) {
    return typeof arg === "string";
}
module.exports.isString = $e294cad1f2e00985$var$isString;
function $e294cad1f2e00985$var$isSymbol(arg) {
    return (typeof arg === "undefined" ? "undefined" : (0, $04Vs3.default)(arg)) === "symbol";
}
module.exports.isSymbol = $e294cad1f2e00985$var$isSymbol;
function $e294cad1f2e00985$var$isUndefined(arg) {
    return arg === void 0;
}
module.exports.isUndefined = $e294cad1f2e00985$var$isUndefined;
function $e294cad1f2e00985$var$isRegExp(re) {
    return $e294cad1f2e00985$var$isObject(re) && $e294cad1f2e00985$var$objectToString(re) === "[object RegExp]";
}
module.exports.isRegExp = $e294cad1f2e00985$var$isRegExp;
module.exports.types.isRegExp = $e294cad1f2e00985$var$isRegExp;
function $e294cad1f2e00985$var$isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
module.exports.isObject = $e294cad1f2e00985$var$isObject;
function $e294cad1f2e00985$var$isDate(d) {
    return $e294cad1f2e00985$var$isObject(d) && $e294cad1f2e00985$var$objectToString(d) === "[object Date]";
}
module.exports.isDate = $e294cad1f2e00985$var$isDate;
module.exports.types.isDate = $e294cad1f2e00985$var$isDate;
function $e294cad1f2e00985$var$isError(e) {
    return $e294cad1f2e00985$var$isObject(e) && ($e294cad1f2e00985$var$objectToString(e) === "[object Error]" || e instanceof Error);
}
module.exports.isError = $e294cad1f2e00985$var$isError;
module.exports.types.isNativeError = $e294cad1f2e00985$var$isError;
function $e294cad1f2e00985$var$isFunction(arg) {
    return typeof arg === "function";
}
module.exports.isFunction = $e294cad1f2e00985$var$isFunction;
function $e294cad1f2e00985$var$isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || (typeof arg === "undefined" ? "undefined" : (0, $04Vs3.default)(arg)) === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
module.exports.isPrimitive = $e294cad1f2e00985$var$isPrimitive;

module.exports.isBuffer = (parcelRequire("9bzQW"));
function $e294cad1f2e00985$var$objectToString(o) {
    return Object.prototype.toString.call(o);
}
function $e294cad1f2e00985$var$pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var $e294cad1f2e00985$var$months = [
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
function $e294cad1f2e00985$var$timestamp() {
    var d = new Date();
    var time = [
        $e294cad1f2e00985$var$pad(d.getHours()),
        $e294cad1f2e00985$var$pad(d.getMinutes()),
        $e294cad1f2e00985$var$pad(d.getSeconds())
    ].join(":");
    return [
        d.getDate(),
        $e294cad1f2e00985$var$months[d.getMonth()],
        time
    ].join(" ");
}
// log is just a thin wrapper to console.log that prepends a timestamp
module.exports.log = function() {
    console.log("%s - %s", $e294cad1f2e00985$var$timestamp(), module.exports.format.apply(module.exports, arguments));
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
 */ module.exports.inherits = (parcelRequire("4VbQK"));
module.exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !$e294cad1f2e00985$var$isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function $e294cad1f2e00985$var$hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var $e294cad1f2e00985$var$kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
module.exports.promisify = function promisify(original) {
    var fn = function fn() {
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
    };
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    if ($e294cad1f2e00985$var$kCustomPromisifiedSymbol && original[$e294cad1f2e00985$var$kCustomPromisifiedSymbol]) {
        var fn = original[$e294cad1f2e00985$var$kCustomPromisifiedSymbol];
        if (typeof fn !== "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, $e294cad1f2e00985$var$kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if ($e294cad1f2e00985$var$kCustomPromisifiedSymbol) Object.defineProperty(fn, $e294cad1f2e00985$var$kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, $e294cad1f2e00985$var$getOwnPropertyDescriptors(original));
};
module.exports.promisify.custom = $e294cad1f2e00985$var$kCustomPromisifiedSymbol;
function $e294cad1f2e00985$var$callbackifyOnRejected(reason, cb) {
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
function $e294cad1f2e00985$var$callbackify(original) {
    var callbackified = // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function cb() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            $aL6Yv.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            $aL6Yv.nextTick($e294cad1f2e00985$var$callbackifyOnRejected.bind(null, rej, cb));
        });
    };
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, $e294cad1f2e00985$var$getOwnPropertyDescriptors(original));
    return callbackified;
}
module.exports.callbackify = $e294cad1f2e00985$var$callbackify;

});
parcelRequire.register("04Vs3", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $2d67e7c237a6623e$export$2e2bcd8739ae039; });
function $2d67e7c237a6623e$export$2e2bcd8739ae039(obj) {
    "@swc/helpers - typeof";
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}

});

parcelRequire.register("iro3p", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";

var $03IIg = parcelRequire("03IIg");

var $jsuGc = parcelRequire("jsuGc");

var $l14vz = parcelRequire("l14vz");

var $kOml3 = parcelRequire("kOml3");
function $d6cd683ada9a1e00$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $d6cd683ada9a1e00$var$BigIntSupported = typeof BigInt !== "undefined";
var $d6cd683ada9a1e00$var$SymbolSupported = typeof Symbol !== "undefined";
var $d6cd683ada9a1e00$var$ObjectToString = $d6cd683ada9a1e00$var$uncurryThis(Object.prototype.toString);
var $d6cd683ada9a1e00$var$numberValue = $d6cd683ada9a1e00$var$uncurryThis(Number.prototype.valueOf);
var $d6cd683ada9a1e00$var$stringValue = $d6cd683ada9a1e00$var$uncurryThis(String.prototype.valueOf);
var $d6cd683ada9a1e00$var$booleanValue = $d6cd683ada9a1e00$var$uncurryThis(Boolean.prototype.valueOf);
if ($d6cd683ada9a1e00$var$BigIntSupported) var $d6cd683ada9a1e00$var$bigIntValue = $d6cd683ada9a1e00$var$uncurryThis(BigInt.prototype.valueOf);
if ($d6cd683ada9a1e00$var$SymbolSupported) var $d6cd683ada9a1e00$var$symbolValue = $d6cd683ada9a1e00$var$uncurryThis(Symbol.prototype.valueOf);
function $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
module.exports.isArgumentsObject = $03IIg;
module.exports.isGeneratorFunction = $jsuGc;
module.exports.isTypedArray = $kOml3;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function $d6cd683ada9a1e00$var$isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
module.exports.isPromise = $d6cd683ada9a1e00$var$isPromise;
function $d6cd683ada9a1e00$var$isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return $kOml3(value) || $d6cd683ada9a1e00$var$isDataView(value);
}
module.exports.isArrayBufferView = $d6cd683ada9a1e00$var$isArrayBufferView;
function $d6cd683ada9a1e00$var$isUint8Array(value) {
    return $l14vz(value) === "Uint8Array";
}
module.exports.isUint8Array = $d6cd683ada9a1e00$var$isUint8Array;
function $d6cd683ada9a1e00$var$isUint8ClampedArray(value) {
    return $l14vz(value) === "Uint8ClampedArray";
}
module.exports.isUint8ClampedArray = $d6cd683ada9a1e00$var$isUint8ClampedArray;
function $d6cd683ada9a1e00$var$isUint16Array(value) {
    return $l14vz(value) === "Uint16Array";
}
module.exports.isUint16Array = $d6cd683ada9a1e00$var$isUint16Array;
function $d6cd683ada9a1e00$var$isUint32Array(value) {
    return $l14vz(value) === "Uint32Array";
}
module.exports.isUint32Array = $d6cd683ada9a1e00$var$isUint32Array;
function $d6cd683ada9a1e00$var$isInt8Array(value) {
    return $l14vz(value) === "Int8Array";
}
module.exports.isInt8Array = $d6cd683ada9a1e00$var$isInt8Array;
function $d6cd683ada9a1e00$var$isInt16Array(value) {
    return $l14vz(value) === "Int16Array";
}
module.exports.isInt16Array = $d6cd683ada9a1e00$var$isInt16Array;
function $d6cd683ada9a1e00$var$isInt32Array(value) {
    return $l14vz(value) === "Int32Array";
}
module.exports.isInt32Array = $d6cd683ada9a1e00$var$isInt32Array;
function $d6cd683ada9a1e00$var$isFloat32Array(value) {
    return $l14vz(value) === "Float32Array";
}
module.exports.isFloat32Array = $d6cd683ada9a1e00$var$isFloat32Array;
function $d6cd683ada9a1e00$var$isFloat64Array(value) {
    return $l14vz(value) === "Float64Array";
}
module.exports.isFloat64Array = $d6cd683ada9a1e00$var$isFloat64Array;
function $d6cd683ada9a1e00$var$isBigInt64Array(value) {
    return $l14vz(value) === "BigInt64Array";
}
module.exports.isBigInt64Array = $d6cd683ada9a1e00$var$isBigInt64Array;
function $d6cd683ada9a1e00$var$isBigUint64Array(value) {
    return $l14vz(value) === "BigUint64Array";
}
module.exports.isBigUint64Array = $d6cd683ada9a1e00$var$isBigUint64Array;
function $d6cd683ada9a1e00$var$isMapToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object Map]";
}
$d6cd683ada9a1e00$var$isMapToString.working = typeof Map !== "undefined" && $d6cd683ada9a1e00$var$isMapToString(new Map());
function $d6cd683ada9a1e00$var$isMap(value) {
    if (typeof Map === "undefined") return false;
    return $d6cd683ada9a1e00$var$isMapToString.working ? $d6cd683ada9a1e00$var$isMapToString(value) : value instanceof Map;
}
module.exports.isMap = $d6cd683ada9a1e00$var$isMap;
function $d6cd683ada9a1e00$var$isSetToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object Set]";
}
$d6cd683ada9a1e00$var$isSetToString.working = typeof Set !== "undefined" && $d6cd683ada9a1e00$var$isSetToString(new Set());
function $d6cd683ada9a1e00$var$isSet(value) {
    if (typeof Set === "undefined") return false;
    return $d6cd683ada9a1e00$var$isSetToString.working ? $d6cd683ada9a1e00$var$isSetToString(value) : value instanceof Set;
}
module.exports.isSet = $d6cd683ada9a1e00$var$isSet;
function $d6cd683ada9a1e00$var$isWeakMapToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object WeakMap]";
}
$d6cd683ada9a1e00$var$isWeakMapToString.working = typeof WeakMap !== "undefined" && $d6cd683ada9a1e00$var$isWeakMapToString(new WeakMap());
function $d6cd683ada9a1e00$var$isWeakMap(value) {
    if (typeof WeakMap === "undefined") return false;
    return $d6cd683ada9a1e00$var$isWeakMapToString.working ? $d6cd683ada9a1e00$var$isWeakMapToString(value) : value instanceof WeakMap;
}
module.exports.isWeakMap = $d6cd683ada9a1e00$var$isWeakMap;
function $d6cd683ada9a1e00$var$isWeakSetToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object WeakSet]";
}
$d6cd683ada9a1e00$var$isWeakSetToString.working = typeof WeakSet !== "undefined" && $d6cd683ada9a1e00$var$isWeakSetToString(new WeakSet());
function $d6cd683ada9a1e00$var$isWeakSet(value) {
    return $d6cd683ada9a1e00$var$isWeakSetToString(value);
}
module.exports.isWeakSet = $d6cd683ada9a1e00$var$isWeakSet;
function $d6cd683ada9a1e00$var$isArrayBufferToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object ArrayBuffer]";
}
$d6cd683ada9a1e00$var$isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && $d6cd683ada9a1e00$var$isArrayBufferToString(new ArrayBuffer());
function $d6cd683ada9a1e00$var$isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") return false;
    return $d6cd683ada9a1e00$var$isArrayBufferToString.working ? $d6cd683ada9a1e00$var$isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
module.exports.isArrayBuffer = $d6cd683ada9a1e00$var$isArrayBuffer;
function $d6cd683ada9a1e00$var$isDataViewToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object DataView]";
}
$d6cd683ada9a1e00$var$isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && $d6cd683ada9a1e00$var$isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function $d6cd683ada9a1e00$var$isDataView(value) {
    if (typeof DataView === "undefined") return false;
    return $d6cd683ada9a1e00$var$isDataViewToString.working ? $d6cd683ada9a1e00$var$isDataViewToString(value) : value instanceof DataView;
}
module.exports.isDataView = $d6cd683ada9a1e00$var$isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var $d6cd683ada9a1e00$var$SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
function $d6cd683ada9a1e00$var$isSharedArrayBufferToString(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object SharedArrayBuffer]";
}
function $d6cd683ada9a1e00$var$isSharedArrayBuffer(value) {
    if (typeof $d6cd683ada9a1e00$var$SharedArrayBufferCopy === "undefined") return false;
    if (typeof $d6cd683ada9a1e00$var$isSharedArrayBufferToString.working === "undefined") $d6cd683ada9a1e00$var$isSharedArrayBufferToString.working = $d6cd683ada9a1e00$var$isSharedArrayBufferToString(new $d6cd683ada9a1e00$var$SharedArrayBufferCopy());
    return $d6cd683ada9a1e00$var$isSharedArrayBufferToString.working ? $d6cd683ada9a1e00$var$isSharedArrayBufferToString(value) : value instanceof $d6cd683ada9a1e00$var$SharedArrayBufferCopy;
}
module.exports.isSharedArrayBuffer = $d6cd683ada9a1e00$var$isSharedArrayBuffer;
function $d6cd683ada9a1e00$var$isAsyncFunction(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object AsyncFunction]";
}
module.exports.isAsyncFunction = $d6cd683ada9a1e00$var$isAsyncFunction;
function $d6cd683ada9a1e00$var$isMapIterator(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object Map Iterator]";
}
module.exports.isMapIterator = $d6cd683ada9a1e00$var$isMapIterator;
function $d6cd683ada9a1e00$var$isSetIterator(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object Set Iterator]";
}
module.exports.isSetIterator = $d6cd683ada9a1e00$var$isSetIterator;
function $d6cd683ada9a1e00$var$isGeneratorObject(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object Generator]";
}
module.exports.isGeneratorObject = $d6cd683ada9a1e00$var$isGeneratorObject;
function $d6cd683ada9a1e00$var$isWebAssemblyCompiledModule(value) {
    return $d6cd683ada9a1e00$var$ObjectToString(value) === "[object WebAssembly.Module]";
}
module.exports.isWebAssemblyCompiledModule = $d6cd683ada9a1e00$var$isWebAssemblyCompiledModule;
function $d6cd683ada9a1e00$var$isNumberObject(value) {
    return $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, $d6cd683ada9a1e00$var$numberValue);
}
module.exports.isNumberObject = $d6cd683ada9a1e00$var$isNumberObject;
function $d6cd683ada9a1e00$var$isStringObject(value) {
    return $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, $d6cd683ada9a1e00$var$stringValue);
}
module.exports.isStringObject = $d6cd683ada9a1e00$var$isStringObject;
function $d6cd683ada9a1e00$var$isBooleanObject(value) {
    return $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, $d6cd683ada9a1e00$var$booleanValue);
}
module.exports.isBooleanObject = $d6cd683ada9a1e00$var$isBooleanObject;
function $d6cd683ada9a1e00$var$isBigIntObject(value) {
    return $d6cd683ada9a1e00$var$BigIntSupported && $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, $d6cd683ada9a1e00$var$bigIntValue);
}
module.exports.isBigIntObject = $d6cd683ada9a1e00$var$isBigIntObject;
function $d6cd683ada9a1e00$var$isSymbolObject(value) {
    return $d6cd683ada9a1e00$var$SymbolSupported && $d6cd683ada9a1e00$var$checkBoxedPrimitive(value, $d6cd683ada9a1e00$var$symbolValue);
}
module.exports.isSymbolObject = $d6cd683ada9a1e00$var$isSymbolObject;
function $d6cd683ada9a1e00$var$isBoxedPrimitive(value) {
    return $d6cd683ada9a1e00$var$isNumberObject(value) || $d6cd683ada9a1e00$var$isStringObject(value) || $d6cd683ada9a1e00$var$isBooleanObject(value) || $d6cd683ada9a1e00$var$isBigIntObject(value) || $d6cd683ada9a1e00$var$isSymbolObject(value);
}
module.exports.isBoxedPrimitive = $d6cd683ada9a1e00$var$isBoxedPrimitive;
function $d6cd683ada9a1e00$var$isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && ($d6cd683ada9a1e00$var$isArrayBuffer(value) || $d6cd683ada9a1e00$var$isSharedArrayBuffer(value));
}
module.exports.isAnyArrayBuffer = $d6cd683ada9a1e00$var$isAnyArrayBuffer;
[
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(method) {
    Object.defineProperty(module.exports, method, {
        enumerable: false,
        value: function value() {
            throw new Error(method + " is not supported in userland");
        }
    });
});

});
parcelRequire.register("03IIg", function(module, exports) {
"use strict";

var $00b2f70024698f01$var$hasToStringTag = (parcelRequire("gQLq8"))();

var $iTFnY = parcelRequire("iTFnY");
var $00b2f70024698f01$var$$toString = $iTFnY("Object.prototype.toString");
var $00b2f70024698f01$var$isStandardArguments = function isArguments(value) {
    if ($00b2f70024698f01$var$hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $00b2f70024698f01$var$$toString(value) === "[object Arguments]";
};
var $00b2f70024698f01$var$isLegacyArguments = function isArguments(value) {
    if ($00b2f70024698f01$var$isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $00b2f70024698f01$var$$toString(value) !== "[object Array]" && $00b2f70024698f01$var$$toString(value.callee) === "[object Function]";
};
var $00b2f70024698f01$var$supportsStandardArguments = function() {
    return $00b2f70024698f01$var$isStandardArguments(arguments);
}();
$00b2f70024698f01$var$isStandardArguments.isLegacyArguments = $00b2f70024698f01$var$isLegacyArguments; // for tests
module.exports = $00b2f70024698f01$var$supportsStandardArguments ? $00b2f70024698f01$var$isStandardArguments : $00b2f70024698f01$var$isLegacyArguments;

});
parcelRequire.register("gQLq8", function(module, exports) {
"use strict";

var $eGxE2 = parcelRequire("eGxE2");
module.exports = function hasToStringTagShams() {
    return $eGxE2() && !!Symbol.toStringTag;
};

});
parcelRequire.register("eGxE2", function(module, exports) {

var $04Vs3 = parcelRequire("04Vs3");
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if ((0, $04Vs3.default)(Symbol.iterator) === "symbol") return true;
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


parcelRequire.register("iTFnY", function(module, exports) {
"use strict";

var $kcQa6 = parcelRequire("kcQa6");

var $399b8 = parcelRequire("399b8");
var $dc1d7761e3910a4e$var$$indexOf = $399b8($kcQa6("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = $kcQa6(name, !!allowMissing);
    if (typeof intrinsic === "function" && $dc1d7761e3910a4e$var$$indexOf(name, ".prototype.") > -1) return $399b8(intrinsic);
    return intrinsic;
};

});
parcelRequire.register("kcQa6", function(module, exports) {
"use strict";
var $eb5d63ea00bb4e67$var$undefined;
var $eb5d63ea00bb4e67$var$$SyntaxError = SyntaxError;
var $eb5d63ea00bb4e67$var$$Function = Function;
var $eb5d63ea00bb4e67$var$$TypeError = TypeError;
// eslint-disable-next-line consistent-return
var $eb5d63ea00bb4e67$var$getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
    try {
        return $eb5d63ea00bb4e67$var$$Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $eb5d63ea00bb4e67$var$$gOPD = Object.getOwnPropertyDescriptor;
if ($eb5d63ea00bb4e67$var$$gOPD) try {
    $eb5d63ea00bb4e67$var$$gOPD({}, "");
} catch (e) {
    $eb5d63ea00bb4e67$var$$gOPD = null; // this is IE 8, which has a broken gOPD
}
var $eb5d63ea00bb4e67$var$throwTypeError = function throwTypeError() {
    throw new $eb5d63ea00bb4e67$var$$TypeError();
};
var $eb5d63ea00bb4e67$var$ThrowTypeError = $eb5d63ea00bb4e67$var$$gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return $eb5d63ea00bb4e67$var$throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $eb5d63ea00bb4e67$var$$gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return $eb5d63ea00bb4e67$var$throwTypeError;
        }
    }
}() : $eb5d63ea00bb4e67$var$throwTypeError;

var $eb5d63ea00bb4e67$var$hasSymbols = (parcelRequire("hgs7U"))();
var $eb5d63ea00bb4e67$var$getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var $eb5d63ea00bb4e67$var$needsEval = {};
var $eb5d63ea00bb4e67$var$TypedArray = typeof Uint8Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : $eb5d63ea00bb4e67$var$getProto(Uint8Array);
var $eb5d63ea00bb4e67$var$INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? $eb5d63ea00bb4e67$var$undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? $eb5d63ea00bb4e67$var$undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": $eb5d63ea00bb4e67$var$hasSymbols ? $eb5d63ea00bb4e67$var$getProto([][Symbol.iterator]()) : $eb5d63ea00bb4e67$var$undefined,
    "%AsyncFromSyncIteratorPrototype%": $eb5d63ea00bb4e67$var$undefined,
    "%AsyncFunction%": $eb5d63ea00bb4e67$var$needsEval,
    "%AsyncGenerator%": $eb5d63ea00bb4e67$var$needsEval,
    "%AsyncGeneratorFunction%": $eb5d63ea00bb4e67$var$needsEval,
    "%AsyncIteratorPrototype%": $eb5d63ea00bb4e67$var$needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? $eb5d63ea00bb4e67$var$undefined : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? $eb5d63ea00bb4e67$var$undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? $eb5d63ea00bb4e67$var$undefined : FinalizationRegistry,
    "%Function%": $eb5d63ea00bb4e67$var$$Function,
    "%GeneratorFunction%": $eb5d63ea00bb4e67$var$needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $eb5d63ea00bb4e67$var$hasSymbols ? $eb5d63ea00bb4e67$var$getProto($eb5d63ea00bb4e67$var$getProto([][Symbol.iterator]())) : $eb5d63ea00bb4e67$var$undefined,
    "%JSON%": typeof JSON === "object" ? JSON : $eb5d63ea00bb4e67$var$undefined,
    "%Map%": typeof Map === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !$eb5d63ea00bb4e67$var$hasSymbols ? $eb5d63ea00bb4e67$var$undefined : $eb5d63ea00bb4e67$var$getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !$eb5d63ea00bb4e67$var$hasSymbols ? $eb5d63ea00bb4e67$var$undefined : $eb5d63ea00bb4e67$var$getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? $eb5d63ea00bb4e67$var$undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $eb5d63ea00bb4e67$var$hasSymbols ? $eb5d63ea00bb4e67$var$getProto(""[Symbol.iterator]()) : $eb5d63ea00bb4e67$var$undefined,
    "%Symbol%": $eb5d63ea00bb4e67$var$hasSymbols ? Symbol : $eb5d63ea00bb4e67$var$undefined,
    "%SyntaxError%": $eb5d63ea00bb4e67$var$$SyntaxError,
    "%ThrowTypeError%": $eb5d63ea00bb4e67$var$ThrowTypeError,
    "%TypedArray%": $eb5d63ea00bb4e67$var$TypedArray,
    "%TypeError%": $eb5d63ea00bb4e67$var$$TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? $eb5d63ea00bb4e67$var$undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? $eb5d63ea00bb4e67$var$undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? $eb5d63ea00bb4e67$var$undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? $eb5d63ea00bb4e67$var$undefined : WeakSet
};
var $eb5d63ea00bb4e67$var$doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = $eb5d63ea00bb4e67$var$getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = $eb5d63ea00bb4e67$var$getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = $eb5d63ea00bb4e67$var$getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen) value = $eb5d63ea00bb4e67$var$getProto(gen.prototype);
    }
    $eb5d63ea00bb4e67$var$INTRINSICS[name] = value;
    return value;
};
var $eb5d63ea00bb4e67$var$LEGACY_ALIASES = {
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

var $4mNby = parcelRequire("4mNby");

var $7fWw2 = parcelRequire("7fWw2");
var $eb5d63ea00bb4e67$var$$concat = $4mNby.call(Function.call, Array.prototype.concat);
var $eb5d63ea00bb4e67$var$$spliceApply = $4mNby.call(Function.apply, Array.prototype.splice);
var $eb5d63ea00bb4e67$var$$replace = $4mNby.call(Function.call, String.prototype.replace);
var $eb5d63ea00bb4e67$var$$strSlice = $4mNby.call(Function.call, String.prototype.slice);
var $eb5d63ea00bb4e67$var$$exec = $4mNby.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var $eb5d63ea00bb4e67$var$rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var $eb5d63ea00bb4e67$var$reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var $eb5d63ea00bb4e67$var$stringToPath = function stringToPath(string) {
    var first = $eb5d63ea00bb4e67$var$$strSlice(string, 0, 1);
    var last = $eb5d63ea00bb4e67$var$$strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $eb5d63ea00bb4e67$var$$SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $eb5d63ea00bb4e67$var$$SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $eb5d63ea00bb4e67$var$$replace(string, $eb5d63ea00bb4e67$var$rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $eb5d63ea00bb4e67$var$$replace(subString, $eb5d63ea00bb4e67$var$reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var $eb5d63ea00bb4e67$var$getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if ($7fWw2($eb5d63ea00bb4e67$var$LEGACY_ALIASES, intrinsicName)) {
        alias = $eb5d63ea00bb4e67$var$LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if ($7fWw2($eb5d63ea00bb4e67$var$INTRINSICS, intrinsicName)) {
        var value = $eb5d63ea00bb4e67$var$INTRINSICS[intrinsicName];
        if (value === $eb5d63ea00bb4e67$var$needsEval) value = $eb5d63ea00bb4e67$var$doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $eb5d63ea00bb4e67$var$$TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $eb5d63ea00bb4e67$var$$SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $eb5d63ea00bb4e67$var$$TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $eb5d63ea00bb4e67$var$$TypeError('"allowMissing" argument must be a boolean');
    if ($eb5d63ea00bb4e67$var$$exec(/^%?[^%]*%?$/, name) === null) throw new $eb5d63ea00bb4e67$var$$SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = $eb5d63ea00bb4e67$var$stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = $eb5d63ea00bb4e67$var$getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $eb5d63ea00bb4e67$var$$spliceApply(parts, $eb5d63ea00bb4e67$var$$concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $eb5d63ea00bb4e67$var$$strSlice(part, 0, 1);
        var last = $eb5d63ea00bb4e67$var$$strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $eb5d63ea00bb4e67$var$$SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if ($7fWw2($eb5d63ea00bb4e67$var$INTRINSICS, intrinsicRealName)) value = $eb5d63ea00bb4e67$var$INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $eb5d63ea00bb4e67$var$$TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($eb5d63ea00bb4e67$var$$gOPD && i + 1 >= parts.length) {
                var desc = $eb5d63ea00bb4e67$var$$gOPD(value, part);
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
                isOwn = $7fWw2(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) $eb5d63ea00bb4e67$var$INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

});
parcelRequire.register("hgs7U", function(module, exports) {

var $04Vs3 = parcelRequire("04Vs3");
"use strict";
var $c919bfa25a484a60$var$origSymbol = typeof Symbol !== "undefined" && Symbol;

var $eGxE2 = parcelRequire("eGxE2");
module.exports = function hasNativeSymbols() {
    if (typeof $c919bfa25a484a60$var$origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if ((0, $04Vs3.default)($c919bfa25a484a60$var$origSymbol("foo")) !== "symbol") return false;
    if ((0, $04Vs3.default)(Symbol("bar")) !== "symbol") return false;
    return $eGxE2();
};

});

parcelRequire.register("4mNby", function(module, exports) {
"use strict";

var $h9qWL = parcelRequire("h9qWL");
module.exports = Function.prototype.bind || $h9qWL;

});
parcelRequire.register("h9qWL", function(module, exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var $c7c82e0477072266$var$ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var $c7c82e0477072266$var$slice = Array.prototype.slice;
var $c7c82e0477072266$var$toStr = Object.prototype.toString;
var $c7c82e0477072266$var$funcType = "[object Function]";
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || $c7c82e0477072266$var$toStr.call(target) !== $c7c82e0477072266$var$funcType) throw new TypeError($c7c82e0477072266$var$ERROR_MESSAGE + target);
    var args = $c7c82e0477072266$var$slice.call(arguments, 1);
    var bound;
    var binder = function binder() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat($c7c82e0477072266$var$slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat($c7c82e0477072266$var$slice.call(arguments)));
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


parcelRequire.register("7fWw2", function(module, exports) {
"use strict";

var $4mNby = parcelRequire("4mNby");
module.exports = $4mNby.call(Function.call, Object.prototype.hasOwnProperty);

});


parcelRequire.register("399b8", function(module, exports) {
"use strict";

var $4mNby = parcelRequire("4mNby");

var $kcQa6 = parcelRequire("kcQa6");
var $24a9550a63c16501$var$$apply = $kcQa6("%Function.prototype.apply%");
var $24a9550a63c16501$var$$call = $kcQa6("%Function.prototype.call%");
var $24a9550a63c16501$var$$reflectApply = $kcQa6("%Reflect.apply%", true) || $4mNby.call($24a9550a63c16501$var$$call, $24a9550a63c16501$var$$apply);
var $24a9550a63c16501$var$$gOPD = $kcQa6("%Object.getOwnPropertyDescriptor%", true);
var $24a9550a63c16501$var$$defineProperty = $kcQa6("%Object.defineProperty%", true);
var $24a9550a63c16501$var$$max = $kcQa6("%Math.max%");
if ($24a9550a63c16501$var$$defineProperty) try {
    $24a9550a63c16501$var$$defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $24a9550a63c16501$var$$defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $24a9550a63c16501$var$$reflectApply($4mNby, $24a9550a63c16501$var$$call, arguments);
    if ($24a9550a63c16501$var$$gOPD && $24a9550a63c16501$var$$defineProperty) {
        var desc = $24a9550a63c16501$var$$gOPD(func, "length");
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $24a9550a63c16501$var$$defineProperty(func, "length", {
            value: 1 + $24a9550a63c16501$var$$max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var $24a9550a63c16501$var$applyBind = function applyBind() {
    return $24a9550a63c16501$var$$reflectApply($4mNby, $24a9550a63c16501$var$$apply, arguments);
};
if ($24a9550a63c16501$var$$defineProperty) $24a9550a63c16501$var$$defineProperty(module.exports, "apply", {
    value: $24a9550a63c16501$var$applyBind
});
else module.exports.apply = $24a9550a63c16501$var$applyBind;

});



parcelRequire.register("jsuGc", function(module, exports) {
"use strict";
var $e2a86e2bf4092037$var$toStr = Object.prototype.toString;
var $e2a86e2bf4092037$var$fnToStr = Function.prototype.toString;
var $e2a86e2bf4092037$var$isFnRegex = /^\s*(?:function)?\*/;

var $e2a86e2bf4092037$var$hasToStringTag = (parcelRequire("gQLq8"))();
var $e2a86e2bf4092037$var$getProto = Object.getPrototypeOf;
var $e2a86e2bf4092037$var$getGeneratorFunc = function getGeneratorFunc() {
    if (!$e2a86e2bf4092037$var$hasToStringTag) return false;
    try {
        return Function("return function*() {}")();
    } catch (e) {}
};
var $e2a86e2bf4092037$var$GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") return false;
    if ($e2a86e2bf4092037$var$isFnRegex.test($e2a86e2bf4092037$var$fnToStr.call(fn))) return true;
    if (!$e2a86e2bf4092037$var$hasToStringTag) {
        var str = $e2a86e2bf4092037$var$toStr.call(fn);
        return str === "[object GeneratorFunction]";
    }
    if (!$e2a86e2bf4092037$var$getProto) return false;
    if (typeof $e2a86e2bf4092037$var$GeneratorFunction === "undefined") {
        var generatorFunc = $e2a86e2bf4092037$var$getGeneratorFunc();
        $e2a86e2bf4092037$var$GeneratorFunction = generatorFunc ? $e2a86e2bf4092037$var$getProto(generatorFunc) : false;
    }
    return $e2a86e2bf4092037$var$getProto(fn) === $e2a86e2bf4092037$var$GeneratorFunction;
};

});

parcelRequire.register("l14vz", function(module, exports) {
"use strict";

var $bUPbk = parcelRequire("bUPbk");

var $bviyG = parcelRequire("bviyG");

var $iTFnY = parcelRequire("iTFnY");

var $iPvto = parcelRequire("iPvto");
var $f4cd302f1597ed1d$var$$toString = $iTFnY("Object.prototype.toString");

var $f4cd302f1597ed1d$var$hasToStringTag = (parcelRequire("gQLq8"))();
var $f4cd302f1597ed1d$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
var $f4cd302f1597ed1d$var$typedArrays = $bviyG();
var $f4cd302f1597ed1d$var$$slice = $iTFnY("String.prototype.slice");
var $f4cd302f1597ed1d$var$toStrTags = {};
var $f4cd302f1597ed1d$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($f4cd302f1597ed1d$var$hasToStringTag && $iPvto && $f4cd302f1597ed1d$var$getPrototypeOf) $bUPbk($f4cd302f1597ed1d$var$typedArrays, function(typedArray) {
    if (typeof $f4cd302f1597ed1d$var$g[typedArray] === "function") {
        var arr = new $f4cd302f1597ed1d$var$g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = $f4cd302f1597ed1d$var$getPrototypeOf(arr);
            var descriptor = $iPvto(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = $f4cd302f1597ed1d$var$getPrototypeOf(proto);
                descriptor = $iPvto(superProto, Symbol.toStringTag);
            }
            $f4cd302f1597ed1d$var$toStrTags[typedArray] = descriptor.get;
        }
    }
});
var $f4cd302f1597ed1d$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    $bUPbk($f4cd302f1597ed1d$var$toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {}
    });
    return foundName;
};

var $kOml3 = parcelRequire("kOml3");
module.exports = function whichTypedArray(value) {
    if (!$kOml3(value)) return false;
    if (!$f4cd302f1597ed1d$var$hasToStringTag || !(Symbol.toStringTag in value)) return $f4cd302f1597ed1d$var$$slice($f4cd302f1597ed1d$var$$toString(value), 8, -1);
    return $f4cd302f1597ed1d$var$tryTypedArrays(value);
};

});
parcelRequire.register("bUPbk", function(module, exports) {
"use strict";

var $9dbfV = parcelRequire("9dbfV");
var $8acca047bc10884d$var$toStr = Object.prototype.toString;
var $8acca047bc10884d$var$hasOwnProperty = Object.prototype.hasOwnProperty;
var $8acca047bc10884d$var$forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if ($8acca047bc10884d$var$hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var $8acca047bc10884d$var$forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var $8acca047bc10884d$var$forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if ($8acca047bc10884d$var$hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var $8acca047bc10884d$var$forEach = function forEach(list, iterator, thisArg) {
    if (!$9dbfV(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if ($8acca047bc10884d$var$toStr.call(list) === "[object Array]") $8acca047bc10884d$var$forEachArray(list, iterator, receiver);
    else if (typeof list === "string") $8acca047bc10884d$var$forEachString(list, iterator, receiver);
    else $8acca047bc10884d$var$forEachObject(list, iterator, receiver);
};
module.exports = $8acca047bc10884d$var$forEach;

});
parcelRequire.register("9dbfV", function(module, exports) {
"use strict";
var $6b4e0f21c5433ec3$var$fnToStr = Function.prototype.toString;
var $6b4e0f21c5433ec3$var$reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var $6b4e0f21c5433ec3$var$badArrayLike;
var $6b4e0f21c5433ec3$var$isCallableMarker;
if (typeof $6b4e0f21c5433ec3$var$reflectApply === "function" && typeof Object.defineProperty === "function") try {
    $6b4e0f21c5433ec3$var$badArrayLike = Object.defineProperty({}, "length", {
        get: function get() {
            throw $6b4e0f21c5433ec3$var$isCallableMarker;
        }
    });
    $6b4e0f21c5433ec3$var$isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    $6b4e0f21c5433ec3$var$reflectApply(function() {
        throw 42;
    }, null, $6b4e0f21c5433ec3$var$badArrayLike);
} catch (_) {
    if (_ !== $6b4e0f21c5433ec3$var$isCallableMarker) $6b4e0f21c5433ec3$var$reflectApply = null;
}
else $6b4e0f21c5433ec3$var$reflectApply = null;
var $6b4e0f21c5433ec3$var$constructorRegex = /^\s*class\b/;
var $6b4e0f21c5433ec3$var$isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = $6b4e0f21c5433ec3$var$fnToStr.call(value);
        return $6b4e0f21c5433ec3$var$constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var $6b4e0f21c5433ec3$var$tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if ($6b4e0f21c5433ec3$var$isES6ClassFn(value)) return false;
        $6b4e0f21c5433ec3$var$fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var $6b4e0f21c5433ec3$var$toStr = Object.prototype.toString;
var $6b4e0f21c5433ec3$var$objectClass = "[object Object]";
var $6b4e0f21c5433ec3$var$fnClass = "[object Function]";
var $6b4e0f21c5433ec3$var$genClass = "[object GeneratorFunction]";
var $6b4e0f21c5433ec3$var$ddaClass = "[object HTMLAllCollection]"; // IE 11
var $6b4e0f21c5433ec3$var$ddaClass2 = "[object HTML document.all class]";
var $6b4e0f21c5433ec3$var$ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var $6b4e0f21c5433ec3$var$hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var $6b4e0f21c5433ec3$var$isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var $6b4e0f21c5433ec3$var$isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var $6b4e0f21c5433ec3$var$all = document.all;
    if ($6b4e0f21c5433ec3$var$toStr.call($6b4e0f21c5433ec3$var$all) === $6b4e0f21c5433ec3$var$toStr.call(document.all)) $6b4e0f21c5433ec3$var$isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if (($6b4e0f21c5433ec3$var$isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = $6b4e0f21c5433ec3$var$toStr.call(value);
            return (str === $6b4e0f21c5433ec3$var$ddaClass || str === $6b4e0f21c5433ec3$var$ddaClass2 || str === $6b4e0f21c5433ec3$var$ddaClass3 // opera 12.16
             || str === $6b4e0f21c5433ec3$var$objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = $6b4e0f21c5433ec3$var$reflectApply ? function isCallable(value) {
    if ($6b4e0f21c5433ec3$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        $6b4e0f21c5433ec3$var$reflectApply(value, null, $6b4e0f21c5433ec3$var$badArrayLike);
    } catch (e) {
        if (e !== $6b4e0f21c5433ec3$var$isCallableMarker) return false;
    }
    return !$6b4e0f21c5433ec3$var$isES6ClassFn(value) && $6b4e0f21c5433ec3$var$tryFunctionObject(value);
} : function isCallable(value) {
    if ($6b4e0f21c5433ec3$var$isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if ($6b4e0f21c5433ec3$var$hasToStringTag) return $6b4e0f21c5433ec3$var$tryFunctionObject(value);
    if ($6b4e0f21c5433ec3$var$isES6ClassFn(value)) return false;
    var strClass = $6b4e0f21c5433ec3$var$toStr.call(value);
    if (strClass !== $6b4e0f21c5433ec3$var$fnClass && strClass !== $6b4e0f21c5433ec3$var$genClass && !/^\[object HTML/.test(strClass)) return false;
    return $6b4e0f21c5433ec3$var$tryFunctionObject(value);
};

});


parcelRequire.register("bviyG", function(module, exports) {
"use strict";
var $8600fc4bf7f4e5ca$var$possibleNames = [
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
var $8600fc4bf7f4e5ca$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < $8600fc4bf7f4e5ca$var$possibleNames.length; i++)if (typeof $8600fc4bf7f4e5ca$var$g[$8600fc4bf7f4e5ca$var$possibleNames[i]] === "function") out[out.length] = $8600fc4bf7f4e5ca$var$possibleNames[i];
    return out;
};

});

parcelRequire.register("iPvto", function(module, exports) {
"use strict";

var $kcQa6 = parcelRequire("kcQa6");
var $db556754fa100475$var$$gOPD = $kcQa6("%Object.getOwnPropertyDescriptor%", true);
if ($db556754fa100475$var$$gOPD) try {
    $db556754fa100475$var$$gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $db556754fa100475$var$$gOPD = null;
}
module.exports = $db556754fa100475$var$$gOPD;

});

parcelRequire.register("kOml3", function(module, exports) {
"use strict";

var $bUPbk = parcelRequire("bUPbk");

var $bviyG = parcelRequire("bviyG");

var $iTFnY = parcelRequire("iTFnY");
var $f269ce1ec4961bbf$var$$toString = $iTFnY("Object.prototype.toString");

var $f269ce1ec4961bbf$var$hasToStringTag = (parcelRequire("gQLq8"))();

var $iPvto = parcelRequire("iPvto");
var $f269ce1ec4961bbf$var$g = typeof globalThis === "undefined" ? $parcel$global : globalThis;
var $f269ce1ec4961bbf$var$typedArrays = $bviyG();
var $f269ce1ec4961bbf$var$$indexOf = $iTFnY("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $f269ce1ec4961bbf$var$$slice = $iTFnY("String.prototype.slice");
var $f269ce1ec4961bbf$var$toStrTags = {};
var $f269ce1ec4961bbf$var$getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if ($f269ce1ec4961bbf$var$hasToStringTag && $iPvto && $f269ce1ec4961bbf$var$getPrototypeOf) $bUPbk($f269ce1ec4961bbf$var$typedArrays, function(typedArray) {
    var arr = new $f269ce1ec4961bbf$var$g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = $f269ce1ec4961bbf$var$getPrototypeOf(arr);
        var descriptor = $iPvto(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = $f269ce1ec4961bbf$var$getPrototypeOf(proto);
            descriptor = $iPvto(superProto, Symbol.toStringTag);
        }
        $f269ce1ec4961bbf$var$toStrTags[typedArray] = descriptor.get;
    }
});
var $f269ce1ec4961bbf$var$tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    $bUPbk($f269ce1ec4961bbf$var$toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {}
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!$f269ce1ec4961bbf$var$hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $f269ce1ec4961bbf$var$$slice($f269ce1ec4961bbf$var$$toString(value), 8, -1);
        return $f269ce1ec4961bbf$var$$indexOf($f269ce1ec4961bbf$var$typedArrays, tag) > -1;
    }
    if (!$iPvto) return false;
    return $f269ce1ec4961bbf$var$tryTypedArrays(value);
};

});



parcelRequire.register("9bzQW", function(module, exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};

});

parcelRequire.register("4VbQK", function(module, exports) {
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
        var TempCtor = function TempCtor() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});



parcelRequire.register("hBVdF", function(module, exports) {
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c

var $aL6Yv = parcelRequire("aL6Yv");
"use strict";
function $cd2246fa6b2b8017$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $cd2246fa6b2b8017$var$_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function $cd2246fa6b2b8017$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $cd2246fa6b2b8017$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $cd2246fa6b2b8017$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $cd2246fa6b2b8017$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $cd2246fa6b2b8017$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $cd2246fa6b2b8017$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $cd2246fa6b2b8017$var$_possibleConstructorReturn(self, call) {
    if (call && ($cd2246fa6b2b8017$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $cd2246fa6b2b8017$var$_assertThisInitialized(self);
}
function $cd2246fa6b2b8017$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $cd2246fa6b2b8017$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $cd2246fa6b2b8017$var$_setPrototypeOf(subClass, superClass);
}
function $cd2246fa6b2b8017$var$_wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $cd2246fa6b2b8017$var$_wrapNativeSuper = function _wrapNativeSuper(Class) {
        var Wrapper = function Wrapper() {
            return $cd2246fa6b2b8017$var$_construct(Class, arguments, $cd2246fa6b2b8017$var$_getPrototypeOf(this).constructor);
        };
        if (Class === null || !$cd2246fa6b2b8017$var$_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $cd2246fa6b2b8017$var$_setPrototypeOf(Wrapper, Class);
    };
    return $cd2246fa6b2b8017$var$_wrapNativeSuper(Class);
}
function $cd2246fa6b2b8017$var$isNativeReflectConstruct() {
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
function $cd2246fa6b2b8017$var$_construct(Parent, args, Class) {
    if ($cd2246fa6b2b8017$var$isNativeReflectConstruct()) $cd2246fa6b2b8017$var$_construct = Reflect.construct;
    else $cd2246fa6b2b8017$var$_construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $cd2246fa6b2b8017$var$_setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return $cd2246fa6b2b8017$var$_construct.apply(null, arguments);
}
function $cd2246fa6b2b8017$var$_isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function $cd2246fa6b2b8017$var$_setPrototypeOf(o, p) {
    $cd2246fa6b2b8017$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $cd2246fa6b2b8017$var$_setPrototypeOf(o, p);
}
function $cd2246fa6b2b8017$var$_getPrototypeOf(o) {
    $cd2246fa6b2b8017$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $cd2246fa6b2b8017$var$_getPrototypeOf(o);
}
function $cd2246fa6b2b8017$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $cd2246fa6b2b8017$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $cd2246fa6b2b8017$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $cd2246fa6b2b8017$var$_typeof(obj);
}

var $js5mz = parcelRequire("js5mz");
var $cd2246fa6b2b8017$var$inspect = $js5mz.inspect;

var $8AOCM = parcelRequire("8AOCM");
var $cd2246fa6b2b8017$var$ERR_INVALID_ARG_TYPE = $8AOCM.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $cd2246fa6b2b8017$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function $cd2246fa6b2b8017$var$repeat(str, count) {
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
var $cd2246fa6b2b8017$var$blue = "";
var $cd2246fa6b2b8017$var$green = "";
var $cd2246fa6b2b8017$var$red = "";
var $cd2246fa6b2b8017$var$white = "";
var $cd2246fa6b2b8017$var$kReadableOperator = {
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
var $cd2246fa6b2b8017$var$kMaxShortLength = 10;
function $cd2246fa6b2b8017$var$copyError(source) {
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
function $cd2246fa6b2b8017$var$inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return $cd2246fa6b2b8017$var$inspect(val, {
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
function $cd2246fa6b2b8017$var$createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = $cd2246fa6b2b8017$var$inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = $cd2246fa6b2b8017$var$inspectValue(expected).split("\n");
    var i = 0;
    var indicator = ""; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === "strictEqual" && $cd2246fa6b2b8017$var$_typeof(actual) === "object" && $cd2246fa6b2b8017$var$_typeof(expected) === "object" && actual !== null && expected !== null) operator = "strictEqualObject";
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= $cd2246fa6b2b8017$var$kMaxShortLength) {
            if (($cd2246fa6b2b8017$var$_typeof(actual) !== "object" || actual === null) && ($cd2246fa6b2b8017$var$_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat($cd2246fa6b2b8017$var$kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== "strictEqualObject") {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = $aL6Yv.stderr && $aL6Yv.stderr.isTTY ? $aL6Yv.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat($cd2246fa6b2b8017$var$repeat(" ", i), "^");
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
            _actualLines[26] = "".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat($cd2246fa6b2b8017$var$kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
        end = "\n".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white).concat(end);
        skipped = true;
    }
    if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
    }
    var printedLines = 0;
    var msg = $cd2246fa6b2b8017$var$kReadableOperator[operator] + "\n".concat($cd2246fa6b2b8017$var$green, "+ actual").concat($cd2246fa6b2b8017$var$white, " ").concat($cd2246fa6b2b8017$var$red, "- expected").concat($cd2246fa6b2b8017$var$white);
    var skippedMsg = " ".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat($cd2246fa6b2b8017$var$red, "-").concat($cd2246fa6b2b8017$var$white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat($cd2246fa6b2b8017$var$green, "+").concat($cd2246fa6b2b8017$var$white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!$cd2246fa6b2b8017$var$endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && $cd2246fa6b2b8017$var$endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ",";
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
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
                res += "\n".concat($cd2246fa6b2b8017$var$green, "+").concat($cd2246fa6b2b8017$var$white, " ").concat(actualLine);
                other += "\n".concat($cd2246fa6b2b8017$var$red, "-").concat($cd2246fa6b2b8017$var$white, " ").concat(expectedLine);
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
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white).concat(other, "\n") + "".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var $cd2246fa6b2b8017$var$AssertionError = /*#__PURE__*/ function(_Error) {
    $cd2246fa6b2b8017$var$_inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        $cd2246fa6b2b8017$var$_classCallCheck(this, AssertionError);
        if ($cd2246fa6b2b8017$var$_typeof(options) !== "object" || options === null) throw new $cd2246fa6b2b8017$var$ERR_INVALID_ARG_TYPE("options", "Object", options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = $cd2246fa6b2b8017$var$_possibleConstructorReturn(this, $cd2246fa6b2b8017$var$_getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if ($aL6Yv.stderr && $aL6Yv.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if ($aL6Yv.stderr && $aL6Yv.stderr.getColorDepth && $aL6Yv.stderr.getColorDepth() !== 1) {
                    $cd2246fa6b2b8017$var$blue = "\x1b[34m";
                    $cd2246fa6b2b8017$var$green = "\x1b[32m";
                    $cd2246fa6b2b8017$var$white = "\x1b[39m";
                    $cd2246fa6b2b8017$var$red = "\x1b[31m";
                } else {
                    $cd2246fa6b2b8017$var$blue = "";
                    $cd2246fa6b2b8017$var$green = "";
                    $cd2246fa6b2b8017$var$white = "";
                    $cd2246fa6b2b8017$var$red = "";
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if ($cd2246fa6b2b8017$var$_typeof(actual) === "object" && actual !== null && $cd2246fa6b2b8017$var$_typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                actual = $cd2246fa6b2b8017$var$copyError(actual);
                expected = $cd2246fa6b2b8017$var$copyError(expected);
            }
            if (operator === "deepStrictEqual" || operator === "strictEqual") _this = $cd2246fa6b2b8017$var$_possibleConstructorReturn(this, $cd2246fa6b2b8017$var$_getPrototypeOf(AssertionError).call(this, $cd2246fa6b2b8017$var$createErrDiff(actual, expected, operator)));
            else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = $cd2246fa6b2b8017$var$kReadableOperator[operator];
                var res = $cd2246fa6b2b8017$var$inspectValue(actual).split("\n"); // In case "actual" is an object, it should not be reference equal.
                if (operator === "notStrictEqual" && $cd2246fa6b2b8017$var$_typeof(actual) === "object" && actual !== null) base = $cd2246fa6b2b8017$var$kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat($cd2246fa6b2b8017$var$blue, "...").concat($cd2246fa6b2b8017$var$white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = $cd2246fa6b2b8017$var$_possibleConstructorReturn(this, $cd2246fa6b2b8017$var$_getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = $cd2246fa6b2b8017$var$_possibleConstructorReturn(this, $cd2246fa6b2b8017$var$_getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
            } else {
                var _res = $cd2246fa6b2b8017$var$inspectValue(actual);
                var other = "";
                var knownOperators = $cd2246fa6b2b8017$var$kReadableOperator[operator];
                if (operator === "notDeepEqual" || operator === "notEqual") {
                    _res = "".concat($cd2246fa6b2b8017$var$kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat($cd2246fa6b2b8017$var$inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === "deepEqual" || operator === "equal") _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = $cd2246fa6b2b8017$var$_possibleConstructorReturn(this, $cd2246fa6b2b8017$var$_getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty($cd2246fa6b2b8017$var$_assertThisInitialized(_this), "name", {
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
        Error.captureStackTrace($cd2246fa6b2b8017$var$_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = "AssertionError";
        return $cd2246fa6b2b8017$var$_possibleConstructorReturn(_this);
    }
    $cd2246fa6b2b8017$var$_createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: $cd2246fa6b2b8017$var$inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return $cd2246fa6b2b8017$var$inspect(this, $cd2246fa6b2b8017$var$_objectSpread({}, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}($cd2246fa6b2b8017$var$_wrapNativeSuper(Error));
module.exports = $cd2246fa6b2b8017$var$AssertionError;

});

parcelRequire.register("kJg6d", function(module, exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ "use strict";
function $f1747f9d2a9ac3da$var$assign(target, firstSource) {
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
function $f1747f9d2a9ac3da$var$polyfill() {
    if (!Object.assign) Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: $f1747f9d2a9ac3da$var$assign
    });
}
module.exports = {
    assign: $f1747f9d2a9ac3da$var$assign,
    polyfill: $f1747f9d2a9ac3da$var$polyfill
};

});

parcelRequire.register("545l1", function(module, exports) {
"use strict";

var $c9irv = parcelRequire("c9irv");

var $399b8 = parcelRequire("399b8");

var $4Gm1F = parcelRequire("4Gm1F");

var $e9BMn = parcelRequire("e9BMn");

var $76XPc = parcelRequire("76XPc");
var $3b01777c59fbdc10$var$polyfill = $399b8($e9BMn(), Object);
$c9irv($3b01777c59fbdc10$var$polyfill, {
    getPolyfill: $e9BMn,
    implementation: $4Gm1F,
    shim: $76XPc
});
module.exports = $3b01777c59fbdc10$var$polyfill;

});
parcelRequire.register("c9irv", function(module, exports) {

var $04Vs3 = parcelRequire("04Vs3");
"use strict";

var $2b5HT = parcelRequire("2b5HT");
var $8d84a1a4cb486f07$var$hasSymbols = typeof Symbol === "function" && (0, $04Vs3.default)(Symbol("foo")) === "symbol";
var $8d84a1a4cb486f07$var$toStr = Object.prototype.toString;
var $8d84a1a4cb486f07$var$concat = Array.prototype.concat;
var $8d84a1a4cb486f07$var$origDefineProperty = Object.defineProperty;
var $8d84a1a4cb486f07$var$isFunction = function isFunction(fn) {
    return typeof fn === "function" && $8d84a1a4cb486f07$var$toStr.call(fn) === "[object Function]";
};

var $8d84a1a4cb486f07$var$hasPropertyDescriptors = (parcelRequire("eGDf7"))();
var $8d84a1a4cb486f07$var$supportsDescriptors = $8d84a1a4cb486f07$var$origDefineProperty && $8d84a1a4cb486f07$var$hasPropertyDescriptors;
var $8d84a1a4cb486f07$var$defineProperty = function defineProperty(object, name, value, predicate) {
    if (name in object && (!$8d84a1a4cb486f07$var$isFunction(predicate) || !predicate())) return;
    if ($8d84a1a4cb486f07$var$supportsDescriptors) $8d84a1a4cb486f07$var$origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value; // eslint-disable-line no-param-reassign
};
var $8d84a1a4cb486f07$var$defineProperties = function defineProperties(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = $2b5HT(map);
    if ($8d84a1a4cb486f07$var$hasSymbols) props = $8d84a1a4cb486f07$var$concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)$8d84a1a4cb486f07$var$defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
$8d84a1a4cb486f07$var$defineProperties.supportsDescriptors = !!$8d84a1a4cb486f07$var$supportsDescriptors;
module.exports = $8d84a1a4cb486f07$var$defineProperties;

});
parcelRequire.register("2b5HT", function(module, exports) {
"use strict";
var $196109227c2926f7$var$slice = Array.prototype.slice;

var $2ym4V = parcelRequire("2ym4V");
var $196109227c2926f7$var$origKeys = Object.keys;

var $196109227c2926f7$var$keysShim = $196109227c2926f7$var$origKeys ? function keys(o) {
    return $196109227c2926f7$var$origKeys(o);
} : (parcelRequire("9ebsz"));
var $196109227c2926f7$var$originalKeys = Object.keys;
$196109227c2926f7$var$keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if ($2ym4V(object)) return $196109227c2926f7$var$originalKeys($196109227c2926f7$var$slice.call(object));
            return $196109227c2926f7$var$originalKeys(object);
        };
    } else Object.keys = $196109227c2926f7$var$keysShim;
    return Object.keys || $196109227c2926f7$var$keysShim;
};
module.exports = $196109227c2926f7$var$keysShim;

});
parcelRequire.register("2ym4V", function(module, exports) {
"use strict";
var $1dbfe20d4fac1531$var$toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = $1dbfe20d4fac1531$var$toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $1dbfe20d4fac1531$var$toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

});

parcelRequire.register("9ebsz", function(module, exports) {
"use strict";
var $6b7e4f866da96752$var$keysShim;

if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var $6b7e4f866da96752$var$has = Object.prototype.hasOwnProperty;
    var $6b7e4f866da96752$var$toStr = Object.prototype.toString;
    var $6b7e4f866da96752$var$isArgs = (parcelRequire("2ym4V")); // eslint-disable-line global-require
    var $6b7e4f866da96752$var$isEnumerable = Object.prototype.propertyIsEnumerable;
    var $6b7e4f866da96752$var$hasDontEnumBug = !$6b7e4f866da96752$var$isEnumerable.call({
        toString: null
    }, "toString");
    var $6b7e4f866da96752$var$hasProtoEnumBug = $6b7e4f866da96752$var$isEnumerable.call(function() {}, "prototype");
    var $6b7e4f866da96752$var$dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var $6b7e4f866da96752$var$equalsConstructorPrototype = function equalsConstructorPrototype(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var $6b7e4f866da96752$var$excludedKeys = {
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
    var $6b7e4f866da96752$var$hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!$6b7e4f866da96752$var$excludedKeys["$" + k] && $6b7e4f866da96752$var$has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                $6b7e4f866da96752$var$equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e1) {
            return true;
        }
        return false;
    }();
    var $6b7e4f866da96752$var$equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
        /* global window */ if (typeof window === "undefined" || !$6b7e4f866da96752$var$hasAutomationEqualityBug) return $6b7e4f866da96752$var$equalsConstructorPrototype(o);
        try {
            return $6b7e4f866da96752$var$equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    $6b7e4f866da96752$var$keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = $6b7e4f866da96752$var$toStr.call(object) === "[object Function]";
        var isArguments = $6b7e4f866da96752$var$isArgs(object);
        var isString = isObject && $6b7e4f866da96752$var$toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = $6b7e4f866da96752$var$hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !$6b7e4f866da96752$var$has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && $6b7e4f866da96752$var$has.call(object, name)) theKeys.push(String(name));
        }
        if ($6b7e4f866da96752$var$hasDontEnumBug) {
            var skipConstructor = $6b7e4f866da96752$var$equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < $6b7e4f866da96752$var$dontEnums.length; ++k)if (!(skipConstructor && $6b7e4f866da96752$var$dontEnums[k] === "constructor") && $6b7e4f866da96752$var$has.call(object, $6b7e4f866da96752$var$dontEnums[k])) theKeys.push($6b7e4f866da96752$var$dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = $6b7e4f866da96752$var$keysShim;

});


parcelRequire.register("eGDf7", function(module, exports) {
"use strict";

var $kcQa6 = parcelRequire("kcQa6");
var $ab136dbe9f33c35b$var$$defineProperty = $kcQa6("%Object.defineProperty%", true);
var $ab136dbe9f33c35b$var$hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($ab136dbe9f33c35b$var$$defineProperty) try {
        $ab136dbe9f33c35b$var$$defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
$ab136dbe9f33c35b$var$hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!$ab136dbe9f33c35b$var$hasPropertyDescriptors()) return null;
    try {
        return $ab136dbe9f33c35b$var$$defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = $ab136dbe9f33c35b$var$hasPropertyDescriptors;

});


parcelRequire.register("4Gm1F", function(module, exports) {
"use strict";
var $368c2b8f3cf0ff0c$var$numberIsNaN = function numberIsNaN(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if ($368c2b8f3cf0ff0c$var$numberIsNaN(a) && $368c2b8f3cf0ff0c$var$numberIsNaN(b)) return true;
    return false;
};

});

parcelRequire.register("e9BMn", function(module, exports) {
"use strict";

var $4Gm1F = parcelRequire("4Gm1F");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : $4Gm1F;
};

});

parcelRequire.register("76XPc", function(module, exports) {
"use strict";

var $e9BMn = parcelRequire("e9BMn");

var $c9irv = parcelRequire("c9irv");
module.exports = function shimObjectIs() {
    var polyfill = $e9BMn();
    $c9irv(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

});


parcelRequire.register("6EL2C", function(module, exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
function $4d8af7f05e20bae8$var$_slicedToArray(arr, i) {
    return $4d8af7f05e20bae8$var$_arrayWithHoles(arr) || $4d8af7f05e20bae8$var$_iterableToArrayLimit(arr, i) || $4d8af7f05e20bae8$var$_nonIterableRest();
}
function $4d8af7f05e20bae8$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function $4d8af7f05e20bae8$var$_iterableToArrayLimit(arr, i) {
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
function $4d8af7f05e20bae8$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $4d8af7f05e20bae8$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $4d8af7f05e20bae8$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $4d8af7f05e20bae8$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $4d8af7f05e20bae8$var$_typeof(obj);
}
var $4d8af7f05e20bae8$var$regexFlagsSupported = /a/g.flags !== undefined;
var $4d8af7f05e20bae8$var$arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var $4d8af7f05e20bae8$var$arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};

var $4d8af7f05e20bae8$var$objectIs = Object.is ? Object.is : (parcelRequire("545l1"));
var $4d8af7f05e20bae8$var$objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function objectGetOwnPropertySymbols() {
    return [];
};

var $4d8af7f05e20bae8$var$numberIsNaN = Number.isNaN ? Number.isNaN : (parcelRequire("clvJj"));
function $4d8af7f05e20bae8$var$uncurryThis(f) {
    return f.call.bind(f);
}
var $4d8af7f05e20bae8$var$hasOwnProperty = $4d8af7f05e20bae8$var$uncurryThis(Object.prototype.hasOwnProperty);
var $4d8af7f05e20bae8$var$propertyIsEnumerable = $4d8af7f05e20bae8$var$uncurryThis(Object.prototype.propertyIsEnumerable);
var $4d8af7f05e20bae8$var$objectToString = $4d8af7f05e20bae8$var$uncurryThis(Object.prototype.toString);

var $js5mz = parcelRequire("js5mz");
var $4d8af7f05e20bae8$require$_require$types = $js5mz.types;
var $4d8af7f05e20bae8$var$isAnyArrayBuffer = $4d8af7f05e20bae8$require$_require$types.isAnyArrayBuffer, $4d8af7f05e20bae8$var$isArrayBufferView = $4d8af7f05e20bae8$require$_require$types.isArrayBufferView, $4d8af7f05e20bae8$var$isDate = $4d8af7f05e20bae8$require$_require$types.isDate, $4d8af7f05e20bae8$var$isMap = $4d8af7f05e20bae8$require$_require$types.isMap, $4d8af7f05e20bae8$var$isRegExp = $4d8af7f05e20bae8$require$_require$types.isRegExp, $4d8af7f05e20bae8$var$isSet = $4d8af7f05e20bae8$require$_require$types.isSet, $4d8af7f05e20bae8$var$isNativeError = $4d8af7f05e20bae8$require$_require$types.isNativeError, $4d8af7f05e20bae8$var$isBoxedPrimitive = $4d8af7f05e20bae8$require$_require$types.isBoxedPrimitive, $4d8af7f05e20bae8$var$isNumberObject = $4d8af7f05e20bae8$require$_require$types.isNumberObject, $4d8af7f05e20bae8$var$isStringObject = $4d8af7f05e20bae8$require$_require$types.isStringObject, $4d8af7f05e20bae8$var$isBooleanObject = $4d8af7f05e20bae8$require$_require$types.isBooleanObject, $4d8af7f05e20bae8$var$isBigIntObject = $4d8af7f05e20bae8$require$_require$types.isBigIntObject, $4d8af7f05e20bae8$var$isSymbolObject = $4d8af7f05e20bae8$require$_require$types.isSymbolObject, $4d8af7f05e20bae8$var$isFloat32Array = $4d8af7f05e20bae8$require$_require$types.isFloat32Array, $4d8af7f05e20bae8$var$isFloat64Array = $4d8af7f05e20bae8$require$_require$types.isFloat64Array;
function $4d8af7f05e20bae8$var$isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function $4d8af7f05e20bae8$var$getOwnNonIndexProperties(value) {
    return Object.keys(value).filter($4d8af7f05e20bae8$var$isNonIndex).concat($4d8af7f05e20bae8$var$objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function $4d8af7f05e20bae8$var$compare(a, b) {
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
var $4d8af7f05e20bae8$var$ONLY_ENUMERABLE = undefined;
var $4d8af7f05e20bae8$var$kStrict = true;
var $4d8af7f05e20bae8$var$kLoose = false;
var $4d8af7f05e20bae8$var$kNoIterator = 0;
var $4d8af7f05e20bae8$var$kIsArray = 1;
var $4d8af7f05e20bae8$var$kIsSet = 2;
var $4d8af7f05e20bae8$var$kIsMap = 3; // Check if they have the same source and flags
function $4d8af7f05e20bae8$var$areSimilarRegExps(a, b) {
    return $4d8af7f05e20bae8$var$regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function $4d8af7f05e20bae8$var$areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function $4d8af7f05e20bae8$var$areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return $4d8af7f05e20bae8$var$compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function $4d8af7f05e20bae8$var$areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && $4d8af7f05e20bae8$var$compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function $4d8af7f05e20bae8$var$isEqualBoxedPrimitive(val1, val2) {
    if ($4d8af7f05e20bae8$var$isNumberObject(val1)) return $4d8af7f05e20bae8$var$isNumberObject(val2) && $4d8af7f05e20bae8$var$objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if ($4d8af7f05e20bae8$var$isStringObject(val1)) return $4d8af7f05e20bae8$var$isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if ($4d8af7f05e20bae8$var$isBooleanObject(val1)) return $4d8af7f05e20bae8$var$isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if ($4d8af7f05e20bae8$var$isBigIntObject(val1)) return $4d8af7f05e20bae8$var$isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return $4d8af7f05e20bae8$var$isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
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
function $4d8af7f05e20bae8$var$innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? $4d8af7f05e20bae8$var$objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if ($4d8af7f05e20bae8$var$_typeof(val1) !== "object") return typeof val1 === "number" && $4d8af7f05e20bae8$var$numberIsNaN(val1) && $4d8af7f05e20bae8$var$numberIsNaN(val2);
        if ($4d8af7f05e20bae8$var$_typeof(val2) !== "object" || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || $4d8af7f05e20bae8$var$_typeof(val1) !== "object") {
            if (val2 === null || $4d8af7f05e20bae8$var$_typeof(val2) !== "object") // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || $4d8af7f05e20bae8$var$_typeof(val2) !== "object") return false;
    }
    var val1Tag = $4d8af7f05e20bae8$var$objectToString(val1);
    var val2Tag = $4d8af7f05e20bae8$var$objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = $4d8af7f05e20bae8$var$getOwnNonIndexProperties(val1, $4d8af7f05e20bae8$var$ONLY_ENUMERABLE);
        var keys2 = $4d8af7f05e20bae8$var$getOwnNonIndexProperties(val2, $4d8af7f05e20bae8$var$ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, $4d8af7f05e20bae8$var$kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === "[object Object]") {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!$4d8af7f05e20bae8$var$isMap(val1) && $4d8af7f05e20bae8$var$isMap(val2) || !$4d8af7f05e20bae8$var$isSet(val1) && $4d8af7f05e20bae8$var$isSet(val2)) return false;
    }
    if ($4d8af7f05e20bae8$var$isDate(val1)) {
        if (!$4d8af7f05e20bae8$var$isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if ($4d8af7f05e20bae8$var$isRegExp(val1)) {
        if (!$4d8af7f05e20bae8$var$isRegExp(val2) || !$4d8af7f05e20bae8$var$areSimilarRegExps(val1, val2)) return false;
    } else if ($4d8af7f05e20bae8$var$isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if ($4d8af7f05e20bae8$var$isArrayBufferView(val1)) {
        if (!strict && ($4d8af7f05e20bae8$var$isFloat32Array(val1) || $4d8af7f05e20bae8$var$isFloat64Array(val1))) {
            if (!$4d8af7f05e20bae8$var$areSimilarFloatArrays(val1, val2)) return false;
        } else if (!$4d8af7f05e20bae8$var$areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = $4d8af7f05e20bae8$var$getOwnNonIndexProperties(val1, $4d8af7f05e20bae8$var$ONLY_ENUMERABLE);
        var _keys2 = $4d8af7f05e20bae8$var$getOwnNonIndexProperties(val2, $4d8af7f05e20bae8$var$ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, $4d8af7f05e20bae8$var$kNoIterator, _keys);
    } else if ($4d8af7f05e20bae8$var$isSet(val1)) {
        if (!$4d8af7f05e20bae8$var$isSet(val2) || val1.size !== val2.size) return false;
        return $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, $4d8af7f05e20bae8$var$kIsSet);
    } else if ($4d8af7f05e20bae8$var$isMap(val1)) {
        if (!$4d8af7f05e20bae8$var$isMap(val2) || val1.size !== val2.size) return false;
        return $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, $4d8af7f05e20bae8$var$kIsMap);
    } else if ($4d8af7f05e20bae8$var$isAnyArrayBuffer(val1)) {
        if (!$4d8af7f05e20bae8$var$areEqualArrayBuffers(val1, val2)) return false;
    } else if ($4d8af7f05e20bae8$var$isBoxedPrimitive(val1) && !$4d8af7f05e20bae8$var$isEqualBoxedPrimitive(val1, val2)) return false;
    return $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, $4d8af7f05e20bae8$var$kNoIterator);
}
function $4d8af7f05e20bae8$var$getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return $4d8af7f05e20bae8$var$propertyIsEnumerable(val, k);
    });
}
function $4d8af7f05e20bae8$var$keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
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
        if (!$4d8af7f05e20bae8$var$hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = $4d8af7f05e20bae8$var$objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if ($4d8af7f05e20bae8$var$propertyIsEnumerable(val1, key)) {
                    if (!$4d8af7f05e20bae8$var$propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if ($4d8af7f05e20bae8$var$propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = $4d8af7f05e20bae8$var$objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && $4d8af7f05e20bae8$var$getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = $4d8af7f05e20bae8$var$objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && $4d8af7f05e20bae8$var$getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === $4d8af7f05e20bae8$var$kNoIterator || iterationType === $4d8af7f05e20bae8$var$kIsArray && val1.length === 0 || val1.size === 0)) return true;
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
    var areEq = $4d8af7f05e20bae8$var$objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function $4d8af7f05e20bae8$var$setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = $4d8af7f05e20bae8$var$arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if ($4d8af7f05e20bae8$var$innerDeepEqual(val1, val2, strict, memo)) {
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
function $4d8af7f05e20bae8$var$findLooseMatchingPrimitives(prim) {
    switch($4d8af7f05e20bae8$var$_typeof(prim)){
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
            if ($4d8af7f05e20bae8$var$numberIsNaN(prim)) return false;
    }
    return true;
}
function $4d8af7f05e20bae8$var$setMightHaveLoosePrim(a, b, prim) {
    var altValue = $4d8af7f05e20bae8$var$findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function $4d8af7f05e20bae8$var$mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = $4d8af7f05e20bae8$var$findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !$4d8af7f05e20bae8$var$innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && $4d8af7f05e20bae8$var$innerDeepEqual(item, curB, false, memo);
}
function $4d8af7f05e20bae8$var$setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = $4d8af7f05e20bae8$var$arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if ($4d8af7f05e20bae8$var$_typeof(val) === "object" && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!$4d8af7f05e20bae8$var$setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = $4d8af7f05e20bae8$var$arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if ($4d8af7f05e20bae8$var$_typeof(_val) === "object" && _val !== null) {
                if (!$4d8af7f05e20bae8$var$setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !$4d8af7f05e20bae8$var$setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function $4d8af7f05e20bae8$var$mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = $4d8af7f05e20bae8$var$arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if ($4d8af7f05e20bae8$var$innerDeepEqual(key1, key2, strict, memo) && $4d8af7f05e20bae8$var$innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function $4d8af7f05e20bae8$var$mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = $4d8af7f05e20bae8$var$arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = $4d8af7f05e20bae8$var$_slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if ($4d8af7f05e20bae8$var$_typeof(key) === "object" && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !$4d8af7f05e20bae8$var$innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!$4d8af7f05e20bae8$var$mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = $4d8af7f05e20bae8$var$arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = $4d8af7f05e20bae8$var$_slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if ($4d8af7f05e20bae8$var$_typeof(key) === "object" && key !== null) {
                if (!$4d8af7f05e20bae8$var$mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !$4d8af7f05e20bae8$var$innerDeepEqual(a.get(key), item, false, memo)) && !$4d8af7f05e20bae8$var$mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function $4d8af7f05e20bae8$var$objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === $4d8af7f05e20bae8$var$kIsSet) {
        if (!$4d8af7f05e20bae8$var$setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === $4d8af7f05e20bae8$var$kIsMap) {
        if (!$4d8af7f05e20bae8$var$mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === $4d8af7f05e20bae8$var$kIsArray) for(; i < a.length; i++){
        if ($4d8af7f05e20bae8$var$hasOwnProperty(a, i)) {
            if (!$4d8af7f05e20bae8$var$hasOwnProperty(b, i) || !$4d8af7f05e20bae8$var$innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if ($4d8af7f05e20bae8$var$hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!$4d8af7f05e20bae8$var$hasOwnProperty(b, key) || !$4d8af7f05e20bae8$var$innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!$4d8af7f05e20bae8$var$innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function $4d8af7f05e20bae8$var$isDeepEqual(val1, val2) {
    return $4d8af7f05e20bae8$var$innerDeepEqual(val1, val2, $4d8af7f05e20bae8$var$kLoose);
}
function $4d8af7f05e20bae8$var$isDeepStrictEqual(val1, val2) {
    return $4d8af7f05e20bae8$var$innerDeepEqual(val1, val2, $4d8af7f05e20bae8$var$kStrict);
}
module.exports = {
    isDeepEqual: $4d8af7f05e20bae8$var$isDeepEqual,
    isDeepStrictEqual: $4d8af7f05e20bae8$var$isDeepStrictEqual
};

});
parcelRequire.register("clvJj", function(module, exports) {
"use strict";

var $399b8 = parcelRequire("399b8");

var $c9irv = parcelRequire("c9irv");

var $hJ6m8 = parcelRequire("hJ6m8");

var $8J3uX = parcelRequire("8J3uX");

var $cU81i = parcelRequire("cU81i");
var $8fd00f176fef8b3b$var$polyfill = $399b8($8J3uX(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ $c9irv($8fd00f176fef8b3b$var$polyfill, {
    getPolyfill: $8J3uX,
    implementation: $hJ6m8,
    shim: $cU81i
});
module.exports = $8fd00f176fef8b3b$var$polyfill;

});
parcelRequire.register("hJ6m8", function(module, exports) {
"use strict";
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

});

parcelRequire.register("8J3uX", function(module, exports) {
"use strict";

var $hJ6m8 = parcelRequire("hJ6m8");
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
    return $hJ6m8;
};

});

parcelRequire.register("cU81i", function(module, exports) {
"use strict";

var $c9irv = parcelRequire("c9irv");

var $8J3uX = parcelRequire("8J3uX");
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = $8J3uX();
    $c9irv(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

});




function $a52502134587cc7c$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $bef4077408992241$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}


function $1ab94dbc974f75c3$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


function $ceffc0a19f6864ba$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $f9fc3e8dc2b5850c$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(o, minLen);
}


function $7221d375061d681f$export$2e2bcd8739ae039(arr, i) {
    return (0, $a52502134587cc7c$export$2e2bcd8739ae039)(arr) || (0, $bef4077408992241$export$2e2bcd8739ae039)(arr, i) || (0, $f9fc3e8dc2b5850c$export$2e2bcd8739ae039)(arr, i) || (0, $1ab94dbc974f75c3$export$2e2bcd8739ae039)();
}



function $9f9b5d88319e4a66$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $ceffc0a19f6864ba$export$2e2bcd8739ae039)(arr);
}



function $b8753e6fb483330f$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



function $6c3cfc3eaf24aa04$export$2e2bcd8739ae039(arr) {
    return (0, $9f9b5d88319e4a66$export$2e2bcd8739ae039)(arr) || (0, $bef4077408992241$export$2e2bcd8739ae039)(arr) || (0, $f9fc3e8dc2b5850c$export$2e2bcd8739ae039)(arr) || (0, $b8753e6fb483330f$export$2e2bcd8739ae039)();
}



var $01fxr = parcelRequire("01fxr");
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



var $57a8c525f18472a5$exports = {};

$parcel$export($57a8c525f18472a5$exports, "pane", function () { return $57a8c525f18472a5$export$6dff30574f79a202; }, function (v) { return $57a8c525f18472a5$export$6dff30574f79a202 = v; });
$parcel$export($57a8c525f18472a5$exports, "ring", function () { return $57a8c525f18472a5$export$e7d0da6968da5dd; }, function (v) { return $57a8c525f18472a5$export$e7d0da6968da5dd = v; });
$parcel$export($57a8c525f18472a5$exports, "pointer", function () { return $57a8c525f18472a5$export$b7fd2c2937973304; }, function (v) { return $57a8c525f18472a5$export$b7fd2c2937973304 = v; });
var $57a8c525f18472a5$export$6dff30574f79a202;
var $57a8c525f18472a5$export$e7d0da6968da5dd;
var $57a8c525f18472a5$export$b7fd2c2937973304;
$57a8c525f18472a5$export$6dff30574f79a202 = "GmrByW_pane";
$57a8c525f18472a5$export$e7d0da6968da5dd = "GmrByW_ring";
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



var $e0ee81e6b1909f9c$var$d2CElem = document.createElement("div");
function $e0ee81e6b1909f9c$export$1e2520dc1e5e78b0(s) {
    var dataAttributeNameDashCase = "data-".concat(s);
    $e0ee81e6b1909f9c$var$d2CElem.setAttribute(dataAttributeNameDashCase, "");
    var attributeNameCamelCase = Object.keys((0, $640317966ad3eaf9$export$2e2bcd8739ae039)({}, $e0ee81e6b1909f9c$var$d2CElem.dataset))[0];
    $e0ee81e6b1909f9c$var$d2CElem.removeAttribute(dataAttributeNameDashCase);
    return attributeNameCamelCase;
}
function $e0ee81e6b1909f9c$export$8e392bba563832c0(s) {
    $e0ee81e6b1909f9c$var$d2CElem.dataset[s] = "";
    var dataAttributeNameDashCase = $e0ee81e6b1909f9c$var$d2CElem.getAttributeNames()[0];
    $e0ee81e6b1909f9c$var$d2CElem.removeAttribute(dataAttributeNameDashCase);
    var attributeNameDashCase = dataAttributeNameDashCase.replace(/^data-/, "");
    return attributeNameDashCase;
}


function $89a7ff243d13e2f0$var$migrateDataAttribute(o, key, e, coerce) {
    var attributeValue = e.dataset[key];
    if (typeof attributeValue !== "undefined") // eslint-disable-next-line no-param-reassign
    o[key] = coerce(attributeValue);
}
var $89a7ff243d13e2f0$var$thereminAttrCoercionMap = new Map();
$89a7ff243d13e2f0$var$thereminAttrCoercionMap.set("touchElementCssClasses", function(s) {
    return s.split(" ");
});
$89a7ff243d13e2f0$var$thereminAttrCoercionMap.set("touchElementStyle", function(s) {
    return s;
});
var $89a7ff243d13e2f0$var$toneAttrCoercionMap = new Map();
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("waveType", function(s) {
    return s;
});
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("gainMin", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("gainMax", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("frequencyMinHz", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("frequencyMaxHz", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("attackMs", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("releaseMs", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("updateMs", Number.parseFloat);
$89a7ff243d13e2f0$var$toneAttrCoercionMap.set("mute", function() {
    return true;
});
var $89a7ff243d13e2f0$var$attrCoercionMap = new Map((0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$thereminAttrCoercionMap.entries()).concat((0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$toneAttrCoercionMap.entries())));
var $89a7ff243d13e2f0$var$thereminAttrNames = (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$thereminAttrCoercionMap.keys()).map(function(k) {
    return "data-".concat((0, $e0ee81e6b1909f9c$export$8e392bba563832c0)(k));
});
var $89a7ff243d13e2f0$var$toneAttrNames = (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$toneAttrCoercionMap.keys()).map(function(k) {
    return "data-".concat((0, $e0ee81e6b1909f9c$export$8e392bba563832c0)(k));
});
var $89a7ff243d13e2f0$var$attrNames = (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$thereminAttrNames).concat((0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$toneAttrNames));
function $89a7ff243d13e2f0$var$initMuskiThereminComponent(e) {
    var m = $89a7ff243d13e2f0$var$migrateDataAttribute;
    var o = {};
    (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$thereminAttrCoercionMap.entries()).forEach(function(param) {
        var _param = (0, $7221d375061d681f$export$2e2bcd8739ae039)(param, 2), attr = _param[0], coerce = _param[1];
        return m(o, attr, e, coerce);
    });
    var to = {};
    (0, $6c3cfc3eaf24aa04$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$toneAttrCoercionMap.entries()).forEach(function(param) {
        var _param = (0, $7221d375061d681f$export$2e2bcd8739ae039)(param, 2), attr = _param[0], coerce = _param[1];
        return m(to, attr, e, coerce);
    });
    var polyphonicTheremin = new (0, $23085247b9f95d4c$export$2e2bcd8739ae039)(e, o, to);
    var thereMinAttrObserver = new MutationObserver(function(mutations) {
        // This MutationObserver callback is quite ugly because we have to deal with the
        // PolyphonicThereminOptions and ToneOptions at the same time,
        // which is not easy to get right in TypeScript.
        // TODO: Refactor to avoid @ts-ignore comments
        var thereminOptions = {};
        var toneOptions = {};
        mutations.forEach(function(mutation) {
            if (mutation.attributeName !== null) {
                var camelCaseAttrName = (0, $e0ee81e6b1909f9c$export$1e2520dc1e5e78b0)(mutation.attributeName.replace(/^data-/, ""));
                var _ref = (0, $7221d375061d681f$export$2e2bcd8739ae039)($89a7ff243d13e2f0$var$thereminAttrNames.includes(camelCaseAttrName) ? [
                    thereminOptions,
                    (0, $a189909cce53f31a$export$ba43bf67f3d48107)
                ] : [
                    toneOptions,
                    (0, $bf6ef698d861fc89$export$ba43bf67f3d48107)
                ], 2), options = _ref[0], defaultOptions = _ref[1];
                var newValue = e.getAttribute(mutation.attributeName);
                if (newValue !== null) // attribute added or changed
                {
                    if (newValue !== mutation.oldValue) {
                        var coerce = $89a7ff243d13e2f0$var$attrCoercionMap.get(camelCaseAttrName);
                        (0, $01fxr.strict)(typeof coerce !== "undefined");
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
        attributeFilter: $89a7ff243d13e2f0$var$attrNames,
        attributes: true,
        attributeOldValue: true
    });
}
document.querySelectorAll('*[data-component="muski-theremin"]').forEach($89a7ff243d13e2f0$var$initMuskiThereminComponent);

})();
//# sourceMappingURL=muski-theremin.js.map
