<script lang="ts">
    export let question: string;
    export let idx: number;
    export let choices: string[] = [];

    let options = choices.map((choice, i) => {
        return {
            value: i,
            label: choice,
        };
    });
</script>

<div class="flex my-10 font-sans">
    <div class="w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="ml-6% mb-6 m-3 text-2xl font-600 mr-10">{question}</h3>
        <div class="w-100% sm:w-80% mx-auto flex flex-wrap justify-between m-5">
            {#each options as option}
                <label class="flex items-center mx-10 my-5 text-xl">
                    <input
                        class="h-5 w-5 mt-1 mr-2 cursor-pointer accent-orange-600 focus:accent-orange-600"
                        bind:group={idx}
                        type="radio"
                        value={option.value}
                    />
                    {option.label}
                </label>
            {/each}
        </div>
    </div>
</div>
