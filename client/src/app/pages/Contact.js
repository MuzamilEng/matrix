import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Map from "../Component/Map/Map";
import { getInTouch, timings, timings2, timings3, timings4 } from "../Data";

const Contact = () => {
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
              <p className="text-gray-900 text-[0.9vw]">Contact us</p>
            </div>
          </nav>
          <section className="relative w-full">
            <img
              src="/images/bg-val3.jpg"
              alt="contact us"
              className="w-full h-20vw"
            />
            <div className="absolute top-[7vw] left-[4vw]">
              <h1 className="text-[#152347] text-3vw italic font-semibold">
                Contact Us
              </h1>
              <div className="mt-2vw">
                <Link
                  to=""
                  className="bg-pink-400 p-vw text-white text-center text-vw font-medium"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </section>
          {/* 1st */}
          <article className="col-center w-full p-3vw bg-">
           <main className="">
            <section className="flex flex-col w-full justify-between items-center">
            {timings?.map((item, index) => (
                    <div key={index} className="flex items-center w-full max-w-[90vw] justify-between m-2vw">
                        <div className="flex flex-col items-start">
                        <h1 className="text-[#152347] text-[2.1vw] font-semibold">{item.title}</h1>
                        <section className="mt-0.5vw">
                           {item?.info?.map((item2, index) => (
                            <div key={index} className="flex items-center">
                               <span className="text-[#152347] text-vw"> {item2.icon}</span>
                                <p className="text-gray-500 text-vw ml-vw">{item2.title}</p>
                            </div>
                           ))}
                        </section>
                        <section className="grid -ml-vw grid-cols-2 gap-3">
                            {item?.detail?.map((item3, index) => (
                                    <div key={index} className="mt-vw m-vw">
                                        <h2 className="text-[#152347] font-medium text-[1.5vw]"> {item3?.title}</h2>
                                        {item3?.timimngs?.map((item4, index) => (
                                            <div className="mt-vw" key={index}>
                                            <h2 className="text-[#152347] font-medium text-[0.9vw]"> {item4?.day}</h2>
                                            <p className="text-[#152347] font-normal text-[0.9vw]">{item4?.time}</p>
                                            </div>
                                        ))}
                                    </div>
                            ))}
                        </section>
                        </div>
                     <section>
                     <Map />
                    </section>
                    </div>
            ))}
           </section>
           </main>
          </article>
          {/* 2nd */}
          <article className="col-center w-full p-3vw bg-white">
           <main className="">
            <section className="flex flex-col w-full justify-between items-center">
            {timings2?.map((item, index) => (
                    <div key={index} className="flex items-center w-full max-w-[90vw] justify-between m-2vw">
                        <section className="-ml-5vw">
                     <Map />
                    </section>
                        <div className="flex flex-col items-start">
                        <h1 className="text-[#152347] text-[2.1vw] font-semibold">{item.title}</h1>
                        <section className="mt-0.5vw">
                           {item?.info?.map((item2, index) => (
                            <div key={index} className="flex items-center">
                               <span className="text-[#152347] text-vw"> {item2.icon}</span>
                                <p className="text-gray-500 text-vw ml-vw">{item2.title}</p>
                            </div>
                           ))}
                        </section>
                        <section className="grid -ml-vw grid-cols-2 gap-3">
                            {item?.detail?.map((item3, index) => (
                                    <div key={index} className="mt-vw m-vw">
                                        <h2 className="text-[#152347] font-medium text-[1.5vw]"> {item3?.title}</h2>
                                        {item3?.timimngs?.map((item4, index) => (
                                            <div className="mt-vw" key={index}>
                                            <h2 className="text-[#152347] font-medium text-[0.9vw]"> {item4?.day}</h2>
                                            <p className="text-[#152347] font-normal text-[0.9vw]">{item4?.time}</p>
                                            </div>
                                        ))}
                                    </div>
                            ))}
                        </section>
                        </div>
                    </div>
            ))}
           </section>
           </main>
          </article>
          {/* 3rd */}
          <article className="col-center w-full p-3vw bg-gray-300">
           <main className="">
            <section className="flex flex-col w-full justify-between items-center">
            {timings3?.map((item, index) => (
                    <div key={index} className="flex items-center w-full max-w-[90vw] justify-between m-2vw">
                        <div className="flex flex-col items-start">
                        <h1 className="text-[#152347] text-[2.1vw] font-semibold">{item.title}</h1>
                        <section className="mt-0.5vw">
                           {item?.info?.map((item2, index) => (
                            <div key={index} className="flex items-center">
                               <span className="text-[#152347] text-vw"> {item2.icon}</span>
                                <p className="text-gray-500 text-vw ml-vw">{item2.title}</p>
                            </div>
                           ))}
                        </section>
                        <section className="grid -ml-vw grid-cols-2 gap-3">
                            {item?.detail?.map((item3, index) => (
                                    <div key={index} className="mt-vw m-vw">
                                        <h2 className="text-[#152347] font-medium text-[1.5vw]"> {item3?.title}</h2>
                                        {item3?.timimngs?.map((item4, index) => (
                                            <div className="mt-vw" key={index}>
                                            <h2 className="text-[#152347] font-medium text-[0.9vw]"> {item4?.day}</h2>
                                            <p className="text-[#152347] font-normal text-[0.9vw]">{item4?.time}</p>
                                            </div>
                                        ))}
                                    </div>
                            ))}
                        </section>
                        </div>
                     <section>
                     <Map />
                    </section>
                    </div>
            ))}
           </section>
           </main>
          </article>
          {/* 4th */}
          <article className="col-center w-full p-3vw bg-white">
           <main className="">
            <section className="flex flex-col w-full justify-between items-center">
            {timings4?.map((item, index) => (
                    <div key={index} className="flex items-center w-full max-w-[90vw] justify-between m-2vw">
                        <section className="-ml-5vw">
                     <Map />
                    </section>
                        <div className="flex flex-col items-start">
                        <h1 className="text-[#152347] text-[2.1vw] font-semibold">{item.title}</h1>
                        <section className="mt-0.5vw">
                           {item?.info?.map((item2, index) => (
                            <div key={index} className="flex items-center">
                               <span className="text-[#152347] text-vw"> {item2.icon}</span>
                                <p className="text-gray-500 text-vw ml-vw">{item2.title}</p>
                            </div>
                           ))}
                        </section>
                        <section className="grid -ml-vw grid-cols-2 gap-3">
                            {item?.detail?.map((item3, index) => (
                                    <div key={index} className="mt-vw m-vw">
                                        <h2 className="text-[#152347] font-medium text-[1.5vw]"> {item3?.title}</h2>
                                        {item3?.timimngs?.map((item4, index) => (
                                            <div className="mt-vw" key={index}>
                                            <h2 className="text-[#152347] font-medium text-[0.9vw]"> {item4?.day}</h2>
                                            <p className="text-[#152347] font-normal text-[0.9vw]">{item4?.time}</p>
                                            </div>
                                        ))}
                                    </div>
                            ))}
                        </section>
                        </div>
                    </div>
            ))}
           </section>
           </main>
          </article>
          <section className='relative col-center p-3vw w-full bg-[#6665a9]'>
                {getInTouch?.map((item, index) => (
                    <div className="relative flex justify-between max-w-[80vw] w-full" key={index}>
                        <div className=" w-full max-w-[35vw]">
                            <h1 style={{lineHeight: "2.7vw"}} className='text-white italic text-[2.5vw] font-medium w-full max-w-[30vw]'>{item?.title}</h1>
                            <p className='text-white text-vw mt-[1.5vw] font-medium w-full max-w-[35vw]'>{item?.info}</p>
                            <div className="mt-2vw">
                            <Link to="" className="p-vw bg-[#152347] text-vw text-white font-medium text-center">Get in touch</Link>
                            </div>
                        </div>
                        <img src={item?.img} alt="about" className="w-full bg-inherit h-20vw max-w-[25vw]" />
                    </div>
                ))}
            </section>
        </main>
      </Layout>
    </div>
  );
};

export default Contact;
