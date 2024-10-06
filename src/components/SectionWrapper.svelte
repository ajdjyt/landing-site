<script>
    export let id
</script>

<section {id} class={"flex flex-col px-4 z-20"}>
    <div class="flex flex-col max-w-[1400px] mx-auto w-full"> 
        <slot />
    </div>
</section>