import React from 'react'
import Footer from '../../Components/Footer'
const TandC = () => {
  return (
    <div class="">
    <div class="container mx-auto px-4 py-8">
        <div className='flex text-center items-center justify-center mb-4 mt-0'>
        <h1 class="text-3xl font-bold mb-4 text-violet-400">Terms and Conditions</h1>
        </div>
       

        <p class="mb-4 text-justify text-md md:text-lg">
        By accessing or using our website, you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read these Terms carefully before using GYMBROS. If you do not agree to these Terms, you must not use our website.
        </p>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Account Registration</h2>

        <p class="mb-4 text-justify text-md md:text-lg">
        To access certain features of GYMBROS, you may need to create an account. You agree to:


        </p>

        <ul class="list-disc list-inside mb-4 text-justify text-md md:text-lg">
            <li>Provide accurate, current, and complete information during the registration process.</li>
<li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
<li>Notify us immediately if you suspect any unauthorized use of your account.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2 text-violet-400"> User Conduct</h2>

        <p class="mb-4 text-justify text-md md:text-lg">
        You agree not to use GYMBROS for any unlawful or prohibited activities, including but not limited to:
        </p>

        <ul class="list-disc list-inside mb-4 text-justify text-md md:text-lg">
            <li>Posting or transmitting any content that is defamatory, obscene, abusive, or otherwise objectionable.</li>
            <li>Interfering with or disrupting the operation of GYMBROS or its servers.</li>
          
        </ul>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Privacy</h2>

        <p class="mb-4 text-justify text-md md:text-lg">
        Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using GYMBROS, you consent to our Privacy Policy.
        </p>

      


        <p class="mb-4 text-violet-400 text-center text-md md:text-lg">
        By using GYMBROS, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
        </p>
    </div>
    <Footer/>
</div>
  )
}

export default TandC
