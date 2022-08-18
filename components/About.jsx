import React from 'react'
import Link from 'next/Link'
import { BiChevronDown } from "react-icons/bi";


const About = ({subheading}) => {
  return (
    <div id='About' className='w-full text-center'>
      <div className='max-w-[1240px] w-full max-h-[70%] mx-auto p-4 justify-center items-center'>
        <div>
          <h1 className='italic trackding-widest text-xl'>
              Milking the Market
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'> 
          Milk Equity was founded in 2021 with the intention of giving its members a place to learn and practice valuable real-world skills around public security investment. As a Milk Equity member, you have the opportunity to pitch investments, get peer feedback, and practice equity valuation skills.
          </p>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          As a self-governed partnership, Milk Equity seeks to maximize returns against our market benchmark, the S&P500. All members have contributed investment capital, and all decisions are made with the best interest of all members. While real money is at stake, all members recognize mistakes may be made and that mistakes are part of the learning process.
          </p>
          <div className='flex items-center justify-center'>
            <p className='p-4 hover:text-gray-500'>
              <Link href='/#Investments'><BiChevronDown size={50}/></Link>
            </p>
          </div> 
        </div>
      </div>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover img_2'>
      </div>
    </div>
  )
}

export default About