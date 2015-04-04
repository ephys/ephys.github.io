'use strict';

export function slowPrint(element: HTMLElement, text: String, delay: number, callback: Function) {
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