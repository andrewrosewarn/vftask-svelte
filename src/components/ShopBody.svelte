<div class="shop-body">
    <slot></slot>
</div>

<style>
    .shop-body {
        align-items: start;
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-column-gap: 40px;
        margin: auto;
        max-width: 1400px;
        padding: 2rem;
    }
</style>