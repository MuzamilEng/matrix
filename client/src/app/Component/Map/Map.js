import React from 'react';

const Map = () => {

  return (
    <div className="">
              <iframe
              style={{width: "40vw", height: "25vw"}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.7394080607655!2d74.31722097556322!3d31.58619324388728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b66ed955555%3A0xc7e180a52478c762!2sUK%20Center!5e0!3m2!1sen!2s!4v1700738398718!5m2!1sen!2s"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  );
};

export default Map;
