import React from 'react'
import { Icon } from '@iconify/react';

const Property = ({tag, icon, quantity, price, name, icon2, bed_rooms, img, img2, img3, img4, img5 }) => {

  return (
  <main className='w-full xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw] rounded-[2vw]'>
                <div className='w-full relative rounded-[2vw]'>
            <article className="relative w-full rounded-2vw">
                <section className='w-full'>
                <img src={img} alt={tag} className='w-full h-[50vw] rounded-t-[2vw] xl:h-[15vw] lg:h-[15vw] md:h-[15vw] object-cover' />
              </section>
                <section className='flex absolute bottom-0 right-0 items-center border-[1px] border-gray-300 bg-white p-vw'>
                    <Icon icon="ion:camera-outline" className='text-[2.5vw] xl:text-vw lg:text-vw md:text-vw' />
                    <span className='text-[2vw] xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw] ml-0.5vw text-black'>{quantity} pics</span>
                </section>
            </article>
            <section className='p-vw bg-white rounded-b-2vw'>
            <p className='text-[#152347] italic flex items-center text-[4vw] xl:text-[1.6vw] lg:text-[1.6vw] md:text-[1.6vw] font-medium'><Icon icon="bx:pound" className='text-[#152347] text-[4vw] xl:text-[1.6vw] lg:text-[1.6vw] md:text-[1.6vw] font-medium' />{price}</p>
                <p className='text-black text-[2.5vw] xl:text-vw lg:text-vw md:text-vw font-medium'>{name}</p>
                <div className="flex w-fit mt-2vw items-center p-vw rounded-md bg-[#152347]">
                    <Icon icon="uil:bed" className='text-[3vw] xl:text-vw lg:text-vw md:text-vw text-white' />
                    <span className='text-white ml-0.5vw text-[2.5vw] xl:text-vw lg:text-vw md:text-vw'>{bed_rooms} bedrooms</span>
                </div>
                <section className="flex items-center mt-2vw">
                    <span className='text-[#152347] text-[2.5vw] xl:text-vw lg:text-vw md:text-vw'>More details</span>
                    <Icon icon="tdesign:arrow-right" className='text-[1.2vw] xl:text-vw lg:text-vw md:text-vw text-[#152347]'/>
                </section>
            </section>
                </div>
        </main>
  )
}

export default Property