<script lang="ts">
	let success = false;
	let error = '';

	function resetForm() {
		success = false;
		error = '';
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();
		resetForm();

		try {
			const formData = new FormData(event.target as HTMLFormElement);
			const response = await fetch('/api', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				success = true;
			} else {
				const errorData = await response.json();
				error = errorData.error || 'Failed to send the message. Please try again.';
			}
		} catch (err) {
			console.log('Mail Error occurred: ' + err);
			error = 'An error occurred. Please try again.';
		}
	}
</script>

<form class="max-w-sm mx-auto" method="post" on:submit={handleSubmit}>
	<div class="relative z-0 w-full mb-5 group">
		<input
			type="email"
			name="userEmail"
			id="userEmail"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=""
			required
		/>
		<label
			for="userEmail"
			class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Your Email</label
		>
	</div>
	<div class="relative z-0 w-full mb-5 group">
		<input
			type="name"
			name="userName"
			id="userName"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=""
			required
		/>
		<label
			for="userName"
			class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Your name</label
		>
	</div>
	<div class="relative z-0 w-full mb-5 group">
		<div class="mb-5">
			<label
				for="userMessage"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your message</label
			>
			<input
				type="text"
				name="userMessage"
				id="userMessage"
				required
				class="block w-full p-4 text-slate-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-blue-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xs"
			/>
		</div>
	</div>
	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</form>

{#if success}
	<p>Email sent successfully!</p>
{/if}

{#if error}
	<p>Error: {error}</p>
{/if}
