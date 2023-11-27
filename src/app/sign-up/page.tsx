"use client";
import React from "react";
import { motion } from "framer-motion";
import Signin from "./SignUp";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-32 md:mt-40 md:pt-8">
          <Signin />
        </div>
      </motion.div>
    </>
  );
};

export default Page;
