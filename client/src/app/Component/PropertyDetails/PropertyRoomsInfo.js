import React, { useState } from 'react'
import SocialShare from '../SocialShare'
import { Icon } from '@iconify/react';
import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';

const Button = ({ text, textColor, bgColor, icon,onClick, url }) => (
  <Link to={url}>
    <div onClick={onClick} className={`flex justify-center w-[16vw] hover:shadow-lg shadow-md xl:w-[9vw] lg:w-[9vw] md:w-[9vw] m-0.5vw items-center rounded-[0.5vw] p-vw bg-${bgColor}`}>
      {icon && <Icon icon={icon} className={`text-${textColor} text-[2vw] hidden xl:text-vw lg:text-vw md:text-vw`} />}
      <span className={`text-${textColor} ml-0.5vw text-[2vw] font-medium xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]`}>{text}</span>
    </div>
  </Link>
  );
const PropertyRoomsInfo = ({ propertyURL, requestViewing, propertyType, price, propertyName, availableDate, furnished, bills, bedrooms, bathrooms, reception,monthPrice, weekPrice}) => {
    return (
    <section className='p-2vw pb-vw bg-white w-full xl:max-w-[32vw] lg:max-w-[32vw] md:max-w-[32vw] xl:ml-vw lg:ml-vw md:ml-vw'>
            <p className='text-black ml-vw font-medium text-[2vw] xl:text-[1.6vw] lg:text-[1.6vw] md-[1.6vw]'>{propertyName}</p>
            <p className='text-black ml-vw font-medium mt-[0.5vw] text-[1.7vw] xl:text-[1vw] lg:text-vw md:text-vw'>Available From: {availableDate}</p>
            <div className="flex justify-between items-center mx-[1vw]">
            <p className='text-[#152347] mt-0.5vw ml-vw italic flex items-center text-[2vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] font-medium'><Icon icon="bx:pound" className='text-[#152347] text-[4vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium' />{price || monthPrice + 'PCM'}</p>
            <p className='text-[#152347] mt-0.5vw ml-vw italic flex items-center text-[2vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] font-medium'><Icon icon="bx:pound" className='text-[#152347] text-[4vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-medium' />{price || weekPrice + 'PPW'}</p>

            </div>
   <section className="col-center mt-vw">
   <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 w-full items-start -gap-[2vw] ml-vw xl:-ml-2vw lg:-ml-2vw md:-ml-2vw">
    {bills && bills === 'Bills Included' && <Button text={bills} textColor="white" bgColor="yellow-600" icon="game-icons:light-bulb" />}
    {bedrooms && <Button text={`${bedrooms} bedrooms`} textColor="white" bgColor="yellow-600" icon="uil:bed" />}
    {bathrooms && <Button text={`${bathrooms} bathrooms`} textColor="white" bgColor="yellow-600" icon="majesticons:bath-shower-line" />}
    {reception && <Button text={`${reception} reception`} textColor="gray-800" bgColor="gray-300" icon="cil:sofa" />}
  {furnished && <Button text={furnished} textColor="gray-800" bgColor="gray-300" icon="mdi:sofa-single-outline" />}
  {propertyType && <Button text={propertyType} textColor="gray-800" bgColor="gray-300" icon="teenyicons:search-property-solid" />}
    </div>
   </section>
   <section className="col-center p-vw">
    <article className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 w-full items-start gap-2 xl:-ml-2vw lg:-ml-2vw md:-ml-2vw">
   <Link to={propertyURL} >
   <div className={`flex justify-center w-full hover:shadow-lg shadow-md xl:w-[13vw] lg:w-[12.5vw] md:w-[12.5vw] xl:m-vw lg:m-vw md:m-vw items-center rounded-[0.5vw] p-vw bg-[#152347]`}>
      <span className={`text-white ml-0.5vw text-[2vw] font-medium xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]`}>Property Details</span>
    </div>
   </Link>
    <Link to={requestViewing}>
    <div className={`flex justify-center w-full hover:shadow-lg shadow-md xl:w-[13vw] lg:w-[12.5vw] md:w-[12.5vw] xl:m-vw lg:m-vw md:m-vw items-center rounded-[0.5vw] p-vw bg-[#152347]`}>
      <span className={`text-white ml-0.5vw text-[2vw] font-medium xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw]`}>Request A Viewing</span>
    </div> 
    </Link>
    </article>
   </section>
</section>
  )
}

export default PropertyRoomsInfo