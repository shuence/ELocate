/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { news, notifications, report } from "../data/Notifications";

type Props = {};

const Rules = (props: Props) => {
  return (
    <div className="flex flex-col section  container">
      <div className="w-full mx-auto text-2xl px-4">
        <h2 className="text-3xl text-emerald-600 font-bold mb-4">
          Latest Indian E-Waste Management Rules
        </h2>
        <p className="mb-2"></p>
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
        <p className="mb-4">
          In exercise of the powers conferred by section 6, 8 and 25 of the
          Environment (Protection) Act, 1986 (29 of 1986), the Central
          Government hereby makes the following rules, namely:
        </p>

        <h3 className="text-3xl font-bold mb-2 text-emerald-600">CHAPTER I</h3>
        <p className="mb-2">
          <strong>Preliminary</strong>
        </p>

        <p className="mb-2">
          <strong>1. Short title and commencement.</strong>
        </p>
        <p className="mb-2">
          (1) These rules may be called the E-Waste (Management) Rules, 2022.
        </p>
        <p className="mb-2">
          (2) They shall come into force on the date of their publication in the
          Official Gazette.
        </p>

        <p className="mb-2">
          <strong>2. Definitions.</strong>
        </p>
        <p className="mb-2">
          In these rules, unless the context otherwise requires,-
        </p>
        <ul className="list-disc ml-4 mb-4">
          <li>
            <strong>
              (a) "Act" means the Environment (Protection) Act, 1986 (29 of
              1986);
            </strong>
          </li>
          <li>
            <strong>
              (b) "Appliance" means any electrical or electronic equipment that
              is designed for household use;
            </strong>
          </li>
          <li>
            <strong>
              (c) "Authorized dismantler" means a person or entity authorized by
              the State Pollution Control Board to dismantle or disassemble
              e-waste;
            </strong>
          </li>
        </ul>

        <h3 className="text-3xl font-bold mb-2 text-emerald-600">CHAPTER II</h3>
        <p className="mb-2">
          <strong>Responsibility of Producers</strong>
        </p>

        <p className="mb-4">
          <strong>3. Extended producer responsibility.</strong>
        </p>
        <p>
          (1) Every producer shall be responsible for establishing a system to
          collect, refurbish, recycle or dispose of e-waste generated from his
          products in an environmentally sound
        </p>
        <p className="mb-2">
          <strong>4. Collection of E-Waste from Consumers.</strong>
        </p>
        <p>
          (1) Producers shall set up collection centers for the return of
          end-of-life electronic products from consumers.
        </p>
        <p>
          (2) Producers shall provide information to consumers about the
          location of collection centers and the procedures to return
          end-of-life electronic products.
        </p>
        <p className="mb-2">
          <strong>5. Recycling Targets.</strong>
        </p>
        <p>
          (1) Producers shall achieve the recycling targets specified in
          Schedule II of these rules.
        </p>
        <p>
          (2) Producers failing to meet the recycling targets shall pay a
          financial penalty as specified by the Central Pollution Control Board.
        </p>
        <p className="mb-2">
          <strong>6. Labeling of Electronic Products.</strong>
        </p>
        <p>
          (1) Every electronic product shall be labeled with information about
          environmentally hazardous substances contained in the product and the
          safe disposal practices.
        </p>
        <p>
          (2) The Central Pollution Control Board shall prescribe the manner and
          form of labeling.
        </p>
        <p className="mb-2">
          <strong>7. Annual Reporting.</strong>
        </p>
        <p>
          (1) Producers shall submit an annual report to the State Pollution
          Control Board regarding the collection and recycling of e-waste.
        </p>
        <p>
          (2) The format and details of the annual report shall be specified by
          the Central Pollution Control Board.
        </p>

        <p className="mb-2">
          <strong>8. Transportation and Handling of E-Waste.</strong>
        </p>
        <p>
          (1) Producers and authorized dismantlers shall ensure safe and
          environmentally sound transportation and handling of e-waste.
        </p>
        <p>
          (2) The vehicles used for transportation shall comply with the
          guidelines provided by the Central Pollution Control Board.
        </p>

        <p className="mb-2">
          <strong>9. Awareness Programs.</strong>
        </p>
        <p>
          (1) Producers shall organize and participate in awareness programs to
          educate consumers and the general public about the proper disposal of
          e-waste.
        </p>
        <p>
          (2) The programs shall highlight the environmental impact of improper
          e-waste disposal and promote responsible recycling practices.
        </p>

        <p className="mb-2">
          <strong>10. Prohibition of Unauthorized Handling.</strong>
        </p>
        <p>
          (1) Unauthorized handling, including dismantling and recycling of
          e-waste, is strictly prohibited.
        </p>
        <p>
          (2) Violation of this rule may lead to legal consequences, including
          fines and penalties.
        </p>

        <p className="mb-2">
          <strong>
            11. Collaboration with Authorized Treatment and Disposal Facilities.
          </strong>
        </p>
        <p>
          (1) Producers shall collaborate with authorized treatment and disposal
          facilities for the environmentally safe processing of e-waste.
        </p>
        <p>
          (2) The facilities must comply with the standards set by regulatory
          authorities.
        </p>
      </div>
      <hr className="bg-black mt-20 p-[1px]" />
      <div className="flex flex-col md:flex-row w-full mx-auto md:w-full md:max-h-140 max-h-[130rem] gap-10 md:mt-24 px-4">
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-400 border border-gray-500 overflow-y-auto p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 py-4 shadow-sm text-center text-emerald-600">
            Notification
          </h2>
          {notifications.map((notification, index) => (
            <div key={index} className="mb-4 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                {notification.title}
              </h3>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mb-4"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-400 border border-gray-500 overflow-y-auto p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 py-4 shadow-sm text-center text-emerald-600">
            News
          </h2>
          {news.map((notification, index) => (
            <div key={index} className="mb-4 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                {notification.title}
              </h3>
              <p className="text-lg mb-2">{notification.date}</p>
              <p className="text-xl mb-2">{notification.content}</p>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mb-4"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-400 border border-gray-500 overflow-y-auto p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 py-4 shadow-sm text-center text-emerald-600">
        E-waste Annual Report for Maharashtra
          </h2>
          {report.map((notification, index) => (
            <div key={index} className="mb-4 shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                {notification.title}
              </h3>
              <a
                href={notification.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mb-4"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>

      </div>
      <hr className="bg-black mt-20 p-[1px]" />

    </div>
  );
};

export default Rules;
