<script>
  import { onMount } from "svelte";
  import { fetchArticleById } from "../api";

  export let id;
  let article = null;

  onMount(async () => {
    const result = await fetchArticleById(parseInt(id));
    article = result;
  });

  const formatDate = (datetime) =>
    new Date(datetime).toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
</script>

{#if !article}
  <div class="p-4">Memuat...</div>
{:else}
  <main class="max-w-3xl mx-auto p-4">
    <img
      src={article.imageUrl}
      alt={article.title}
      class="w-full h-64 object-cover rounded mb-4"
    />
    <h1 class="text-3xl font-bold mb-2">{article.title}</h1>
    <p class="text-sm text-gray-500 mb-6">{formatDate(article.publishedAt)}</p>
    <p class="text-base text-gray-800 leading-relaxed whitespace-pre-line">
      {article.content}
    </p>
  </main>
{/if}
