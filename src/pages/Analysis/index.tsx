import { useNavigate } from 'react-router-dom';
import ChevronLeft from '../../icons/chevronLeft';
import './style.css'
import { useState } from 'react';

const Analysis = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>('LDL');

  const goBack = () => {
    navigate(-1);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
        case 'LDL':
        return (
          <div className='analysis-graph-card'>
            <h2 className="analysis-card-heading" style={{ fontSize: '16px'}}>LDL, also known as “bad cholesterol”</h2>
            <p className='analysis-card-text'>A measure of cholesterol carried by low-density lipoproteins, where it can build up & increase the risk of heart disease & stroke.</p>
            <img src="/ldl_graph.png" alt="ldl graph" />
            <div className='analysis-card-message-box'>
              <p className='analysis-card-message'>Your LDL is <span style={{ fontWeight: 600, color: '#F58700'}}>borderline high at 144</span>. It can increase risk of heart issues over time. For you (male, 30) <span style={{ color: '#0FA457'}}>ideal is &lt;100</span>.</p>
            </div>  
          </div>
        );
        case 'HDL':
        return (
          <div className='analysis-graph-card'>
            <h2 className="analysis-card-heading" style={{ fontSize: '16px'}}>HDL, also known as “good cholesterol”</h2>
            <p className='analysis-card-text'>A measure of cholesterol carried by high-density lipoproteins, it helps remove excess cholesterol & reduce risk of heart disease.</p>
            <img src="/hdl_graph.png" alt="hdl graph" />
            <div className='analysis-card-message-box'>
              <p className='analysis-card-message'>Your HDL is <span style={{ fontWeight: 500, color: '#D83D37' }}>low at 43</span>. Higher levels help protect against heart disease. For you (male, 30), <span style={{ color: '#0FA457' }}>ideal is &gt;60</span>.</p>
            </div>  
          </div>
        );
        default:
            return null;
    }
  }

  return (
    <div className="analysis-container">
      <div className="back-nav">
        <button onClick={goBack} className="back-button">
          <ChevronLeft className="back-icon" />
        </button>
        <div className='back-nav-container'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '12px' }}>
              <p style={{
                margin: '0px',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '20px',
                color: '#000000'
              }}>
                Cholesterol profile
              </p>
            </div>       
          </div>
        </div>
      </div>
      <div className="toggle-menu">
        <div className={`toggle-menu-item ${selectedItem === 'LDL' ? 'selected' : ''}`} onClick={() => handleItemClick('LDL')}>
          <p className="toggle-menu-item-text">LDL</p>
          <img src="/caution.png" alt="caution" />
        </div>
        <div className={`toggle-menu-item  ${selectedItem === 'HDL' ? 'selected' : ''}`} onClick={() => handleItemClick('HDL')}>
          <p className={`toggle-menu-item-text`}>HDL</p>
          <img src="/caution.png" alt="caution" />
        </div>
        <div className="toggle-menu-item">
          <p className="toggle-menu-item-text">Total</p>
        </div>
        <div className="toggle-menu-item">
          <p className="toggle-menu-item-text">LDL/HDL</p>
        </div>
      </div>
      <div className="analysis-content">
        {renderContent()}
        <div className='analysis-graph-recommend-container'>
          <h1 className='analysis-graph-heading'>Improve your cholesterol levels</h1>
          <div className='analysis-card'>
            <h2 className="analysis-card-heading">Adjust your diet</h2>
            <p className='analysis-card-text'>Add more oats, beans, and nuts while reducing processed sugars and unhealthy fats from frequent eating out.</p>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#C9C9C9', marginBottom: "20px" }} />
            <p className='analysis-card-link-text' style={{ margin: '0px' }}>Talk to an ACKO certified dietician &rarr;</p>
            <img src="/doctors-roll.png" alt="doctors-roll" />
          </div>
          <div className='analysis-card'>
            <h2 className="analysis-card-heading">Improve your sleep</h2>
            <p className='analysis-card-text'>Increase your 5 hr sleep duration to 7+ hrs by following a consistent bedtime routine and better sleep hygiene.</p>
          </div>
          <div className='analysis-card'>
            <h2 className="analysis-card-heading">Enhance your activity routine</h2>
            <p className='analysis-card-text'>Complement your 8,000 daily steps with 30 minutes of sports to boost heart health.</p>
            <div className='analysis-card-insight'>
              <img src="/sparkle.png" alt="sparkle" />
              <p className='analysis-card-insight-text'>Some of your instagram stories show that you drink actively, reducing it progressively will be helpful for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis;