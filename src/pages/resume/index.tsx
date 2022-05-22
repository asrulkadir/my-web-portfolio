import React from "react";
import styled from "styled-components";
import { MdWork } from "react-icons/md";
import AnimatedPage from "../../components/Animated";
import Layout from "../../components/Layout";
import { Education, Title } from "../profile";
import { dataSkills } from "../../utils/dataSkill";
import { device } from "../../utils/responsive";
import { dataExperience } from "../../utils/dataExperience";

const ResumeWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media ${device.mobile} {
    width: 95%;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    width: 20%;
    margin: 1rem 0.5rem 0.5rem;
    border: 2px solid brown;
    display: flex;
    flex-direction: column;
    height: 12.5rem;

    @media ${device.tablet} {
      width: 29%;
    }

    @media ${device.mobile} {
      width: 40%;
    }

    img {
      display: block;
      width: 100%;
      height: 70%;
    }
  }

  .item {
    background: brown;
    color: #e6e6e6;
    width: 100%;
    margin: 0;
    height: 30.5%;

    p,
    h3 {
      text-align: center;
    }
  }
`;

const Resume = () => {
  return (
    <Layout>
      <AnimatedPage>
        <ResumeWrapper>
          <Title>
            <h3>WORK EXPERIENCE</h3>
          </Title>

          <Education>
            <div className="wrap">
              <div className="left"></div>
              <div className="right">
                <div className="icon">
                  <MdWork size="3rem" />
                </div>
              </div>
            </div>

            {dataExperience.map((item, index) => {
              return (
                <div className="wrap" key={index}>
                  <div className="left">
                    <p>
                      {item.StartDate} - {item.EndDate}
                    </p>
                  </div>
                  <div className="right">
                    <div className="dot"></div>
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

          <Skills>
            {dataSkills.map((li, index) => {
              return (
                <div key={index}>
                  <img src={li.image} alt={li.name} />
                  <div className="item">
                    <h3>{li.name}</h3>
                    <p>{li.level}</p>
                  </div>
                </div>
              );
            })}
          </Skills>
        </ResumeWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Resume;
