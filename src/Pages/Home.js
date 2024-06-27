import React from 'react'
import HeroSection from '../Components/HeroSection'
import HeatMapActivity from '../Components/HeatMapActivity'
import Footer from '../Components/Footer'


const Home = () => {
  // const style={
  //   'background-image': url("../Assets/Images/workoutimg1.jpg")
  // };

  return (

      <div className="h-screen pb-[50%] mt-10 bg-opacity-1 bg-black block">
    <HeroSection/>
    <div className='w-full pt-10 lg:h-[800px]'>
    <div className='text-violet-400 text-3xl font-bold w-fit p-6 pl-10 flex items-center justify-center' id='title'>
       My Activity Calender</div>
    <HeatMapActivity/>
    </div>
    <Footer/>
    
    </div>
    
   
  )
}

export default Home
