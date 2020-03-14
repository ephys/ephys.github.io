import React from 'react';
import css from './style.module.scss';
import Container from '../container';
import photo from '../../resources/duotone.png';

type Props = {
  id: string,
  content: string,
};

function SectionAboutMe(props: Props) {

  return (
    <Container id={props.id} className={css.container}>
      <div
        className={css.sectionAboutMe}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      <div className={css.picture}>
        <img src={photo} alt="Guylian Cox" />
      </div>
    </Container>
  );
}

export default SectionAboutMe;

/*
width: 387px;
height: 718.45px;
 */
