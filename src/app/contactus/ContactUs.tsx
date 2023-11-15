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
        toast.success("Message Sent Successfully");
      })
      .catch((error: { text: any }) => {
        toast.error("Something Went Wrong");
      });
  };

  return (
    <><Head>
     <title>ELocate- ContactUs</title> </Head><div className="px-4 w-full py-16 lg:py-24 md:pb-32 md:container">
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
          -Contact Us-
        </div>
        <div className="text-black text-center text-xl md:text-3xl mt-4">
          Have questions or inquiries? Get in touch with us!
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mt-10">
          {/* Section for sending a message */}
          <div className="p-6 rounded-md shadow-md">
            <h3 className="md:text-4xl text-2xl text-center font-semibold py-4 mb-4">
              Send us a Message
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
                  value={formData.name}
                  onChange={handleInputChange}
                  required />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="email-field"
                  value={formData.email}
                  onChange={handleInputChange}
                  required />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-800 font-semibold mb-2 text-xl"
                >
                  Your Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="email-field"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-bold py-3 px-6 btn btn-secondary hover:bg-white-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Section for contact information */}
          <div className="p-6 rounded-md shadow-md">
            <ul className="footer footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              <li className="footer-item">
                <IonIcon icon={location} aria-hidden="true"></IonIcon>
                <address className="contact-link address">
                  Chh. Sambhajinagar (Aurangabad), Maharashtra, 431001
                </address>
              </li>
              <li className="footer-item">
                <IonIcon icon={call} aria-hidden="true"></IonIcon>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+911234567890"
                  className="contact-link"
                >
                  +911234567890
                </Link>
              </li>
              <li className="footer-item">
                <IonIcon icon={mail} aria-hidden="true"></IonIcon>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:contact@elocate.com"
                  className="contact-link"
                >
                  contact@elocate.com
                </Link>
              </li>
              <li className="footer-item">
                <ul className="social-list mb-4 md:mb-0">
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      className="social-link"
                    >
                      <IonIcon icon={logoLinkedin}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      className="social-link"
                    >
                      <IonIcon icon={logoInstagram}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      className="social-link"
                    >
                      <IonIcon icon={logoTwitter}></IonIcon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/"
                      className="social-link"
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
    </div></>
  );
};

export default ContactUs;
