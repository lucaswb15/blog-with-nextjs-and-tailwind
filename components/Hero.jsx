import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import Link from 'next/Link'



const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/*Overlay */}
        <div className='absolute  top-0 left-0 right-0 bottom-0 bg-black/5 z-[2]'/>
        <div className='p-5 text-black z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
         <div className='flex items-center justify-center'>
            <p className='p-4 hover:text-gray-500'>
              <Link href='/#About'><BiChevronDown size={50}/></Link>
            </p>
          </div>   
        </div>
    </div>
  )
}

export default Hero