import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { report_article, report_nav, report_section } from '../Data';

const Report = () => {
  return (
    <div>
        <Layout>
        <main>
                {/* link */}
        <nav className="bg-gray-300 w-full p-vw">
            <div className="flex items-center ml-10vw">
              <Link to="/" className="flex items-center">
                <p className="text-gray-500 text-[0.8vw]">Home</p>
                <Icon
                  icon="mdi:keyboard-arrow-right"
                  className="text-gray-500 text-[0.8vw]"
                />
              </Link>
              <p className="text-gray-900 text-[0.9vw]">Report a Repair</p>
            </div>
        </nav>
        {/* time-format */}
        <section className=''>
                {report_nav?.map((item, index) => (
                    <main className='w-full'>
                    <div className="relative flex justify-between w-full p-3vw bg-[#6665a9]" key={index}>
                        <div className=" w-full max-w-[35vw]">
                            <h1 style={{lineHeight: "2.7vw"}} className='text-white italic text-[2.5vw] font-medium w-full max-w-[30vw]'>{item?.title}</h1>
                            <p className='text-[#152347] text-2vw italic mt-[1.5vw] font-semibold w-full max-w-[30vw]'>{item?.info}</p>
                            <div className="mt-2vw">
                            <Link to="" className="p-vw bg-[#152347] text-white text-vw font-medium text-center">Get in touch</Link>
                            </div>
                        </div>
                        <img src={item?.img} alt="about" className="w-full -mt-4vw h-20vw max-w-[35vw]" />
                    </div>
                    <section className='w-full col-center bg-gray-200'>
                    <article className="w-full  p-3vw flex max-w-[80vw] justify-between items-center">
                        <h1 className='text-[#152347] text-[1.8vw] font-semibold mt-vw w-full max-w-[35vw]'>{item?.info2}</h1>
                        <p className='text-gray-700 text-vw font-semibold mt-vw w-full max-w-[35vw]'>{item?.para}</p>
                    </article>
                    </section>
                    </main>
                ))}
        </section>
        {/* banner */}
        <article className="w-full col-center p-3vw bg-white">
            <h1 className='mt-vw text-[#152347] text-[1.4vw] font-medium w-full max-w-[60vw]'>If you have a repair to report, a maintenance issue, or an emergency, log it now.
            Use the buttons below to access the system and choose the correct team to report your repair to.
            </h1>
           <section className='flex mt-vw items-center'>
           <div className="flex p-3vw bg-purple-500 items-center m-vw justify-center mt-vw">
                <Link className='text-white text-2vw text-start font-medium w-full max-w-[19vw]'>Leed Team Report Repair</Link>
            </div>
            <div className="flex p-3vw bg-[#152347] items-center m-vw justify-center mt-vw">
                <Link className='text-white text-2vw text-start font-medium w-full max-w-[19vw]'>Leed Team Report Repair</Link>
            </div> 
            <div className="flex p-3vw bg-gray-200 items-center m-vw justify-center mt-vw">
                <Link className='text-[#152347] text-2vw text-start font-medium w-full max-w-[19vw]'>Leed Team Report Repair</Link>
            </div>
           </section>
        </article>
        {/* commitment */}
        <article className="w-full col-center p-3vw bg-gray-200">
          <div className="flex items-start justify-between w-full max-w-[85vw]">
            {report_article?.map((item, index) => (
              <section className="w-full max-w-[40vw]" key={index}>
                <h1 className='text-[#152347] text-[1.8vw] font-semibold mt-vw w-full max-w-[35vw]'>{item?.title}</h1>
                <p className='text-gray-700 text-vw mt-vw w-full max-w-[38vw]'>{item?.info}</p>
               {item?.img && <img src={item?.img} alt="" className='w-full mt-vw' />}
               <p className='text-gray-700 text-vw mt-vw w-full max-w-[38vw]'>{item?.info2}</p>
              </section>
            ))}
          </div>
        </article>
        {/* emergency */}
        <article className='col-center bg-white p-3vw'>
              <div className="flex">
              <section className="w-full max-w-[40vw]">
                  <img src="/images/phone1.jpg" alt="emergency" className='w-full max-w-[35vw]'/>
                </section>
              <section className="w-full max-w-[40vw]">
                    <h1 className='text-[#152347] text-[2.1vw] w-full max-w-[30vw] font-medium'>What to do in an emergency.</h1>
                    <p className='text-gray-600 text-vw mt-vw max-w-[39vw] font-medium w-full'>In an emergency situation, we prioritise our maintenance requests and aim to get out to the property within 24 working hours. When there is an emergency, we ask you to log your request on our portal in the normal way but also ring to speak with your Property Manager directly, within normal working hours.</p>
                   <div className="mt-2vw">
                   {report_section?.map((item, index) => (
                    <li  style={{ listStyleType: "disc" }} className='text-gray-600 text-vw list-decimal block' key={index}>
                       <span className='text-black text-[1.2vw] font-medium'>.</span><span className='ml-0.3vw text-justufy'>{item?.title}</span> 
                    </li>
                    ))}
                   </div>
                </section>
                  
              </div>
            </article>
        </main>
        </Layout>
    </div>
  )
}

export default Report