import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { benefitsFromExperts, getValuation, houseValuation, news, properties, salesValuation, valuationTool, value_nav } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import { Link } from 'react-router-dom'
import Property from '../../Component/PropertyDetails/Property'
import RatingsContainer from '../../Component/RatingsContainer'
import News from '../../Component/Common/News'

const PropertyValue = () => {
  return (
    <div>
      <Layout>
      <PageAddress main='Home' category='Sellers' subCategory='Sales Valuation' mainLink='/' />
            {/* value_nav */}
      <section className='w-full'>
        {value_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-white'>
          <span className='text-[1.3vw] text-[#152347] font-semibold w-full max-w-[37vw]'>
          Thinking of selling? <br /> Get an expert valuation with HOP</span>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        The first step in any sales process is understanding what your property is worth. Property prices fluctuate due to many different variables so, while it’s very useful to get a instant estimate,  it’s important to enlist the help of property experts who really understand the local market to get an accurate valuation.
        </p>
      </article>
      {/* get valustion */}
      <article className="w-full bg-gray-200">
        {getValuation?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* valuation process */}
      <article className="w-full bg-white">
        {valuationTool?.map((item, index) => (
          <ListInfoContainer2  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* sales valustion */}
      <article className="w-full bg-gray-200">
        {salesValuation?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* house valustion */}
      <article className="w-full bg-white">
        {houseValuation?.map((item, index) => (
          <ListInfoContainer2  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <article className="w-full bg-gray-200">
        {benefitsFromExperts?.map((item, index) => (
          <ListInfoContainer  key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="col-center p-5vw bg-[#152347]">
        <h1 className="text-[1.8vw] text-white font-medium text-center w-full max-w-[40vw]"> Now is a great time to sell.</h1>
        <p className='text-vw text-white w-full max-w-[40vw] text-center'>We won’t tie you in to long term sales contracts to give you complete flexibility. Our fresh approach to property sales enables you to give us just 30 days’ notice if you change your mind at any time.</p>
      <Link to="" className="text-vw text-white font-medium bg-pink-400 text-center mt-2vw w-full p-vw max-w-[23vw]">Call our sales team on 0800 123 4567</Link>
      </div>
      {/* sold properties */}
       <div className="w-full flex-col bg-white p-2vw flex justify-center items-center">
            <h1 className='text-[#152347] text-[1.9vw] text-center font-medium capitalize text-medium'>Recently sold properties</h1>
            <div className="grid grid-cols-4 gap-3 mt-2vw">
              {properties?.map((item, index) => (
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.pics?.[0]?.quantity} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bed_rooms} img={item?.img} />
              ))}
            </div>
            <Link to="/" className="bg-[#152347] mt-2vw block p-vw m-vw text-white font-medium text-[0.8vw] text-center">Instant Sales Valuation</Link>
        </div>
        {/* reviews */}
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
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all sales news</Link>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default PropertyValue