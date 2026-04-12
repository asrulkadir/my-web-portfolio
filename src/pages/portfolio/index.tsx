import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/Animated';
import Layout from '../../components/Layout';
import { dataPortfolio } from '../../utils/dataPortfolio';
import { Title } from '../profile';

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
        <div className="w-4/5 mx-auto">
          <Title>
            <h3>MY PERSONAL PORTFOLIO</h3>
          </Title>

          <div className="grid grid-cols-[33%_33%_33%] md:max-lg:grid-cols-[50%_50%] max-md:grid-cols-[100%]">
            {dataPortfolio.map((li) => {
              return (
                <div
                  key={li.id}
                  className="w-full border border-primary cursor-pointer h-[20vh] flex flex-col justify-center items-center md:max-lg:h-[10vh] hover:bg-primary transition-all duration-500 group"
                  onMouseOver={() => handleMouseOver(li.id)}
                  onFocus={() => handleMouseOver(li.id)}
                  onMouseLeave={() => handleMouseLeave()}
                  onBlur={() => handleMouseLeave()}
                  onClick={() => navigate(`${li.id}`)}
                  tabIndex={0}
                >
                  {hover === li.id ? (
                    <h4 className="text-center text-white opacity-100">{li.title}</h4>
                  ) : (
                    <img
                      src={li.image}
                      alt={li.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Portfolio;
