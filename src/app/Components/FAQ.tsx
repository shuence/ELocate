"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = () => {
    const faqData = [
        {
          question: "How do I locate e-waste recycling facilities using ELocate?",
          answer:
            "ELocate provides a dedicated facility locator page where you can easily find the nearest e-waste recycling facilities. Simply use the map feature to explore facilities in your area and get detailed information.",
        },
        {
          question: "Is the information about e-waste facilities on ELocate verified?",
          answer:
            "Yes, ELocate ensures that the information about e-waste recycling facilities is verified. This verification process helps users trust the accuracy and reliability of the facility details provided on the platform.",
        },
        {
          question: "Can I book the recycling of my e-waste through ELocate?",
          answer:
            "Absolutely! ELocate offers a user-friendly booking system that allows you to schedule the recycling of your e-waste. Choose the facility, select a convenient pickup date and time, and contribute to sustainable e-waste management.",
        },
        {
          question: "What educational resources are available on ELocate?",
          answer:
            "ELocate features an education section with blogs and informative content to raise awareness about the impact of e-waste. Explore articles that highlight the importance of responsible e-waste recycling and its positive effects on the environment.",
        },
        {
          question: "How can I stay updated on the latest rules and regulations regarding e-waste management?",
          answer:
            "ELocate provides a dedicated section that lists the latest government rules and regulations related to e-waste management. Stay informed about the legal aspects of e-waste disposal and contribute to a greener environment.",
        },
        {
          question: "Is there a newsletter for ELocate users?",
          answer:
            "Yes, ELocate offers a newsletter signup feature. By subscribing to the newsletter, you'll receive updates, promotions, and valuable information about e-waste recycling. Stay connected with the latest news and initiatives in the e-waste management sector.",
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
            <h2 className="text-center text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8">
              {faqData.map((item, index) => (
                <div
                  className={`mb-6 p-8 rounded-xl shadow-md ${
                    activeQuestion === index ? "active" : ""
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
                    <p className="text-xl mt-4 ">{item.answer}</p>
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
