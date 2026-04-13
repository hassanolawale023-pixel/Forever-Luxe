import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to our story! We are a passionate team dedicated to providing the best products and services to our customers.
          </p>
          <p>
            Our journey began with a simple idea: to make quality products accessible to everyone. Over the years, we have grown and evolved, but our commitment to excellence remains unchanged.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            To deliver exceptional value and outstanding customer experience through innovation and quality.
          </p>
        </div> 
      </div>

      <div className='text-center text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border bg-black text-white px-10 md:px-16 mp-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-white'>We maintain the highest standards of quality in all our products and services.
          </p>
        </div>

         <div className='border px-10 md:px-16 mp-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you with any inquiries or issues you may have.
          </p>
        </div>

         <div className='border bg-black text-white px-10 md:px-16 mp-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-white'>Our user-friendly platform makes shopping easy and enjoyable for everyone.
          </p>
        </div>
      </div>

      <NewsLetterBox/>


      
    </div>
  )
}

export default About
