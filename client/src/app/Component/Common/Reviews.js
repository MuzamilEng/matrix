import React from 'react'

const Reviews = ({ratings, title, para, name}) => {
  return (
    <div>
        <main className="m-vw bg-white cursor-pointer p-2vw max-w-[50vw] xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw] w-full h-[35vw] xl:h-[24vw] lg:h-[24vw] md:h-[24vw]">
            <div className="">
           <section className="flex">
           <span className='text-yellow-400 text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>{ratings}</span>
            <span className='text-yellow-400 text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>{ratings}</span>
            <span className='text-yellow-400 text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>{ratings}</span>
            <span className='text-yellow-400 text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>{ratings}</span>
            <span className='text-yellow-400 text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>{ratings}</span>
           </section>
            <p className='text-black mt-0.5vw text-2vw xl:text-vw lg:text-vw md:text-vw '>{para}</p>
            <p className='mt-vw text-vw text-gray-400'>{name}</p>
            </div>
        </main>
    </div>
  )
}

export default Reviews