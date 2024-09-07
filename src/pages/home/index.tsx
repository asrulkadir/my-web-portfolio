import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnimatedPage from "../../components/Animated";
import Layout from "../../components/Layout";
import { device } from "../../utils/responsive";
import { colors } from "../../utils/color";

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

const ButtonView = styled.button`
  display: block;
  height: 2rem;
  width: 10rem;
  border: 2px solid ${colors.primary};
  margin: 1rem auto;
  text-align: center;
  text-decoration: none;
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
  background-color: ${colors.background};

  &:hover {
    background: ${colors.primary};
    transition: 0.5s ease all;
    color: white;
  }
`;

const ModalIFrame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const LinkDownload = styled(Link)`
  text-decoration: none;
`

const Home = () => {
  const [isView, setIsView] = useState(false);
  return (
    <Layout>
      <AnimatedPage>
        <HomeWrapper>
          <h3>Hello, I am</h3>
          <h1>ASRUL KADIR</h1>
          <h4>FULL STACK DEVELOPER</h4>
          <hr />
          <p>
          Hi, I am Asrul Kadir, a Full Stack Developer with experience building responsive and high-quality web applications using React.js, Next.js, and TypeScript. 
          I also have experience with backend development using Node.js, NestJS, and Golang to create full-stack applications. 
          I am dedicated to delivering the best results in every project, ensuring that clients are satisfied with clean, efficient, and dependable code. 
          I stay enthusiastic about learning new technologies and constantly work to improve my skills.
          </p>
          <h4>+62 822-3822-8544</h4>
          <p>asrulkadir.asus4@gmail.com</p>

          <div>
            <ButtonView onClick={() => setIsView(true)}>
              View My CV
            </ButtonView>
            <LinkDownload
              to="./Asrul_Kadir.pdf" 
              target="_blank" 
              download
            >
              <ButtonView>
                  Download My CV
              </ButtonView>
            </LinkDownload>
          </div>
          {isView && (
            <ModalIFrame>
              <ButtonView onClick={() => setIsView(false)}>
                Close
              </ButtonView>
              <iframe
                src="./Asrul_Kadir.pdf"
                width="100%"
                height="90%"
                title="Asrul Kadir CV"
              />
            </ModalIFrame>
          )}
        </HomeWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Home;
