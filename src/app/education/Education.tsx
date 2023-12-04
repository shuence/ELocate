import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogs } from "../data/blogs";

const Education: React.FC = () => {
  return (
    <div className="section container">
      <h2 className="text-3xl font-bold mb-12">E-Waste Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <Image
              src={blog.image}
              alt={`Image for ${blog.title}`}
              className="mx-auto"
              width={200}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <Link
              href={`/education/${blog.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
