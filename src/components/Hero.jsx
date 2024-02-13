import React from 'react'
import styles from '../style'
import { growth } from '../assets'

const Hero = () => {
  return (
    <div className={`font-poppins font-medium xxs:text-[46px] lg:text-[64px] xl:text-[80px] flex flex-1`}>

        <div className={`flex flex-1 md:flex-row flex-col w-full`}>

            {/* Heading */}
            <div className={`flex flex-1 flex-col justify-center mt-6 ml-6`}>
                <p className='z-[4] text-white'>INNOVATE. <br/> ITERATE.</p>
                <p className='z-[4] text-blue'>INTERFACE MASTERY.</p>
                <p className='z-[4] text-white xxs:text-[24px] lg:text-[32px]'> Websites for People with Purpose.</p>

                {/* Left Gradient */}
                <div className='absolute z-[0] w-[10%] h-[40%] -left-16 justify-center flex white__gradient'/>

            </div>
            
            {/* Growth Symbol */}
            <div className={`flex flex-1 ${styles.flexCenter} justify-end mr-6 relative`}>
                <img src={growth} alt='plant' className='w-[100%] h-[100%] z-[5]'/>

                {/* Hand Gradients */}
                <div className='absolute z-[1] w-[30%] h-[40%] top-24 left-32 green__gradient' />
                <div className='absolute z-[1] w-[30%] h-[40%] top-28 right-36 white__gradient' />
                <div className='absolute z-[0] w-[60%] h-[80%] left-32 bottom-36 blue__gradient'/>

            </div>

        </div>


    </div>
  )
}

export default Hero