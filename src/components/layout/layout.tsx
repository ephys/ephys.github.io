import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import SunIcon from 'react-feather/dist/icons/sun';
import MoonIcon from 'react-feather/dist/icons/moon';
import * as css from './layout.module.scss';
import { useLocalStorage } from '../../utils/use-local-storage';
import { useMediaQuery } from '../../utils/use-media-query';
import classNames from 'classnames';

type Props = {
  children: ReactNode,
  contentSectionId?: string,
};

function Layout(props: Props) {

  const [prefersDark, setPrefersDark] = useLocalStorage('prefers-dark-theme', !useMediaQuery('prefers-color-scheme: light'));

  return (
    <>
      <Helmet>
        <html className={prefersDark ? 'dark' : 'light'} lang="en" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,700|Space+Mono:400,700"
        />
      </Helmet>

      {props.contentSectionId && (
        <a href={`#${props.contentSectionId}`} tabIndex={1} className={css.jumpToContent}>
          Skip to content
        </a>
      )}

      <button
        onClick={() => setPrefersDark(val => !val)}
        className={classNames(css.darkModeToggle, 'noprint')}
        title={prefersDark ? 'Use Light mode' : 'Use Dark mode'}
      >

        {prefersDark ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </button>

      <main>{props.children}</main>
    </>
  );
}

export default Layout;
