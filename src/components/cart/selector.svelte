<script lang="ts">
    import {cart} from '../../store';

    export const selectCartTotal = $cart.items.reduce((total, item) => total += item.price, 0);
</script>