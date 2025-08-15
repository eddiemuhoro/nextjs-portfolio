// gitprofile.config.ts

const CONFIG = {
  github: {
    username: "eddiemuhoro", // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: "",
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: "Github Projects",
      mode: "manual", // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: "stars", // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          "eddiemuhoro/agentic-ai",
          "eddiemuhoro/django_stripe_api",
          "eddiemuhoro/tech-kenya",
          "eddiemuhoro/django_ecommerce",
          "eddiemuhoro/Ecommerce_API",
          "eddiemuhoro/VueDuka",
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: "Freelance Projects",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "Flash Proxy",
          description:
            "Flash Proxy (Nextjs) is a web proxy that allows you to browse the internet anonymously. It's a free project that is easy to use and provides a secure connection to the internet. ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseCtA7L4HMS6DfA3kZ_WFOc_-U6ufMGao-A&s",
          link: "https://www.flashproxy.io/",
        },
        {
          title: "Agrogis",
          description:
            "Agrogis is a Reactjs web-based GIS application that provides farmers with information about their farms. It helps farmers make informed decisions about their crops.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGEqep0FpAThSQnhdP_EiITp1Cjdf1-ipFw&s",
          link: "https://www.agrogis.ro",
        },
        {
          title: "Recruitment Portal",
          description:
            "A full-stack, AI-powered job portal platform with separate user and admin interfaces, built for scalable, real-world deployment.",
          imageUrl:
            "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://skyways-q53w.vercel.app/dashboard",
        },
        {
          title: "Tech East Africa",
          description:
            "Tech Kenya is a job board website made using Vue. It helps tech professionals find jobs in the tech industry in East Africa.",
          imageUrl:
            "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://techkenya.vercel.app",
        },
        {
          title: "Palmcoco English",
          description:
            "Palmcoco English is a web-based English learning platform that helps South Koreans students learn English online. It provides students with interactive lessons and quizzes.",
          imageUrl:
            "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://www.palmcocoenglish.com",
        },
        {
          title: "Art Waves",
          description:
            "Art Waves is a web-based platform that helps artists showcase their art online. It provides artists with a platform to sell their art to a global audience.",
          imageUrl:
            "https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://artwavesrev.vercel.app",
        },
      ],
    },
    personal: {
      header: "Freelance Projects",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: "Flash Proxy",
          description:
            "Flash Proxy (Nextjs) is a web proxy that allows you to browse the internet anonymously. It's a free project that is easy to use and provides a secure connection to the internet. ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseCtA7L4HMS6DfA3kZ_WFOc_-U6ufMGao-A&s",
          link: "https://www.flashproxy.io/",
        },
        {
          title: "Agrogis",
          description:
            "Agrogis is a Reactjs web-based GIS application that provides farmers with information about their farms. It helps farmers make informed decisions about their crops.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGEqep0FpAThSQnhdP_EiITp1Cjdf1-ipFw&s",
          link: "https://www.agrogis.ro",
        },
        {
          title: "Recruitment Portal",
          description:
            "A full-stack, AI-powered job portal platform with separate user and admin interfaces, built for scalable, real-world deployment.",
          imageUrl:
            "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://skyways-q53w.vercel.app/dashboard",
        },
        {
          title: "Tech East Africa",
          description:
            "Tech Kenya is a job board website made using Vue. It helps tech professionals find jobs in the tech industry in East Africa.",
          imageUrl:
            "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://techkenya.vercel.app",
        },
        {
          title: "Palmcoco English",
          description:
            "Palmcoco English is a web-based English learning platform that helps South Koreans students learn English online. It provides students with interactive lessons and quizzes.",
          imageUrl:
            "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://www.palmcocoenglish.com",
        },
        {
          title: "Art Waves",
          description:
            "Art Waves is a web-based platform that helps artists showcase their art online. It provides artists with a platform to sell their art to a global audience.",
          imageUrl:
            "https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://artwavesrev.vercel.app",
        },
      ],
    },
  },
  seo: {
    title: "Portfolio of Edwin Muhoro",
    description:
      "Edwin Muhoro is a skilled and motivated website developer with 2 years of experience in designing, developing, and maintaining websites. Proﬁcient in React, Tailwind css",
    imageURL: "https://avatars.githubusercontent.com/u/106593301?v=4",
  },
  social: {
    linkedin: "muhoroedwin",
    twitter: "CodesEddie",
    mastodon: "arifszn@mastodon.social",
    researchGate: "",
    facebook: "",
    instagram: "",
    youtube: "", // example: 'pewdiepie'
    dribbble: "",
    behance: "",
    medium: "eddiemuhoro",
    dev: "eddiemuhoro",
    stackoverflow: "", // example: '1/jeff-atwood'
    skype: "",
    telegram: "",
    website: "https://eddiemuhoro.vercel.app",
    phone: "+254 705982249",
    email: "eddiemuhoro@gmail.com",
  },
  resume: {
    fileUrl:
      "https://docs.google.com/document/d/1CTiJ2N09J_D9gIoAlt566U1pjcoaYcy-/edit?usp=sharing&ouid=104645687254060085016&rtpof=true&sd=true", // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Next.js",
    "Django",
    "FastAPI",
    "Flask",
    "MySQL",
    "ASP.NET",
    "PostgreSQL",
    "Mongodb",
    "Git",
    "CSS",
    "Tailwind",
  ],
  experiences: [
    {
      company: "Sajsoft Solutions",
      position: "Full Stack Developer",
      type: "Fulltime",
      from: "December 2024",
      to: "Present",
      companyLink: "https://sajsoft.co.ke",
    },
    {
      company: "Anmart Developers, Kenya",
      position: "Full Stack Developer",
      type: "FreeLancer",
      from: "January 2024",
      to: "December 2024",
      companyLink: "https://anmart.co.ke/",
    },
    {
      company: "Thelathin Group Ltd",
      position: "Frontend Developer",
      type: "Attachee",
      from: "Juy 2024",
      to: "December 2024",
      companyLink: "https://thelathingroup.com/",
    },

    {
      company: "FlashProxy, Germany",
      position: "Full Stack Developer",
      type: "FreeLancer",
      from: "May 2024",
      to: "June 2024",
      companyLink: "https://www.flashproxy.io/",
    },

    {
      company: "Agrogis, Romania",
      position: "Web developer",
      type: "FreeLancer",
      from: "May 2023",
      to: "June 2024",
      companyLink: "https://agrogis.ro/",
    },
  ],
  certifications: [
    {
      name: "Python",
      body: "Python Kaggle Course",
      year: "May 2025",
      link: "https://www.kaggle.com/learn/certification/edwinedward/python",
    },
    {
      name: "Career Essentials in Generative AI",
      body: "Career Essentials in Generative AI by LinkedIn Learning",
      year: "May 2025",
      link: "https://www.linkedin.com/learning/certificates/9b0131eff51a02ea91e23e84c1da1bd81ceafebcf5a549fcaabb32b8dc9f8efa?trk=share_certificate",
    },
  ],
  educations: [
    {
      institution: "Dedan Kimathi University of Technology",
      degree: "Bsc Computer Science",
      from: "2021",
      to: "2024",
    },
    {
      institution: "Utumishi Academy",
      degree: "Computer Studies, Physics, Mathematics",
      from: "2017",
      to: "2020",
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: "dev", // medium | dev
    username: "eddiemuhoro", // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    //from env
    id: "",
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "6441080",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "light",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "procyon",
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by <a 
      class="text-primary" href="https://www.linkedin.com/in/muhoroedwin/"
      target="_blank"
      rel="noreferrer"
    >Edwin Muhoro</a>`,

  enablePWA: true,
};

export default CONFIG;
