import React from 'react'

const Technologies = ({ lang, img }) => {
  return (
    <div>
        {/* Technologies */}
        <div className='flex flex-1 items-center p-6'>
            <p className='font-poppins font-semibold text-dimWhite tracking-wide mr-2 xxs:text-[30px] lg:text-[32px]'>{lang}</p>
            <img src={img} alt={lang} className='xxs:h-[30px] md:h-[60px] lg:h-[80px]'/>
        </div>
    </div>
  )
}

export default Technologies