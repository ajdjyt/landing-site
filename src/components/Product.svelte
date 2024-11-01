<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import ProductCard from './ProductCard.svelte';

	let productFeatures = [
		{
			featureName: 'Career Analysis and Guidance',
			featureList: [
				'Career Analysis and Guidance for 2nd to 7th class',
				'Career Analysis and Guidance for 8th, 9th & 10th Class',
				'Career Analysis and Guidance for 11th & 12th Class',
				'Career Analysis and Guidance for Graduates',
				'Career Analysis and Guidance for Professionals'
			],
			description: 'Comprehensive Career Counselling by Experts',
			imgUrl: 'assets/cca.jpg',
			externalLink: 'https://mentoraglobal.edumilestones.com/'
		},
		{
			featureName: 'Study Abroad Counselling',
			featureList: [
				'Universities Shortlisting',
				'Application Submissions',
				'IELTS Preparation',
				'Visa Support',
				'SOP Support',
				'Dedicated Counselor'
			],
			description: 'Your End-to-End Overseas Education Solution',
			imgUrl: 'assets/cccis.jpg',
			externalLink: 'https://mentoraglobal.edumilestones.com/abroad-studies/index-new.php?new=yes'
		}
	];
	// ["CCA", "CCCIS"]
</script>

<SectionWrapper id="product">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 justify-center pb-10 md:pb-14">
		<div class="flex flex-col gap-2">
			<!-- <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				Start getting counselling <span class="text-emColorAlt">today.</span>
			</p> -->
			<h3
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Our Services
			</h3>
		</div>
		<div class="flex flex-col flex-1 gap-y-12 w-full">
			{#each productFeatures as productFeature, index}
				<ProductCard {productFeature} {index}>
					{productFeature.featureName}
				</ProductCard>
			{/each}
		</div>
	</div>
</SectionWrapper>
