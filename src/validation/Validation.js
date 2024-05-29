import * as Yup from "yup";

export const signUp = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(15, "Must be 15 characters or less")
    .required("Please Enter Your Firstname"),
  lastName: Yup.string()
    .min(3)
    .max(20, "Must be 20 characters or less")
    .required("Please Enter Your Lastname"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    )
    .required("Please Enter Your Email"),
  password: Yup.string()
    .min(8, "Password too short")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "password should contain atleast one number and one special character"
    )
    .required("Please Enter Your Password"),
  telephone: Yup.string().required("Please Enter Your Telephone Number"),
  city: Yup.string().required("Please Enter Your City"),
  country: Yup.string().required("Please Enter Your Country"),
  address: Yup.string().required("Please Enter Your Address"),
  postcode: Yup.string().required("Please Enter Your Post Code"),
  state: Yup.string().required("Please Enter Your State"),
});

export const signIn = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    )
    .required("Please Enter Your Email"),
  password: Yup.string()
    .min(8, "Password too short")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "password should contain atleast one number and one special character"
    )
    .required("Please Enter Your Password"),
});
