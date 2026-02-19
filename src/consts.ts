import type { Experience, IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Axel Minart',
  description:
    "Software Engineer full stack specializing in modern web technologies. Expert in Angular, Node.js, TypeScript, and WebGL development with Babylon.js. Explore my latest blog posts, project insights, and programming tips. What drives me every day: taking on new projects and challenges in this dynamic and demanding sector!",
  href: 'https://www.axelminart.com',
  author: 'Axel Minart',
  locale: 'en-US',
  location: 'France',
  email: 'axelminart.pro@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/axel-cmd',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/axel-minart',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:axelminart.pro@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  LinkedIn: 'lucide:linkedin',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  'Databases': Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'TypeScript', logo: 'simple-icons:typescript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'Angular', logo: 'simple-icons:angular' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'GitLab', logo: 'simple-icons:gitlab' },
  ],
  'Hosting and Cloud Services': [
    { text: 'Hostinger', logo: 'simple-icons:hostinger' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Debian', logo: 'simple-icons:debian' },
  ],
  'Other Programming Languages and Technologies': [
    { text: 'C#', logo: 'simple-icons:csharp' },
    { text: 'Golang', logo: 'mdi:language-go' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
    { text: 'Python', logo: 'simple-icons:python' },
  ],
  'Web Servers': [
    { text: 'Apache', logo: 'cib:apache' },
    { text: 'Nginx', logo: 'cib:nginx' },
    { text: 'IIS', logo: 'mdi:server' },
  ],
  'Databases': [
    { text: 'MySQL', logo: 'cib:mysql' },
    { text: 'MongoDB', logo: 'cib:mongodb' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Spotify', logo: 'mdi:spotify' },
    { text: 'Visual Studio', logo: 'simple-icons:visualstudio' },
  ],
}

export const experiences: Experience[] = [
  {
    jobTitle: 'R&D Engineer',
    company: 'ALCEA - ASSA ABLOY Group',
    dateStart: 'Oct 2024',
    dateEnd: 'Present',
    logo: '/static/alcea_assa_abloy_logo.jpg',
    description: "As part of my role, I design and develop innovative solutions for connected security systems and building management technologies. These projects contribute to a continuous improvement approach focused on innovation, system reliability, and user experience.",
    tasks: [
      "Continuously enhancing the real-time web-based editor and supervisor, dedicated to the creation of building management solutions, integrating access control, intrusion detection, and video surveillance.",
      "Designing a web-based data curve visualization component, enabling real-time monitoring or access to archived data from equipment connected to Alcea systems.",
      "Continuously enhancing the REST API to improve interoperability and backend performance.",
      "Developing a natural language abstraction server that helps users understand and interpret field events without requiring specific technical knowledge.",
      "Took over a lesser-known part of the codebase using Bison and Flex for lexer and parser generation, aimed at developing a domain-specific language."
    ]
  },
  {
    jobTitle: 'R&D Engineer, Apprenticeship',
    company: 'ALCEA - ASSA ABLOY Group',
    dateStart: 'Sept 2021',
    dateEnd: 'Sept 2024',
    logo: '/static/alcea_assa_abloy_logo.jpg',
    description: "As part of my role, I resumed the proof of concept developed during my internship to create the application using modern technologies.",
    tasks: [
      "Developing a real-time web-based editor and supervisor, dedicated to the creation of building management solutions, integrating access control, intrusion detection, and video surveillance.",
      "Integrate my development into the existing codebase, ensuring compatibility and seamless integration with the existing system."
    ]
  },
  {
    jobTitle: 'R&D Engineer, Internship',
    company: 'ALCEA - ASSA ABLOY Group',
    dateStart: 'Jun 2021',
    dateEnd: 'Sept 2021',
    logo: '/static/alcea_assa_abloy_logo.jpg',
    tasks: [
      'Study and development of proof of concept for the animation in real time of graphic synoptic, dedicated to the management of access control and intrusion detection. Application developed in full web.',
      'Use of the Babylon.js JavaScript library, which allows the creation of 3D application based on WebGL.',
      'Connection to a Web socket that allows sending data to the application to animate 3D objects in real time.'
    ]
  },
  {
    jobTitle: 'Order Picker',
    company: 'DELANCHY PRESTATIONS DE SERVICES 91 - DPS 91',
    dateStart: 'Sep 2019',
    dateEnd: 'Sep 2019',
    logo: '/static/delanchy.webp',
    tasks: [
      'Unpacking and storage of pallets received in the morning.',
      'Preparation of pallets to be sent to the recipients.',
    ]
  }
]
