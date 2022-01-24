<script lang="ts">
    import CartSummary from "./CartSummary.svelte";
    import Logo from "./Logo.svelte";
    import { noOfItems, cartTotal} from '../../store';
</script>
<header>
    <div class="inner-container">
        <Logo/>
        <CartSummary noOfItems={$noOfItems} total={$cartTotal} />
    </div>
</header>

<style>
    header {
		align-items: center;
		background-color: rgb(243, 246, 243);
		display: flex;
		height: 100px;
		position: fixed;
		text-transform: uppercase;
		top: 0;
		width: 100%;
	}

    .inner-container {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin: auto;
        max-width: 1400px;
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>