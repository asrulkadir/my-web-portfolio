import React from 'react';
import AnimatedPage from '../../components/Animated';
import MapComponent from '../../components/GoogleMap';
import Layout from '../../components/Layout';
import { Title } from '../profile';

const Contact = () => {
  return (
    <Layout>
      <AnimatedPage>
        <Title>
          <h3>MY CONTACT</h3>
        </Title>
        <MapComponent />
        <div className="my-4 mx-auto w-[90%] [&_p]:text-center">
          <p className="font-bold uppercase text-center my-10">
            Kabupaten Pinrang - Sulawesi Selatan, Indonesia
          </p>
          <p>Desa Polewali Kecamatan Suppa Kabupaten Pinrang</p>
          <p className="font-bold text-center mb-12">91273</p>
          <p>+62 822 3822 8544 | me@asrulkadir.com</p>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Contact;
