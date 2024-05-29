'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../svg/Logo'
import Flex from '../Flex/Flex'
import Container from '../Container/Container'
import Lists from '../Lists/Lists'
import ListItem from '../Lists/Listitem'
import manuData from './manuData'
import Topbar from '../Topbar/Topbar'
import { HiBars3BottomLeft } from 'react-icons/hi2';

const Navbar = () => {
    
    return (
        <>
            <Container>
                <Flex className='justify-between items-center py-8'>
                    <div className="w-[10%]">
                        <Logo />
                    </div>
                    <div className="w-3/5 hidden lg:block">
                        <Lists className="flex justify-end gap-x-[40px]">
                            {manuData.map((item, index) => (
                                
                                <ListItem href={item.path} className="font-primaryFont text-gray hover:text-black hover:font-bold cursor-pointer font-normal transition-all ease-linear duration-300" key={index}>{item.title}</ListItem>
                            ))}
                        </Lists>
                    </div>
                    <div className='lg:hidden'>
                        <HiBars3BottomLeft size={20} />
                    </div>
                </Flex>
            </Container>
            {/* <div className="bg-topBarBg">
                <Container>
                    <Topbar />
                </Container>
            </div> */}
        </>
    )
}

export default Navbar