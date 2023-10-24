<script lang="ts">
    import Counter from "./lib/Counter.svelte";
    import MessageDisplay from "./lib/MessageDisplay.svelte";
    import Options from "./lib/Options.svelte";
    import StatusDisplay from "./lib/StatusDisplay.svelte";
    import StatusInput from "./lib/StatusInput.svelte";
	import UserInput from "./lib/UserInput.svelte";
	import { messages } from "./lib/stores";

	let status: "offline" | "online" | "away" = "offline";
</script>

<main>
	<h1>SvelChat</h1>
	<StatusDisplay status={status} />
	<StatusInput bind:status={status} />
	
	<div class="col-span-2">
		<Options />
	</div>

	<UserInput />
	<MessageDisplay />
</main>

<style>
	main {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	h1 {
		grid-column: span 2;
	}

	.col-span-2 {
		grid-column: span 2;
	}
</style>
