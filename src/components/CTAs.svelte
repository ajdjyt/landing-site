<script>
	export let dark;
</script>

<div class="flex items-center gap-4">
	<button class={'specialBtn' + (dark ? ' bg-[#181b34]' : ' ')}>
		<a href="#contact">
			<p class="text-base sm:text-lg md:text-xl">Contact Us</p>
		</a>
	</button>
	<button class={'specialBtnDark'}>
		<a href="#product">
			<p class="text-base sm:text-lg md:text-xl">Get Started</p>
		</a>
	</button>
</div>
