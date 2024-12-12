import { Routes, Route } from 'react-router-dom';
import { Box } from '@acko-tech/building-blocks.ui.common';

import { Wrapper } from './components/Wrapper'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Educate from './pages/Educate';
import Feed from './pages/Feed';
import Guide from './pages/Guide';

import './App.css'
import './fonts.css';

const App = () => {
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Wrapper>
  )
}

export default App
