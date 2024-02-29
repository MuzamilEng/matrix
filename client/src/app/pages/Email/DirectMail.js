import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { emailForm } from '../../Data'
import { useForm, Controller } from 'react-hook-form'

const DirectMail = () => {
    const [emailDetails, setEmailDetails] = useState({name: '', phoneNumber: '', email: '', message: ''})
    const {handleSubmit, control, reset, setValue} = useForm({
        defaultValues: {
            name: '',
            phoneNumber: "",
            email: '',
            message: ''
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
        </main>
    </Layout>
  )
}

export default DirectMail