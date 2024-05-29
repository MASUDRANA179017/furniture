import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import ListItem from "../Lists/Listitem";
import Lists from "../Lists/Lists";
import Logo from "../svg/Logo";
import manuData from "../Navbar/manuData";
import CategoryData from "./CategoryData";
import HelpData from "./HelpData";

const Footer = () => {
  return (
    <div className=" pt-12 bg-topBarBg">
      <Container>
        <Flex className="justify-between">
          <div>
            <h4 className="font-primaryFont my-5 text-base font-bold">Menu</h4>

            <div>
              <Lists className=" gap-x-[40px]">
                {manuData.map((item, index) => (
                  <ListItem
                    href={item.path}
                    className="font-primaryFont py-1 text-gray hover:text-black text-sm hover:font-bold cursor-pointer font-normal transition-all ease-linear duration-300"
                    key={index}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
            <div className="lg:hidden">
              <HiBars3BottomLeft size={20} />
            </div>
          </div>
          <div>
            <h4 className="font-primaryFont my-5 text-base font-bold">SHOP</h4>
            <div>
              <Lists className=" gap-x-[40px]">
                {CategoryData.map((item, index) => (
                  <ListItem
                    href={item.path}
                    className="font-primaryFont py-1 text-gray hover:text-black text-sm hover:font-bold cursor-pointer font-normal transition-all ease-linear duration-300"
                    key={index}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
          </div>
          <div>
            <h4 className="font-primaryFont my-5 text-base font-bold">HELP</h4>
            <div>
              <Lists className=" gap-x-[40px]">
                {HelpData.map((item, index) => (
                  <ListItem
                    href={item.path}
                    className="font-primaryFont py-1 text-gray hover:text-black text-sm hover:font-bold  cursor-pointer font-normal transition-all ease-linear duration-300"
                    key={index}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
          </div>
          <div className="justify-start align-middle py-4 font-bold " >
            <h4>(052) 611-5711</h4>
            <h4>company@domain.com</h4>
            <p className="font-normal py-2">575 Crescent Ave. Qu</p>
          </div>
          <div className="justify-start align-middle py-4 font-bold ">
            <Logo/>
          </div>
        </Flex>
        <p className="mt-5 mb-2 text-end text-sm">©2024 Car Rent Service </p>
      </Container>
    </div>
  );
};

export default Footer;
