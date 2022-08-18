import React, {useState} from 'react'
import Link from 'next/Link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='mr-4 flex justify-end items-center p-4 text-black'>
            <ul className='hidden sm:flex'>
                <li className='p-4 hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 hover:text-gray-500'>
                    <Link href='/#About'>About</Link>
                </li>
                <li className='p-4 hover:text-gray-500'>
                    <Link href='/#Investments'>Investments</Link>
                </li>
                <li className='p-4 hover:text-gray-500'>
                    <Link href='/posts'>Diligence</Link>
                </li>
            </ul>


         {/* Mobile Buttom */}
            <div onClick={handleNav} className='block sm:hidden z-10 text-black'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
         {/* Mobile Menu */}
            <div className= {
                nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black text-white'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black text-white'
                } 
                >
                <ul>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#Investments'>Investments</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/posts'>Diligence</Link>
                    </li>
                </ul>
            </div>           
        </div>
    </div>
  )
}

export default Navbar