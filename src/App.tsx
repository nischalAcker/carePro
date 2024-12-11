import { useState } from 'react';
import { Box } from '@acko-tech/building-blocks.ui.common';

import { Wrapper } from './components/Wrapper'
import './App.css'
import { Screen } from './components/Screen';
import BottomNav from './components/BottomNav';


function App() {
  const [screenValue, setScreenValue] = useState<number>(0);

  return (
    <Wrapper>
      <Box style={{
        display: "flex",
        height: '100%',
        justifyContent: "space-between",
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Screen */}
        <Screen value={screenValue} />
        {/* Bottom Navigation */}
        <BottomNav value={screenValue} setValue={setScreenValue} />
      </Box>
    </Wrapper>
  )
}

export default App
