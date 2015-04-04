'use strict';

var $ = require('jquery');
var utils = require('./utils');
var ScrollWatcher = require('./ScrollWatcher');

function scrollToSection(sectionNum) {
	$(document.body).animate({ scrollTop: sectionNum * window.innerHeight }, '500', 'swing');
}

(function() {
	var sections = document.getElementsByTagName('section');
	var sectionWacher = new ScrollWatcher(sections);

	/*sectionWacher.addListener(sections[1], function() {

	});*/
})();

(function() {
	var introSection = document.getElementById('intro');

	var h1 = document.createElement('h1');
	introSection.appendChild(h1);

	utils.slowPrint(h1, location.hostname + '_', 50, function() {
		var nextPage = document.createElement('button');
		nextPage.innerHTML = '&#x25bc;';
		nextPage.addEventListener('click', function() {
			scrollToSection(1);
		});

		introSection.appendChild(nextPage);
	});
})();