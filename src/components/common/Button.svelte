<script lang="ts">
    export let color: 'primary' | 'secondary' = 'secondary';
    export let size: 'small' | 'large' = 'large';
    export let flex: boolean = false;
</script>

<button on:click class="button" class:primary={color==='primary'} class:secondary={color==='secondary'} class:small={size==='small'} class:large={size==='large'} class:flex={flex}>
    <slot></slot>
</button>

<style>
    .button {
        appearance: none;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
    }

    .primary {
        background-color: rgb(145, 122, 247);
        color: white
    }

    .secondary {
        background-color: rgb(230, 228, 231);
        color: rgb(126,126,126);
    }

    .small {
        padding: 0.5rem;
        font-size: 0.7rem;
    }

    .large {
        padding: 1.5rem;
        font-size: 1rem;
    }

    .flex {
        flex: 1;
    }
</style>