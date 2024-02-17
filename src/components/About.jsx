import { globe } from '../assets'

const About = () => {
  return (
    <div className={`w-full z-[4] px-6 flex flex-wrap-reverse lg:flex-nowrap`}>

        <div className='relative md:w-full lg:mr-10'>
          <container className='flex flex-1'>
              <div className='absolute w-[50%] h-[50%] flex top-[18%] left-[19%] white__gradient'></div>

              {/* Replace Globe with Portrait */}
              <img src={globe} alt='globe' className={`z-[5] md:w-full lg:mr-10`}/>
          </container>
        </div>
        
        
        

        {/* Description */}
        <div className={`z-[5] w-full self-center font-poppins text-white lg:min-h-[475px] lg:ml-10 lg:p-10 lg:border-l-2`}>
            <p className='font-semibold text-[50px] xxs:text-[32px] lg:text-[54px]'>Lorem Ipsum.</p>
            <p className='font-normal xs:text-[16px] md:text-[20px] lg:text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna nunc.</p>
        </div>
    </div>
    
  )
}

export default About