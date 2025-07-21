<script>
  export let article;

  $: loading = !article;
</script>

{#if loading}
  <div class="mb-6 rounded overflow-hidden shadow bg-white">
    <div class="w-full h-64 bg-gray-200 animate-pulse" />

    <div class="p-4">
      <div class="h-6 bg-gray-300 rounded w-3/4 mb-2" />
    </div>
  </div>
{:else}
  <a
    href={`#/article/${article.id}`}
    class="block mb-6 rounded overflow-hidden shadow hover:shadow-lg transition"
  >
    <img
      src={article.imageUrl}
      alt={article.title}
      class="w-full h-64 object-cover"
      width="640"
      height="360"
    />
    <div class="p-4 bg-white">
      <h1 class="text-2xl font-bold mb-2">{article.title}</h1>
    </div>
  </a>
{/if}
