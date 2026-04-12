import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataPortfolio } from '../../../utils/dataPortfolio';
import NotFound from '../../404';
import { Title } from '../../profile';
import { Tag, TagWrapper } from '../../../components/Styled/Tag';

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
  }, [id, navigate, parsedId]);

  return (
    <div className="w-full min-h-screen bg-primary flex justify-center flex-col">
      <div className="w-[80vw] bg-white text-primary my-8 mx-auto md:max-lg:w-[90vw] max-md:w-[95vw] max-md:my-4 [&_hr]:border [&_hr]:border-blue-500 [&_hr]:w-4/5 [&_hr]:mx-auto [&_img]:block [&_img]:w-[90%] [&_img]:mx-auto">
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
                  <TagWrapper>
                    {li.technologies.map((tech, index) => {
                      return (
                        <Tag key={index}>
                          {tech.name}
                        </Tag>
                      );
                    })}
                  </TagWrapper>

                  {li.site && (
                    <a
                      href={li.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/5 text-primary border border-primary my-4 mx-auto block text-center no-underline font-bold p-2 md:max-lg:my-1 max-md:w-1/2 max-md:mx-auto hover:bg-primary hover:text-white transition-all duration-500"
                    >
                      View Portfolio
                    </a>
                  )}
                  <button
                    className="p-1 border-none bg-primary text-white my-8 mx-auto block cursor-pointer hover:p-2 hover:transition-all hover:duration-300"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default DetailPortfolio;
