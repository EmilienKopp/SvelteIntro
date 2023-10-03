<script lang="ts">
    //<script>
    //@ts-nocheck

    import { fly, slide } from "svelte/transition";
    export let placeholder: string = "Enter your message here";

    let message: string = "Hello world!";
    let apiResponse: any;
    let strLimit: number = 20;
    // JS ：
    // let message = "Hello world!";
    // let apiResponse;
    // let strLimit = 20;

    // ⇓ Hands on ⇓ A
        // Declare an array to store the messages sent and received
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

        if(response.status !== 200) throw new Error(data.message);

        
        const dialog = { content: message, response: data.message };
        apiResponse = dialog;

        console.table(dialog);

        // ⇓ Hands on ⇓
            // push into the array... CAREFUL! You can't mutate the array responsively.
        // ⇑ Hands on ⇑

        return dialog;
    }

    // ⇓ Hands on ⇓
        // Declare a promise to store the response of the postMessage function
        
        // Declare a function to handle the click event on the button 
        // and assign the result of the postMessage function to the promise

    // ⇑ Hands on ⇑

    // EXTRA hands-on: use $: reactive statement to update a 'Messages Count' variable
</script>

<fieldset>
    <legend>Send a message</legend>

    <input type="text" bind:value={message} placeholder={placeholder} />
    <!-- Change the on:click handler -->
    <button on:click={postMessage}>Send</button> 

    <!-- use an {#await ... then ... catch ... } block to handle the promise -->
    
</fieldset>


<!-- Use an {#if } block to change the <h2> title -->
<h2>Messages</h2>

<div class="container">
    
    <!-- Use an #each loop to show everything in the message array -->
    <!-- BONUS: use a {@const } block to handle long strings (using the strLimit variable) -->
    <div class="message">
        <p>Sent: {apiResponse?.content ?? ""}</p>
        <p>Received: {apiResponse?.response ?? ""}</p>
    </div>
    
    <!-- {#each dialogsArray as {content, response} }
        {@const short = content.length >= strLimit ? content.slice(0, 10) + '...' : content}
        <p>Sent: {content}</p>
        <p>Received: {response}</p>
    {/each} -->
   
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