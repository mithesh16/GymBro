import React from 'react'
import HeroSection from '../Components/HeroSection'


const Home = () => {
  // const style={
  //   'background-image': url("../Assets/Images/workoutimg1.jpg")
  // };

  return (

      <div className="h-screen pb-[50%] bg-[url('')]  bg-contain bg-no-repeat md:bg-right bg-opacity-1 bg-black md:pb-0 md:h-auto  md:bg-none flex items-center md:block">
    <HeroSection/>
    </div>
    
   
  )
}

export default Home
