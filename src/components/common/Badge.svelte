<script lang="ts">
    export let label: number | string;
</script>

<div class="badge">
    <span class="label">{label}</span>
</div>

<style>
    .badge {
        background-color: rgb(145, 122, 247);
        border-radius: 50%;
        display: grid;
        height: 2.25rem;
        place-items: center;
        width: 2.25rem;
    }

    .label {
        color: rgb(255, 255, 255);
    }
</style>