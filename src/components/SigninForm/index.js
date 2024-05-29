import React, { useState } from "react";
import Flex from "../Flex/Flex";
import BeatLoader from "react-spinners/BeatLoader";
import { useFormik } from "formik";
import axios from "axios";
import { signIn } from "@/validation/Validation";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const baseURL = process.env.BASE_URL;
const SigninForm = () => {
  const [passwordShow, setPasswordShow] = useState("password");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let initialValues = {
    email: "",
    password: "",
  };
  const Signin = async () => {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `${baseURL}/api/v1/auth/login`,
        formik.values
      );
      // console.log("data", data);
      setLoading(false);
      // alert("Login Successful!");
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // setSuccess(data.success);
      // setError("");
      formik.resetForm();
      router.push("/");
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data.message);
      const errorMessage = error.response.data.message;
      // alert("Login Failed!");
      // alert(error.response.data.message);
      toast.error("Login Failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      if (errorMessage) {
        toast.warn(errorMessage, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signIn,
    onSubmit: () => {
      alert("Form submitted successfully");
      Signin();
    },
  });
  const handlePasswordShow = () => {
    if (passwordShow == "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <Flex className="items-center">
          <div className="w-1/3">
            <label
              htmlFor="email"
              className="text-black font-primaryFont font-bold text-base leading-6 block"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Your Email Address"
              className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-2/3"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="w-1/3 relative">
            <label
              htmlFor="password"
              className="text-black font-primaryFont font-bold text-base leading-6 block"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              type={passwordShow}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Your Password"
              className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-2/3"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                {formik.errors.password}
              </p>
            ) : null}

            {formik.touched.password && formik.errors.password ? (
              <div
                className="absolute bottom-9 right-44 cursor-pointer"
                onClick={handlePasswordShow}
              >
                {passwordShow == "password" ? <FaEye /> : <FaEyeSlash />}
              </div>
            ) : (
              <div
                className="absolute bottom-5 right-44 cursor-pointer"
                onClick={handlePasswordShow}
              >
                {passwordShow == "password" ? <FaEye /> : <FaEyeSlash />}
              </div>
            )}
          </div>
        </Flex>
        {loading ? (
          <button
            disabled
            className="border-[#2B2B2B] border-[1px] bg-white py-4 px-[77px] font-primaryFont text-black text-sm font-bold mt-10 mb-[10px]"
          >
            <BeatLoader size={10} color="#000" />
          </button>
        ) : (
          <button
            type="submit"
            className="border-[#2B2B2B] border-[1px] bg-white py-4 px-[77px] font-primaryFont text-black text-sm font-bold mt-10 mb-[10px]"
          >
            Log in
          </button>
        )}
      </form>
      <p className="text-black font-primaryFont font-semibold text-base mt-7 ms-1 mb-[40px]">
        Don&apos;t have an account yet?{""}
        <Link
          className="text-[#EA6C00] font-primaryFont font-bold text-base px-2 hover:underline"
          href="/pages/signup"
        >
          {" "}
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default SigninForm;
