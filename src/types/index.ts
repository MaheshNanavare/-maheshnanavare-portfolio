export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
  year: number;
};

export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  description?: string;
};
