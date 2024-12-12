/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import CareIcon from '../../icons/care';
import ChevronLeft from '../../icons/chevronLeft';
import DocumentIcon from '../../icons/document';
import PersonalizeIcon from '../../icons/personalize';
import './style.css';

const Home = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const goBack = () => {
    navigate(-1);
  }

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const DrawerContent = () => (
    <span>&nbsp;</span>
  );

  return (
    <div className="landing-container">
      <div className='hero-section'>
        {/* Back Navigation */}
        <div className="back-nav">
          <button onClick={goBack} className="back-button">
            <ChevronLeft className="back-icon" />
          </button>
        </div>
        {/* Header Image Section */}
        <div className="header-section">
          <h1>
            Your <span className="highlight">well-being</span>
            <br />
            starts today
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-container">
        {/* Care Feature */}
        <div className="feature-card">
          <div className="feature-content">
            <div className="icon-container">
              <CareIcon />
            </div>
            <div className="text-content">
              <h2>Amplify your care</h2>
              <p>Get tailored advice, feel confident, and act towards wellness.</p>
            </div>
          </div>
        </div>
        {/* Health Feature */}
        <div className="feature-card">
          <div className="feature-content">
            <div className="icon-container">
              <DocumentIcon />
            </div>
            <div className="text-content">
              <h2>Your health decoded</h2>
              <p>Simplify medical data, feel empowered, and take control today.</p>
            </div>
          </div>
        </div>
        {/* Personalization Feature */}
        <div className="feature-card">
          <div className="feature-content">
            <div className="icon-container">
              <PersonalizeIcon />
            </div>
            <div className="text-content">
              <h2>Personalised for you</h2>
              <p>Linked with your fitness, blah blah blahblah</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <footer className='footer'>
        <div className='cta-container'>
          <button onClick={toggleDrawer(true)} className="cta-button">
            Get started
          </button>
        </div>
        {/* BottomSheet handle*/}
        <div className='bottom-sheet-handle'>
          <div className='bottom-handle' />
        </div>
      </footer>

      {/* Drawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
        PaperProps={{
          sx: {
            width: "360px",
            height: '440px',
            margin: '8px auto',
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderTop: '2px solid #F0F0F0',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
        }}
        ModalProps={{
          BackdropProps: {
            style: { display: "none" },
          },
        }}
      >
        <DrawerContent />
      </SwipeableDrawer>
    </div>
  )
}

export default Home;