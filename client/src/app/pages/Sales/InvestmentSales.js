import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { assistedSales, bookSalesvaluation, news, offMarket, onMarket, positioning, salesExperience, salesStratergy, sellProperty, sellers_nav, underStandLeedsMarket } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import Card from '../../Component/Cards/Card'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import { Link } from 'react-router-dom'
import RatingsContainer from '../../Component/RatingsContainer'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import News from '../../Component/Common/News'

const InvestmentSales = () => {
  return (
    <div>
       <Layout>
            <PageAddress main='Home' subCategory='Investment Sales' mainLink='/' />
            {/* sellers_nav */}
            <section className='w-full'>
        {sellers_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-gray-200'>
        <p className='text-[1.7vw] text-[#152347] font-semibold w-full max-w-[38vw]'>Thinking of selling your investment property? <br />
          <span className='text-[1.3vw] text-[#152347] font-light w-full max-w-[37vw]'>Try our latest dedicated sales service for Landlords & Investors</span></p>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        If you have a buy-to-let portfolio or HMO property that you want to sell, then HOP is here to help. With many years of
         experience under our belts, we can ensure that the process of selling your investment goes as smoothly as possible,
          with minimal disruption for the tenants. With on and off market options, we’ll agree a sales strategy that is right for you.
        </p>
      </article>
      {/* why sell your insvestment property */}
      <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-[#152347] text-[2.1vw] font-medium'>Why sell your investment property with us?</h1>
             {/* doings */}
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {sellProperty?.map((item, index) => {
              return (
                <Card key={index} para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              )
            })}
            </div>
      </article>
      {/* sales stratergy */}
      <article className="w-full bg-white">
        {salesStratergy?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* experience */}
      <article className="w-full bg-white">
        {salesExperience?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="col-center p-3vw bg-white">
        <h1 className='text-[#152347] text-[2.1vw] font-medium'>Recently Sold Properties</h1>
        <Link to='' className='mt-2vw'>
        <button className='text-white bg-pink-300 text-vw rounded-sm p-0.5vw'>Instant Sales Valuation</button>
        </Link>
      </article>
      {/* banner */}
      <div className="w-full col-center bg-[#152347] p-8vw">
              <h1 className='text-white mt-vw text-[1.8vw] text-center font-medium w-full max-w-[45vw]'>Time to sell your investment? </h1>
             <p className='text-white text-vw text-center w-full max-w-[45vw]'> We’re seeing a huge appetite for investment properties across Leeds.</p>
             <p className='mt-vw'><Link to="tel:+44 123 456 789" className='text-vw text-white'>Call <span className="text-pink-500 hover:underline">+44 123 456 789</span> for more information or contact us for guidance</Link></p>
      </div>
      {/* onmarket */}
      <article className="w-full bg-white">
        {onMarket?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* offmarket */}
      <article className="w-full bg-white">
        {offMarket?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        {/* positioning */}
        <article className="w-full">
        {positioning?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        {/* valuation */}
        <article className="col-center p-3vw bg-[#152347]">
          <h1 className='text-white text-[2vw] font-medium'>Instant Sales Valuation</h1>
          <p className="text-vw text-center text-white w-full">For an instant sales (or rental) valuation of your property uses our clever instant online valuation tool.</p>
          <Link to='' className='mt-2vw'>
          <button className='text-white bg-pink-400 text-vw rounded-sm p-0.5vw'>Instant Valuation</button>
          </Link>
        </article>
        {/* assisted sales */}
        <article className="w-full bg-white">
        {assistedSales?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} url={item?.url} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full">
        {underStandLeedsMarket?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} bg_color={item?.bg_color} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* insvestment property */}
       <article className="col-center p-3vw bg-[#152347]">
        <h1 className='text-white text-[2vw] font-medium'>Selling an investment property?</h1>
        <p className="text-vw text-center text-white w-full max-w-[45vw]">
        We know the Leeds lettings market inside out and have a extensive network of current Landlords,
         Investors, developers and local agents on the look out for their next investment opportunity.
          We frequently negotiate sales with tenants in-situ and on a ‘off-market’ basis, saving all parties time,
           hassle and money.
        </p>
        <Link to='' className='mt-2vw'>
        <button className='text-white bg-pink-400 text-vw rounded-sm p-0.5vw'>Book Valuation</button>
        </Link>
      </article>
      {/* ratings */}
      <article className="w-full bg-white">
        <RatingsContainer />
      </article>
      {/* book sales valuation */}
      <article className="w-full">
        {bookSalesvaluation?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} btn_bg={item?.btn_bg} button={item?.button} btn_text={item?.btn_text} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* news */}
       <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.8vw]'>Investment News</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
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

export default InvestmentSales