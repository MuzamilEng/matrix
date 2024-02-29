import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import { aboutInvestment, dealPackaging, fixedReturns, investInLeeds, investwithDanhamz, ivestorsClub, localAmenities, merketMirrors, news, overview_nav1, overview_testimonials, partnerBanner, propertyDevelopment, propertyOtimisation, sellProperty, testimonial } from '../../Data'
import Card from '../../Component/Cards/Card'
import { Link } from 'react-router-dom'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import Testimonial from '../../Component/Common/Testimonial'
import News from '../../Component/Common/News'


const Overview = () => {
  return (
    <div>
        <Layout>
        <PageAddress main='Home' category='Danhamz Investments' mainLink='/' />
            {/* overview_nav */}
      <section className='w-full'>
        {overview_nav1?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-white'>
          <span className='text-[1.8vw] text-[#152347] font-semibold w-full max-w-[37vw]'>
          The simple way to invest in Leeds.</span>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        HOP Investments provides a truly hassle-free, turnkey, solution for investors looking to take advantage of investing in Buy to Let property in Leeds.
      <br /> <br />  By choosing HOP, you can benefit from everything the Leeds property market has to offer without leaving home. From property sourcing to refurbs, lettings and ongoing management, investors can enjoy a completely seamless service backed by a wealth of experience.        </p>
      </article>
        {/* why choose our investment */}
        <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-[#152347] text-[2.1vw] font-medium'>
            Why choose HOP Investments?</h1>
             {/* doings */}
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {sellProperty?.map((item, index) => {
              return (
                <Card key={index} para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              )
            })}
            </div>
      </article>
      <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Thinking of investing in Leeds?
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full">
        If you want to grow a buy-to-let portfolio in Leeds, let us take the hassle out of finding your next investment. <br />
        Contact our friendly team on  0113 467 1584 or complete the enquiry form below and we’ll get back to you.
        </p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-0.5vw bg-pink-400 text-white'>Contact us</Link>
      </div>
      {/* invest in leeds */}
       {/* mortgage broker */}
       <article className="w-full bg-white">
        {investInLeeds?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* merket mirrors */}
      <article className="w-full bg-gray-200">
        {merketMirrors?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* local amenities */}
      <article className="w-full bg-white">
        {localAmenities?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Trust HOP for Property Investment in Leeds
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full max-w-[57vw]">
        If you are to make the most of the property market in Leeds, you need to work with estate agents that know the area inside and out. That’s HOP in a nutshell. We have long been leaders in uniting students and families with the rental property they need in the Leeds city region. Today we bring the same enthusiasm, professionalism, and dedication to our work with property investors seeking opportunities throughout West Yorkshire.
        </p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-0.5vw bg-pink-400 text-white'>Contact us</Link>
      </div>
      {/* about investment */}
      <article className="w-full bg-gray-200">
        {aboutInvestment?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* what we do */}
      <section className="w-full col-center  p-3vw">
        <h1 className="text-[#152347] font-medium text-[1.9vw]">Tenant Links</h1>
        <div className="mt-vw grid grid-cols-3 gap-3">
          {overview_testimonials?.map((item, index) => (
            <Testimonial key={index} img={item?.img} title={item?.title} url={item?.url} />
          ))}
        </div>
      </section>
      {/* invest with danhamz */}
      <article className="w-full bg-white">
        {investwithDanhamz?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* property sourcing */}
      <article className="w-full bg-gray-200">
        {dealPackaging?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full bg-white">
        {propertyOtimisation?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* banner */}
       <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Want to know more?
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full max-w-[57vw]">
        Contact our team to discuss investing with HOP. <br />Simply call <span className='text-pink-400 cursor-pointer'>0113 467 1584</span> or complete the enquiry form below and we’ll get back to you.
        </p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-0.5vw bg-pink-400 text-white'>Contact us</Link>
      </div>
      <article className="w-full bg-gray-100">
        {propertyDevelopment?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full bg-white">
        {fixedReturns?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full bg-pink-300">
        {ivestorsClub?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* partener banner */}
       <section className='row-center bg-gray-200 p-3vw'>
            <div className="flex justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img src={item?.img} alt={index} className='w-full ml-4vw max-w-[10vw]'/>
            ))}
            </div>
        </section>
         {/* news */}
       <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.9vw] font-semibold italic'>You may be interested in…</h1>
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

export default Overview