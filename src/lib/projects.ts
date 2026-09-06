import type { Project } from "@/types";

// Placeholder content — edit the copy, tags and URLs as each project firms up.
// Simple array for now; move behind Prisma when the database lands.
export const projects: Project[] = [
  {
    slug: "chetacare",
    title: "Chetacare",
    description:
      "Placeholder description — a healthcare-focused web platform. Replace with a couple of sentences on the problem it solves and your role in building it.",
    tags: ["NGO", "Healthcare", "Next.js"],
    url: "",
    status: "live",
    year: 2025,
  },
  {
    slug: "obuyisi-bwomu-initiative",
    title: "Obuyisi bw'Omu Initiative",
    description:
      "Placeholder description — a website for a community initiative. Replace with what the organisation does and what you built for them.",
    tags: ["NGO", "Community", "Web"],
    url: "",
    status: "live",
    year: 2025,
  },
  {
    slug: "football-club-site",
    title: "Football Club Site",
    description:
      "Placeholder description — a site for a local football club covering fixtures, results and squad information. Currently in development.",
    tags: ["Football Club", "Sports", "Next.js"],
    url: "",
    status: "in-progress",
    year: 2026,
  },
];
