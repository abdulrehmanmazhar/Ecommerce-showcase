import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CountryContextProvider from './Contexts/Countries/CountryContextProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (

    <CountryContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CountryContextProvider>

  )
}

export default App
