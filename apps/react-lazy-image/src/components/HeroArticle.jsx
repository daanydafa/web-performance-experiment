
export default function HeroArticle({ article }) {
    if (!article) return null;

    return (
        <a
            href={`#/article/${article.id}`}
            className="block mb-6 rounded overflow-hidden shadow hover:shadow-lg transition"
        >
            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 object-cover"
                loading="lazy"
            />
            <div className="p-4 bg-white">
                <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
                <p className="text-sm text-gray-600">{article.excerpt}</p>
            </div>
        </a>
    );
}
