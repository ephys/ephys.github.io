'use strict';

(function() {
	var introSection = document.getElementById('intro');

	var h1 = document.createElement('h1');
	introSection.appendChild(h1);

	slowPrint(h1, location.hostname + '_');
})();

function slowPrint(element, text, delay) {
	delay = delay || 50;

	var indice = 0;

	var timeout = function() {
		element.textContent += text.charAt(indice++);

		if (indice !== text.length) {
			setTimeout(timeout, delay);
		}
	};

	setTimeout(timeout, delay);
}