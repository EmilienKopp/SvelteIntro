<script>
	//@ts-nocheck
	import UserInput from "./lib/UserInput.svelte";
	import { createClient } from "@supabase/supabase-js";
	import "./app.css";
	let username = '';
	let message = '';
	let numbersArray = [];
	let quotes = [];

	const supabase = createClient('https://adhsmirgkvdehvkhokyv.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaHNtaXJna3ZkZWh2a2hva3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MzczOTQsImV4cCI6MTk5ODUxMzM5NH0.wl-G43DnNWTxM2BFtbFDzq31YWLejcCPSkK7oQ6DjRw')

	fetch("https://type.fit/api/quotes")
		.then((response) => response.json())
		.then((data) => {
			quotes = data;
			console.log(quotes);
		});
	
	function updateMessage() {
		message = quotes[Math.floor(Math.random() * quotes.length)].text;
	}
	
	for(let i = 1; i <= 10 ; i++) {
		numbersArray.push(i);
	}

	async function postMessage() {
		const { data, error } = await supabase
			.from("mental_diary")
			.insert({username: username, message: message}).select();
		console.log(data,error);
	}

	// function updateMessage(n) {
	// 	if (n <= 5) {
	// 		message = "You are not so great, care to chat about it?";
	// 	} else {
	// 		message = "You are doing great, keep it up!";
	// 	}  
	// }
</script>


<h1>Welcome to Mental Check-in</h1>

<h2>How are you feeling ?</h2>
<div class="button-container">
	{#each numbersArray as number}
	<button on:click={updateMessage}>{number}</button>
	{/each}
</div>
<p class="feedback-message">
	<input type="text" placeholder="Enter your name" bind:value={username} />
	{message}
</p>
<textarea name="user diary" id="user diary" cols="30" rows="7" placeholder="Write how you feel"></textarea>
<button on:click={postMessage}>Post</button>

<p>Feeling suicidal?   Call us: <button>03-5774-0992</button></p>
<div>
	<p>Or</p>
	<a href="mailto:dfbusinessjp@gmail.com">Email us</a>
	<p class="text-red-500">AI Live Chat Feature Coming Soon!</p>
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
		font-size: 4.5rem;
		font-weight: 700;
		margin-bottom: 20px;
		text-align: center;
	}

	 h2 {
		@apply text-red-500 text-3xl;
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
		@apply mx-1 my-3 font-bold py-2 px-4 rounded-xl border border-white;
		/* margin: 0 3px;
		font-size: 1.5rem;
		font-weight: 600;
		padding: 5px 10px;
		border-radius: 15px;
		border: fff; */
	}

	.button-container button:hover
		 {
		@apply bg-white text-red-500;
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
