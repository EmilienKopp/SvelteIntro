<script lang="ts">
    //@ts-nocheck
    import { count } from './stores';
    import { messages } from './stores';



    let strLimit: number = 20;
</script>


{#if $count}
    <h2> {$count} Messages</h2>
{:else}
    <p>No messages yet</p>
{/if}

<div class="container">

    {#each $messages as dialog} 
    {@const short = dialog.content.length >= strLimit ? dialog.content.slice(0, 10) + '...' : dialog.content}
    <div class="message">
        <p>Sent: {short}</p>
        <p>Received: {dialog.response}</p>
    </div>
    {/each}
   
</div>

<style>
    div.container {
        padding: 2rem;
        border: 1px dashed #ccc;
        border-radius: 5px;
        margin-top: 1rem;
        display: flex;
        flex-direction: column-reverse;
    }

    div.message {
        border-bottom: #ccc 1px dashed;
    }
</style>