import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber:"",
    password: "",
    confirmPassword: "",
  });

  console.log(84*4);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SendMsg = (e: FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      message: formData.confirmPassword,
    };

    emailjs
      .send(
        "service_jqn5flv",
        "template_cnom5kj",
        templateParams,
        "ddYcz13MvW01UFF5u"
      )
      .then((result: { text: any }) => {
        setFormData({
          fullName: "",
          username: "",
          email: "",
          phoneNumber:"",
          password: "",
          confirmPassword: "",
        });
        toast.success("Message Sent Successfully");
      })
      .catch((error: { text: any }) => {
        toast.error("Something Went Wrong");
      });
  };

  return (
    <div className="flex items-center justify-center h-336 md:min-h-128">
      <div className="relative flex flex-col md:-mt-24 m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center py-4 px-16 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome to Elocate</span>
          <span className="font-light text-gray-400 mb-4">
            Please enter your details to register
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">UserName</span>
            <input
              type="text"
              className="w-full p-2 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              name="userName"
              id="userName"
              placeholder="User Name"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 px-4 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Phone Number</span>
            <input
              type="text"
              className="w-full p-2 px-4 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              name="phone"
              id="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              value={formData.phoneNumber}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Full Name</span>
            <input
              type="text"
              className="w-full p-2 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              onChange={handleInputChange}
              value={formData.fullName}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="password"
              className="w-full p-2 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Confirm Password</span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              className="w-full p-2 sign-field rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={handleInputChange}
              value={formData.confirmPassword}
            />
          </div>
          {!passwordMatch && (
            <div className="text-red-600 text-sm">
              Password and Confirm Password do not match.
            </div>
          )}
          <div className="flex justify-between w-full py-4">
            <label className="flex items-center text-sm mr-24">
              <input
                type="checkbox"
                name="ch"
                id="ch"
                placeholder="checkbox"
                className="mr-2 p-1"
                onClick={togglePasswordVisibility}
              />
              Show Password
            </label>
            <Link href="/forget-password" className="font-bold text-black">
              forgot password ?
            </Link>
          </div>

          <button
            className="w-full bg-black mt-4 text-white p-2 rounded-lg mb-6 hover:bg-emerald-400 hover:text-black hover:border hover:border-gray-300"
            onClick={SendMsg}
          >
            Sign in
          </button>

          <div className="text-center text-gray-400">
            Dont have an account?
            <Link
              href="/sign-up"
              className="font-bold text-black hover:text-emerald-300"
            >
              Sign up{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
