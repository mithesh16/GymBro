import React from 'react'
import {subscripePlan} from '../Services/Pricing';
import logo from '../Assets/Images/gymbros.png'
import Footer from '../Components/Footer';
const Pricing = () => {

  const subscribe=async ()=>{
    const resp=await subscripePlan();
    console.log(resp);
  }

  return (
    <div className=' '>
        <div className='flex items-center justify-center'>
        <h1 className='text-violet-400 text-[45px] font-bold w-fit '>Pricing</h1>
        </div>

    <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pb-20 text-center "> 
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">

{/* free plan */}
  <div class="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12  hover:border-violet-400 hover:ring-violet-400">
      <div class="text-center">
        <h2 class="text-lg font-medium text-white">
          Free
          <span class="sr-only">Plan</span>
        </h2>

        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-white sm:text-4xl"> 0$ </strong>

          <span class="text-sm font-medium text-white">/month</span>
        </p>
      </div>

      <ul class="mt-6 space-y-2">
        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> 10 Workout Templates </span>

        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> 10 Activities </span>
          
        </li>

        <li class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
  <line x1="5" y1="19" x2="19" y2="5" stroke-linecap="round" stroke-linejoin="round" />
  <line x1="5" y1="5" x2="19" y2="19" stroke-linecap="round" stroke-linejoin="round" />
</svg>

          <span class="text-white">Built In Templates </span>
        </li>

        <li class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-indigo-700">
  <line x1="5" y1="19" x2="19" y2="5" stroke-linecap="round" stroke-linejoin="round" />
  <line x1="5" y1="5" x2="19" y2="19" stroke-linecap="round" stroke-linejoin="round" />
</svg>

          <span class="text-white"> Community Access </span>
        </li>
      </ul>

      <a
        href="#"
        class="mt-8 block rounded-full border border-white bg-white px-12 py-3 text-center text-sm font-medium text-violet-500 hover:ring-1 hover:ring-violet-400 focus:outline-none focus:ring active:text-violet-400"
      >
        Current Plan
      </a>
  </div>
  
{/* pro plan */}
    <div class="rounded-2xl border border-white p-6 shadow-sm ring-1 ring-white sm:order-last sm:px-8 lg:p-12 hover:border-violet-400 hover:ring-violet-400">
      <div class="text-center">
        <h2 class="text-lg font-medium text-white">
          Pro
          <span class="sr-only">Plan</span>
        </h2>

        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-white sm:text-4xl"> Rs.50 </strong>

          <span class="text-sm font-medium text-white">/month</span>
        </p>
      </div>

      <ul class="mt-6 space-y-2">
        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> Unlimited Workout Templates </span>
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> 30 Activities </span>
          <span class="text-sm font-medium text-white">/month</span>
        </li>
        <li class="flex items-center gap-1 text-violet-400 ">Coming soon:</li> 
        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> Built In Templates </span>
         
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> Food tracker </span>
        </li>

       

        {/* <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-indigo-700"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>

          <span class="text-white"> Community access  </span>
       

        </li> */}
      </ul>

      <a
        href='/checkout'
        class="mt-8 w-full block rounded-full border border-violet-400 bg-violet-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-violet-400 hover:ring-1 hover:ring-violet-400 focus:outline-none focus:ring active:text-violet-400"
      >
        Get Started
      </a>
    </div>
   
   </div>
  </div>
  <Footer/>
</div>
  )
}

export default Pricing
