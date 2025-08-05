import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import cpp from "../../public/cpp.png"
import python from "../../public/python.webp"

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
            experience: "1+ years"
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
            experience: "1+ years"
        },
        {
            id: 3,
            logo: java,
            name: "Java",
            experience: "1+ years"
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript",
            experience: "1+ years"
        },
        {
            id: 5,
            logo: cpp,
            name: "C++",
            experience: "1+ years"
        },
        {
            id: 6,
            logo: python,
            name: "Python",
            experience: "1+ years"
        }
    ]

    return (
        <div name="Experience"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 py-16 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl">
            <div>
                <h1 className="text-4xl font-bold mb-2 text-center">Experience</h1>
                <p className="text-gray-600 text-center mb-8">Technologies I've worked with for over 1 year</p>
                <span className="inline-block w-24 h-1 bg-green-500 mx-auto mb-8"></span>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-8">
                    {cardItem.map(({ id, logo, name, experience }) => (
                        <div 
                            className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 group flex flex-col items-center" 
                            key={id}
                        >
                            <div className="w-16 h-16 mb-4 p-2 rounded-full bg-gray-100 group-hover:bg-green-100 transition-colors duration-300">
                                <img 
                                    src={logo} 
                                    className="w-full h-full object-contain rounded-full" 
                                    alt={name} 
                                />
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-gray-800 text-center">{name}</h3>
                            <p className="text-green-600 text-sm font-medium">{experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience