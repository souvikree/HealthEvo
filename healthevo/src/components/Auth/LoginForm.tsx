/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/authSlice";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Head from "next/head";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
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

        {/* Right side login form */}
        <Box className="relative flex-1 bg-white flex flex-col justify-center p-8">
          <Box className="max-w-lg mx-36 text-sm">
            <Typography
              variant="h6"
              className=" text-gray-800 font-bold mb-5 font-mono text-2xl"
              // style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: '1.5rem' }}
            >
              Welcome Back, HealthEvo! 😊
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mb-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md capitalize"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
            >
              <Icon icon="logos:google-icon" width={20} className="mr-2" />
              Login With Google
            </Button>
            <Divider className="my-3">Or</Divider>

            <form onSubmit={formik.handleSubmit}>
              <Box className="space-y-3 mb-4">
                <Box>
                  <Typography
                    variant="subtitle2"
                    className="text-gray-700 font-semibold mb-1"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: '0.875rem' }}
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
                        "text-gray-900 border-none bg-gray-100 rounded-lg h-12",
                    }}
                    FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    className="text-gray-700 font-semibold mb-1"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: '0.875rem' }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={formik.touched.password && formik.errors.password}
                    InputLabelProps={{ className: "text-gray-700 text-xs" }}
                    InputProps={{
                      className:
                        "text-gray-900 border-none bg-gray-100 rounded-lg h-12 ",
                    }}
                    FormHelperTextProps={{ className: "text-gray-500 text-xs" }}
                  />
                </Box>
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" className="text-gray-600 text-xs">
                    Remember Me
                  </Typography>
                }
                className="mb-2"
              />
              <Box className="flex justify-end ">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md capitalize w-32"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Login
                </Button>
              </Box>
            </form>

            {/* Sign-up text at bottom center */}
            <Box className="absolute top-8 right-12">
              <Typography
                variant="body2"
                className="text-gray-600 text-sm font-medium font-mono"
                // style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:underline font-mono font-bold">
                  Register
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
