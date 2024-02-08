import React from 'react'
import { brandLogo } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center'>

      {/*Importing Brand Logo*/}
      <img src={brandLogo} alt='logo' className='w-[32px] h-[32px] ml-6' />
      <a className='font-poppins text-regular tracking-wide text-dimWhite flex px-2 justify-start items-start'>robeeds</a>

      {/*Importing Links + need to add */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          
          <li key={nav.id} className='font-poppins text-regular tracking-wide cursor-pointer text-[15px] text-dimWhite mr-6'>
            <a href={`#${nav.id}`} className={`${index === 3 ? 'bg-blue text-black px-4 py-2.5 rounded-full' : ''}` }>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      
    </nav>
  )
}

export default Navbar