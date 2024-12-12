import { Heading } from '../../components/Heading';
import ackoLogo from '../../assets/logo.svg'
import ChevronLeft from '../../icons/chevronLeft';

import './FeedPositiveStyle.css'

const FeedPositive = () => {
  const goBack = () => {
    
  }

  return (
    <div className='feed-positive-container'>
      <div className="back-nav">
        <button onClick={goBack} className="back-button">
          <ChevronLeft className="back-icon" />
        </button>
      </div>
      <a href="https://acko.com" target="_blank">
        <img src={ackoLogo} className="logo_acko" alt="Logo" />
      </a>
      <Heading>You have uploaded files</Heading>
    </div>
  )
}

export default FeedPositive;