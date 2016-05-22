// move the CV behind the presentation and add a flip button

var presentationWrapper = document.querySelector('#intro > .columns');
var cv = presentationWrapper.querySelector('.cv');
var textIntro = presentationWrapper.querySelector('.text_intro');
var buttonWrapper = cv.parentNode;
var presentationDiv = textIntro.parentNode;

cv.parentNode.removeChild(cv);
textIntro.parentNode.appendChild(cv);
presentationDiv.classList.add('presentation');

var flipButton = document.createElement('button');
flipButton.classList.add('button', 'large');
flipButton.textContent = 'Curriculum vitae';

flipButton.addEventListener('click', function (e) {
  e.preventDefault();

  presentationDiv.classList.toggle('active');
  flipButton.classList.toggle('active');
});

buttonWrapper.appendChild(flipButton);
