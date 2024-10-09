import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CountryContextProvider from './Contexts/Countries/CountryContextProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Listing from './Pages/Listing';
function App() {

  return (

    <CountryContextProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cat/:id' element={<Listing/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CountryContextProvider>

  )
}

export default App
