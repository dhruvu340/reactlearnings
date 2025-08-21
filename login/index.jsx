import React, { useState } from 'react'
import Customform from '../form-dynamic/components/customform'
import loginformel from './config'

const LoginComponent = () => {
  function handlesubmit(e){
e.preventDefault();
  }
  const [loginformData,setloginformData]=useState({
    email:'',
    password:'',
  })
  return (
<>
    <h1>LoginComponent</h1>
    <Customform formData={loginformData} setFormData={setloginformData} formControls={loginformel} buttontext={'login'} handlesubmit={handlesubmit}/>
    </>
  )
}

export default LoginComponent