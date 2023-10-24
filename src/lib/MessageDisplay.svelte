<script lang="ts">
    //@ts-nocheck
    import { messages, messagesCSS, count } from './stores';
    let strLimit: number = 20;

    $: console.log($messagesCSS);
</script>


<div style="{$messagesCSS}" class="messageBox">   

    {#each $messages as dialog} 
    {@const short = dialog.content.length >= strLimit ? dialog.content.slice(0, 10) + '...' : dialog.content}
    
    <div >
        <p>Sent: {short}</p>
        <p>Received: {dialog.response}</p>
    </div>
    {/each}
   
</div>

<style>
    .messageBox {
        background-color: var(--background);
        font-size: var(--size);
        font-family: var(--font);
        color: var(--color);
        padding-top: var(--pt);
        padding-bottom: var(--pb);
    }
</style>
