<script lang="ts">
    import Counter from "./lib/Counter.svelte";
	import UserInput from "./lib/UserInput.svelte";

	// ⇓ Hands on ⇓ 
        // Declare a variable to hold messages count
    // ⇑ Hands on ⇑
</script>

<main>
	<h1>Svelte Intro</h1>
	<!-- ⇓ Hands on ⇓ -->
		<!-- Display the messages count if it is greater than zero -->

	<!-- ⇑ Hands on ⇑ -->

	<!-- ⇓ Hands on : add a 'bind' to read the message count -->
	<UserInput />
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
