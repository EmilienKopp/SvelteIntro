<script lang="ts">
    //@ts-nocheck
    // import the store
    import { count } from './stores';
    import { messages } from './stores';

    export let placeholder = "Enter your message here";
    //export let placeholder = "Enter your message here";
    //export let messagesCount = 0;

    let message = "Hello world!";
    
    //let message = "Hello world!";
    //let strLimit = 20;

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
        
        $messages = [...$messages, dialog]
        // Hands-on: update the store's value here
        $count = $messages.length;

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



<style>
    fieldset {
        padding: 2rem;
    }

    legend {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
    }

    

</style>