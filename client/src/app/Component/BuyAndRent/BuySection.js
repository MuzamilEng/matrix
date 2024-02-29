import React, { useEffect, useState } from 'react'
import { rentContainer1, } from '../../Data'
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useGetAllSalesQuery } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';
import { Icon } from '@iconify/react';
import SearchInput from './SearchInput';
import PropertySearch from '../../pages/PropertySearch';
  

const BuySection = () => {
  const {searchedSalesProperties, setSearchedSalesProperties, searchedRentLocation, setSearchedRentLocation,} = useGlobalContext();
  const [filteredResult, setFilteredResult] = useState({location: searchedRentLocation || "", isAvailableFrom: '', propertyType: "", minPrice: null, maxPrice: null, minBedrooms: null, maxBedrooms: null, bathrooms: null, features: ""});
  const {data: sales} = useGetAllSalesQuery()
  const [clearInputField, setClearInputField] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const { handleSubmit, setValue, control, reset } = useForm({
      defaultValues: {
          minPrice: null,
          maxPrice: null,
          minBedrooms: null, maxBedrooms: null,
          bathrooms: null,
          propertyType: searchedRentLocation || "",
          location: '',
          features: '',
          isAvailableFrom: ''
      },
  });
// console.log(searchedRentLocation, "searchedRentLocation");
  const handleSearch = (e) =>{
    setFilteredResult({...filteredResult, [e.target.name]: e.target.value})
    setValue(e.target.name, e.target.value)
  }

    const onSubmit = async (data, e) => {
      e.preventDefault();
    setShowLoading(true)
    setSearchedSalesProperties([])
      try {
        let queryString = '';
    
        // Conditionally build the query string
        if(searchedRentLocation !== "") {
          queryString += `?location=${searchedRentLocation}`;
        }
        if (data?.maxPrice !== null) {
          queryString += `&maxPrice=${data?.maxPrice}`;
        }
        if (data?.minPrice !== null) {
          queryString += `&minPrice=${data?.minPrice}`;
        }
        if (data?.minBedrooms !== null) {
          queryString += `&minBedrooms=${data?.minBedrooms}`;
        }
        if (data?.maxBedrooms !== null) {
          queryString += `&maxBedrooms=${data?.maxBedrooms}`;
        }
        if (data?.bathrooms !== null) {
          queryString += `&bathrooms=${data?.bathrooms}`;
        }
        if (data?.location !== '') {
          queryString += `&location=${data?.location}`;
        }
        if (data?.features !== '') {
          queryString += `&features=${data?.features}`;
        }
        if (data?.propertyType !== '') {
          queryString += `&propertyType=${data?.propertyType}`;
        }
        if (data?.isAvailableFrom !== '') {
          queryString += `&isAvailableFrom=${data?.isAvailableFrom}`;
        }
        // Remove the leading '&' if there is a query string
        queryString = queryString ? queryString.slice(1) : '';
    
        // Make the request only if there is a valid query string
        if (queryString) {
          const fetchData = await axios.get(`${process.env.REACT_APP_API_URL}/sales/advancedSearch?${queryString}`);
          const result = await fetchData.data
          setSearchedSalesProperties(result);
          setShowLoading(false);
          setClearInputField(true);       
        } else {
          setSearchedSalesProperties(sales);
          setShowLoading(false);
          setClearInputField(true);       
        }
      } catch (error) {
        // console.error('Error during search:', error);
      }
      reset({
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        bathrooms: '',
        propertyType: '',
        location: '',
        features: '',
        isAvailableFrom: ''
      });
      setSearchedRentLocation('')
      setValue('location', '');
      setClearInputField(true);       
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full h-full'>
      <main className="w-full bg-[#152347] opacity-90 p-vw">
   <div className="flex items-center relative">
   <SearchInput clearInputField={clearInputField} />
   <button type='submit' className='bg-yellow-600 text-white rounded-[0.5vw] hover:bg-yellow-500 text-[2vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]  p-[0.7vw] absolute right-[14vw] xl:right-[15vw] lg:right-[15vw] md:right-[15vw] xl:top-0 lg:top-0 md:top-0 top-0.5vw'><Icon icon="bi:search" className='text-[3vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]  font-medium text-white' /></button>
   </div>
    <article className='w-full col-center'>
    <section className='bg-white mt-[1vw] w-full xl:max-w-[90vw] lg:max-w-[90vw] md:max-w-[90vw] flex'>
      {rentContainer1?.map((item, index) => (
        <div className="flex h-[7vw] items-center w-full cursor-pointer max-w-[20vw] border-[1px]" key={index}>
          <span className='text-[2vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] ml-vw text-blue-950'>{item?.icon}</span>
          <Controller 
            control={control}
            name={item?.name}
            render={({ field }) => (
              <select {...field} onChange={handleSearch} className='w-full bg-inherit -ml-0.5vw cursor-pointer text-[2vw] xl:text-vw lg:text-vw md:text-vw font-medium text-black p-vw focus:outline-none appearance-none'>
                <option value="" className='text-[2vw] xl:text-vw lg:text-vw md:text-vw bg-inherit'>{item?.title}</option>
                {item?.options?.map((option, index) => (
                  <option key={index} className='text-[2vw] xl:text-vw lg:text-vw md:text-vw' value={option?.value}>{option?.title}</option>
                ))}
              </select>
            )}
          />
        </div>
      ))}
      </section>
    </article>
    </main>
    {showLoading && 
        <div className='flex justify-center items-center h-[50vh]'>
        <div role="status">
                 <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                 </svg>
                 <span class="sr-only">Loading...</span>
             </div>
             </div>
    }
    {
      searchedSalesProperties?.length > 0 ? <PropertySearch searchedProperties={searchedSalesProperties} /> : <p className='text-2vw font-medium text-blue-950 text-center mt-2vw w-full'>nothing found. Search your desired property</p>
    }
    </form>
  )
}

export default BuySection
