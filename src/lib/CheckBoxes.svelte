<script lang="ts">
    export let question: string;
    export let indexes: number[];
    export let choices: string[] = [];

    let options = choices.map((choice, i) => {
        return {
            value: i,
            label: choice,
        };
    });
</script>

<div class="flex my-10">
    <div class="w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="ml-6% mb-6 m-3 text-xl font-bold mr-10">{question}</h3>
        <div class="flex justify-center gap-16 m-4">
            {#each options as option}
                <label class="flex items-center gap-2 text-lg">
                    <input
                        class="h-5 w-5 mt-1 cursor-pointer accent-orange-600 focus:accent-orange-600"
                        type="checkbox"
                        bind:group={indexes}
                        value={option.value}
                    />
                    {option.label}
                </label>
            {/each}
        </div>
    </div>
</div>
