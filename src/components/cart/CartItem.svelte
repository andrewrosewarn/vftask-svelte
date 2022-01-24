<script lang="ts">
    import { Product } from "../../interfaces/Product";
    import Button from "../common/Button.svelte";
    import Typography from "../common/Typography.svelte";
    import {cart} from '../../store';

    export let product: Product;

    const onRemoveItem = () => cart.removeItem(product);
</script>
<div class="cart-item">
    <Typography>{product.productTitle}</Typography>
    <Typography>£{product.price}</Typography>
    <Typography color="brand">{product.variantTitle}</Typography>
    <Button on:click={onRemoveItem} size="small">Remove</Button>
</div>

<style>
    .cart-item {
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 8px;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
    }
</style>