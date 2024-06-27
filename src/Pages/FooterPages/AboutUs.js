import React from 'react'
import Footer from '../../Components/Footer'

const AboutUs = () => {
  return (
    <div className='pb-10'>
       <div className="flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full  rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-violet-400 mb-6">About Us</h1>
        <p className="text-md md:text-lg text-white mb-4 text-justify ">
          Welcome to GYMBROS! We are dedicated to helping you achieve your fitness goals through our comprehensive gym tracking website. Our mission is to provide an easy-to-use platform where you can monitor your workouts, track your progress, and stay motivated.
        </p>
        
        <p className="text-md md:text-lg text-white mb-4 text-justify">
          Join us today and become a part of the GYMBROS family. Together, we can achieve our fitness goals and lead healthier, happier lives.
        </p>
        <p className="text-md md:text-lg text-white text-justify">
          Thank you for choosing GYMBROS. We look forward to being a part of your fitness journey.
        </p>
        <div className="text-center mt-8 text-md md:text-lg">
          <a href="/contact" className="text-violet-400 hover:underline">Contact Us</a> if you have any questions or need support.
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutUs
