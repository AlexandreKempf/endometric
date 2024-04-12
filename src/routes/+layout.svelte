<script>
    import "virtual:uno.css";
    import "@unocss/reset/tailwind.css";
</script>

<div class="bg-#fff9e4">
    <div class="z-0 opacity-20 w-screen h-screen overflow-hidden fixed">
        <img
            src="plant2.svg"
            alt="plant-deco"
            class="absolute w-50 rotate-50 -left-5 top-80"
        />
        <img
            src="plant7.svg"
            alt="plant-deco"
            class="absolute w-45 rotate-30 top-180"
        />
        <img
            src="plant6.svg"
            alt="plant-deco"
            class="absolute w-45 rotate-70 top-280 scale-x-[-1]"
        />
        <img
            src="plant6.svg"
            alt="plant-deco"
            class="absolute w-45 rotate-100 top-0 sm:-top-25 -left-20% sm:-left-18% md:-left-8% lg:left-8% xl:left-13%"
        />
        <img
            src="plant7.svg"
            alt="plant-deco"
            class="absolute w-45 rotate-220 top-0 sm:-top-35 -right-20% sm:-right-18% md:-right-7% lg:right-8% xl:right-13%"
        />

        <img
            src="plant6.svg"
            alt="plant-deco"
            class="absolute w-50 -rotate-60 right-0 top-80"
        />

        <img
            src="plant2.svg"
            alt="plant-deco"
            class="absolute w-50 -rotate-40 right-0 top-180"
        />

        <img
            src="plant7.svg"
            alt="plant-deco"
            class="absolute w-50 -rotate-40 right-0 top-280"
        />
    </div>

    <slot />
</div>
