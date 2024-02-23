import { globe } from '../assets'

const About = () => {
  return (
    <div className={`w-full z-[4] px-6 flex flex-wrap-reverse md:flex-nowrap`}>

        <div className='relative md:w-full md:mr-10'>
          <container className='flex flex-1 lg:min-w-[50vw]'>
              <div className='absolute w-[50%] h-[50%] flex top-[18%] left-[19%] white__gradient'></div>

              {/* Replace Globe with Portrait */}
              <img src={globe} alt='globe' className={`z-[5] md:w-full md:mr-10`}/>
          </container>
        </div>
        
        {/* Description */}
        <div className={`z-[5] w-full self-center font-poppins text-white lg:min-w-[400px] md:ml-10 md:p-10 md:border-l-2`}>
            <p className='font-semibold text-[50px] xxs:text-[32px] lg:text-[54px]'>I'm Robee D.</p>
            <p className='font-normal xs:text-[16px] md:text-[20px] lg:text-[24px]'>I’m Robee, a freelance college student with a passion for UI/UX development. Specializing in crafting captivating digital  experiences, I’m your go-to person for all things creative and tech-savvy.</p>
        </div>
    </div>
    
  )
}

export default About