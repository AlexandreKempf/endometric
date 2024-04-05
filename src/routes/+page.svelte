<script>
    let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="text-center font-sans p-10">
    <h1 class="text-5xl font-bold">Welcome to EndoMetric</h1>
    <p class="text-xl">Stand together for a better endometriosis diagnosis.</p>
</div>

<div class="flex flex-wrap justify-center">
    <a
        href="/take-the-test"
        class="w-40% min-w-110 sm:min-w-160 m-10 p-5 border-2 z-10 bg-#ffffee border-#333 border-rounded-5 flex flex-col"
    >
        <lottie-player
            src="animation1.json"
            class="h-100 m-auto"
            background="transparent"
            speed="1"
            loop
            autoplay
        />

        <div class="mb-5">
            <h2 class="text-2xl font-bold text-center">
                Measure your endometriosis risk
            </h2>
        </div>
        <div class="flex items-center justify-between m-4">
            <div class="text-#375a64 pr-4">
                <div class="flex items-center my-1">
                    <div class="i-iconoir-timer w-25px h-25px mx-2 shrink-0" />
                    <p class="">2 minutes</p>
                </div>
                <div class="flex items-center">
                    <div
                        class="i-iconoir-community w-25px h-25px mx-2 shrink-0"
                    />
                    <p class="">If you're unsure about your diagnosis</p>
                </div>
            </div>

            <button
                class="bg-#ff735d p-3 px-5 border-rounded-3 font-bold text-white"
            >
                Take the test
            </button>
        </div>
    </a>
    <a
        href="/help-us"
        class="w-40% min-w-110 sm:min-w-160 m-10 p-5 z-10 bg-#ffffee border-2 border-#333 border-rounded-5 flex flex-col"
    >
        <lottie-player
            src="animation2.json"
            class="h-120 m-auto -mt-15"
            background="transparent"
            speed="1"
            loop
            autoplay
        />

        <div class="mb-5">
            <h2 class="text-2xl font-bold text-center">
                Add your diagnosis and improve endometric
            </h2>
        </div>
        <div class="flex items-center justify-between m-4">
            <div class="text-#375a64 pr-4">
                <div class="flex items-center my-1">
                    <div class="i-iconoir-timer w-25px h-25px mx-2 shrink-0" />
                    <p class="">2 minutes</p>
                </div>
                <div class="flex items-center">
                    <div
                        class="i-iconoir-community w-25px h-25px mx-2 shrink-0"
                    />
                    <p class="">If you're confident about your diagnosis</p>
                </div>
            </div>

            <button
                class="bg-#ff735d p-3 px-5 border-rounded-3 font-bold text-white"
            >
                Help us
            </button>
        </div>
    </a>
</div>

<div class="mx-auto h-15">
    <lottie-player
        src="scroll.json"
        class="h-10 m-auto {y > 200 ? 'hidden' : ''}"
        background="transparent"
        speed="1"
        loop
        autoplay
    />
</div>

<div class="flex">
    <div
        class="bg-#375a64 z-10 w-screen flex flex-wrap justify-center items-center py-30"
    >
        <div class="min-w-110 sm:min-w-160 w-30% mx-auto text-#ffffee">
            <h2 class="text-4xl font-bold mb-10">What is Endometriosis?</h2>
            <p class="my-2">
                It is a disease where cells from inside the uterus also grow
                outside the uterus in the pelvic area. These cells grow and
                shrink with the menstrual cycle, leading to internal bleeds,
                cysts, and scar tissues.
            </p>
            <p class="my-2">
                Endometriosis can be extremely painful during period, ovulation,
                or sexual intercourse.
            </p>
        </div>
        <div class="w-30% mx-auto text-#ffffee grid grid-cols-2 grid-gap-5">
            <a href="https://www.nature.com/articles/s41572-018-0008-5">
                <h2 class="text-4xl font-bold">10-15%</h2>
                <p>of menstruating person are concerned</p>
            </a>
            <a
                href="https://www.nature.com/articles/s41746-022-00638-1?fromPaywallRec=false"
            >
                <h2 class="text-4xl font-bold">6-12 years</h2>
                <p>before diagnostic</p>
            </a>
            <a
                href="https://www.nature.com/articles/s41746-022-00638-1?fromPaywallRec=false"
            >
                <h2 class="text-4xl font-bold">300</h2>
                <p>average number of patients</p>
                <p>in studies (control included)</p>
            </a>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538128/#R2">
                <h2 class="text-4xl font-bold">30-50%</h2>
                <p>infertility cases</p>
            </a>
        </div>
    </div>
</div>

<div class="flex">
    <div
        class="z-10 w-screen flex flex-wrap justify-center items-center py-10 px-30"
    >
        <lottie-player
            src="animation3.json"
            class="w-40% min-w-130 mx-auto max-h-130"
            background="transparent"
            speed="1"
            loop
            autoplay
        />
        <div class="min-w-110 sm:min-w-160 w-30% mx-auto">
            <h2 class="text-4xl font-bold mb-10">What is EndoMetric?</h2>
            <p class="my-2">
                Endometric is a test to diagnosis endometriosis with artificial
                intelligence. It is not a medical test and should only be used
                to help you decide if you should see a doctor.
            </p>
            <p class="my-2 font-bold">
                If you have any doubt, please take a medical appointment.
            </p>
            <p class="my-2">
                Endometric only works thanks to its community that shares their
                diagnosis and their symptoms. Thanks to all the people that
                contributed.
            </p>

            <div class="flex justify-items my-10">
                <div class="w-30 mx-5">
                    <div class="mx-auto mb-2 i-iconoir-heart w-15 h-15"></div>
                    <div class="text-center">Based on love and care</div>
                </div>
                <div class="w-30 mx-5">
                    <div class="mx-auto mb-2 i-iconoir-lock w-15 h-15"></div>
                    <div class="text-center">Never ask for your identity</div>
                </div>
                <a
                    href="https://github.com/AlexandreKempf/endometric"
                    class="w-30 mx-5"
                >
                    <div class="mx-auto mb-2 i-iconoir-github w-15 h-15"></div>
                    <div class="text-center">open-source and free to use</div>
                </a>
                <a
                    href="mailto:alexandre.kempf@cri-paris.org"
                    class="w-30 mx-5"
                >
                    <div
                        class="mx-auto mb-2 i-iconoir-cloud-download w-15 h-15"
                    ></div>
                    <div class="text-center">Data available on request</div>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="flex">
    <div class="bg-#58c2aa z-10 w-screen py-30">
        <div class="min-w-110 sm:min-w-160 w-30% mx-10% text-#ffffee">
            <h2 class="text-4xl font-bold mb-10">Special thanks to:</h2>
            <div class="flex">
                <div class="mx-5">
                    <div
                        class="mx-auto mb-2 i-iconoir-community w-15 h-15"
                    ></div>
                    <div class="w-40 text-center">
                        People who share their symptoms and diagnosis on this
                        website
                    </div>
                </div>
                <div class="mx-5">
                    <div
                        class="mx-auto mb-2 i-iconoir-user-star w-15 h-15"
                    ></div>
                    <div class="w-40 text-center">
                        <a
                            href="https://www.linkedin.com/in/arnaud-fauconnier-8bb07070/?originalSubdomain=fr"
                            ><span class="font-bold">Dr. Fauconnier</span></a
                        >
                        who created the questions and
                        <a
                            href="https://arnaudfauconnier.shinyapps.io/shinyDEVA/"
                            ><em>a medical test for endometriosis</em></a
                        > (in french)
                    </div>
                </div>

                <div class="mx-5">
                    <div
                        class="mx-auto mb-2 i-iconoir-user-love w-15 h-15"
                    ></div>
                    <div class="w-40 text-center">
                        <a href="https://www.linkedin.com/in/boltbite/"
                            ><span class="font-bold">Bolt Bite</span></a
                        >
                        who created the animations
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
