import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature from "../../assets/features/banner.svg";

const About = () => {
  return (
    <section className="section features" id="features" aria-label="features">
      <div className="container mx-auto px-4 text-center">
        <p className="section-subtitle font-bold text-gray-700 mb-2">
        —Discover ELocate—
        </p>

        <h2 className=" text-4xl section-title font-bold text-black mb-4">
        Pioneering the Future of E-Waste Management & Sustainability
        </h2>

        <div className=" mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pl-8">
              <p className="section-text text-3xl text-gray-600 font-semibold leading-relaxed">
                India faces a critical environmental challenge with 1.71 million metric tons of e-waste generated annually, much of it improperly disposed. The scarcity of accessible, trustworthy e-waste collection facilities intensifies this growing crisis. <br /><br />
                ELocate was born from this urgent need. Our award-winning platform bridges the critical gap between consumers and certified e-waste facilities through an intuitive, powerful interface. We&apos;re not just locating recycling centers—we&apos;re catalyzing a movement toward responsible electronics lifecycle management and environmental stewardship.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-6">
                <p className="btn btn-primary mr-3">
                  <Link href="/contactus">Connect With Us</Link>
                </p>
                <p className="btn btn-secondary mr-3">
                  <Link href="/recycle">Explore Recycling Solutions</Link>
                </p>{" "}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center section-banner has-before">
              <Image
                src={feature}
                alt="Sustainable E-Waste Management Solution"
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
