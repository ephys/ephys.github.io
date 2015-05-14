'use strict';

// replace SVG images by inlines (http://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement)
//(function() {
//	$('img[src$=".svg"]').each(function() {
//		var img = this;
//		var imgURL = this.src;
//
//		$.get(imgURL, function(data) {
//			var $svg = $(data).find('svg');
//			var svg = $svg[0];
//
//			svg.id = img.id;
//			svg.setAttribute('class', img.getAttribute('class'));
//
//			$(svg).removeAttr('xmlns:a');
//			$(img).replaceWith($svg);
//		}, 'xml');
//	});
//})();