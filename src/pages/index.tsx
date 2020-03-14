import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SectionWelcome from '../components/section-welcome/section-welcome';
import SectionAboutMe from '../components/section-about-me/section-about-me';

function IndexPage() {
  return (
    <Layout contentSectionId="content">
      <SEO title="Home" />
      <SectionWelcome />
      <SectionAboutMe id="content" />
    </Layout>
  );
}

export default IndexPage;
