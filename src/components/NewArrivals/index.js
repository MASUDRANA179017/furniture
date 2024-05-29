"use client";
import React from "react";
import Slider from "react-slick";
import BanarImg from "../../assets/product/Image.png";
import Image from "next/image";
import Container from "../Container/Container";
import Lists from "../Lists/Lists";
import Flex from "../Flex/Flex";
import {
  AiFillHeart,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineReload,
} from "react-icons/ai";
import { FaCartArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Product from "../Product/Product";
import { Leaf } from "lucide-react";

function NextArrow(props) {
  const {onClick } = props;
  return (
    <div className="bg-zinc-400 text-white inline-block absolute top-[45%] left-3 text-2xl p-2 rounded-full cursor-pointer  " onClick={onClick}>
      <AiOutlineArrowLeft />
    </div>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return ( 
  <div className="bg-zinc-400 text-white inline-block absolute top-[45%] right-0 text-2xl p-2 rounded-full cursor-pointer z-10" onClick={onClick} >
    <AiOutlineArrowRight />
    </div>
    );
}

export default function NewArrivals() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Container>
      <h5 className="font-primaryFont black text-4xl mb-10">New Arrivals</h5>
      <Slider {...settings} className="gap-2">
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
      </Slider>
    </Container>
  );
}
