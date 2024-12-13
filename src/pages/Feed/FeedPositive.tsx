import './feedNegativeStyle.css'
import ChevronLeft from '../../icons/chevronLeft';

import './FeedPositiveStyle.css'
import { useNavigate } from 'react-router-dom';
import { East } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const HealthStatsCard = () => {
  const stats = [
    { icon: '/steps-icon.png', label: 'Steps', value: '4,105', color: '#FFAB00' },
    { icon: '/sleep-icon.png', label: 'Sleep', value: '5.2 hrs', color: '#D83D37' },
    { icon: '/heart-icon.png', label: 'Heart rate', value: '68-99 bpm', color: '#0FA457' },
  ];

  return (
    <div className="health-card">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">
            <img src={stat.icon} alt={`${stat.label} icon`} />
          </div>
          <div className="stat-details">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MEMBER_ID = '0b9d71cd-bf8d-4cea-bf7e-7a0226a91bd5';

const FeedPositive = () => {
  const [analysisData, setAnalysisData] = useState()

  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  }

  const navigateToGuide = () => {
    navigate('/guide', {
      state: {
        data: analysisData
      }
    });
  }

  const navigateToAnalysis = () => {
    navigate('/analysis', {
      state: {
        data: analysisData
      }
    });
  }

  const getAnalysis = () => {
    fetch(`http://192.168.234.149:5010/health/journey/analysis/report?member_id=${MEMBER_ID}`)
      .then(response => response.json())
      .then(json => {
        console.log('response: ', json);
        setAnalysisData(json);
      });
  }

  useEffect(() => {
    if (!analysisData) {
      getAnalysis()
    }
  }, [analysisData]);


  console.log('analysis data: ', analysisData)
  return (
    <div className='feed-positive-container'>
      <div className="back-nav">
        <button onClick={goBack} className="back-button">
          <ChevronLeft className="back-icon" />
        </button>
        <div className='back-nav-container'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/profile-dp.png" alt='profile' />
            <div style={{ marginLeft: '12px' }}>
              <p style={{
                margin: '0px',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                color: '#000000'
              }}>
                Shivam Agarwal
              </p>
              <p style={{
                textAlign: 'left',
                fontSize: '10px',
                fontWeight: 400,
                lineHeight: '14px',
                color: '#4B4B4B',
                margin: '0px',
              }}>ABHA ID: 8342983</p>
            </div>       
          </div>
          <img src="/policy_document.png" alt="policy document" />
        </div>
      </div>
      <div className='feed-negative-content'>
        <div style={{ width: '100%'}}>
          <h1 className='feed-negative-heading' style={{ marginBottom: "16px"}}>Your regular activity</h1>
          <HealthStatsCard />
        </div>
        <div style={{ width: '100%', marginBottom: '48px'}}>
          <h1 className='feed-negative-heading'>Your health</h1>
          <h3 className='feed-negative-subheading'>See your personalised health data here</h3>
          <div style={{ margin: '0px auto', position: 'relative', marginBottom: '400px', cursor: 'pointer'}} onClick={navigateToGuide}>
            <img src="/health-meter.png" alt="health meter" style={{ position: 'absolute', top: '0px', left: '-24px'}} />
          </div>
        <div />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        paddingBottom: '20px',
      }}>
        <h1 className='feed-negative-heading'>Your report analysis</h1>
        <div className='feed-card' style={{ cursor: 'pointer' }} onClick={navigateToAnalysis}>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Cholesterol profile</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Needs attention</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>2 good</span>
            <span className='dot-container dot-container-yellow'><span className='dot dot-yellow'></span>1 borderline</span>
            <span className='dot-container dot-container-red'><span className='dot dot-red'></span>2 poor</span>
          </div>
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Thyroid</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Slightly elevated; keep monitoring</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>1 good</span>
            <span className='dot-container dot-container-yellow'><span className='dot dot-yellow'></span>1 borderline</span>
          </div>
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Vitamins</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Slightly below optimal; almost there</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>1 good</span>
            <span className='dot-container dot-container-yellow'><span className='dot dot-yellow'></span>1 borderline</span>
          </div>
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Liver profile</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Within the healthy range</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>5 good</span>
          </div>
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Blood profile</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Within the healthy range</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>5 good</span>
          </div>
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <h3 style={{ margin: '0px'}}>Diabetes monitoring</h3>
            <East />
          </div>
          <p style={{
            margin: '0px',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
          }}>Within the healthy range</p>
          <div
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <span className='dot-container dot-container-green'><span className='dot dot-green'></span>2 good</span>
          </div>
        </div>
      </div>
      </div>
      <div className='feed-footer'>
        <img src='/bottom-navigation.png' alt='bottom-navigation' />
      </div>
    </div>
  )
}

export default FeedPositive;