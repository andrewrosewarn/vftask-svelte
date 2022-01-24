<script lang="ts">
    import { fetchProducts } from "../../api/fetchProducts";
    import { Product } from "../../interfaces/Product";
    import Divider from "../common/Divider.svelte";
    import Select from "../common/Select.svelte";
    import Typography from "../common/Typography.svelte";
    import ProductControlBar from "./ProductControlBar.svelte";
    import ProductList from "./ProductList.svelte";

    let fetchingProducts = fetchProducts();
    let selectedFilter: string = 'titleA-Z';

    const sortProducts = (filterType: string, products: Product[]) => {
        switch (filterType) {
            case "titleA-Z":
            return products.sort((a: Product, b: Product) =>
                a.productTitle > b.productTitle ? 1 : -1
            );

            case "titleZ-A":
            return products.sort((a: Product, b: Product) =>
                a.productTitle < b.productTitle ? 1 : -1
            );

            case "highPrice":
            return products.sort((a: Product, b: Product) =>
                a.price < b.price ? 1 : -1
            );

            case "lowPrice":
            return products.sort((a: Product, b: Product) =>
                a.price > b.price ? 1 : -1
            );

            default:
            return products;
        }
    };

    
</script>

<ProductControlBar>
    <Select bind:value={selectedFilter}>
        <option value="titleA-Z">Title A - Z</option>
        <option value="titleZ-A">Title Z - A</option>
        <option value="highPrice">Highest Price</option>
        <option value="lowPrice">Lowest Price</option>
    </Select>
</ProductControlBar>
<Divider />

{#await fetchingProducts}
    <Typography>Loading Products...</Typography>
{:then products} 
    <ProductList products={sortProducts(selectedFilter, products )} />
{:catch error}
    <Typography>An error occurred fetching products</Typography>
{/await}
