<script lang="ts">
    export let question: string;
    export let indexes: number[];
    export let choices: string[] = [];
    export let name: string;

    let options = choices.map((choice, i) => {
        return {
            value: i,
            label: choice,
        };
    });
</script>

<div class="flex my-10 font-sans">
    <div class="w-95% sm:w-70% m-auto p-5 z-10 bg-#ffffee border-rounded-5">
        <h3 class="mx-2 sm:mx-4% mb-3 mt-3 text-2xl font-600">
            {question}
        </h3>
        <div class="flex flex-wrap w-100% sm:w-80% justify-between mx-auto m-5">
            {#each options as option}
                <label class="flex items-center mx-10 my-3 text-xl">
                    <input
                        class="h-5 w-5 mt-1 mr-2 cursor-pointer accent-orange-600 focus:accent-orange-600"
                        type="checkbox"
                        bind:group={indexes}
                        value={option.value}
                        {name}
                    />
                    {option.label}
                </label>
            {/each}
        </div>
    </div>
</div>
