<script lang=ts>
	import * as store from '../store';
	import { openModal } from '../store';

	function reroute(href:string) {
		$openModal = false;
		window.location.href = href;
	}
</script>

<div class="flex items-center gap-4">
	<button class={'specialBtn bg-transparent'} on:click={() => reroute('#contact')}>
		<p class="bg-none text-base sm:text-lg md:text-xl">
			Contact us
		</p>
	</button>
	<button class={'specialBtnDark text-base sm:text-lg md:text-xl'} on:click={() => reroute('#product')}>
		<p class="text-base sm:text-lg md:text-xl">
			Get Started
		</p>
	</button>
</div>
