import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Image from "next/image";
import ad1 from "../../assets/Ad_1.png";
import ad2 from "../../assets/Ad_2.png";
import ad3 from "../../assets/Ad_3.png";

const Offers = () => {
  return (
    <>
      <div className="pt-36 pb-32">
        <Container>
          <Flex className="gap-10">
            <div className="w-1/2">
              <Image src={ad1} alt="phone-sale" />
            </div>
            <div className="w-1/2">
              <div className="mb-10">
                <Image src={ad2} alt="electronic-sale" />
              </div>
              <div>
                <Image src={ad3} alt="furniture-offer" />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Offers;
