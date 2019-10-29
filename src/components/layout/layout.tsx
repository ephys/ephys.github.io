import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import css from './layout.module.scss';

type Props = {
  children: ReactNode,
};

function Layout(props: Props) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Work+Sans:400,700|Space+Mono:400,700" />
      </Helmet>
      <a href="#content" tabIndex={1} className={css.jumpToContent}>
        Skip to content
      </a>
      <main>{props.children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
}

export default Layout;
