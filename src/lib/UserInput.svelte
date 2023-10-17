<script lang="ts">
    // import the store

    export let placeholder: string = "Enter your message here";
    export let messagesCount: number = 0;
    //export let placeholder = "Enter your message here";
    //export let messagesCount = 0;

    let message: string = "Hello world!";
    let strLimit: number = 20;
    //let message = "Hello world!";
    //let strLimit = 20;

    let dialogsArray: {content: string, response: string} [] = []
    //let dialogsArray = []


    async function postMessage() {
        const response = await fetch('https://one-in-emilien.com/API/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        if(response.status !== 200) throw new Error(data.message);

        const dialog = { content: message, response: data.message };
        console.table(dialog);
        
        dialogsArray = [...dialogsArray, dialog]
        // Hands-on: update the store's value here

        return dialog;
    }

    let promise: Promise<any>;
    //let promise;

    async function handleClick() {
        promise = postMessage();
    }

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
        <p style="color: red"> {error?.message}</p>
    {/await}
    
</fieldset>

{#if dialogsArray.length}
    <h2> {messagesCount} Messages</h2>
{:else}
    <p>No messages yet</p>
{/if}

<div class="container">
    

    {#each dialogsArray as dialog} 
    {@const short = dialog.content.length >= strLimit ? dialog.content.slice(0, 10) + '...' : dialog.content}
    <div class="message">
        <p>Sent: {short}</p>
        <p>Received: {dialog.response}</p>
    </div>
    {/each}
   
</div>

<style>
    fieldset {
        padding: 2rem;
    }

    legend {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
    }

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