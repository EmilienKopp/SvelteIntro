<script lang="ts">
    //@ts-nocheck
    import { messages, count } from './stores';
    let strLimit: number = 20;
</script>

{#if $messages.length}
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