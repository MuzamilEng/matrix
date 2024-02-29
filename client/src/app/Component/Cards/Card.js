import React from 'react'
import { Icon } from "@iconify/react";


const Card = ({title, info, para, question, desc, number, img, height}) => {
  return (
    <>
                <section className={`bg-[#fff] m-vw border-t-[3px] border-[#152347] p-vw w-full xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw] ${img && height ? 'h-[45vw]': 'h-[63vw] xl:h-[30vw] lg:h-[30vw] md:h-[30vw]'}`}>
                { number &&  <h1 className='w-full row-center max-w-[15vw] h-[10vw] m-vw bg-[#152347] text-center text-yellow-500 text-[4vw] xl:text-2vw lg:text-2vw md:text-2vw  font-medium'>{number}</h1>}
                {img && <img src={img} alt="rememter" loading='lazy' className="w-full object-cover xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw] h-[30vw] xl:h-[10vw] lg:h-[10vw] md:[10vw] -ml-vw m-vw xl:ml-2vw lg:ml-2vw md:ml-2vw" />}
                   <h1 className="text-[#152347] ml-vw text-[3.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium">{title}</h1>
                  <p className="text-gray-500 font-medium text-[2.5vw] xl:text-vw lg:text-vw md:text-vw w-full mt-vw max-w-[70vw] xl:max-w-[17vw] lg:max-w-[17vw] md:max-w-[17vw]">{info}</p>
                  <p className="text-gray-900 text-[2.5vw] xl:text-vw lg:text-vw md:text-vw w-full ml-vw mt-vw max-w-[70vw] xl:max-w-[17vw] lg:max-w-[17vw] md:max-w-[17vw]">{para}</p>
                  <p className="text-pink-300 text-[2.5vw] xl:text-vw lg:text-vw md:text-vw font-semibold mt-vw w-full max-w-[70vw] xl:max-w-[17vw] lg:max-w-[17vw] md:max-w-[17vw]">{question}</p>
                  <div className="flex items-start mt-vw">
                    {desc && <Icon icon="mdi:tick" className="text-[2.5vw] xl:text-vw lg:text-vw md:text-vw font-semibold text-blue-800" />}
                    <p className="text-gray-900 text-[2.5vw] xl:text-vw lg:text-vw md:text-vw w-full ml-vw max-w-[70vw] xl:max-w-[17vw] lg:max-w-[17vw] md:max-w-[17vw]">{desc}</p>
                  </div>
                </section>
        </>
  )
}

export default Card


