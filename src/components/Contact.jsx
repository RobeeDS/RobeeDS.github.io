import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='font-poppins font-normal flex flex-1 justify-center contact-card rounded-[50px]'>
      <container className={`m-6`}>
        <form action='https://send.pageclip.co/ZHvMZSYcBnzvTOkNnWViIJjQRMKksyTc/contact-form' method='post' className=''>
          <div className='flex flex-row xxs:flex-wrap md:flex-nowrap'>
            {/* Left */}
            <div className='text-white flex flex-1 flex-col p-6 md:min-w-[50%]'>
              <p className='xxs:text-[30px] lg:text-[54px] font-semibold'>Let's Talk</p>
              <p className='xxs:text-[16px] md:text-[24px]'>Are you ready to bring your website vision to life? Fill out the form below to get in touch with me, and let's discuss how we can elevate your online presence together.</p>
            </div>

            {/* Right */}
            <div className='text-white xxs:border-t-2 xxs:w-full md:border-t-0 md:border-l-2 flex flex-col p-6 md:min-w-[50%]'>
              <p className='text-white text-[18px] pt-2.5 pb-1'>Name</p>
              <input type='name' name='name' className='rounded-md p-1.5 bg-transparent border-[1px]' required />
              <p className='text-white text-[18px] pt-2.5 pb-1'>Email</p>
              <input type='email' name='email' className='rounded-md p-1.5 bg-transparent border-[1px]' required />
              <p className='text-white text-[18px] pt-2.5 pb-1'>Message</p>
              <input type='text' name='message' className='rounded-md p-1.5 pb-1 bg-transparent border-[1px]' required />
              <button className='bg-blue text-black px-4 py-2.5 mt-4 rounded-full max-w-[90px]'>Send</button>
            </div>
          </div>
        </form>
      </container>
    </div>
  )
}

export default Contact