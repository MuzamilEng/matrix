import React from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/Common/PageAddress'
import { detailCards, news, propertySourcing, sourcce_nav, sourceDealPkg, startedWithDanhamz, toggleInfo, turnKey } from '../../Data'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import ListInfoContainer2 from '../../Component/TextAndImageContainer/ListInfoContainer2'
import ListInfoContainer from '../../Component/TextAndImageContainer/ListInfoContainer'
import PropertySourcingProcess from '../../Component/PropertyDetails/PropertySourcingProcess'
import { Link } from 'react-router-dom'
import Services from '../../Component/Common/Services'
import News from '../../Component/Common/News'


const Sourcing = () => {
  return (
    <div>
      <Layout>
      <PageAddress main='Home' category='Danhamz Investments' subCategory='Property Sourcing' mainLink='/' />
      <section className='w-full'>
        {sourcce_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} title_color={item?.title_color} img={item?.img} />
        ))}
      </section>
      {/* banner */}
      <article className='row-center p-3vw bg-gray-200'>
          <span className='text-[2vw] text-[#152347] font-semibold w-full max-w-[37vw]'>
          Investing in Leeds Residential Property.</span>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>
        Leeds is well known as a BTL Investor hotspot. Renowned for its booming business economy, thriving social scene, easy connectivity and huge population of young professionals, it’s a city full of opportunity when it comes to property investment.
      <br /> <br />
      Many Investors who originate from the South and South East of England are choosing to purchase property in Leeds as their money goes further and they can achieve higher rental yields that are almost impossible to be found in the South of England.
      HOP’s fresh approach to Property Sourcing and Deal Packaging offers a turnkey solution to investors looking to grow or build a portfolio of buy-to-let residential property in Leeds                </p>
      </article>
      {/* deal pkg */}
      <article className="w-full bg-white">
        {sourceDealPkg?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      <section className="w-full bg-gray-200 p-3vw col-center">
        <h1 className="text-2vw text-[#152347] font-semibold text-center">
        The Property Sourcing Process
        </h1>
        <p className="text-vw mt-vw text-gray-900 text-center">
        A step by step guide to how the sourcing process works when you are working with HOP.
        </p>
        <div className="mt-2vw">
        <PropertySourcingProcess />
        </div>
      </section>
       {/* banner */}
       <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Want to know more?
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full max-w-[57vw]">
        We’d love to have an informal chat about our process and how we could work together to achieve your investment goals. After which, if you are interested in proceeding with HOP, we can arrange to meet in person or virtually, to go through your requirements in more detail.        </p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Request a call back</Link>
      </div>
       {/* deal pkg */}
       <article className="w-full bg-white">
        {turnKey?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* choosing */}
      <div className="p-3vw w-full col-center bg-gray-200">
        <h1 className="text-center text-[#152347] text-2vw">Choosing the right kind of investment</h1>
        <p className="text-vw mt-vw text-gray-800 text-center">
        We offer two types of BTL investment that leverage our expertise.
        </p>
        <p className="mt-vw text-center text-vw text-gray- w-full max-w-[52vw]">
        A lower risk “Let and Forget” option or an HMO let which may require additional investment up front.
        These are then matched your individual investment strategy and the level of risk and return that is right for you.
        </p>
        <section className="w-full">
          <div className="w-full flex justify-center items-center">
            {detailCards?.map((item, index) => (
              <main className="w-full m-vw max-w-[38vw] p-2vw bg-white" key={index}>
                <p className="text-vw italic text-gray-500">{item?.option}</p>
                <h1 className="text-[1.7vw] text-[#152347] font-medium">{item?.title}</h1>
                <img src={item?.img} alt="img" className='w-full mt-0.5vw max-w-[35vw] h-20vw' />
                <h1 className="text-[1.3vw] text-[#152347] ml-0.5vw mt-0.5vw font-medium">{item?.propertyTitle}</h1>
                <p className="text-vw text-gray-800 mt-0.5vw ml-0.5vw">{item?.bedInfo}</p>
                <div className="mt-vw">
                {item?.bedInfoList?.map((list)=> (
                  <li className='text-vw text-gray-800 list-disc'>{list}</li>
                ))}
                </div>
                <h1 className="text-[1.3vw] ml-0.5vw mt-0.5vw text-[#152347] font-medium">{item?.location}</h1>
                <div className="mt-vw">
                {item?.locInfoList?.map((list)=> (
                  <li className='text-vw text-gray-800 list-disc'>{list}</li>
                ))}
                </div>
              </main>
            ))}
          </div>
        </section>
      </div>
       {/* propertySourcing */}
       <article className="w-full bg-white">
        {propertySourcing?.map((item, index) => (
          <ListInfoContainer lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
       {/* startedWithDanhamz */}
       <article className="w-full bg-white">
        {startedWithDanhamz?.map((item, index) => (
          <ListInfoContainer2 lists={item?.lists} lists_color={item?.lists_color} lists_style={item?.lists_style} key={index} btn_bg={item?.btn_bg} btn_text={item?.btn_text} button={item?.button} title={item?.title} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* banner */}
      <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Thinking of investing in Leeds?
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full max-w-[57vw]">
        If you want to grow your buy-to-let portfolio in Leeds, let us take the hassle out of finding your next investment.        </p>
        <p className='text-center text-vw text-white mt-vw w-full max-w-[57vw]'>Call our friendly team for a chat about your options on <span className="text-pink-400"> 0113 467 1584</span></p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Contact us</Link>
      </div>
      {/* team member */}
      <div className="p-3vw bg-white col-center w-full">
        <h1 className="text-[#152347] text-[1.8vw] text-center font-medium">Meet the team</h1>
        <p className="text-vw text-gray-800 mt-vw w-full text-center max-w-[57vw]">At HOP, we offer a holistic property service that encompasses Sales, Lettings, Investors and Block Management.</p>
        <p className="text-vw text-gray-800 mt-vw w-full text-center max-w-[57vw]">For our investors, it means each team works seamlessly together to find, purchase, let, manage or sell your property.</p>
        <img src="//images/source15.jpg" alt="team" className='w-full max-w-[18vw] h-[18vw] mt-2vw' />
        <section className="mt-vw col-center p-vw">
          <h1 className="text-[#152347] text-[1.8vw] text-center font-medium">Niel</h1>
          <p className="text-vw text-gray-800 mt-vw w-full text-center">Co-Founder & Manager</p>
          <div className="mt-vw">
          <Link to="" className='text-[#152347] text-vw cursor-pointer mt-2vw'>View profile</Link>
          </div>
        </section>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-[#152347] text-white'>Meet full team</Link>
      </div>
        {/* services */}
        <div className="flex justify-center p-vw w-full items-center flex-col">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-[#152347] text-[2vw] w-full max-w-[47vw] text-center'>About our Property Sourcing Service</h1>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
          </div>
           {/* banner */}
      <div className="p-3vw bg-[#152347] col-center">
        <h1 className='text-white text-[1.8vw] font-medium text-center w-full max-w-[50vw]'>
        Thinking of investing in Leeds?
        </h1>
        <p className="text-center text-vw text-white mt-vw w-full max-w-[57vw]">
        If you want to grow your buy-to-let portfolio in Leeds, let us take the hassle out of finding your next investment.        </p>
        <p className='text-center text-vw text-white mt-vw w-full max-w-[57vw]'>Call our friendly team for a chat about your options on <span className="text-pink-400"> 0113 467 1584</span></p>
        <Link to='/contact' className='mt-2vw text-vw text-center p-vw bg-pink-400 text-white'>Contact us</Link>
      </div>
          {/* news */}
       <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-[#152347] font-semibold italic text-[1.8vw]'>You may also be interested in</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-[#152347] p-vw text-white font-medium text-[0.8vw] text-center">View all news</Link>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Sourcing