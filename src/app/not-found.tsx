"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Header/Navbar";
import NotFound from "./Components/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" my-16 py-16 md:my-12 md:py-12">
          <NotFound />
        </div>
      </motion.div>
    </>
  );
};

export default NotFoundPage;
