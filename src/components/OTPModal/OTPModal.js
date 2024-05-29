import React, { useEffect, useRef, useState } from "react";
import { Formik, useFormik } from "formik";
import BeatLoader from "react-spinners/BeatLoader";
import Flex from "../Flex/Flex";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const baseURL = process.env.BASE_URL;
let currentOtpIndex = 0;

const OTPModal = ({ isVisible, onClose, email }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // console.log(email);

  const otpMatch = async () => {
    try {
      // console.log(formik.values);
      setLoading(true);
      let { data } = await axios.post(`${baseURL}/api/v1/auth/otpmatch`, {
        email: email,
        randomOtp: otpCode,
      });
      setLoading(false);
      toast.success(
        "OTP Matched.Your account has been verified successfully!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      // alert("otp matched!");
      formik.resetForm();
      router.push("/pages/signin");
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.error);
      // alert("otp didn't match!");
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      formik.resetForm();
    }
  };
  const resendOTP = async () => {
    try {
      let { data } = await axios.post(`${baseURL}/api/v1/auth/otpresend`, {
        email,
      });
      alert("New OTP has been sent to your email.");
      toast("New OTP has been sent to your email.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
  const formik = useFormik({
    initialValues: {
      otp0: "",
      otp1: "",
      otp2: "",
      otp3: "",
    },
    onSubmit: (values) => {
      alert(otpCode);
      console.log(email);
      otpMatch();
    },
  });

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const inputRef = useRef(null);
  function handleChange({ target }) {
    const { value } = target;
    const val = value.substring(value.length - 1);
    console.log(val);
    const newOtp = [...otp];
    newOtp[currentOtpIndex] = val;
    setOtp(newOtp);
    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
    }
  }
  const handleKeyDown = (e, index) => {
    currentOtpIndex = index;
    if (e.key === "Backspace") {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };
  console.log(otp);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  if (!isVisible) return null;
  let otp0 = otp[0];
  let otp1 = otp[1];
  let otp2 = otp[2];
  let otp3 = otp[3];
  let otpCode = otp0 + "" + otp1 + "" + otp2 + "" + otp3;
  console.log(otpCode);
  return (
    <div className="fixed text-black inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-3xl font-normal font-primaryFont place-self-end mb-2 rounded-lg"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white rounded-sm px-5 pt-8 pb-16">
          <h2 className="text-black text-xl font-primaryFont font-bold text-center mb-6">
            Varify Your Account
          </h2>
          <p className="text-black text-sm font-primaryFont font-semibold text-center mb-5 leading-6">
            A four digit onetime otp has been sent to your email. Please check
            your email and activate your account to login.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="text-center py-4">
              <Flex className="w-1/2 mx-auto items-center justify-center gap-x-3">
                {otp.map((val, index) => (
                  <input
                    key={index}
                    ref={index === activeOtpIndex ? inputRef : null}
                    type="number"
                    min="0"
                    max="9"
                    name={`otp${index}`}
                    onChange={(e) => {
                      handleChange(e), formik.handleChange(e);
                    }}
                    onKeyDown={(e) => {
                      handleKeyDown(e, index);
                    }}
                    className="border-2 border-black px-2 py-1 w-1/4 text-center rounded-lg text-black text-sm font-primaryFont font-semibold spin-button-none"
                    required
                    value={otp[index]}
                  />
                ))}
              </Flex>
            </div>
            <div className="text-center py-4">
              {loading ? (
                <button
                  disabled
                  className="text-center px-6 py-2 bg-black text-white rounded font-medium"
                >
                  <BeatLoader size={10} color="#fff" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-center px-6 py-2 bg-black text-white rounded font-medium"
                >
                  Verify
                </button>
              )}
            </div>
          </form>
          <p className="text-black text-sm font-primaryFont font-semibold text-center mt-5">
            Haven&apos;t received the otp yet?{" "}
            <button
              className="text-[#EA6C00] mx-2 border-b-2 border-white hover:border-b-2 hover:border-[#EA6C00]"
              onClick={() => {
                resendOTP();
              }}
            >
              resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
