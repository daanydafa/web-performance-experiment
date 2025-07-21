export const API_BASE = 'http://localhost:3001/api';

export async function fetchArticles() {
  const res = await fetch(`${API_BASE}/articles`);
  return res.json();
}

export async function fetchArticleById(id) {
  const res = await fetch(`${API_BASE}/articles/${id}`);
  return res.json();
}
