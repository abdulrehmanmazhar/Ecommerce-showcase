import React from 'react'
import ModalContext from './ModalContext'
import { useState } from 'react'
function ModalContextProvider({children}) {
    const [isOpenProductModal, setisOpenProductModal] = useState(false);
    const toggle =()=>{setisOpenProductModal((prev)=>!prev);}
  return (
    <ModalContext.Provider value={{isOpenProductModal, setisOpenProductModal, toggle}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider