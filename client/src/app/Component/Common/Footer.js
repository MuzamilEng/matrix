import React from 'react'
import { footer } from '../../Data'
import { Link } from 'react-router-dom'
import Chat from '../Chat/Chat'

const Footer = () => {
  return (
    <div className=''>
    <footer className="w-full bg-white flex justify-center items-center p-3vw">
      <main className='border-t-[1.7px] w-full max-w-[80vw] p-2vw border-[#152347]'>
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 items-start">
          {footer?.map((item, index)=> {
            return <section className={`${item?.title ? 'w-28vw xl:w-[18vw] lg:w-[18vw] md:w-[18vw]' : 'w-35vw xl:w-[25vw] lg:w-[25vw] md:w-[25vw]'}`} key={index}>
              <h1 className='text-[#152347] font-semibold text-[2vw] xl:text-[1.2vw]  lg:text-[1.2vw]  md:text-[1.2vw] '>{item?.title}</h1>
              <img src={item?.logo} alt="" />
              <div className="">
                {item?.Links?.map((link, index)=> (
                  <main className='' key={index}>
                    <Link to={link?.url} target='_blank' className='flex mt-0.3vw hover:underline items-start'>
                      <span className='text-[2vw] xl:text-[1.3vw]  mt-0.2vw  lg:text-[1.3vw]  md:text-[1.3vw] text-[#152347]'>{link?.icon}</span>
                      <span className={`text-[2vw] xl:text-[1vw] lg:text-[1vw]  md:text-[1vw] font-medium ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
                <h1 className='text-[#152347] font-medium mt-vw text-[1.2vw]'>{item?.find}</h1>
                {item?.social?.map((link, index)=> (
                  <main className='' key={index}>
                    <Link to={link?.url} target='_blank' className='flex mt-0.3vw hover:underline items-center'>
                      <span className='text-[2vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] font-medium text-[#152347]'>{link?.icon}</span>
                      <span className={`text-[2vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] font-medium ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
              </div>
            </section>
          })}
        </div>
      </main>
    </footer>
        <div className="w-full flex justify-between items-center p-vw bg-[#152347]">
          <p className='text-[2vw] xl:text-[1vw]  lg:text-[1vw]  md:text-[1vw] text-white'>© Danhamz Ltd trading 2022 All Rights Reserved</p>
        </div>
        <div className="absolute1">
        </div>
    </div>
  )
}

export default Footer