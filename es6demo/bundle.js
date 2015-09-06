/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var People = {
		say: function say() {
			console.log("hello");
		}
	};

	var Man = {
		__prop__: People,
		name: "man",
		say: function say() {
			console.log("" + this.name);
		}
	};

	Man.say();
	People.say();

	var arr = [];
	var len = 10;

	var _loop = function (i) {
		arr[i] = function () {
			console.log(i);
		};
	};

	for (var i = 0; i < len; i++) {
		_loop(i);
	}
	arr[1]();

	// const obj = Object.freeze({});
	// obj.name = "name";
	// console.log(obj);
	// let {name} = {name:'123123'};
	// console.log(name)
	// let [a,b,c] = "hel";
	// console.log(a)

	var x = 1,
	    y = 4;

	var _ref = [y, x];
	x = _ref[0];
	y = _ref[1];

	console.log(x, y);

	var m = new Map();
	m.set("first", "hello");
	m.set("second", "world");

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = m[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var key = _step$value[0];
			var value = _step$value[1];

			console.log(key, value);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator["return"]) {
				_iterator["return"]();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	console.log(String.fromCharCode(0x20BB7));

	var s = "𠮷";
	console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(s));

	function tag(strArr, value1, value2) {
		console.log(strArr, value1, value2);
	}

	tag(_taggedTemplateLiteral(["hello ", " world", " "], ["hello ", " world", " "]), x + y, x * y);

	console.log(String.raw({ raw: "hello" }, 1, 2, 3, 4));

	// console.log(Array.from([1,2,3,4,5,6],x=>x*x));
	Array.from = function (arrayLike, func) {
		var arr = Array.prototype.slice.call(arrayLike);
		if (func) {
			for (var i = 0, _len = arr.length; i < _len; i++) {
				arr[i] = func(arr[i]);
			}
		}
		return arr;
	};

	console.log(Array.from({ 0: 1, 1: 2, 2: 3, length: 3 }, function (x) {
		return x * x;
	}));

	var person = Object.defineProperties({}, {
		name: {
			get: function get() {
				console.log("get name");
				return "my name is";
			},
			configurable: true,
			enumerable: true
		}
	});

	console.log(person.name);

	var s = Symbol("symbol");
	//error
	// console.log(`this is ${s}`);
	// var proxy = new Proxy({},{
	// 	get(target, property){
	// 		return 111;
	// 	}
	// });

	// console.log(proxy.name)

	// console.log(Math.max(...[1,2,3]))
	console.log.apply(console, [1, 2, 3]);
	console.log([].concat(_toConsumableArray("hello")));

	var iarr = [1, 2, 3, 4, 5];
	var it = iarr[Symbol.iterator]();

	console.log(it.next());

	var RangeIterator = (function () {
		function RangeIterator(start, stop) {
			_classCallCheck(this, RangeIterator);

			this.value = start;
			this.stop = stop;
		}

		_createClass(RangeIterator, [{
			key: Symbol.iterator,
			value: function value() {
				return this;
			}
		}, {
			key: "next",
			value: function next() {
				var value = this.value;
				if (value < this.stop) {
					this.value++;
					return { value: value, done: false };
				} else {
					return { value: undefined, done: true };
				}
			}
		}]);

		return RangeIterator;
	})();

	function range(start, stop) {
		return new RangeIterator(start, stop);
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = range(0, 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var i = _step2.value;

			console.log(i);
		}

		// const arrs = [for (i of range(0,99)) i*2 ];
		// console.log(arrs);

		// function* generate()
		// {
		// 	yield 1;
		// 	yield 2;
		// 	yield 3;
		// 	return 4;
		// }

		// for(let n of generate())
		// {
		// 	console.log(n)
		// }
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
				_iterator2["return"]();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

/***/ }
/******/ ]);