import ackoLogo from './assets/logo.svg'
import { Wrapper } from './components/Wrapper'

import { Box } from '@acko-tech/building-blocks.ui.common';
import { PrimaryButton } from '@acko-tech/building-blocks.ui.button';
import './App.css'


function App() {
  return (
    <Wrapper>
      <Box style={{
        display: "flex",
        height: '100%',
        justifyContent: "space-between",
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <a href="https://acko.com" target="_blank">
          <img src={ackoLogo} className="logo_acko" alt="Logo" />
        </a>
        <PrimaryButton>Less go!</PrimaryButton>
      </Box>
    </Wrapper>
  )
}

export default App
