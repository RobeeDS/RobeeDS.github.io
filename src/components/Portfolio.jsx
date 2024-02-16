import React from 'react'
import styles from '../style'
import { projectInfo } from '../constants'
import ProjectCard from './ProjectCard'

const Portfolio = () => {
  return (
    <div className='w-full'>

        {/* Project List */}
        <div>

            {/* Title */}
            <div className='font-poppins m-6'>
                <p className='text-gray text-[24px]'>Case Studies</p>
                <p className='text-white text-[54px]'>Project Portfolio</p>
                <p className='text-gray text-[24px]'>More Coming Soon!</p>
            </div>
            
            {/* Project Section */}
            <div className=''>

                {/* Right Gradient */}
                <div className='absolute z-[0] w-[5%] h-[60%] right-0 justify-center flex white__gradient'/>

                {/* Project Cards */}
                <div>
                    {projectInfo.map((card) => 
                        <ProjectCard key={card.id} {...card} />
                    )}
                </div>

                {/* Left White Gradient */}
                <div className='absolute z-[1] w-[5%] h-[40%] -left-0 -bottom-[230%] justify-center flex white__gradient'/>

                {/* Left Green Gradient */}
                <div className='absolute z-[1] w-[5%] h-[40%] -left-0 -bottom-[250%] justify-center flex green__gradient'/>
                
            </div>
        </div>
        

    </div>
  )
}

export default Portfolio