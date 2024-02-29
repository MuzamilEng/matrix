import React from "react";
import Layout from "../Layout/Layout";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { benefits, carrerBanner, doings, history, interested, investInPeople, news, ourTeam, roles, scope, staff, teams, vacancies, workAtDanhamz} from "../Data";
import Card from "../Component/Cards/Card";
import RecruitmentRule from "../Component/RecruitmentRule";
import News from "../Component/Common/News";
import RightImageContainer from "../Component/TextAndImageContainer/RightImageContainer";
import LeftImageContainer from "../Component/TextAndImageContainer/LeftImageContainer";
import Teams from "../Component/Teams";

const Carrers = () => {
  return (
    <div>
      <Layout>
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
            <p className="text-gray-900 text-[0.9vw]">Carrers at Danhamz</p>
          </div>
        </nav>
        {/* banner */}
        <section className="w-full">
          {carrerBanner?.map((item, index) => (
            <main className="flex h-[23vw] bg-[#152347]" key={index}>
              <div className="flex justify-center items-center w-full max-w-[50vw]">
                <h1 className="text-3vw font-medium text-pink-300">
                  {item?.title}
                </h1>
              </div>
              <img
                src={item?.img}
                alt={item?.title}
                className="w-full max-w-[50vw]"
              />
            </main>
          ))}
        </section>
        {/* teams */}
        <article className="w-full flex flex-col justify-center items-center bg-white p-3vw">
          {teams?.map((item, index) => {
            return (
              <main className="flex items-center" key={index}>
                <section>
                  <h1 className="text-[#152347] text-[2.1vw] font-medium">
                    {item?.title}
                  </h1>
                  <p className="text-gray-600 text-vw mt-vw w-full max-w-[40vw]">
                    {item?.info}
                  </p>
                  <p className="text-gray-600 text-vw mt-vw w-full max-w-[40vw]">
                    {item?.para}
                  </p>
                </section>
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full max-w-[30vw]"
                />
                <section></section>
              </main>
            );
          })}
        </article>
        {/* doings */}
        <article className="w-full flex bg-gray-200 flex-col justify-center items-center p-3vw">
          <h1 className="text-[2.5vw] text-center text-black">What we do</h1>
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {doings?.map((item, index) => {
              return (
                <Card para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              );
            })}
          </div>
        </article>
        {/* benefits */}
        <section className="flex justify-center items-center flex-col bg-[#ffff] p-2vw">
          {benefits?.map((item, index) => {
            return (
              <div className="" key={index}>
                <h1 className="text-[#152347] text-center text-[2vw] text-semibold">
                  {item?.title}
                </h1>
                <img
                  src={item?.img}
                  alt={item?.title}
                  className="w-full mt-2vw"
                />
              </div>
            );
          })}
        </section>
        {/* teams */}
       <div className="">
        <Teams />
       </div>
        {/* investor in people */}
        <div>
              {investInPeople?.map((item, index) => (
                  <RightImageContainer key={index} img={item?.img} info={item?.info} title={item?.title} button={item?.button} url={item?.url} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
              ))}
          </div>
        {/* work at danhamz */}
        <article className="w-full flex flex-col justify-center items-center">
          {workAtDanhamz?.map((item, index) => {
            return (
              <main
                className="flex justify-center w-full flex-col items-center"
                key={index}
              >
                <div className="flex justify-center w-full items-center">
                  <h1 className="text-white bg-[#152347] w-full text-center p-3vw text-[2.5vw] text-semibold">
                    {item?.title}
                  </h1>
                </div>
                <article className="w-full p-3vw flex items-center bg-white justify-center">
                  {item?.info?.map((info, index) => (
                    <section
                      className="w-full justify-center flex items-center"
                      key={index}
                    >
                      <div className="w-full items-start max-w-[40vw]">
                        <h1 className="text-[#152347] w-full text-[2vw] text-semibold">
                          {info?.title}
                        </h1>
                        <p className="text-gray-800 text-vw w-full max-w-[35vw]">
                          {info?.info}
                        </p>
                        <p className="text-gray-800 font-semibold mt-vw text-vw w-full max-w-[35vw]">
                          {info?.title2}
                        </p>
                        <p className="text-gray-800 text-vw mt-vw w-full max-w-[35vw]">
                          {info?.para}
                        </p>
                      </div>
                      <div className="w-full max-w-[40vw]">
                        <iframe
                          className="text-[#152347] mt-vw text-[1vw] h-[25vw] w-[40vw]"
                          src="https://www.youtube.com/embed/lbqll5HUPog"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </section>
                  ))}
                </article>
              </main>
            );
          })}
        </article>
        {/* scoop */}
        <article className="w-full p-3vw flex-col flex items-center justify-center">
          {scope.map((info, index) => (
            <section
              className="w-full justify-center flex items-center"
              key={index}
            >
              <div className="w-full max-w-[40vw]">
                <iframe
                  className="text-[#152347] mt-vw text-[1vw] h-[25vw] w-[40vw]"
                  src="https://www.youtube.com/embed/lbqll5HUPog"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full ml-2vw max-w-[40vw]">
                <h1 className="text-[#152347] w-full text-[2vw] text-semibold">
                  {info?.title}
                </h1>
                <p className="text-[#152347] text-vw mt-2vw w-full max-w-[35vw]">
                  {info?.info}
                </p>
                <div className="mt-2vw">
                  <Link
                    to="#"
                    className="bg-pink-300 text-white mt-2vw font-semibold p-vw text-vw"
                  >
                    See our currenty vacancies
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </article>
        {/* staff banner */}
        <div className="banner flex w-full justify-center items-center bg-pink-400 p-4vw">
          <h1 className="text-center text-[#152347] text-2vw font-medium">
            Staff Stories
          </h1>
        </div>
        {/* employee */}
        <article className="w-full flex flex-col justify-center bg-white items-center p-3vw">
          {staff?.map((item, index) => (
            <main
              className="flex justify-between w-full max-w-[80vw] items-start"
              key={index}
            >
              <div className="w-full max-w-[40vw]">
                <h1 className="text-[#152347] text-[1.6vw]">{item?.name}</h1>
                {item?.info.split(/\.|\n/).map((paragraph, i) => (
                  <p key={i} className="text-vw text-black w-full max-w-[35vw]">
                    {paragraph.trim()}
                  </p>
                ))}{" "}
              </div>
              <img
                src={item?.img}
                alt={item?.name}
                className="w-full max-w-[40vw] h-30vw"
              />
            </main>
          ))}
        </article>
        {/* staff banner */}
        <div className="banner flex w-full justify-center items-center bg-[#152347] p-4vw">
          <h1 className='text-center text-white text-2vw font-medium'>Ready to join us?</h1>
        </div>
        {/* roles */}
        <main className="flex flex-col items-center justify-center bg-gray-200 p-3vw">
            {roles?.map((item, index) => (
                <section key={index}>
                <h1 className='text-center text-[#152347] text-2vw font-medium'>{item?.title}</h1>
                <p className="text-vw text-gray-700 text-center w-full max-w-[85vw]">{item?.info}</p>
                <div className="grid mt-2vw grid-cols-4 gap-3">
                    {item?.role?.map((role, i) => {
                        return <Card key={i} title={role?.title} desc={role?.desc} info={role?.info} />;
                    })}
                </div>
                <div className="flex justify-center items-center">
                <Link to="#" className="bg-pink-300 text-center w-fit text-vw p-vw text-white mt-2vw ">See and apply for our current vacancies</Link>
                </div>
                </section>
            ))}
        </main>
        {/* our recruitment  */}
        <div className="section w-full flex justify-center items-center flex-col p-3vw">
            <h1 className="text-[#152347] font-medium text-[1.9vw]">Our Recruitment Process</h1>
           <div className="mt-vw">
           <RecruitmentRule />
           </div>
        </div>
        {/* history */}
        <div>
              {history?.map((item, index) => (
                  <LeftImageContainer key={index} img={item?.img} info={item?.info} title={item?.title} button={item?.button} url={item?.url} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
              ))}
          </div>
        {/* interested */}
        <section className="bg-[#152347] w-full flex justify-center items-center flex-col p-4vw">
            {interested?.map((item, index) => (
                <section className="" key={index}>
                <h1 className='text-center text-white text-2vw font-medium'>{item?.title}</h1>
                <p className="text-vw text-white text-center w-full max-w-[55vw]">{item?.info}</p>
                    <div className="flex justify-center items-center">
                    <Link className="text-white text-[0.9vw] mt-2vw w-full max-w-[20vw] p-vw text-center font-semibold bg-pink-400">
                      Tell us why you want to work at Danhamz
                    </Link>
                    </div>
                </section>
            ))}
        </section>
        {/* partener banner */}
        <div className="flex justify-center items-center w-full bg-white p-2vw flex-col">
            <div className="flex justify-evenly p-2vw items-center">
              <section className="flex text-vw font-medium text-[#152347] ml-5vw">StuRenst</section>
              <section className="flex text-vw font-medium text-[#152347] ml-5vw">PrimeLocation.com</section>
              <section className="flex text-vw font-medium text-[#152347] ml-5vw">HomeSearch</section>
              <section className="flex text-vw font-medium text-[#152347] ml-5vw">One Deme</section>
            </div>
          </div>
          {/* news */}
          <div className="w-full flex-col bg-gray-200 p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] font-semibold text-[1.8vw]'>Latest News From Danhamz</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all news</Link>
            </div>
          </div>
           {/* vacancies banner */}
        <div className="banner flex w-full justify-center items-center bg-[#152347] p-4vw">
          <h1 className='text-center text-white text-2vw font-medium'>Current Vacancies</h1>
        </div>
          {/* vacancies */}
          <article className="bg-gray-200 w-full flex justify-center items-center p-3vw">
            <main className="w-full flex">
              {vacancies?.map((item, index) => (
                <section className="bg-white m-vw p-2vw w-full max-w-[28vw]" key={index}>
                  <h1 className="text-[#152347] text-[1.4vw]">{item?.title}</h1>
                  <p className="text-[0.8vw] text-black mt-2vw w-full max-w-[25vw]">{item?.info}</p>
                  <div className="flex mt-vw items-center">
                    <Link to="" className="text-blue-800 text-[0.8vw]">See full spec</Link>
                    <Link to="" className="text-blue-800 flex items-center text-[0.8vw] ml-2vw">Apply <Icon icon="fe:arrow-right" className="text-[0.8vw] ml-0.5vw text-blue-800" /></Link>
                  </div>
                </section>
              ))}
            </main>
          </article>
      </Layout>
    </div>
  );
};

export default Carrers;
