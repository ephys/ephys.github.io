import React from 'react';
import classes from 'classnames';
import * as css from './style.module.scss';
import Container from '../container';
import photo from '../../resources/duotone2.jpg';
import MarkdownHtml from '../markdown-text';

type Props = {
  id: string,
  content: string,
};

function SectionAboutMe(props: Props) {

  return (
    <Container id={props.id} className={classes(css.container, 'section')} component="section">
      <MarkdownHtml
        className={css.content}
        html={props.content}
      />
      <div className={css.picture}>
        <img src={photo} alt="Guylian Cox" />
      </div>
    </Container>
  );
}

export default SectionAboutMe;
