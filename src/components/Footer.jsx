import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="border-gray-200" />
      <footer className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-8">
              <a href="https://www.facebook.com/sanket.banate.1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                <FaFacebook size={28} className="text-blue-600 hover:text-blue-700" />
              </a>
              <a href="https://www.instagram.com/sanket_banate/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                <FaInstagramSquare size={28} className="text-pink-600 hover:text-pink-700" />
              </a>
              <a href="https://www.linkedin.com/in/sanket-banate-60809b296/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                <FaLinkedin size={28} className="text-blue-600 hover:text-blue-700" />
              </a>
            </div>

            <div className="border-t border-gray-300 pt-8 flex flex-col items-center">
              <p className="text-gray-600 text-center">
                &copy; 2024 Sanket Banate. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer