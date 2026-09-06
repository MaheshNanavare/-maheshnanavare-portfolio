export type ProjectStatus = "live" | "in-progress";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Public URL. Empty string means there is nothing to link to yet. */
  url: string;
  status: ProjectStatus;
  year: number;
};

export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  description?: string;
};
