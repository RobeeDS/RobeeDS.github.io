import React from 'react'

const ProjectCard = ({ title, num, langs, content, img, link }) => {
  return (
    <div className={`w-full z-[5] flex xxs:flex-wrap md:flex-nowrap md:m-6 md:p-6 ${num % 2 === 0 ? 'md:flex-row-reverse' : ''} `}>
        
        {/* Image */}
        <img src={img} alt='testing' className='z-[5] md:max-w-[55%] rounded-[38px]'/>

        {/* Project Description */}
        <div className='z-[5] font-poppins m-6 justify-center'>
            <p className='font-medium text-white xxs:text-3xl md:text-4xl'>{title}</p>
            <p className='text-gray text-[18px]'>{langs}</p>
            <p className='text-gray text-[14px]'>{content}</p>

            {/* Button */}
            <div className='z-[5] cursor-pointer bg-blue text-black mt-2 px-4 py-2.5 rounded-full max-w-[75px] text-center'>
                <a href={link} target='blank'>Visit</a>
            </div>
            

        </div>
    </div>
  )
}

export default ProjectCard