import React from "react";

const Heading1 = ({ children, className }) => {
  return (
    <>
      <h1
        className={`text-black font-primaryFont text-[49px] font-bold ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export default Heading1;
