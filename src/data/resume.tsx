import { Icons } from "@/components/icons";
import { HomeIcon, LogOut, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pierluigi Rizzu",
  initials: "PR",
  url: "https://pierluigirizzu.com",
  location: "Italy",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Innovative Full-Stack Developer crafting cutting-edge web and mobile solutions.",
  summary:
    "Versatile software engineer with 5+ years of experience in building advanced web and mobile applications. Expert in React ecosystem (React, Remix, Next.js) and Node.js for full-stack development. Proficient in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Skilled in Flutter for cross-platform mobile development, and serverless architectures (Firebase, AWS Lambda). Experienced in GraphQL, REST APIs, Docker, and cloud platforms (AWS, GCP). Implements CI/CD pipelines and follows Agile methodologies. Passionate about clean code, performance optimization, and delivering exceptional user experiences. Consistently stays ahead of emerging tech trends.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Remix",
    "Next.js",
    "Node.js",
    "Express",
    "Flutter",
    "Firebase",
    "AWS Lambda",
    "TypeScript",
    "GraphQL",
    "REST API",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Google Cloud Platform",
    "CI/CD",
    "Agile/Scrum",
    "TDD",
    "Microservices Architecture",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "commerciale@pierluigirizzu.com",
    tel: "+39 3203324889",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pierluigirizzu/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/393203324889",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:commerciale@pierluigirizzu.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Exagon",
      href: "https://exagon.com",
      badges: [],
      location: "Location",
      title: "Technical Lead | Software Architect",
      logoUrl: "/exagon.jpeg",
      start: "Jul 2023",
      end: "Present",
      description:
        "Initially hired as a Flutter Developer, I led the transition to React, enhancing our development capabilities. Key contributions to the Exagon Plus project include real-time appointment scheduling with WebSockets, CI/CD pipelines, and environment segregation. My leadership enabled Exagon to take on high-profile projects, particularly in developing management systems integrated with various external services. As head of the technical department, I work closely with the CEO, driving strategic initiatives and ensuring successful project delivery.",
    },
    {
      company: "Freelance",
      href: "https://pierluigirizzu.it",
      badges: [],
      location: "Remote",
      logoUrl: "",
      title: "Software Developer | Mobile Developer",
      start: "Feb 2022",
      end: "Present",
      description:
        "As a solo freelancer, I have successfully managed and delivered turnkey projects ahead of schedule, specializing in Flutter development. My work involves converting mobile applications into websites and vice versa, showcasing versatility across platforms. I have managed interactions and presentations of final products to major clients, including the University of Padua and Johix, consistently delivering high-quality solutions that meet and exceed client expectations.",
    },
    {
      company: "Ars Digitalia",
      href: "https://arsdigitalia.com",
      badges: [],
      location: "Naples, Italy",
      title: "Mobile Architect | Flutter Tech Leader",
      logoUrl: "/ars.png",
      start: "Oct 2019",
      end: "Nov 2023",
      description:
        "At Ars Digitalia, I established and led the mobile department, transitioning the team from Nativescript to Flutter. I integrated Flutter with technologies like Shopify, PayPal, Firebase, and Prestashop, enhancing our mobile products. I collaborated with clients such as Axios, Ambrosetti, and the Rotary Club, supporting over 50,000 users. My leadership enabled the company to deliver high-quality mobile solutions and expand its client base.",
    },

    {
      company: "Datbrain",
      href: "https://datbraincompany.com",
      badges: [],
      location: "London, UK",
      title: "Mobile Developer | Frontend Developer",
      logoUrl: "/datbrain.png",
      start: "Jan 2019",
      end: "Jun 2021",
      description:
        "At Datbrain, I began my career as a Mobile Developer, contributing to the evolution of the Hudi app from a mobile application to the DFE app, a comprehensive web platform with integrated cryptocurrency features. I developed robust referral systems that enhanced user engagement and growth. Demonstrating versatility, I transitioned to a Frontend Developer role, where I played a key role in developing Smarkez, a browser application for marketers. I integrated Firebase for notifications and other functionalities, significantly enhancing the application's performance and user experience.",
    },
  ],
  education: [
    {
      school: "Apple Developer Academy",
      href: "https://www.developeracademy.unina.it/it/",
      degree: "",
      logoUrl: "/apple.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Colorami Store Locator & Booking System",
      href: "#",
      dates: "2023 - Present",
      description:
        "Developed a dual-component system for Colorami: a store locator built with Next.js to leverage server-side rendering (SSR) for optimal performance and SEO, and individual business websites created with Create React App (CRA). For the business sites, implemented an innovative solution using Express.js to serve the React applications while injecting custom metadata, enabling a white-label approach without migrating from CRA to Next.js. This architecture allows for SEO-friendly, dynamically generated websites for each business. Integrated Google APIs for mapping in the store locator, Stripe for secure payments in the booking system, and used Tailwind CSS for consistent styling across both components. The entire system is deployed on Vercel for scalability and performance.",
      technologies: [
        "Next.js",
        "React (CRA)",
        "Express.js",
        "TypeScript",
        "Google APIs",
        "Vercel",
        "Stripe",
        "Tailwind CSS",
      ],
      projectUrl: "https://www.colorami.space/storelocator",
      video: "video/StoreLocator.mp4",
    },
    {
      title: "ExagonPlus - White Label Business Management SaaS",
      href: "https://landing.exagonplus.com/",
      dates: "2023 - Present",
      description:
        "Developed ExagonPlus, a versatile white-label SaaS solution for business management, initially focused on salons but adaptable to various entities. The platform offers a customizable interface for appointment booking, customer management, and business analytics. Implemented real-time data synchronization across multiple devices using Socket.io, ensuring seamless coordination for staff. Key features include automated notifications, online payments, and customizable service menus. The responsive design, built with React and Tailwind CSS, provides an optimal user experience across all devices. Utilized TypeScript for enhanced code reliability and maintainability. The white-label approach allows for easy customization and branding for different business types.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "Stripe",
        "Firebase Hosting",
      ],
      projectUrl: "https://landing.exagonplus.com/",
      video: "video/Exagon.mp4",
    },
    {
      title: "Ambrosetti Forum Mobile App",
      href: "https://management.ambrosetti.eu/it/pages/index?view=download-app",
      dates: "2022 - 2023",
      description:
        "Developed the official mobile application for The European House - Ambrosetti Forum, one of the world's most prestigious economic and geopolitical gatherings. This Flutter-based app significantly enhanced the experience for high-profile attendees, including global leaders and top executives. Leveraging Firebase for real-time data synchronization and push notifications, the app provided instant access to event schedules, speaker profiles, and exclusive content. Implemented robust security measures to protect sensitive information, reflecting the forum's elite status. The app's success contributed to modernizing the forum's digital presence, aligning with its reputation as a pivotal platform for international dialogue on critical global issues.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "iOS",
        "Android",
        "Real-time Synchronization",
        "Push Notifications",
      ],
      projectUrl:
        "https://management.ambrosetti.eu/it/pages/index?view=download-app",
      video: "video/Ambrosetti.mp4",
    },
    {
      title: "RotarApp - Rotary Club Mobile Application",
      href: "https://www.rotarapp.net/",
      dates: "2022",
      description:
        "Developed RotarApp, the official mobile application for Rotary Clubs, enhancing communication and engagement among members. This Flutter-based app streamlines club management, event organization, and member interactions. Key features include real-time notifications for club activities, a member directory, and secure document sharing. The app significantly improved club efficiency and member participation, aligning with Rotary's mission of service and community building. Implemented robust security measures to protect sensitive club information and member data.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "iOS",
        "Android",
        "Real-time Notifications",
        "Secure Data Management",
      ],
      projectUrl: "https://www.rotarapp.net/",
      video: "video/RotarApp.mp4",
    },
    {
      title: "Axios RE - School Management App",
      href: "https://play.google.com/store/apps/details?id=com.axiositalia.re.teachers",
      dates: "2022",
      description:
        "Developed Axios RE, a comprehensive school management application for Italian national schools. This Flutter-based mobile app revolutionizes how teachers, students, and parents interact with the educational system. Key features include digital class registers, grade management, attendance tracking, and parent-teacher communication channels. Leveraging Firebase for real-time data synchronization, the app significantly enhances the efficiency of administrative tasks in schools, providing instant updates and improving overall educational workflow. Implemented advanced data protection measures using Firebase Security Rules to ensure compliance with Italian educational data privacy regulations.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "iOS",
        "Android",
        "Educational Data Management",
        "Real-time Synchronization",
      ],
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.axiositalia.re.teachers",
      video: "video/AxiosRE.mp4",
    },
  ],
  hackathons: [
    /*  {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    }, */
  ],
} as const;
