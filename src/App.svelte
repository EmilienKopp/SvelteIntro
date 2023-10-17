<script lang="ts">
    import Counter from "./lib/Counter.svelte";
    import StatusDisplay from "./lib/StatusDisplay.svelte";
    import StatusInput from "./lib/StatusInput.svelte";
	import UserInput from "./lib/UserInput.svelte";
	import DisplayMessages from "./lib/DisplayMessages.svelte";
	import { count } from './lib/stores';
</script>


<StatusDisplay />

<main>
	<h1>SvelChat</h1>

	<StatusInput />
	
	<!-- Hands-on: replace with a Store  -->
	{#if $count > 0}
		You have {$count} messages 
	{/if}
	<!-- Hands-on: replace with a Store  -->
	<UserInput />

	<DisplayMessages />
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: "Poppins", sans-serif;
		background-color: #fca044;
		line-height: 1.6;
		color: #fff;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 20px;
		text-align: center;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 20px;
		text-align: center;
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
		margin-bottom: 20px;
		text-align: center;
		padding-top: 10px;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	.button-container button {
		margin: 0 3px;
		font-size: 1.5rem;
		font-weight: 600;
		padding: 5px 10px;
		border-radius: 15px;
		border: fff;
	}

	ul {
		list-style: none;
	}

	.container {
		max-width: 768px;
		margin: 100px auto;
		padding: 0 20px;
	}
</style>
