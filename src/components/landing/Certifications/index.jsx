import React from 'react';
import { Container } from 'components/common';
import { Fade } from 'react-reveal';
import { Wrapper, WorkExpWrapper } from './styles';

export const Certifications = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="certifications">
      <h1>Certifications</h1>
      <WorkExpWrapper>
      <h3> Introduction to HTML5</h3>
        <h6>
          Coursera
          <br />
          Issued: Oct 2019
          <br />
          Credential ID: S83V8SZL4SMT24
        </h6>
        <a href="https://coursera.org/share/4b25216ceaf261046c206670ecf1f8e0" target="_blank" >
          <p>See credential</p>
        </a>
        <h3> Introduction to CSS3</h3>
        <h6>
          Coursera
          <br />
          Issued: Oct 2019
          <br />
          Credential ID: PXJZ9V5STCE6
        </h6>
        <a href="https://coursera.org/share/7e59304fad9570b417978c4412790bce" target="_blank" >
          <p>See credential</p>
        </a>
        <h3>
        HTML and CSS: Building a Single-Page Website</h3>
        <h6>
          Coursera
          <br />
          Issued: Oct 2020
          <br />
          Credential ID: DHQFCGT846K5
        </h6>
        <a
          href="https://coursera.org/share/918f831fd180e73dce5fad39bb1b8fa7" target="_blank">
          <p>See credential</p>
        </a>
        <h3>CSS Animated Components with ReactJS</h3>
        <h6>
          Coursera
          <br />
          Issued: Oct 2020
          <br />
          Credential ID: Q25H4J9L52B3
        </h6>
        <a href="https://www.coursera.org/account/accomplishments/verify/Q25H4J9L52B3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project" target="_blank" >
          <p>See credential</p>
        </a>
        <h3>Technical Support Fundamentals</h3>
        <h6> Coursera
          <br />
          Issued: Oct 2020
          <br />
          Credential ID: B2QLQV8PKRBG
        </h6>
        <a
          href="https://coursera.org/share/ea72db0da45765bd3384b508dafa9717" target="_blank">
          <p>See credential</p>
        </a>
        <h3>Crash Course on Python</h3>
        <h6> Coursera
          <br />
          Issued: Nov 2020
          <br />
          <br />
        </h6>
        <h3>Machine Learning</h3>
        <h6> Coursera
          <br />
          Issued: Nov 2020
          <br />
          <br />
          <h3>Continuing</h3>
        </h6>
        <br />
        <h3>React Native - The Practical Guide [2020 Edition]</h3>
        <h6> Udemy
          <br />
          Issued: Nov 2020
          <br />
          <br />
        </h6>
       
      </WorkExpWrapper>
    </Wrapper>
  </Fade>
);
