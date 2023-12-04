"use client"
import { useParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { blogs, randomBlogs } from '@/app/data/blogs';

const BlogDetail: React.FC = () => {
  const { id } = useParams() || {};

  const blog = blogs.find((blog: { id: number; }) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
  <div className="section mx-8 flex gap-2">
      <div className="md:w-3/4 border border-gray-400 p-4 rounded-lg shadow-sm">
        <div className="container ">
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">{blog.title}</h2>
          <Image
            src={blog.image}
            alt={`Image for ${blog.title}`}
            className="mx-auto"
            width={400}
            height={400}
          />
          <p className="text-gray-500 md:text-2xl text-xl mt-4">{blog.description}</p>
        </div>
      </div>
      <div className="md:w-1/4 mx-6 border border-gray-400 rounded-lg">
        <div className="bg-white p-4 mb-8 md:my-0 rounded-md shadow-md">
          <h2 className="md:text-2xl text-xl font-bold md:mb-8">Random Blogs</h2>
          {randomBlogs.map((blog) => (
            <div key={blog.id} className="mb-4 py-2 shadow-md">
                <Image
                    src={blog.image}
                    alt={`Image for ${blog.title}`}
                    className="mx-auto"
                    width={100}
                    height={100}
                    />
              <Link href={`/education/${blog.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{blog.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
