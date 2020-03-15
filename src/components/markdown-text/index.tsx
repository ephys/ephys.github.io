import React from 'react';
import classes from 'classnames';
import css from './style.module.scss';

type Props = {
  html: string,
};

export default function MarkdownHtml(props: Props) {
  return (
    <div
      className={css.md}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

export function H2(props: React.ComponentProps<'h2'> & { red?: boolean }) {
  const { red, ...passDown } = props;
  return <h2 {...passDown} className={classes(css.h2, red && css.red)} />;
}
