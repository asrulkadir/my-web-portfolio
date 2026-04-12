import React, { ReactNode } from 'react';
import {
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
import AnimatedPage from '../../components/Animated';
import Layout from '../../components/Layout';

export const Title = ({ children }: { children: ReactNode }) => (
  <div className="border-b-2 border-primary w-1/2 mx-auto my-6 md:max-lg:w-2/5 max-md:w-1/2 [&_h3]:text-center [&_h3]:pb-4">
    {children}
  </div>
);

export const Education = ({ children }: { children: ReactNode }) => (
  <div
    className={
      "[&_.wrap]:flex " +
      "[&_.left]:w-[30%] [&_.left]:pr-4 [&_.left]:pb-4 [&_.left_p]:font-bold [&_.left_p]:text-end " +
      "[&_.right]:w-[70%] [&_.right]:border-l-[3px] [&_.right]:border-primary [&_.right]:pl-8 [&_.right]:pb-4 " +
      "[&_.right_.icon]:w-16 [&_.right_.icon]:h-16 [&_.right_.icon]:rounded-full [&_.right_.icon]:bg-primary [&_.right_.icon]:text-black [&_.right_.icon]:flex [&_.right_.icon]:justify-center [&_.right_.icon]:items-center [&_.right_.icon]:mb-8 [&_.right_.icon]:-ml-16 " +
      "[&_.right_.dot]:w-4 [&_.right_.dot]:h-4 [&_.right_.dot]:bg-primary [&_.right_.dot]:rounded-full [&_.right_.dot]:mt-1 [&_.right_.dot]:-ml-[2.55rem] " +
      "[&_.right_.desc]:-mt-5 [&_.right_.desc_h3]:mb-4"
    }
  >
    {children}
  </div>
);

const Profile = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="w-4/5 mx-auto max-md:w-[95%]">
          <Title>
            <h3>ABOUT ME</h3>
          </Title>
          <div className="flex flex-col w-4/5 mx-auto max-md:w-[95%] md:max-lg:w-[95%]">
            <div className="flex justify-between items-center mt-2">
              <p className="flex items-center gap-2">
                <FaUser /> Name
              </p>
              <p>Asrul Kadir</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="flex items-center gap-2">
                <FaPhone /> Phone
              </p>
              <p>+62 822-3822-8544</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="flex items-center gap-2">
                <GrMail /> Email
              </p>
              <p>me@asrulkadir.com</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="flex items-center gap-2">
                <FaGlobeAsia /> Web
              </p>
              <p>asrulkadir.com</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="flex items-center gap-2">
                <ImLocation2 /> Address
              </p>
              <p>South Sulawesi, Indonesia</p>
            </div>
          </div>

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
          <div className="[&>p]:text-center">
            <p>
              My hobby is coding, I learned programming because I love coding
              and it&apos;s my passion, I also enjoy watching action movies or
              animes, and sometimes enjoy playing footbal or futsal.
            </p>
            <div className="flex justify-around max-md:flex-wrap">
              <div className="w-[10%] my-4 md:max-lg:w-[30%] max-md:w-[30%]">
                <p className="flex justify-center">
                  <FaCode size="2rem" />
                </p>
                <h3 className="text-center">Coding</h3>
              </div>

              <div className="w-[10%] my-4 md:max-lg:w-[30%] max-md:w-[30%]">
                <p className="flex justify-center">
                  <BiMoviePlay size="2rem" />
                </p>
                <h3 className="text-center">Movies</h3>
              </div>

              <div className="w-[10%] my-4 md:max-lg:w-[30%] max-md:w-[30%]">
                <p className="flex justify-center">
                  <IoMdFootball size="2rem" />
                </p>
                <h3 className="text-center">Football</h3>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Profile;
