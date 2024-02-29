import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useGlobalContext } from '../UserContext/UserContext'
import PageAddress from '../Component/Common/PageAddress';
import PropertyImagesDetails from '../Component/PropertyDetails/PropertyImagesDetails';
import PropertyRoomsInfo from '../Component/PropertyDetails/PropertyRoomsInfo';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Property from '../Component/PropertyDetails/Property';
import LettingProperty from '../Component/PropertyDetails/LettingProperty';


const PropertySearch = ({searchedProperties}) => {
  const [letProperties, setLetProperties] = useState([]);
  const [salesProperties, setSaleProperties] = useState([])
    const [listView, setListView] = useState(true);

    useEffect(()=> {
      if(searchedProperties && searchedProperties?.[0]?.price){
        setSaleProperties(searchedProperties)
      } else{
        setLetProperties(searchedProperties)
      }
    }, [searchedProperties])
  return (
    <div>
            <main className="w-full bg-gray-200">
                <article className="w-full p-vw">
                    <div className="flex justify-between items-center">
                    <h1 className='text-[1.3vw] text-start ml-6vw w-full text-gray-400 font-medium'>Currently Showing: {searchedProperties?.length} properties</h1>
                    <section className='flex items-center w-full max-w-[30vw]'>
                    <p onClick={() => setListView(true)} className={`text-vw mt-2vw w-full cursor-pointer max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${listView ? 'bg-blue-950' : 'bg-yellow-600'} p-[0.7vw]`}><Icon icon="gg:list" className='text-vw mr-0.5vw' />List View</p>
                    <p onClick={() => setListView(false)} className={`text-vw mt-2vw w-full cursor-pointer max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${listView ? 'bg-yellow-600' : 'bg-blue-950'} p-[0.7vw]`}><Icon icon="bx:grid" className='text-vw mr-0.5vw' />Grid View</p>
                    </section>
                    </div>
                </article>
                {listView ? <>
                    <article className="w-full -mt-[1vw] p-2vw col-center">
                    <div className="w-full">
                     {letProperties.length > 0 ? <>
                      {letProperties?.map((item, index) => {
                            return <main className='w-full m-vw flex items-center' key={index}>
                              <Link className='w-full m-vw flex items-center'>
                                <PropertyImagesDetails img1={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                                <PropertyRoomsInfo requestViewing={`/send-mail/${item?._id}`} propertyURL={`/details/${item?._id}`} weekPrice={item?.pricePerWeek}
                                 monthPrice={item?.pricePerMonth} bills={item?.bills} propertyType={item?.propertyType}
                                  furnished={item?.furnished} propertyName={item?.propertyName} availableDate={item?.availableDate} 
                                 price={item?.price} location={item?.location}
                                 bedrooms={item?.bedrooms} bathrooms={item?.bathrooms} reception={item?.reception} />
                                 </Link>
                            </main>
                        })}
                     </> : <>
                     {salesProperties?.map((item, index) => {
                        return <main className='w-full m-vw flex items-center' key={index}>
                        <Link className='w-full m-vw flex items-center'>
                          <PropertyImagesDetails img1={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                          <PropertyRoomsInfo requestViewing={`/send-mail/${item?._id}`} propertyURL={`/sales-details/${item?._id}`} weekPrice={item?.pricePerWeek}
                           monthPrice={item?.pricePerMonth} bills={item?.bills} propertyType={item?.propertyType}
                            furnished={item?.furnished} propertyName={item?.propertyName} available={item?.availableDate} 
                           price={item?.price} location={item?.location}
                           bedrooms={item?.bedrooms} bathrooms={item?.bathrooms} reception={item?.reception} />
                           </Link>
                      </main>
                     })}
                     </>}
                    </div>
                </article>
                </> : <>
                <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2 mt-2vw w-full">
             {letProperties?.length > 0 ? <>
              {letProperties?.map((item, index) => (
                <Link to={`/details/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                </Link>
              ))}
             </> : <>
             {salesProperties?.map((item, index) => (
                <Link to={`/sales-details/${item?._id}`}>
                <Property key={index} tag={item?.tag}
                icon={item?.icon} quantity={item?.bedrooms}
                price={item?.price} name={item?.propertyName}
                icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms}
                img={item?.image1?.url} img2={item?.image2?.url}
                img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} />
               </Link>
              ))}
             </>}
            </div>
            </article>
            </>}
            </main>
    </div>
  )
}

export default PropertySearch