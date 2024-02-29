import React from 'react'
import { Link } from "react-router-dom";

const ListInfoContainer = ({bg_color, title, info, img, title_color,lists_color, info_color, lists_style, button, lists, btn_text, btn_bg, url}) => {
  return (
    <div>
          <div className={`flex justify-center items-center w-full ${bg_color} p-2vw`}>
            <section className='w-full max-w-[85vw]'>
                <div className="flex justify-between items-center p-vw">
                <section className='w-[40vw]'>
                    <img src={img} alt="rmote" className='w-full h-[27vw]' />
                  </section>
                  <section className='w-[40vw]'>
                    <p className={` text-[1.9vw] ${title_color} font-semibold `}>{title}</p>
                    <p className={`${info_color} text-vw w-full max-w-[35vw]`}>{info}</p>
                    {lists && lists.map((item, index) => (
                        <li className={` ${lists_color ? lists_color : 'text-white'} mt-vw ${lists_style === false ? 'list-none' : 'list-disc'} text-vw `} key={index}>{item}</li>
                    ))}
                    <div className="mt-2vw">
                    {button && <Link to={url} className={`p-vw ${btn_bg} ${btn_text} text-vw text-center`}>{button}</Link>}
                    </div>
                  </section>
                </div>
            </section>
            </div>
    </div>
  )
}


export default ListInfoContainer