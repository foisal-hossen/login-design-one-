import React from 'react';
import '../firebase/firebase.init'
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
    const password = event.target.password.value;
  console.log(email, password)
}

const handleEmailChnage = event => {
  console.log(event.target.value)
}


const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-purple-900  
                    flex flex-col justify-center  h-screen">
      

      <form onSubmit={handleRegister} className=' max-auto  lg:w-1/2  lg:ml-80 bg-gradient-to-r from-indigo-700 via-purple-900 to-violet-900
      p-8 px-10  shadow-2xl shadow-blue-400 rounded-md 
      sm:mx-20 
      
      
      '>

        <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-700
        flex justify-center text-4xl font-extrabold '>SIGN IN</h2>

        
        <div className='md:ml-40 ml-5 mt-5'>
          
        {/* email */}
          <h4 className='text-gray-400 font-bold text-lg
                bg-clip-text text-transparent bg-gradient-to-r hover:from-yellow-400 hover:to-green-700
     '> Email</h4>
        <input onBlur={handleEmailChnage} className='rounded-lg bg-gray-700 mt-2 p-2 px-12 border-double border-4 focus:border-blue-600 focus:bg-gray-800 text-blue-400

        '
          type="email"
          name="email"
          id="" required
           />

        <br />
        {/* password */}
      <h4 className='text-gray-400 font-bold text-lg hover:text-blue-500'> Password</h4>
      <input className='rounded-lg bg-gray-700 mt-2 p-2 px-12 border-double border-4 focus:border-blue-600 focus:bg-gray-800 text-blue-400'
          type="password"
          name="password"
          id="" required/>
        <br />
        <button className=' text-indigo-900 ml-20 mt-10 text-lg font-bold outline hover:outline-yellow-500 outline-blue-500 p-2 px-10   rounded-md outline-offset-4 bg-gradient-to-r from-sky-400 to-blue-800 hover:from-rose-500 hover:to-violet-700' type="submit">Register</button>
    </div>   
  </form>

      
      
</div>
  );
};

export default Login;