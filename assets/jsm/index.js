document.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;
  const totalScrolled = Math.min(document.scrollingElement.scrollTop, viewportHeight);
  const leftToScroll = viewportHeight - totalScrolled;
  const percentScrolled = leftToScroll / viewportHeight;
  document.querySelector('.welcome').style.opacity = percentScrolled * percentScrolled * percentScrolled;
  document.querySelector('.welcome').style.minHeight = `${percentScrolled * 100}vh`;
  document.querySelector('.welcome').style.top = `-${(100 - (percentScrolled * 100)) / 5}vh`;
}, { passive: true });

const welcome = document.querySelector('.welcome h1');
const targetText = welcome.textContent;

const badCharacterSet = ['_', '\\', '/', '#', '@', '$', '%', '&', '#', 'x'];

function glitchCharacter() {
  return badCharacterSet[getRandomInt(0, badCharacterSet.length - 1)];
}

// idea:
// make social icons appear underneath "welcome" when it has loaded (fade slide down)
let count = 0;

function loadLetters() {
  welcome.textContent = glitchCharacter() + glitchCharacter();

  if (count++ < 6) {
    setTimeout(loadLetters, getRandomFloat(0.3, 1) * 160);
  } else {
    setTimeout(addLetter, Math.random() * 1500 / targetText.length);
    setTimeout(glitchPart, 1200);
  }
}

const targetLength = targetText.length;

/** How many letters have successfully been added */
let length = 0;

/**
 * Add a new letter to the display
 * Has a probability to add dummy letters instead (they will be replaced during the next call).
 */
function addLetter() {
  // probability to glitch increases with each letter (linearly mapped between 0.2 => 0.75)
  const glitchProbability = mapNumbers(length, 0, targetLength - 1, 0.2, 0.75);
  const isGlitch = Math.random() < glitchProbability;

  if (isGlitch) {
    // TODO use displayed text instead
    // Replace last displayed character with glitch, + another glitch behind
    welcome.textContent = targetText.substr(0, length - 1) + glitchCharacter() + glitchCharacter();
  } else {
    length += 1;
    // TODO use displayed text instead
    // Add new letter to display
    welcome.textContent = targetText.substr(0, length);
  }

  if (length < targetText.length) {
    // waitTime is lower for longer texts so overall
    // time stays the same for any length (fr / en).
    const waitTime = Math.random() * 1000 / targetLength;
    setTimeout(addLetter, waitTime);
  } else {
    document.querySelector('.main').classList.add('visible');

    setTimeout(() => {
      document.querySelector('.welcome').classList.add('phase-2');
      runGlitchIt();

      phase = 1;
    }, 400);
  }
}

function runGlitchIt() {
  glitchIt(welcome).then(() => {
    setTimeout(runGlitchIt, Math.random() * 3500);
  });
}

welcome.style.opacity = '0';

(async function run() {
  await racePromiseTimeout(
    waitForDomLoaded()
      .then(() => waitForStyleSheets())
      .then(() => document.fonts.load(getComputedStyle(welcome).font, welcome.textContent)),
    1000
  );

  const width = welcome.clientWidth;

  resizeText(welcome, width);
  window.addEventListener('resize', () => {
    resizeText(welcome, width);
  }, { passive: true });

  welcome.textContent = '';
  welcome.style.opacity = '';

  setTimeout(loadLetters, Math.random() * 1400 / targetText.length);
}());

function resizeText(textContainer, width) {
  const maxScreenWidth = document.body.clientWidth - 20;

  if (width > maxScreenWidth) {
    const currentFontSize = 128;

    const ratio = maxScreenWidth / width;

    const newFontSize = currentFontSize * ratio;

    textContainer.style.fontSize = `${newFontSize}px`;
  }
}

function racePromiseTimeout(promise, timeout) {

  let timeoutIdentifier;
  const timeoutPromise = new Promise(resolve => {
    timeoutIdentifier = setTimeout(() => {
      console.warn('promise timeouted');

      resolve();
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise])
    .then(val => {
      clearTimeout(timeoutIdentifier);

      return val[0];
    });
}

let phase = 0;
const glitchPart = () => {
  const char = getRandomInt(0, length - 1);
  welcome.textContent = replaceAt(welcome.textContent, char, glitchCharacter());

  setTimeout(() => {
    welcome.textContent = replaceAt(welcome.textContent, char, targetText.charAt(char));
  }, Math.random() * 500);

  setTimeout(glitchPart, Math.random() * (phase === 0 ? 1000 : 2500));
};

function mapNumbers(val, rangeAStart, rangeAEnd, rangeBStart, rangeBEnd) {
  return (val - rangeAStart) / (rangeAEnd - rangeAStart) * (rangeBEnd - rangeBStart) + rangeBStart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function replaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

const animations = [
  {
    keyframes: [
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)', offset: 0 },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)', offset: 0.04 * 5 },

      { textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5', filter: 'blur(0)', offset: 0.05 * 5 },
      { textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5', filter: 'blur(0)', offset: 0.1 * 5 },

      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0.5px)', offset: 0.11 * 5 },
      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0.5px)', offset: 0.15 * 5 },

      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0px)', offset: 0.16 * 5 },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0px)', offset: 0.2 * 5 },
      { textShadow: 'none', filter: 'blur(0)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0.8px 7px 0 #0c33f5, -0.8px 0 0 lime' },
      { textShadow: '1.8px -5px 0 #0c33f5, -0.8px 0 0 lime' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0.5px)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0.5px)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime', filter: 'blur(0)' },
      { textShadow: 'none', filter: 'blur(0)' },
    ],
    duration: 100,
  },
  {
    keyframes: [
      { textShadow: '45px 0 0 #0c33f5, -45px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0 0 0 #0c33f5, 0 0 0 lime', filter: 'blur(0)' },
      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '1px 0 0 red, -1px 0 0 lime', filter: 'blur(0.5px)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0.5px)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '3px 0 0 red, -3px 0 0 #0c33f5', filter: 'blur(0.5px)' },
      { textShadow: '-3px -10px 0 red, 3px 0 0 #0c33f5', filter: 'blur(0.5px)' },
      { textShadow: '-3px 5px 0 red, 3px 0 0 #0c33f5', filter: 'blur(0.5px)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5', filter: 'blur(0)' },
      { textShadow: '30px 0 0 red, -30px 0 0 lime', filter: 'blur(0)' },
      { textShadow: '0 0 0 red, 0 0 0 lime', filter: 'blur(0)' },
    ],
    duration: 1000,
  }, {
    keyframes: [{
      textShadow: '1px 0 0 red, -1px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 #0c33f5',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '50px 0 0 red, -50px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '0 0 0 red, 0 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '3px 0 0 red, -3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '3px 0 0 red, -3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '3px 0 0 red, -3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '3px 0 0 red, -3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 lime',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 lime',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '1px 0 0 red, -1px 0 0 lime',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 lime',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 lime',
      filter: 'blur(0.5px)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 red, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '60px 0 0 lime, -60px 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '0 0 0 lime, 0 0 0 #0c33f5',
      filter: 'blur(0)',
    }, {
      textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '0.8px 0 0 #0c33f5, -0.8px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 #0c33f5, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 #0c33f5, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 #0c33f5, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 #0c33f5, 3px 0 0 lime',
      filter: 'blur(0)',
    }, {
      textShadow: '-3px 0 0 #0c33f5, 3px 0 0 lime',
      filter: 'blur(0)',
    }],
    duration: 1500,
  },
];

function glitchIt(obj) {
  const { keyframes, ...options } = animations[getRandomInt(0, animations.length - 1)];

  const animation = obj.animate(keyframes, options);

  // return animation.finished;

  return new Promise(resolve => {
    animation.addEventListener('finish', () => {
      resolve();
    });
  });
}


function waitForDomLoaded() {
  return new Promise(resolve => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve, { passive: true, once: true });
    } else {
      resolve();
    }
  });
}

function waitForStyleSheets() {
  const sheetLinks = Array.from(document.head.querySelectorAll('link[rel=stylesheet]'));

  const promises = sheetLinks.map(link => {

    return new Promise(resolve => {
      let loaded;
      try {
        loaded = link.sheet.cssRules.length > 0;
      } catch {
        loaded = false;
      }

      if (loaded) {
        return void resolve(link.sheet);
      }

      link.addEventListener('load', () => {
        resolve(link.sheet);
      }, { passive: true, once: true });
    });
  });

  return Promise.all(promises);
}
