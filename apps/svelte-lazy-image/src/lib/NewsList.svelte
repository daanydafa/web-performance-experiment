<script>
  export let article;

  const publishedAt = new Date(article.publishedAt).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
</script>

<a
  href={`#/article/${article.id}`}
  class="flex items-start gap-4 p-2 rounded hover:bg-gray-100 transition"
>
  <img
    src={article.imageUrl}
    alt={article.title}
    class="w-24 h-24 object-cover rounded flex-shrink-0"
    loading="lazy"
  />
  <div class="flex flex-col">
    <h2 class="text-sm font-medium leading-snug line-clamp-2">
      {article.title}
    </h2>
    <span class="text-xs text-gray-500 mt-1">{publishedAt}</span>
  </div>
</a>
