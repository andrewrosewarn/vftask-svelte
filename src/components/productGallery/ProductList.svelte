<script lang="ts">
import { Product } from "../../interfaces/Product";

    import ProductListItem from "./ProductListItem.svelte";

    export let products: Product[];
</script>
<ul class="product-list">
    {#each products as product (product.id) }
        <ProductListItem product={product} /> 
    {/each}
    
</ul>

<style>
    .product-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>