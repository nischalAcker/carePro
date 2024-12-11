import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  AckoMainTheme,
  ThemeProvider,
} from '@acko-tech/building-blocks.ui.theme';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={AckoMainTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
