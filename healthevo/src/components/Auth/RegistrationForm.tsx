/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import {
  Button,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { register } from "../../redux/slices/authSlice";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Head from "next/head"; // Import Head for adding meta tags

const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password should be at least 6 characters long")
        .required("Required"),
      terms: Yup.bool()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </Head>
      <Box className="relative flex min-h-screen w-full font-['Roboto']">
        {/* Left side poster */}
        <Box className="flex-1 bg-yellow-100 flex items-center justify-center ">
          <Image
            src="/assets/images/healthpos.jpg" // Replace with the correct path to the image
            alt="Poster"
            className="w-[918px] h-[694px] "
            width={500}
            height={300}
            priority
          />
        </Box>

        {/* Right side sign-up form */}
        <Box className="relative flex-1 bg-white flex flex-col justify-center p-8">
          <Box className="max-w-md mx-auto text-sm">
            <Typography
              variant="h6"
              className=" text-gray-800 font-bold mb-5 text-2xl font-mono "
            //   style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 1000 }}
            >
              Welcome to HealthEvo 🚀
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mb-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md capitalize font-sans"
            //   style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
            >
              <Icon icon="logos:google-icon" width={20} className="mr-2" />
              Sign Up With Google
            </Button>
            <Divider className="my-3">Or</Divider>

            <form onSubmit={formik.handleSubmit}>
              <Box className="space-y-3 mb-4">
                <Box className="flex space-x-3 mb-3">
                  <Box className="flex-1">
                    <Typography
                      variant="subtitle2"
                      className="text-gray-700 font-bold mb-1 font-sans"
                    //   style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
                    >
                      Name
                    </Typography>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      InputLabelProps={{ className: "text-gray-700 text-xs" }}
                      InputProps={{
                        className:
                          "text-gray-900 border-none bg-gray-100 rounded-lg h-10",
                      }}
                      FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                    />
                  </Box>
                  <Box className="flex-1">
                    <Typography
                      variant="subtitle2"
                      className="text-gray-700 font-bold mb-1 font-sans"
                    //   style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
                    >
                      Username
                    </Typography>
                    <TextField
                      fullWidth
                      id="username"
                      name="username"
                      placeholder="Choose a username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.username && Boolean(formik.errors.username)
                      }
                      helperText={formik.touched.username && formik.errors.username}
                      InputLabelProps={{ className: "text-gray-700 text-xs" }}
                      InputProps={{
                        className:
                          "text-gray-900 border-none bg-gray-100 rounded-lg h-10",
                      }}
                      FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    className="text-gray-700 font-bold mb-1 font-sans"
                    // style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{ className: "text-gray-700 text-xs" }}
                    InputProps={{
                      className:
                        "text-gray-900 border-none bg-gray-100 rounded-lg h-10",
                    }}
                    FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    className="text-gray-700 font-bold mb-1 font-sans"
                    // style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.password && formik.errors.password}
                    InputLabelProps={{ className: "text-gray-700 text-xs" }}
                    InputProps={{
                      className:
                        "text-gray-900 border-none bg-gray-100 rounded-lg h-10",
                    }}
                    FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                  />
                </Box>
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    id="terms"
                    name="terms"
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" className="text-gray-600 text-xs">
                    By creating an account, you agree to our
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Typography>
                }
                className="mb-5"
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md capitalize w-32 ml-auto"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Create Account
              </Button>
            </form>

            {/* Sign-in text at top right */}
            <Box className="absolute top-8 right-14">
              <Typography
                variant="body2"
                className="text-gray-600 text-sm font-medium font-mono"
                // style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Already a member?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-mono font-bold">
                  Sign In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RegistrationForm;
