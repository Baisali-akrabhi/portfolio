import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Internship, WorkExp, Certifications } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Internship />
    <WorkExp />
    <Skills />
    <Certifications />
    <Contact />
  </Layout>
);
