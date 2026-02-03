import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Axel Minart',
  description:
    "Junior Full Stack Developer specializing in modern web technologies. Expert in React, Node.js, TypeScript, and cloud development. Read my latest tech tutorials, project insights, and programming tips on web development, DevOps, and software engineering best practices.",
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
    { text: 'Angular', logo: 'cib:angular' },
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
