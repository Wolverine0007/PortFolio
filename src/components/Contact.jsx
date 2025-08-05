import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post("https://getform.io/f/azyyedpb", userInfo);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.")
    }
  }
  return (
    <>
      <div name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 py-16 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-600">Let's work together! Fill out the form below to get in touch.</p>
          <span className="inline-block w-24 h-1 bg-purple-500 mx-auto mt-4"></span>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-md px-8 py-8 rounded-xl shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Send Your Message</h2>

            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow-sm rounded-lg appearance-none border border-gray-300 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name" />
              {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="shadow-sm rounded-lg appearance-none border border-gray-300 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address" />
              {errors.email && <span className="text-red-500 text-sm mt-1">Please enter a valid email address</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                {...register("message", { required: true, minLength: 10 })}
                className="shadow-sm rounded-lg appearance-none border border-gray-300 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here..." />
              {errors.message && <span className="text-red-500 text-sm mt-1">Message must be at least 10 characters long</span>}
            </div>

            <button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact