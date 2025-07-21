<script>
    const categories = [
        "Teknologi",
        "Politik",
        "Ekonomi",
        "Hiburan",
        "Olahraga",
        "Kesehatan",
    ];
</script>

<nav class="overflow-x-auto whitespace-nowrap border-b px-4 py-2 bg-white">
    <ul class="flex gap-4 text-sm text-gray-700">
        {#each categories as category}
            <li
                class="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 cursor-default"
            >
                {category}
            </li>
        {/each}
    </ul>
</nav>
