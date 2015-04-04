'use strict';

import $ = require('jquery');

export class ScrollWatcher {
	private watchedElements: Node[] = [];
	private watchFunctions: Function[] = [];

	public watchElement(elem: Node): void {
		this.watchedElements.push(elem);
		console.log('');
	}
}
