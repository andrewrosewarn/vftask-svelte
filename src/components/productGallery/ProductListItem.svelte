<script lang="ts">
    import Button from "../common/Button.svelte";
    import Container from "../common/Container.svelte";
    import Paper from "../common/Paper.svelte";
    import Typography from "../common/Typography.svelte";
    import {cart} from '../../store';
    import { Product } from "../../interfaces/Product";
    import {fade} from 'svelte/transition';

    export let product: Product;

    const onAddToCart = () => cart.addItem(product);
</script>
<li transition:fade>
    <Paper>
        <Container>
            <div class="image-container">
                <img class="image" src={product.image} alt="Pic"/>
                <div class="detail-container">
                    <div class="product-detail">
                        <Typography uppercase size="lg">{product.productTitle}</Typography>
                        <Typography uppercase size="md" color="secondary">{product.variantTitle}</Typography>
                    </div>
                    <Typography size="lg">£{product.price}</Typography>
                </div>
            </div>
            <div class="button-container">
                <Button flex color="primary" on:click={onAddToCart}>Add To Cart</Button>
                <Button flex>Quick View</Button>
            </div>
        </Container>
    </Paper>
</li>

<style>
    .image-container {
        background-color: rgb(245, 243, 246);
        padding: 1rem;
    }

    .image {
        width: 100%;
    }

    .detail-container {
        display: flex;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        gap: 25px;
    }

    .product-detail {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 10px;
    }

    .button-container {
        display: flex;
    }
    
</style>