<script>
  import { onMount } from "svelte";
  import Home from "./pages/Home.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  let route = window.location.hash;
  let articleId = null;
  let ArticleDetail = null;

  const updateRoute = async () => {
    route = window.location.hash;
    const match = route.match(/^#\/article\/(\d+)$/);
    articleId = match ? match[1] : null;

    if (articleId) {
      const module = await import("./pages/ArticleDetail.svelte");
      ArticleDetail = module.default;
    }
  };

  onMount(() => {
    updateRoute();
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  });
</script>

<Header />

{#if articleId && ArticleDetail}
  <svelte:component this={ArticleDetail} id={articleId} />
{:else}
  <Home />
{/if}

<Footer />