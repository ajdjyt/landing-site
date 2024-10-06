<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import CTAs from './CTAs.svelte';
</script>

<SectionWrapper id={'hero'}>
	<div class="min-h-screen flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
		<h2
			class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			Welcome to <span class="text-indigo-400">Mentora Global</span>.
		</h2>
		<p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
			Mentoring your path to success.
		</p>
		<CTAs dark="" />
		<div class="flex items-center justify-center gap-2 text-base"></div>
	</div>
</SectionWrapper>
