<script lang="ts">
    import { save_diagnosis } from "$lib/database.js";
    import Slider from "$lib/Slider.svelte";
    import RadioButton from "$lib/RadioButton.svelte";
    import EmojiSlider from "$lib/EmojiSlider.svelte";
    import CheckBoxes from "$lib/CheckBoxes.svelte";

    let formContent = {
        infoMenstruation: 0,
        infoEndometriosis: 0,
        infoEndometriosisMethod: [],
        infoEndometriosisType: [],
        infoAge: 30,
        pelvicPainMenstruation: 0,
        pelvicPainRest: 0,
        pelvicPainIncrease: 0,
        pelvicPainTiming: 0,
        pelvicPainDagger: 0,
        pelvicPainBack: 0,
        pelvicPainLegs: 0,
        pelvicPainHandicap: 0,
        pelvicPainActivities: 0,
        sexualPain: 0,
        sexualPainPosition: 0,
        sexualPainInterupt: 0,
        digestivePainDuring: 0,
        digestivePainBefore: 0,
        digestivePainDiarrhea: 0,
        otherPainUrinating: 0,
        otherPainHoldingBack: 0,
        otherPainSciatica: 0,
        otherPainShoulder: 0,
        otherPainFertility: 0,
    };
</script>

<div class="text-center font-sans p-10">
    <h1 class="text-5xl font-bold">Save your diagnosis and symptoms</h1>
    <p class="text-xl">
        It will help us create a more accurate diagnosis for endometriosis
    </p>
</div>

<h2 class="font-bold text-3xl ml-15% mt-30">Personal information</h2>

<RadioButton
    question="Have you ever menstruated?"
    bind:idx={formContent.infoMenstruation}
    choices={["❌ No", "✅ Yes"]}
/>

<Slider
    question="How old are you?"
    bind:idx={formContent.infoAge}
    min={10}
    max={70}
    pipstep={5}
/>

<RadioButton
    question="Do you have endometriosis?"
    bind:idx={formContent.infoEndometriosis}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<CheckBoxes
    question="Was your endometriosis confirmed by a medical exam?"
    bind:indexes={formContent.infoEndometriosisMethod}
    choices={["No", "IRM", "Surgery", "Histology", "Other"]}
/>

<CheckBoxes
    question="What type of endometriosis do you have?"
    bind:indexes={formContent.infoEndometriosisType}
    choices={[
        "🤷",
        "peritoneal endometriosis",
        "ovarian endometriosis",
        "deep endometriosis",
        "adenomyosis",
        "endometrioma",
        "other",
    ]}
/>

<h2 class="font-bold text-3xl ml-15% mt-30">Spontaneous pelvic pain</h2>

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
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Does the pain start a few days before or ends a few days after your periods?"
    bind:idx={formContent.pelvicPainTiming}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Does the pain come in spurts, like daggers?"
    bind:idx={formContent.pelvicPainDagger}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Does the pain spread to your back?"
    bind:idx={formContent.pelvicPainBack}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Does the pain spread to your hips and legs?"
    bind:idx={formContent.pelvicPainLegs}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="The pain leads to a disability for daily activities?"
    bind:idx={formContent.pelvicPainHandicap}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="The pain leads to an inability to stand, walk, or mobilize?"
    bind:idx={formContent.pelvicPainActivities}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<h2 class="font-bold text-3xl ml-15% mt-30">Sexual intercourse pain</h2>
<p class="ml-15%">If you are not concerned you can skip this section</p>

<EmojiSlider
    question="How much sharp and deep pain do you feel during sexual intercourse?"
    bind:idx={formContent.sexualPain}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Are certain sexual positions painful?"
    bind:idx={formContent.sexualPainPosition}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Does the pain disrupt, prevent or interrupt sexual intercourse?"
    bind:idx={formContent.sexualPainInterupt}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<h2 class="font-bold text-3xl ml-15% mt-30">Digestive pain or problems</h2>

<EmojiSlider
    question="How much pain do you have when you're defecating during your periods?"
    bind:idx={formContent.digestivePainDuring}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Do you often have spams, cramps, and/or intestinal pain before defecating during your periods?"
    bind:idx={formContent.digestivePainBefore}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Do you often have diarrhea and/or constipation during your periods?"
    bind:idx={formContent.digestivePainDiarrhea}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<h2 class="font-bold text-3xl ml-15% mt-30">Other pains</h2>

<EmojiSlider
    question="How much pain do you have when you're urinating during your periods?"
    bind:idx={formContent.otherPainUrinating}
    choices={["😊", "😐", "😕", "😟", "😖", "😭"]}
/>

<RadioButton
    question="Do you often have bladder pain when you want to urinate or holding back during your periods?"
    bind:idx={formContent.otherPainHoldingBack}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Do you often have sciatica pain during your periods?"
    bind:idx={formContent.otherPainSciatica}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Do you often have right shoulder, or right subcostal pain during your periods?"
    bind:idx={formContent.otherPainShoulder}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<RadioButton
    question="Do you have difficulty conceiving a child or failure to conceive for several months or years?"
    bind:idx={formContent.otherPainFertility}
    choices={["🤷‍♀️ I don't know", "❌ No", "🤏 A little bit", "✅ Yes"]}
/>

<div class="flex mt-20 pb-20">
    <button
        on:click={() => {
            save_diagnosis(formContent);
        }}
        class="min-w-110 m-auto p-5 z-10 bg-#ff735d border-rounded-5 text-white font-bold text-2xl"
    >
        Save and contribute
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
