import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll"

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Contact"
    }
  ]

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-3 items-center">
            <img src="Sanket.png" className="h-12 w-12 rounded-full border-2 border-blue-500" alt="Sanket" />
            <div>
              <h1 className="font-bold text-xl cursor-pointer text-gray-800">
                Sank<span className="text-blue-500 text-2xl">et</span>
              </h1>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>

          {/* Desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-blue-500 font-semibold"
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseOutline size={24} className="text-gray-700" /> : <AiOutlineMenu size={24} className="text-gray-700" />}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-blue-500"
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar