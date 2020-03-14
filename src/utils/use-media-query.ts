import React from 'react';

export function useMediaQuery(mediaQuery: string): boolean {

  /* eslint-disable react-hooks/rules-of-hooks */
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }

  const [matches, setMatches] = React.useState(() => {
    const queryMatcher = window.matchMedia(mediaQuery);

    return queryMatcher.matches;
  });

  React.useEffect(() => {
    const listener = e => {
      setMatches(e.matches);
    };

    const queryMatcher = window.matchMedia(mediaQuery);
    queryMatcher.addListener(listener);

    return () => {
      queryMatcher.removeListener(listener);
    };
  }, [mediaQuery]);

  return matches;
}
