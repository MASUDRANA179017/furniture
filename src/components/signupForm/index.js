import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useFormik } from "formik";
import axios from "axios";
import Heading2 from "../Heading/Heading1";
import { signUp } from "@/validation/Validation";
import Link from "next/link";
import OTPModal from "../OTPModal/OTPModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = process.env.BASE_URL;

const SignUpForm = () => {
  const [passwordShow, setPasswordShow] = useState("password");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState("");

  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    city: "",
    country: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDate: new Date().getDate(),
    address: "",
    postcode: "",
    state: "",
  };
  const registration = async () => {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `${baseURL}/api/v1/auth/registration`,
        formik.values
      );
      setLoading(false);
      // console.log("data", data);
      toast.success("Registration Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert("Registration Successful!");
      // setSuccess(data.success);
      // setError("");

      setShowModal(true);
      // formik.resetForm();
      // router.push("/pages/signin");
      // let response = await fetch(
      //   "http://localhost:8000/api/v1/auth/registration",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formik.values),
      //   }
      // );
      // let data = await response.json();
      // console.log("data", data);
    } catch (error) {
      // setSuccess("");
      setLoading(false);
      console.log(error);
      toast.error("Registration Failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert("Registration Failed!");
      // alert(error.response.data.message);
      const errorMessage = error.response.data.message;
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
      // setError("Something went wrong.Please try again");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUp,
    onSubmit: () => {
      alert("Form submitted successfully");
      const checkDate = new Date();
      const pickDate = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDate
      );
      console.log("check", checkDate);
      console.log("pick", pickDate);
      const minAge_14 = new Date(1970 + 14, 0, 1);
      const maxAge_70 = new Date(1970 + 70, 0, 1);
      if (checkDate - pickDate < minAge_14) {
        // alert("You must be at least 14 years old");
        toast.warn("You must be at least 14 years old", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (checkDate - pickDate > maxAge_70) {
        // alert("You can not be more than 70 years old");
        toast.warn("You can not be more than 70 years old", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        alert(email);
        registration();
      }
    },
  });
  console.log(formik);
  const handlePasswordShow = () => {
    if (passwordShow == "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };
  const tmpYrs = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => tmpYrs - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);

  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const getDates = Array.from(new Array(days()), (val, index) => index + 1);
  let email = formik.values.email;
  return (
    <>
      <div className="mt-10">
        <Heading2>Your Personal Details</Heading2>
        <ToastContainer />
        <form
          className="grid grid-cols-2 gap-x-20 w-2/3"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <div className="mt-10">
              <label
                htmlFor="firstName"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                First Name
              </label>
              <input
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                type="text"
                placeholder="First Name"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="email"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                placeholder="Your email address"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="telephone"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                Telephone
              </label>
              <input
                name="telephone"
                id="telephone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telephone}
                type="text"
                placeholder="Your phone number"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.telephone && formik.errors.telephone ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.telephone}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="city"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                type="text"
                placeholder="Your city"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.city && formik.errors.city ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.city}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="country"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                Country
              </label>
              <input
                name="country"
                id="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                type="text"
                placeholder="Your country name"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.country && formik.errors.country ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.country}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="dob"
                className="text-black font-primaryFont font-bold text-base leading-6 block"
              >
                Date Of Birth
              </label>
              <div className="flex items-center gap-x-20 mt-6">
                <select
                  className="outline-none py-1 px-3 border-b-2 border-white-100 w-1/3 text-gray font-primaryFont text-base font-medium"
                  name="bYear"
                  id="dob"
                  onChange={formik.handleChange}
                  value={formik.values.bYear}
                >
                  {years.map((year, index) => (
                    <option
                      key={index}
                      value={year}
                      className="py-1 px-3 text-gray font-primaryFont text-base font-medium"
                    >
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  className="outline-none py-1 px-3 border-b-2 border-white-100 w-1/3 text-gray font-primaryFont text-base font-medium"
                  name="bMonth"
                  onChange={formik.handleChange}
                  value={formik.values.bMonth}
                >
                  {months.map((month, index) => (
                    <option
                      key={index}
                      value={month}
                      className="py-1 px-3 text-gray font-primaryFont text-base font-medium"
                    >
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="outline-none py-1 px-3 border-b-2 border-white-100 w-1/3 text-gray font-primaryFont text-base font-medium"
                  name="bDate"
                  onChange={formik.handleChange}
                  value={formik.values.bDate}
                >
                  {getDates.map((date, index) => (
                    <option
                      key={index}
                      value={date}
                      className="py-1 px-3 text-gray font-primaryFont text-base font-medium"
                    >
                      {date}
                    </option>
                  ))}
                </select>
              </div>

              {/* <p className="text-red-700 text-xs font-light font-primaryFont mt-3">
              {error}
            </p> */}
            </div>
          </div>

          <div>
            <div className="mt-10">
              <label
                htmlFor="lastName"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                Last Name
              </label>
              <input
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                type="text"
                placeholder="Last Name"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.lastName}
                </p>
              ) : null}
            </div>
            <div className="relative">
              <div className="mt-10  box-border">
                <label
                  htmlFor="password"
                  className="text-black font-primaryFont font-bold text-base leading-6"
                >
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type={passwordShow}
                  placeholder="Your Password"
                  className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
                />

                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div
                  className="absolute bottom-9 right-3 cursor-pointer"
                  onClick={handlePasswordShow}
                >
                  {passwordShow == "password" ? <FaEye /> : <FaEyeSlash />}
                </div>
              ) : (
                <div
                  className="absolute bottom-5 right-3 cursor-pointer"
                  onClick={handlePasswordShow}
                >
                  {passwordShow == "password" ? <FaEye /> : <FaEyeSlash />}
                </div>
              )}
            </div>

            <div className="mt-10">
              <label
                htmlFor="address"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                Address
              </label>
              <input
                name="address"
                id="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                type="text"
                placeholder="Your Address"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.address && formik.errors.address ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.address}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="postcode"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                PostCode
              </label>
              <input
                name="postcode"
                id="postcode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postcode}
                type="text"
                placeholder="Post Code"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.postcode && formik.errors.postcode ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.postcode}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <label
                htmlFor="state"
                className="text-black font-primaryFont font-bold text-base leading-6"
              >
                State
              </label>
              <input
                name="state"
                id="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                type="text"
                placeholder="Your State"
                className="border-white-100 border-b-2 outline-none pb-3 pt-2 text- font-primaryFont text-base font-medium placeholder:text-gray placeholder:font-primaryFont placeholder:text-sm placeholder:font-normal w-full"
              />
              {formik.touched.state && formik.errors.state ? (
                <p className="text-red-700 text-xs font-light font-primaryFont mt-2">
                  {formik.errors.state}
                </p>
              ) : null}
            </div>
          </div>
          {loading ? (
            <button
              disabled
              className="py-4 px-[77px] bg-black text-white font-primaryFont font-bold text-sm mt-16 w-1/2"
            >
              <BeatLoader size={10} color="#fff" />
            </button>
          ) : (
            <button
              type="submit"
              className="py-4 px-[77px] bg-black text-white font-primaryFont font-bold text-sm mt-16 w-1/2"
            >
              Sign up
            </button>
          )}
        </form>
        <p className="text-black font-primaryFont font-semibold text-base mt-7 ms-1">
          Already have an account?{""}
          <Link
            className="text-[#EA6C00] font-primaryFont font-bold text-base px-2 hover:underline"
            href="/pages/signin"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
      <OTPModal
        email={email}
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

export default SignUpForm;
