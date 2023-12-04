import blogImg from "../../assets/recycling.png";
type BlogCard = {
    id: any;
    title: string;
    description: string;
    image: any;
  };
  
export const blogs: BlogCard[] = [
  {
    id: 1,
    title: "Understanding E-Waste: A Comprehensive Guide",
    description:" Understanding E-Waste: A Comprehensive Guide E-waste, the ever-growing mountain of discarded electronic devices, casts a long shadow over our planet.** From smartphones to refrigerators, these once-treasured gadgets become toxic threats if not handled responsibly. But fear not, fellow eco-warriors! This comprehensive guide equips you with the knowledge and tools to navigate the e-waste labyrinth and emerge victorious",
    image: blogImg,
  },
    {
      id: 2,
      title: "The Lifecycle of Electronic Devices: From Production to Recycling",
      description:
        "Learn about the journey of electronic devices, from manufacturing to end-of-life recycling, and the challenges in each stage. Gain insights into the environmental impact of electronic devices throughout their life cycle, emphasizing the importance of responsible consumption and recycling. Explore practical tips for consumers to minimize e-waste generation at home.",
      image: blogImg,
    },
    {
      id: 3,
      title: "E-Waste Recycling Technologies: Innovations and Solutions",
      description:
        "Discover the latest technologies and innovations in e-waste recycling and how they contribute to a sustainable future. This blog explores cutting-edge solutions for extracting valuable materials from electronic waste and highlights the role of technology in creating a circular economy. Dive into the impact of e-waste on human health and ways to mitigate health hazards.",
      image: blogImg,
    },
    {
      id: 4,
      title: "Impact of E-Waste on Human Health: A Deep Dive",
      description:
        "Delve into the potential health hazards associated with e-waste exposure and ways to mitigate these risks for individuals and communities. Understand the role of electronics manufacturers in reducing e-waste, including sustainable design practices and extended producer responsibility. Explore the intersection of art and e-waste, featuring artists who repurpose electronic components into unique works of art.",
      image: blogImg,
    },
    {
      id: 5,
      title: "Reducing E-Waste at Home: Practical Tips for Consumers",
      description:
        "Explore practical strategies for consumers to minimize e-waste generation at home, including proper disposal and responsible purchasing decisions. Get insights into international regulations and policies addressing e-waste management and the role of governments in enforcing them. Discover successful e-waste awareness campaigns worldwide, their impact, and the lessons learned for future initiatives.",
      image: blogImg,
    },
    {
      id: 6,
      title: "E-Waste Regulations: A Global Perspective",
      description:
        "Get insights into the international regulations and policies addressing e-waste management and the role of governments in enforcing them. Discover successful e-waste awareness campaigns worldwide, their impact, and the lessons that can be applied to future initiatives. Explore the role of electronics manufacturers in reducing e-waste and their responsibility in sustainable design practices.",
      image: blogImg,
    },
    {
      id: 7,
      title: "E-Waste Awareness Campaigns: Success Stories and Lessons Learned",
      description:
        "Discover successful e-waste awareness campaigns worldwide, their impact, and the lessons that can be applied to future initiatives. Explore the intersection of art and e-waste, featuring artists who repurpose electronic components to create unique and thought-provoking works. Learn about the responsibility of electronics manufacturers in reducing e-waste and the importance of sustainable design practices.",
      image: blogImg,
    },
    {
      id: 8,
      title: "E-Waste Art: Transforming Discarded Electronics into Masterpieces",
      description:
        "Explore the intersection of art and e-waste, featuring artists who repurpose electronic components to create unique and thought-provoking works. Learn about the responsibility of electronics manufacturers in reducing e-waste, including sustainable design practices and extended producer responsibility. Dive into the impact of e-waste on human health and ways to mitigate health hazards.",
      image: blogImg,
    },
    {
      id: 9,
      title: "The Role of Electronics Manufacturers in E-Waste Reduction",
      description:
        "Learn about the responsibility of electronics manufacturers in reducing e-waste, including sustainable design practices and extended producer responsibility. Explore practical tips for consumers to minimize e-waste generation at home. Discover successful e-waste awareness campaigns worldwide, their impact, and the lessons learned for future initiatives.",
      image: blogImg,
    },
  ];
  export const randomBlogs = blogs.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);
  