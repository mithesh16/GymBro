import React,{useState} from 'react'
import {FcGoogle} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebaseconfig'
const Login = () => {

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const navigation=useNavigate();

const handlegoogle=async(e)=>{
const provider= await new GoogleAuthProvider();
const result=await signInWithPopup(auth,provider);
console.log(result.user.email)
localStorage.setItem('user',JSON.stringify(result.user));
localStorage.setItem('email',result.user.email)
navigation('/home')
return result;

}

const handleLogin=(e)=>{
  e.preventDefault();
  if(email===''){
    console.log("error")
  }
  else{
    localStorage.setItem('email',email);
    navigation('/home')
  }
  

}

  return (

    <div className="items-center justify-center w-full h-screen" >
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
      <h1 className='mx-auto text-4xl font-bold text-violet-400'>GYMBROS</h1>
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {/* <form class="space-y-6">
          <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
         <div class="mt-2">
            <input id="email" name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div> 
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-violet-400 hover:text-violet-600">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" onChange={(e)=>{setPass(e.target.value)}} value={pass} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
        <div>
        
        </div> 
      </form> */}
      <button onClick={handlegoogle} class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> 
          <FcGoogle className="lg:text-2xl text-xl mr-2 bg-transparent " /> Sign in with Gmail
          </button>
      {/* <p class="mt-10 text-center text-md text-gray-500">
        Not a member? 
        <a href="/signup" class="font-semibold leading-6 text-violet-400 hover:text-violet-600"> Sign up for free</a>
      </p> */}
      
    </div>
  </div>
    </div>
    
  )
}

export default Login
