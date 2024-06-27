import React from 'react'
import { FaBackward } from 'react-icons/fa6';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import logo from '../Assets/Images/gymbros.png'
import { ToastContainer, toast } from 'react-toastify';
const Payment = () => {
const user= JSON.parse(localStorage.getItem('user'))

  const razorPayment=()=>{
    var options = {
      "key": "", // Enter the Key ID generated from the Dashboard
      "amount": "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "GYMBROS", 
      "description": "Test Transaction",
      handler:function(response){
        alert(response.razorpay_payment_id);
      },
      "image": {logo},
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": user.displayName, //your customer's name
          "email": user.email,
          "contact":9790885637 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  }
    try{
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    
    }
    catch(err){
      console.log(err.message)
    }
  }
  const makeToast=()=>{
    toast.info('Coming Soon!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  


  return (
    <div className='px-10'>
    <div class="flex flex-col items-center border-b gap-2 py-4 sm:flex-row ">
        <a href='/pricing'> <IoMdArrowBack size={30} className=''/></a>
      
    <a href="#" class="text-3xl font-bold text-violet-400 font-['Futura']">GYMBROS</a>
    
  </div>
  <div class="grid xl:grid-cols-2 md:grid-cols-1 ">
    <div class="px-10 pt-8">
      <p class="text-2xl font-medium">Order Summary</p>
     {/* <p class="text-gray-400">Check your items. And select a suitable shipping method.</p> */}
      <div class="mt-14 space-y-3  border bg-gray-900 px-4 py-2 sm:px-6">
        <div class="flex flex-col rounded-lg bg-gray-900 sm:flex-row">
          <img class="m-2 h-24 w-28 rounded-md  object-cover object-center" src={logo} alt="logo" />
          <div class="flex w-full flex-col px-4 py-4 bg-gray-900">
            <span class="font-semibold bg-gray-900 text-2xl">GymBro PRO Plan</span>
            <p class=" mt-3 text-xl font-bold bg-gray-900">Rs.50  <span className='text-sm font-light'>/month</span></p>
          
          </div>
        </div>
      </div>
  
     
    </div>
    <div class="mt-10 px-4 pt-8 lg:mt-0 h-full">
        <div className=''>
        <p class="text-2xl font-medium bg-inherit">Payment Details</p>
      <p class="text-white bg-inherit">Complete your order by providing your payment details.</p>
        </div>
     
      <div class="bg-gray-900 mt-8 px-4 pt-2 pb-10 border">
        <label for="email" class="mt-4 mb-2 block text-sm font-medium bg-inherit">Email</label>
        <div class="relative">
          <input type="text" id="email" name="email" class="w-full rounded-md border bg-gray-900 border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-violet-400 focus:ring-violet-400" defaultValue={user.email} />
        </div>
        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium  bg-gray-900">Name</label>
        <div class="relative">
          <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 bg-gray-900 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-violet-400 focus:ring-violet-400" defaultValue={user.displayName}/>
          
        </div>
        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium  bg-gray-900" >Phone Number</label>
        <div class="">
          <div class="relative w-full flex-shrink-0">
            <input type="text" id="phone-no" name="phone-no" class="w-full rounded-md border  bg-gray-900 border-gray-200 px-2 py-3 bg-gray-900text-sm shadow-sm outline-none focus:z-10 focus:border-violet-400 focus:ring-violet-400" placeholder="Enter Phone No." />
          </div>
        
        </div>
       

        <div class="mt-6 border-t border-b py-2 bg-gray-900">
          <div class="flex items-center justify-between bg-gray-900">
            <p class="text-sm font-medium text-white bg-gray-900">Subtotal</p>
            <p class="font-semibold text-white bg-gray-900">Rs.50.00</p>
          </div>
          
        </div>
        <div class="mt-6 flex items-center justify-between bg-gray-900">
          <p class="text-sm font-medium text-white bg-gray-900">Total</p>
          <p class="text-2xl font-semibold text-white bg-gray-900">Rs.50.00</p>
        </div>
        <div className='flex items-center justify-center bg-transparent'>
      <a class="mt-4 w-fit rounded-full border border-violet-400 bg-violet-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-violet-400 hover:ring-1 hover:ring-violet-400 focus:outline-none focus:ring active:text-violet-400" onClick={makeToast} >
        Pay Now</a>
      </div>

      </div> 
    </div>
  </div>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  </div>
  )
}

export default Payment;
