import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='font-poppins font-normal flex flex-1 justify-center contact-card rounded-[50px]'>
      <container className={`m-6`}>
        <form action='https://send.pageclip.co/ZHvMZSYcBnzvTOkNnWViIJjQRMKksyTc' method='post' className=''>
          <div className='flex flex-row xxs:flex-wrap md:flex-nowrap'>
            {/* Left */}
            <div className='text-white flex flex-col p-6 md:min-w-[50%]'>
              <p className='xxs:text-[30px] lg:text-[54px] font-semibold'>Let's Talk</p>
              <p className='xxs:text-[16px] md:text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget.</p>
            </div>

            {/* Right */}
            <div className='text-white xxs:border-t-2 xxs:w-full md:border-t-0 md:border-l-2 flex flex-col p-6 md:min-w-[50%]'>
              <p className='text-white '>Name</p>
              <input className='text-black rounded-md' />
              <p className='text-white  pt-2'>Email</p>
              <input className='text-black rounded-md' />
              <button className='bg-blue text-black px-4 py-2.5 mt-2 rounded-full max-w-[90px]'>Submit</button>
            </div>
          </div>
        </form>
      </container>
    </div>
  )
}

export default Contact