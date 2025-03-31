"use client";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  location,
  call,
  mail,
  logoLinkedin,
  logoTwitter,
  logoInstagram,
  logoWhatsapp,
} from "ionicons/icons";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
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
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success("Message Received! Our team will respond shortly.");
      })
      .catch((error: { text: any }) => {
        toast.error("We encountered an issue. Please try again or email us directly.");
      });
  };

  return (
    <>
    <Head>
     <title>ELocate - Connect With Our Sustainability Experts</title>
     <meta name="description" content="Have questions about e-waste management or our platform? Get in touch with ELocate's dedicated team for personalized assistance and information." />
    </Head>
    
    <div className="px-4 w-full py-16 lg:py-24 md:pb-32 md:container contactus-container">
      <ToastContainer
        className="text-2xl"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />

      <div className="flex flex-col items-center justify-center px-10">
        <div className="text-black section-subtitle text-center font-bold text-2xl md:text-4xl 2xl:text-6xl uppercase tracking-widest teamHeadingText">
          —Connect With Us—
        </div>
        <div className="text-black text-center text-xl md:text-3xl mt-4">
          Partner with us in building a sustainable future for electronics
        </div>
        <p className="text-gray-600 text-center max-w-3xl mt-4 text-lg">
          Whether you have questions about our services, want to suggest a recycling facility, or need assistance with e-waste management, our dedicated team is here to help you make environmentally responsible choices.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mt-10">
          {/* Section for sending a message */}
          <div className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="md:text-4xl text-2xl text-center font-semibold py-4 mb-4">
              Reach Out to Our Team
            </h3>
            <form
              className="newsletter-form mb-0 mx-auto md:mb-4"
              onSubmit={SendMsg}
            >
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="email-field"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="email-field"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="email-field"
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="border rounded-md py-3 text-xl px-4 w-full resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="How can we assist with your e-waste management needs?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-bold py-3 px-6 btn btn-secondary hover:bg-white-700 transition-colors duration-300"
              >
                Send Your Message
              </button>
            </form>
          </div>

          {/* Section for contact information */}
          <div className="p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="md:text-4xl text-2xl text-center font-semibold py-4 mb-4">
              Direct Contact Information
            </h3>
            <ul className="footer footer-list space-y-6">
              <li className="footer-item flex items-start">
                <IonIcon icon={location} aria-hidden="true" className="w-8 h-8 mt-1 mr-3"></IonIcon>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Our Location</h4>
                  <address className="contact-link address text-gray-600">
                    Main Office: Chh. Sambhajinagar (Aurangabad),<br />Maharashtra, India 431001
                  </address>
                </div>
              </li>
              <li className="footer-item flex items-start">
                <IonIcon icon={call} aria-hidden="true" className="w-8 h-8 mt-1 mr-3"></IonIcon>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Phone Support</h4>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+911234567890"
                    className="contact-link text-gray-600 hover:text-emerald-500 transition-colors duration-300"
                  >
                    +91 123 456 7890
                  </Link>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM to 6PM IST</p>
                </div>
              </li>
              <li className="footer-item flex items-start">
                <IonIcon icon={mail} aria-hidden="true" className="w-8 h-8 mt-1 mr-3"></IonIcon>
                <div>
                  <h4 className="font-semibold text-xl mb-1">Email Us</h4>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:contact@elocate.com"
                    className="contact-link text-gray-600 hover:text-emerald-500 transition-colors duration-300"
                  >
                    contact@elocate.com
                  </Link>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </li>
              <li className="footer-item mt-6">
                <h4 className="font-semibold text-xl mb-3 text-center">Connect on Social Media</h4>
                <ul className="social-list mb-4 md:mb-0 flex justify-center space-x-4">
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      aria-label="Connect with ELocate on LinkedIn"
                      className="social-link bg-gray-100 hover:bg-emerald-100 transition-colors duration-300"
                    >
                      <IonIcon icon={logoLinkedin}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      aria-label="Follow ELocate on Instagram"
                      className="social-link bg-gray-100 hover:bg-emerald-100 transition-colors duration-300"
                    >
                      <IonIcon icon={logoInstagram}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      aria-label="Follow ELocate on Twitter"
                      className="social-link bg-gray-100 hover:bg-emerald-100 transition-colors duration-300"
                    >
                      <IonIcon icon={logoTwitter}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      aria-label="Contact ELocate on WhatsApp"
                      className="social-link bg-gray-100 hover:bg-emerald-100 transition-colors duration-300"
                    >
                      <IonIcon icon={logoWhatsapp}></IonIcon>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
