import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import React from 'react';
import Container from '../../components/container';
import * as css from './style.module.scss';

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
