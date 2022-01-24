<script lang="ts">
    import Badge from "../common/Badge.svelte";
    import Typography from "../common/Typography.svelte";
 
    export let total: number;
    export let noOfItems: number;

</script>

<div class="cart-summary">
    <Typography>£{total}</Typography>
    <Badge label={noOfItems} />
</div>

<style>
    .cart-summary {
        align-items: center;
        display: flex;
        gap: 1rem;
    }
</style>