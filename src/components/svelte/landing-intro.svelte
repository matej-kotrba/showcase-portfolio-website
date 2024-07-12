<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import CustomEase from "gsap/dist/CustomEase";

  let openingEase: unknown = undefined;

  let upper: HTMLElement;
  let lower: HTMLElement;

  function animate() {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power4.out",
      },
    });

    tl.delay(0.3).to(".animated-name", {
      letterSpacing: 0,
      opacity: 1,
    });

    // tl.to(upper, {
    //   delay: 1,
    //   translateY: "-100%",
    //   ease: openingEase as any,
    //   duration: 5,
    // }).to(
    //   lower,
    //   {
    //     translateY: "100%",
    //   },
    //   "<"
    // );
  }

  function initialize() {
    gsap.registerPlugin(CustomEase);

    openingEase = CustomEase.create(
      "custom",
      "M0,0 C0,0 -0.001,0.224 0.252,0.136 0.319,0.112 0.472,0.119 0.613,0.232 0.843,0.415 1,1 1,1 "
    );
  }

  onMount(() => {
    initialize();
    animate();
  });
</script>

<div
  class="fixed w-screen h-screen left-0 top-0 overscroll-contain flex flex-col overflow-hidden"
>
  <div
    bind:this={upper}
    class="bg-landing-bg h-1/2 w-full flex justify-center items-end overflow-hidden"
  >
    <span class="animated-name inline-block translate-y-1/2 text-h1"
      >Matěj Kotrba</span
    >
  </div>
  <div
    bind:this={lower}
    class="bg-landing-bg h-1/2 w-full flex justify-center overflow-hidden items-start"
  >
    <span class="animated-name inline-block -translate-y-1/2 text-h1"
      >Matěj Kotrba</span
    >
  </div>
</div>

<style>
  .animated-name {
    letter-spacing: 2ch;
    opacity: 0;
  }
</style>
