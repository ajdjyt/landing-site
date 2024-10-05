<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import ProductCard from './ProductCard.svelte';

	let productFeatures = [
		{
			featureName: 'CCA',
			featureList: [
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.',
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.',
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.'
			],
			description: '1.Lorem ipsum, dolor sit amet consectetur adipisicing.',
			imgUrl: '',
			externalLink: 'https://mentoraglobal.edumilestones.com/'
		},
		{
			featureName: 'CCCIS',
			featureList: [
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.',
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.',
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque similique nisi earum hic.'
			],
			description: '2.Lorem ipsum, dolor sit amet consectetur adipisicing.',
			imgUrl: '',
			externalLink: 'https://mentoraglobal.edumilestones.com/abroad-studies/index-new.php?new=yes'
		}
	];
	// ["CCA", "CCCIS"]
</script>

<SectionWrapper id="product">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 justify-center pb-10 md:pb-14">
		<div class="flex flex-col gap-2">
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				Start getting counselling <span class="text-indigo-400">today.</span>
			</p>
			<h3
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Our Services
			</h3>
		</div>
		{#each productFeatures as productFeature, index}
			<ProductCard {productFeature} {index}>
				{productFeature.featureName}
			</ProductCard>
		{/each}
	</div>
</SectionWrapper>
