"use client";
import React from "react";
import { motion } from "framer-motion";
import Smartphone from "./Smartphone";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:mt-20 mt-16 pt-8">
          <Smartphone />
        </div>
      </motion.div>
    </>
  );
};

export default Page;
