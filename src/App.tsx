/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box } from '@acko-tech/building-blocks.ui.common';

import { Wrapper } from './components/Wrapper'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Educate from './pages/Educate';
import Feed from './pages/Feed';
import Guide from './pages/Guide';
import Analysis from './pages/Analysis';

import './App.css'
import './fonts.css';


const MEMBER_ID = '0b9d71cd-bf8d-4cea-bf7e-7a0226a91bd5';

const App = () => {
  const [memberData, setMemberData] = useState();

  const getData = () => {
    fetch(`http://health-assessment-questions-service-dev.internal.ackodev.com/user/profile?member_id=${MEMBER_ID}`)
      .then(response => response.json())
      .then(json => setMemberData(json));
  }

  useEffect(() => {
    if (!memberData) {
      getData();
    }
  }, []);

  return (
    <Wrapper>
      <Box className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/educate" element={<Educate />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Wrapper>
  )
}

export default App
