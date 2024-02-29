import React from 'react'
import { topbar } from '../../Data'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
    <div className="bg-[#152347] w-full flex justify-center items-center">
        <div className="w-full p-vw max-w-[80vw]">
            {topbar?.map((item, index) => {
                return <main key={index} className="flex justify-between items-center">
                    <section className="flex items-center sm:mt-[1vw]">
                        <Link to={item?.path} className="flex items-center">
                        <span className='text-white text-3vw xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw]'>{item?.icon}</span>
                        <span className='text-white font-semibold text-2vw xl:text-[0.9vw] lg:text-[0.9vw] md:text-[0.9vw] ml-0.5vw'>{item?.phone}</span>
                        </Link>
                    </section>
                    <section className="justify-evenly items-center hidden xl:flex lg:flex md:flex">
                        {item?.links?.map((link, index2) => {
                            return <Link to={'/coming-soon'} key={index2}>
                            <span className='text-[#ffff] capitalize font-medium hover:underline ml-vw text-[1.6vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]'>{link?.title}</span>
                            </Link>
                        })}
                    </section>
                </main>
            })}
        </div>
    </div>
    </>
  )
}

export default Topbar