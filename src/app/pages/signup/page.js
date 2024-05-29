"use client";
import React from "react";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";

import Container from "@/components/Container/Container";
import Heading1 from "@/components/Heading/Heading1";
import SignUpForm from "@/components/signupForm";


const SignUp = () => {
  return (
    <>
      <Layout>
        <Container className="pt-[60px] pb-[80px]">
          <Heading1>Sign Up</Heading1>

          <div className="flex items-center gap-x-2 font-primaryFont text-gray6d text-[14px] mt-2">
            <Link className="hover:underline" href="/">
              Home
            </Link>{" "}
            <LiaAngleRightSolid /> <span>Sign Up</span>
          </div>
          <div className="mt-[80px] pb-14 border-b-2 border-white-100">
            <p className="font-primaryFont text-base text-gray w-[644px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the.
            </p>
          </div>
          <SignUpForm />
        </Container>
      </Layout>
    </>
  );
};

export default SignUp;
