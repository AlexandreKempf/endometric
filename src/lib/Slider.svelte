<script lang="ts">
    import RangeSlider from "svelte-range-slider-pips";

    export let question: string;
    export let idx: number;
    export let min: number;
    export let max: number;
    export let pipstep: number;

    let values = [idx];
    $: idx = values[0];
</script>

<div class="flex my-10 font-sans">
    <div class="w-95% sm:w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="mx-2 sm:mx-4% mb-6 mt-3 text-2xl font-600">
            {question}
        </h3>
        <div class="w-100% sm:w-80% m-auto">
            <RangeSlider
                bind:values
                {min}
                {max}
                {pipstep}
                springValues={{ stiffness: 0.1, damping: 0.6 }}
                float
                pips
                all="label"
            />
        </div>
    </div>
</div>
