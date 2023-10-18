<script>
	//@ts-nocheck
	import UserInput from "./lib/UserInput.svelte";
	import "./app.css";
	let message = '';
	let numbersArray = [];
	
	for(let i = 1; i <= 10 ; i++) {
		numbersArray.push(i);
	}

	function updateMessage(n) {
		if (n <= 5) {
			message = "You are not so great, care to chat about it?";
		} else {
			message = "You are doing great, keep it up";
		}
	}
</script>


<h1>Welcome to Mental Check-in</h1>

<h2 class="text-red-500">How are you feeling?</h2>

<div class="button-container">
	{#each numbersArray as number}
		<button on:click={ () => updateMessage(number) } > 
			{number} 
		</button>
	{/each}
</div>
<p class="feedback-message">
	{message}
</p>

<p>Feeling suicidal? <button>Talk to us</button></p>
<div>
	<a href="mailto:dfbusinessjp@gmail.com">Email us</a>
	<a href="tel:+817090341407">Call us</a>
</div>

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
