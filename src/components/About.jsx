import { globe } from '../assets'

const About = () => {
  return (
    <div className={`w-full px-6 flex flex-wrap-reverse lg:flex-nowrap`}>

        {/* Replace Globe with Portrait */}
        <img src={globe} alt='globe' className={`md:w-full`}/>

        {/* Description */}
        <div className={`font-poppins text-white px-20`}>
            <p className='text-[54px]'>I'm Robee D.</p>
            <p className='font-normal text-[24px]'>I’m RobeeDS, a freelance college student with a passion for UI/UX development.
Specializing in crafting captivating digital  experiences, I’m your go-to person for all things creative and tech-savvy.</p>
        </div>
    </div>
    
  )
}

export default About