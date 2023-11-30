"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the best time to visit this destination?",
      answer:
        "The best time to visit this destination is during the months of [insert best months here]. The weather is pleasant, and you can enjoy various outdoor activities without extreme heat or cold.",
    },
    {
      question: "How do I book a tour package?",
      answer:
        "Booking a tour package is simple. You can either visit our website and book online, or you can contact our customer support team and they will assist you with the booking process.",
    },
    {
      question: "Are there any special discounts for group bookings?",
      answer:
        "Yes, we offer special discounts for group bookings. If you are planning to travel with a group, please get in touch with our customer support team to avail of group discounts.",
    },
    {
      question: "What kind of accommodations do you provide?",
      answer:
        "We provide a range of accommodations, including luxury hotels, budget-friendly guesthouses, and cozy homestays. You can choose the type of accommodation that suits your preferences and budget.",
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we offer travel insurance for our customers. Travel insurance provides coverage for medical emergencies, trip cancellations, lost baggage, and other unforeseen events during your journey.",
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
    <section>
      <Container>
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
                      {item.question}{" "}
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
