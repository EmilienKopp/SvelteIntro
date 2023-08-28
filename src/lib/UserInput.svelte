<script lang="ts">
    export let placeholder: string = "Enter your message here";

    let message: string = "Hello world!";
    let apiResponse: string = "";

    async function postMessage() {
        const response = await fetch('http://localhost:5173/API/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        apiResponse = data.message;
    }

</script>

<div>

    <input type="text" bind:value={message} placeholder={placeholder} />
    <button on:click={postMessage}>Send</button>
</div>

<div>
    
    <p>Message: {message}</p>
    <p>Response: {apiResponse}</p>

</div>