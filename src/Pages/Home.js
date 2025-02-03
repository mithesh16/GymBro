import React from 'react'
import HeroSection from '../Components/HeroSection'
import HeatMapActivity from '../Components/HeatMapActivity'
import Footer from '../Components/Footer'
import Features from '../Components/Features'

const Home = () => {
  // const style={
  //   'background-image': url("../Assets/Images/workoutimg1.jpg")
  // };

  return (

      <div className="min-h-screen mt-10  bg-black block">
    <HeroSection/>
'
    <Features/>

    <Footer/>

    </div>
    
   
  )
}

export default Home
