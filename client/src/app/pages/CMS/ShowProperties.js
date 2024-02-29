import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import { Icon } from '@iconify/react';
import { useGetAllDisabledLettingsQuery, useGetAllLettingsQuery, useGetAllSalesQuery } from '../../store/storeApi';
import LettingProperty from '../../Component/PropertyDetails/LettingProperty';
import { Link } from 'react-router-dom';
import Property from '../../Component/PropertyDetails/Property';

const ShowProperties = () => {
  const [showLettings, setShowLettings] = useState(true);
  const [showDisabledProperties, setShowDisabledProperties] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const { data: lettings, refetch: refetchLettings, isFetching: lettingsLoading } = useGetAllLettingsQuery();
  const { data: sales, refetch: refetchSales, isFetching: salesLoading } = useGetAllSalesQuery();
  const {data: disabledLettings, refetch: refetchDisabledLettings, isFetching: disabledLettingsLoading} = useGetAllDisabledLettingsQuery()

  useEffect(() => {
    // Refetch data when the component mounts or whenever needed
    if (showLettings) {
      refetchLettings();
    } else if (showSales){
      refetchSales();
    } else{
      refetchDisabledLettings();
    }
  }, [showLettings, refetchLettings, refetchSales, refetchDisabledLettings, showSales, showDisabledProperties]);

  if (lettingsLoading || salesLoading || disabledLettingsLoading) {
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
  return (
    <div>
        <Layout>
            <main className="w-full col-center p-3vw">
                <h1 className="text-center text-2vw italic underline font-semibold cursor-pointer text-[#152347] w-full">Welcome to Danhamz's CMS!</h1>
                <section className="flex w-full items-center">
                    <h2 className="font-medium text-vw">Select a category</h2>
                    <div className="flex items-center ml-2vw">
                    <p onClick={() => {setShowLettings(true); setShowSales(false); setShowDisabledProperties(false)}} className={`text-vw cursor-pointer mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-blue-700' : 'bg-gray-500'} p-[0.7vw]`}><Icon icon="pixelarticons:buildings" className='text-vw mr-0.5vw' />Lettings</p>
                    <p onClick={() => {setShowLettings(false); setShowSales(true); setShowDisabledProperties(false)}} className={`text-vw cursor-pointer mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-gray-500' : 'bg-blue-700'} p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Sales</p>
                    <p onClick={() => {setShowLettings(false); setShowSales(false); setShowDisabledProperties(true)}} className={`text-vw cursor-pointer mt-2vw w-[15vw]  rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showDisabledProperties ? 'bg-gray-500' : 'bg-yellow-700'} p-[0.7vw]`}><Icon icon="fe:disabled" className='text-vw mr-0.5vw' />Let Properties</p>

                    <Link to={'/add-lettings-property'}>
                    <p className={`text-vw mt-2vw w-[9vw] rounded-md cursor-pointer text-start m-vw flex items-center text-white hover:bg-gray-500 bg-blue-500 p-[0.7vw]`}><Icon icon="pixelarticons:buildings" className='text-vw mr-0.5vw' />Add Lettings</p>
                    </Link>
                    <Link to={'/add-sales-property'}>
                    <p className={`text-vw mt-2vw w-[9vw] rounded-md cursor-pointer text-start m-vw flex items-center text-white hover:bg-gray-500 bg-blue-700 p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Add Sales</p>
                    </Link>
                    </div>
                </section>
                {showLettings ? 
                <>
                  <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {lettings?.map((item, index) => (
                <Link to={`/edit-lettings-property/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} />
                </Link>
              ))}
            </div>
            </article>
                </>: showDisabledProperties ? 
                  <>
                  <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {disabledLettings?.map((item, index) => (
                <Link to={`/edit-lettings-property/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms} sharedHouse={item?.sharedHouse}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.availableDate} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} />
                </Link>
              ))}
            </div>
            </article>
                </> : <>
                <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {sales?.map((item, index) => (
                <Link to={`/edit-sales-property/${item?._id}`}>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} name={item?.propertyName} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                 </Link>
              ))}
            </div>
            </article>
                </>}
            </main>
        </Layout>
    </div>
  )
}

export default ShowProperties