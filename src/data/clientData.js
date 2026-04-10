const clientData = {
  name: "John Doe",
  tagline: "Frontend Developer & UI/UX Designer",
  about: "I am a passionate frontend developer specializing in building modern, responsive, and performance-optimized web applications. With a strong eye for design and detail, I create seamless user experiences using Next.js and Tailwind CSS.",
  
  contact: {
    email: "hello@johndoe.com",
    phone: "+94 777 123 456",
    location: "New York, USA",
  },

  socialLinks: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  showDownloadCV: true,  //If client doesn't want to show download CV button, set this to "false" and remove cvLink
  cvLink: "/resume.pdf",  //CV rename as resume.pdf and place it in the public folder

  enableCustomCursor: true,  //If client doesn't want to show custom cursor, set this to "false"

  education: [
    {
      id: 1,
      school: "University of Technology",
      degree: "BSc in Computer Science",
      year: "2018 - 2022",
      description: "Graduated with honors. Specialized in software engineering and web technologies.",
    },
    {
      id: 2,
      school: "Modern Design Institute",
      degree: "Certificate in UI/UX Design",
      year: "2021",
      description: "Completed an intensive program focusing on user-centered design, typography, and wireframing.",
    },
    {
      id: 3,
      school: "Tech Academy",
      degree: "Diploma in Web Development",
      year: "2022",
      description: "Intensive 6-month bootcamp covering modern MERN stack development.",
    },
    {
      id: 4,
      school: "Design School Global",
      degree: "Advanced UI/UX Certification",
      year: "2023",
      description: "Specialized in advanced wireframing, prototyping, and accessibility standards.",
    }
  ],

  certificates: [
    {
      id: 1,
      title: "Advanced React Patterns",
      image: "https://picsum.photos/400/300?random=1",
      date: "2023",
      issuer: "Frontend Masters",
      description: "Mastered advanced component composition, custom hooks abstractions, and state management architectures."
    },
    {
      id: 2,
      title: "Tailwind CSS Mastery",
      image: "https://picsum.photos/400/300?random=2",
      date: "2023",
      issuer: "Udemy",
      description: "Completed an in-depth course covering responsive design, utility-first workflow, and modern UI practices."
    },
    {
      id: 3,
      title: "Full-Stack Next.js Developer",
      image: "https://picsum.photos/400/300?random=3",
      date: "2024",
      issuer: "Coursera",
      description: "Learned server-side rendering, API routes, and full-stack deployment scaling integrations natively."
    },
    {
      id: 4,
      title: "JavaScript Advanced Concepts",
      image: "https://picsum.photos/400/300?random=4",
      date: "2024",
      issuer: "Pluralsight",
      description: "Deep dive into JS closures, asynchronous event loops, prototypal inheritance and performance hooks."
    },
    {
      id: 5,
      title: "Responsive Web Design Mastery",
      image: "https://picsum.photos/400/300?random=5",
      date: "2025",
      issuer: "freeCodeCamp",
      description: "Built dozens of responsive user interfaces scaling exclusively with Flexbox and CSS Grid frameworks."
    },
    {
      id: 6,
      title: "Frontend Performance Optimization",
      image: "https://picsum.photos/400/300?random=6",
      date: "2025",
      issuer: "Google",
      description: "Engineered rendering paths achieving 99+ Lighthouse scores optimizing LCP, CLS, and asset caching."
    }
  ],
};

export default clientData;