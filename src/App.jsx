import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Listing from './Pages/Listing';
import ProductDetail from './Pages/ProductDetail';
import ModalContext from './Contexts/ProductModalToggle/ModalContext';
import { useContext, useState } from 'react';
import ProductModal from './Components/ProductModal';
import Cart from './Pages/Cart';
import UserContext from './Contexts/UserContext/UserContext';
import SignIn from './Pages/SignIn';
function App() {
  const {isOpenProductModal, toggle} = useContext(ModalContext);
  const {userModal} = useContext(UserContext)
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cat/:id' element={<Listing/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    

{isOpenProductModal&&

  <ProductModal toggle={toggle}></ProductModal>
}
{
  userModal&& <SignIn></SignIn>
}
</>
  )
}

export default App
