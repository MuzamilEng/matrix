import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import { refer_nav, referalScheme, stu_nav, terms } from '../../Data'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer'
import { Link } from 'react-router-dom'
import RatingsContainer from '../../Component/RatingsContainer'
import Testimonial from '../../Component/Common/Testimonial'

const ReferAfriend = () => {
  return (
    <div>
      <Layout>
      <PageAddress main="Home" mainLink="/" subLink="/refer-a-friend" category="Lettings" subCategory="Refer A Friend" />
      {/* banner -navbar */}
      <section className='w-full'>
        {refer_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* scheme banner */}
      <article className='row-center p-3vw bg-gray-200'>
        <p className='text-[2vw] text-[#152347] font-semibold w-full max-w-[35vw]'>Share the love with our Refer a Friend Scheme</p>
        <p className='text-vw text-gray-800 w-full max-w-[40vw]'>
        At HOP, we are focused on providing the best service to our customers. So, if you think we’ve done a great job, we would really appreciate a referral to a friend. Recommend a new Landlord to us and we’ll say”Thank You” with a £100 John Lewis Voucher!
        </p>
      </article>
      {/* referal scheme */}
      <article className="w-full bg-white">
        {referalScheme?.map((item, index) => (
          <RightImageContainer  key={index} bg_color={item?.bg_color} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* banner */}
       <div className="w-full col-center bg-[#152347] p-5vw">
              <h1 className='text-white text-[2vw] text-center font-medium w-full max-w-[45vw]'>Refer a Friend</h1>
              <p className='text-white text-vw mt-vw max-w-[40vw] font-medium w-full text-center'>Simply
              <Link to="tel:+44 123 456 789"><span className="text-pink-500 hover:underline"> email us </span></Link>  
               with the contact details of your referral so we can drop them a line.
             </p> 
       </div>
       {/* terms  */}
       <article className="w-full p-3vw bg-white flex flex-col justify-center items-center ">
        <div className="">
        <h1 className="text-[#152347] font-medium text-[1.9vw]">Terms</h1>
        {terms?.map((item, index) => (
          <p key={index} className="text-vw m-0.5vw w-full max-w-[50vw] text-gray-800">{item}</p>
        ))}
        </div>
       </article>
       {/* reviews */}
       <section className="w-full bg-gray-200">
        <RatingsContainer />
       </section>
       {/* useful links */}
       <section className="w-full row-center p-3vw bg-white">
        <div className='-ml-2vw'>
        <Testimonial title="Landlord" img={"/images/landlord_0.jpg"} />
        </div>
        <div className="ml-2vw">
        <Testimonial title="Free Instant Valuation" img={"/images/sold_logo.png"} />
        </div>
       </section>
      </Layout>
    </div>
  )
}

export default ReferAfriend