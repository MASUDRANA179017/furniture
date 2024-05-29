import React from "react";

import Image from "next/image";

const Logo = () => {
  return (
    <>
      <a href="/" className="text-red-700 uppercase text-lg font-bold">
        <Image alt="Bangar image" src="/assets/logo.png" width="200" height="100" />
      </a>
    </>
  );
};

export default Logo;
