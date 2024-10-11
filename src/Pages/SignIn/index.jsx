import React, { useContext, useEffect } from 'react'
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
function SignIn() {

  return (
    <>


    <Dialog className="locationModal" open={true}>
      <div className='signinModal'>
      <Button className="close_" >
          <IoMdClose />
        </Button>
      <div className=' logo-div'>
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <h3 className='mt-3'>Sign In</h3>
        <form action="">
          <div className="row">
            
              <input type="text" name="name" id="" placeholder='Name *' />
            
            
              <input type="text" name="phone" id="" placeholder='Phone No *'/>
            
          </div>
            <input type="email" name="" id="" placeholder='Email *'/>
            <input type="password" name="" id="" placeholder='Password *'/>
            
        </form>
      </div>
      </div>
    </Dialog>

    </>
  )
}

export default SignIn