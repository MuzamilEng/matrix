import React, { useState } from "react";
import { navbar } from "../../Data";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Footer from "./Footer";

const MobileNav = ({showSidebar}) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleListClick = (title) => {
        setOpenMenu(prevTitle => (prevTitle === title ? null : title));
    };

    return (
        <>
        <nav className="bg-[#ffff] z-50 w-screen h-screen">
            {navbar?.map((item, index) => {
            return (
            <main className="" key={index}>
                <div className="mx-[2vw] p-vw">
                    <Link to={item?.link} className="flex items-center justify-between">
                        <img src="/images/Danhamz_logo.gif" alt="danhamz" className="w-full max-w-[25vw]" />
                        <Icon icon="basil:cancel-outline" className="text-4vw cursor-pointer hover:text-[#152347]" onClick={showSidebar} />
                    </Link>
                    <section className="mt-2vw">
                        {item?.lists?.map((list, index) => (
                            <div key={index}>
                                <div className="pt-0.5vw" onClick={() => handleListClick(list?.title)}>
                                    <Link className="flex justify-between mt-vw items-center" to={'/coming-soon'}>
                                    <p className="text-[3.5vw] text-[#152347] cursor-pointer">{list?.title}</p>
                                    <Icon icon="iconamoon:arrow-down-2" className="text-[2vw] text-[#152347]" />
                                    </Link>
                                </div>
                                {/* {openMenu === list?.title && (
                                    <div className="z-50 p-[1.5vw] mt-0.5vw w-full">
                                        {list?.options.map((option, index) => (
                                            <Link to={option?.link} className="flex items-center" key={index}>
                                                <span className="text-[#152347] text-[2vw] font-medium mr-0.5vw hover:text-gray-500">{option?.icon}</span>
                                                <p className="ml-2 text-[#152347] hover:text-gray-500 text-[2.5vw] xl:text-vw lg:text-vw md:text-vw">{option?.title}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )} */}
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            );
            })}
        </nav>
        <div className="absolute bottom-5vw w-full">
        <Footer />
        </div>
        </>
    );
};

export default MobileNav;
