<script lang="ts">
	import Cart from "./components/cart/Cart.svelte";
	import Header from "./components/header/Header.svelte";	
	import Hero from "./components/Hero.svelte";
	import ProductGallery from "./components/productGallery/ProductGallery.svelte";
	import ProductsContainer from "./components/productGallery/ProductsContainer.svelte";
	import ShopBody from "./components/ShopBody.svelte";
</script>

<Header/>
<Hero/>
<ShopBody>
	<ProductsContainer>
		<ProductGallery/>
	</ProductsContainer>
	<Cart/>
</ShopBody>
