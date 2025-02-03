import React from 'react'
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Copyright, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1F2C] border-t border-white/10 py-12">
    <div className="container bg-[#1A1F2C] mx-auto px-4">
      <div className="grid bg-[#1A1F2C] grid-cols-1 md:grid-cols-4 gap-8">

        <div className="space-y-4 bg-[#1A1F2C]">
          <h3 className="text-2xl font-bold text-violet-400 bg-transparent">GymBros</h3>
          <p className="text-gray-400 bg-transparent">Track your fitness journey with precision and purpose.</p>
        </div>


        <div className="space-y-4 bg-transparent">
          <h4 className="text-lg font-semibold text-white bg-transparent">Quick Links</h4>
          <ul className="space-y-2 bg-transparent">
            <li className='bg-transparent'><Link to="/" className="text-gray-400 hover:text-primary transition-colors bg-transparent">Home</Link></li>
            <li className='bg-transparent'><Link to="/workouts" className="text-gray-400 hover:text-primary transition-colors bg-transparent">Workouts</Link></li>
            <li className='bg-transparent'><Link to="/activity" className="text-gray-400 hover:text-primary transition-colors bg-transparent">Activity</Link></li>
          </ul>
        </div>


        <div className="space-y-4 bg-transparent">
          <h4 className="text-lg font-semibold text-white bg-transparent">Contact</h4>
          <ul className="space-y-2 bg-transparent">
            <li className="text-gray-400 bg-transparent">mitheshsrini@gmail.com</li>
          </ul>
        </div>


        <div className="space-y-4 bg-transparent">
          <h4 className="text-lg font-semibold text-white bg-transparent">Follow Us</h4>
          <div className="flex space-x-4 bg-transparent">
            <a href="https://github.com/mithesh16" target="_blank" rel="noopener noreferrer" className="bg-transparent text-gray-400 hover:text-primary transition-colors">
              <Github className="w-6 h-6 bg-transparent" />
            </a>
            <a href="https://linkedin.com/in/mithesh-srinivasan" target="_blank" rel="noopener noreferrer" className="bg-transparent text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6 bg-transparent" />
            </a>
            <a href="https://www.instagram.com/_.mithesh._/" target="_blank" rel="noopener noreferrer" className="bg-transparent text-gray-400 hover:text-primary transition-colors">
              <Instagram className="w-6 h-6 bg-transparent" />
            </a>
          </div>
        </div>
      </div>


      <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center bg-transparent text-gray-400 text-sm">
        <Copyright className="w-4 h-4 mr-2 bg-transparent" /> 
        <p className='bg-transparent'>2024 GymBros. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
};
export default Footer
