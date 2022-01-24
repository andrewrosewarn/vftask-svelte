<script lang="ts">
    import Typography from "../common/Typography.svelte";

    export let total: number = 0;
</script>

<div class="cart-total">
    <Typography>Total</Typography>
    <Typography size="xl">£{total}</Typography>
</div>

<style>
    .cart-total {
        align-items: center;
        background-color: rgb(245, 243, 246);
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
</style>