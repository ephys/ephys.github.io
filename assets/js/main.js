(function($) {
	'use strict';

	try {
		Typekit.load();
	} catch(e) {
		console.log(e);
	}

	function sendTardis() {
		var tardis = document.createElement('img');
		tardis.src = 'assets/img/tardis.gif';
		tardis.classList.add('tardis');
		document.body.appendChild(tardis);

		setTimeout(function() {
			document.body.removeChild(tardis);
		}, 3500);
	}

	var onReady = function() {
		document.body.classList.remove('noscript');
		document.body.classList.add('jscript');

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

		// arrow scroll
		document.querySelector('#intro > .arrow').addEventListener('click', function(e) {
			$('html, body').animate({
				scrollTop: $('main').offset().top
			}, 'slow');
		});

		// move the CV behind the presentation and add a flip button
		(function() {
			var presentationWrapper = document.querySelector('#i_me_myself > .columns');
			var cv = presentationWrapper.querySelector('.cv');
			var textIntro = presentationWrapper.querySelector('.text_intro');
			var buttonWrapper = cv.parentNode;
			var presentationDiv = textIntro.parentNode;

			cv.parentNode.removeChild(cv);
			textIntro.parentNode.appendChild(cv);
			presentationDiv.classList.add('presentation');

			var flipButton = document.createElement('button');
			flipButton.classList.add('button', 'large');
			flipButton.textContent = 'Show me your cv';

			flipButton.addEventListener('click', function(e) {
				e.preventDefault();

				var isPresentation = !presentationDiv.classList.contains('active');
				presentationDiv.classList.toggle('active');

				if (isPresentation) {
					this.innerHTML = 'Show me your cv';
				} else {
					this.innerHTML = '<del>Show me your cv</del> <br><ins>Take me back</ins>';
				}
			});

			buttonWrapper.appendChild(flipButton);
		})();

		(function() {
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
					//document.body.classList.toggle('konami');
					//if (document.body.classList.contains('konami')) {
						sendTardis();
					//}
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

			var portfolioProject = document.getElementById('project_portfolio');
			var canvasDescription = document.createElement('p');
			canvasDescription.textContent = 'There isn\'t much to say about it so I recreated the saints row 4 loading screen animation to distract you.';
			portfolioProject.lastElementChild.insertBefore(canvasDescription, portfolioProject.lastElementChild.lastElementChild);

			var canvasDiv = document.createElement('div');
			portfolioProject.insertBefore(canvasDiv, portfolioProject.firstElementChild);
			canvasDiv.classList.add('decorative', 'column');

			var sr4Canvas = document.createElement('canvas');
			canvasDiv.appendChild(sr4Canvas);

			sr4Canvas.addEventListener('dblclick', function() {
				sr4Canvas.classList.toggle('fullscreen');
				document.body.classList.toggle('hide');

				resize();
			});
			var context = sr4Canvas.getContext('2d');

			var hypotenuse;
			function resize() {
				if (sr4Canvas.classList.contains('fullscreen')) {
					sr4Canvas.width = window.outerWidth;// - 40;
					sr4Canvas.height = window.outerHeight;// - 40;
				} else {
					sr4Canvas.width  = sr4Canvas.parentNode.offsetWidth;
					//sr4Canvas.height = sr4Canvas.parentNode.offsetHeight;
					sr4Canvas.height = 400;
				}

				hypotenuse = Math.sqrt(sr4Canvas.width * sr4Canvas.width + sr4Canvas.height * sr4Canvas.height);

				context.strokeStyle = '#052D50';
				context.fillStyle = '#052D50';
			}

			var text = '1 00 11  1 0  0';
			var lineWidth = 7;

			//var textList = [15, 100, 40, 35, 14, 23, 12, 24, 40, 80, 50, 16, 20, 11, 13, 18, 45, 70, 58];
			var textList = [];
			function drawMoving(timestamp) {
				context.save();
				var canvasWidth = sr4Canvas.width;
				var canvasHeight = sr4Canvas.height;

				context.clearRect(0, 0, canvasWidth, canvasHeight);

				// we need to draw a square that will perfectly surround a variable-sized rectangle
				// calculate the side of the square using trigonometry. The square is rotated by 45deg so the
				// resulting triangles are isoceles
				var x = Math.sqrt((canvasWidth * canvasWidth) / 2);
				var y = Math.sqrt((canvasHeight * canvasHeight) / 2);
				var sideSize = x + y;

				// then translate that square around the rectangle using even more trigonometry
				var distanceFromBottomOfRectangleToCornerOfSquare = Math.sqrt((x * x) - Math.pow(canvasWidth / 2, 2));
				context.translate(canvasWidth/2, -distanceFromBottomOfRectangleToCornerOfSquare);

				var distanceFromSideOfRectangleToCornerOfSquare = Math.sqrt((y * y) - Math.pow(canvasHeight / 2, 2));
				var squareHypothenuse = Math.sqrt(sideSize * sideSize * 2);

				// then rotate the square
				context.rotate(45 * Math.PI / 180);
				context.fillStyle = '#052D50';

				var bottomLinesStartHeight = sideSize * 0.6;
				var upperLinesEndHeight = ((lineWidth * 2) * 10) + lineWidth;
				var textPos = upperLinesEndHeight + 30;

				// draw text
				var textIndex = 0;
				while (textPos < bottomLinesStartHeight) {
					if (textIndex >= textList.length) {
						var newText = {
							size: random(0, 100),
							offset: random(0, hypotenuse),
							speedModifier: Math.random() + 0.5
						};

						textList.push(newText);
					}

					var textDetails = textList[textIndex];
					context.font = (textDetails.size / 2) + 'px monospace';

					var width = context.measureText(text).width;
					var speed = 4 * textDetails.speedModifier;
					context.fillText(text, (timestamp / textDetails.size * speed + textDetails.offset) % (hypotenuse + width) - width, textPos);

					textPos += textDetails.size * 0.6 + 2;
					textIndex++;
				}

				// draw lines
				while (bottomLinesStartHeight < squareHypothenuse) {
					context.fillRect(0, bottomLinesStartHeight, hypotenuse, lineWidth);
					bottomLinesStartHeight += lineWidth * 2;
				}

				for (var i = 0; i < 10; i++) {
					context.fillRect(0, ((lineWidth * 2) * i) + lineWidth, hypotenuse, lineWidth);
				}

				var gradient = context.createRadialGradient(sideSize / 2, sideSize / 2, sideSize/2, sideSize/2, sideSize/2, 80);
				gradient.addColorStop(1, "rgba(21, 21, 21, 0.1)");
				gradient.addColorStop(0, "rgba(0, 0, 0, 0.5)");
				context.fillStyle = gradient;
				context.fillRect(0,0,sideSize,sideSize);

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

	function random(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}
})(jQuery);