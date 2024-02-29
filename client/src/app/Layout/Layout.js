import React, { useState } from 'react';
import Footer from '../Component/Common/Footer';
import Topbar from '../Component/Common/Topbar';
import Navbar from '../Component/Common/Navbar';
import MobileNav from '../Component/Common/MobileNav';
import { Icon } from '@iconify/react';

const Layout = ({ children }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <main className="bg-gray-300 relative w-full h-screen overflow-x-hidden">
                <Topbar />
                {/* Conditionally render Navbar or MobileNav based on screen size */}
                <div className="hidden xl:block lg:block md:block"> {/* Hide on mobile */}
                    <Navbar />
                </div>
               {!show ? <Icon icon="ph:list-bold" onClick={()=> setShow(!show)} className='text-white block xl:hidden lg:hidden md:hidden text-[2.5vw] absolute top-vw right-2vw ' /> : <div className="block xl:hidden lg:hidden md:hidden"> {/* Hide on desktop */}
                    <MobileNav showSidebar={()=> setShow(!show)}/>
                </div>}
              {!show && <div className="">
                {children}
                <Footer />
                </div>}
            </main>
        </div>
    );
};

export default Layout;
