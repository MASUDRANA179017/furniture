import Image from "next/image";
import React from "react";
import Lists from "../Lists/Lists";
import Flex from "../Flex/Flex";
import { AiFillHeart, AiOutlineReload } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

import BanarImg from "../../assets/product/Image.png";
import CarImg from "../../assets/product/Images2.jpg"
import product1 from "../../assets/product/Image.jpg"
import product2 from "../../assets/product/Image2.jpg"
import product3 from "../../assets/product/Image3.jpg"
import Badge from "../Badge/Badge";
const Product = () => {
  return (
    <div className="p-3">
      <div className="relative max-w-[370px] overflow-hidden group">
        <Image alt="Bangar image" src={product1} />
        <Badge />

        <Lists className="bg-white w-full absolute bottom-0 p-5 -mb-40 group-hover:mb-0 transform duration-300">
          <Flex className="font-primaryFont justify-end gap-2  cursor-pointer hover:mx-2 transform duration-300">
            <span>Add to Wish List</span>
            <AiFillHeart />
          </Flex>
          <Flex className="gap-2 justify-end p-2 cursor-pointer hover:mx-2 transform duration-300">
            <span>Compare</span>
            <AiOutlineReload />
          </Flex>
          <Flex className="gap-2 justify-end p-2 cursor-pointer hover:mx-2 transform duration-300">
            <span>Add to Cart</span>
            <FaCartArrowDown />
          </Flex>
        </Lists>
      </div>
      <div>
        <Flex className="justify-between py-4">
          <h3 className=" font-bold">Basic Crew Neck Tee Copy</h3>
          <span className=" text-base">$44.00</span>
        </Flex>
        <h6>black</h6>
      </div>
    </div>
  );
};

export default Product;
