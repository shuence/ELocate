"use client";
import React, { useEffect, useState } from "react";
import { blogs } from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { randomBlogs } from "@/app/data/blogs";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const Blog: React.FC<BlogPageProps> = ({ params }) => {
  const [relatedBlogs, setRelatedBlogs] = useState(() => {
    const randomBlogsResult = randomBlogs(3);
    return randomBlogsResult.filter(blog => blog.id !== Number(params.id)).slice(0, 3);
  });
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!params?.id) return <div>Invalid Blog ID</div>;
  const id = Number(params.id);
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-8">The blog you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/education" className="text-emerald-600 hover:text-emerald-800 font-medium">
          Return to Education Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-emerald-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-white space-y-4 md:space-y-0 md:space-x-6">
              {blog.author && (
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-sm opacity-80">{blog.date}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog content */}
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg md:prose-xl max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-blockquote:border-l-emerald-500 prose-blockquote:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700">
          {/* Blog intro */}
          {blog.content?.intro && (
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              {blog.content.intro}
            </p>
          )}

          {/* If no structured content is available, show the description */}
          {!blog.content?.intro && (
            <>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                {blog.description}
              </p>
              <p className="mb-8">
                Electronic waste, commonly known as e-waste, represents one of the fastest-growing waste streams globally. With rapid technological advancements and the decreasing lifespan of electronic devices, proper management of e-waste has become a critical environmental concern.
              </p>
            </>
          )}

          {/* Blog content sections */}
          {blog.content?.sections && blog.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}

          {/* Default content if no structured content is provided */}
          {!blog.content?.sections && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding E-Waste</h2>
              <p className="mb-6">
                E-waste consists of discarded electronic products such as computers, televisions, smartphones, and household appliances. These devices contain valuable materials like gold, silver, copper, and palladium, but also harmful substances including lead, mercury, cadmium, and brominated flame retardants.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Environmental Impact</h2>
              <p className="mb-6">
                Improper disposal of e-waste leads to serious environmental consequences. When electronic devices end up in landfills, toxic materials can leach into soil and groundwater, contaminating ecosystems and posing health risks to living organisms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsible Recycling</h2>
              <p className="mb-6">
                Proper e-waste recycling involves specialized processes to safely extract valuable materials while containing hazardous components. Certified e-waste recycling facilities employ advanced techniques to dismantle electronics, separate materials, and process them for reuse.
              </p>
              
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-8">
                &ldquo;The average smartphone contains about 60 different elements &ndash; including precious metals and rare earth elements &ndash; that could be recovered and reused if the device is properly recycled.&rdquo;
              </blockquote>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Consumer Responsibility</h2>
              <p className="mb-6">
                Consumers play a crucial role in addressing the e-waste challenge. By extending the lifespan of devices through proper maintenance, choosing products with eco-friendly designs, and ensuring responsible disposal through certified recycling centers, individuals can significantly reduce e-waste&apos;s environmental footprint.
              </p>
            </>
          )}
        </article>

        {/* Tags section */}
        {blog.tags && (
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to action box */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6 my-12">
          <h3 className="text-xl font-bold text-emerald-800 mb-3">Ready to Take Action?</h3>
          <p className="text-gray-700 mb-4">
            Properly disposing of your electronic waste is easier than you think. Find certified e-waste recycling facilities near you and ensure your devices are handled responsibly.
          </p>
          <Link 
            href="/e-facilities" 
            className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
          >
            Find Nearby Recycling Centers
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>

        {/* Share section */}
        <div className="border-t border-gray-200 pt-8 my-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Share This Article</h3>
          <div className="flex flex-wrap gap-3">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full p-2.5 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </button>
            <button className="text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-full p-2.5 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full p-2.5 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>
            </button>
            <button className="text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-full p-2.5 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Related articles section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.length > 0 ? (
              relatedBlogs.map((relatedBlog) => (
                <div 
                  key={relatedBlog.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full h-16"></div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded inline-block mb-3 w-fit">
                      {relatedBlog.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{relatedBlog.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedBlog.description}</p>
                    <Link
                      href={`/education/${relatedBlog.id}`}
                      className="mt-auto text-emerald-600 hover:text-emerald-800 inline-flex items-center font-medium text-sm"
                    >
                      Read Article
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No related articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
