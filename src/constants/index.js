import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    relm
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "particles",
      title: "Particles",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "github",
      title: "GitHub",
    },
    
  ];
  
  const services = [
    {
      title: "Set Theorist",
      icon: web,
    },
    {
      title: "Cybersecurity Researcher",
      icon: mobile,
    },
    {
      title: "Linux Enthusiast",
      icon: backend,
    },
    {
      title: "Chess Aficionado",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "RELM Insurance",
      icon: relm,
      iconBg: "#383E56",
      date: "December 2024 - Present",
      points: [
      "Rebuilt RELM-AI, an in-house LLM + RAG to expedite document retrieval and summaries for renewal policy underwriting.",
"Created risk modeling simulations in order to evaluate the profitability and probability of breakeven with inwards/outwards re-insurance deals.",
"Developed automation apps to optimize month-to-month business procedures, saving 65 hours of manual labor per month.",
"Collaborated with a team of 9 data engineers in order to clean, prepare and migrate more than 7000 Salesforce objects into MS Fabric."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Optimal Tech",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developed a full-stack web application using React and Node.js resulting in a 9% reduction in page load times.",
        "Collaborated with a team of 6 engineers to troubleshoot and resolve system errors, ensuring a smooth user experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Research Assistant",
      company_name: "TPTP - tptp.org",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Developed 19,600 problems for ATP systems while validating their satisfiable, countersatisfiable, contradictory axiom or theorem statuses.",
        "Assisted Dr. Geoff Sutcliffe with research on extending Automated Theorem Proving (ATP) systems into non-classical typed modal logics.",
        "Participating in code reviews and providing constructive feedback to other researchers.",
      ],
    },
    {
      title: "Lead Developer",
      company_name: "Tuitionary",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
