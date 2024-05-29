import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import Flex from '../Flex/Flex';

const SearchBarPicup = () => {
    return (
        <div >
            <Flex className="items-center justify-between w-[100%] bg-white p-2">
                

                <input type="text" placeholder='Pickup Point' className="text-gray  pl-3 pr-12 w-[100%] outline-none" />
                
                <BiSearchAlt2 className="text-2xl " />
            </Flex>

        </div>
    )
}
const SearchBarDrop = () => {
    return (
        <div >
            <Flex className="items-center justify-between w-[100%] bg-white p-2">
                

                <input type="text" placeholder='Drop Point' className="text-gray  pl-3 pr-12 w-[100%] outline-none" />
                
                <BiSearchAlt2 className="text-2xl " />
            </Flex>

        </div>
    )
}

export default SearchBarPicup;
export const SearchBarDropPoint = SearchBarDrop;