import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Image from "next/image";
import ad4 from "../../assets/Ad_4.png";


const PhoneOfTheYear = () => {
  return (
    <>
      <div className="py-10">
        <Container>
          <Flex className="gap-10">
            <div className="w-full">
              <Image src={ad4} alt="phone-sale" />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default PhoneOfTheYear;
