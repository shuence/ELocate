"use client";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";
import { location } from "ionicons/icons";
import { call } from "ionicons/icons";
import { mail } from "ionicons/icons";
import { logoLinkedin } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoInstagram } from "ionicons/icons";
import { logoWhatsapp } from "ionicons/icons";
import logo from "../../assets/ELocate-s.png";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    } as Pick<typeof formData, keyof typeof formData>);
    ;
  };

  const SendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      email: formData.email,
    };

    emailjs
      .send(
        "service_jqn5flv",
        "template_ppph1w9",
        templateParams,
        "ddYcz13MvW01UFF5u"
      )
      .then((result: { text: any }) => {
        setFormData({
          email: "",
        });
        toast.success("Subscription Confirmed! Welcome to the ELocate community.");
      })
      .catch((error: { text: any }) => {
        toast.error("Unable to process your request. Please try again.");
      });
  };
  return (
    <footer className="footer projects shadow-2xl">
      <div className="footer-top md:section">
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
        theme="dark"
      />
        <div className="container">
          <div className="footer-brand">
            <Link href="/">
              <Image
                src={logo}
                alt="ELocate - E-waste Facility Locator"
                width={100}
                height={100}
                className="logo mx-auto md:mx-0"
              />
            </Link>
            <p className="footer-text">
              ELocate: Revolutionizing e-waste management through technological innovation. Our platform connects you with certified recycling facilities, empowering your journey toward environmental responsibility and sustainable electronics disposal.
            </p>
            <form onSubmit={SendMsg} className="newsletter-form mb-0 md:mb-4">
              <input
                type="email"
                name="email"
                placeholder="Join our sustainability newsletter"
                className="email-field"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="form-btn"
                aria-label="Subscribe to our newsletter"
              >
                <IonIcon icon={paperPlane} aria-hidden="true"></IonIcon>
              </button>
            </form>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Recycling Solutions</p>
            </li>
            <li>
              <Link href="/recycle/smartphone" className="footer-link">
                Smartphone Recycling
              </Link>
            </li>
            <li>
              <Link href="/recycle/laptop" className="footer-link">
                Laptop & Computer Recycling
              </Link>
            </li>
            <li>
              <Link href="/recycle/accessories" className="footer-link">
              Electronics Accessories
              </Link>
            </li>

            <li>
              <Link href="/recycle/tv" className="footer-link">
                Television & Display Recycling
              </Link>
            </li>

            <li>
              <Link href="/recycle/refrigerator" className="footer-link">
              Refrigerator & Cooling Appliances
              </Link>
            </li>

            <li>
            <Link href="/recycle/washing-machine" className="footer-link">
                Household Appliance Recycling
              </Link>
            </li>

          
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">ELocate Platform</p>
            </li>
            <li>
              <Link href="/aboutus" className="footer-link">
                Our Mission & Vision
              </Link>
            </li>

            <li>
              <Link href="/education" className="footer-link">
                E-Waste Education Center
              </Link>
            </li>

            <li>
              <Link href="/facilities" className="footer-link">
                Certified Recycling Network
              </Link>
            </li>

            <li>
              <Link href="/news" className="footer-link">
                Sustainability News
              </Link>
            </li>

            <li>
              <Link href="/contactus" className="footer-link">
                Get In Touch
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="footer-link">
                Insights & Resources
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Connect With Us</p>
            </li>
            <li className="footer-item">
              <IonIcon icon={location} aria-hidden="true" className="w-8 h-8 mt-4"></IonIcon>
              <address className="contact-link address">
                Chh.Sambhajinagar,<br />Maharashtra, India 431001
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
                +91 123 456 7890
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
                    href="#"
                    aria-label="Connect with ELocate on LinkedIn"
                    className="social-link"
                  >
                    <IonIcon icon={logoLinkedin}></IonIcon>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Follow ELocate on Instagram"
                    className="social-link"
                  >
                    <IonIcon icon={logoInstagram}></IonIcon>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Follow ELocate on Twitter"
                    className="social-link"
                  >
                    <IonIcon icon={logoTwitter}></IonIcon>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Contact ELocate on WhatsApp"
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
      <div className="footer-bottom">
        <div className="container">
        <p className="copyright">
            &copy; 2023 ELocate | All Rights Reserved by{" "}
            <Link href="#" className="copyright-link">
              Team Spam Byte
            </Link>
          </p>
          <ul className="footer-bottom-list">
            <li>
              <Link href="/privacypolicy" className="footer-bottom-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/termsandservices" className="footer-bottom-link">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
