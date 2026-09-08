export const SITE = {
  name: "Mahesh Nanavare",
  tagline: "Building & Shipping Live Products",
  url: "https://maheshnanavare.co.uk",
  description:
    "Software engineer building and shipping live products. MSc Computer Science, University of Bristol.",
  // TODO(confirm): is this the address you want published?
  email: "maheshnanavare2212@gmail.com",
  github: "https://github.com/MaheshNanavare",
  // TODO(replace): placeholder — supply your real LinkedIn URL.
  linkedin: "https://www.linkedin.com/in/maheshnanavare",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const BIO = [
  "I'm a software engineer with an MSc in Computer Science from the University of Bristol. I care about work that actually ships — things people can open in a browser and use.",
  "Alongside my own projects, I teach and build for non-profits, which keeps me honest about writing code other people have to read and maintain.",
];

export const ROLES = [
  {
    title: "Graduate Teacher",
    org: "University of Bristol",
    detail: "Supporting students learning Java.",
  },
  {
    title: "Volunteer Web Developer",
    org: "Chetacare, Nigeria",
    detail: "Building and maintaining their web presence.",
  },
  {
    title: "Volunteer Web Developer",
    org: "Obuyisi, Uganda",
    detail: "Building and maintaining their web presence.",
  },
];

export const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Java", "Spring Boot", "PostgreSQL"] },
  { group: "Infrastructure", items: ["Docker", "Kubernetes"] },
];
