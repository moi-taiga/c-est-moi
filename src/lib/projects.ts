import { getCollection } from 'astro:content';

/** All projects, sorted by their `order` field (projects without one go last). */
export async function getSortedProjects() {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) => (a.data.order ?? Number.MAX_SAFE_INTEGER) - (b.data.order ?? Number.MAX_SAFE_INTEGER),
  );
}
