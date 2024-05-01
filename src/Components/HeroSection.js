import React from 'react'
import Button from '@mui/material/Button';
const HeroSection = () => {
  return (
    <section className="bg-[url('https://cdn.wallpapersafari.com/65/19/CRuKD9.jpg')] bg-contain bg-no-repeat bg-right bg-opacity-5 bg-black ">
    <div className=" bg-transparent container h-full flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
    >
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-transparent">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl bg-inherit">Welcome
          <span className="dark:text-violet-400 bg-inherit"> RURU</span>
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 bg-inherit">Track your Workouts, get Better Results, and be the Best Version of Yourself with
         <span className="text-2xl sm:mb-12 text-violet-400 text-center bg-inherit">    GYM BROS</span> 
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start bg-transparent">
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900 hover:bg-violet-500  ">Track Workout</a>
          <a rel="noopener noreferrer" href="/workouts" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:bg-gray-800 ">Add Workout</a>
        </div>
        
      </div>
      {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div> */}
    </div>
  </section>
  )
}

export default HeroSection
