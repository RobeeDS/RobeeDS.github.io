import React from 'react'

const Technologies = ({ lang, img }) => {
  return (
    <div>
        {/* Technologies */}
        <div className='flex flex-1 justify-center items-center p-6'>
            <p className='font-poppins font-semibold text-dimWhite tracking-wide mr-2 xxs:text-[30px] lg:text-[60px]'>{lang}</p>
            <img src={img} alt={lang} className='xxs:h-[60px] md:h-[80px] lg:h-[100px]'/>
        </div>
    </div>
  )
}

export default Technologies