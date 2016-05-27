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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _documentReady = __webpack_require__(1);

	var _documentReady2 = _interopRequireDefault(_documentReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _documentReady2.default)(function () {
	  try {
	    Typekit.load();
	  } catch (e) {
	    console.log(e);
	  }

	  document.body.classList.remove('noscript');
	  document.body.classList.add('jscript');

	  var websiteParts = __webpack_require__(2);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;

	  var _iteratorError = void 0;

	  try {
	    for (var _iterator = websiteParts.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var file = _step.value;

	      websiteParts(file);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (callback) {
	  if (document.readyState === 'complete' || document.readyState === 'loaded') {
	    callback();
	  } else {
	    (function () {
	      var readyListener = function readyListener() {
	        callback();
	        document.removeEventListener('DOMContentLoaded', readyListener);
	      };

	      document.addEventListener('DOMContentLoaded', readyListener);
	    })();
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./curriculum.js": 3,
		"./easter_egg.js": 4,
		"./header.js": 5,
		"./introduction.js": 6,
		"./projects.js": 7
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	// move the CV behind the presentation and add a flip button

	var presentationWrapper = document.querySelector('#intro > .columns');
	var cv = presentationWrapper.querySelector('.cv');
	var textIntro = presentationWrapper.querySelector('.text_intro');
	var buttonWrapper = cv.parentNode;
	var presentationDiv = textIntro.parentNode;

	textIntro.parentNode.appendChild(cv);
	presentationDiv.classList.add('presentation');

	var flipButton = document.createElement('button');
	flipButton.classList.add('button', 'large');
	flipButton.textContent = 'Curriculum vitae';

	flipButton.addEventListener('click', function (e) {
	  e.preventDefault();

	  presentationDiv.classList.toggle('active');
	  flipButton.classList.toggle('active');
	});

	var img = document.createElement('img');
	img.src = 'assets/img/me.jpg';

	buttonWrapper.appendChild(img);
	buttonWrapper.appendChild(flipButton);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function sendTardis() {
	  var tardis = new Image();
	  tardis.onload = function () {
	    tardis.classList.add('tardis');
	    document.body.appendChild(tardis);

	    setTimeout(function () {
	      document.body.removeChild(tardis);
	    }, 3500);
	  };
	  tardis.src = 'assets/img/tardis.gif';
	}

	// mandatory easter egg
	var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	var konamiIndex = 0;
	document.body.addEventListener('keyup', function (e) {
	  if (e.keyCode !== konamiKeys[konamiIndex]) {
	    konamiIndex = 0;
	    return;
	  }

	  konamiIndex++;
	  if (konamiIndex == konamiKeys.length) {
	    konamiIndex = 0;
	    //document.body.classList.toggle('konami');
	    //if (document.body.classList.contains('konami')) {
	    sendTardis();
	    //}
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	//import Headhesive from 'headhesive';
	//
	//const header = document.getElementById('header');
	//
	//new Headhesive(header, {
	//  onInit() {
	//    this.clonedElem.removeAttribute('id');
	//  }
	//});
	"use strict";

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	// update my age, have my birthday
	document.querySelector('#developer_age').textContent = function () {
	  var year = 1994;
	  var month = 6;
	  var day = 1;

	  var today = new Date();
	  var age = today.getFullYear() - year;

	  if (today.getMonth() < month - 1 || today.getMonth() === month - 1 && today.getDate() < day) {
	    age--;
	  }

	  return age;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// projects

	var projectSection = document.getElementById('projects');

	var projectList = projectSection.querySelectorAll('.project_list li');
	Array.prototype.forEach.call(projectList, function (project) {
	  project.addEventListener('click', function () {
	    if (this.classList.contains('active')) return;

	    var previouslyActive = document.querySelector('.project_list li.active');
	    if (previouslyActive !== null) {
	      previouslyActive.classList.remove('active');
	      var previousTarget = document.getElementById(previouslyActive.getAttribute('data-target'));
	      previousTarget.classList.remove('active');
	    }

	    var newTarget = document.getElementById(this.getAttribute('data-target'));
	    if (newTarget !== null) {
	      newTarget.classList.add('active');
	      this.classList.add('active');
	    }
	  });
	});

/***/ }
/******/ ]);