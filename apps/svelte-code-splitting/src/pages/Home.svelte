<script>
  import { onMount } from "svelte";
  import { fetchArticles } from "../api";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import HeroArticle from "../lib/HeroArticle.svelte";
  import PopularSection from "../lib/PopularSection.svelte";
  import CategoryNav from "../lib/CategoryNav.svelte";
  import NewsList from "../lib/NewsList.svelte";

  let articles = [];

  onMount(async () => {
    articles = await fetchArticles();
  });

  $: sortedArticlesByPublished = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  $: sortedArticlesByViews = [...sortedArticlesByPublished.slice(0, 10)].sort(
    (a, b) => b.views - a.views,
  );

  $: hero = sortedArticlesByPublished[0];
  $: others = sortedArticlesByPublished.slice(1);
</script>

<CategoryNav />

<main class="px-6 py-4 max-w-6xl mx-auto">
  <HeroArticle article={hero} />

  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <div class="md:w-1/3">
      <PopularSection articles={sortedArticlesByViews} />
    </div>
    <div class="md:w-2/3 space-y-4">
      <h2 class="text-lg font-bold mb-2">Berita Terbaru</h2>
        {#each others as article (article.id)}
          <svelte:component this={NewsList} {article} />
        {/each}
    </div>
  </div>
</main>