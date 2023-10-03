<script lang="ts">
    import Counter from "./lib/Counter.svelte";
	import UserInput from "./lib/UserInput.svelte";

	// handson: display the placeholder from UserInput component
	let placeholder
</script>

<main>
	<h1>Svelte Intro</h1>
	<!-- handson: display the placeholder -->
	{placeholder}
	<!-- /handson -->
	<UserInput bind:placeholder />
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
