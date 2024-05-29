import React from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";
import Flex from "../Flex/Flex";

const Bestsell = () => {
  return (
    <div className="my-20">
      <Container>
        <h5 className="font-primaryFont black text-4xl mb-10">Our Bestsellers</h5>
        <Flex className="gap-2">
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
        
          
        </Flex>
      </Container>
    </div>
  );
};

export default Bestsell;
