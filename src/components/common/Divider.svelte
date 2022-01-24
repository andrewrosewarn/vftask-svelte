<script lang="ts">
    export let color: "primary" | "default" = "default";
   
</script>

<style>

    .divider {
        height: 1px;
    }
    .purple {
        background-color: rgb(145, 122, 247)
    }

    .default {
        background-color: rgb(230, 228, 231);
    }
</style>

<div
    class="divider"
    class:default={color==='default'}
    class:purple={color==='primary'}>
</div>