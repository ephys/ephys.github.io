/// <reference path="../dts/jquery.d.ts" />
'use strict';

import $ = require('jquery');
import utils = require('./utils');
import Watcher = require('./ScrollWatcher');

function scrollToSection(sectionNum: number) {
	$(document.body).animate({ scrollTop: sectionNum * window.innerHeight }, '500', 'swing');
}

(function() {
	var sections = document.getElementsByTagName('section');
	var sectionWacher = new Watcher.ScrollWatcher();

	sectionWacher.watchElement(sections[1]);
})();

(function() {
	var introSection = document.getElementById('intro');

	var h1 = introSection.firstElementChild;
	var cursor = h1.firstElementChild;
	var textSpan = <HTMLElement>h1.insertBefore(document.createElement('span'), cursor);

	utils.slowPrint(textSpan, location.hostname, 50, function() {
		var nextPage = document.createElement('button');
		nextPage.innerHTML = '&#x25bc;';
		nextPage.addEventListener('click', function() {
			scrollToSection(1);
		});

		introSection.appendChild(nextPage);
	});
})();

(function() {
	var projects = document.querySelectorAll('.projectGroup article header');

	for (var i = 0; i < projects.length; i++) {
		projects[i].addEventListener('click', function() {
			this.parentNode.classList.toggle('active');
		});
	}
})();