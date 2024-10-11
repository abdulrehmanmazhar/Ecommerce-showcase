import React, { useContext, useEffect, useState } from 'react'
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FaGoogle } from "react-icons/fa";
import UserContext from '../../Contexts/UserContext/UserContext';
function SignIn() {
  const[signin, setsignin] =useState(true)
  const {setUserModal} = useContext(UserContext);
  return (
    <>


    <Dialog className=" signModal locationModal " open={true}>
      {signin&&<div className='signinModal'>
      <Button onClick={()=>setUserModal(false)} className="close_" >
          <IoMdClose />
        </Button>
      <div className=' logo-div'>
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <h3 className='mt-3 hd '>Sign In</h3>
        <form action="">
          <div className='mt-3'>
          <TextField className='w-100' id="standard-basic" label="Email" type='email' variant="standard" required/>
          </div>
          <div>
          <TextField className='w-100' id="standard-basic" label="Password" type='password' variant="standard" required/>
          </div>
          <div className='mt-2'>
          <a href="/">forgot password</a>
          <p className="pointer" onClick={()=>setsignin(false)}>Not registered?   Sign up</p>
          </div>
          <Button className='btn-purple w-100'>Sign In</Button>
        </form>
      </div>
      </div>}
      {!signin&&<div className='signinModal'>
      <Button onClick={()=>setUserModal(false)} className="close_" >
          <IoMdClose />
        </Button>
      <div className=' logo-div'>
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <h3 className='mt-3 hd '>Sign Up</h3>
        <form action="">
          <div className='mt-3'>
          <TextField className='w-100' id="standard-basic" label="Name" type='text' variant="standard" required/>
          </div>
          <div>
          <TextField className='w-100' id="standard-basic" label="Email" type='email' variant="standard" required/>
          </div>
          <div>
          <TextField className='w-100' id="standard-basic" label="Create Password" type='password' variant="standard" required/>
          </div>
          <div>
          <TextField className='w-100' id="standard-basic" label="Re-type Password" type='password' variant="standard" required/>
          </div>
          <div className='mt-2'>
          <a href="/">forgot password</a>
          <p className="pointer" onClick={()=>setsignin(true)}>Already registered?   Sign in</p>
          </div>
          <Button className='btn-purple w-100'>Sign Up</Button>
          <Button className='btn-purple-inv w-100 mt-3'> Sign Up with <FaGoogle className='ml-3' />
          </Button>
        </form>
      </div>
      </div>}
    </Dialog>

    </>
  )
}

export default SignIn