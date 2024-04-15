<script>
    let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="text-center font-sans p-10">
    <h1 class="text-4xl sm:text-5xl font-black">
        Stand together for a <br />better diagnosis of endometriosis.
    </h1>
</div>

<div
    class="z-10 w-100% flex flex-wrap-reverse justify-center items-center px-10%"
>
    <lottie-player
        src="animation3.json"
        class="w-40% min-w-90 0 sm:min-w-130 mx-auto"
        background="transparent"
        p
        speed="1"
        loop
        autoplay
    />
    <div class="min-w-90 sm:min-w-160 w-30% mx-auto overflow-hidden">
        <h2 class="text-5xl font-light font-sans mb-10">What is Endometric?</h2>
        <p class="mb-5 text-lg">
            It is a test that helps pre-diagnose endometriosis. The goal is to
            raise awareness on this disease and its symptoms. You can either
            take the test or share your diagnosis to improve it and help the
            community.
        </p>
        <p class="mb-5 text-lg">
            Endometric only works thanks to people that share their diagnosis
            and their symptoms.
            <span class="font-bold">Thank you!</span>
        </p>

        <div class="flex flex-wrap justify-items">
            <div class="w-30 m-5">
                <div class="mx-auto mb-2 i-iconoir-heart text-5xl"></div>
                <div class="text-center text-lg">Made with love</div>
            </div>
            <div class="w-30 m-5">
                <div class="mx-auto mb-2 i-iconoir-lock text-5xl"></div>
                <div class="text-center text-lg">Anonymous</div>
            </div>
            <a
                target="_blank"
                href="https://github.com/AlexandreKempf/endometric"
                class="w-30 m-5"
            >
                <div class="flex mx-auto mb-2 justify-center">
                    <div class="text-5xl i-iconoir-github"></div>
                    <p class="text-3xl text-#ff735d">*</p>
                </div>

                <div class="text-center text-lg">Open-source and free</div>
            </a>
            <a
                target="_blank"
                href="mailto:alexandre.kempf@cri-paris.org"
                class="w-30 m-5"
            >
                <div class="flex mx-auto mb-2 text-5xl justify-center">
                    <div class="text-5xl i-iconoir-cloud-download"></div>
                    <p class="text-3xl text-#ff735d">*</p>
                </div>
                <div class="text-center text-lg">Data available on request</div>
            </a>
        </div>
    </div>
</div>
<div class="mx-auto h-20">
    <lottie-player
        src="scroll.json"
        class="h-15 m-auto {y > 200 ? 'hidden' : ''}"
        background="transparent"
        speed="1"
        loop
        autoplay
    />
</div>

<div class="flex">
    <div
        class="bg-#375a64 z-10 w-100% flex flex-wrap justify-center items-center py-20 px-5% lg:px-10%"
    >
        <div class="md:min-w-160 lg:w-30% text-#ffffee mx-10">
            <h2 class="text-5xl font-light font-sans mb-10">
                What is Endometriosis?
            </h2>
            <p class="mb-5 text-lg">
                It is a disease that concerns at least 10% of people who
                menstruate. Cells that are supposed to be inside the uterus,
                grow outside it in the pelvic area. These cells grow and shrink
                with the menstrual cycle, leading to internal bleeds, cysts, and
                scar tissues.
            </p>
            <p class="mb-5 text-lg">
                Endometriosis can be extremely painful during period, ovulation,
                sexual intercourse, etc. It can also lead to infertility. It is
                diagnosed with an MRI or surgery, but the average time before
                diagnosis is around 7 years.
            </p>
            <p class="mb-5 text-lg">
                <a
                    target="_blank"
                    href="https://www.sciencedirect.com/science/article/pii/S0015028221018094"
                >
                    A french test for pre-diagnosis using AI already exists<span
                        class="text-3xl text-#ff735d"
                        >*
                    </span></a
                > but it was done with a small sample size. In average studies using
                AI and endometriosis diagnosis, only count 300 patients (control
                included).
            </p>

            <p class="mb-10 text-lg font-bold">
                Symptoms of endometriosis are very diverse and we believe we can
                improve its pre-diagnosis if we include more testimonies.
            </p>
        </div>
        <div class="mt-10 text-#ffffee font-sans mx-10">
            <a
                target="_blank"
                href="https://www.nature.com/articles/s41572-018-0008-5"
            >
                <h2 class="text-5xl text-center font-bold">10-15%</h2>
                <p class="text-center text-lg mb-10">
                    of menstruating people<span
                        class="text-3xl font-mono text-#ff735d">*</span
                    >
                </p>
            </a>
            <a
                target="_blank"
                href="https://www.nature.com/articles/s41746-022-00638-1?fromPaywallRec=false"
            >
                <h2 class="text-5xl text-center font-bold">6-12 years</h2>
                <p class="text-center text-lg mb-10">
                    diagnostic delay<span
                        class="text-3xl font-mono text-#ff735d">*</span
                    >
                </p>
            </a>
            <a
                target="_blank"
                href="https://www.nature.com/articles/s41746-022-00638-1?fromPaywallRec=false"
            >
                <h2 class="text-5xl text-center font-bold">300 people</h2>
                <p class="text-center text-lg mb-10">
                    average sample size in studies<span
                        class="text-3xl font-mono text-#ff735d">*</span
                    >
                </p>
            </a>
            <a
                target="_blank"
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538128/#R2"
            >
                <h2 class="text-5xl text-center font-bold">30-50%</h2>
                <p class="text-center text-lg">
                    infertility cases<span
                        class="text-3xl font-mono text-#ff735d">*</span
                    >
                </p>
            </a>
        </div>
    </div>
</div>

<div class="flex flex-wrap justify-center py-20">
    <a
        href="/take-the-test"
        class="w-30% min-w-90 sm:min-w-160 m-10 p-5 border-2 z-10 bg-#ffffee border-#333 border-rounded-5 flex flex-col"
    >
        <div class="my-5">
            <h2 class="text-3xl font-sans text-center">
                Measure your endometriosis risk
            </h2>
        </div>
        <lottie-player
            src="animation1.json"
            class="h-100 m-auto"
            background="transparent"
            speed="1"
            loop
            autoplay
        />
    </a>
    <a
        href="/help-us"
        class="w-30% min-w-90 sm:min-w-160 m-10 p-5 z-10 bg-#ffffee border-2 border-#333 border-rounded-5 flex flex-col"
    >
        <div class="my-5">
            <h2 class="text-3xl font-sans text-center">
                Share your diagnosis and symptoms
            </h2>
        </div>
        <lottie-player
            src="animation2.json"
            class="h-120 m-auto -mt-15"
            background="transparent"
            speed="1"
            loop
            autoplay
        />
    </a>
</div>

<div class="flex">
    <div class="bg-#375a64 z-10 w-100% py-30">
        <div class="sm:min-w-160 mx-10% text-#ffffee">
            <h2 class="text-5xl text-center font-bold font-sans mb-10">
                Special thanks to:
            </h2>
            <div class="flex justify-center flex-wrap">
                <div class="m-5">
                    <p class="mx-auto text-center mb-2 text-5xl">🎗️</p>
                    <div class="w-40 text-lg text-center">
                        People who share their symptoms and diagnosis on this
                        website
                    </div>
                </div>
                <div class="m-5">
                    <p class="text-center mb-2 text-5xl">🩺</p>
                    <div class="w-40 text-lg text-center">
                        Searchers who created the
                        <a
                            target="_blank"
                            href="https://arnaudfauconnier.shinyapps.io/shinyDEVA/"
                            >DEVA test<span class=" font-mono text-#ff735d"
                                >*</span
                            ></a
                        > (in french)
                    </div>
                </div>
                <div class="m-5">
                    <p class="mx-auto mb-2 text-center text-5xl">🖌️</p>
                    <div class="w-40 text-lg text-center">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/cornesdegazelle/"
                            ><span class="font-bold"
                                >CornesDeGazelle<span
                                    class="font-mono text-#ff735d">*</span
                                ></span
                            ></a
                        >
                        for the background plants and the UI
                    </div>
                </div>
                <div class="m-5">
                    <p class="mx-auto mb-2 text-center text-5xl">⚡</p>
                    <div class="w-40 text-lg text-center">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/boltbite/"
                            ><span class="font-bold"
                                >Bolt Bite<span class="font-mono text-#ff735d"
                                    >*</span
                                ></span
                            ></a
                        >
                        who created the animations
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
