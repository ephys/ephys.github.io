import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import SectionWelcome from '../components/section-welcome/section-welcome';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <SectionWelcome />
    </Layout>
  );
}

export default IndexPage;
