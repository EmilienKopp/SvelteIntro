<script lang="ts">
    //@ts-nocheck
    import { messages, messagesCSS, count } from './stores';
    let strLimit: number = 20;

    // HANDSON TASK 1: 'messageBox' にOptionsで定義したCSSを適用する
</script>


<div class="messageBox">   

    {#each $messages as dialog} 
    {@const short = dialog.content.length >= strLimit ? dialog.content.slice(0, 10) + '...' : dialog.content}
    
    <div >
        <p>Sent: {short}</p>
        <p>Received: {dialog.response}</p>
    </div>
    {/each}
   
</div>

<style>
    div.messageBox {
        padding: 2rem;
        border: 1px dashed #ccc;
        border-radius: 5px;
        margin-top: 1rem;
        display: flex;
        flex-direction: column-reverse;
    }

    div.messageBox > div:not(:first-child) {
        border-bottom: #ccc 1px dashed;
    }
</style>
