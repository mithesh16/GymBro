import React from 'react'
import Footer from '../../Components/Footer'
const RefundPolicy = () => {
  return (

          <div class="">
    <div class="container mx-auto px-4 py-8">
        <div className='flex text-center items-center justify-center mb-4 mt-0'>
        <h1 class="text-3xl font-bold mb-4 text-violet-400">Refund Policy</h1>
        </div>
       

        <p class="mb-4 text-justify text-md md:text-lg">
        At GYMBROS, we strive to provide our users with the best possible experience. If you are not completely satisfied with our services, we offer a fair refund policy to ensure your satisfaction. Please read the following policy carefully to understand your rights and obligations regarding refunds.
        </p>

        <h2 class="text-2xl font-bold mb-2 text-violet-400">Eligiblity</h2>

        <p class="mb-4 text-justify text-md md:text-lg">
        Refunds are available for the following circumstances:


        </p>

        <ul class="list-disc list-inside mb-4 text-justify text-md md:text-lg ">
            <li className='my-2'>Technical Issues: If you experience technical issues that prevent you from using our services.
            </li ><li className='my-2'>Billing Errors: If you believe there has been a billing error, please contact us immediately. 
                </li>

        </ul>

        <p class="mb-4 text-justify text-md md:text-lg">
        Refunds will not be provided in the following situations:
        </p>

        <ul class="list-disc list-inside mb-4 text-justify text-md md:text-lg ">
            <li>Refunds are not available for subscription services</li>
          
        </ul>


        <p class="mb-4 text-violet-400 text-center text-md md:text-lg">
        GYMBROS reserves the right to modify this Refund Policy at any time.
        </p>
    </div>
    <Footer/>
</div>

  )
}

export default RefundPolicy
