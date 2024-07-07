<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import anime from "animejs";

  let upper: HTMLElement;
  let lower: HTMLElement;

  onMount(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "power4.out",
      },
    });

    tl.delay(0.3)
      .from("#upper > span", {
        duration: 0.7,
        ease: "power4.out",
        skewX: 30,
        skewY: 60,
        stagger: 0.05,
        yPercent: 100,
      })
      .fromTo(
        "#border-horizontal",
        {
          opacity: 0,
          xPercent: -100,
          scaleX: 0,
        },
        {
          opacity: 1,
          xPercent: 0,
          scaleX: 1,
          ease: "elastic.out",
        }
      )
      .to("#border-horizontal", {
        bottom: 0,
        duration: 2,
        ease: "bounce.out",
      })
      .to(
        "#lower",
        {
          duration: 2,
          ease: "bounce.out",
          css: { "--y": "0%" },
        },
        "<"
      )
      .fromTo(
        "#border-vertical",
        {
          opacity: 0,
          yPercent: -100,
          scaleY: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          ease: "elastic.out",
        }
      );

    // .fromTo(
    //   "#border-vertical",
    //   {
    //     opacity: 0,
    //     yPercent: -100,
    //     scaleY: 0,
    //   },
    //   {
    //     opacity: 1,
    //     yPercent: 0,
    //     scaleY: 1,
    //   }
    // );

    /*.to("#lower", {
        opacity: 1,
        duration: 0,
        onComplete: () => {
          upper.classList.add("mask_upper");
          lower.classList.add("mask_lower");
        },
      })
      .to("#upper > span", {
        xPercent: -6,
      })
      .to(
        "#lower > span",
        {
          xPercent: 6,
        },
        "<"
      )
      .call(() => {})*/
  });
</script>

<h1
  id="title"
  class="text-[10rem] text-transparent grid mt-20 relative"
  style="--transparent-percentage: 50%;"
>
  <!-- Upper -->
  <div
    bind:this={upper}
    id="upper"
    class="relative h-[220px] flex"
    style="-webkit-text-stroke: 1px var(--text);"
  >
    <!-- Borders -->
    <div
      id="border-vertical"
      class="absolute h-full rounded-full w-2 bg-primary right-full top-[2rem] opacity-0"
    ></div>
    <div
      id="border-horizontal"
      class="absolute w-[calc(100%+4rem)] h-2 rounded-full bg-primary bottom-full left-[-2rem] opacity-0"
    ></div>
    {#each "Matěj Kotrba" as letter}
      {#if letter === " "}
        &nbsp;
      {:else}
        <span class="inline-block">{letter}</span>
      {/if}
    {/each}
  </div>
  <!-- Lower -->
  <div bind:this={lower} id="lower" class="h-[220px]" style="--y: 100%">
    {#each "Matěj Kotrba" as letter}
      {#if letter === " "}
        &nbsp;
      {:else}
        <span class="inline-block">{letter}</span>
      {/if}
    {/each}
  </div>
</h1>

<style>
  h1 {
    grid-template-columns: 1;
    grid-template-rows: 1;
    place-content: center;
  }
  h1 > * {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  #lower {
    color: var(--text);
    mask-image: linear-gradient(to top, transparent var(--y), black var(--y));
  }

  :global(.mask_upper) {
    mask-image: linear-gradient(
      3deg,
      transparent var(--transparent-percentage),
      black 50%
    );
  }

  :global(.mask_lower) {
    mask-image: linear-gradient(
      183deg,
      transparent var(--transparent-percentage),
      black 50%
    );
  }
</style>
