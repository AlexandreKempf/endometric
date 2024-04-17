<script lang="ts">
    import RangeSlider from "svelte-range-slider-pips";

    export let question: string;
    export let idx: number;
    export let choices: string[] = [];

    let values = [idx];
    $: idx = values[0];
</script>

<div class="flex font-sans my-10">
    <div class="w-95% sm:w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="mx-2 sm:mx-4% mb-8 mt-3 text-2xl font-600">
            {question}
        </h3>
        <div class="w-100% sm:w-80% m-auto mb-5">
            <RangeSlider
                bind:values
                min={0}
                max={choices.length - 1}
                springValues={{ stiffness: 0.1, damping: 0.6 }}
            />
        </div>
        <div class="w-100% sm:w-80% m-auto flex justify-between center-items">
            {#each choices as choice}
                <p class="text-xl">{choice}</p>
            {/each}
        </div>
    </div>
</div>
