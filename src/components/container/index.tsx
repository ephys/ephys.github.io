import React from 'react';
import classes from 'classnames';
import css from './container.module.scss';

type Props = React.ComponentProps<'div'>;

export default function Container(props: Props) {
  return (
    <div {...props} className={classes(css.container, props.className)} />
  );
}
