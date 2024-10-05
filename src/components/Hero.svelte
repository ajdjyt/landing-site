<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import Header from './Header.svelte';
	import CTAs from './CTAs.svelte';
</script>

<SectionWrapper id={'hero'}>
	<Header />
	<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
		<h2
			class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
		>
			<span class="text-indigo-400">Choosing</span> Education made easier.
		</h2>
		<p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
			We help you prepare for your future. We are commited to helping you make the right choices for
			your wants, making sure you know everything you need to.
		</p>
		<CTAs dark="" />
		<div class="flex items-center justify-center gap-2 text-base"></div>
	</div>
</SectionWrapper>
