import { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import HeroArticle from '../components/HeroArticle';
import CategoryNav from '../components/CategoryNav';
import NewsList from '../components/NewsList';
import PopularSection from '../components/PopularSection';
import LazyRender from '../components/LazyRender';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  const sortedArticlesByPublished = [...articles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  const sortedArticlesByViews = [...sortedArticlesByPublished.slice(0, 10)].sort((a, b) => b.views - a.views);
  const hero = sortedArticlesByPublished[0];
  const others = sortedArticlesByPublished.slice(1);


  return (
    <>
      <CategoryNav />

      <main className="px-6 py-4 max-w-6xl mx-auto">
        <HeroArticle article={hero} />

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/3">
            <PopularSection articles={sortedArticlesByViews} />
          </div>

          <div className="md:w-2/3 space-y-4">
            <h2 className="text-lg font-bold mb-2">Berita Terbaru</h2>
            {others.map(article => (
              <LazyRender key={article.id}>
                <NewsList article={article} />
              </LazyRender>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
