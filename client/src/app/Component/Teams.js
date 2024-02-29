import React from 'react'
import { ourTeam } from '../Data';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";


const Teams = () => {
  return (
    <div>
         {/* teams */}
         <main className="w-full bg-white">
          {ourTeam?.map((item, index) => {
            return (
              <div
                className="flex slider-container justify-center items-center flex-col"
                key={index}
              >
                <h1 className="text-[#152347] text-center pt-3vw text-2vw text-semibold">
                  {item?.title}
                </h1>
                <p className="text-gary-400 text-center pt-0.5vw text-vw">
                  {item?.info}
                </p>
                <div className="flex slider mt-2vw w-full">
                  {item?.team?.map((person, index) => (
                    <section
                      className="w-full max-w-[20vw] review-item"
                      key={index}
                    >
                      <img
                        src={person?.img}
                        alt={person?.name}
                        className="w-full max-w-[15vw] h-15vw object-cover"
                      />
                      <h1 className="text-[#152347] text-[1.5vw] text-semibold">
                        {person?.name}
                      </h1>
                      <h4 className="text-gay-300 text-vw">
                        {person?.title}
                      </h4>
                      <div className="flex items-center mt-vw">
                        <Link to="#" className="flex items-center">
                          <p className="text-[#152347] text-[0.9vw] font-normal">
                            View Profile
                          </p>
                          <Icon
                            icon="ep:arrow-right-bold"
                            className="text-[#152347] text-[0.9vw] font-normal"
                          />
                        </Link>
                      </div>
                    </section>
                  ))}
                </div>
                <Link
                  to="#"
                  className="flex justify-center pb-2vw mt-3vw items-center"
                >
                  <p className="text-white text-[0.9vw] p-vw text-center font-semibold bg-[#152347]">
                    Meet The Full Team
                  </p>
                </Link>
              </div>
            );
          })}
        </main>
    </div>
  )
}

export default Teams