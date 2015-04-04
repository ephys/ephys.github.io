'use strict';

module.exports = {
	slowPrint: function(element, text, delay, callback) {
		delay = delay || 50;

		var index = 0;
		var timeout = function() {
			element.textContent += text.charAt(index++);

			if (index !== text.length) {
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