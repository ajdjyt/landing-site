<script>
	import MailUs from './MailUs.svelte';
	let socials = {
		X: 'https://x.com/mentora_global',
		YT: 'https://www.youtube.com/@MentoraGlobal',
		Instagram: 'https://www.instagram.com/mentoraglobaldotcom/',
		Facebook: 'https://www.facebook.com/profile.php?id=61567002924803'
	};

	let contacts = [
		{
			phone: '+91 9889009003',
			name: 'Francisco Fernandes',
			email: 'francisco@mentoraglobal.com'
		},
		{
			phone: '+91 9887005371',
			name: 'Tamim Nagdiwala',
			email: 'tamim@mentoraglobal.com'
		}
	];
	export let success = false;
	export let error = '';
</script>

<footer>
	<div
		class="flex-col md:flex-row items-start justify-start mx-auto w-full flex md:justify-between md:py-10 md:px-5 py-16 px-10 sm:grid-cols-2 text-base gap-4"
	>
		<div class="flex flex-col items-start md:items-start md:col-span-2">
			<h1 class="font-semibold align-middle">
				<img class="md:max-w-[7rem] max-w-[5rem]" src="assets/logo.jpeg" alt="" />
			</h1>
			<p class="text-xs md:text-xl">©2024 Mentora Global.</p>
		</div>
		<div
			id="contact"
			class="flex flex-col md:justify-normal md:items-start items-start justify-center gap-4"
		>
			<p class="font-bold text-base sm:text-lg">Contact Us</p>
			<p>Bangalore South</p>
			{#each contacts as contact}
				<div class="flex flex-col">
					<div>
						<i class="fa-solid fa-person"></i>
						{contact.name}
					</div>
					<div>
						<i class="fa-solid fa-phone" />
						{contact.phone}
					</div>
					<div>
						<i class="fa-regular fa-envelope"></i>
						{contact.email}
					</div>
				</div>
			{/each}
		</div>
		<!-- <div class="flex flex-col gap-4">
			<p class="font-bold text-base sm:text-lg">Submit a Query</p>
			<MailUs />
		</div> -->
		<div class="flex flex-col gap-4 mr-24">
			<p class="font-bold text-base sm:text-lg">Follow Us</p>
			<a
				href={socials.Instagram}
				target="_blank"
				class="cursor-pointer hover:text-indigo-400 duration-200"
			>
				<i class="fa-brands fa-instagram pr-2" />
				Instagram
			</a>
			<a
				href={socials.YT}
				target="_blank"
				class="cursor-pointer hover:text-indigo-400 duration-200"
			>
				<i class="fa-brands fa-youtube pr-2" />
				YouTube
			</a>
			<a
				href={socials.Facebook}
				target="_blank"
				class="cursor-pointer hover:text-indigo-400 duration-200"
			>
				<i class="fa-brands fa-facebook pr-2" />
				Facebook
			</a>
			<a href={socials.X} target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">
				<i class="fa-brands fa-twitter pr-2" />
				X
			</a>
		</div>
	</div>
</footer>
