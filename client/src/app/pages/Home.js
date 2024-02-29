import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner, home_services, partnerBanner, studentHomes, } from '../Data';
import Category from '../Component/Common/Category';
import Property from '../Component/PropertyDetails/Property';
import LettingProperty from '../Component/PropertyDetails/LettingProperty';
import Layout from '../Layout/Layout';
import RatingsContainer from '../Component/RatingsContainer';
import { useGlobalContext } from '../UserContext/UserContext';
import { useGetAllLettingsQuery } from '../store/storeApi';
import ListInfoContainer2 from '../Component/TextAndImageContainer/ListInfoContainer2';
import Card from '../Component/Cards/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Searchbox from '../Component/Common/Searchbox';
import Chat from '../Component/Chat/Chat';
import axios from 'axios';


const Home = () => {
  const {salesProperties,setSearchedLocation, searchedLocation, setSearchedLettingsProperties, setSearchedSalesProperties, showRentSection, setShowRentSection} = useGlobalContext();
  const {data:lettingsProperties} = useGetAllLettingsQuery();
  const [clearInputField, setClearInputField] = useState(false)
  const navigate = useNavigate();
const CustomPrevArrow = (props) => (
  <span {...props} className="text-vw text-black absolute cursor-pointer top-[18vw] xl:top-[14vw] lg:top-[14vw] md:top-[14vw] -left-0.5vw z-50">
  <FontAwesomeIcon icon={faArrowLeft} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-white rounded-full hover:bg-yellow-500 bg-yellow-600 p-[1.3vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-center' />
</span>);
const CustomNextArrow = (props) => (
  <span {...props} className="text-vw text-black absolute cursor-pointer top-[18vw] xl:top-[14vw] lg:top-[14vw] md:top-[14vw] -right-0.5vw xl:right-vw ">
  <FontAwesomeIcon icon={faArrowRight} className='text-2vw xl:text-vw lg:text-vw md:text-vw text-white rounded-full hover:bg-yellow-500 bg-yellow-600 p-[1.3vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-center' />
</span> );

const settings2 = { prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, slidesToShow: 4, slidesToScroll: 1,
    responsive: [
    {breakpoint: 1024, // Large screens
      settings: { slidesToShow: 4, slidesToScroll: 1, },
    },
    { breakpoint: 768, // Medium screens
       settings: { slidesToShow: 1, slidesToScroll: 1, },
    },
    {breakpoint: 480, // Small screens
       settings: { slidesToShow: 1, slidesToScroll: 1,},
    },
  ],
};


const handleRentBtunClick = async (e) => {
  // e.preventDefault();
  if(searchedLocation !== "") {
    const fetchData = await axios.get(`${process.env.REACT_APP_API_URL}/lettings/advancedSearch?location=${searchedLocation}`);
    const result = await fetchData.data
    setSearchedLettingsProperties(result);
    setShowRentSection(true);
    setClearInputField(true);
    navigate('/search-property');
    setSearchedLocation('')
  }
}
const handleBuyBtunClick = async () => {
  if(searchedLocation !== "") {
    const fetchData = await axios.get(`${process.env.REACT_APP_API_URL}/sales/advancedSearch?location=${searchedLocation}`);
    const result = await fetchData.data
    setSearchedSalesProperties(result);
    setClearInputField(true);
    setShowRentSection(false);
    navigate('/search-property');
    setSearchedLocation('')
  }
}

const videoUrl = 'https://res.cloudinary.com/njnjj2fdiawje/video/upload/v1708600015/leeds_boeug0.mp4'

  return (
    <div>
      <Layout>
        <main className="w-full relative">
          <video autoPlay muted loop className="w-full h-[40vw] object-cover bg_img2">
            <source src={videoUrl} type="video/mp4" loading="lazy" />
          </video>
        <Searchbox handleRentBtunClick={handleRentBtunClick} handleBuyBtunClick={handleBuyBtunClick} clearInputField={clearInputField} />
        <div className="fixed z-50 bottom-[2vw] right-[2vw]">
        <Chat />
        </div>
        </main>
       <article className='w-full bg-[#ffff] col-center p-4vw'>
            {banner?.map((item, index) => (
                <div className="w-full max-w-[80vw] xl:max-w-[70vw] lg:max-w-[70vw] md:max-w-[70vw]" key={index}>
                  <h1 className='text-yellow-600 text-center text-[3.5vw] xl:text-3vw lg:text-3vw md:text-3vw font-medium'>Welcome to Danhamz</h1>
                  <h2 className='text-[#152347] text-center text-[2.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-semibold '>{item?.title}</h2>
                </div>
            ))}
          </article>
          <article className="col-center bg-gray-200 w-full p-3vw">
          <h1 className='text-yellow-600 text-center text-[3.5vw] xl:text-3vw lg:text-3vw md:text-3vw font-medium'>Our Services</h1>            
             <div className="grid grid-cols-1 mt-2vw w-full cursor-pointer">
            <Slider {...settings2}>
              {home_services?.map((item, index) => (
                <Link to='/coming-soon' key={index} className='w-full'>
                <Card para={item?.para} img={item?.img} title={item?.title} height={item?.height} />
             </Link>                          
              ))}
            </Slider>
          </div>
          </article>
          <Category />
              {/* Why choose Danhams  */}
              <div className='w-full'>
              {studentHomes?.map((item, index) => (
                  <ListInfoContainer2 key={index} lists={item?.lists} lists_style={item?.lists_style} lists_color={item?.lists_color} img={item?.img} info={item?.info} icon={item?.icon} title={item?.title} button={item?.button} url={item?.url} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
              ))}
          </div>
          {/* letting properties */}
          <div className="flex flex-col justify-center bg-gray-200 items-center w-full p-3vw">
            <h1 className='text-yellow-600 text-3vw xl:text-2vw lg:text-2vw md:text-2vw font-medium capitalize'>Latest Properties to Let</h1>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2 mt-2vw w-full">
              {lettingsProperties?.slice(0, 4)?.map((item, index) => (
               <Link to={`/details/${item?._id}`} className='w-full'>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.shareHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                </Link> 
              ))}
            </div>
          </div>
          {/* reviews */}
         <div className="w-full">
          <RatingsContainer />
         </div>
          {/* marketing parteners */}
          <section className='col-center bg-white p-3vw'>
            <h1 className='text-yellow-600 text-3vw xl:text-2vw lg:text-2vw md:text-2vw font-semibold'>Merketing partners</h1>
            <div className="flex mt-2vw justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img key={index} loading='lazy' src={item?.img} alt={index} className='w-[12vw] xl:w-8vw lg:w-8vw md:w-8vw object-cover ml-4vw'/>
            ))}
            </div>
        </section>
           {/* properties */}
           <div className="w-full flex-col bg-gray-100 p-2vw flex justify-center items-center">
            <h1 className='text-yellow-600 text-[3vw] xl:text-2vw lg:text-2vw md:text-2vw text-center capitalize font-medium'>Latest properties for Sale</h1>
            <div className="grid grid-cols-1  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 w-full gap-3 mt-2vw">
              {salesProperties?.slice(0, 4)?.map((item, index) => (
                <Link to={`/sales-details/${item?._id}`} className='w-full'>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} name={item?.propertyName} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} img={item?.image1?.url} />
                </Link>
              ))}
            </div>
            {/* <Link to="/search-property" className="bg-pink-400 mt-2vw block p-vw m-vw text-white font-medium text-[0.8vw] text-center">Start your search</Link> */}
          </div>
      </Layout>
    </div>
  )
}

export default Home