import React from 'react';
import { Container } from 'components/common';
import { Fade } from 'react-reveal';
import { Wrapper, WorkExpWrapper } from './Styles';

export const Internship = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="WorkExp">
      <h1>Internship</h1>
      <WorkExpWrapper>
        <h3>INFOVIZ</h3>
        <h6>
          Junior Software Development Engineer
          <br />
          Jan-May 2020 | Bhubaneswar, IN
        </h6>
        <p>
        I have done a project named INSPENSA. In this project, the user can track their income and expenses. And add their insurance and set reminder to pay the bills. For the Frontend, I used Angular9, HTML, CSS, Bootstrap, Material Design. For the backend, I used MySQL, Nodejs, Postman, Express.Js, CORS. And for Validation, I used Joi.
        </p>
      </WorkExpWrapper>
      
    </Wrapper>
  </Fade>
);
