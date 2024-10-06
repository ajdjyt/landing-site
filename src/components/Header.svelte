<script>
	let sitename = 'MentoraGlobal';

	import { openModal } from '../store';
</script>

<header class="flex flex-col relative z-20 w-screen">
	<div class="mx-auto w-full flex item-center justify-between px-4 py-6">
		<a href="/">
			<!-- <h1 class="font-semibold">{sitename}</h1> -->
			<div class="flex flex-col bg-white gap-4 flex-1">
				<img class="md:max-w-[7rem] max-w-[5rem]" src="assets/logo.jpeg" alt={sitename} />
			</div>
		</a>
		<button class="md:hidden grid place-items-center" on:click={() => ($openModal = true)}>
			<i class="fa-solid fa-bars"></i>
		</button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a class="duration-200 hover:text-indigo-400 cursor-pointer" href="#aboutus">About Us</a>
			<a class="duration-200 hover:text-indigo-400 cursor-pointer" href="#faqs">FAQs</a>
			<a href="#product">
				<button class="specialBtn">Get Started Today</button>
			</a>
		</nav>
	</div>
</header>
