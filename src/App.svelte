<script lang="ts">
    import Counter from "./lib/Counter.svelte";
    import Test from "./lib/Test.svelte";
	import UserInput from "./lib/UserInput.svelte";
	import { messageCount } from "./lib/stores";

	// ⇓ Hands on ⇓ 
        // Declare a variable to hold messages count
		let count: number = 0;
    // ⇑ Hands on ⇑
</script>

<main>
	<h1>SvelChat</h1>

	<!-- Hands-on: replace with a Store  -->
	{#if messagesCount > 0}
		You have {messagesCount} messages 
	{/if}
	<!-- Hands-on: replace with a Store  -->
	<UserInput bind:messagesCount />
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
