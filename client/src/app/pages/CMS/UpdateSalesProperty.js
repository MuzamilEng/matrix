import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddSalePropertyMutation, useDeleteSalePropertyMutation, useGetSalesByIdQuery, useUpdateSalePropertyMutation } from '../../store/storeApi';
import { propertyUpdateFormSales } from '../../Data';
import {useForm, Controller} from 'react-hook-form';
import Layout from '../../Layout/Layout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Maps from '../../Component/Map/Maps';
import PinLocation from '../../Component/Map/PinLocation';
import FileInput from './FileInput';

const UpdateSalesProperty = () => {
    const {id} = useParams()
    const [deleteSaleProperty] = useDeleteSalePropertyMutation();
    const [searchedLocation, setSearchedLocation] = useState(null)
    const {data: lettings,  refetch: refetchSales} = useGetSalesByIdQuery(id);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [image1URL, setImage1URL] = useState('');
    const [image2URL, setImage2URL] = useState('');
    const [image3URL, setImage3URL] = useState('');
    const [image4URL, setImage4URL] = useState('');
    const [image5URL, setImage5URL] = useState('');
    const [image6URL, setImage6URL] = useState('');
    const [image7URL, setImage7URL] = useState('');
    const [image8URL, setImage8URL] = useState('');
    const [image9URL, setImage9URL] = useState('');
    const [image10URL, setImage10URL] = useState('');
    const [showSearchMap, setShowSearchMap] = useState(false)
    const [updateSaleProperty]= useUpdateSalePropertyMutation()
    const [addSaleProperty] = useAddSalePropertyMutation()

    const [propertyInfo, setPropertyInfo] = useState({
      propertyName: "", propertyType  :"", price : 0, furnished :"", propertyLocation :"", availableDate: "", location: "",
      description :"", bedrooms : 0, bathrooms : 0, bills :"", features: "", reception :"", aditionalGuide: "", videoLink: "", counselTax: "", deposit: 0,
      image1: "", image2:"", image3:"", image4:"", image5:"", image6:"", image7:"", image8:"", image9:"", image10:"", epc: "", lat: 0, lng: 0,
      });

    const navigate = useNavigate()
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      })
    const {handleSubmit, control, reset, setValue} = useForm({
      defaultValues: {
        propertyName: propertyDetails?.propertyName || "", propertyType : propertyDetails?.propertyType || "",
        price : propertyDetails?.price || "", availableDate: propertyDetails?.availableDate || "", location: propertyDetails?.location || "",
        furnished : propertyDetails?.furnished || "", propertyLocation : propertyDetails?.propertyLocation || "",
        description :propertyDetails?.description || "", bedrooms : propertyDetails?.bedrooms || 0,features: propertyDetails?.features || "",
        videoLink : propertyDetails?.videoLink || "", counselTax : propertyDetails?.counselTax || "", deposit : propertyDetails?.deposit || 0,
        bathrooms : propertyDetails?.bathrooms || 0, bills : propertyDetails?.bills || "", reception : propertyDetails?.reception || "",
        aditionalGuide: propertyDetails?.aditionalGuide || "", image1: propertyDetails?.image1?.url || "",
        image2: propertyDetails?.image2?.url || "", image3: propertyDetails?.image3?.url || "", image4: propertyDetails?.image4?.url || "",
        image5: propertyDetails?.image5?.url || "", image6: propertyDetails?.image6?.url || "", image7: propertyDetails?.image7?.url || "",
        image8: propertyDetails?.image8?.url || "", image9: propertyDetails?.image9?.url || "", image10: propertyDetails?.image10?.url || "",
        epc: propertyDetails?.epc || "", lat: propertyDetails?.lat || 0, lng: propertyDetails?.lng || 0,
      }
    })

 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value);
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage1URL(imageURL);
        }
      };
      const handleImageChange5 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage5URL(imageURL);
        }
      };
      const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage2URL(imageURL);
        }
      };
      const handleImageChange3 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage3URL(imageURL);
        }
      };
      const handleImageChange4 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage4URL(imageURL);
        }
      };

      const handleImageChange6 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage6URL(imageURL);
        }
      };

      const handleImageChange7 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage7URL(imageURL);
        }
      };
      const handleImageChange8 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage8URL(imageURL);
        }
      };

      const handleImageChange9 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage9URL(imageURL);
        }
      };
      const handleImageChange10 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage10URL(imageURL);
        }
      };

      const onSubmit = async (data) => {
        const formData = new FormData();
    
        // Append text data to formData
        for (const key in data) {
          if (data[key] !== undefined) {
            formData.append(key, data[key]);
          }
        }
    
        // Convert coordinates to numbers and append to formData
        if (!propertyDetails?.lat && !propertyDetails?.lng) {
          formData.append('lat', coordinates?.lat);
          formData.append('lng', coordinates?.lng);
        }
        if (propertyDetails?.lat && propertyDetails?.lng && showSearchMap) {
          formData.append('lat', coordinates?.lat);
          formData.append('lng', coordinates?.lng);
        }
    
        // Append image to formData
        if (propertyDetails?.image1) {
          formData.append('image1', propertyDetails.image1);
        }
        if (propertyDetails?.image2) {
          formData.append('image2', propertyDetails.image2);
        }
        if (propertyDetails?.image3) {
          formData.append('image3', propertyDetails.image3);
        }
        if (propertyDetails?.image4) {
          formData.append('image4', propertyDetails.image4);
        }
        if (propertyDetails?.image5) {
          formData.append('image5', propertyDetails.image5);
        }
        if (propertyDetails?.image6) {
          formData.append('image6', propertyDetails.image6);
        }
        if (propertyDetails?.image7) {
          formData.append('image7', propertyDetails.image7);
        }
        if (propertyDetails?.image8) {
          formData.append('image8', propertyDetails.image8);
        }
        if (propertyDetails?.image9) {
          formData.append('image9', propertyDetails.image9);
        }
        if (propertyDetails?.image10) {
          formData.append('image10', propertyDetails.image10);
        }
    
        try {
          if (id) {
            const result = await updateSaleProperty({ id, data: formData });
            // console.log(result, 'update');
            toast.success('Property successfully updated', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            setTimeout(() => {
              navigate('/cms');
            }, 3000);
          } else {
            const result = await addSaleProperty(formData);
            // console.log(result, 'add');
            toast.success('Property successfully created', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
          }
    
          setTimeout(() => {
            navigate('/cms');
          }, 3000);
        } catch (error) {
          toast.error('An error occurred.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
          });
          // console.error(error);
        }
      };

      const handleDeleteProperty = async () => {
        // first show alert to confirm deletion
        const confirmDeletion = window.confirm("Are you sure you want to delete this property? This action cannot be undone.");
        if (confirmDeletion) {
          try {
            await deleteSaleProperty(id);
            toast.success('Property successfully deleted', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            setTimeout(() => {
              navigate('/cms');
            }, 3000);
          } catch (error) {
            toast.error('An error occurred.', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            // console.error(error);
          }
        }
        }
      useEffect(() => {
        if(id){
          refetchSales();
        }
      }, [id, refetchSales]);
    
    useEffect(() => {
      if (lettings) {
        setPropertyDetails(lettings);
  
        // Set default values when 'lettings' data changes
        Object.keys(propertyInfo).forEach((key) => {
          setValue(key, lettings[key]);
        });
  
        // Set image URLs
        setImage1URL(lettings?.image1?.url || '');
        setImage2URL(lettings?.image2?.url || '');
        setImage3URL(lettings?.image3?.url || '');
        setImage4URL(lettings?.image4?.url || '');
        setImage5URL(lettings?.image5?.url || '');
        setImage6URL(lettings?.image6?.url || '');
        setImage7URL(lettings?.image7?.url || '');
        setImage8URL(lettings?.image8?.url || '');
        setImage9URL(lettings?.image9?.url || '');
        setImage10URL(lettings?.image10?.url || '');
      }
    }, [lettings, setValue]);
      useEffect(() => {
        // console.log(searchedLocation, 'searchedLocation');
        const lat = Number(searchedLocation?.center?.[0]) || 0;
        const lng = Number(searchedLocation?.center?.[1]) || 0;
      
        setCoordinates({ ...coordinates, lat, lng });
      }, [searchedLocation]);
  return (
    <div>
        <Layout>
        <main className="w-full relative col-center bg-gray-100 p-3vw">
        <ToastContainer />
          <Link className='text-vw absolute top-3vw left-3vw text-white p-0.5vw bg-blue-500 hover:bg-blue-600 rounded-md' to='/cms'>Go Back</Link>
        <h1 className='text-center  text-2vw font-semibold italic underline '>{id ? 'Update Property:' : 'Add Property'} {propertyDetails?.propertyName}</h1>
        {id && <button onClick={handleDeleteProperty} className='text-vw top-3vw absolute hover:bg-red-500 right-3vw text-white bg-red-600 rounded-md w-fit p-[0.7vw]'>Delete Property</button> }
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full col-center wax-w-[80vw] p-vw">
            <div className="grid grid-cols-2 w-full gap-2">
            {propertyUpdateFormSales?.map((item, index)=>{
                return <main className='p-vw' key={index}>
                    <label htmlFor="" className='text-vw m-0.5vw font-medium mb-0.3vw'>{item?.label}</label> <br />
                   {item?.type === 'text' || item?.type === 'number' ? <>
                   <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({ field }) => (
                        <input
                          {...field}
                          onChange={handleInputChange}
                          className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                      )}
                    />
                   </>: item?.type === 'select' ? <>
                   <Controller 
                   name={item?.name}
                   control={control}
                   render={({ field }) => (
                     <select 
                     className='text-vw p-0.5vw border-[1px] w-full max-w-[30vw] focus:outline-none focus:shadow-md rounded-md'
                     {...field}
                     onChange={handleInputChange}
                     >
                        <option className='text-vw' value="">Select the option</option>
                     {item?.options?.map((option, index)=>{
                         return <option className='text-vw' key={index} value={option?.value}>{option?.label}</option>
                     })}
                     </select>
                   )}
                   />
                   </> : item?.type === 'textarea' ?
                   <Controller
                   name={item?.name}
                   control={control}
                   rules={item?.rules}
                   render={({ field }) => (
                     <textarea
                       {...field}
                       onChange={handleInputChange}
                       className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                       type={item?.type}
                       rows={5}
                       placeholder={item?.placeholder}
                     ></textarea>
                   )}
                 /> : 
                 <Controller
                 name={item?.name}
                 control={control}
                 rules={item?.rules}
                 render={({ field }) => (
                   <input
                     {...field}
                     onChange={handleInputChange}
                     className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                     type={item?.type}
                     placeholder={item?.placeholder}
                   />
                 )}
               /> 
                   }
                </main>
                
            })}
            </div>
            <p className='text-[1vw] text-green-600 font-medium'>*** The image file size should be less than 1mb ***</p>
            <div className="grid mt-[1vw] grid-cols-2 w-full">
                 <FileInput name='image1' imageUrl={propertyDetails?.image1?.url || image1URL} onChange={handleImageChange} /> 
                 <FileInput name='image2' imageUrl={propertyDetails?.image2?.url || image2URL} onChange={handleImageChange2} /> 
                 <FileInput name='image3' imageUrl={propertyDetails?.image3?.url || image3URL} onChange={handleImageChange3} /> 
                 <FileInput name='image4' imageUrl={propertyDetails?.image4?.url || image4URL} onChange={handleImageChange4} /> 
                 <FileInput name='image5' imageUrl={propertyDetails?.image5?.url || image5URL} onChange={handleImageChange5} /> 
                 <FileInput name='image6' imageUrl={propertyDetails?.image6?.url || image6URL} onChange={handleImageChange6} /> 
                 <FileInput name='image7' imageUrl={propertyDetails?.image7?.url || image7URL} onChange={handleImageChange7} /> 
                 <FileInput name='image8' imageUrl={propertyDetails?.image8?.url || image8URL} onChange={handleImageChange8} /> 
                 <FileInput name='image9' imageUrl={propertyDetails?.image9?.url || image9URL} onChange={handleImageChange9} /> 
                 <FileInput name='image10' imageUrl={propertyDetails?.image10?.url || image10URL} onChange={handleImageChange10} /> 
            </div>
              <p className='text-vw text-white p-0.5vw mt-vw cursor-pointer hover:bg-blue-600 rounded-md bg-blue-500' onClick={() => setShowSearchMap(!showSearchMap)}>Change Property Location</p>
            <div className="m-vw relative w-full h-full ">
              {propertyDetails?.lat && propertyDetails?.lng && !showSearchMap ? <PinLocation lat={propertyDetails?.lat} lng={propertyDetails?.lng} />: <Maps setSearchedLocation={setSearchedLocation} /> }
              
            </div>
            <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white mt-[27vw] p-0.5vw rounded-md'>{id ? 'Update Property' : 'Add Property'}</button>
        </form>

        </main>

        </Layout>
    </div>
  )
}

export default UpdateSalesProperty