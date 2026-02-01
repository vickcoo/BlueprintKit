<script lang="ts">
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<svelte:head>
	<title>{{PROJECT_NAME}}</title>
	<meta name="description" content="A SvelteKit app created with BlueprintKit" />
</svelte:head>

<div class="container">
	<h1>Welcome to {{PROJECT_NAME}}</h1>

	<div class="card">
		<p>This is a SvelteKit app with TypeScript and Vite</p>

		<div class="counter">
			<button on:click={increment}>
				Count: {count}
			</button>
		</div>
	</div>

	<p class="info">
		Edit <code>src/routes/+page.svelte</code> to get started
	</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.card {
		background: white;
		border-radius: 8px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-bottom: 2rem;
		max-width: 600px;
		width: 100%;
	}

	.counter {
		margin-top: 1.5rem;
	}

	button {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	button:hover {
		transform: scale(1.05);
	}

	.info {
		color: #666;
		font-size: 0.9rem;
	}

	code {
		background: #f4f4f4;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}
</style>
