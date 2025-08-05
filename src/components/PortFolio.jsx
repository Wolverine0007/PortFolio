import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"

function PortFolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB",
            description: "NoSQL database for modern applications"
        },
        {
            id: 2,
            logo: express,
            name: "Express",
            description: "Fast, unopinionated web framework"
        },
        {
            id: 3,
            logo: reactjs,
            name: "ReactJS",
            description: "JavaScript library for building UIs"
        },
        {
            id: 4,
            logo: nodejs,
            name: "NodeJS",
            description: "JavaScript runtime environment"
        },
        {
            id: 5,
            logo: python,
            name: "Python",
            description: "Versatile programming language"
        },
        {
            id: 6,
            logo: java,
            name: "Java",
            description: "Object-oriented programming language"
        }
    ]

  return (
    <div name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
<div>
                <h1 className="text-4xl font-bold mb-2 text-center">Portfolio</h1>
                <p className="text-gray-600 text-center mb-8">Featured Projects & Technologies</p>
                <span className="inline-block w-24 h-1 bg-blue-500 mx-auto mb-8"></span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    {cardItem.map(({ id, logo, name, description }) => (
                        <div 
                            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 group" 
                            key={id}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 mb-4 p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300">
                                    <img 
                                        src={logo} 
                                        className="w-full h-full object-contain rounded-full" 
                                        alt={name} 
                                    />
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{description}</p>
                                
                                <div className="flex space-x-3 w-full">
                                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                                        View Project
                                    </button>
                                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                                        Source Code
                                    </button>
        </div>
            </div>       
         </div>
                    ))}
</div>
</div>
  </div>
  )
}

export default PortFolio