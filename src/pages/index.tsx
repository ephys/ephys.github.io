import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SectionWelcome from '../components/section-welcome/section-welcome';
import SectionAboutMe from '../components/section-about-me/section-about-me';

function IndexPage({ data }) {
  return (
    <Layout contentSectionId="content">
      <SEO title="Home" />
      <SectionWelcome />
      <SectionAboutMe id="content" content={data.markdownRemark.html} />
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "about-me" } }) {
      html
    }
  }
`;
