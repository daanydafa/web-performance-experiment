<script>
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";
  import ArticleDetail from "./pages/ArticleDetail.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  let route = window.location.hash;
  let articleId = null;

  const updateRoute = () => {
    route = window.location.hash;
    const match = route.match(/^#\/article\/(\d+)$/);
    articleId = match ? match[1] : null;
  };

  onMount(() => {
    updateRoute();
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  });
</script>

<Header />

{#if articleId}
  <ArticleDetail id={articleId} />
{:else}
  <Home />
{/if}

<Footer />
