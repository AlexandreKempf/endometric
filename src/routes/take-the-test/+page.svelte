<script lang="ts">
    import { save_answers } from "$lib/database.js";
    import Slider from "$lib/Slider.svelte";
    import RadioButton from "$lib/RadioButton.svelte";
    import EmojiSlider from "$lib/EmojiSlider.svelte";
    import { goto } from "$app/navigation";

    let showAnswers: boolean = false;

    let formContent = {
        infoMenstruation: 1,
        infoAge: 30,
        pelvicPainMenstruation: 0,
        pelvicPainRest: 0,
        pelvicPainIncrease: 3,
        pelvicPainTiming: 3,
        pelvicPainDagger: 3,
        pelvicPainBack: 3,
        pelvicPainLegs: 3,
        pelvicPainHandicap: 3,
        pelvicPainActivities: 3,
        sexualPain: 0,
        sexualPainPosition: 3,
        sexualPainInterupt: 3,
        digestivePainDuring: 0,
        digestivePainBefore: 3,
        digestivePainDiarrhea: 3,
        otherPainUrinating: 0,
        otherPainHoldingBack: 3,
        otherPainSciatica: 3,
        otherPainShoulder: 3,
        otherPainFertility: 3,
    };
</script>

<div class="text-center font-sans p-10">
    <h1 class="text-5xl font-bold">Measure your endometriosis risk</h1>
    <p class="text-lg">if you are unsure about your diagnosis.</p>
</div>

<div class="flex my-10">
    <div
        class="w-50% m-auto p-5 border-2 z-10 bg-#ffffee border-#333 border-rounded-5"
    >
        <div class="flex justify-center items-center">
            <div
                class="i-iconoir-warning-triangle text-5xl bg-#ff735d mx-10"
            ></div>
            <p class="text-lg font-sans">
                This test is <span class="font-600">NOT</span> a medical
                protocol and should <span class="font-600">NOT</span> be used as
                a diagnosis tool.
                <br />
                At best, this test is informative and can be use as an extra motivation
                to seek medical advice.
            </p>
        </div>
    </div>
</div>

<h2 class="font-bold font-sans text-3xl ml-15% mt-30">Personal information</h2>

<RadioButton
    question="Have you ever menstruated?"
    bind:idx={formContent.infoMenstruation}
    choices={["✅ Yes", "❌ No"]}
/>

<Slider
    question="How old are you?"
    bind:idx={formContent.infoAge}
    min={10}
    max={70}
    pipstep={5}
/>

<h2 class="font-bold font-sans text-3xl ml-15% mt-30">
    Spontaneous pelvic pain
</h2>

<EmojiSlider
    question="How much pain in the lower abdomen do you feel during your period?"
    bind:idx={formContent.pelvicPainMenstruation}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<EmojiSlider
    question="How much pain in the lower abdomen do you feel when you don't have your period?"
    bind:idx={formContent.pelvicPainRest}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Does the pain increase with the years?"
    bind:idx={formContent.pelvicPainIncrease}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Does the pain start a few days before or ends a few days after your period?"
    bind:idx={formContent.pelvicPainTiming}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Does the pain come in spurts, like daggers?"
    bind:idx={formContent.pelvicPainDagger}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Does the pain spread to your back?"
    bind:idx={formContent.pelvicPainBack}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Does the pain spread to your hips and legs?"
    bind:idx={formContent.pelvicPainLegs}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="The pain leads to a disability for daily activities?"
    bind:idx={formContent.pelvicPainHandicap}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="The pain leads to an inability to stand, walk, or mobilize?"
    bind:idx={formContent.pelvicPainActivities}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<h2 class="font-bold font-sans text-3xl ml-15% mt-30">
    Sexual intercourse pain
</h2>
<p class="font-sans ml-15%">
    If you are not concerned you can skip this section
</p>

<EmojiSlider
    question="How much sharp and deep pain do you feel during sexual intercourse?"
    bind:idx={formContent.sexualPain}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Are certain sexual positions painful?"
    bind:idx={formContent.sexualPainPosition}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Does the pain disrupt, prevent or interrupt sexual intercourse?"
    bind:idx={formContent.sexualPainInterupt}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<h2 class="font-bold font-sans text-3xl ml-15% mt-30">
    Digestive pain or problems
</h2>

<EmojiSlider
    question="How much pain do you have when you're defecating during your period?"
    bind:idx={formContent.digestivePainDuring}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Do you often have spams, cramps, and/or intestinal pain before defecating during your period?"
    bind:idx={formContent.digestivePainBefore}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Do you often have diarrhea and/or constipation during your period?"
    bind:idx={formContent.digestivePainDiarrhea}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<h2 class="font-bold font-sans text-3xl ml-15% mt-30">Other pains</h2>

<EmojiSlider
    question="How much pain do you have when you're urinating during your period?"
    bind:idx={formContent.otherPainUrinating}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Do you often have bladder pain when you want to urinate or holding back during your period?"
    bind:idx={formContent.otherPainHoldingBack}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Do you often have sciatica pain during your period?"
    bind:idx={formContent.otherPainSciatica}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Do you often have right shoulder, or right subcostal pain during your period?"
    bind:idx={formContent.otherPainShoulder}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

<RadioButton
    question="Do you have difficulty conceiving a child or failure to conceive for several months or years?"
    bind:idx={formContent.otherPainFertility}
    choices={["✅ Yes", "❌ No", "🤏 A little bit", "🤷‍♀️ I don't know"]}
/>

{#if showAnswers}
    <div class="text-center font-sans pt-20">
        <p class="text-3xl sm:text-5xl font-bold">
            You have X% chance to have endometriosis
        </p>
    </div>
{/if}
<div class="flex font-sans mt-20 pb-20">
    <button
        on:click={() => {
            if (showAnswers) {
                goto("/");
            } else {
                save_answers(formContent);
                showAnswers = true;
            }
        }}
        class="min-w-110 m-auto p-5 z-10 bg-#ff735d border-rounded-5 text-white font-bold text-2xl"
    >
        {showAnswers ? "Return home" : "Measure my risk"}
    </button>
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
