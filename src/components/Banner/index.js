"use client";
import React, { useState } from "react";
import banar1 from "@/assets/banar/slide-1.jpg";
import banar2 from "@/assets/banar/slide-2.jpg";
import banar3 from "@/assets/banar/slide-3.jpg";
import Image from "next/image";
import Slider from "react-slick";


const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: "translateY(-50%)",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         

        }}
      >
        <ul style={{ margin: "0px", display: "flex", flexDirection: "column" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i == dotActive
            ?
            {
              width: "30px",
              color: "#262626",
              borderRight: "3px solid #262626",
              transition: "all 0.5s ease",
            }
            :
            {
              width: "30px",
              color: "transparent",
              borderRight: "3px solid white",
              transition: "all 0.5s ease",
            }
        }
      >
        0{i + 1}
      </div>
    )
  };

  return (
    <div className="home-banner">
      <Slider {...settings}>
        <div>
          <Image
            src={banar1}
            width={1400}
            height={500}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={banar2}
            width={1400}
            height={500}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={banar3}
            width={1400}
            height={500}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
