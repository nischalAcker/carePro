/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '../../App.css';
import './style.css';

import ChevronLeft from '../../icons/chevronLeft';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterIcon from '../../icons/filter';


const Guide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const analysisData = location.state?.data;
  const { recommendation_summary } = analysisData ?? {};

  const goBack = () => {
    navigate(-1);
  }

  console.log('data: ', recommendation_summary);
  return (
    <div className="guide-container">
      <div className="back-nav" style={{ gap: '0px'}}>
        <button onClick={goBack} className="back-button">
          <ChevronLeft className="back-icon" />
        </button>
        <div className='back-nav-container'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '12px' }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'left',
                fontWeight: 500,
                margin: '0px'
              }}>
                Your health guide
              </p>
            </div>       
          </div>
          <FilterIcon />
        </div>
      </div>
      <div className="guide-content">
        {/* Lifestyle */}
        <div className="guide-box">
          <h1 className='guide-heading'>Lifestyle changes</h1>
          {
            recommendation_summary?.lifestyle_recommendations?.map((recommendation: any, _index: number) => {
              return (
                <div className='guide-card'>
                  <h2 className="guide-card-heading">{recommendation?.header}</h2>
                  <p className='guide-card-text'>{recommendation?.recommendation}</p>
                </div>
              )
            })
          }
        </div>
        {/* Dietary */}
        <div className="guide-box">
          <h1 className='guide-heading'>Dietary adjustments</h1>
          {
            recommendation_summary?.diet_recommendations?.map((recommendation: any, _index: number) => {
              return (
                <div className='guide-card'>
                  <h2 className="guide-card-heading">{recommendation?.header}</h2>
                  <p className='guide-card-text'>{recommendation?.recommendation}</p>
                </div>
              )
            })
          }
          <div className='guide-card'>
            <h2 className="guide-card-heading">Reduce alcohol consumption</h2>
            <p className='guide-card-text'>Gradually reduce alcohol amount and frequency to improve cholesterol levels</p>
            <div className='guide-card-insight'>
              <img src="/sparkle.png" alt="sparkle" />
              <p className='guide-card-insight-text'>As per your socials, you have frequent alcohol consumption on social occasions.</p>
            </div>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-link-heading" style={{ cursor: 'pointer' }}>Talk to an ACKO certified dietician &rarr;</h2>
            <img src="/dietician-roll.png" alt='dietician-roll' />
          </div>
        </div>
        {/* Fitness */}
        <div className="guide-box">
          <h1 className='guide-heading'>Fitness</h1>
          {
            recommendation_summary?.fitness_recommendations?.map((recommendation: any, _index: number) => {
              return (
                <div className='guide-card'>
                  <h2 className="guide-card-heading">{recommendation?.header}</h2>
                  <p className='guide-card-text'>{recommendation?.recommendation}</p>
                  <div className='guide-card-insight'>
                    <img src="/sparkle.png" alt="sparkle" />
                    <p className='guide-card-insight-text'>{recommendation?.why}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* Further tests and consults */}
        <div className="guide-box">
          <h1 className='guide-heading'>Further tests and consults</h1>
          {
            recommendation_summary?.further_tests?.tests?.map((test: any, _index: number) => {
              return (
                <div className='guide-card'>
                  <p className='guide-card-text'>{test}</p>
                </div>
              )
            })
          }
        </div>
      </div>  
    </div>
  )
}

export default Guide;