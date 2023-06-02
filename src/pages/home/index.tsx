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
          <h4>FRONT END DEVELOPER</h4>
          <hr />
          <p>
            Hi, I'm Asrul Kadir, a dedicated Frontend Developer with a passion
            for crafting visually captivating and user-friendly websites and
            applications with experience in HTML, CSS, JavaScript, React, NextJs
            and TypeScript. I am dedicated to delivering my best in every
            project I undertake. My goal is to provide satisfaction to those who
            require my services. With unwavering enthusiasm, I continually
            embrace new technologies and stay motivated to enhance my skills.
          </p>
          <h4>+62 822-3822-8544</h4>
          <p>asrulkadir.asus4@gmail.com</p>

          <Download to="./Asrul_Kadir.pdf" target="_blank" download>
            Download My CV
          </Download>
        </HomeWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Home;
