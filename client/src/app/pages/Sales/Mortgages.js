import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import { bestInterest, consultWithExpert, healthCheck, mortgageBroker, mortgage_nav, news } from '../../Data'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import { Link } from 'react-router-dom'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import RatingsContainer from '../../Component/RatingsContainer'
import News from '../../Component/Common/News'

const Mortgages = () => {
  return (
    <div>
      <Layout>
      <PageAddress main='Home' subCategory='Mortgages' mainLink='/' />
            {/* mortgage_nav */}
      <section className='w-full'>
        {mortgage_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-white'>
        <p className='text-[1.7vw] text-[#152347] font-semibold w-full max-w-[38vw]'>
          <span className='text-[1.3vw] text-[#152347] font-normal w-full max-w-[37vw]'>
          Take professional mortgage advice, to help you make your next move with confidence.</span></p>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        Whether you are a first time buyer, home owner, an experienced Investor or simply wanting to refinance, having the right mortgage advice can make all the difference. At HOP, we work closely with the UK’s leading independent mortgage and protection brokers, to give you the support you need.
        </p>
      </article>
       {/* mortgage broker */}
       <article className="w-full bg-gray-200">
        {mortgageBroker?.map((item, index) => (
          <RightImageContainer  key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* consult expert */}
       <article className="w-full bg-white">
        {consultWithExpert?.map((item, index) => (
          <LeftImageContainer  key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.6vw] font-medium text-center w-full max-w-[50vw]'>To arrange an appointment with our Mortgage Advisor, speak to our friendly team on 0113 322 9533 or drop us a message.</h1>
        <Link to='/contact' className='mt-2vw text-vw text-center p-0.5vw bg-pink-400 text-white'>Make a Mortgage Enquiry</Link>
      </div>
      {/* interests */}
      <article className="w-full bg-white">
        {bestInterest?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full">
        {healthCheck?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} btn_bg={item?.btn_bg} button={item?.button} btn_text={item?.btn_text} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full">
        <RatingsContainer />
      </article>
       {/* banner */}
       <div className="p-3vw bg-pink-400 col-center">
        <h1 className='text-[#152347] text-[1.6vw] font-medium text-center w-full max-w-[40vw]'>
        Download and take away our useful guide: Why Use a Mortgage Broker?.</h1>
        <Link to='/contact' className='mt-2vw text-center text-vw p-0.5vw bg-[#152347] text-white'>Make a Mortgage Enquiry</Link>
      </div>
      {/* banner white */}
      <div className="col-center p-3vw bg-white w-full">
        <p className='text-vw text-center italic text-gray-900 w-full max-w-[60vw]'>
        You may have to pay a repayment charge to your existing lender if you remortgage. Your home may be repossessed if you do not keep up repayments on your mortgage
        </p>
        <p className='text-vw text-center italic mt-vw text-gray-900 w-full max-w-[60vw]'>
        There may be a fee for mortgage advice. The actual amount you pay will depend on your circumstances. The fee can be up to 1.5%, but a typical fee is 0.3% of the amount borrowed.
        </p>
      </div>
        {/* news */}
        <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] font-medium  text-[1.8vw]'>You may also be interested in</h1>
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

export default Mortgages