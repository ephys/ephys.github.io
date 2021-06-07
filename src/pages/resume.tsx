import photo from '../resources/photo-558w.jpg';
import React, { ReactNode } from 'react';
import * as css from './resume.module.scss';
import Layout from '../components/layout/layout';
import { TextLink } from '../components/markdown-text';
import classNames from 'classnames';
import { GitHub, Link, Mail, MapPin } from 'react-feather';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';

export default function CvView() {
  return (
    <Layout>
      <SEO title="Resume" />
      <Helmet htmlAttributes={{ 'data-template': 'resume' }}>
        <link rel="stylesheet" href="/print-no-margin.css" />
      </Helmet>
      <p className={classNames(css.downloadPdf, 'noprint')}><TextLink to="/resume.pdf" external>Download as PDF</TextLink></p>
      <article className={css.page}>
        <header className={css.header}>
          <div className={css.picture}>
            <img src={photo} alt="Guylian Cox" width="680" height="907" />
          </div>
          <div className={css.about}>
            <h1 className={css.name}>Guylian Cox</h1>
            <div className={css.contactInfo}>
              <p><MapPin /> Belgium</p>
              <p><Mail /> hello@guylian.me</p>
              <p><Link /> <span>guylian.me <span className={css.hint}>(you will find everything in more details)</span></span></p>
              <p><GitHub /> @ephys</p>
            </div>
          </div>
        </header>
        <div className={css.main}>
          <div className={css.mainCols}>
            <div className={css.mainLeftCol}>
              <div className={css.section}>
                <h2>Languages</h2>
                <dl className={css.languages}>
                  <div>
                    <dt>French</dt>
                    <dd>Native</dd>
                  </div>
                  <div>
                    <dt>English</dt>
                    <dd>Fluent</dd>
                  </div>
                </dl>
              </div>

              <div className={css.section}>
                <h2>Interests</h2>
                <ul>
                  <li>Baking</li>
                  <li>I love music, terrible movies, tea, rain, and the Oxford comma.</li>
                </ul>
              </div>
              <div className={classNames(css.section, css.experience)}>
                <h2>Education</h2>

                <h3>Institut Paul Lambin, Brussels</h3>
                <p className={css.expYears}>2013 - 2016</p>

                <p className={css.expDesc}>Software development — BAC+3, with great honor.</p>
              </div>
            </div>
            <div className={css.mainRightCol}>
              <div className={classNames(css.section, css.experience)}>
                <h2>Past Experience</h2>

                <h3>Lead Developer, MyMedicoach.com</h3>
                <p className={css.expYears}>2019 - 2021</p>

                <p className={css.expDesc}>Development of a web & mobile (TWA) application.</p>
                <Tags>
                  <Tag>full-stack development</Tag>
                  <Tag>UX</Tag>
                  <Tag>UI</Tag>
                  <Tag>product design</Tag>
                  <Tag>project management</Tag>
                  <Tag>react</Tag>
                </Tags>

                <h3>Developer, Eureka</h3>
                <p className={css.expYears}>2020</p>
                <p className={css.expDesc}>Integration of their new CMS, <TextLink to="https://eurekanetwork.org/" external>eurekanetwork.org</TextLink>.
                </p>
                <Tags>
                  <Tag>front-end development</Tag>
                  <Tag>freelance</Tag>
                </Tags>

                <h3>Developer, Energreen</h3>
                <p className={css.expYears}>2019-2021</p>
                <p className={css.expDesc}>Integration of their new CMS, <TextLink to="https://energreen.be/" external>energreen.be</TextLink>.
                </p>
                <Tags>
                  <Tag>front-end development</Tag>
                  <Tag>freelance</Tag>
                </Tags>

                <h3>Developer, The MAD Company</h3>
                <p className={css.expYears}>2016 - 2020</p>
                <p className={css.expDesc}>
                  Agency work ranging from wordpress integration to full React applications.
                  Technical lead and setup of internal IT-related processes.
                  Development of React/Node/GraphQL/REST applications.
                  Development and maintenance of our open source libraries.
                </p>
                <Tags>
                  <Tag>full-stack development</Tag>
                  <Tag>project management</Tag>
                  <Tag>react</Tag>
                </Tags>

                <h3>Developer, Pictawall</h3>
                <p className={css.expYears}>Feb. 2016 - June. 2016</p>

                <p className={css.expDesc}>
                  Worked on the main Symfony2 platform.<br />
                  Development & optimisation of a front-end widget.
                </p>

                <Tags>
                  <Tag>full-stack development</Tag>
                  <Tag>UI</Tag>
                </Tags>
              </div>
            </div>
          </div>
          <div className={css.mainCols}>
            <div className={css.mainLeftCol}>
              <div className={css.section}>
                <h2>Skill Set</h2>

                <h3>General</h3>
                <ul>
                  <li>Git (+GitHub, Bitbucket, Gitlab)</li>
                  <li>CircleCI</li>
                  <li>Bash, Zsh</li>
                  <li>Jira, Confluence</li>
                  <li>macOS, Ubuntu</li>
                </ul>
                <h3>Front-end</h3>
                <ul>
                  <li>React (6 years)</li>
                  <li>Webpack (6 years), Gulp</li>
                  <li>Well versed in CSS (10 years)</li>
                  <li>SCSS, PostCSS</li>
                  <li>HTML</li>
                  <li>PWA, Trusted-Web-Activities, Cordova</li>
                  <li>Accessibility</li>
                  <li>Eye for detail</li>
                  <li>Cares about load times</li>
                  <li>UX & UI (notions)</li>
                </ul>
                <h3>Back-end</h3>
                <ul>
                  <li>Node, PHP, Java</li>
                  <li>Common RDBMS: PostgreSQL, MySQL, SQLite</li>
                  <li>Redis</li>
                  <li>GraphQL, REST</li>
                  <li>Error management, response time optimisation</li>
                </ul>
              </div>
            </div>
            <div className={css.mainRightCol}>
              <div className={classNames(css.section, css.experience)}>
                <h2>Projects</h2>
                <p className={css.expYears}>
                  Links to source code & live demos are available on <TextLink to="/">guylian.me</TextLink>.
                </p>

                <h3>Stacked React Router</h3>
                <p className={css.expDesc}>
                  A yet-to-be-released experimental library that builds an efficient Stack Router on top of React Router.
                  This library supports directional page transitions, provides a working Back Button, and includes a multitude of tools
                  to manipulate the browser history and simulate a native mobile app experience.
                </p>
                <p className={css.expDesc}>While not yet available, it is used extensively in <TextLink to="https://app.mymedicoach.com" external>mymedicoach.com</TextLink>.</p>

                <h3>Joi Config Generator</h3>
                <p className={css.expDesc}>
                  An open source library that uses Joi to generate and validate a back-end application's configuration file or environment variables.
                </p>

                <h3>react-intl-formatted-xml-message</h3>
                <p className={css.expDesc}>
                  This library gave the ability to use complex formatting in intl messages using XML tags.<br />

                </p>
                <p className={css.expDesc}>
                  Support for XML tags has since been added natively to react-intl.
                </p>

                <h3>react-tiny-markdown</h3>
                <p className={css.expDesc}>
                  A very lightweight markdown-to-jsx implementation limited to basic markdown formatting. Designed
                  to be used by end-users in use-cases such as a chat application.
                </p>

                <h3>xml-to-jsx</h3>
                <p className={css.expDesc}>
                  Another lightweight library that parses XML or HTML and maps tags to react component.
                  This was designed as a way to safely render and dynamize HTML coming from a CMS.
                </p>

                <h3>Gender Unicorn</h3>
                <p className={css.expDesc}>
                  A web integration experiment with the goal of converting an illustration
                  designed for paper into an interactive mobile-friendly web page.
                </p>
                <p className={css.expDesc}>
                  Made for the TSER.
                </p>

                <h3>This Resume</h3>
                <p className={css.expDesc}>
                  It is actually a printable HTML page you can find on <TextLink to="/">guylian.me</TextLink>!
                  <br />
                  A golden occasion to learn more about making pages printer-friendly.
                </p>
              </div>
            </div>
          </div>
          <footer className={css.footer}>
            <img src="/favicon.svg" alt="" />
          </footer>
        </div>
      </article>
    </Layout>
  );
}

function Tags(props: { children: ReactNode }) {
  return <p className={css.tags}>{props.children}</p>;
}

function Tag(props: { children: ReactNode }) {
  return <span className={css.tag}>{props.children}</span>;
}
