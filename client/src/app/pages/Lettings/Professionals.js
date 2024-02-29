import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Icon } from "@iconify/react";
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import RentSection from '../../Component/BuyAndRent/RentSection'
import BuySection from '../../Component/BuyAndRent/BuySection'
import { aBit, area_guide, families, lettingProperties, news, ourTeam, pr_banner, professionalCard, ratings, repair_report, teams, tenantNews, young_pr } from '../../Data'
import Banner from '../../Component/Common/Banner'
import LettingProperty from '../../Component/PropertyDetails/LettingProperty'
import { Link } from 'react-router-dom'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import Reviews from '../../Component/Common/Reviews'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import Process from '../../Component/Process';
import CatagoryCard from '../../Component/Cards/CatagoryCard';
import News from '../../Component/Common/News';
import { useGetAllLettingsQuery } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';

const Professionals = () => {
    const [showRentSection, setShowRentSection] = useState(true);
    const {salesProperties} = useGlobalContext();
  const {data:lettingsProperties} = useGetAllLettingsQuery()

  return (
    <div>
        <Layout>
            <PageAddress main="Home" mainLink="/" subLink="/professionals" category="Lettings" subCategory="Professionals" />
            <section className='w-full'>
                <ContentImage title={"Professional Letting Agents Leeds"} info={"Let’s find a home for you to love."} title_color={"text-[#152347]"} info_color={"text-[#152347]"} img={"/images/pr_hero.jpg"}/>
            </section>
            <section className='relative'>
          </section>
          {/* banner */}
          <section className='w-full'>
            {pr_banner?.map((item, index) => (
                <Banner key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} />
            ))}
          </section>
              {/* letting properties */}
          <div className="flex flex-col justify-center bg-gray-200 items-center w-full p-3vw">
            <h1 className='text-yellow-600 text-3vw xl:text-2vw lg:text-2vw md:text-2vw font-medium capitalize'>Latest Properties to Let</h1>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2 mt-2vw w-full">
              {lettingsProperties?.slice(0, 4)?.map((item, index) => (
               <Link to={`/details/${item?._id}`} className='w-full'>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.available} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                </Link> 
              ))}
            </div>
          </div>
          {/* A bit about HOP */}
          <article className="w-full">
            {aBit?.map((item, index) => (
                <LeftImageContainer key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} />
            ))}
          </article>
        {/* reviews */}
        <div className="slider-container pt-vw bg-gray-200">
            <h1 className='text-center text-[#152347] text-[1.9vw] text-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
          {/* A bit about HOP */}
          <article className="w-full">
            {families?.map((item, index) => (
                <LeftImageContainer key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} />
            ))}
          </article>
          {/* Rental for Young Professionals */}
          <article className="w-full">
            {young_pr?.map((item, index) => (
                <RightImageContainer key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} />
            ))}
          </article>
          {/* team */}
          <main className="w-full bg-white">
          {ourTeam?.slice(0, 3)?.map((item, index) => {
            return (
              <div className="flex slider-container justify-center items-center flex-col" key={index} >
                <h1 className="text-[#152347] text-center pt-3vw text-2vw text-semibold">  {item?.title}</h1>
                <p className="text-gary-400 text-center pt-0.5vw text-vw">  {item?.info} </p>
                <div className="flex slider mt-2vw w-full">
                  {item?.team?.map((person, index) => (
                    <section className="w-full max-w-[20vw] review-item" key={index} >
                      <img src={person?.img} alt={person?.name} className="w-full max-w-[15vw] h-15vw object-cover" />
                      <h1 className="text-[#152347] text-[1.5vw] text-semibold"> {person?.name} </h1>
                      <h4 className="text-gay-300 text-vw"> {person?.title} </h4>
                      <div className="flex items-center mt-vw">
                        <Link to="#" className="flex items-center">
                          <p className="text-[#152347] text-[0.9vw] font-normal"> View Profile </p>
                          <Icon icon="ep:arrow-right-bold" className="text-[#152347] text-[0.9vw] font-normal" />
                        </Link>
                      </div>
                    </section>
                  ))}
                </div>
                <Link
                  to="#"
                  className="flex justify-center pb-2vw mt-3vw items-center"
                >
                  <p className="text-white text-[0.9vw] p-vw text-center font-semibold bg-[#152347]">
                    Meet The Full Team
                  </p>
                </Link>
              </div>
            );
          })}
        </main>
        {/* area guide*/}
        <article className="w-full">
            {area_guide?.map((item, index) => (
                <RightImageContainer key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} />
            ))}
          </article>
          {/* report */}
          <article className="w-full">
            {repair_report?.map((item, index) => (
                <LeftImageContainer key={index} title={item?.title} info={item?.info} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} />
            ))}
          </article>
          {/* process */}
          <div className="section w-full flex justify-center items-center flex-col p-3vw">
            <h1 className="text-[#152347] font-medium text-[1.9vw]">Making Moving Simple – The Process</h1>
           <div className="mt-vw">
           <Process />
           </div>
        </div>
        {/* knowledge-bank */}
        <div className="p-3vw bg-gray-200 w-full">
            <h1 className="text-[#152347] font-medium text-3vw text-center">Professional Knowledge Bank</h1>
            <p className='text-vw text-center text-gray-900 mt-vw'>Can’t find what you’re looking for? <span className="text-pink-400 text-vw hover:underline cursor-pointer">Check our FAQ’s</span></p>
            <article className="col-center mt-2vw">
              <div className="grid grid-cols-4 gap-2">
                {professionalCard?.map((card, index) => (
                  <CatagoryCard  key={index} title={card?.title} title2={card?.title2} bg={card?.bg} info={card?.info} featured={card?.featured} />
                ))}
              </div>
            </article>
          </div>
             {/* news */}
             <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.8vw]'>Tenant News</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {tenantNews?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all news</Link>
            </div>
          </div>
        </Layout>
    </div>
  )
}

export default Professionals