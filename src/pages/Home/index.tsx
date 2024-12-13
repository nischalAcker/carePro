/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwipeableDrawer, Box, Button, Avatar } from "@mui/material";

import CareIcon from '../../icons/care';
import ChevronLeft from '../../icons/chevronLeft';
import DocumentIcon from '../../icons/document';
import PersonalizeIcon from '../../icons/personalize';
import './style.css';
import styled from 'styled-components';
import ProfileIcon from '../../icons/profile';
import AddCircleIcon from '../../icons/addCircle';

const Card = styled(Box)({
  width: 240,
  height: '180px',
  border: '1px solid rgba(231, 231, 240, 1)',
  borderRadius: "12px",
  padding: "16px",
  backgroundColor: "#fff",
  boxShadow: '-1px 5px 12px 0px rgba(0, 0, 0, 0.1)'

});

const AddCard = styled(Box)({
  width: 240,
  height: '180px',
  border: '1px solid rgba(231, 231, 240, 1)',
  borderRadius: "12px",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
});

const Home = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const goBack = () => {
    navigate(-1);
  }

  const navigateToEducate = () => {
    navigate('/educate');
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
    <Box sx={{ padding: '8px 20px'}}>
      <div className="drawer-notch" />
      {/* Header Section */}
      <div style={{ marginBottom: '16px'}}>
        <ProfileIcon />
      </div>
      <h5 className='drawer-heading'>
        Get started
      </h5>
      <p className="drawer-text-content">
        Build a health profile that’s uniquely yours, for you and your family.
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '8px',
          width: '100%',
          paddingBottom: '16px',
          paddingLeft: '8px',
          paddingRight: '8px',
          overflowX: 'auto'
        }}>
        <Card>
          <Box sx={{
            width: '200px',
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '16px',
          }}>
            <Avatar
              src="/profile-dp.png"
              alt="User Image"
              sx={{ width: 32, height: 32, mr: 2 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
              <h5
                style={{
                  fontWeight: 500,
                  lineHeight: '24px',
                  textAlign: 'left',
                  fontSize: '16px'
                }}
              >
                Shivam Agarwal
              </h5>
              <p style={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                textAlign: 'left'
              }}>
                Male, 30
              </p>
            </Box>
          </Box>
          <Box sx={{ marginBottom: '16px' }}>
            <p style={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              textAlign: 'left',
              color: 'rgba(75, 75, 75, 1)',
            }}>
              ABHA ID: 3523548327
            </p>
          </Box>
          <Button
            variant="contained"
            onClick={navigateToEducate}
            sx={{
              ml: "auto",
              backgroundColor: "#000",
              color: "#fff",
              width: '100%',
              height: '48px',
              borderRadius: '8px',
            }}>
              <p style={{
                fontFamily: 'Euclid Circular B, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '14px',
                textTransform: 'none',
                color: '#FFFFFF',
                margin: '0px',
              }}>
                Continue
              </p>
          </Button>
        </Card>
        <AddCard>
          <Box sx={{ width: '200px' }}>
            <AddCircleIcon />
            <h6 style={{
              fontWeight: 500,
              lineHeight: '24px',
              textAlign: 'left',
              fontSize: '16px',
              marginTop: '8px',
              color: 'rgba(230, 73, 128, 1)'
            }}>
              Add family members
            </h6>
          </Box>
        </AddCard>
      </div>
    </Box>
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
              <p>Linked with your data to give unique guidance, only for you.</p>
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
            style: { opacity: 0.8 },
          },
        }}
      >
        <DrawerContent />
      </SwipeableDrawer>
    </div>
  )
}

export default Home;