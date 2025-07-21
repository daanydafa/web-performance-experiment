<script>
    import { onMount } from "svelte";

    let visible = false;
    let el;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("ENTRY:", entry.isIntersecting, entry.target);
                if (entry.isIntersecting) {
                    visible = true;
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: "0px", //
                threshold: 0.25, // 
            },
        );

        if (el) observer.observe(el);

        return () => {
            observer.disconnect();
        };
    });
</script>

<div
    bind:this={el}
    style="min-height: 100px; background: {visible ? 'transparent' : '#eee'};"
>
    {#if visible}
        <slot />
    {/if}
</div>
