<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import CustomEase from "gsap/dist/CustomEase";

  let openingEase: unknown = undefined;

  let upper: HTMLElement;
  let lower: HTMLElement;
  let line: HTMLElement;

  function animate() {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power4.out",
      },
    });

    tl.delay(0.3)
      .to(".animated-name", {
        letterSpacing: 0,
        opacity: 1,
      })
      .to(upper, {
        delay: 1,
        translateY: "-100%",
        ease: openingEase as any,
        duration: 3,
      })
      .to(
        lower,
        {
          translateY: "100%",
          ease: openingEase as any,
          duration: 3,
        },
        "<"
      );
  }

  function initialize() {
    gsap.registerPlugin(CustomEase);

    openingEase = CustomEase.create(
      "custom",
      "M0,0 C0.193,0.037 0.158,0.022 0.266,0.061 0.28,0.066 0.294,0.076 0.308,0.072 0.412,0.039 0.519,0.041 0.652,0.102 0.844,0.189 0.798,0.22 0.842,0.453 0.872,0.615 0.919,0.768 1,1 "
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
  <!-- <div
    bind:this={line}
    class="w-full h-1 absolute left-0 top-1/2 -translate-y-1/2 bg-primary origin-left"
  ></div> -->
  <div
    bind:this={upper}
    id="upper"
    class="bg-landing-bg h-1/2 w-full flex justify-center items-end overflow-hidden"
  >
    <div class="animated-name inline-block translate-y-1/2 text-h1">
      {#each "Matěj Kotrba" as letter}
        {#if letter === " "}
          &nbsp;
        {:else}
          <span class="inline-block">{letter}</span>
        {/if}
      {/each}
    </div>
  </div>
  <div
    bind:this={lower}
    id="lower"
    class="bg-landing-bg h-1/2 w-full flex justify-center overflow-hidden items-start"
  >
    <div class="animated-name inline-block -translate-y-1/2 text-h1">
      {#each "Matěj Kotrba" as letter}
        {#if letter === " "}
          &nbsp;
        {:else}
          <span class="inline-block">{letter}</span>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .animated-name {
    letter-spacing: 2ch;
    opacity: 0;
  }
</style>
