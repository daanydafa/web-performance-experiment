export default function HeroArticle({ article }) {
    if (!article) {
        return (
            <div className="mb-6 rounded overflow-hidden shadow bg-white">
                <div className="w-full h-64 bg-gray-200 animate-pulse" />

                <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
                </div>
            </div>
        );
    }

    return (
        <a
            href={`#/article/${article.id}`}
            className="block mb-6 rounded overflow-hidden shadow hover:shadow-lg transition"
        >
            <img
                src={article.imageUrl}
                alt={article.title}
                width="640"
                height="360"
                className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
                <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
            </div>
        </a>
    );
}
