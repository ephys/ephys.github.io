import React from 'react';
import css from './style.module.scss';

type Props = {
  id: string,
};

function SectionAboutMe(props: Props) {

  return (
    <div id={props.id}>
      <div>
        <h1 aria-label="Welcome" />
        <div className={css.description}>
          <p>Guylian Cox</p>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default SectionAboutMe;
