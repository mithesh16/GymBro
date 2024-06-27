import React from 'react'

const Footer = () => {
  return (
    <footer class="mt-10 items-center justify-center px-5">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-3xl font-semibold text-violet-400 font-['futura']">
          GYMBROS
          
      </a>
      <p class="my-6 text-lg text-gray-500 dark:text-gray-400">Track workouts and be a better version of Yourself</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="/aboutus" class="mr-4 hover:underline md:mr-6 ">About Us</a>
          </li>
          <li>
              <a href="/termsandconditons" class="mr-4 hover:underline md:mr-6">Terms and Condition</a>
          </li>
          <li>
              <a href="/privacypolicy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
              <a href="/refund" class="mr-4 hover:underline md:mr-6 ">Refund Policy</a>
          </li>
          <li>
              <a href="contact" class="mr-4 hover:underline md:mr-6">Contact us</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline font-['futura']">GYMBROS™</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer
