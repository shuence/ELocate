"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = () => {
    const faqData = [
        {
          question: "How does ELocate help me find e-waste recycling facilities?",
          answer:
            "ELocate's intelligent facility locator uses geolocation technology to instantly identify certified e-waste recycling centers nearest to you. Simply access our interactive map interface, enter your location, and discover detailed information about each facility including operational hours, accepted materials, certification status, and user ratings—all designed to make responsible e-waste disposal effortless and convenient.",
        },
        {
          question: "How does ELocate verify the facilities listed on the platform?",
          answer:
            "We implement a rigorous multi-step verification process for all facilities on our platform. Each facility undergoes credential validation, certification verification, operational compliance checks, and ongoing monitoring. We also incorporate user feedback and regular audits to maintain the highest standards of accuracy and reliability—ensuring you can trust every facility recommendation we provide.",
        },
        {
          question: "Can I schedule the pickup and recycling of my e-waste through ELocate?",
          answer:
            "Absolutely! Our streamlined booking system allows you to schedule e-waste pickups with just a few clicks. Select your preferred facility, choose from available time slots, specify the type and quantity of e-waste, and receive immediate confirmation. Many of our partner facilities also offer special incentives for ELocate users, making responsible recycling not just convenient but rewarding as well.",
        },
        {
          question: "What kind of educational resources does ELocate offer?",
          answer:
            "ELocate features a comprehensive knowledge hub with expert-curated content including in-depth articles, video tutorials, infographics, and case studies. Our educational resources cover topics ranging from the environmental impact of e-waste to best practices in electronics lifecycle management, emerging recycling technologies, and regulatory compliance. We regularly update our content to reflect the latest research and innovations in sustainable e-waste management.",
        },
        {
          question: "How can I stay updated on changing e-waste regulations and compliance requirements?",
          answer:
            "Our dedicated regulatory center maintains a real-time database of local, national, and international e-waste regulations. Subscribers receive customized compliance alerts based on their location and business needs. Our platform also provides simplified explanations of complex regulatory frameworks, practical compliance guides, and access to compliance certification pathways—turning regulatory complexity into actionable insights.",
        },
        {
          question: "What additional benefits do I get by subscribing to the ELocate newsletter?",
          answer:
            "Our newsletter subscribers gain exclusive access to premium content including expert interviews, early notification of recycling events, special recycling incentive programs, and industry trend analyses. You'll also receive personalized recycling recommendations, invitations to virtual and in-person sustainability workshops, and opportunities to connect with our growing community of environmentally conscious individuals and organizations. Join thousands of subscribers already benefiting from our curated insights.",
        },
      ];
      

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <section className="md:mb-40">
      <Container >
        <Row>
          <Col>
            <h2 className="text-center text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-8">Everything you need to know about ELocate and responsible e-waste management</p>
            <div className="mt-8">
              {faqData.map((item, index) => (
                <div
                  className={`mb-6 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
                    activeQuestion === index ? "bg-gray-50 active" : ""
                  }`}
                  key={index}
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center justify-between text-center gap-12">
                    <h4 className="text-2xl font-bold">
                      {item.question}
                      <span className="text-xl font-semibold ">
                        {activeQuestion === index ? (
                          <RiArrowDropUpLine />
                        ) : (
                          <RiArrowDropDownLine />
                        )}
                      </span>
                    </h4>
                  </div>
                  {activeQuestion === index && (
                    <p className="text-xl mt-4 leading-relaxed">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
