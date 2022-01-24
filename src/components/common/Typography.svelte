<script lang="ts">
    export let uppercase: boolean = false;
    export let color: 'primary' | 'secondary' | 'brand' = 'primary';
    export let size: 'md' | 'lg' | 'xl' = 'md';
</script>

<span
    class="typography"
    class:uppercase={uppercase}
    class:primary={color==="primary"}
    class:secondary={color==="secondary"}
    class:brand={color==="brand"}    
    class:md={size==='md'}
    class:lg={size==='lg'}
    class:xl={size==='xl'}
>
    <slot></slot>
</span>

<style>
    .typography {
        font-size: 0.9rem;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .primary {
        color: rgb(0,0,0);
    }

    .secondary {
        color: rgb(126,127,126);
    }

    .brand {
        color: rgb(185, 170, 249);
    }

    .md {
        font-size: 0.9rem;
    }

    .lg {
        font-size: 1.1rem;
    }

    .xl {
        font-size: 1.5rem;
    }
</style>