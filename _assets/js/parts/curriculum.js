// move the CV behind the presentation and add a flip button

const presentationWrapper = document.querySelector('#intro > .columns');
const cv = presentationWrapper.querySelector('.cv');
const textIntro = presentationWrapper.querySelector('.text_intro');
const buttonWrapper = cv.parentNode;
const presentationDiv = textIntro.parentNode;

textIntro.parentNode.appendChild(cv);
presentationDiv.classList.add('presentation');

const flipButton = document.createElement('button');
flipButton.classList.add('button', 'large');
flipButton.textContent = 'Curriculum vitae';

flipButton.addEventListener('click', function (e) {
  e.preventDefault();

  presentationDiv.classList.toggle('active');
  flipButton.classList.toggle('active');
});

const img = document.createElement('img');
img.src = 'assets/img/me.jpg';

buttonWrapper.appendChild(img);
buttonWrapper.appendChild(flipButton);
