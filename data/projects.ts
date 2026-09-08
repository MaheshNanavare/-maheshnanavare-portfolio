import type { Project } from "@/types/project";

/**
 * Add a project only once it is live and the link works.
 * `liveUrl` and `screenshot` are required by the type, so an
 * undeployed project cannot be added without a type error.
 */
export const PROJECTS: Project[] = [];
