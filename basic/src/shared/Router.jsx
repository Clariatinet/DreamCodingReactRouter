import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Root from '../pages/Root';
import VideoDetail from '../pages/VideoDetail';
import Videos from '../pages/Videos';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos/:videoId' element={<VideoDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
