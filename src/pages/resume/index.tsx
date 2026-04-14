import React from "react";
import { MdWork } from "react-icons/md";
import AnimatedPage from "../../components/Animated";
import Layout from "../../components/Layout";
import { Education, Title } from "../profile";
import { skills } from "../../utils/dataSkill";
import { dataExperience } from "../../utils/dataExperience";
import { Tag, TagWrapper } from "../../components/Styled/Tag";

const Resume = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="w-4/5 mx-auto max-md:w-[95%]">
          <Title>
            <h3>WORK EXPERIENCE</h3>
          </Title>

          <Education>
            <div className="wrap">
              <div className="left" />
              <div className="right">
                <div className="icon">
                  <MdWork size="3rem" />
                </div>
              </div>
            </div>

            {dataExperience.map((item) => {
              return (
                <div className="wrap" key={item.id}>
                  <div className="left">
                    <p>
                      {item.StartDate} - {item.EndDate}
                    </p>
                  </div>
                  <div className="right">
                    <div className="dot" />
                    <div className="desc">
                      <h3>
                        {item.Position} / {item.Company}
                      </h3>
                      <p>{item.JobDescription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Education>

          <Title>
            <h3>MY SKILLS</h3>
          </Title>

          <TagWrapper>
            {skills.map((skill) => {
              return (
                <Tag key={skill}>{skill}</Tag>
              );
            })}
          </TagWrapper>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Resume;
