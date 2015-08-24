(function() {
	'use strict';

	try {
		Typekit.load();
	} catch(e) {
		console.log(e);
	}

	var onReady = function() {
		(function() {
			document.body.classList.remove('noscript');
			document.body.classList.add('jscript');

			var presentationDiv = document.querySelector('.presentation');
			document.querySelector('#i_me_myself .button').addEventListener('click', function(e) {
				e.preventDefault();

				var isPresentation = !presentationDiv.classList.contains('active');
				presentationDiv.classList.toggle('active');

				if (isPresentation) {
					this.innerHTML = 'Show me your cv';
				} else {
					this.innerHTML = '<del>Show me your cv</del> <br><ins>Take me back</ins>';
				}
			});

			// update my age, have my birthday
			document.querySelector('#developer_age').textContent = (function() {
				var year = 1994;
				var month = 6;
				var day = 1;

				var today = new Date();
				var age = today.getFullYear() - year;

				if(today.getMonth() < (month - 1)
					|| (today.getMonth() === (month - 1) && today.getDate() < day)) {
					age--;
				}

				return age;
			})();

			// mandatory easter egg
			var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
			var konamiIndex = 0;
			document.body.addEventListener('keyup', function(e) {
				if (e.keyCode !== konamiKeys[konamiIndex]) {
					konamiIndex = 0;
					return;
				}

				konamiIndex++;
				if (konamiIndex == konamiKeys.length) {
					konamiIndex = 0;
					document.body.classList.toggle('konami');
				}
			});

			// projects
			var list = document.querySelectorAll('.project_list li');
			for (var i = 0; i < list.length; i++) {
				list[i].addEventListener('click', function() {
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
			}
		})();

		(function() {
			window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
											window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			// I like that background http://i.ytimg.com/vi/IQtikWKaqN4/maxresdefault.jpg
			var sr4Canvas = document.querySelector('#project_portfolio canvas');
			var context = sr4Canvas.getContext('2d');

			sr4Canvas.style.backgroundColor = '#000106';
			var hypotenuse;
			function resize() {
				sr4Canvas.style.minHeight = '300px';
				sr4Canvas.width  = sr4Canvas.parentNode.offsetWidth;
				sr4Canvas.height = sr4Canvas.parentNode.offsetHeight;

				hypotenuse = Math.sqrt(sr4Canvas.width * sr4Canvas.width + sr4Canvas.height * sr4Canvas.height);

				context.strokeStyle = '#052D50';
				context.fillStyle = '#052D50';
			}

			var text = '1 00 11  1 0  0';
			var nbLines = 29;
			var lineWidth = 5;

			var elements = [15, 100, 40, 35, 14, 23, 12, 24, 40, 80, 50, 12, 20];
			function drawMoving(timestamp) {
				context.save();
				context.clearRect(0, 0, sr4Canvas.width, sr4Canvas.height);
				context.rotate(45 * Math.PI / 180);

				context.translate(0, -415);

				for (var i = 0; i < nbLines / 3; i++) {
					context.fillRect(0, (lineWidth * 2) * i + lineWidth, sr4Canvas.width, lineWidth);
				}

				var minHeight = (lineWidth * 2) * i + 38;

				for (i = 0; i < nbLines; i++) {
					context.fillRect(0, hypotenuse - ((lineWidth * 2) * i + lineWidth), sr4Canvas.width, lineWidth);
				}

				for (i = 0; i < elements.length; i++) {
					context.font = (elements[i] / 2) + 'px monospace';

					var width = context.measureText(text).width;
					context.fillText(text, (timestamp / elements[i] * 2.4) % (hypotenuse + width) - width, minHeight);

					minHeight += (elements[i] * 0.5) + 2;
				}

				context.restore();

				requestAnimationFrame(drawMoving);
			}

			window.addEventListener('load', resize, false);
			window.addEventListener('resize', resize, false);
			requestAnimationFrame(drawMoving);
		})();
	};

	if (document.readyState === 'complete' || document.readyState === 'loaded') {
		onReady();
	} else {
		document.addEventListener('DOMContentLoaded', onReady);
	}
})();