<script lang="ts">
    import Slider from "$lib/Slider.svelte";
    import RadioButton from "$lib/RadioButton.svelte";
    import EmojiSlider from "$lib/EmojiSlider.svelte";
    import { enhance } from "$app/forms"; // Import the enhance action
    import { goto } from "$app/navigation";

    export let form;
</script>

<div class="flex">
    <div
        class="z-10 w-100% min-h-screen drop-shadow-[0_1.2px_1.2px_rgba(251,233,171,0.8)]"
    >
        <div class="text-center font-sans pt-5 p-10 mb-5">
            <h1 class="text-4xl sm:text-7xl font-black">
                MEASURE<br />YOUR RISK
            </h1>
            <p class="font-sans sm:text-2xl">
                If you are unsure about your diagnosis.
            </p>
        </div>

        <div class="flex my-10">
            <div
                class="w-80% sm:w-50% m-auto p-5 border-2 bg-#ffffee border-#333 border-rounded-5"
            >
                <div class="flex justify-center items-center">
                    <div
                        class="i-iconoir-warning-triangle text-5xl w-50 bg-#ff735d mx-10"
                    ></div>
                    <p class="text-lg font-sans">
                        This test is <span class="font-600">NOT</span> a medical
                        protocol and its result should
                        <span class="font-600">NOT</span>
                        be used as a medical diagnosis.
                    </p>
                </div>
            </div>
        </div>

        <form method="POST" use:enhance>
            {#if !form?.success}
                <h2
                    class="text-4xl sm:text-5xl font-bold font-sans ml-2% sm:ml-6% md:ml-15% mt-15"
                >
                    Personal information
                </h2>

                <RadioButton
                    question="Have you ever menstruated?"
                    idx={1}
                    choices={["✅ Yes", "❌ No"]}
                    name="infoMenstruation"
                />

                <Slider
                    question="How old are you?"
                    idx={30}
                    min={10}
                    max={70}
                    pipstep={10}
                    name="infoAge"
                />

                <RadioButton
                    question="Do you have endometriosis in your family?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="infoFamily"
                />

                <h2
                    class="text-4xl sm:text-5xl font-bold font-sans ml-2% sm:ml-6% md:ml-15% mt-30"
                >
                    Spontaneous pelvic pain
                </h2>

                <EmojiSlider
                    question="How much pain in the lower abdomen do you feel during your period?"
                    idx={0}
                    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
                    name="pelvicPainMenstruation"
                />

                <EmojiSlider
                    question="How much pain in the lower abdomen do you feel when you don't have your period?"
                    idx={0}
                    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
                    name="pelvicPainRest"
                />

                <RadioButton
                    question="Does the pain increase with the years?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainIncrease"
                />

                <RadioButton
                    question="Does the pain start a few days before or ends a few days after your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainTiming"
                />

                <RadioButton
                    question="Does the pain come in spurts, like daggers?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainDagger"
                />

                <RadioButton
                    question="Does the pain spread to your back?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainBack"
                />

                <RadioButton
                    question="Does the pain spread to your hips and legs?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainLegs"
                />

                <RadioButton
                    question="The pain leads to a disability for daily activities?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainHandicap"
                />

                <RadioButton
                    question="The pain leads to an inability to stand, walk, or mobilize?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="pelvicPainActivities"
                />

                <h2
                    class="text-4xl sm:text-5xl font-bold font-sans ml-2% sm:ml-6% md:ml-15% mt-30"
                >
                    Pain during sexual intercourse
                </h2>
                <p class="font-sans text-xl ml-2% sm:ml-6% md:ml-15%">
                    If you are not concerned you can skip this section
                </p>

                <EmojiSlider
                    question="How much sharp and deep pain do you feel during sexual intercourse?"
                    idx={0}
                    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
                    name="sexualPain"
                />

                <RadioButton
                    question="Are certain sexual positions painful?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="sexualPainPosition"
                />

                <RadioButton
                    question="Does the pain disrupt, prevent or interrupt sexual intercourse?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="sexualPainInterupt"
                />

                <h2
                    class="text-4xl sm:text-5xl font-bold font-sans ml-2% sm:ml-6% md:ml-15% mt-30"
                >
                    Digestive pain or problems
                </h2>

                <EmojiSlider
                    question="How much pain do you have when you're defecating during your period?"
                    idx={0}
                    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
                    name="digestivePainDuring"
                />

                <RadioButton
                    question="Do you often have spams, cramps, and/or intestinal pain before defecating during your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="digestivePainBefore"
                />

                <RadioButton
                    question="Do you often have diarrhea and/or constipation during your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="digestivePainDiarrhea"
                />

                <h2
                    class="text-4xl sm:text-5xl font-bold font-sans ml-2% sm:ml-6% md:ml-15% mt-30"
                >
                    Other pains
                </h2>

                <EmojiSlider
                    question="How much pain do you have when you're urinating during your period?"
                    idx={0}
                    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
                    name="otherPainUrinating"
                />

                <RadioButton
                    question="Do you often have bladder pain when you want to urinate or holding back during your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="otherPainHoldingBack"
                />

                <RadioButton
                    question="Do you often have sciatica pain during your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="otherPainSciatica"
                />

                <RadioButton
                    question="Do you often have right shoulder, or right subcostal pain during your period?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="otherPainShoulder"
                />

                <RadioButton
                    question="Do you have difficulty conceiving a child or failure to conceive for several months or years?"
                    idx={3}
                    choices={[
                        "✅ Yes",
                        "❌ No",
                        "🤏 A little bit",
                        "🤷‍♀️ I don't know",
                    ]}
                    name="otherPainFertility"
                />
            {/if}

            {#if form?.success}
                <div class="text-center font-sans pt-20">
                    <p class="text-3xl sm:text-5xl font-bold">
                        You have X% chance to have endometriosis
                    </p>
                </div>
                <div
                    class="flex flex-wrap justify-center items-center font-sans mt-10 pb-20"
                >
                    <button
                        on:click={() => goto("/")}
                        class="m-5 p-5 max-w-70% bg-#ff735d border-rounded-5 text-white font-bold text-2xl"
                    >
                        Fight the pain
                    </button>
                    <button
                        on:click={() => goto("/")}
                        class="m-5 p-5 max-w-70% bg-#ff735d border-rounded-5 text-white font-bold text-2xl"
                    >
                        Return to the home page
                    </button>
                </div>
            {:else}
                <div class="flex font-sans mt-20 pb-20">
                    <button
                        class="min-w-110 m-auto p-5 bg-#ff735d border-rounded-5 text-white font-bold text-2xl"
                    >
                        Measure my risk
                    </button>
                </div>
            {/if}
        </form>
    </div>
</div>

<style>
    :root {
        --range-slider: #ffe0da; /* slider main background color */
        --range-handle-inactive: #ff9a8b; /* inactive handle color */
        --range-handle: #ff9a8b; /* non-focussed handle color */
        --range-handle-focus: #ff735d; /* focussed handle color */
        --range-handle-border: var(--range-handle); /* handle border color */
        --range-range-inactive: var(
            --range-handle-inactive
        ); /* inactive range bar background color */
        --range-range: var(
            --range-handle-focus
        ); /* active range background color */
        --range-float-inactive: var(
            --range-handle-inactive
        ); /* inactive floating label background color */
        --range-float: var(
            --range-handle-focus
        ); /* floating label background color */
        --range-float-text: white; /* text color on floating label */
    }
</style>
