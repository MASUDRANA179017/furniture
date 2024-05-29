"use client";
import React, { useRef, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { BsFillCartFill } from "react-icons/bs";
import Flex from "../Flex/Flex";
import SearchBar, { SearchBarDropPoint } from "../SearchBar/SearchBar";
import Lists from "../Lists/Lists";
import { categoryData } from "./categoryData";
import ListItem from "../Lists/Listitem";
import useClickOutside from "@/helpers/clickOutside";
import { UserDropdownMenu } from "./UserDropdown";
import SearchBarPicup from "../SearchBar/SearchBar";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const clickOutside = useRef(null);

  const handleDropdownShow = () => {
    setShowDropdown(true);
  };

  useClickOutside(clickOutside, () => {
    setShowDropdown(false);
  });
  return (
    <>
      <Flex className="justify-between items-center">
        <div
          className="my-10 w-1/5 cursor-pointer relative"
          onClick={handleDropdownShow}
        >
          <Flex>
            <HiMiniBars3CenterLeft className="text-2xl mr-3 cursor-pointer" />
            <span className="font-primaryFont text-black font-norma">
              Select by Category
            </span>
          </Flex>

          {showDropdown ? (
            <div
              className="w-full bg-white shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[155%] left-0 z-[9999]"
              ref={clickOutside}
            >
              <Lists>
                {categoryData.map((item, i) => (
                  <ListItem key={i}
                    href={item.link}
                    className="font-primaryFont last:border-b-0 font-normal text-sm text-black py-4 px-5 border-b border-solid hover:pl-6 transition-all duration-150 ease-in border-topBarBg">
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
          ) : null}
        </div>
        <div className="w-1/3 p-1 m-2">
          <SearchBarPicup />
        </div>
        <div className="w-1/3 p-1 m-2">
          <SearchBarDropPoint />
        </div>
        
      </Flex>
    </>
  );
};

export default Topbar;
