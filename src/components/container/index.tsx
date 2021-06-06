import React from 'react';
import classes from 'classnames';
import * as css from './container.module.scss';

type Props = React.ComponentProps<'div'> & {
  component?: React.ElementType,
};

export default function Container(props: Props) {
  const Component = props.component ?? 'div';

  return (
    <Component {...props} className={classes(css.container, props.className)} />
  );
}
