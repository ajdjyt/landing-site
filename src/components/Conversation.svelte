<script>
	import CtAs from './CTAs.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<section>
	<div
		class="py-14 md:py-20 flex flex-col gap-8 bg-[#181b34] text-white text-center items-center justify-center"
	>
		<h4 class="text-xl sm:text-2xl md:text-3xl">
			Get your target institute <span class="font-bold">Today</span>.
		</h4>
		<!-- <p class="poppins text-base sm:text-lg md:text-xl">Tagline</p> -->
		<CtAs />
	</div>
</section>
