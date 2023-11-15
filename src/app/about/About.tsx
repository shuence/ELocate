import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature from "../../assets/features/banner.svg";

const About = () => {
  return (
    <section className="section features" id="features" aria-label="features">
      <div className="container mx-auto px-4 text-center">
        <p className="section-subtitle font-bold text-gray-700 mb-2">
        -About ELocate-
        </p>

        <h2 className=" text-4xl section-title font-bold text-black mb-4">
        Revolutionizing E-Waste Locator and Management
        </h2>

        <div className=" mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pl-8">
              <p className="section-text text-3xl text-gray-600  font-semibold leading-relaxed">
              In India, the improper disposal of e-waste contributes to the
                alarming annual collection of 1.71 million metric tons. Locating
                trustworthy e-waste collection facilities remains a significant
                challenge, intensifying this environmental issue. <br />
                The ELocate Web Platform is conceived to directly address this
                issue. Our platform offers a dynamic, user-friendly interface for
                individuals and businesses seeking reliable e-waste collection
                facilities.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start">
                <p className="btn btn-primary mr-3">
                  <Link href="/contactus"> Contact Us</Link>
                </p>
                <p className="btn btn-secondary mr-3">
                  <Link href="/recycle"> Recycling Services</Link>
                </p>{" "}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center section-banner has-before">
              <Image
                src={feature}
                alt="Image"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
