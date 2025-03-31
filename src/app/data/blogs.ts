type BlogCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  author?: string;
  date?: string;
  content?: {
    intro?: string;
    sections?: {
      title: string;
      content: string;
    }[];
  };
  tags?: string[];
};
  
export const blogs: BlogCard[] = [
  {
    id: 1,
    title: "Understanding E-Waste: A Comprehensive Guide",
    description: "E-waste, the ever-growing mountain of discarded electronic devices, poses significant environmental challenges. Learn about its impact and solutions.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    readTime: "8 min read",
    author: "ELocate Research Team",
    date: "June 15, 2023",
    tags: ["e-waste", "education", "sustainability", "environment"],
    content: {
      intro: "Electronic waste or e-waste is a term used to describe discarded electrical or electronic devices. With the rapid pace of technological advancement and the decreasing lifespan of electronic devices, e-waste has become one of the fastest-growing waste streams globally.",
      sections: [
        {
          title: "The Scale of the Problem",
          content: "Globally, we generate over 50 million tons of e-waste annually, equivalent to throwing out 1000 laptops every second. Only 17.4% of this waste is formally documented as properly collected and recycled, meaning the vast majority ends up in landfills or is informally processed."
        },
        {
          title: "Environmental Impact",
          content: "When e-waste is improperly disposed of, toxic substances like lead, mercury, and cadmium can leach into soil and groundwater. One computer monitor can contain up to 8 pounds of lead, which can contaminate soil and water sources, posing serious health risks to humans and wildlife."
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Lifecycle of Electronic Devices",
    description: "Journey through the complete lifecycle of your electronic devices, from manufacturing to disposal, and understand their environmental impact at each stage.",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability",
    readTime: "10 min read",
    author: "Dr. Sarah Chen",
    date: "July 3, 2023",
    tags: ["lifecycle", "manufacturing", "recycling", "circular economy"],
    content: {
      intro: "The environmental footprint of electronic devices extends far beyond their use phase. From resource extraction to manufacturing, distribution, usage, and finally disposal or recycling, each stage has unique environmental implications."
    }
  },
  {
    id: 3,
    title: "Responsible E-Waste Disposal Methods",
    description: "Discover the proper ways to dispose of your electronic waste and why it matters for environmental preservation and resource conservation.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Guide",
    readTime: "6 min read",
    author: "ELocate Team",
    date: "August 12, 2023",
    tags: ["disposal", "recycling", "guide", "practical tips"]
  },
  {
    id: 4,
    title: "The Hidden Dangers of E-Waste",
    description: "Explore the toxic components in electronic devices and their potential health impacts when improperly disposed of or recycled without proper safeguards.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Health",
    readTime: "7 min read",
    author: "Dr. Michael Rodriguez",
    date: "September 5, 2023",
    tags: ["health", "toxins", "safety", "environmental health"]
  },
  {
    id: 5,
    title: "E-Waste Recycling Technologies",
    description: "Learn about cutting-edge technologies and processes used in modern e-waste recycling facilities to recover valuable materials and minimize environmental impact.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    readTime: "9 min read",
    author: "Tech Sustainability Initiative",
    date: "October 18, 2023",
    tags: ["technology", "innovation", "recycling", "resource recovery"]
  },
  {
    id: 6,
    title: "Global E-Waste Crisis",
    description: "An in-depth look at how e-waste affects different countries and the global initiatives to combat this growing problem across developed and developing nations.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Global Issues",
    readTime: "12 min read",
    author: "International E-Waste Coalition",
    date: "November 22, 2023",
    tags: ["global", "international", "policy", "developing countries"]
  },
  {
    id: 7,
    title: "Corporate Responsibility in E-Waste",
    description: "How major tech companies are addressing e-waste through sustainable practices, take-back programs, and designing products with recycling in mind.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business",
    readTime: "8 min read",
    author: "Corporate Sustainability Watch",
    date: "December 10, 2023",
    tags: ["corporate", "business", "responsibility", "sustainability"]
  },
  {
    id: 8,
    title: "DIY Electronics Repair",
    description: "Simple tips and guides to repair your electronics, extending their life and reducing e-waste generation while saving money and learning new skills.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "How-to",
    readTime: "15 min read",
    author: "Repair Collective",
    date: "January 5, 2024",
    tags: ["repair", "DIY", "right to repair", "maintenance"]
  },
  {
    id: 9,
    title: "E-Waste and Urban Mining",
    description: "Exploring how valuable materials can be recovered from electronic waste through urban mining practices, turning waste into a valuable resource stream.",
    image: "https://images.unsplash.com/photo-1511502435191-fc0100a70333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Innovation",
    readTime: "11 min read",
    author: "Resource Recovery Institute",
    date: "February 14, 2024",
    tags: ["urban mining", "precious metals", "resource recovery", "innovation"]
  },
  {
    id: 10,
    title: "Smart Consumption of Electronics",
    description: "Guidelines for responsible purchasing and usage of electronic devices to minimize waste generation and maximize the sustainability of your digital lifestyle.",
    image: "https://images.unsplash.com/photo-1610664921890-ebad05086414?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    readTime: "7 min read",
    author: "Sustainable Living Collective",
    date: "March 8, 2024",
    tags: ["consumption", "lifestyle", "sustainable purchasing", "minimalism"]
  },
  {
    id: 11,
    title: "E-Waste Laws and Regulations",
    description: "Understanding the legal framework surrounding e-waste disposal and recycling in different regions and how these laws are evolving to address the growing challenge.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Legal",
    readTime: "9 min read",
    author: "Environmental Law Center",
    date: "April 22, 2024",
    tags: ["law", "regulation", "policy", "compliance"]
  },
  {
    id: 12,
    title: "Future of E-Waste Management",
    description: "Emerging trends and technologies that will shape the future of electronic waste management and recycling, from blockchain tracking to AI-powered sorting.",
    image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Future",
    readTime: "10 min read",
    author: "Future Tech Sustainability Forum",
    date: "May 15, 2024",
    tags: ["future", "trends", "innovation", "technology"]
  }
];

export const randomBlogs = (count: number): BlogCard[] => {
  const shuffled = [...blogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getBlogsByCategory = (category: string): BlogCard[] => {
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
};

export const getBlogsByTag = (tag: string): BlogCard[] => {
  return blogs.filter(blog => blog.tags && blog.tags.includes(tag.toLowerCase()));
};
