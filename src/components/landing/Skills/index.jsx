import React from 'react';
import { Container } from 'components/common';
import stack from 'assets/illustrations/coder.svg';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNode, FaAngular, FaJava, FaSass, FaReact } from 'react-icons/fa';
import { SiRedux, SiHeroku, SiPostman, SiFirebase } from 'react-icons/si';
import { DiMysql, DiMongodb, DiGit } from 'react-icons/di';
import { GrGatsbyjs } from 'react-icons/gr';
import { Fade } from 'react-reveal';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Fade bottom duration={1000} distance="20px">
    <Wrapper as={Container} id="skills">
      <h1>Skills</h1>
      <SkillsWrapper>
        <Thumbnail>
          <img src={stack} alt="I’m Baisali and I’m a Web Developer" />
        </Thumbnail>
        <Details>
          <div className="software-skills-main-div">
            <ul className="dev-icons">
            <li className="software-skill-inline" name="html-5">
                <i>
                  <FaHtml5 />
                </i>
                <p>HTML-5</p>
              </li>
              <li className="software-skill-inline" name="css3">
                <i>
                  <FaCss3Alt />
                </i>
                <p>CSS3</p>
              </li>
              <li className="software-skill-inline" name="sass">
                <i>
                  <FaSass />
                </i>
                <p>SASS</p>
              </li>
              <li className="software-skill-inline" name="bootstrap">
                <i>
                  <FaBootstrap />
                </i>
                <p>Bootstrap</p>
              </li>
              <li className="software-skill-inline" name="JavaScript">
                <i>
                  <FaJs />
                </i>
                <p>JavaScript</p>
              </li>
              <li className="software-skill-inline" name="Redux">
                <i>
                  <SiRedux />
                </i>
                <p>Redux</p>
              </li>
              
            <li className="software-skill-inline" name="reactjs">
                <i>
                  <FaReact />
                </i>
                <p>ReactJS</p>
              </li>
              <li className="software-skill-inline" name="reactnative">
                <i>
                  <FaReact />
                </i>
                <p>React-Native</p>
              </li>
              <li className="software-skill-inline" name="angular">
                <i>
                  <FaAngular />
                </i>
                <p>Angular9</p>
              </li>
              
              <li className="software-skill-inline" name="nodejs">
                <i>
                  <FaNode />
                </i>
                <p>nodeJS</p>
              </li>
              
              <li className="software-skill-inline" name="mysql">
                <i>
                  <DiMysql />
                </i>
                <p>MySQL</p>
              </li>
              <li className="software-skill-inline" name="mongodb">
                <i>
                  <DiMongodb />
                </i>
                <p>MongoDB</p>
              </li>
              <li className="software-skill-inline" name="git">
                <i>
                  <DiGit />
                </i>
                <p>Git</p>
              </li>
              <li className="software-skill-inline" name="heroku">
                <i>
                  < SiHeroku />
                </i>
                <p>Heroku</p>
              </li>
              <li className="software-skill-inline" name="postman">
                <i>
                  < SiPostman />
                </i>
                <p>Postman</p>
              </li>
              <li className="software-skill-inline" name="firebase">
                <i>
                  <SiFirebase />
                </i>
                <p>Firebase</p>
              </li>
              <li className="software-skill-inline" name="gatsbyjs">
                <i>
                  <GrGatsbyjs />
                </i>
                <p>GatsbyJS</p>
              </li>
              <li className="software-skill-inline" name="java">
                <i>
                  <FaJava />
                </i>

                <p>Java</p>
              </li>

              <li className="software-skill-inline" name="python">
                <i>
                  <FaPython />
                </i>
                <p>Python</p>
              </li>
            </ul>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  </Fade>
);
