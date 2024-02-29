import React from 'react'
import PageAddress from '../../Component/Common/PageAddress'
import ContentImage from '../../Component/TextAndImageContainer/ContentImage'
import { let_nav, start, stu_nav, toggleInfo } from '../../Data'
import Layout from '../../Layout/Layout'
import Services from '../../Component/Common/Services'
import LeftImageContainer from '../../Component/TextAndImageContainer/LeftImageContainer'

const LetOrSell = () => {
  return (
    <div>
        <Layout>
        <PageAddress main="Home" mainLink="/" subLink="/let-or-sell" category="Lettings" subCategory="Why let your property ?" />
      <section className='w-full'>
        {let_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* info banner */}
      <div className="bg-gray-100 w-full flex justify-between items-start p-3vw">
        <h1 className='text-[#152347] text-[1.7vw] w-full max-w-[35vw] font-medium'>  There are a number of good reasons to consider letting your property instead of selling it.</h1>
        <div className="w-full max-w-[45vw]">
        <p className='text-gray-600 text-vw mt-vw max-w-[40vw] font-medium w-full'>HOP is a fast growing and award-winning Letting Agent based in Leeds, offering high quality
         rental property to Students and Young Professionals.</p>
        <p className='text-gray-600 text-vw mt-vw max-w-[40vw] font-medium w-full'>With over a decade of experience in the Leeds lettings market, previously as Let Leeds
         and now as HOP, we offer a full 360° property service to make your life as a Landlord as hassle-free as possible, so you can put your feet up and relax knowing
          it’s all being taken care of.our innovative offering and winning strategies, we attract more Tenants. That means we let your property 5 days quicker than average,
           reducing your void periods and maximising your income.
           </p>
        </div>
      </div>
       {/* services */}
       <div className="flex justify-center p-vw w-full items-center flex-col">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-[#152347] text-[2vw] ml-3vw w-full max-w-[40vw] text-center'>Things To Consider</h1>
              <p className='text-gray-600 text-center text-vw mt-vw max-w-[50vw] font-medium w-full'>
              If you think that renting would be a good option for you – either as a temporary stopgap or a way to start building a portfolio and generating a new income stream – then there are lots of things to consider and questions to ask yourself:
              </p>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
        </div>
          {/* start */}
      <article className="w-full bg-white">
        {start?.map((item, index) => (
          <LeftImageContainer  key={index} bg_color={item?.bg_color} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
        </Layout>
    </div>
  )
}

export default LetOrSell