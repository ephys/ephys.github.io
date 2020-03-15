import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SectionWelcome from '../components/section-welcome/section-welcome';
import SectionAboutMe from '../components/section-about-me/section-about-me';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';

function IndexPage({ data }) {
  return (
    <Layout contentSectionId="content">
      <SEO />
      <SectionWelcome />
      <SectionAboutMe id="content" content={data.aboutMe.html} />
      <SectionExperience id="experience" content={data.experience.nodes} />
      <SectionProjects id="projects" content={data.projects.nodes} />
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    aboutMe: markdownRemark(frontmatter: { name: { eq: "about-me" } }) {
      html
    }
    experience: allMarkdownRemark(filter: { frontmatter: { type: { eq: "experience" } } }) {
      nodes {
        html
        meta: frontmatter {
          start
          end
          title
        }
      }
    }
    # My own projects
    projects: allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      nodes {
        html
        meta: frontmatter {
          year
          title
          repository
          npm
          active
          demo
        }
      }
    }
  }
`;
