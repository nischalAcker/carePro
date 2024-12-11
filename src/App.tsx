import ackoLogo from './assets/logo.svg'
import { Wrapper } from './components/Wrapper'
import './App.css'


function App() {
  return (
    <Wrapper>
      <a href="https://acko.com" target="_blank">
        <img src={ackoLogo} className="logo_acko" alt="Logo" />
      </a>
    </Wrapper>
  )
}

export default App
