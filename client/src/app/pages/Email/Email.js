import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { emailForm } from '../../Data'
import { useForm, Controller } from 'react-hook-form'
import LettingProperty from '../../Component/PropertyDetails/LettingProperty'
import { useParams } from 'react-router-dom'
import { useGetLettingsByIdQuery, useGetSalesByIdQuery } from '../../store/storeApi'
import Property from '../../Component/PropertyDetails/Property'

const Email = () => {
    const { id: lettingsId } = useParams();
    const {id: salesId} = useParams();
    const { data: propertyDetails, } = useGetLettingsByIdQuery(lettingsId);
    const { data: salesPropertyDetails } = useGetSalesByIdQuery(salesId);
    const [emailDetails, setEmailDetails] = useState({name: '', phoneNumber: '', email: '', message: ''})
    const {handleSubmit, control, reset, setValue} = useForm({
        defaultValues: {
            name: '',
            phoneNumber: "",
            email: '',
            message: '',
            propertyName: propertyDetails?.propertyName || salesPropertyDetails?.propertyName || 'property'

        }
    })

    const handleInputChange = (e)=> {
        const {name, value} = e.target
        setEmailDetails({...emailDetails, [name]: value})
        setValue(name, value)
    }

    const onSubmit = async (data) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            // console.log('Email sent successfully');
            // Optionally, reset form fields after successful submission
            reset();
          } else {
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error.message);
        }
      };
      
  return (
    <Layout>
        <main className='w-full flex p-2vw bg-gray-100' >
            <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[50vw] p-2vw'>
                {emailForm?.map((item, index)=> {
                    return <div className="w-full max-w-[45vw] p-[0.5vw]" key={index}>
                        <label htmlFor={item?.id} className='text-[1.2vw] font-medium'>{item?.label}</label>
                        {item?.type === 'textarea' ? 
                           <Controller
                            name={item?.name}
                            control={control}
                            rules={item?.rules}
                            render={({field}) => (
                                <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                                 onChange={handleInputChange} rows={6} className='w-full p-[0.7vw] focus:outline-none focus:shadow-md border-[1px] border-gray-400 rounded-md mt-0.5vw' ></textarea>
                            )}
                        /> : 
                        <Controller
                        name={item?.name}
                        control={control}
                        rules={item?.rules}
                        render={({field}) => (
                            <input type={item?.type} placeholder={item?.placeholder} {...field}
                             onChange={handleInputChange} className='w-full p-[0.7vw] border-[1px] focus:outline-none focus:shadow-md border-gray-400 rounded-md mt-0.5vw spin-button-none' />
                        )}
                       />
                       }   
                    </div>
                })}
                <button className='w-full max-w-[44vw] hover:bg-[#152347e8] bg-[#152347] text-white p-0.5vw rounded-md mt-2vw'>Submit</button>
            </form>
           {propertyDetails ? <section className='ml-2vw mt-4vw'>
            <LettingProperty key={propertyDetails?._id} id={propertyDetails?._id}
                 quantity={propertyDetails?.bedrooms} sharedHouse={propertyDetails?.sharedHouse}
                 weekPrice={propertyDetails?.pricePerWeek} monthPrice={propertyDetails?.pricePerMonth} location={propertyDetails?.propertyName}
                 bedRooms={propertyDetails?.bedrooms}  available={propertyDetails?.availableDate} furnished={propertyDetails?.furnished} bills={propertyDetails?.bills}
                img={propertyDetails?.image1?.url} img2={propertyDetails?.image2?.url} img3={propertyDetails?.image3?.url} img4={propertyDetails?.image4?.url} img5={propertyDetails?.image5?.url} img6={propertyDetails?.image6?.url} img7={propertyDetails?.image7?.url} img8={propertyDetails?.image8?.url} img9={propertyDetails?.image9?.url} img10={propertyDetails?.image10?.url} img11={propertyDetails?.image11?.url} img12={propertyDetails?.image12?.url} img13={propertyDetails?.image13?.url} img14={propertyDetails?.image14?.url} img15={propertyDetails?.image15?.url} />
              
            </section> : 
            <section className='ml-2vw mt-4vw'>
             <Property key={salesPropertyDetails?._id} tag={salesPropertyDetails?.tag} icon={salesPropertyDetails?.icon} quantity={salesPropertyDetails?.bedrooms} price={salesPropertyDetails?.price} name={salesPropertyDetails?.propertyName} icon2={salesPropertyDetails?.pics?.[0]?.icon} bed_rooms={salesPropertyDetails?.bedrooms} img={salesPropertyDetails?.image1?.url} img2={salesPropertyDetails?.image2?.url} img3={salesPropertyDetails?.image3?.url} img4={salesPropertyDetails?.image4?.url} img5={salesPropertyDetails?.image5?.url} />
             </section>
            }
        </main>
    </Layout>
  )
}

export default Email