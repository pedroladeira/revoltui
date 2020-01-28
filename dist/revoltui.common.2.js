((typeof self !== 'undefined' ? self : this)["webpackJsonprevoltui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonprevoltui"] || []).push([[2],{

/***/ "fd16":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./langs/en.js": "f4ee",
	"./langs/es.js": "ff24",
	"./langs/it.js": "7021",
	"./langs/oc.js": "a0b3",
	"./langs/pt.js": "170b",
	"./langs/zh.js": "9b9e",
	"./vue-hello-week.common.js": "d2e5",
	"./vue-hello-week.esm.js": "6b48",
	"./vue-hello-week.js": "1c03",
	"./vue-hello-week.min.js": "14b8"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "fd16";

/***/ })

}]);
//# sourceMappingURL=revoltui.common.2.js.map