<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import CTAs from './CTAs.svelte';
</script>

<SectionWrapper id={'hero'}>
	<div class="flex flex-col md:flex-row min-h-screen ">
		<div class="h-[60vh] flex flex-col md:gap-10 space-y-3 md:flex-1 items-center justify-center md:pb-14">
			<h2
				class="text-5xl md:text-7xl max-w-[50rem] mx-auto w-full text-center font-semibold"
			>
				Welcome to <span class="text-indigo-400">Mentora Global</span>.
			</h2>
			<p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
				Mentoring your path to success.
			</p>
			<CTAs dark="" />
			<div class="flex items-center justify-center gap-2 text-base"></div>
		</div>
		<div class="md:min-w-1/2 flex-1 items-center justify-center pb-10 md:pb-14 flex flex-col ">
			<img class="w-full h-full" src="assets/hero-md.jpg" alt="Please use a supported browser">
		</div>
	</div>
</SectionWrapper>
