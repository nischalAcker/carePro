import '../../App.css';
import './style.css';

import ChevronLeft from '../../icons/chevronLeft';
import { useNavigate } from 'react-router-dom';
import FilterIcon from '../../icons/filter';


const Guide = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

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
          <div className='guide-card'>
            <h2 className="guide-card-heading">Ensure regular sleep</h2>
            <p className='guide-card-text'>Maintain a consistent sleep schedule with 7-8 hours of quality sleep</p>
            <div className='guide-card-insight'>
              <img src="/sparkle.png" alt="sparkle" />
              <p className='guide-card-insight-text'>Your 5 hours of daily sleep is too less & impacts several health parameters.</p>
            </div>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Improve your feed</h2>
            <p className='guide-card-icon-text'>Your <span style={{ fontWeight: 700 }}>Instagram shows that you are highly active</span> on the platform. Here are a few health influencers you can follow to gain better insights.</p>
            <div className='guide-card-icon-list'>
              <p className='guide-card-icon-text'>Few suggestions for you</p>
              <img src="/instagram-roll.png" alt='instagram-roll' />
            </div>   
          </div>
        </div>
        {/* Dietary */}
        <div className="guide-box">
          <h1 className='guide-heading'>Dietary adjustments</h1>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Reduce alcohol consumption</h2>
            <p className='guide-card-text'>Gradually reduce alcohol amount and frequency to improve cholesterol levels</p>
            <div className='guide-card-insight'>
              <img src="/sparkle.png" alt="sparkle" />
              <p className='guide-card-insight-text'>As per your socials, you have frequent alcohol consumption on social occasions.</p>
            </div>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Boost iodine intake</h2>
            <p className='guide-card-text'>Incorporate iodized salt and seafood if possible to support thyroid function.</p>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Consider supplements</h2>
            <p className='guide-card-text'>Incorporate vitamin B12 supplements to improve your vitamin levels.</p>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-link-heading" style={{ cursor: 'pointer' }}>Talk to an ACKO certified dietician &rarr;</h2>
            <img src="/dietician-roll.png" alt='dietician-roll' />
          </div>
        </div>
        {/* Fitness */}
        <div className="guide-box">
          <h1 className='guide-heading'>Fitness</h1>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Increase aerobic exercise</h2>
            <p className='guide-card-text'>Add sports for 30 minutes to your regular walks.</p>
            <div className='guide-card-insight'>
              <img src="/sparkle.png" alt="sparkle" />
              <p className='guide-card-insight-text'>Your consistent 8000 daily steps indicate potential to build on aerobic fitness.</p>
            </div>
          </div>
        </div>
        {/* Further tests and consults */}
        <div className="guide-box">
          <h1 className='guide-heading'>Further tests and consults</h1>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Lab tests</h2>
            <p className='guide-card-text'>Thyroid antibodies test to rule out autoimmune hypothyroidism.</p>
          </div>
          <div className='guide-card'>
            <h2 className="guide-card-heading">Doctor consultation</h2>
            <p className='guide-card-text'>Consult a cardiologist for cholesterol and an endocrinologist for thyroid issues.</p>
          </div>
          <div className='guide-card'>
            <div style={{ margin: '0px auto'}}>
              <p className='guide-card-link-text' style={{ margin: '0px' }}>Go to the ACKO clinic &rarr;</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Guide;