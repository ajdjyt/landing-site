<script lang=ts>
	export let dark;

	import { openModal } from '../store';

	function reroute(href:string) {
		$openModal = false;
		window.location.href = href;
	}
</script>

<div class="flex items-center gap-4">
	<button class={'specialBtn' + (dark ? ' bg-[#181b34]' : ' ')}>
		<a href="#contact">
			<button class="border-none p-0 bg-none text-base sm:text-lg md:text-xl" on:click={() => reroute('#contact')}>
				Contact Us
			</button>
		</a>
	</button>
	<button class={'specialBtnDark'}>
		<a href="#product">
			<button class="border-none p-0 bg-none text-base sm:text-lg md:text-xl" on:click={() => reroute('#product')}>
				Get Started
			</button>
		</a>
	</button>
</div>
