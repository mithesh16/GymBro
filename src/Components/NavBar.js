import React, { useState } from 'react'
import usericon from '../Assets/Images/images.png'
import { FaSquareFacebook, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import { signOut } from 'firebase/auth';
const NavBar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: 'Home',link:'home' },
    { id: 2, text: 'Workouts',link:'workouts' },
    { id: 3, text: 'Activity',link: 'activity' },
    { id: 4, text: 'Team',link: 'team' },
  ];

  return (

    <nav className="flex items-center justify-between flex-wrap p-6 z-[1000]">
    <div className='flex items-center flex-shrink-0 text-white mr-10 '>
      <Link to='/home'>
        <span className="font-semibold text-4xl tracking-tight text-violet-400">GymBros</span>
      </Link>
    </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex  '>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 text-lg rounded-md m-2 cursor-pointer duration-300'
          >
            <a href={`/${item.link}`} className='p-2 hover:bg-violet-400 cursor-pointer duration-300 text-lg bg-tranparent rounded-md hover:text-black'>{item.text}</a>
          </li>
        ))}
      </ul>
      {!nav && (

  <div className={`hidden md:flex items-center justify-center text-sm px-3 py-1 leading-none border rounded-3xl text-white border-white lg:mt-0`}>
    {/* <img src={usericon} className='rounded-3xl w-9 h-9 mr-2 border-white'/>
    <p className='text-xl'>Mithesh</p> */}
    <button onClick={signOut}>SignOut</button>
  </div>

)}
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0  w-[75%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-300 z-[1000] '
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <div className='flex items-center flex-shrink-0 text-white  mt-7 ml-3 mb-5  bg-gray-900'>
      <Link to='/home'>
        <span className="font-semibold text-4xl tracking-tight text-violet-400  bg-gray-900">GymBros</span>
      </Link>
    </div>
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-5 border-1 border-black bg-gray-900 duration-300 cursor-pointer text-xl mt-3'
          >
           <a href={`/${item.link}`} className='w-full p-5 cursor-pointer  bg-gray-900 duration-300 text-xl rounded-md'>{item.text}</a>
          </li>
        ))}
         <div className='flex items-center justify-center text-sm py-1 leading-none border rounded-3xl mt-10 text-white border-white lg:mt-0 md:hidden '>
    <img src={usericon} className='rounded-3xl w-9 h-9 mr-2 border-white'/>
    <p className='text-xl'>Mithesh</p> 
  </div>
      </ul>
      


  </nav>
  
  )
}

export default NavBar
