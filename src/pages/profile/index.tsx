import React from 'react';
import {
  // FaCalendar,
  FaCode,
  FaGlobeAsia,
  FaGraduationCap,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { ImLocation2 } from 'react-icons/im';
import { BiMoviePlay } from 'react-icons/bi';
import { IoMdFootball } from 'react-icons/io';
import styled from 'styled-components';
import AnimatedPage from '../../components/Animated';
import Layout from '../../components/Layout';
import { device } from '../../utils/responsive';
import { colors } from '../../utils/color';

const ProfileWrapper = styled.div`
  width: 80%;
  margin: auto;

  @media ${device.mobile} {
    width: 95%;
  }
`;

export const Title = styled.div`
  border-bottom: 2px solid ${colors.primary};
  width: 50%;
  margin: 1.5rem auto;

  h3 {
    text-align: center;
    padding-bottom: 1rem;
  }

  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.mobile} {
    width: 50%;
  }
`;

const About = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-direction: column;

  @media ${device.mobile} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`;

const ItemAbout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Education = styled.div`
  .wrap {
    display: flex;
  }

  .left {
    width: 30%;
    padding-right: 1rem;
    padding-bottom: 1rem;

    p {
      font-weight: bold;
      text-align: end;
    }
  }

  .right {
    width: 70%;
    border-left: 3px solid ${colors.primary};
    padding-left: 2rem;
    padding-bottom: 1rem;

    .icon {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: ${colors.primary};
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      margin-left: -4rem;
    }

    .dot {
      width: 1rem;
      height: 1rem;
      background: ${colors.primary};
      border-radius: 50%;
      margin: 0.25rem 0 0 -2.55rem;
    }

    .desc {
      margin-top: -1.25rem;

      h3 {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Hobbies = styled.div`
  p {
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: space-around;

    @media ${device.mobile} {
      flex-wrap: wrap;
    }

    div {
      width: 10%;
      margin: 1rem 0;

      @media ${device.tablet} {
        width: 30%;
      }

      @media ${device.mobile} {
        width: 30%;
      }

      h3 {
        text-align: center;
      }
    }

    p {
      text-align: center;
    }
  }
`;

const Profile = () => {
  return (
    <Layout>
      <AnimatedPage>
        <ProfileWrapper>
          <Title>
            <h3>ABOUT ME</h3>
          </Title>
          <About>
            <ItemAbout>
              <p>
                <FaUser /> Name
              </p>
              <p>Asrul Kadir</p>
            </ItemAbout>
            {/* <ItemAbout>
              <p>
                <FaCalendar /> Date of Birth
              </p>
              <p>April 19th 1998</p>
            </ItemAbout> */}
            <ItemAbout>
              <p>
                <FaPhone /> Phone
              </p>
              <p>+62 822-3822-8544</p>
            </ItemAbout>
            <ItemAbout>
              <p>
                <GrMail /> Email
              </p>
              <p>asrulkadir.asus4@gmail.com</p>
            </ItemAbout>
            <ItemAbout>
              <p>
                <FaGlobeAsia /> Web
              </p>
              <p>asrulkadir.netlify.app</p>
            </ItemAbout>
            <ItemAbout>
              <p>
                <ImLocation2 /> Address
              </p>
              <p>South Sulawesi, Indonesia</p>
            </ItemAbout>
          </About>

          <Title>
            <h3>MY EDUCATION</h3>
          </Title>
          <Education>
            <div className="wrap">
              <div className="left"></div>
              <div className="right">
                <div className="icon">
                  <FaGraduationCap size="3rem" />
                </div>
              </div>
            </div>

            <div className="wrap">
              <div className="left">
                <p>2015 - 2020</p>
              </div>
              <div className="right">
                <div className="dot"></div>
                <div className="desc">
                  <h3>Bachelor Degree / State University of Makassar</h3>
                  <p>
                    I graduated in November 2020, my major is Electrical
                    Engineering at the State University of Makassar, and I
                    started to learn to program when I was working on my thesis.
                  </p>
                </div>
              </div>
            </div>

            <div className="wrap">
              <div className="left">
                <p>2012 - 2015</p>
              </div>
              <div className="right">
                <div className="dot"></div>
                <div className="desc">
                  <h3>Senior High School / SMKN 2 Parepare</h3>
                  <p>
                    My major is Electronic Engineering at SMKN 2 Parepare, I
                    haven&apos;t known about programming when I school there, I just
                    knew about electronic engineering
                  </p>
                </div>
              </div>
            </div>
          </Education>

          <Title>
            <h3>MY HOBBIES</h3>
          </Title>
          <Hobbies>
            <p>
              My hobby is coding, I learned programming because I love coding
              and it&apos;s my passion, I also enjoy watching action movies or
              animes, and sometimes enjoy playing footbal or futsal.
            </p>
            <div className="icon">
              <div>
                <p>
                  <FaCode size="2rem" />
                </p>
                <h3>Coding</h3>
              </div>

              <div>
                <p>
                  <BiMoviePlay size="2rem" />
                </p>
                <h3>Movies</h3>
              </div>

              <div>
                <p>
                  <IoMdFootball size="2rem" />
                </p>
                <h3>Football</h3>
              </div>
            </div>
          </Hobbies>
        </ProfileWrapper>
      </AnimatedPage>
    </Layout>
  );
};

export default Profile;
