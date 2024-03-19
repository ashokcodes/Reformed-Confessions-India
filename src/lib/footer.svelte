<script>
	import { counter } from "../stores/counter.js"

	const nextSection = () => {
		if ($counter == 4) $counter = 0
		else counter.update((n) => n + 1)
	}
	const prevSection = () => {
		if ($counter == 0) $counter = 4
		else counter.update((n) => n - 1)
	}
</script>

<footer>
	<button on:click={prevSection}>Previous</button>
	<button on:click={nextSection}>Next</button>
	<select name="language">
		<option value="hindi" autofocus>हिंदी</option>
		<option value="marathi">मराठी</option>
		<option value="mercedes">తెలుగు</option>
	</select>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-flow: row;
		justify-content: center;
		padding: 5px;
		margin: 5px;
		box-sizing: border-box;
	}
	button {
		margin-right: 1.5rem;
		background: #eee;
		border: 1px #eee;
		padding: 0.7rem;
	}
	select {
		margin-right: 20px;
		padding: 0.2rem 0.4rem;
	}
</style>
