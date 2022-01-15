import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../../components/Animated';
import Layout from '../../components/Layout';
import { dataPortfolio } from '../../utils/dataPortfolio';
import { Title } from '../profile';

const PortfolioWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const PortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;

  .port {
    width: 100%;
    border: 1px solid brown;
    cursor: pointer;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }

    h4 {
      text-align: center;
      opacity: 0;
      color: white;
    }
  }

  .port:hover {
    background: brown;
    transition: 0.5s ease-in-out all;

    h4 {
      opacity: 1;
    }
  }
`;

const Portfolio = () => {
  const [hover, setHover] = useState<number>(0);
  const navigate = useNavigate();

  const handleMouseOver = (id: number) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <Layout>
      <AnimatedPage>
        <PortfolioWrapper>
          <Title>
            <h3>MY PORTFOLIO</h3>
          </Title>

          <PortfolioDiv>
            {dataPortfolio.map((li, index) => {
              return (
                <div
                  key={index}
                  className="port"
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={() => handleMouseLeave()}
                  onClick={() => navigate('detail', { state: { id: li.id } })}
                >
                  {hover === index + 1 ? (
                    <h4>{li.title}</h4>
                  ) : (
                    <img src={li.image} alt="Space Tourism" />
                  )}
                </div>
              );
            })}
          </PortfolioDiv>
        </PortfolioWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Portfolio;
