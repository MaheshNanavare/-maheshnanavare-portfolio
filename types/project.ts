export type Project = {
  /** Unique key, also used for the screenshot filename. */
  slug: string;
  title: string;
  /** One or two sentences, plain language. */
  description: string;
  tech: string[];
  /** Required: if it isn't deployed, it doesn't belong here. */
  liveUrl: string;
  /** Optional — private repos are fine. */
  repoUrl?: string;
  /** Path under /public, e.g. /projects/my-app.png */
  screenshot: string;
  /** Surfaces the project on the home page. */
  featured?: boolean;
};
