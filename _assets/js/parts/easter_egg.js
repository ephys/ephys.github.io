function sendTardis() {
  var tardis = new Image();
  tardis.onload = function () {
    tardis.classList.add('tardis');
    document.body.appendChild(tardis);

    setTimeout(function () {
      document.body.removeChild(tardis);
    }, 3500);
  };
  tardis.src = 'assets/img/tardis.gif';
}

// mandatory easter egg
var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiIndex = 0;
document.body.addEventListener('keyup', function (e) {
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
