// src/pages/ArticleDetail.jsx
import { useEffect, useState } from 'react';
import { fetchArticleById } from '../api';

export default function ArticleDetail({ id }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetchArticleById(parseInt(id)).then(setArticle);
    }, [id]);

    if (!article) {
        return <div className="p-4">Memuat data...</div>;
    }

    const published = new Date(article.publishedAt).toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <>
            <main className="max-w-3xl mx-auto p-4">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
                <p className="text-sm text-gray-500 mb-6">{published}</p>
                <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                    {article.content}
                </p>
            </main>
        </>
    );
}
