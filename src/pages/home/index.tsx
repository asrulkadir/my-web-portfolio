import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedPage from "../../components/Animated";
import Layout from "../../components/Layout";
import { device } from "../../utils/responsive";

const HomeWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media ${device.mobile} {
    width: 95%;
  }

  h3,
  h4,
  h1,
  hr {
    text-align: center;
    margin-top: 2rem;
  }

  p {
    text-align: center;
  }
`;

const Download = styled(Link)`
  display: block;
  height: 2rem;
  width: 10rem;
  border: 2px solid brown;
  margin: 1rem auto;
  text-align: center;
  text-decoration: none;
  color: brown;
  font-weight: bold;

  &:hover {
    background: brown;
    transition: 0.5s ease all;
    color: white;
  }
`;

const Home = () => {
  return (
    <Layout>
      <AnimatedPage>
        <HomeWrapper>
          <h3>Hello, I am</h3>
          <h1>ASRUL KADIR</h1>
          <h4>FRONT END ENGINEER | FULL STACK ENGINEER</h4>
          <hr />
          <p>
            A Front End Engineer / Full Stack Engineer from South Sulawesi,
            Indonesia. I always try to do my best for each project I did. I hope
            my effort gives satisfaction to people who need my service. I am
            open to learning a new technology who needed and I am always
            motivated to improve my skills.
          </p>
          <h4>+62 822-3822-8544</h4>
          <p>asrulkadir.asus4@gmail.com</p>

          <Download to="./Asrul Kadir.pdf" target="_blank" download>
            Download My CV
          </Download>
        </HomeWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Home;
