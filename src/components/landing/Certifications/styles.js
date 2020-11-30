import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const WorkExpWrapper = styled.div`
  padding: 1rem 0 0 0;
  
  h3 {
    margin-bottom: 0.5rem !important;
  }
  h6 {
    color: #586069;
    font-weight: 200;
    margin-bottom: 0.5rem !important;
  }
`;


export const SkillsWrapper = styled.div`
  padding: 0 0 2rem 0;
  display: flex;
  
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0 0 0;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 80%;
    margin-left:25%;
    margin-top: 30%;
  }
`;
