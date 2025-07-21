export default function PopularSection({ articles }) {
    if (!articles || articles.length === 0) {
        return (
            <aside className="w-full p-4 bg-white space-y-4 animate-pulse">
                <h2 className="text-lg font-bold text-blue-700 mb-4">Berita Terpopuler</h2>
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-1">
                        <div className="h-4 bg-gray-200 w-12 rounded" />
                        <div className="h-5 bg-gray-300 w-3/4 rounded" />
                        <div className="h-3 bg-gray-200 w-1/2 rounded" />
                    </div>
                ))}
            </aside>
        );
    }

    const picks = articles.slice(0, 5);

    return (
        <aside className="w-full p-4 bg-white">
            <h2 className="text-lg font-bold text-blue-700 mb-4">Berita Terpopuler</h2>
            <ol className="space-y-4 list-none p-0">
                {picks.map((article, index) => {
                    const published = new Date(article.publishedAt).toLocaleString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    });

                    return (
                        <li key={article.id} className="leading-tight">
                            <a href={`#/article/${article.id}`} className="block group">
                                <div className="text-gray-400 font-bold text-sm mb-1">#{index + 1}</div>
                                <h3 className="text-base font-semibold group-hover:underline text-gray-900">
                                    {article.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{published}</p>
                            </a>
                        </li>
                    );
                })}
            </ol>
        </aside>
    );
}
