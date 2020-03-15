import React from 'react';
import Container from '../container';
import css from './style.module.scss';
import MarkdownHtml, { H2 } from '../markdown-text';

type Props = {
  id: string,
  content: Array<{
    html: string,
    meta: {
      year: string,
      repository?: string,
      npm?: string,
      active: true
      title: string,
      demo?: string,
    },
  }>
};

export default function SectionProjects(props: Props) {

  props.content.sort((a, b) => {
    const val = Number(b.meta.year) - Number(a.meta.year);

    if (val !== 0) {
      return val;
    }

    if (a.meta.active) {
      return -1;
    }

    if (b.meta.active) {
      return 1;
    }

    return 0;
  });

  return (<>
    <Container id={props.id} className={css.container}>
      <H2 red>My own projects</H2>
      {props.content.map(item => {

        return (
          <div className={css.experience}>
            <h3 className={css.h3}>{item.meta.title}</h3>
            <span className={css.time}>
              <time>{item.meta.year}</time>
            </span>
            <ul className={css.list}>
              {item.meta.repository && <li><a href={item.meta.repository}>Source code</a></li>}
              {item.meta.npm && <li><a href={item.meta.npm}>npm</a></li>}
              {item.meta.demo && <li><a href={item.meta.demo}>Live page</a></li>}
            </ul>
            <MarkdownHtml html={item.html} />
          </div>
        )
      })}

      <p>Want to see more? TODO</p>
      <p>-> Check out my archived projects</p>
      <p>Or</p>
      <ul>
        <li>I post a lot of code snippets on https://gist.github.com/Ephys</li>
        <li>And refined code on https://github.com/ephys</li>
        <li>Read my tech thoughts on https://guylian.me/blog</li>
      </ul>


    </Container>
    <Container id={props.id} className={css.container}>
      <H2>TODO: My Clients ? Merge with past experience ?</H2>
      <ul>
        <li>MyMedicoach</li>
        <li>Figures</li>
      </ul>
    </Container>
    <Container id={props.id} className={css.container}>
      <H2>TODO: SOCIAL LINKS</H2>
    </Container>
  </>);
}
