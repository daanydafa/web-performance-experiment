<script>
    export let articles = [];
    $: picks = articles.slice(0, 5);
    
    const formatDate = (dateString) =>
        new Date(dateString).toLocaleString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
</script>

<aside class="w-full p-4 bg-white">
    <h2 class="text-lg font-bold text-blue-700 mb-4">Berita Terpopuler</h2>
    <ol class="space-y-4 list-none p-0">
        {#each picks as article, index}
            <li class="leading-tight">
                <a href={`#/article/${article.id}`} class="block group">
                    <div class="text-gray-400 font-bold text-sm mb-1">
                        #{index + 1}
                    </div>
                    <h3
                        class="text-base font-semibold group-hover:underline text-gray-900"
                    >
                        {article.title}
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                        {formatDate(article.publishedAt)}
                    </p>
                </a>
            </li>
        {/each}
    </ol>
</aside>
