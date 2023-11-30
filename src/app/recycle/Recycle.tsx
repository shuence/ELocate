import React from "react";
import { FiSmartphone, FiHeadphones, FiTv } from "react-icons/fi";
import { GiWashingMachine } from "react-icons/gi";
import { RiFridgeFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineDevicesOther } from "react-icons/md";
import Link from "next/link";

interface RecycleCardProps {
  itemName: string;
  description: string;
  recyclingProcess: string;
  specialInstructions: string;
  icon: React.ReactNode;
}

const Recycle: React.FC = () => {
  const recycleItems: RecycleCardProps[] = [
    {
      itemName: "Smartphone",
      description: "Recycle your old smartphones responsibly.",
      recyclingProcess:
        "We ensure proper dismantling and recycling of electronic components.",
      specialInstructions:
        "Make sure to remove any personal data before recycling.",
      icon: <FiSmartphone size={48} />,
    },
    {
      itemName: "Laptop",
      description: "Dispose of your old laptops in an eco-friendly way.",
      recyclingProcess:
        "Our recycling process adheres to environmental standards.",
      specialInstructions: "Please remove batteries before recycling.",
      icon: <FaLaptop size={48} />,
    },
    {
      itemName: "Accessories",
      description: "Recycle various electronic accessories responsibly.",
      recyclingProcess:
        "We separate and recycle different materials for each accessory.",
      specialInstructions: "Bundle cables together before dropping off.",
      icon: <FiHeadphones size={48} />,
    },
    {
      itemName: "Television",
      description: "Environmentally friendly disposal of old televisions.",
      recyclingProcess:
        "Proper disposal of harmful components to minimize environmental impact.",
      specialInstructions:
        "Bring remote controls and power cables for proper recycling.",
      icon: <FiTv size={48} />,
    },
    {
      itemName: "Refrigerator",
      description: "Eco-conscious disposal of old refrigerators.",
      recyclingProcess:
        "Safe removal and recycling of refrigerants and other components.",
      specialInstructions:
        "Ensure the refrigerator is defrosted before recycling.",
      icon: <RiFridgeFill size={48} />,
    },
    {
      itemName: "Other",
      description: "Responsible recycling of any other Electronic Devices.",
      recyclingProcess:
        "Proper dismantling and recycling of metal and electronic components.",
      specialInstructions: "Ensure it's not working before recycling.",
      icon: <MdOutlineDevicesOther size={48} />,
    },
  ];

  return (
    <div className="section container">
      <h2 className="text-4xl text-emerald-700 text-center md:text-left font-bold mb-4">
        Recycle Center
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {recycleItems.map((item, index) => (
          <RecycleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const RecycleCard: React.FC<RecycleCardProps> = ({
  itemName,
  description,
  recyclingProcess,
  specialInstructions,
  icon,
}) => {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-md">
      <div className="flex justify-center items-center mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{itemName}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{recyclingProcess}</p>
      <p className="text-gray-600">{specialInstructions}</p>
      <Link
        href={`/recycle/${itemName.toLowerCase()}`}
        className="btn-md btn-primary mt-2"
      >
        Recycle Now
      </Link>
    </div>
  );
};

export default Recycle;
