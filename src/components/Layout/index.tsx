import React, { ReactNode } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { ProfilePicture, Background  } from "../../assets";
import Nav from "../Nav";
import { device } from "../../utils/responsive";
import { colors } from "../../utils/color";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 95vw;
    min-height: 95vh;
  }
`;

const Content = styled.div`
  background: ${colors.background};
  width: 90vw;
  height: 80vh;
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    width: 95vw;
    min-height: 95vh;
    flex: 1;
    margin-top: 0.5rem;
  }
`;

const ImgDiv = styled.div`
  width: 30%;
  background: url(${Background});
  color: ${colors.background};
  position: relative;

  @media ${device.tablet} {
  }

  @media ${device.mobile} {
    width: 100%;
    height: 50vh;
  }

`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.mobile} {
    top: 32.5vh;
    left: 58vw;
  }
`;

const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Information = styled.div`
  overflow: auto;

  div {
    color: ${colors.text};
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  img {
    display: flex;
    width: 25%;
    border-radius: 50%;
    background-color: white;

    @media ${device.tablet} {
      height: 25%;
    }

    @media ${device.mobile} {
      width: 25%;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;

    a {
      color: white;
    }

    @media ${device.mobile} {
      margin: 0 0 1rem;
    }
  }

  @media ${device.mobile} {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;
  

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Content>
        <ImgDiv>
          <ProfileWrapper>
            <img src={ProfilePicture} alt="" />
            <Name>
              <h3>ASRUL KADIR</h3>
              <p>Frontend Developer | Full Stack Developer</p>
            </Name>
            <div>
              <a
                href="https://github.com/asrulkadir"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub size="2rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/asrulkadir"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin size="2rem" />
              </a>
              <a
                href="https://asrulkadir.medium.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaMedium size="2rem" />
              </a>
              <a
                href="https://wa.me/6282238228544"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp size="2rem" />
              </a>
            </div>
          </ProfileWrapper>
        </ImgDiv>

        <Info>
          <Nav />
          <Information>
            <div>{children}</div>
          </Information>
        </Info>
      </Content>
    </Container>
  );
};

export default Layout;
