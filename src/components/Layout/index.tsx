import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { ProfilePicture } from '../../assets';
import Nav from '../Nav';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  width: 90vw;
  height: 80vh;
  display: flex;
`;

const ImgDiv = styled.div`
  width: 30%;
  background: black;
  display: flex;
  flex-direction: column;
  color: white;

  .name {
    position: absolute;
    bottom: 17.5vh;
    left: 6vw;
    display: inline;
  }

  img {
    display: block;
    margin: auto;
    width: 90%;
    height: 90%;
  }

  div {
    display: flex;
    height: 10%;
    justify-content: space-around;
  }

  a {
    color: white;
  }
`;

const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
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
          <div className="name">
            <h3>ASRUL KADIR</h3>
            <p>Web Programmer</p>
          </div>
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
            <a
              href="https://www.instagram.com/asrul_k/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size="2rem" />
            </a>
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
