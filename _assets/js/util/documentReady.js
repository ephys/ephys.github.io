
export default function (callback) {
  if (document.readyState === 'complete' || document.readyState === 'loaded') {
    callback();
  } else {
    const readyListener = function () {
      callback();
      document.removeEventListener('DOMContentLoaded', readyListener);
    };

    document.addEventListener('DOMContentLoaded', readyListener);
  }
}
