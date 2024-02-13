import React from 'react'
import styles from '../style'

const Portfolio = () => {
  return (
    <div className='m-6 font-poppins'>

        {/* Title */}
        <div className=''>
            <p className='text-gray text-[24px]'>Case Studies</p>
            <p className='text-white text-[54px]'>Project Portfolio</p>
            <p className='text-gray text-[24px]'>More Coming Soon!</p>
        </div>

        {/* Project List */}
        <div className='grid grid-cols-1 pt-6'>
            
            {/* Row #1 */}
            <div className='grid grid-cols-2 gap-10'>

                {/* Image Preview */}
                <div className='min-w-[100px] bg-blue rounded-[38px] mr-6'>
                    <img className=''/>
                </div>

                {/* Project Description */}
                <div className='ml-6'>
                    <p>Project Name</p>
                    <p>Languages</p>
                    <p>Description</p>

                    {/* Button */}
                    <p className={`${styles.button} cursor-pointer`}>Visit</p>

                </div>

            </div>
        </div>
        

    </div>
  )
}

export default Portfolio