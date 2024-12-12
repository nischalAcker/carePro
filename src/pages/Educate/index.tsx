/* eslint-disable @typescript-eslint/no-explicit-any */


import { useNavigate } from 'react-router-dom';

import './style.css'
import ChevronLeft from '../../icons/chevronLeft';
import { useEffect, useState } from 'react';
import GreenTickIcon from '../../icons/greenTick';

const totalSteps = 3;

const cards = [
    {
        title: 'Samsung Fitness',
        icon: ['/samsung-fitness.png'], 
        pointers: ['Daily steps and activity tracker', 'Daily activity tracker', 'Sleep tracker']
    },
    {
        title: 'Instagram and LinkedIn',
        icon: ['/linkedin.png', '/instagram.png'],
        pointers: ['Post analysis', 'Comment analysis', 'Bio analysis']
    },
    {
        title: 'ABHA',
        icon: ['/abha.png'],
        pointers: ['Hospital reports', 'Medical documents']
    },
    {
        title: 'ACKO profile',
        icon: ['/acko.png'],
        pointers: ['User data', 'Demography data']
    }
]


const Step1 = ({ nextStep, progress }: { nextStep: any, progress: any}) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    }
    
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div className="back-nav">
          <button onClick={goBack} className="back-button">
            <ChevronLeft className="back-icon" />
          </button>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div
            className='educate-content'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
        >
            <h1 className='educate-heading'>Glad, to have you with us <span style={{ color: 'rgba(230, 73, 128, 1)'}}>Sanjana</span></h1>
            <p className='educate-paragraph'><span style={{ fontWeight: 700}}>Let’s set your health profile, we have linked your fitness tracker</span>, social media to give better insights and guidance, just for you</p>
        </div>
        <footer className='educate-footer'>
          <div className='cta-container'>
            <button onClick={() => nextStep()} className="cta-button">
              Next
            </button>
          </div>
          {/* BottomSheet handle*/}
          <div className='bottom-sheet-handle'>
            <div className='bottom-handle' />
          </div>
        </footer>
      </div>
    )
}

const Step2 = ({ nextStep, prevStep, progress  }: { nextStep: any, prevStep: any, progress: number }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentPointerIndex, setCurrentPointerIndex] = useState(-1);
    const [loadedCards, setLoadedCards] = useState<number[]>([]);
    const [gradientCards, setGradientCards] = useState<number[]>([]);

   
    useEffect(() => {
        if (currentPointerIndex < cards[currentCardIndex].pointers.length - 1 && loadedCards.length <= 3) {
          const timer = setTimeout(() => {
            setCurrentPointerIndex(currentPointerIndex + 1);
          }, 500); // Adjust the delay as needed
          return () => clearTimeout(timer);
        } else if (currentCardIndex < cards.length - 1) {
          const timer = setTimeout(() => {
            setLoadedCards([...loadedCards, currentCardIndex]);
            setCurrentCardIndex(currentCardIndex + 1);
            setCurrentPointerIndex(-1);
          }, 1500);
          return () => clearTimeout(timer);
        } else {
            setLoadedCards([...loadedCards, currentCardIndex]);
          }
      }, [currentPointerIndex, currentCardIndex, loadedCards]);

    useEffect(() => {
        if (loadedCards.length > 0 && loadedCards.length <= 3) {
          const lastLoadedCard = loadedCards[loadedCards.length - 1];
          const timer = setTimeout(() => {
            setGradientCards([...gradientCards, lastLoadedCard]);
          }, 500); // Adjust the delay as needed for the gradient background
          return () => clearTimeout(timer);
        }
    }, [loadedCards, gradientCards]); 

    const renderCards = cards.map((card: any, index) => {
        return (
          <div key={index} className={`card ${index <= currentCardIndex ? 'visible' : ''} ${gradientCards.includes(index) ? 'gradient-bg' : ''}`}>
            <div className="card-header">
            {
              card.icon.map((iconSrc: string, iconIndex: number) => (
                <div key={iconIndex} className="card-icon-container">
                 <img src={iconSrc} alt={card.title} className="card-icon" />
                </div>
              ))}
              <h2 className="card-title">{card.title}</h2>
            </div>
            <ul className="card-pointers">
              {card.pointers.map((pointer: any, idx: any) => (
                <li key={idx} className={`card-pointer ${index < currentCardIndex || (index === currentCardIndex && idx <= currentPointerIndex) ? 'visible' : ''}`}>
                  <GreenTickIcon /> {pointer}
                </li>
               ))}
          </ul>
        </div>
        )
    })

    return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className="back-nav">
          <button onClick={prevStep} className="back-button">
            <ChevronLeft className="back-icon" />
          </button>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className='educate-content' style={{ marginBottom: 'auto', position: 'relative' }}>
          <h1 
            style={{
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '32px',
              textAlign: 'left'
            }}
           >
            All in one place!
           </h1>
           {renderCards}
        </div>
        <footer className='educate-footer'>
          <div className='cta-container'>
            <button onClick={() => nextStep()} className="cta-button"  disabled={loadedCards?.length < 3}>
              Next
            </button>
          </div>
          {/* BottomSheet handle*/}
          <div className='bottom-sheet-handle'>
            <div className='bottom-handle' />
          </div>
        </footer>
    </div>
    )
}

const Step3 = ({ prevStep, progress }: {  prevStep: any, progress: number }) => {
    const navigate = useNavigate();

    const goNext = () => {
      navigate('/feed');
    }


    return (
       <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="back-nav">
            <button onClick={prevStep} className="back-button">
              <ChevronLeft className="back-icon" />
            </button>
            <div className="progress-bar">
             <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className='educate-content' style={{ marginBottom: 'auto'}}>
            <p style={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '32px',
                textAlign: 'left',
            }}>
              This is what we know about you
            </p>
            <div style={{
              background: 'linear-gradient(90deg, #EFE9FB 0%, #FFF2E6 100%)',
              marginTop: 32,
              width: 320,
              height: 84,
              padding: '20px',
              borderRadius: '16px',
              display: 'flex',
              gap: '12px'
            }}>
              <img src='/sparkle.png' alt="sparkle" style={{ width: 32, height: 32 }} />
              <div style={{ textAlign: 'left'}}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '20px',
                }}>
                  This is how we know you now
                </p>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: 400,
                }}>Overall summary analysis</p>
              </div>
             </div> 
          </div>
          <footer className='educate-footer'>
            <div className='cta-container'>
              <button onClick={goNext} className="cta-button">
                Next
               </button>
            </div>
            {/* BottomSheet handle*/}
            <div className='bottom-sheet-handle'>
              <div className='bottom-handle' />
            </div>
          </footer>
        </div>
    )
}


const Educate = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step) {
        setProgress((step / totalSteps) * 100);
    }
  }, [step])
    
  return (
    <div className="educate-container">
      {step === 1 && <Step1 progress={progress} nextStep={nextStep} />}
      {step === 2 && <Step2 progress={progress} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 progress={progress} prevStep={prevStep} />}
    </div>
  )
}

export default Educate;