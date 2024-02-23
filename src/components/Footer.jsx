import React from 'react'
import { linkedinLogo, githubLogo } from '../assets'

const Footer = () => {
  return (
    <div className='w-full flex flex-1 md:flex-row flex-col p-6 border-t-[1px] font-poppins text-white text-[16px] tracking-wide bottom-0 items-center'>
        <div className='flex flex-1 xxs:pb-2 text-center md:justify-start'>
            <p>Copyright © RobeeDS 2024</p>
        </div>
        <div className='w-full flex flex-1 flex-row px-6 justify-center gap-3'>
            <a href='https://www.linkedin.com/in/robeeds/' target='blank'>
                <img src={linkedinLogo} alt='LinkedIn' className='max-h-[32px]'/>
            </a>
            <a href='https://www.github.com/robeeds/' target='blank'>
                <img src={githubLogo} alt='GitHub' className='max-h-[32px]'/>
            </a>
        </div>
        <div className='flex flex-1 xxs:pt-2 md:pt-0 cursor-pointer md:justify-end'>
            <a href='#nav'>Back to Top</a>
        </div>
    </div>
  )
}

export default Footer