<script lang="ts">
    import Badge from "../common/Badge.svelte";
    import Container from "../common/Container.svelte";
    import Divider from "../common/Divider.svelte";
    import Paper from "../common/Paper.svelte";
    import Typography from "../common/Typography.svelte";
    import CartItem from "./CartItem.svelte";
    import CartList from "./CartList.svelte";
    import CartListItem from "./CartListItem.svelte";
    import {cart, noOfItems, cartTotal} from '../../store';
    import CartTotal from "./CartTotal.svelte";
</script>
<Paper>
    <Divider color="primary" />
    <Container>
        <div class="cart-body">
            <div class="cart-heading">
                <Typography size="xl" uppercase>
                    Cart
                </Typography>
                <Badge label={$noOfItems} />
            </div>
            {#if $noOfItems === 0}
                <Typography>Your cart is empty</Typography>
            {:else}
                <CartList>
                    {#each $cart.items as item (item.id) }
                        <CartListItem>
                            <CartItem product={item}/>
                        </CartListItem>
                    {/each}
                </CartList>
            {/if}
            <CartTotal total={$cartTotal} />
        </div>
    </Container>
</Paper>

<style>
    .cart-body {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .cart-heading {
        align-items: center;
        display: flex;
        gap: 1rem;
    }
</style>