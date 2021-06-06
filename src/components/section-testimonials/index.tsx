import React from 'react';
import Container from '../container';
import MarkdownHtml, { H2, TextLink } from '../markdown-text';
import ArrowRightIcon from 'react-feather/dist/icons/arrow-right';
import * as css from './style.module.scss';
import classNames from 'classnames';

type Props = {
  id: string,
  content: Array<{
    html: string,
    meta: {
      title: string,
      url: string,
      caseStudy: string,
      referer: string,
      photo: string,
    },
  }>
};

export default function SectionTestimonials(props: Props) {
  return (
    <Container id={props.id} className="section" component={'section'}>
      <H2 red>They worked with me<span aria-hidden="true">_</span></H2>
      <div className={css.testimonials}>
        {props.content.map(testimonial => {
          return (
            <article className={css.testimonial}>
              <h1 className={css.testimonialTitle}>{testimonial.meta.title}</h1>

              <blockquote className={css.blockquote}>
                <MarkdownHtml html={testimonial.html} className={css.testimonialBody} />

                <p className={classNames(css.testimonialLinks, 'noprint')}><TextLink to={`/case-studies/${testimonial.meta.caseStudy}`}>Read the case study <ArrowRightIcon /></TextLink></p>

                <footer className={css.testimonialFooter}>
                  <img src={testimonial.meta.photo} alt="" className={css.refererPicture} />
                  <p>
                    <cite className={css.referer}>{testimonial.meta.referer}</cite>, <cite className={css.refererCompany}>{testimonial.meta.title}</cite>
                  </p>
                </footer>
              </blockquote>
            </article>
          );
        })}
      </div>

      <p className={classNames(css.sectionViewMore, 'noprint')}><TextLink to="/case-studies">All my Case Studies <ArrowRightIcon /></TextLink></p>
    </Container>
  );
}
