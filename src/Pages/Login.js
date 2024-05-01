import React from 'react'
import {FcGoogle} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation=useNavigate();
  return (

    <div className='items-center justify-center w-full h-screen'>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
      {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
      <h1 className='mx-auto text-3xl font-bold text-violet-400'>GYMBROS</h1>
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6"  onSubmit={()=>{
        navigation('/home')
      }}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> 
          <FcGoogle className="lg:text-2xl text-xl mr-2 bg-transparent " /> Sign in with Gmail
          </button>
        </div>
      </form>
  
      <p class="mt-10 text-center text-md text-gray-500">
        Not a member? 
        <a href="/signup" class="font-semibold leading-6 text-violet-400 hover:text-violet-600"> Sign up for free</a>
      </p>
      
    </div>
  </div>
    </div>
    
  )
}

export default Login
