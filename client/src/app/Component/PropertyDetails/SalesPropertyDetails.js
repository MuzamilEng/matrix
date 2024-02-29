import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../Common/PageAddress'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetSalesByIdQuery } from '../../store/storeApi';
import PropertyRoomsInfo from './PropertyRoomsInfo';
import PropertyImagesDetails from './PropertyImagesDetails';
import PinLocation from '../Map/PinLocation';
import Property from './Property';
import { useGlobalContext } from '../../UserContext/UserContext';



const SalesPropertyDetails = ( ) => {
        const { id } = useParams();
        const { data: propertyDetails, isLoading, isError } = useGetSalesByIdQuery(id);
        const {salesProperties} = useGlobalContext();
   
    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-[100vh]'>
            <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
        );
    }
    if (isError) {
        return <div className='text-center text-2vw text-[#152347]'>No property found...</div>;
    }
 
  return (
    <div>
        <Layout>
            <PageAddress main='Home' category='Properties' subCategory={propertyDetails?.info} />
            <article className="flex justify-center items-start w-full bg-gray-200 p-2vw">
                <PropertyImagesDetails img1={propertyDetails?.image1?.url} img2={propertyDetails?.image2?.url} img3={propertyDetails?.image3?.url} img4={propertyDetails?.image4?.url} img5={propertyDetails?.image5?.url} img6={propertyDetails?.image6?.url} img7={propertyDetails?.image7?.url} img8={propertyDetails?.image8?.url} img9={propertyDetails?.image9?.url} img10={propertyDetails?.image10?.url} img11={propertyDetails?.image11?.url} img12={propertyDetails?.image12?.url} img13={propertyDetails?.image13?.url} img14={propertyDetails?.image14?.url} img15={propertyDetails?.image15?.url} />
              <PropertyRoomsInfo price={propertyDetails?.price} propertyType={propertyDetails?.propertyType}  propertyName={propertyDetails?.propertyName} available={propertyDetails?.availableDate} furnished={propertyDetails?.furnished} bills={propertyDetails?.bills} bedrooms={propertyDetails?.bedrooms} bathrooms={propertyDetails?.bathrooms} reception={propertyDetails?.reception} />
            </article>
            <article className="w-full bg-white p-3vw flex justify-center items-start">
                <section className="w-full max-w-[45vw]">
                    <div className="">
                        <p className='text-[#152347] font-medium text-[1.5vw]'>Feartures</p>
                        <section className="grid grid-cols-2 gap-4 mt-vw">
                        <li className="text-vw text-gray-900">Bedrooms:{propertyDetails?.bedrooms}</li>
                        <li className="text-vw text-gray-900">Bathrooms:{propertyDetails?.bathrooms}</li>
                        <li className="text-vw text-gray-900">Reception:{propertyDetails?.reception}</li>
                        <li className="text-vw text-gray-900">Bills:{propertyDetails?.bills ? 'Included' : 'Not Included'}</li>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-vw font-medium text-[1.5vw]'>Council Tax & Deposit</p>
                        <section className="grid grid-cols-2 gap-4 mt-vw">
                        <li className="text-vw text-gray-900">Council Tax:{propertyDetails?.counselTax ? propertyDetails?.counselTax  : 'Not Included'}</li>
                        <li className="text-vw text-gray-900">Deposit:{propertyDetails?.deposit ? propertyDetails?.deposit  : 'Not Included'}</li>
                        </section>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-vw font-medium text-[1.5vw]'>Description</p>
                        <p className="text-[1vw] w-full max-w-[40vw] text-gray-900">{propertyDetails?.description}</p>
                    </div>
                    
                    <div className="">
                        <p className='text-[#152347] mt-vw font-medium text-[2.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>Virtual Tour</p>
                        <Link target='_blank' to={propertyDetails?.videoLink ? propertyDetails?.videoLink : '#'} className="text-[1.8vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.videoLink ? propertyDetails?.videoLink : 'The virtual tour is not Included'}</Link>
                    </div>
                    <div className="">
                        <p className='text-[#152347] mt-vw font-medium text-[2.5vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]'>EPC Details</p>
                        <Link target='_blank' to={propertyDetails?.epc ? propertyDetails?.epc : '#'} className="text-[1.8vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-gray-700">{propertyDetails?.epc ? propertyDetails?.epc : 'The virtual tour is not Included'}</Link>
                    </div>
                </section>
                <section className="w-full ml-2vw">
                    <PinLocation lat={propertyDetails?.lat ? propertyDetails?.lat : -1.567857} lng={propertyDetails?.lng ? propertyDetails?.lng : 53.812431}/>
                </section>
            </article>
            <section className="w-full p-2vw flex items-center justify-around">
                    <div className="w-full max-w-[30vw] h-[15vw] p-2vw bg-[#152347]">
                        <h1 className='text-2vw font-semibold text-white w-full max-w-[20vw] italic'>Looking to buy a home?</h1>
                        <p className="text-vw text-white w-full max-w-[22vw]">We’ll be with you every step of the way.</p>
                        <div className="-mt-vw xl:mt-2vw lg:mt-2vw md:mt-2vw">
                        <Link to="/search-property" className=' text-2vw xl:text-vw lg:text-vw md:text-vw bg-yellow-600 hover:bg-yellow-500 rounded-md p-vw text-center text-white'>Buy now</Link>
                        </div>
                    </div>
                    <div className="w-full max-w-[30vw] h-15vw p-2vw bg-yellow-600">
                        <h1 className='text-2vw font-semibold text-white w-full max-w-[20vw] italic'>Want a shared room in your area?</h1>
                        <p className="text-vw text-white w-full max-w-[22vw]">Click to view our area guide.</p>
                        <div className="-mt-vw xl:mt-2vw lg:mt-2vw md:mt-2vw ">
                        <Link to="/search-property" className=' bg-[#152347] text-2vw xl:text-vw lg:text-vw md:text-vw rounded-md hover:bg-[#152347e0] p-vw text-center text-white'>Learn more</Link>
                        </div>
                    </div>
                </section>
            {/* sales properties */}
            <div className="w-full flex-col bg-gray-100 p-2vw flex justify-center items-center">
            <h1 className='text-yellow-600 text-[3vw] xl:text-2vw lg:text-2vw md:text-2vw text-center capitalize font-medium'>Similar properties for Sale</h1>
            <div className="grid grid-cols-1  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 w-full gap-3 mt-2vw">
              {salesProperties?.filter((property)=> property?._id !== id).slice(0, 4)?.map((item, index) => (
                <Link target='_blank' to={`/sales-details/${item?._id}`} className='w-full'>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} img={item?.image1?.url} />
                </Link>
              ))}
            </div>
          </div>
        </Layout>
    </div>
  )
}

export default SalesPropertyDetails