import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { Remembering, abit_about, catagories, catagoryCard, danhamzList, downloadBook, leedsGuide, lettingProperties, news, propertyClean, property_loc, quick_search, reasons, rep_report, smart_rent, stu_accommodation, stu_nav, student_search, testimonial, thingsToremember, toggleInfo } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import RentSection from '../../Component/BuyAndRent/RentSection'
import BuySection from '../../Component/BuyAndRent/BuySection'
import RightImageContainer from '../../Component/TextAndImageContainer/RightImageContainer';
import { Link } from 'react-router-dom'
import LettingProperty from '../../Component/PropertyDetails/LettingProperty'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../Component/Cards/Card'
import SimpleProcess from '../../Component/Common/SimpleProcess'
import Teams from '../../Component/Teams'
import Reviews from '../../Component/Common/Reviews'
import RatingsContainer from '../../Component/RatingsContainer'
import Testimonial from '../../Component/Common/Testimonial'
import Services from '../../Component/Common/Services'
import News from '../../Component/Common/News'
import CatagoryCard from '../../Component/Cards/CatagoryCard'
import { useGetAllLettingsQuery } from '../../store/storeApi'

const Students = () => {
  const [showRentSection, setShowRentSection] = useState(true);
  const {data:lettingsProperties} = useGetAllLettingsQuery()


  return (
    <div>
      <Layout>
      <PageAddress main="Home" mainLink="/" subLink="/students" category="Lettings" subCategory="Students" />
      <section className='w-full'>
        {stu_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* about us */}
      <article className='row-center p-3vw bg-gray-100'>
        <p className='text-[2.1vw] text-[#152347] font-semibold w-full max-w-[40vw]'>Love Mates. Hate Bills. Say hello to a smarter way to rent.</p>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>Whether it’s our hassle-free all-inclusive tenancies, Unipol accredited properties or friendly personal service –  at HOP, we’re here to make your student letting experience as simple and stress free as possible. <br />
        Our ability to provide safe, affordable student accommodations in Leeds is unmatched. We are uniquely positioned to serve the student community, with an understanding borne from 15 years’ of student lettings experience.  <br /> If you are ready for a smarter way to find student housing in Leeds, look no further than HOP.
        Don’t worry how to split the bills with your housemates! Pay one simple price for your rent and bills with our fully inclusive bills packages..
        </p>
      </article>
      {/* accommodation */}
      <article className="w-full bg-white">
        {stu_accommodation?.map((item, index) => (
          <LeftImageContainer  key={index} icon={item?.icon} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* quick search */}
      <div className="col-center w-full bg-gray-200 p-3vw">
        <h1 className='text-[2.1vw] italic text-[#152347] text-center font-semibold'>Quick Search</h1>
        <p className='text-[1.3vw] text-gray-900 text-center'>Use the <span className="text-pink-300 cursor-pointer hover:underline">advanced property search</span> or try these quick links.</p>
        <section className="grid grid-cols-5 gap-4 mt-2vw">
          {quick_search?.map((item, index) => (
            <Link to={item?.url} className={`${item?.title === 'Advanced Property Search'? 'bg-pink-300' : 'bg-[#152347]'} text-white text-center w-full text-vw p-vw rounded-sm`} key={index}>{item?.title}</Link>
          ))}
        </section>
      </div>
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
      {/* smart rent */}
      <article className="w-full col-center p-3vw bg-[#152347]">
        <main className="flex justify-between items-center">
          {smart_rent?.map((item, index) => (
            <section className="w-full flex" key={index}>
                 <div className="w-full max-w-[40vw] -ml-2vw">
                  <iframe
                    className='text-[#152347] mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://www.youtube.com/embed/lbqll5HUPog"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>   
                 <section className="w-full max-w-[40vw] ml-2vw">
                <h1 className='text-2vw text-white font-semibold italic'>{item?.mainTitle}</h1>
                {item?.infos?.map((info, index) => (
                  <div className="mt-vw" key={index}>
                    <p className='text-[1.3vw] text-white font-medium w-full max-w-[30vw]'>{info?.title}</p>
                    <p className='text-vw text-white w-full max-w-[40vw]'>{info?.info}</p>
                  </div>
                ))}
                </section>
            </section>
          ))}
        </main>
      </article>
      {/* quick search */}
      <div className="col-center w-full bg-gray-200 p-3vw">
        <h1 className='text-[2.1vw] italic text-[#152347] text-center font-semibold'>Quick Search</h1>
        <p className='text-[1.3vw] text-gray-900 text-center'>Use the <span className="text-pink-300 cursor-pointer hover:underline">advanced property search</span> or try these quick links.</p>
        <section className="grid grid-cols-3 gap-4 mt-2vw">
          {property_loc?.map((item, index) => (
            <Link to={item?.url} className={`${item?.title === 'Properties in All Student Properties'? 'bg-pink-300' : 'bg-[#152347]'} text-white text-center w-full text-vw p-vw rounded-sm`} key={index}>{item?.title}</Link>
          ))}
        </section>
      </div>
      {/* alerts */}
       <article className="w-full bg-white">
        {danhamzList?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* reasons */}
      <main className="w-full bg-gray-200 col-center p-3vw">
        <h1 className='text-[2.1vw] text-[#152347] text-center font-semibold'>5 good reasons to rent student housing with HOP</h1>
        <div className="grid grid-cols-5 gap-2">
        {reasons?.map((item, index) => (
          <Card key={index} number={item?.number} title={item?.title} info={item?.info} />
        ))}
        </div>
      </main>

      {/* abit */}
      <article className='w-full'>
        {abit_about?.map((item, index) => (
          <RightImageContainer key={index} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* our process  */}
      <div className="section w-full flex justify-center items-center flex-col p-3vw">
            <h1 className="text-[#152347] font-medium text-[1.9vw]">Our Process: 9 steps to your perfect student home</h1>
           <div className="mt-vw">
           <SimpleProcess />
           </div>
        </div>
{/* teams */}
        <div className="">
        <Teams />
       </div>
       {/* remember */}
      <article className='w-full'>
        {thingsToremember?.map((item, index) => (
          <LeftImageContainer key={index} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>

      {/* rememebering */}
      <article className='col-center bg-white p-3vw'>
              <div className="flex justify-between">
             {Remembering?.map((item, index) => (
               <main key={index} className='flex justify-between'>
                 <section className="w-full max-w-[40vw]">
                <img src={item?.img} alt="rememter" className="w-full max-w-[40vw]" />
                </section> 
                <section className="w-full max-w-[40vw] ml-2vw">
                    <h1 className='text-[#152347] text-[2.1vw] w-full max-w-[30vw] font-medium'>{item?.title}</h1>
                    <p className='text-gray-600 text-vw mt-vw max-w-[39vw] font-medium w-full'>{item?.info}</p>
                   <div className="mt-2vw">
                   {item?.lists?.map((item, index) => (
                    <li  style={{ listStyleType: "disc" }} className='text-[#152347]  text-vw list-decimal block' key={index}>
                       <span className='text-black text-[1.2vw] font-medium'>.</span> {item?.title}
                    </li>
                    ))}
                   </div>
                </section>
               </main>
             ))}
              </div>
      </article>

      {/* cleaning */}
      <article className='col-center bg-gray-200 p-3vw'>
              <div className="flex justify-between">
             {propertyClean?.map((item, index) => (
               <main key={index} className='flex justify-between'>
                <section className="w-full max-w-[40vw]">
                    <h1 className='text-[#152347] text-[2.1vw] w-full max-w-[30vw] font-medium'>{item?.title}</h1>
                    <p className='text-gray-600 text-vw mt-vw max-w-[39vw] font-medium w-full'>{item?.info}</p>
                   <div className="mt-2vw">
                   {item?.lists?.map((item, index) => (
                    <li  style={{ listStyleType: "disc" }} className='text-[#152347]  text-vw list-decimal block' key={index}>
                       <span className='text-black text-[1.2vw] font-medium'>.</span> {item?.title}
                    </li>
                    ))}
                   </div>
                </section>
                <section className="w-full max-w-[40vw] ml-2vw">
                <img src={item?.img} alt="rememter" className="w-full max-w-[40vw]" />
                </section> 
               </main>
             ))}
              </div>
      </article>

       {/* stu -guides */}
       <article className="w-full bg-white">
        {leedsGuide?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} bg_color={item?.bg_color} />
        ))}
      </article>
      {/* reviews */}
      <article className='w-full pt-2vw'>
        <RatingsContainer />
      </article>
      <section className="w-full col-center bg-white p-3vw">
        <h1 className="text-[#152347] font-medium text-[1.9vw]">Tenant Links</h1>
        <div className="mt-vw grid grid-cols-3 gap-3">
          {testimonial?.map((item, index) => (
            <Testimonial key={index} img={item?.img} title={item?.title} url={item?.url} />
          ))}
        </div>
      </section>
      {/* donload book */}
      <article className="w-full bg-white">
        {downloadBook?.map((item, index) => (
          <LeftImageContainer  key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} bg_color={item?.bg_color} />
        ))}
      </article>
      {/* stu -guides */}
      <article className="w-full bg-white">
        {rep_report?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} bg_color={item?.bg_color} />
        ))}
      </article>

      {/* services */}
      <div className="flex justify-center p-vw w-full items-center flex-col">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-[#152347] text-[2vw] w-full max-w-[47vw] text-center'>About Us</h1>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
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

          {/* smart rent */}
      <article className="w-full col-center p-3vw bg-gray-100">
        <main className="flex justify-between items-center">
          {smart_rent?.map((item, index) => (
            <section className="w-full flex items-center justify-between" key={index}>  
                 <section className="w-full max-w-[40vw]">
                <h1 className='text-2vw text-[#152347] w-full max-w-[35vw] font-semibold italic'>Why should students rent their property with HOP?</h1>
                </section>
                <div className="w-full max-w-[40vw] ml-3vw">
                  <iframe
                    className='text-[#152347] mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://www.youtube.com/embed/lbqll5HUPog"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div> 
            </section>
          ))}
        </main>
      </article>

          {/* stu - knowledge bank */}
          <div className="p-3vw bg-gray-200">
            <h1 className="text-[#152347] font-medium text-3vw text-center">Student Knowledge Bank</h1>
            <article className="col-center">
              <div className="grid grid-cols-4 gap-2">
                {catagoryCard?.map((card, index) => (
                  <CatagoryCard  key={index} title={card?.title} title2={card?.title2} bg={card?.bg} info={card?.info} featured={card?.featured} />
                ))}
              </div>
            </article>
          </div>

           {/* services */}
      <div className="flex justify-center p-vw w-full items-center flex-col bg-gray-100">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-[#152347] text-[2vw] w-full max-w-[47vw] text-center'>We can help</h1>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
          </div>
      </Layout>
    </div>
  )
}

export default Students