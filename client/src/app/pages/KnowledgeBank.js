import React from "react";
import Layout from "../Layout/Layout";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { catagories, catagoryCard } from "../Data";
import CatagoryCard from "../Component/Cards/CatagoryCard";

const KnowledgeBank = () => {
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
              <p className="text-gray-900 text-[0.9vw]">Knowledge Bank</p>
            </div>
          </nav>
          {/* content */}
          <div className="p-3vw">
            <h1 className="text-[#152347] font-medium text-3vw text-center">Knowledge Bank</h1>
            <section className="ml-[1.7vw]">
            {catagories?.map((item, index) => (
            <select key={index} style={{ outline: 'none' }} className='cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center text-black p-[0.8vw] w-full max-w-[20vw]'>
            {item?.option?.map((option, index) => (
            <option key={index} value={option?.id} className='text-start text-[0.9vw] focus:outline-none text-[#152347] p-vw' style={{ outline: 'none' }}>{option?.title}</option>
            ))}
            </select>
            ))}
            </section>
            <article className="col-center">
              <div className="grid grid-cols-4 gap-2">
                {catagoryCard?.map((card, index) => (
                  <CatagoryCard  key={index} title={card?.title} title2={card?.title2} bg={card?.bg} info={card?.info} featured={card?.featured} />
                ))}
              </div>
            </article>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default KnowledgeBank;
