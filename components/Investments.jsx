import React from 'react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Link from 'next/Link'

const Investments = ({subheading}) => {
  return (
    <div id='Investments' className='w-full text-center'>
      <div className='max-w-[1240px] w-full max-h-[70%] mx-auto p-4 justify-center items-center'>
        <div>
          <h1 className='trackding-widest text-xl'>
              Investments
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'> 
          Milk Equity was created in 2021 to solidify, enhance, and broaden the financial base and long-term security of our members. Milk Equity uses advanced convoluted neural networks, machine learning, and supervised learning to determine our investment choices. These technologies are enabled by Milk Equities proprietary blockchain based data lakes that employ advanced random forest and deep learning methodologies. This groundbreaking work allows our firm to understand the market on a level never before seen, solidifying, enhancing, and broadening the financial base and security of our investors.
          </p>
          <div className='flex items-center justify-center'>
            <p className='p-4 hover:text-gray-500'>
              <Link href='/'><BiChevronUp size={50}/></Link>
            </p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Investments