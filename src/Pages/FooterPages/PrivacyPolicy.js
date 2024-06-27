import React from 'react'
import Footer from '../../Components/Footer'

const PrivacyPolicy = () => {
  return (
    <div class="">
    <div class="container mx-auto px-4 py-8">
        <div className='flex text-center items-center justify-center mb-4 mt-0'>
        <h1 class="text-3xl font-bold mb-4 text-violet-400">Privacy Policy</h1>
        </div>
       

        <p class="mb-4">
            This privacy policy sets out how our website uses and protects any information that you give us when you use
            this
            website.
        </p>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Information We Collect</h2>

        <p class="mb-4">
            We may collect the following information:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li>Your name and contact information</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">How We Use the Information</h2>

        <p class="mb-4">
            We require this information to understand your needs and provide you with a better service, and in
            particular
            for
            the following reasons:
        </p>

        <ul class="list-disc list-inside mb-4 ">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
          
        </ul>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Security</h2>

        <p class="mb-4">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or
            disclosure,
            we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the
            information we collect online.
        </p>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Cookies</h2>

        <p class="mb-4">
            A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree,
            the
            file
            is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site.
            Cookies
            allow
            web applications to respond to you as an individual. The web application can tailor its operations to your
            needs,
            likes, and dislikes by gathering and remembering information about your preferences.
        </p>

        <p class="mb-4 ">
            Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find
            useful
            and which you do not. A cookie in no way gives us access to your computer or any information about you,
            other
            than
            the data you choose to share with us.
        </p>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Links to Other Websites</h2>

        <p class="mb-4">
            Our website may contain links to other websites of interest. However, once you have used these links to
            leave
            our
            site, you should note that we do not have any control over that other website. Therefore, we cannot be
            responsible
            for the protection and privacy of any information which you provide whilst visiting such sites and such
            sites
            are
            not governed by this privacy statement. You should exercise caution and look at the privacy statement
            applicable
            to
            the website in question.
        </p>

       


        <p class="mb-4 text-violet-400">
            This privacy policy is subject to change without notice.
        </p>
    </div>
    <Footer/>
</div>
  )
}

export default PrivacyPolicy
