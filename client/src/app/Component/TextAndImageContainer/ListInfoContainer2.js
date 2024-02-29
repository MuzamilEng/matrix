import React from 'react'
import { Link } from "react-router-dom";

const ListInfoContainer2 = ({bg_color, title, info, img, title_color,lists_color, info_color, lists_style, button, lists, btn_text, btn_bg, url}) => {
  return (
    <div>
          <div className={`flex justify-center items-center w-full ${bg_color} p-2vw`}>
            <section className='w-full p-vw xl:max-w-[85vw] lg:max-w-[85vw] md:max-w-[85vw]'>
                <div className="grid grid-cols-1 w-full place-content-center place-items-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 p-vw">
                <section className='w-full max-w-[80vw] xl:max-w-[35vw] lg:max-w-[35vw] md:max-w-[35vw]'>
                    <p className={` text-[3vw] text-center xl:text-[1.9vw] lg:text-[1.9vw] md:text-[1.9vw] ${title_color} font-semibold `}>{title}</p>
                    <p className={`${info_color} text-[2vw] xl:text-vw lg:text-vw md:text-vw  w-full max-w-[80vw] xl:max-w-[35vw] lg:max-w-[35vw] md:max-w-[35vw]`}>{info}</p>
                    {lists && lists.map((item, index) => (
                        <li className={` ${lists_color ? lists_color : 'text-white'} mt-vw ${lists_style === false ? 'list-none' : 'list-disc'} text-[2vw] xl:text-vw lg:text-vw md:text-vw `} key={index}>{item}</li>
                    ))}
                    <div className="mt-2vw">
                    {button && <Link to={url} className={`p-vw ${btn_bg} ${btn_text} text-vw text-center`}>{button}</Link>}
                    </div>
                  </section>
                <section className='w-full max-w-[80vw] xl:max-w-[35vw] lg:max-w-[35vw] md:max-w-[35vw]'>
                    <img src={img} alt="rmote" className='w-full h-[35vw] xl:h-[27vw] lg:h-[27vw] md:h-[27vw] object-cover' />
                  </section>
                </div>
            </section>
            </div>
    </div>
  )
}


export default ListInfoContainer2