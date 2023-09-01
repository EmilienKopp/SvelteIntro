<script lang="ts">
    import { fly, slide } from "svelte/transition";
    export let placeholder: string = "Enter your message here";

    let message: string = "Hello world!";
    let apiResponse: string = "";

    // ⇓ Hands on ⇓
    let dialogsArray: {content: string, response: string} [] = [] //TS
    let dialogsArrayJS = []; //JS
    // ⇑ Hands on ⇑

    async function postMessage() {
        const response = await fetch('https://one-in-emilien.com/API/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        
        const dialog = { content: message, response: data.message };
        console.table(dialog);
        // ⇓ Hands on ⇓
        dialogsArray = [...dialogsArray, dialog] //TS
        dialogsArrayJS = [...dialogsArrayJS, dialog] //JS
        // ⇑ Hands on ⇑

        return dialog;
    }

    async function handleClick() {
        promise = postMessage();
    }
    
    let promise: Promise<any>;
    // JS: let promise;

</script>

<fieldset>
    <legend>Send a message</legend>
    <input type="text" bind:value={message} placeholder={placeholder} />
    <button on:click={handleClick}>Send</button>
    {#await promise}
        <p>Waiting for response...</p>
    {:then res}
        <p>Latest response: {res?.response ?? ''}</p>
    {:catch error}
        <p style="color: red">{error?.message}</p>
    {/await}
</fieldset>

<div>
    {#if dialogsArray.length}
        <h2>Messages</h2>
    {:else}
        <p>No messages yet</p>
    {/if}

    {#each dialogsArray as dialog} 
        <p in:slide>Sent: {dialog.content}</p>
        <p in:slide>Received: {dialog.response}</p>
    {/each}
    
    <!-- {#each dialogsArray as {content, response} }
        <p>Sent: {content}</p>
        <p>Received: {response}</p>
    {/each} -->
   
</div>

<style>

</style>