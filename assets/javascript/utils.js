'use strict';

module.exports = {
	slowPrint: function(element, text, delay, callback) {
		delay = delay || 50;

		var indice = 0;

		var timeout = function() {
			element.innerText += text.charAt(indice++);

			if (indice !== text.length) {
				setTimeout(timeout, delay);
			} else {
				if (callback !== void 0) {
					callback(element, text, delay);
				}
			}
		};

		setTimeout(timeout, delay);
	}
};