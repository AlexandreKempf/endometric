<script>
    import "virtual:uno.css";
    import "@unocss/reset/tailwind.css";
</script>

<div class="bg-#fbe9ab">
    <div class="z-0 w-screen h-screen overflow-hidden fixed">
        <img
            src="plant2.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-120 -rotate-90 lg:rotate-0 top-0 lg:-top-27 -left-20 lg:left-3% scale-y-[-1]"
        />
        <img
            src="plant1.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-140 -rotate-60 lg:-rotate-100 -right-30 lg:-right-5 top-0 lg:-top-20"
        />
        <img
            src="plant0.webp"
            alt="plant-deco"
            class="absolute w-60 lg:w-100 rotate-50 lg:rotate-80 -left-25 lg:-left-30 top-90 lg:top-60"
        />
        <img
            src="plant3.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-110 -left-30 lg:-left-10 rotate-90 lg:rotate-50 bottom-0 lg:-bottom-32 scale-x-[-1]"
        />
        <img
            src="plant4.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-140 -right-35 lg:-right-35 -rotate-20 lg:-rotate-20 bottom-40 lg:-bottom-20 scale-x-[-1]"
        />
    </div>

    <slot />
</div>
