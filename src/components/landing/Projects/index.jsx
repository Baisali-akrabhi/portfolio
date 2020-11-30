import React from 'react';
import { Container, Card, Button } from 'components/common';
import { Fade } from 'react-reveal';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => {
  return (    
    <Fade bottom duration={1000} distance="20px">
     <Wrapper as={Container} id="projects">
        <h1>Projects</h1>
        
        <Grid>
        <Item>
<Card>
        <Content>
                <div className="repo-name">
                    <h3>Guess The Number</h3>
                  </div>
                  <p>React Native project used to guess a number generated randomly.</p>
                  <br />
                  <div className="repo-lang">
                     <span>React Native</span>
                 </div>
                </Content>
        </Card>
        </Item>
          {/* --------------------------------------------------------------------------------------------------------------------- */}
          <Item>
        <Card>
        <Content>
                <div className="repo-name">
                    <h3>Shopping App</h3>
                  </div>
                  <p>A React.js Project and social login used to shop clothes, footwear and hats and it has 2 category i.e. Man and Women.</p>
                  <div className="repo-lang">
                     <span className="language-color" style={{ backgroundColor: "#111"}}></span>
                     <span>React.js</span>
                 </div>
                </Content>
        </Card>
        </Item>
{/* -------------------------------------------------------------------------------------------------------------------- */}
        <Item>
        <Card>
        <Content>
                <div className="repo-name">
                    <h3>Infoviz Quiz App</h3>
                  </div>
                  <p>A React.js Project used to take a quiz test. It contains more then 50 questions.At the end of the quiz it display your scores.</p>
                  <div className="repo-lang">
                     <span className="language-color" style={{ backgroundColor: "#111"}}></span>
                     <span>React.js</span>
                 </div>
                </Content>
        </Card>
        </Item>
        {/* -------------------------------------------------------------------------------------------------------------------- */}
        <Item>
        <Card>
        <Content>
                <div className="repo-name">
                    <h3>Zoom Clone</h3>
                  </div>
                  <p>A WebRTC based project used as video call app like zoom.</p>
                  <div className="repo-lang">
                     <span className="language-color" style={{ backgroundColor: "#111"}}></span>
                     <span>WebRTC</span>
                 </div>
                </Content>
        </Card>
        </Item>
{/* -------------------------------------------------------------------------------------------------------------------- */}
<Item>
        <Card>
        <Content>
                <div className="repo-name">
                    <h3>Meal App</h3>
                  </div>
                  <p>A React.js Project used to know the recipe of a dish. User can view the meal's picture, ingredients and recipe</p>
                  <div className="repo-lang">
                     <span className="language-color" style={{ backgroundColor: "#111"}}></span>
                     <span>React.js</span>
                 </div>
                </Content>
        </Card>
        </Item>
{/* ------------------------------------------------------------------------------------------------------------------------- */}

        </Grid>

        <div className="seeMoreProjects">
          <a href="https://github.com/baisali-Pradhan?tab=repositories" target="_blank" >
            <Button>See More</Button>
          </a>
        </div>
       </Wrapper>
     </Fade>
  );
};
