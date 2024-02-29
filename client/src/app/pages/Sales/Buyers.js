import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { Buyer_nav, choosingArea, insvestmentProperty, localOrOnlineAgent, news, nextInvestment, properties } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import RentSection from '../../Component/BuyAndRent/RentSection'
import BuySection from '../../Component/BuyAndRent/BuySection'
import { Link } from 'react-router-dom'
import Card from '../../Component/Cards/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Property from '../../Component/PropertyDetails/Property'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import Reviews from '../../Component/Common/Reviews'
import RatingsContainer from '../../Component/RatingsContainer'
import News from '../../Component/Common/News'

const Buyers = () => {
  const [showRentSection, setShowRentSection] = useState(true);
    const settings = { arrows: true, slidesToShow: 4, slidesToScroll: 1, };

  return (
    <div>
      <Layout>
      <PageAddress main='Home' subCategory='Buyers' mainLink='/' />
            {/* buyers_nav */}
      <section className='w-full'>
        {Buyer_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-white'>
        <p className='text-[1.7vw] text-[#152347] font-semibold w-full max-w-[38vw]'>Looking to buy a new investment property? <br />
          <span className='text-[1.3vw] text-[#152347] font-light w-full max-w-[37vw]'>
          We’ll be with you every step of the way.</span></p>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
         At HOP, we have years of experience buying and selling HMOs and investment properties in Leeds and have
         indepth insight into the Leeds rental market. We can answer questions on pretty much anything you may come across during your buying process and are here to advise and help you with your purchase at every stage of the process.
         Plus, as HMO experts we know what you need to look out for when making a purchase
        </p>
      </article>
      {/* buy/sell section */}
      <section className='relative'>
          <div className="absolute flex left-[11.5vw] top-0">
            <p className={`${showRentSection ? 'bg-white' : 'bg-gray-200'} text-vw w-7vw cursor-pointer hover:bg-gray-200 p-vw text-center`} onClick={() => setShowRentSection(true)} > Rent</p>
            <p className={`${showRentSection ? 'bg-gray-200' : 'bg-white'} text-vw ml-0.3vw w-7vw hover:bg-white cursor-pointer p-vw text-center`} onClick={() => setShowRentSection(false)} >Buy </p>
          </div>
          </section>
          <article className='flex flex-col justify-center items-center w-full p-2vw bg-gray-200'>
            <div className="flex mt-[0.5vw] -ml-3vw justify-between items-start">
              {showRentSection ? <RentSection /> : <BuySection />}
              <section className='flex flex-col pt-2vw justify-end items-center mt-vw w-[35vw] ml-vw'>
                <h1 style={{lineHeight: '3vw'}} className="text-3vw text-[#152347] font-medium italic w-full text-right max-w-[20vw]">Start your investment journey here.</h1>
                <p className="text-[1.5vw] text-[#152347] w-full mt-vw text-right max-w-[20vw]">Search our available buy to let properties for sale.</p>
                <Link to="/" className="bg-pink-400 p-vw m-vw text-white font-medium text-[0.8vw] text-center">Learn more</Link>
              </section>
            </div>
          </article>
          {/* Why buy your investment property with us? */}
          <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-[#152347] text-[2.1vw] font-medium'>Why buy your investment property with us?</h1>
             {/* doings */}
             <div className="grid grid-cols-1 mt-2vw w-full">
            <Slider {...settings}>
              {insvestmentProperty?.map((item, index) => (
                <div key={index} className='w-full'>
                <Card para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
             </div>                          
              ))}
            </Slider>
          </div>
          </article>

          {/* investment properties */}
          <div className="w-full flex-col bg-white p-2vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.9vw] text-center font-medium capitalize text-medium'>Investment properties for Sale</h1>
            <div className="grid grid-cols-4 gap-3 mt-2vw">
              {properties?.map((item, index) => (
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.pics?.[0]?.quantity} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bed_rooms} img={item?.img} />
              ))}
            </div>
            <Link to="/" className="bg-[#152347] mt-2vw block p-vw m-vw text-white font-medium text-[0.8vw] text-center">Search all properties</Link>
          </div>
          {/* next investment */}
          <article className="w-full bg-gray-200">
        {nextInvestment?.map((item, index) => (
          <RightImageContainer  key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        {/* choosing right area */}
        <article className="w-full bg-gray-100">
        {choosingArea?.map((item, index) => (
          <LeftImageContainer  key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* local or online agent */}
      <article className="w-full bg-white">
        {localOrOnlineAgent?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* review container */}
      <article className="bg-gray-200">
        <RatingsContainer />
      </article>
        {/* news */}
        <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] font-medium  text-[1.8vw]'>You may also be interested in</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all investments news</Link>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Buyers

