import React from 'react';
import styled from 'styled-components';
import AnimatedPage from '../../components/Animated';
import MapComponent from '../../components/GoogleMap';
import Layout from '../../components/Layout';
import { Title } from '../profile';

const Kab = styled.p`
  font-weight: Bold;
  text-transform: uppercase;
  text-align: center;
  margin: 2.5rem 0;
`;

const Address = styled.div`
  margin: 1rem auto;
  width: 90%;

  p {
    text-align: center;
  }

  .pos {
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Contact = () => {
  return (
    <Layout>
      <AnimatedPage>
        <Title>
          <h3>MY CONTACT</h3>
        </Title>
        <MapComponent />
        <Address>
          <Kab>Kabupaten Pinrang - Sulawesi Selatan, Indonesia</Kab>
          <p>Desa Polewali Kecamatan Suppa Kabupaten Pinrang</p>
          <p className="pos">91273</p>
          <p>+62 822 3822 8544 | asrulkadir.asus4@gmail.com</p>
        </Address>
      </AnimatedPage>
    </Layout>
  );
};

export default Contact;
