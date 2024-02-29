import React from 'react'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'


const SocialShare = ({fbURL, twURL, waURL, hideShare}) => {
  return (
    <div className='flex border-[1px] bg-[#152347] p-[0.7vw] ml-vw justify-evenly rounded-md w-full max-w-[13vw] items-center' onClick={hideShare}>
                    <FacebookShareButton className='text-vw' url={fbURL}>
                        <FacebookIcon size={32} round={true} logoFillColor='white' ></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton className='text-vw' url={twURL}>
                        <TwitterIcon size={32} round={true} logoFillColor='white' ></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton className='text-vw' url={waURL}>
                        <WhatsappIcon size={32} round={true} logoFillColor='white' ></WhatsappIcon>
                    </WhatsappShareButton>
                    </div>
  )
}

export default SocialShare