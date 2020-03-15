import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import css from './layout.module.scss';
import { useLocalStorage } from '../../utils/use-local-storage';
import { useMediaQuery } from '../../utils/use-media-query';

type Props = {
  children: ReactNode,
  contentSectionId?: string,
};

function Layout(props: Props) {

  const [prefersDark, setPrefersDark] = useLocalStorage('prefers-dark-theme', !useMediaQuery('prefers-color-scheme: light'));

  return (
    <>
      <Helmet>
        <html className={prefersDark ? 'dark' : 'light'} />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Work+Sans:400,700|Space+Mono:400,700" />
      </Helmet>

      {props.contentSectionId && (
        <a href={`#${props.contentSectionId}`} tabIndex={1} className={css.jumpToContent}>
          Skip to content
        </a>
      )}

      <main>{props.children}</main>

      <button onClick={() => setPrefersDark(val => !val)} style={{ position: 'fixed', top: 0, right: 0 }}>
        switch dark theme
      </button>
    </>
  );
}

export default Layout;
