import '../../App.css';
import './style.css';

import ChevronLeft from '../../icons/chevronLeft';
import { useNavigate } from 'react-router-dom';


const Guide = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="guide-container">
      <div className="back-nav">
        <button onClick={goBack} className="back-button">
          <ChevronLeft className="back-icon" />
        </button>
        <p className='back-title'>Your health guide</p>
      </div>
    </div>
  )
}

export default Guide;