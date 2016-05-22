
import documentReady from './util/documentReady';

documentReady(function () {
  try {
    Typekit.load();
  } catch(e) {
    console.log(e);
  }

  document.body.classList.remove('noscript');
  document.body.classList.add('jscript');

  const websiteParts = require.context('./parts/', true, /\.js$/);
  for (const file of websiteParts.keys()) {
    websiteParts(file);
  }
});
