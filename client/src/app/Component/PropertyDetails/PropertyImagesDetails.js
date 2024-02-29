import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = ({image1, image2, image3, image4}) =>{
  return (
    <div className="flex w-full">
      <section className="w-full max-w-[40vw] xl:max-w-[40vw] lg:max-w-[40vw] md:max-w-[40vw]">
      <img src={image1} alt={'slide'} className="w-full rounded-sm object-cover h-[40vw] xl:h-[28.5vw] lg:h-[28.5vw] md:h-[28.5vw] " loading="lazy" />
      </section>
      <section className='w-full flex flex-col max-w-[12vw]'>
        <img src={image2} alt={'slide'} className="w-full rounded-sm h-[13.3vw] xl:h-[9.3vw] lg:h-[9.3vw] md:h-[9.3vw] object-cover m-[0.1vw]" loading="lazy" />
        <img src={image3} alt={'slide'} className="w-full rounded-sm h-[13.3vw] xl:h-[9.3vw] lg:h-[9.3vw] md:h-[9.3vw] object-cover m-[0.1vw]" loading="lazy" />
        <img src={image4} alt={'slide'} className="w-full rounded-sm h-[13.3vw] xl:h-[9.3vw] lg:h-[9.3vw] md:h-[9.3vw] object-cover m-[0.1vw]" loading="lazy" />
      </section>
    </div>
  )
}
const PropertyImagesDetails = ({img1, img2, img3, img4, img5, img6, img7, img8, img9, img10}) => {
    const CustomPrevArrow = (props) => (
        <span {...props} className="text-vw text-black absolute cursor-pointer bottom-0 left-1 z-50">
        <FontAwesomeIcon icon={faArrowLeft} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-black  rounded-[0.5vw] hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
      </span>);
      const CustomNextArrow = (props) => (
          <span {...props} className="text-vw text-black absolute cursor-pointer  bottom-0 left-[5.5vw] xl:left-[3.1vw] lg:left-[3.1vw] md:left-[3.1vw]">
        <FontAwesomeIcon icon={faArrowRight} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-red-800 rounded-[0.5vw] hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
      </span> );

const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, };

  return (
    <section className='w-full max-w-[55vw] xl:max-w-[60vw] lg:max-w-[60vw] md:max-w-[60vw]'>
    <Slider {...settings} className='w-full'>
      <Images image1={img1} image2={img2} image3={img3} image4={img4} />
      <Images image1={img4} image2={img5} image3={img6} image4={img1} />
      <Images image1={img7} image2={img8} image3={img9} image4={img2} />
      <Images image1={img10} image2={img1} image3={img7} image4={img3} />
    </Slider>
  </section>
  )
}

export default PropertyImagesDetails