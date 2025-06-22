import { headers } from 'next/headers';

export async function fetcher<T = any>(path: string, options?: RequestInit & { next?: { revalidate?: number } }): Promise<T> {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}${path}`;
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`fetchApi: ${res.status} ${res.statusText}`);
  return res.json();
}