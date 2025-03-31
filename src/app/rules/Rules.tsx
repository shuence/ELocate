/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { news, notifications, report } from "../data/Notifications";
import Head from "next/head";

type Props = {};

const Rules = (props: Props) => {
  return (
    <>
    <Head>
      <title>ELocate - E-Waste Regulations & Compliance</title>
      <meta name="description" content="Stay informed about the latest e-waste management regulations in India. Access official notifications, industry news, and compliance requirements." />
    </Head>
    <div className="flex flex-col section container rules-container">
      <div className="w-full mx-auto text-2xl px-4">
        <h2 className="text-3xl text-emerald-600 font-bold mb-6">
          Indian E-Waste Management Regulatory Framework
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
          <p className="mb-3 text-gray-700 text-xl">
            <strong className="text-emerald-700">Official Notification</strong>
          </p>
          <p className="mb-2">
            <strong>Ministry of Environment, Forest and Climate Change</strong>
          </p>
          <p className="mb-2">
            <strong>(EP Division)</strong>
          </p>
          <p className="mb-2">
            <strong>Dated the 16th March, 2022</strong>
          </p>
          <p className="mb-2">
            <strong>S.O. 1047(E)</strong>
          </p>
          <p className="mb-2">
            <strong>Subject: The E-Waste (Management) Rules, 2022</strong>
          </p>
        </div>
        <p className="mb-6 text-gray-700">
          In exercise of the powers conferred by section 6, 8 and 25 of the
          Environment (Protection) Act, 1986 (29 of 1986), the Central
          Government hereby establishes comprehensive guidelines for the responsible management,
          handling, and disposal of electronic waste across India:
        </p>

        <h3 className="text-2xl font-bold mb-3 text-emerald-600 border-b border-emerald-200 pb-2">CHAPTER I: PRELIMINARY PROVISIONS</h3>

        <div className="mb-8 pl-4 border-l-4 border-emerald-100">
          <p className="mb-3">
            <strong>1. Short title and commencement.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) These rules may be called the E-Waste (Management) Rules, 2022.
          </p>
          <p className="mb-2 text-gray-700">
            (2) They shall come into force on the date of their publication in the
            Official Gazette.
          </p>

          <p className="mb-3 mt-5">
            <strong>2. Definitions.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            In these rules, unless the context otherwise requires:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li className="mb-2">
              <strong className="text-gray-800">
                (a) "Act" means the Environment (Protection) Act, 1986 (29 of
                1986);
              </strong>
            </li>
            <li className="mb-2">
              <strong className="text-gray-800">
                (b) "Appliance" means any electrical or electronic equipment that
                is designed for household use;
              </strong>
            </li>
            <li className="mb-2">
              <strong className="text-gray-800">
                (c) "Authorized dismantler" means a person or entity authorized by
                the State Pollution Control Board to dismantle or disassemble
                e-waste;
              </strong>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-emerald-600 border-b border-emerald-200 pb-2">CHAPTER II: PRODUCER RESPONSIBILITIES</h3>

        <div className="mb-8 pl-4 border-l-4 border-emerald-100">
          <p className="mb-3">
            <strong>3. Extended producer responsibility.</strong>
          </p>
          <p className="mb-4 text-gray-700">
            (1) Every producer shall be responsible for establishing a system to
            collect, refurbish, recycle or dispose of e-waste generated from their
            products in an environmentally sound manner.
          </p>

          <p className="mb-3">
            <strong>4. Collection of E-Waste from Consumers.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers shall establish dedicated collection centers for the return of
            end-of-life electronic products from consumers.
          </p>
          <p className="mb-4 text-gray-700">
            (2) Producers shall provide comprehensive information to consumers regarding the
            location of collection centers and the procedures for returning
            end-of-life electronic products.
          </p>

          <p className="mb-3">
            <strong>5. Recycling Targets.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers shall achieve the specific recycling targets detailed in
            Schedule II of these rules.
          </p>
          <p className="mb-4 text-gray-700">
            (2) Producers failing to meet the established recycling targets shall be subject to
            financial penalties as determined by the Central Pollution Control Board.
          </p>

          <p className="mb-3">
            <strong>6. Labeling of Electronic Products.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) All electronic products must be clearly labeled with information regarding
            environmentally hazardous substances contained within the product and the
            recommended safe disposal practices.
          </p>
          <p className="mb-4 text-gray-700">
            (2) The Central Pollution Control Board shall establish and enforce the
            required manner and form of labeling.
          </p>

          <p className="mb-3">
            <strong>7. Annual Reporting Requirements.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers shall submit comprehensive annual reports to the State Pollution
            Control Board detailing the collection and recycling of e-waste.
          </p>
          <p className="mb-4 text-gray-700">
            (2) The format and required details of these annual reports shall be specified by
            the Central Pollution Control Board.
          </p>

          <p className="mb-3">
            <strong>8. Transportation and Handling of E-Waste.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers and authorized dismantlers shall ensure safe and
            environmentally sound transportation and handling of e-waste materials.
          </p>
          <p className="mb-4 text-gray-700">
            (2) All vehicles used for transportation must fully comply with the
            guidelines provided by the Central Pollution Control Board.
          </p>

          <p className="mb-3">
            <strong>9. Public Awareness Programs.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers shall develop, organize and actively participate in awareness programs to
            educate consumers and the general public about the proper disposal of
            e-waste.
          </p>
          <p className="mb-4 text-gray-700">
            (2) These programs shall highlight the environmental impact of improper
            e-waste disposal and promote responsible recycling practices.
          </p>

          <p className="mb-3">
            <strong>10. Prohibition of Unauthorized Handling.</strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Unauthorized handling, including dismantling and recycling of
            e-waste, is strictly prohibited under these regulations.
          </p>
          <p className="mb-4 text-gray-700">
            (2) Violation of this rule may result in serious legal consequences, including
            substantial fines and penalties.
          </p>

          <p className="mb-3">
            <strong>
              11. Collaboration with Authorized Treatment and Disposal Facilities.
            </strong>
          </p>
          <p className="mb-2 text-gray-700">
            (1) Producers shall establish active collaboration with authorized treatment and disposal
            facilities for the environmentally safe processing of e-waste.
          </p>
          <p className="mb-4 text-gray-700">
            (2) All facilities must strictly comply with the standards established by
            regulatory authorities.
          </p>
        </div>
      </div>
      <hr className="bg-emerald-200 mt-10 mb-10 p-[1px]" />
      
      <div className="flex flex-col md:flex-row w-full mx-auto md:w-full md:max-h-140 max-h-[130rem] gap-10 md:mt-10 px-4">
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-50 border border-gray-200 rounded-lg overflow-y-auto p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 py-4 border-b border-emerald-200 text-center text-emerald-600">
            Official Notifications
          </h2>
          {notifications.map((notification, index) => (
            <div key={index} className="mb-6 p-4 border-l-4 border-emerald-100 hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {notification.title}
              </h3>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-emerald-500 underline mb-4 inline-flex items-center"
              >
                View Official Document <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-50 border border-gray-200 rounded-lg overflow-y-auto p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 py-4 border-b border-emerald-200 text-center text-emerald-600">
            Industry Updates & News
          </h2>
          {news.map((notification, index) => (
            <div key={index} className="mb-6 p-4 border-l-4 border-emerald-100 hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {notification.title}
              </h3>
              <p className="text-sm text-emerald-600 mb-2">{notification.date}</p>
              <p className="text-lg mb-3 text-gray-700">{notification.content}</p>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-emerald-500 underline mb-4 inline-flex items-center"
              >
                Read Complete Article <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-50 border border-gray-200 rounded-lg overflow-y-auto p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 py-4 border-b border-emerald-200 text-center text-emerald-600">
            Maharashtra E-waste Annual Reports
          </h2>
          {report.map((notification, index) => (
            <div key={index} className="mb-6 p-4 border-l-4 border-emerald-100 hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {notification.title}
              </h3>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-emerald-500 underline mb-4 inline-flex items-center"
              >
                Access Full Report <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-emerald-200 mt-10 p-[1px]" />
    </div>
    </>
  );
};

export default Rules;
