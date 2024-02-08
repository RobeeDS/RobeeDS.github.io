import { useState } from 'react'
import { brandLogo, exitIcon, menuIcon } from '../assets'
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
            <a href={`#${nav.id}`} className={`${index === navLinks.length - 1 ? 'bg-blue text-black px-4 py-2.5 rounded-full transition' : ''}` }>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Small Screen Menu */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        
        {/* Toggle on Click */}
        <img src={toggle ? exitIcon : menuIcon} 
          alt="menu" 
          className="w-[32px] h-[32px] object-contain" 
          onClick={() => setToggle((prev) => !prev)}/>
        
        {/* Sidebar Display */}
        <div className={`${toggle ? 'flex' : 'hidden'}`}>

        </div>
          
          
      </div>

    </nav>
  )
}

export default Navbar