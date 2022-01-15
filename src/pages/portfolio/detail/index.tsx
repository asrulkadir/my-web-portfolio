import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dataPortfolio } from '../../../utils/dataPortfolio';
import { Title } from '../../profile';

interface CustomState {
  id?: number;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: brown;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80vw;
  background: white;
  color: brown;
  margin: 2rem auto;

  hr {
    border: 1px solid blue;
    width: 80%;
    margin: auto;
  }

  img {
    display: block;
    width: 90%;
    margin: auto;
  }
`;

const Technology = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    width: 20%;
    height: 10rem;

    img {
      width: 100%;
      height: 80%;
    }

    p {
      text-align: center;
      a {
        color: brown;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const View = styled.a`
  width: 20%;
  color: brown;
  border: 1px solid brown;
  margin: 1rem auto;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;

  &:hover {
    background: brown;
    color: white;
    transition: 0.5s ease all;
  }
`;

const Back = styled.button`
  padding: 0.25rem;
  border: none;
  background: brown;
  color: white;
  margin: 2rem auto;
  display: block;
  cursor: pointer;

  &:hover {
    padding: 0.5rem;
    transition: 0.25s ease all;
    margin: 2rem auto 1.5rem;
  }
`;

const DetailPortfolio = () => {
  const location = useLocation();
  const state = location.state as CustomState;
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        {state
          ? dataPortfolio.map((li, index) => {
              if (li.id === state.id) {
                return (
                  <div key={index}>
                    <Title>
                      <h3>{li.title.toUpperCase()}</h3>
                    </Title>
                    <img src={li.image} alt={li.title} />

                    <Title>
                      <h3>Built With</h3>
                    </Title>
                    <Technology>
                      {li.technologies.map((tech, index) => {
                        return (
                          <div key={index}>
                            <img src={tech.image} alt={tech.name} />
                            <p>
                              <a
                                href={tech.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {tech.name}
                              </a>
                            </p>
                          </div>
                        );
                      })}
                    </Technology>

                    <View href={li.site} target="_blank">
                      View Portfolio
                    </View>
                    <Back onClick={() => navigate('/portfolio')}>Back</Back>
                  </div>
                );
              }
              return null;
            })
          : null}
      </Wrapper>
    </Container>
  );
};

export default DetailPortfolio;
