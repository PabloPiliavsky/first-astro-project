import type { DevToArticle } from '../../types/article';

export async function getDevToArticles(tag: string = 'astro', limit: number = 9): Promise<DevToArticle[]> {
  const url = `https://dev.to/api/articles?tag=${encodeURIComponent(tag)}&per_page=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fallo al consultar la API de Dev.to (Status: ${response.status})`);
  }

  const data: DevToArticle[] = await response.json();
  return data;
}
