import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { findTenant, land_testimonial, landlord_nav, catagoryCard, letProperty,news, makingYourProperty, partnerBanner, rentalValue, landlordServices } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import Card from '../../Component/Cards/Card'
import Banner from '../../Component/Common/Banner'
import { Link } from 'react-router-dom'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import Testimonial from '../../Component/Common/Testimonial'
import RatingsContainer from '../../Component/RatingsContainer'
import Teams from "../../Component/Teams"
import News from '../../Component/Common/News'
import CatagoryCard from '../../Component/Cards/CatagoryCard'



const Landlord = () => {
  return (
    <div>
      <Layout>
      <PageAddress main="Home" mainLink="/" subLink="/landlords" category="Lettings" subCategory="Landlords" />
      <section className='w-full'>
        {landlord_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* info banner */}
      <div className="bg-gray-100 w-full flex justify-between items-start p-3vw">
        <h1 className='text-[#152347] text-[1.7vw] w-full max-w-[35vw] font-medium'>If you own high quality Student or Professional property across Leeds, we’d love to talk to you!</h1>
        <div className="w-full max-w-[45vw]">
        <p className='text-gray-600 text-vw mt-vw max-w-[40vw] font-medium w-full'>HOP is a fast growing and award-winning Letting Agent based in Leeds, offering high quality
         rental property to Students and Young Professionals.</p>
        <p className='text-gray-600 text-vw mt-vw max-w-[40vw] font-medium w-full'>With over a decade of experience in the Leeds lettings market, previously as Let Leeds
         and now as HOP, we offer a full 360° property service to make your life as a Landlord as hassle-free as possible, so you can put your feet up and relax knowing
          it’s all being taken care of.our innovative offering and winning strategies, we attract more Tenants. That means we let your property 5 days quicker than average,
           reducing your void periods and maximising your income.
           </p>
        </div>
      </div>
      {/* Why let your property with us? */}
        {/* services */}
        <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-[#152347] text-[2.1vw] font-medium'>Why let your property with us?</h1>
             {/* doings */}
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {letProperty?.map((item, index) => {
              return (
                <Card key={index} para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              )
            })}
            </div>
          </article>
            {/* banner */}
            <div className="w-full col-center bg-[#152347] p-8vw">
              <h1 className='text-white text-[2vw] text-center font-medium w-full max-w-[45vw]'>Call <Link to="tel:+44 123 456 789"><span className="text-pink-500 hover:underline">+44 123 456 789</span></Link> for more information or contact us for guidance</h1>
            </div>
{/* accommodation */}
      <article className="w-full bg-white">
        {findTenant?.map((item, index) => (
          <LeftImageContainer  key={index} bg_color={item?.bg_color} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* accommodation */}
      <article className="w-full bg-white">
        {makingYourProperty?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* banner */}
       <div className="w-full col-center bg-[#152347] p-8vw">
              <h1 className='text-white text-[2vw] text-center font-medium w-full max-w-[45vw]'>Refer a Friend</h1>
              <p className='text-white text-vw mt-vw max-w-[40vw] font-medium w-full text-center'>If you have a friend looking for someone to manage their property, why not refer them to HOP? Click for details of our 
             <Link to="tel:+44 123 456 789"><span className="text-pink-500 hover:underline"> Landlord Referral Scheme.</span></Link> </p> 
            </div>
            {/* partener banner */}
        <section className='row-center bg-white p-3vw'>
            <div className="flex justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img src={item?.img} alt={index} className='w-full ml-4vw max-w-[10vw]'/>
            ))}
            </div>
        </section>
        {/* testimonial */}
        <section className="w-full col-center bg-white p-3vw">
        <h1 className="text-[#152347] font-medium text-[1.9vw]">Tenant Links</h1>
        <div className="mt-vw grid grid-cols-3 gap-3">
          {land_testimonial?.map((item, index) => (
            <Testimonial key={index} img={item?.img} title={item?.title} url={item?.url} />
          ))}
        </div>
      </section>
{/* reviews */}
      <section className="w-full bg-white">
        <RatingsContainer />
      </section>
      {/* free valuation */}
      <article className="w-full bg-white">
        {rentalValue?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* services -landlord */}
      <article className="w-full bg-white">
        {landlordServices?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* teams */}
      <div className="w-full">
        <Teams />
      </div>

        {/* news */}
        <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.8vw]'>Student News</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all news</Link>
            </div>
          </div>
 {/* land - knowledge bank */}
 <div className="p-3vw bg-gray-200">
            <h1 className="text-[#152347] font-medium text-3vw text-center">Landlord Knowledge Bank</h1>
            <article className="col-center">
              <div className="grid grid-cols-4 gap-2">
                {catagoryCard?.map((card, index) => (
                  <CatagoryCard  key={index} title={card?.title} title2={card?.title2} bg={card?.bg} info={card?.info} featured={card?.featured} />
                ))}
              </div>
            </article>
          </div>
      </Layout>
    </div>
  )
}

export default Landlord