import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountryContextProvider from './Contexts/Countries/CountryContextProvider';
import ModalContextProvider from './Contexts/ProductModalToggle/ModalContextProvider';

createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <CountryContextProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </CountryContextProvider>
    </ModalContextProvider>
)
