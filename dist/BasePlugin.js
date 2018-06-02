(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("BasePlugin", [], factory);
	else if(typeof exports === 'object')
		exports["BasePlugin"] = factory();
	else
		root["BasePlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n* @author       Leonardo Farroco <leonardo.farroco@gmail.com>\n* @copyright    2018 Photon Storm Ltd.\n* @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}\n*/\n\nvar AnimChar = function (scene) {\n    //  The Scene that owns this plugin\n    this.scene = scene;\n\n    this.systems = scene.sys;\n\n    if (!scene.sys.settings.isBooted) {\n        scene.sys.events.once('boot', this.boot, this);\n    }\n};\n\n//  Static function called by the PluginFile Loader.\nAnimChar.register = function (PluginManager) {\n    //  Register this plugin with the PluginManager, so it can be added to Scenes.\n\n    //  The first argument is the name this plugin will be known as in the PluginManager. It should not conflict with already registered plugins.\n    //  The second argument is a reference to the plugin object, which will be instantiated by the PluginManager when the Scene boots.\n    //  The third argument is the local mapping. This will make the plugin available under `this.sys.base` and also `this.base` from a Scene if\n    //  it has an entry in the InjectionMap.\n    PluginManager.register('BasePlugin', AnimChar, 'base');\n};\n\nAnimChar.prototype = {\n\n    //  Called when the Plugin is booted by the PluginManager.\n    //  If you need to reference other systems in the Scene (like the Loader or DisplayList) then set-up those references now, not in the constructor.\n    boot: function () {\n        var eventEmitter = this.systems.events;\n\n        //  Listening to the following events is entirely optional, although we would recommend cleanly shutting down and destroying at least.\n        //  If you don't need any of these events then remove the listeners and the relevant methods too.\n\n        eventEmitter.on('start', this.start, this);\n\n        eventEmitter.on('preupdate', this.preUpdate, this);\n        eventEmitter.on('update', this.update, this);\n        eventEmitter.on('postupdate', this.postUpdate, this);\n\n        eventEmitter.on('pause', this.pause, this);\n        eventEmitter.on('resume', this.resume, this);\n\n        eventEmitter.on('sleep', this.sleep, this);\n        eventEmitter.on('wake', this.wake, this);\n\n        eventEmitter.on('shutdown', this.shutdown, this);\n        eventEmitter.on('destroy', this.destroy, this);\n    },\n\n    //  A test method.\n    test: function (name) {\n        console.log('BasePlugin says hello ' + name + '!');\n    },\n\n    //  Called when a Scene is started by the SceneManager. The Scene is now active, visible and running.\n    start: function () {\n    },\n\n    //  Called every Scene step - phase 1\n    preUpdate: function (time, delta) {\n    },\n\n    //  Called every Scene step - phase 2\n    update: function (time, delta) {\n    },\n\n    //  Called every Scene step - phase 3\n    postUpdate: function (time, delta) {\n    },\n\n    //  Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.\n    pause: function () {\n    },\n\n    //  Called when a Scene is resumed from a paused state.\n    resume: function () {\n    },\n\n    //  Called when a Scene is put to sleep. A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.\n    sleep: function () {\n    },\n\n    //  Called when a Scene is woken from a sleeping state.\n    wake: function () {\n    },\n\n    //  Called when a Scene shuts down, it may then come back again later (which will invoke the 'start' event) but should be considered dormant.\n    shutdown: function () {\n    },\n\n    //  Called when a Scene is destroyed by the Scene Manager. There is no coming back from a destroyed Scene, so clear up all resources here.\n    destroy: function () {\n        this.shutdown();\n\n        this.scene = undefined;\n    }\n\n};\n\nAnimChar.prototype.constructor = AnimChar;\n\n\nmodule.exports = AnimChar;\n\n//# sourceURL=webpack://BasePlugin/./main.js?");

/***/ })

/******/ });
});