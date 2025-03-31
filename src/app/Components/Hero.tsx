"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import hero from "../../assets/hero-banner.png";
import { IonIcon } from "@ionic/react";
import { play } from "ionicons/icons";

const solutions = [
  "Recycling Revolution",
  "Sustainable Disposal",
  "Smart Facility Finder",
];

const solutionVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const HeroSection: React.FC = () => {
  const [currentSolution, setCurrentSolution] = useState(solutions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = solutions.indexOf(currentSolution);
      const nextIndex = (currentIndex + 1) % solutions.length;
      setCurrentSolution(solutions[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSolution]);
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container mx-auto px-4">
        <div className="hero-content text-center">
          <p className="mb-4 hero-subtitle has-before">
            Welcome to ELocate — Powering a Greener Tomorrow
          </p>

          <h1 className="h1 hero-title text-center md:text-start font-bold mb-6">
            Your Strategic Partner for Innovative and High-Impact 
            <br /> <motion.span
            className="text-go-green pt-2"
              variants={solutionVariants}
              initial="initial"
              animate="animate"
              key={currentSolution}
            >
              E-Waste {''}
              {currentSolution}
            </motion.span>
          </h1>

          <p className="text-gray-700 mb-8 text-center md:text-start">
            ELocate: Revolutionizing E-Waste Management for a Sustainable Future. Discover nearby e-waste facilities with precision and ease. 
            Your gateway to responsible recycling practices and environmental stewardship — one device at a time.
          </p>

          <div className="flex flex-row md:flex-row items-center justify-center md:justify-start sm:space-y-0 md:space-x-4 mb-10">
            <Link href="/e-facilities" className="btn btn-primary mr-4">
              Find Nearest Facility
            </Link>
            <Link href="/recycle" className="btn btn-primary mr-4">
              Start Recycling Today
            </Link>

            <Link href="#" className="flex items-center text-primary">
              {/**<div className="btn-icon mr-2">
                <IonIcon
                  icon={play}
                  aria-hidden="true"
                  role="img"
                  className="md hydrated"
                />
              </div>

              <span className="font-semibold ml-4">How it works</span> */}
            </Link>
          </div>
        </div>

        <div className="hero-banner has-before img-holder mx-auto mb-16">
          <Image
            src={hero}
            alt="hero banner"
            width={650}
            height={650}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
