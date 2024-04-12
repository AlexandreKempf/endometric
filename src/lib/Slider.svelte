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
    <div class="w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="ml-6% mb-6 m-3 text-xl font-600">{question}</h3>
        <div class="w-100% md:w-90% m-auto">
            <RangeSlider
                bind:values
                {min}
                {max}
                {pipstep}
                float
                pips
                all="label"
            />
        </div>
    </div>
</div>
