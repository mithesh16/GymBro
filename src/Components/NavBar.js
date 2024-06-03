import React, { useState } from 'react'
import usericon from '../Assets/Images/images.png'
import { FaChevronUp, FaSquareFacebook, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebaseconfig'
import { FaChevronDown } from "react-icons/fa6";
const NavBar = () => {

  const user=JSON.parse(localStorage.getItem('user'));
  const navigation=useNavigate();
  const [nav, setNav] = useState(false);
  const [open,setOpen]=useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home',link:'home' },
    { id: 2, text: 'Workouts',link:'workouts' },
    { id: 3, text: 'Activity',link: 'activity' },
    {id:4 ,text:"Pricing",link:'pricing'},
    {id:5 ,text:"Team",link:'team'}

  ];

  const signOut=()=>{
    localStorage.removeItem('email');
    localStorage.removeItem('user')
    navigation('/')
  }

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
            <Link to={`/${item.link}`}>
            <p className='p-2 hover:bg-violet-400 cursor-pointer duration-300 text-lg bg-tranparent rounded-md hover:text-black'>{item.text}</p></Link>
          </li>
        ))}
      </ul>
      {!nav && (

  <div className={`hidden md:flex items-center justify-center text-sm px-3 py-1 leading-none border rounded-3xl text-white border-white lg:mt-0`}>
    <img src={user.photoURL} className='rounded-3xl w-9 h-9 mr-2 border-white'/>
    <p className='text-lg mr-2'>{user.displayName}</p>
    {open?(<button onClick={()=>setOpen(!open)}><FaChevronUp size={20}/></button>):(<button onClick={()=>setOpen(!open)}><FaChevronDown size={20}/></button>)}
   

    {open &&
    <div class="absolute top-20 right-8 z-10 mt-2 w-56 origin-top-right border border-black rounded-lg bg-gray-900 text-violet-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      {/* <button  class="text-gray-900 w-full block px-4 py-2 text-lg  bg-inherit rounded border border-black  " role="menuitem" tabindex="-1" id="menu-item-0">Profile</button> */}
      <button onClick={signOut} class="text-violet-400  w-full block px-4 py-2 text-lg  bg-inherit rounded border border-white mt-1" role="menuitem" tabindex="-1" id="menu-item-2">Log Out</button>
    </div>}
</div>




)}
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={30} style={{ fill: 'black', stroke: 'black', backgroundColor: 'white', borderRadius: '50%',padding:'3px' }} /> : <AiOutlineMenu size={30} />}
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
         <li
            className='px-5 border-1 border-black bg-gray-900 duration-300 cursor-pointer text-xl '
          >
           <button onClick={signOut}  className='w-full p-5 cursor-pointer bg-gray-900 duration-300 text-xl rounded-md text-left'>Sign Out</button>

          </li>
        <div className='flex items-center justify-center h-fit  bg-gray-900'>
        <div className=' inline-flex items-center justify-center text-sm py-2 px-4 leading-none border rounded-3xl mt-10 text-white border-white lg:mt-0 md:hidden w-fit max-w-[90%] flex-wrap'>
    <img src={user.photoURL} className='rounded-3xl w-9  h-9 mr-2 border-white'/>
    <p className='text-xl '>{user.displayName}</p> 
  </div>
        </div>
        
      </ul>
      


  </nav>
  
  )
}

export default NavBar
