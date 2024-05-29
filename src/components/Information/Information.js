import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Waranty from "./svg/Waranty";
import Shipping from "./svg/Shipping";
import Policy from "./svg/policy";

const Information = () => {
  return (
    <>
      <div className="border-y-2 border-slate-100	p-5 ">
        <Container>
          <Flex className="justify-between ">
            <div className="w-1/3">
              <Flex className=" gap-4">
                <Waranty />
                <h3 className="text-gray6d font-primaryFont font-normal text-base">
                  Two years warranty
                </h3>
              </Flex>
            </div>
            <div className="w-1/3">
              <Flex className="justify-center gap-4">
                <Shipping />
                <h3>Free shipping</h3>
              </Flex>
            </div>
            <div className="w-1/3">
              <Flex className="justify-end gap-4">
                <Policy />
                <h3>Return policy in 30 days</h3>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Information;
