/* eslint-disable @typescript-eslint/no-explicit-any */
import './feedNegativeStyle.css'
import FileUpload from '../../components/FileUpload';
import ChevronLeft from '../../icons/chevronLeft';
import { useNavigate } from 'react-router-dom';


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


const FeedNegative = ({
    handleUploadSuccess,
    handleUploadError
  } : {
    handleUploadSuccess: (files: any) => void,
    handleUploadError: (error: Error) => void
  }) => {
    const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   }

  return (
    <div className='feed-negative-container'>
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
                textAlign: 'left', //styleName: Label/Small;
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                color: '#000000'
              }}>
                Shivam Agarwal
              </p>
              <p style={{
                margin: '0px',
                textAlign: 'left',
                fontSize: '10px',
                fontWeight: 400,
                lineHeight: '14px',
                color: '#4B4B4B'
              }}>ABHA ID: 8342983</p>
            </div> 
          </div>
          <img src="/policy_document.png" alt="policy document" />
        </div>
      </div>
      <div className='feed-negative-content'>
        <h1 className='feed-negative-heading'>Your regular activity</h1>
        <HealthStatsCard />
        <FileUpload
          proposalId="0b9d71cd-bf8d-4cea-bf7e-7a0226a91bd5"
          onUploadSuccess={handleUploadSuccess}
          onUploadError={handleUploadError}
        />
      </div>
      <div className='feed-footer'>
        <img src='/bottom-navigation.png' alt='bottom-navigation' />
      </div>
    </div>
  )
}

export default FeedNegative;