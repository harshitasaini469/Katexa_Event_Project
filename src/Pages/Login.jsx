import React from 'react';
import Form from '../components/Login/Form';

const Login = () => {
  return (
    
  <div className='flex justify-center w-100 bg-center bg-contain bg-no-repeat' style={{ backgroundImage: "url(/LoginForm/bg.png)" }}>
    <div className=' w-[55vw] flex flex-col self-center items-center relative'>
    <img src="/LoginForm/loginImage1.svg" className='w-28 absolute z-40 -top-20' alt="" />
    <Form />
    <img src="/LoginForm/loginImage2.svg" className='w-64 absolute z-40 -right-0 -bottom-14' alt="" />
    </div>
   
  </div>

  );
}

export default Login;
