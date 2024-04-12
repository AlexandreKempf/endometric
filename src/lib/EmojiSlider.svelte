<script lang="ts">
    import RangeSlider from "svelte-range-slider-pips";

    export let question: string;
    export let idx: number;
    export let choices: string[] = [];

    let values = [idx];
    $: idx = values[0];
</script>

<div class="flex font-sans my-10">
    <div class="w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="ml-6% mb-6 m-3 text-xl font-600">{question}</h3>
        <div class="w-90% m-auto mb-5">
            <RangeSlider bind:values min={0} max={choices.length - 1} />
        </div>
        <div class="w-90% m-auto flex justify-between center-items">
            {#each choices as choice}
                <p class="text-xl">{choice}</p>
            {/each}
        </div>
    </div>
</div>
