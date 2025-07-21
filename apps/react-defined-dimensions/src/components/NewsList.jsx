export default function NewsLists({ article }) {
    const publishedAt = new Date(article.publishedAt).toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <a
            href={`#/article/${article.id}`}
            className="flex items-start gap-4 p-2 rounded hover:bg-gray-100 transition"
        >
            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-24 h-24 object-cover rounded flex-shrink-0"
            />
            <div className="flex flex-col">
                <h2 className="text-sm font-medium leading-snug line-clamp-2">
                    {article.title}
                </h2>
                <span className="text-xs text-gray-500 mt-1">{publishedAt}</span>
            </div>
        </a>
    );
}
