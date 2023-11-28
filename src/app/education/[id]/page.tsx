"use client";
import React from "react";
import { motion } from "framer-motion";
import Blog from "./Blog";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-24 md:mt-20 md:pt-8">
          <Blog />
        </div>
      </motion.div>
    </>
  );
};

export default Page;
