export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Nithin U',
  title: 'Specialist Programmer, Infosys Ltd',
  tagline: 'Specialist Programmer at Infosys with 1+ year of experience as a Full Stack Developer. Joined Infosys on 30 September 2024, currently working on internal projects within the STG and iCerts units. Experienced in building scalable enterprise applications using Java Spring Boot, React (TypeScript), Angular, Python, and GenAI.',
  email: 'nithinu2810@gmail.com',
  location: 'India',
  profilePhoto: 'https://nithinu2802.github.io/Assets/ImageProfile.jpg',
  resumeUrl: 'https://drive.google.com/file/d/1iQXL09nFVdysuIY7_gdbHGraJ3h_MXYc/view',
};

export const about = {
  bio: [
    'I am a Full Stack Developer with hands-on experience in Java Spring Boot, Angular, React, and Python (FastAPI/Flask). Google Cloud Certified Cloud Digital Leader and Associate Cloud Engineer. Contributed to open-source initiatives, internal projects with presentations and recognized at Infosys for technical contributions, delivery excellence, and innovation.',
    'I am a continuous self-learner, aiming to deepen my expertise in advanced full-stack development, microservices, Docker, Kubernetes, and cloud-native architectures, while building scalable and production-ready systems.',
  ],
};

export const skills: SkillCategory[] = [
  {
    name: 'Technical Skills',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      'Spring Boot',
      'Spring MVC',
      'Microservices',
      'REST APIs',
      'Flask',
      'FastAPI',
      'React',
      'Angular',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Cassandra', 'SQLAlchemy ORM', 'SQLyog'],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'Git',
      'GitHub',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Swagger / OpenAPI',
      'ELK Stack',
      'CI/CD Pipelines',
    ],
  },
  {
    name: 'Design Tools',
    skills: ['Canva'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Specialist Programmer',
    company: 'Infosys',
    duration: '2024 - Present',
    responsibilities: [
      'Built and deployed full-stack applications using Java Spring Boot, React, FastAPI, and Python.',
      'Developed a Recruitment Portal (React + FastAPI), mentored peers, and received managerial recognition.',
      'Engineered Spring Boot APIs with Swagger/OpenAPI to improve internal API consumption.',
      'Fixed 15+ defects and built reusable Angular components for the Infosys AIP Platform.',
      'Collaborated with SRE teams using the ELK stack and worked on a GenAI-driven QE portal using Google ADK.',
    ],
  },
  {
    title: 'ASP.NET Developer (Intern)',
    company: 'Sansoft Infotech',
    duration: 'May 2023 - Jun 2023',
    responsibilities: [
      'Developed Login and Registration modules using ASP.NET and C#.',
      'Implemented CRUD operations and basic authentication for dynamic web applications.',
    ],
  },
  {
    title: 'Full-Stack Developer (Intern)',
    company: 'Appin Technology, Coimbatore',
    duration: 'Feb 2024 - Mar 2024',
    responsibilities: [
      'Built an internal group chat application for secure organizational communication.',
      'Designed a custom React.js UI and developed backend services using Node.js and MongoDB.',
    ],
  },
];


export const projects: Project[] = [
  {
    name: 'IConnect Conference Website',
    description:
      'Developed and maintained a web application for the IConnect college conference, supporting event management throughout the conference lifecycle.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    githubUrl: 'https://github.com/NithinU2802/iconnect_Website',
  },
  {
    name: 'Obstacle Avoidance Voice-Controlled Rover',
    description:
      'An IoT-based robotic system built using Arduino and sensors, capable of obstacle avoidance and voice-based control.',
    technologies: ['C Programming', 'Arduino'],
    githubUrl: 'https://github.com/NithinU2802/Obstacle-Avoidance-Robot',
  },
  {
    name: 'College Website Using Laravel',
    description:
      'Developed a college website using the Laravel framework with an admin panel and role-based access for department coordinators.',
    technologies: ['PHP (Laravel)', 'HTML (Pug)', 'SQL'],
    githubUrl: 'https://github.com/NithinU2802/College_Website',
  },
  {
    name: 'Anti-Narcotics Application (Smart India Hackathon)',
    description:
      'Developed during the Smart India Hackathon (Gujarat); the project advanced to the finalist stage and focused on the Nasha Mukt Abhiyan initiative.',
    technologies: ['Java', 'Android Studio', 'XML', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/NithinU2802/AntiNarco',
  },
  {
    name: 'Diabetes and Parkinson Disease Prediction System',
    description:
      'Built a machine learning-based prediction system using SVM, later enhanced with Gradient Boosting for improved accuracy, and deployed via Streamlit.',
    technologies: ['Python', 'Machine Learning', 'Gradient Boosting', 'Streamlit'],
    liveUrl: 'https://nithinuteam.streamlit.app',
    githubUrl: 'https://github.com/NithinU2802/Diabetes_parkinson-Disease-Prediction',
  },
  {
    name: 'Portfolio Website',
    description:
      'Designed and developed a responsive personal portfolio to showcase academic background, skills, and projects. Deployed using GitHub Pages.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://nithinu2802.github.io',
    githubUrl: 'https://github.com/NithinU2802/NithinU2802.github.io',
  },
  {
    name: 'ToDoList Application',
    description:
      'Developed a full-stack ToDoList application supporting CRUD operations and task status tracking.',
    technologies: ['Java Spring Boot', 'React (TypeScript)', 'SQL'],
    liveUrl: 'https://nithinu2802.github.io/ToDoList',
    githubUrl: 'http://github.com/NithinU2802/ToDoList',
  },
  {
    name: 'Shopping Cart & Order Management System',
    description:
      'Built a Spring Boot-based system to manage cart creation, order processing, coupon-based discounts, inventory tracking, and analytics. Integrated ELK logging and practiced defect injection and resolution.',
    technologies: ['Java Spring Boot', 'ELK Stack'],
    githubUrl: 'https://github.com/NithinU2802/shopping-cart-system',
  },
];

export const education: Education = {
  degree: 'Bachelor of Engineering - Computer Science & Engineering',
  institution: 'K. Ramakrishnan College of Technology',
  duration: '2020 – 2024',
  highlights: [
    'Smart India Hackathon Finalist (Gujarat)',
    'Developed Android application for Nasha Mukt Abhiyan',
    'Served as Office Bearer, Vice President, and President',
    'Built college and conference websites using HTML, CSS, JavaScript, and PHP (Laravel)',
  ],
};

export const socialLinks = {
  github: 'https://github.com/NithinU2802',
  linkedin: 'https://www.linkedin.com/in/nithinu/',
  portfolio: 'https://nithinu2802.github.io',
};


