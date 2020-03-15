import React from 'react';
import Container from '../container';
import css from './style.module.scss';
import MarkdownHtml, { H2 } from '../markdown-text';

type Props = {
  id: string,
  content: Array<{
    html: string,
    meta: {
      start: string,
      end: string,
      title: string,
    },
  }>
};

export default function SectionExperience(props: Props) {

  props.content.sort((a, b) => {
    if (a.meta.end === b.meta.end) {
      return -a.meta.start.localeCompare(b.meta.start);
    }

    // put active experience first
    if (a.meta.end == null) {
      return -1;
    }

    if (b.meta.end == null) {
      return 1;
    }

    return -a.meta.end.localeCompare(b.meta.end);
  });

  return (
    <Container id={props.id} className={css.container}>
      <H2>Past experience</H2>
      {props.content.map(item => {

        return (
          <div className={css.experience}>
            <h3 className={css.h3}>{item.meta.title}</h3>
            <span className={css.time}>
              <time>{formatDate(item.meta.start)}</time> {item.meta.end && <> – <time>{formatDate(item.meta.end)}</time></>}
            </span>
            <MarkdownHtml html={item.html} />
          </div>
        )
      })}
    </Container>
  );
}

const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(date: string) {
  const [year, month] = date.split('-');

  return `${monthMap[Number(month) - 1]} ${year}`;
}
