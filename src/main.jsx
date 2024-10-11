import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountryContextProvider from './Contexts/Countries/CountryContextProvider';
import ModalContextProvider from './Contexts/ProductModalToggle/ModalContextProvider';
import UserContextProvider from './Contexts/UserContext/UserContextProvider.jsx';
createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <ModalContextProvider>
    <CountryContextProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </CountryContextProvider>
    </ModalContextProvider>
    </UserContextProvider>
)
