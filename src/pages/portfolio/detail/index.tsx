import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { dataPortfolio } from '../../../utils/dataPortfolio';
import { device } from '../../../utils/responsive';
import NotFound from '../../404';
import { Title } from '../../profile';
import { colors } from '../../../utils/color';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80vw;
  background: white;
  color: ${colors.primary};
  margin: 2rem auto;

  @media ${device.tablet} {
    width: 90vw;
  }

  @media ${device.mobile} {
    width: 95vw;
    margin: 1rem auto;
  }

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

    @media ${device.tablet} {
      width: 25%;
    }

    @media ${device.mobile} {
      width: 45%;
      height: 7.5rem;
      margin: 0.5rem 0;
    }

    img {
      width: 100%;
      height: 80%;

      @media ${device.tablet} {
        height: 50%;
      }

      @media ${device.mobile} {
        height: 75%;
      }
    }

    p {
      text-align: center;
      a {
        color: ${colors.primary};
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
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  margin: 1rem auto;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;

  @media ${device.tablet} {
    margin: 0.25rem auto;
  }

  @media ${device.mobile} {
    width: 50%;
    margin: 0 auto;
  }

  &:hover {
    background: ${colors.primary};
    color: white;
    transition: 0.5s ease all;
  }
`;

const Back = styled.button`
  padding: 0.25rem;
  border: none;
  background: ${colors.primary};
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
  const [showPortfolio, setShowPortfolio] = useState<boolean>(true);
  const navigate = useNavigate();
  const { id }: { id?: string } = useParams();
  const parsedId = parseInt(id ?? '');

  useEffect(() => {
    setShowPortfolio(
      dataPortfolio.some((li) => {
        return li.id === parsedId;
      })
    );
  }, [id, navigate]);

  return (
    <Container>
      <Wrapper>
        {showPortfolio ? (
          dataPortfolio.map((li, index) => {
            if (li.id === parsedId) {
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
                  <Back onClick={() => navigate(-1)}>Back</Back>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <NotFound />
        )}
      </Wrapper>
    </Container>
  );
};

export default DetailPortfolio;
