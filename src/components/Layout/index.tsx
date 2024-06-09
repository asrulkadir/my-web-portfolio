import React from "react";
import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ProfilePicture } from "../../assets";
import Nav from "../Nav";
import { device } from "../../utils/responsive";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: brown;
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
  background: white;
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
  background: black;
  display: flex;
  flex-direction: column;
  color: white;

  @media ${device.tablet} {
  }

  @media ${device.mobile} {
    width: 100%;
    height: 50vh;
  }

  img {
    display: block;
    margin: auto;
    width: 90%;
    height: 90%;

    @media ${device.tablet} {
      height: 60%;
      margin: 5vh auto 40vh;
    }

    @media ${device.mobile} {
      height: 85%;
      width: 80%;
    }
  }

  div {
    display: flex;
    height: 10%;
    justify-content: space-around;

    a {
      color: white;
    }

    @media ${device.mobile} {
      margin: 0 0 1rem;
    }
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 18vh;
  left: 6vw;
  display: flex;
  flex-direction: column;

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
    color: brown;
  }
`;

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Content>
        <ImgDiv>
          <img src={ProfilePicture} alt="" />
          <Name>
            <h3>ASRUL KADIR</h3>
            <p>Front End Developer</p>
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
              href="https://www.linkedin.com/in/asrul-kadir-19ap98/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size="2rem" />
            </a>
            {/* <a
              href="https://www.instagram.com/asrul_k/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size="2rem" />
            </a> */}
            <a
              href="https://wa.me/6282238228544"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp size="2rem" />
            </a>
          </div>
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
