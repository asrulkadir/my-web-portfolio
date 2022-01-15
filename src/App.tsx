import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './pages/404';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import DetailPortfolio from './pages/portfolio/detail';
import Profile from './pages/profile';
import Resume from './pages/resume';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<DetailPortfolio />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
