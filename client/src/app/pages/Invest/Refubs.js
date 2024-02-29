import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { hassleFreeRefub, howITWorks, insvestmentProperty, lettingYouProperty, overview_testimonials, propOtimisation, reasons, redubStudies, refub_nav, responseRefurbish, strategicApproach, toggleInfo, transformProperty, trustedTeam } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import { Link } from 'react-router-dom'
import Card from '../../Component/Cards/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from '../../Component/Common/Services'
import Testimonial from '../../Component/Common/Testimonial'

const Refubs = () => {
  const settings = { arrows: true, slidesToShow: 4, slidesToScroll: 1, };

  return (
    <div>
      <Layout>
      <PageAddress main='Home' category='Danhamz Investments' subCategory='Refubs & Property Optimisation' mainLink='/' />
      <section className='w-full'>
        {refub_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
       {/* banner */}
       <article className='row-center p-3vw bg-gray-200'>
          <span className='text-[2vw] text-purple-950 font-medium italic w-full max-w-[34vw]'>
          Maximise the potential of your investment with a <br /> refurbishment.</span>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        Is your property in need of refurbishment? Whether it’s a freshen up for the new letting season, or a total transformation of an underperforming property, our specialist team can deliver the results you are looking for.
        </p>
      </article>
      {/* propOtimisation */}
      <article className="w-full bg-white">
        {propOtimisation?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* responseRefurbish */}
      <article className="w-full bg-gray-200">
        {responseRefurbish?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* howITWorks */}
      <article className="w-full bg-white">
        {howITWorks?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        {/* strategicApproach */}
        <article className="w-full bg-gray-200">
        {strategicApproach?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* hassleFreeRefub */}
       <article className="w-full bg-white">
        {hassleFreeRefub?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        {/* trustedTeam */}
        <article className="w-full bg-gray-200">
        {trustedTeam?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* lettingYouProperty */}
      <article className="w-full bg-white">
        {lettingYouProperty?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* transformProperty */}
       <article className="w-full bg-gray-200">
        {transformProperty?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="p-3vw bg-purple-950 col-center">
        <h1 className='text-white text-[1.6vw] font-medium text-center w-full'>
        To find out more, speak to our friendly team on 0113 467 1584 or
        </h1>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Request a call back</Link>
      </div>
      {/* Why buy your investment property with us? */}
      <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-purple-950 text-[2.1vw] font-medium'>Why choose Danhamz to refurbish your rental property?</h1>
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
          {/* banner */}
      <div className="p-3vw bg-purple-950 col-center">
        <h1 className='text-white text-[1.6vw] max-w-[50vw] font-medium text-center w-full'>
        To find out more about our refurb or investment services, simply make an enquiry below and one of our team will be in touch to discuss.        </h1>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Drop us a message</Link>
      </div>
       {/* reasons */}
       <main className="w-full bg-gray-200 col-center p-3vw">
        <h1 className='text-[2.1vw] text-purple-950 text-center font-semibold'>Refurb Case Studies</h1>
        <p className="text-vw text-gray-800 text-center w-full">We handle all kinds of projects ranging from some minor redecoration, new bathrooms, kitchens to removal or structural walls and more</p>
        <p className="text-vw text-gray-800 text-center w-full">Take a look at some of our case studies below to see how we have transformed underperforming properties to improve returns.</p>
        <div className="grid grid-cols-4 gap-2">
        {redubStudies?.map((item, index) => (
          <Card key={index} para={item?.para} img={item?.img} title={item?.title} info={item?.info} />
        ))}
        </div>
      </main>
           {/* banner */}
      <div className="p-3vw bg-purple-950 col-center">
        <h1 className='text-white text-[1.6vw] max-w-[50vw] font-medium text-center w-full'>
        To optimise your investment property, speak to our friendly team on 0113 467 1584 or
        </h1>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Drop us a message</Link>
      </div>
      {/* services */}
      <div className="flex justify-center bg-gray-200 p-vw w-full items-center flex-col">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-blue-950 text-[2vw] font-medium w-full max-w-[47vw] text-center'>FAQ'S</h1>
              <p className='text-vw text-gray-800 text-center'>Learn more about Danhamz Refurb and Property Optimisation Service.</p>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
          </div>
           {/* what we do */}
      <section className="w-full col-center bg-pink-400  p-3vw">
        <h1 className="text-purple-950 font-medium text-[1.9vw]">You may also be interested in</h1>
        <div className="mt-vw grid grid-cols-3 gap-3">
          {overview_testimonials?.map((item, index) => (
            <Testimonial key={index} img={item?.img} title={item?.title} url={item?.url} />
          ))}
        </div>
      </section>
      </Layout>
    </div>
  )
}

export default Refubs