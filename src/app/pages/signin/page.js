"use client";
import React from "react";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import Container from "@/components/Container/Container";
import Heading1 from "@/components/Heading/Heading1";
import Heading2 from "@/components/Heading/Heading1";
import Layout from "@/components/Layout/Layout";
import SigninForm from "@/components/SigninForm";

const Signin = () => {
  return (
    <>
      <Layout>
        <Container className="pt-[60px] pb-[80px]">
          <Heading1>Login</Heading1>
          <div className="flex items-center gap-x-2 font-primaryFont text-gray6d text-[14px] mt-2">
            <Link className="hover:underline" href="/">
              Home
            </Link>{" "}
            <LiaAngleRightSolid /> <span>Login</span>
          </div>
          <div>
            <p className="w-[644px] text-gray text-base leading-[30px] font-normal font-primaryFont mt-[60px] mb-[52px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the.
            </p>
          </div>
          <div className="bg-white-100 w-full h-[1px] mb-[57px]"></div>
          <Heading2 className="mb-10">Returning Customer</Heading2>
          <SigninForm />
          <div className="bg-white-100 w-full h-[1px] mb-[57px]"></div>
          <Heading2>New Customer</Heading2>
          <div>
            <p className="w-[644px] text-gray text-base leading-[30px] font-normal font-primaryFont mt-[28px] mb-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the.
            </p>
          </div>
          <button className=" bg-black py-4 px-[77px] font-primaryFont text-white text-sm font-bold">
              <a href="signup"> New Reseller  </a>
          </button>
        </Container>
      </Layout>
    </>
  );
};

export default Signin;
