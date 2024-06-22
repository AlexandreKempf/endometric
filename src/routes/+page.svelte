<script>
    let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="flex">
    <div class="bg-#fff9e4 z-10 bg-opacity-60 sm:bg-opacity-40 md:bg-opacity-0">
        <div
            class="text-center font-sans pt-5 p-10 mb-5 drop-shadow-[0_1.2px_1.2px_rgba(251,233,171,0.8)]"
        >
            <h1 class="text-4xl sm:text-7xl font-black">
                WELCOME TO<br />
                <span>ENDOMETRIC</span>
            </h1>
            <p class="text-0.885em sm:text-1.76em">
                Stand together for a better diagnosis.
            </p>
        </div>

        <div
            class="w-100% flex flex-wrap justify-center items-center px-2% font-sans"
        >
            <lottie-player
                src="animation4.json"
                class="w-40% min-w-90 0 mb-10 sm:min-w-170"
                background="transparent"
                p
                speed="1"
                autoplay
            />
            <div
                class="min-w-90 md:min-w-170 md:w-30% drop-shadow-[0_0px_1px_rgba(251,233,171,1.0)]"
            >
                <h2 class="text-4xl sm:text-5xl font-bold mb-5">WHAT?</h2>
                <p class="mb-5 text-lg">
                    Endometric is a test that helps pre-diagnose endometriosis.
                    The goal is to raise awareness on this disease and its
                    symptoms. You can either take the test or share your
                    diagnosis to improve the test and help the community.
                </p>
                <p class="mb-5 text-lg">
                    Endometric only works thanks to people that share their
                    diagnosis and their symptoms.
                    <span class="font-bold">Thank you!</span>
                </p>

                <div class="flex flex-wrap">
                    <div class="w-25 m-5">
                        <div
                            class="mx-auto mb-2 i-iconoir-heart text-5xl"
                        ></div>
                        <div class="text-center text-lg">Made with love</div>
                    </div>
                    <div class="w-25 m-5">
                        <div class="mx-auto mb-2 i-iconoir-lock text-5xl"></div>
                        <div class="text-center text-lg">Anonymous</div>
                    </div>
                    <a
                        target="_blank"
                        href="https://github.com/AlexandreKempf/endometric"
                        class="w-25 m-5"
                    >
                        <div class="flex mx-auto mb-2 justify-center">
                            <div class="text-5xl i-iconoir-github"></div>
                            <p class="text-3xl font-mono text-#ff735d">*</p>
                        </div>

                        <div class="text-center text-lg">
                            Open-source and free
                        </div>
                    </a>
                    <a
                        target="_blank"
                        href="mailto:alexandre.kempf@cri-paris.org"
                        class="w-25 m-5"
                    >
                        <div class="flex mx-auto mb-2 text-5xl justify-center">
                            <div
                                class="text-5xl i-iconoir-cloud-download"
                            ></div>
                            <p class="text-3xl font-mono text-#ff735d">*</p>
                        </div>
                        <div class="text-center text-lg">
                            Data available on request
                        </div>
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
    </div>
</div>

<div class="flex font-sans">
    <div class="bg-#3a907c z-10 w-100% py-10">
        <h2
            class="text-4xl sm:text-5xl mb-5 font-bold text-center text-#ffffee"
        >
            HOW?
        </h2>
        <p class="text-lg text-center text-#ffffee">
            Click on one of the buttons below.
        </p>
        <div class="flex flex-wrap justify-center items-center">
            <a
                href="/take-the-test"
                class="w-95% sm:w-35% min-w-90 sm:min-w-131 m-10 p-5 border-2 z-10 bg-#ffffee border-#333 border-rounded-5 shadow-xl flex flex-col"
            >
                <div class="my-5">
                    <h2 class="text-3xl font-bold text-center">
                        Measure your<br />endometriosis risk
                    </h2>
                </div>
                <lottie-player
                    src="animation1.json"
                    class="h-100 mx-auto"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />
            </a>
            <a
                href="/help-us"
                class="w-95% sm:w-35% min-w-90 sm:min-w-131 m-10 p-5 z-10 bg-#ffffee border-2 border-#333 border-rounded-5 shadow-xl flex flex-col"
            >
                <div class="my-5">
                    <h2 class="text-3xl font-bold font-sans text-center">
                        Share your diagnosis<br />and symptoms
                    </h2>
                </div>
                <lottie-player
                    src="animation3.json"
                    class="h-120 mx-auto -mt-20"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />
            </a>
        </div>
    </div>
</div>

<div class="flex font-sans">
    <div
        class="w-100% bg-#fff9e4 z-10 bg-opacity-60 sm:bg-opacity-40 md:bg-opacity-0 flex flex-wrap justify-center items-end py-20 px-2% lg:px-10% drop-shadow-[0_0px_1px_rgba(251,233,171,1.0)]"
    >
        <div class="opacity-100 md:min-w-130 md:w-48%">
            <h2 class="text-4xl sm:text-5xl font-bold mb-5">WHY?</h2>
            <p class="mb-5 text-lg">
                Endometriosis is a disease that concerns at least 10% of people
                who menstruate. Cells that are supposed to be inside the uterus,
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
                        class="text-3xl font-mono text-#ff735d"
                        >*
                    </span></a
                > but it was done with a small sample size. In average studies using
                AI and endometriosis diagnosis, only count 300 patients (control
                included).
            </p>

            <p class="text-lg font-bold">
                Symptoms of endometriosis are very diverse and we believe we can
                improve its pre-diagnosis if we include more testimonies.
            </p>
        </div>
        <div class="mx-20 mt-10">
            <a
                target="_blank"
                href="https://www.nature.com/articles/s41572-018-0008-5"
            >
                <h2 class="text-5xl text-center font-bold">10-15%</h2>
                <p class="text-center text-lg mb-8">
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
                <p class="text-center text-lg mb-8">
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
                <p class="text-center text-lg mb-8">
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

<div class="flex font-sans">
    <div class="bg-#375a64 z-10 w-100% p-10">
        <div class="sm:min-w-130 text-#ffffee">
            <h2 class="text-4xl sm:text-5xl text-center font-bold mb-5">
                WHO?
            </h2>
            <div class="flex justify-center flex-wrap">
                <div class="m-5">
                    <div
                        class="i-fluent-emoji-high-contrast:people-hugging mx-auto mb-2 text-center text-5xl"
                    ></div>
                    <div class="w-40 text-lg text-center">
                        People who share their symptoms and diagnosis on this
                        website
                    </div>
                </div>
                <div class="m-5">
                    <div
                        class="i-fluent-emoji-high-contrast:microscope mx-auto mb-2 text-center text-5xl"
                    ></div>
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
                    <div
                        class="i-fluent-emoji-high-contrast:paintbrush mx-auto mb-2 text-center text-5xl"
                    ></div>
                    <div class="w-40 text-lg text-center">
                        <a
                            target="_blank"
                            href="https://www.instagram.com/cornesdegazelle/"
                            ><span class="font-bold"
                                >CornesDeGazelle<span
                                    class="font-mono font-normal text-#ff735d"
                                    >*</span
                                ></span
                            ></a
                        >
                        for the background plants and the UI
                    </div>
                </div>
                <div class="m-5">
                    <div
                        class="i-fluent-emoji-high-contrast:artist-palette mx-auto mb-2 text-center text-5xl"
                    ></div>
                    <div class="w-40 text-lg text-center">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/boltbite/"
                            ><span class="font-bold"
                                >Bolt Bite<span
                                    class="font-mono font-normal text-#ff735d"
                                    >*</span
                                ></span
                            ></a
                        >
                        and
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/sagarprajapati/"
                            ><span class="font-bold"
                                >Sagar Gediya<span
                                    class="font-mono font-normal text-#ff735d"
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
