import React from 'react'
import TechnologyCard from './TechnologyCard'
import { techInfo } from '../constants'

const Technologies = () => {
  return (
    <div className='w-full'>
        {/* Technologies */}
        <div className='w-full text-dimWhite font-poppins font-semibold tracking-wide text-center xxs:text-[36px] lg:text-[54px]'>TECHNOLOGIES</div>
        <div className='flex xxs:flex-wrap justify-evenly'>
            {techInfo.map((index) => 
                <TechnologyCard key={index.id} {...index} />
            )}
        </div>
    </div>
  )
}

export default Technologies