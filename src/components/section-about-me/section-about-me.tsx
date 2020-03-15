import React from 'react';
import css from './style.module.scss';
import Container from '../container';
import photo from '../../resources/duotone.png';
import MarkdownHtml from '../markdown-text';

type Props = {
  id: string,
  content: string,
};

function SectionAboutMe(props: Props) {

  return (
    <Container id={props.id} className={css.container}>
      <MarkdownHtml
        html={props.content }
      />
      <div className={css.picture}>
        <img src={photo} alt="Guylian Cox" />
      </div>
    </Container>
  );
}

export default SectionAboutMe;
