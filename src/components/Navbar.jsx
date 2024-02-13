import { useState } from 'react'
import { brandLogo, close, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  {/* Setting Small Screen Menu Toggle */}
  const [toggle, setToggle] = useState(false);

  return (
    
    <nav className='w-full flex py-6 items-center text-dimWhite text-[16px] font-poppins font-normal tracking-wide'>

      {/* Brand Logo and Name */}
      <img src={brandLogo} alt='logo' className='w-[32px] h-[32px] ml-6' />
      <a className='px-2'>robeeds</a>

      {/* Importing Links */}
      <ul className='list-none sm:flex hidden justify-end flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className='cursor-pointer text-gray transition ease-in-out duration-700 hover:text-white mr-6'>
            <a href={`#${nav.id}`} className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 py-2.5 rounded-full' : ''}` }>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Sidebar */}
      <div className='z-[5] sm:hidden flex flex-1 justify-end items-center'>
        
        {/* Toggle on Click */}
        <img src={toggle ? close : menu} 
          alt="menu" 
          className="w-[32px] h-[32px] object-contain" 
          onClick={() => setToggle((prev) => !prev)}/>
        
        {/* Sidebar Display + NEED to add animation*/}
        <div className={`${toggle ? 'flex' : 'hidden'} absolute top-[60px] right-0 justify-end items-center flex-1 bg-black p-2.5 rounded-bl-[28px]`}>
          <ul className="list-none flex flex-col items-center">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`cursor-pointer py-2.5`}>
                <a href={`#${nav.id}`} className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 p-2.5 rounded-full' : ''}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar