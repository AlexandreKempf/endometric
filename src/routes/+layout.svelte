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
            src="plant0.webp"
            alt="plant-deco"
            class="absolute w-60 lg:w-100 rotate-0 left-0 -bottom-20 lg:-bottom-27"
        />
        <img
            src="plant3.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-110 -left-30 lg:-left-30 rotate-90 lg:rotate-90 top-50% lg:top-60 scale-x-[-1]"
        />
        <img
            src="plant4.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-160 -right-30 lg:-right-20 lg:-top-40 -rotate-20 lg:-rotate-70 scale-x-[-1]"
        />
        <img
            src="plant1.webp"
            alt="plant-deco"
            class="absolute w-80 lg:w-120 -rotate-10 lg:-rotate-18 -right-35 lg:-right-50 bottom-0 lg:bottom-0 scale-x-[-1]"
        />
    </div>

    <slot />
</div>
