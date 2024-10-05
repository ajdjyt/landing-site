<script>
	import '../app.css';
	let y;
	$: outerHeight = 0;

	import { openModal } from '../store';
	import CTAs from '../components/CTAs.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	function reroute(href) {
		$openModal = false;
		window.location.href = href;
	}
</script>

{#if $openModal}
	<div
		class=" bg-white fixed top-0 left-0 w-screen h-screen border-b z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<img class="md:max-w-[7rem] max-w-[5rem]" src="assets/logo.jpeg" alt="" />
			<button on:click={() => ($openModal = false)} class="outline-none border-none">
				<i class="fa-solid fa-xmark text-2xl"> </i></button
			>
		</div>

		<div class="flex flex-col gap-4 flex-1">
			<button
				on:click={() => reroute('#product')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2">Get started</p>
			</button>
			<button
				on:click={() => reroute('#faqs')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2">FAQs</p>
			</button>
			<button
				on:click={() => reroute('#contact')}
				class="border-none outline-none p-2 group duration-200 cursor-pointer text-left"
			>
				<p class="duration-200 group-hover:pl-2">Contact Us</p>
			</button>
			<div class="flex flex-col items-center justify-center">
				<CTAs dark="" />
			</div>
		</div>
	</div>
{/if}

{#if y > outerHeight}
	<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
		<Header />
	</div>
{/if}

<slot />
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight />
<!--
  header
  footer
  about us
  product
  -->
