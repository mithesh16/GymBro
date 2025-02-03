import React from 'react'
import Button from '@mui/material/Button';
const HeroSection = () => {

  const user=JSON.parse(localStorage.getItem('user'));
  return (
    <section className="min-h-[80vh] bg-gradient-to-tl from-violet-900 via-transparent to-transparent ">
    <div className="bg-transparent container h-full flex justify-center px-6 py-4 mx-auto sm:py-12"
    >
      <div className="flex flex-col justify-center items-center  pb-4 md:p-6 rounded-sm lg:max-w-xl xl:max-w-2xl  bg-transparent">
      <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Track Your <span className="text-violet-500">Progress</span><br />
          Achieve Your Goals
        </h1>
        <p className="text-md md:text-xl text-gray-300 mb-8 text-center bg-transparent">
          Create custom workout templates and track your fitness journey with <span className='text-violet-500'>GymBros</span> - 
          your ultimate workout companion.
        </p>
        
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start bg-transparent">
          <a rel="noopener noreferrer" href="/activity" className="px-10 py-2 text-md font-medium text-center rounded-lg bg-violet-400 text-gray-900 hover:bg-violet-500  ">Track Workout</a>
          <a rel="noopener noreferrer" href="/workouts" className="px-10 py-2 text-md font-medium text-center rounded-lg bg-gray-700  hover:bg-gray-800 ">Create Template</a>
        </div>
        
      </div>

    </div>
  </section>
  )
}

export default HeroSection
