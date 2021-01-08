import React from 'react';
import classNames from 'classnames';
import { useLocation } from '@reach/router';
import css from './style.module.scss';
import { getRandomFloat, getRandomInt, getRandomItem, mapNumbers, replaceAt } from '../../utils/utils';
import { useMediaQuery } from '../../utils/use-media-query';
import { useLocalStorage } from '../../utils/use-local-storage';
import Nav from '../nav';

const badCharacterSet = ['_', '\\', '/', '#', '@', '$', '%', '&', '#', 'x'];
function glitchCharacter() {
  return getRandomItem(badCharacterSet);
}

function glitchedAppear(
  element: HTMLElement,
  cleanText: string,
  onTextReady: () => void,
) {
  const cancellationFunctions = new Set<() => void>();

  // TODO:
  // - cancel loopAnimGlitches
  // - cancel loopBrokenCharacters
  // - cancel addLetters

  // animation starts with rendering two random chars 6 times
  loopBrokenCharacters(element, 6).then(() => {
    loopAnimGlitches(element);

    const cancelTextGlitches = loopTextGlitches(element, cleanText, 0);
    cancellationFunctions.add(cancelTextGlitches);

    addLetters(element, cleanText).then(() => {
      onTextReady && onTextReady();

      cancelTextGlitches();
      cancellationFunctions.delete(cancelTextGlitches);
      cancellationFunctions.add(loopTextGlitches(element, cleanText, 0));
    });
  });

  return function stop() {
    for (const callback of cancellationFunctions) {
      callback();
    }
  }
}

function loopBrokenCharacters(element: HTMLElement, maxLoops: number) {
  let loopCount = 0;

  return new Promise(resolve => {
    const loop = () => {
      element.textContent = glitchCharacter() + glitchCharacter();

      if (loopCount++ >= maxLoops) {
        return void resolve();
      }

      setTimeout(loop, getRandomFloat(0.3, 1) * 160);
    };

    loop();
  });
}

/**
 * Add a new letter to the display
 * Has a probability to add dummy letters instead (they will be replaced during the next call).
 */
function addLetters(element: HTMLElement, cleanText: string) {
  const targetLength = cleanText.length;
  let addedLetters = 0;

  return new Promise(resolve => {
    const loop = () => {

      // probability to glitch decreases with each letter (linearly mapped between 0.75 => 0.2)
      const glitchProbability = mapNumbers(addedLetters, 0, targetLength - 1, 0.75, 0.2);
      const isGlitch = Math.random() < glitchProbability;

      if (isGlitch) {
        // TODO use displayed text instead
        // Replace last displayed character with glitch, + another glitch behind
        element.textContent = cleanText.substr(0, addedLetters - 1) + glitchCharacter() + glitchCharacter();
      } else {
        addedLetters += 1;
        // TODO use displayed text instead
        // Add new letter to display
        element.textContent = cleanText.substr(0, addedLetters);
      }

      if (addedLetters < cleanText.length) {
        // waitTime is lower for longer texts so overall
        // time stays the same for any length (fr / en).
        const waitTime = Math.random() * 1000 / targetLength;
        setTimeout(loop, waitTime);
      } else {
        resolve();
      }
    };

    setTimeout(loop, Math.random() * 1500 / cleanText.length);
  });
}

function loopTextGlitches(element: HTMLElement, cleanText: string, phase: number) {
  let timeout;
  let dead = false;

  const loop = () => {
    if (dead) {
      return;
    }

    timeout = setTimeout(
      () => {
        runTextGlitch(element, cleanText).then(loop);
      },
      Math.random() * (phase === 0 ? 1000 : 2500)
    );
  };

  loop();

  return function stopTextGlitches() {
    clearTimeout(timeout);
    dead = true;
  };
}

function runTextGlitch(element: HTMLElement, cleanText: string) {
  const char = getRandomInt(0, element.textContent.length - 1);
  element.textContent = replaceAt(element.textContent, char, glitchCharacter());

  // restore
  return new Promise(resolve => {
    setTimeout(() => {
      element.textContent = replaceAt(element.textContent, char, cleanText.charAt(char));

      resolve();
    }, Math.random() * 500);
  });
}

function loopAnimGlitches(element: HTMLElement) {
  let timeout;
  let dead = false;

  const loop = () => {
    runAnimGlitch(element).then(() => {
      if (dead) {
        return;
      }

      setTimeout(loop, Math.random() * 3500);
    });
  };

  loop();

  return function stopTextGlitches() {
    clearTimeout(timeout);
    dead = true;
  };
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
function runAnimGlitch(element: HTMLElement) {
  const { keyframes, ...options } = animations[getRandomInt(0, animations.length - 1)];

  const animation = element.animate(keyframes, options);

  return new Promise(resolve => {
    animation.addEventListener('finish', () => {
      resolve();
    });
  });
}

const ONE_HOUR = 60 * 60 * 1000;

function SectionWelcome() {

  const welcomeRef = React.useRef();
  const [descriptionVisible, setDescriptionVisible] = React.useState(false);
  const [animationDisabled, setAnimationDisabled] = React.useState(false);
  const disableAnimation = useMediaQuery('prefers-reduced-motion: reduce');
  const [lastRun, setLastRun] = useLocalStorage<number>('hero-anim-last-run');
  const debugMode = new URLSearchParams(useLocation().search).get('debug') != null;
  const ran = React.useRef();

  React.useEffect(() => {
    const welcome = welcomeRef.current;
    const targetText = welcome.getAttribute('aria-label');

    if (ran.current) {
      return;
    }

    ran.current = true;

    if (disableAnimation) {
      welcome.textContent = targetText;
      setAnimationDisabled(true);

      return;
    }

    if (!debugMode && lastRun != null && (Date.now() - lastRun) < ONE_HOUR * 24) {
      welcome.textContent = targetText;
      setAnimationDisabled(true);

      return;
    }

    setLastRun(Date.now());

    return glitchedAppear(welcome, targetText, () => {
      setTimeout(() => {
        setDescriptionVisible(true);
      }, 400);
    });
  }, [disableAnimation, lastRun, debugMode]);

  return (
    <>
      <div className={classNames(css.welcome, (descriptionVisible || animationDisabled) && css.phase2, animationDisabled && css.noAnimation)}>
        <div>
          <h1 aria-label="Welcome" ref={welcomeRef} />
          <div className={css.description}>
            <p>Guylian Cox</p>
            <p>Web & Mobile Developer</p>
          </div>
        </div>
      </div>
      <Nav mode={animationDisabled ? 'static' : descriptionVisible ? 'animated' : 'invisible'} />
    </>
  );
}

export default SectionWelcome;
