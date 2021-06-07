import React from 'react';
import Container from '../container';
import * as css from './style.module.scss';
import MarkdownHtml, { H2, TextLink } from '../markdown-text';

type Props = {
  id: string,
  content: Array<{
    html: string,
    id: string,
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

const externalLinkProps = {
  rel: 'nofollow noopener noreferrer',
  target: '_blank',
};

export default function SectionProjects(props: Props) {

  // props.content.sort((a, b) => {
  //   const val = Number(b.meta.year) - Number(a.meta.year);
  //
  //   if (val !== 0) {
  //     return val;
  //   }
  //
  //   if (a.meta.active) {
  //     return -1;
  //   }
  //
  //   if (b.meta.active) {
  //     return 1;
  //   }
  //
  //   return a.id.localeCompare(b.id);
  // });

  console.log('projects', props.content);

  return (<>
    <Container id={props.id} className="section" component="section">
      <div className={css.sectionHeader}>
        <H2 red>My own projects</H2>
        <p className="noprint"><a className={css.viewMore} href="https://github.com/ephys" {...externalLinkProps}>View more on GitHub</a></p>
      </div>
      <div className={css.items}>
        {props.content.map(item => {

          return (
            <div key={item.id}>
              <h3 className={css.h3}>{item.meta.title}</h3>
              <span className={css.time}>
              <time>{item.meta.year}</time>
            </span>
              <ul className={css.list}>
                {item.meta.repository && <li><TextLink to={item.meta.repository} external>Source code</TextLink></li>}
                {item.meta.npm && <li><TextLink to={item.meta.npm} external>npm</TextLink></li>}
                {item.meta.demo && <li><TextLink to={item.meta.demo} external>Live page</TextLink></li>}
              </ul>
              <MarkdownHtml html={item.html} />
            </div>
          )
        })}
      </div>
    </Container>
  </>);
}

// TODO: project archive
//  <p>Want to see more? TODO</p>
//       <p>-> Check out my archived projects</p>
//       <p>Or</p>
//       <ul>
//         <li>I post a lot of code snippets on https://gist.github.com/Ephys</li>
//         <li>And refined code on https://github.com/ephys</li>
//         <li>Read my tech thoughts on https://guylian.me/blog</li>
//       </ul>

// TODO: live projects in 'Past experience'
//  - MyMedicoach + testimony
//  - Figures
