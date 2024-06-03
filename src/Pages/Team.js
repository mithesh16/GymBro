import React from 'react'

import mimi from '../Assets/Images/mimi2.png'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Team = () => {
  return (
    <div class="bg-gray-900 pb-20">
      <div className='flex items-center justify-center mt-2'>
        <h1 className='text-violet-400 text-[35px] font-bold w-fit  '>Meet Our Team</h1>
        </div>
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        {/* <div class="mb-10 mt-3 text-center">
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div> */}
        <div class="flex justify-center items-center mt-12  text-center">
            <div class="w-64 text-center border border-white py-4 md:w-80">
                <img class="w-80 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src={mimi} alt="mithesh" loading="lazy" width="1000" height="800"/>
                <div>
                    <h4 class="text-2xl">Mithesh Srinivasan</h4>
                    <span class="block text-md text-violet-400">Full Stack Developer</span>
                      <div className='flex items-center justify-center gap-x-5 mt-2'>
                      <a href='https://github.com/mithesh16' target="_blank" rel="noreferrer">
                 <FaGithub className='h-[30px] w-[30px]' alt="githublogologo" /> </a>
            <a href='https://www.linkedin.com/in/mithesh-srinivasan/' target="_blank" rel="noreferrer">
          <IoLogoLinkedin className='h-[30px] w-[30px]' />
           </a>
                      </div>
                    
                </div>
            </div>
           
        </div>
    </div>
</div>
  )
}

export default Team
