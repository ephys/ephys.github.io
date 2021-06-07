import React from 'react';
import { H2, TextLink } from '../markdown-text';
import Container from '../container';
import * as css from './style.module.scss';
import classNames from 'classnames';
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

export default function FooterSocial(props: { id: string }) {

  return (
    <footer id={props.id} className={css.footer}>
      <Container>
        <div className={classNames('section', css.footerSection)}>
          <div className={css.shadow}>
            <H2>Let's get in touch?</H2>
          </div>
          <div className={css.contactInfo}>
            <div className={css.socialLinks}>
              <a href="mailto:hello@guylian.me" title="My Email">
                <Mail />
                <span>hello@guylian.me</span>
              </a>

              <a href="https://github.com/ephys" title="My GitHub">
                <GitHub />
                <span>ephys</span>
              </a>

              <a href="https://twitter.com/ephys_" title="My Twitter">
                <Twitter />
                <span>@ephys_</span>
              </a>

              <a href="" title="My LinkedIn">
                <Linkedin />
                <span>Guylian Cox</span>
              </a>
            </div>
          </div>
        </div>

        <div className={css.footerInfo}>
          <p className={css.vat}>VAT BE 0746.377.584</p>
          <p className={classNames(css.sourceCode, 'noprint')}><TextLink to="https://github.com/ephys/ephys.github.io" target="_blank">Check out the source code of this website</TextLink></p>
        </div>
      </Container>
    </footer>
  )
}
