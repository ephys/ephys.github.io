import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import FooterSocial from '../../components/footer-social';
import React from 'react';
import Container from '../../components/container';
import css from './style.module.scss';

// because I keep forgetting
const VatPage = () => (
  <Layout>
    <SEO title="V.A.T." robots="noindex" />
    <Container>
      <p className={css.vat}>BE 0746.377.584</p>
    </Container>
  </Layout>
);

export default VatPage;
