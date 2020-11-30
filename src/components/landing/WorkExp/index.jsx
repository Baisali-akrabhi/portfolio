import React from 'react';
import { Container } from 'components/common';
import { Fade } from 'react-reveal';
import manOnTable from 'assets/illustrations/introlady.svg';
import { Wrapper, WorkExpWrapper  } from './styles';

export const WorkExp = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="WorkExp">
      <h1>Work Experience</h1>
      <WorkExpWrapper>
      
        <h3>INFOVIZ</h3>
        <h6>
          Junior Software Development Engineer
          <br />
          Jun-Nov 2020 | Bhubaneswar, IN
        </h6>
        <p>
        I have done my training for 6 months. And I learn many technologies like React.Js, React Native, Formly, FlexBox, GatesBy.
        <br />
And also done many projects:-
<ul>
  <li>Instagram Clone</li>
  <li>Zoom clone</li>
  <li>chatting App</li>
  <li>Tinder Clone</li>
  <li>Shopping App</li>
  <li>Todo List</li>
  <li>Recipe Book</li>
  <li>Guess the Number</li>
  <li>E-commerce App</li>
</ul>
</p>

      </WorkExpWrapper>
      
    </Wrapper>
  </Fade>
);

