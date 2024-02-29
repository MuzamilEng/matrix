import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    const [day, setDay] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const updatedDay = currentDate.getDate();
            const updatedHours = currentDate.getHours();
            const updatedMinutes = currentDate.getMinutes();
            const updatedSeconds = currentDate.getSeconds();

            setDay(updatedDay);
            setHours(updatedHours);
            setMinutes(updatedMinutes);
            setSeconds(updatedSeconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Layout>
                <div className="flex justify-center items-center h-full w-full bg_img">
                    <div className="w-full col-center bg-[#152347] my-[4vw] xl:my-3vw lg:my-3vw md:my-3vw opacity-90 max-w-[50vw] rounded-lg p-2vw">
                        <div className="w-full max-w-[12vw] mt-2vw">
                            <img src="/images/Danhamz_logo.gif" alt="danhamz" className="w-full" />
                        </div>
                        <p className="text-[1.5vw] flex items-center italic text-white font-semibold">
                            New features coming soon <Icon icon="mingcute:emoji-fill" className="text-[1.5vw] ml-0.5vw text-amber-500" />
                        </p>
                        <div className="mt-2vw w-full flex items-center justify-around">
                            <p className="col-center p-vw bg-gray-900 rounded-md w-full max-w-[6vw] cursor-pointer">
                                <span className="text-white font-medium text-2vw">{day}</span>
                                <span className="text-white text-vw">Day</span>
                            </p>
                            <p className="col-center p-vw bg-gray-900 rounded-md w-full max-w-[6vw] cursor-pointer">
                                <span className="text-white font-medium text-2vw">{hours}</span>
                                <span className="text-white text-vw">Hour</span>
                            </p>
                            <p className="col-center p-vw bg-gray-900 rounded-md w-full max-w-[6vw] cursor-pointer">
                                <span className="text-white font-medium text-2vw">{minutes}</span>
                                <span className="text-white text-vw">Minute</span>
                            </p>
                            <p className="col-center p-vw bg-gray-900 rounded-md w-full max-w-[6vw] cursor-pointer">
                                <span className="text-white font-medium text-2vw">{seconds}</span>
                                <span className="text-white text-vw">Second</span>
                            </p>
                        </div>
                        <p className="text-white text-[1.3vw] mt-vw italic font-semibold">We'll help to find your new home!</p>
                        <p className="text-vw text-center text-white w-full max-w-[45vw]">
                            Your one-stop destination for comprehensive property solutions. Whether you're looking to rent, buy, refurbish, maintain, or manage your property, we have the expertise and dedication to meet all your property needs.
                        </p>
                        <section className="flex items-center mt-4vw justify-center">
                            <Link to="https://wa.me/+4407815935420" target='_blank'>
                                <button className="p-vw font-semibold bg-amber-500 text-vw hover:bg-amber-600 text-white rounded-md m-vw w-[12vw]">Contact Us</button>
                            </Link>
                            <Link to="/send-mail">
                                <button className="p-vw font-semibold bg-[#ffff] text-vw text-[#121e3d] hover:bg-[#f5f5f5] rounded-md m-vw w-[12vw]">Email Us</button>
                            </Link>
                        </section>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ComingSoon;
