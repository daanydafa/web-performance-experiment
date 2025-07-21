<script>
  export let article;

  $: hidden = !article;
</script>

{#if !hidden}
  <a
    href={`#/article/${article.id}`}
    class="block mb-6 rounded overflow-hidden shadow hover:shadow-lg transition"
  >
    <img
      src={article.imageUrl}
      alt={article.title}
      class="w-full h-64 object-cover"
    />  
    <div class="p-4 bg-white">
      <h1 class="text-2xl font-bold mb-2">{article.title}</h1>
      <p class="text-sm text-gray-600">{article.excerpt}</p>
    </div>
  </a>
{/if}
