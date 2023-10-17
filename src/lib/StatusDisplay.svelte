<script lang="ts">
    import { status } from './stores';

</script>


<nav>
    Welcome! You are now <span class="{$status}">{$status}</span>.
</nav>


<style>
    span.online {
        color: green;
    }

    span.offline {
        color: red;
    }

    span.away {
        color: orange;
    }
</style>