import React from 'react';
import { Icon } from '@iconify/react';

const Button = ({ text, textColor, bgColor, icon }) => (
  <div className={`flex justify-center w-[20vw] xl:w-[9vw] lg:w-[9vw] md:w-[9vw] m-vw items-center rounded-md p-vw bg-${bgColor}`}>
    {icon && <Icon icon={icon} className={`text-${textColor} text-[3vw] xl:text-vw lg:text-vw md:text-vw`} />}
    <span className={`text-${textColor} ml-0.5vw text-[2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]`}>{text}</span>
  </div>
);

const LettingProperty = ({ tag, sharedHouse, weekPrice, location, monthPrice, bedRooms, img, available, furnished, bills, date, price }) => (
  <div className='w-full xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw]'>
    <main className='w-full rounded-[2vw] bg-white'>
      <article className="relative w-full">
        {sharedHouse && <div className="absolute top-0 left-0 bg-yellow-600 w-full p-[3vw] xl:p-[1.5vw] lg:p-[1.5vw] md:p-[1.5vw] max-w-[20vw] xl:max-w-[8vw] lg:max-w-[8vw] md:max-w-[8vw] rounded-tl-[2vw] rounded-br-[3vw]">
          <p className='text-white w-fit text-[1.5vw] xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw]'>Share House</p>
        </div>}
        <img src={img} alt={tag} className='w-full h-[50vw] rounded-t-[2vw] xl:h-[15vw] lg:h-[15vw] md:h-[15vw] object-cover' />
      </article>
      <div className="flex items-center justify-between p-0.5vw">
        <p className='text-black w-full xl:max-w-[8vw] lg:max-w-[8vw] ml-vw font-medium text-[2.5vw] xl:text-[0.9vw] lg:text-[0.9vw] md:text-[0.9vw]'>{location}</p>
        <div className="flex w-[20vw] justify-center xl:w-[7vw] lg:w-[7vw] md:w-[7vw] m-vw items-center p-[0.5vw] bg-yellow-600 rounded-md">
          <span className='text-white text-[2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]'>{date}</span>
          <span className='text-white text-center ml-0.5vw text-[2vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]'>{available ? 'Available' : 'Not Available'}</span>
        </div>
      </div>
      <section className='p-2vw -mt-[1vw] xl:p-[0.5vw] lg:p-[0.5vw] md:p-[0.5vw]'>
        <div className="flex justify-between items-center mx-[0.5vw]">
        <p className='text-[#152347] mt-0.5vw ml-vw italic flex items-center text-[2vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] font-medium'><Icon icon="bx:pound" className='text-[#152347] text-[4vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium' />{monthPrice + 'PCM'}</p>
        <p className='text-[#152347] mt-0.5vw ml-vw italic flex items-center text-[2vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] font-medium'><Icon icon="bx:pound" className='text-[#152347] text-[4vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium' />{weekPrice + 'PPW'}</p>

        </div>
        <div className="grid grid-cols-2 items-start -ml-[0.7vw] w-full max-w-[50vw]">
          <Button text={furnished} textColor="white" bgColor="[#152347]" icon="mdi:sofa-single-outline" />
          {bills && bills === 'Bills Included' && <Button text={bills} textColor="white" bgColor="[#152347]" icon="game-icons:light-bulb" />}
          <Button text={`${bedRooms} bedrooms`} textColor="gray-800" bgColor="gray-300" icon="uil:bed" />
          <Button text={`${''} More Details`} textColor="gray-100" bgColor="yellow-600" icon="tdesign:arrow-right" />
        </div>
      </section>
    </main>
  </div>
);

export default LettingProperty;