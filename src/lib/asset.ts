/**
 * Resolve a public asset path against Vite's base URL so images work both at
 * the site root (local dev → "/") and under the GitHub Pages subpath
 * (e.g. "/muchachitoroundtrip_before/").
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
