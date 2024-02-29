import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import { auctionBenefits, auctionProcess, auction_nav, howItWorks, news, propertyAuction, stressFreeSale } from '../../Data'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import { Link } from 'react-router-dom'
import RatingsContainer from '../../Component/RatingsContainer'
import News from '../../Component/Common/News'

const Auction = () => {
  return (
    <div>
      <Layout>
      <PageAddress main='Home' category='Sellers' subCategory='Buyers' mainLink='/' />
            {/* auction_nav */}
      <section className='w-full'>
        {auction_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-white'>
          <span className='text-[1.3vw] text-[#152347] font-light w-full max-w-[37vw]'>
          Looking for a quick and simple way to sell your home? The modern method of auction could be the perfect solution.</span>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
         At HOP, we have years of experience buying and selling HMOs and investment properties in Leeds and have
         indepth insight into the Leeds rental market. We can answer questions on pretty much anything you may come across during your buying process and are here to advise and help you with your purchase at every stage of the process.
         Plus, as HMO experts we know what you need to look out for when making a purchase
        </p>
      </article>
       {/* property auction */}
       <article className="w-full bg-white">
        {propertyAuction?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* stress free sale */}
      <article className="w-full bg-gray-200">
        {stressFreeSale?.map((item, index) => (
          <ListInfoContainer2  key={index} lists={item?.lists} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="col-center p-3vw bg-[#152347]">
        <h1 className="text-[1.5vw] text-white font-medium text-center w-full max-w-[50vw]">To discuss selling your property at auction, speak to our friendly sales team on 0113 322 9533</h1>
        </div>
        {/* benefits */}
        <article className="w-full bg-white">
        {auctionBenefits?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* how it works */}
       <article className="w-full bg-gray-200">
        {howItWorks?.map((item, index) => (
          <ListInfoContainer2  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* benefits */}
      <article className="w-full bg-white">
        {auctionProcess?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
          {/* banner */}
          <div className="col-center p-3vw bg-[#152347]">
        <h1 className="text-[1.5vw] text-white font-medium text-center w-full max-w-[40vw]">
        Want to find out more about our auction services?
        Drop us a message and we’ll put you in touch with our auction partner.
      </h1>
      <Link to="" className="text-vw text-white font-medium bg-pink-400 text-center mt-2vw w-full p-vw max-w-[16vw]">Sell your property at auction</Link>
        </div>
        {/* reviews container */}
        <section className="w-full">
        <RatingsContainer />
        </section>
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

export default Auction