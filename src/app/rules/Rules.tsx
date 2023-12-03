/* eslint-disable react/no-unescaped-entities */
import React from "react";

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
      </div>
      <hr className="bg-black mt-20 p-[1px]" />
      <div className="flex flex-row w-full mx-auto md:w-4/5 gap-10 md:mb-60 md:mt-24 px-4">
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-400 border border-gray-500 overflow-y-auto p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-emerald-600">Notification</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
         
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          {/* Add more notification content here */}
        </div>
        <div className="flex flex-col w-full my-4 projects shadow-lg bg-gray-400 border border-gray-500 overflow-y-auto p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-emerald-600">News</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            felis a libero eleifend venenatis.
          </p>
          {/* Add more news content here */}
        </div>
      </div>
    </div>
  );
};

export default Rules;
