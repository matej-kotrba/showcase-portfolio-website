<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".image__container",
      {
        y: -500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    )
      .fromTo(
        ".quote > .text-h1",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        }
      )
      .to(".quote > .text-h1:first-of-type", {
        duration: 1,
        ease: "power4.out",
        right: "100%",
      })
      .to(
        ".quote > .text-h1:last-of-type",
        {
          duration: 1,
          ease: "power4.out",
          left: "100%",
        },
        "<"
      )
      .to(".quote > .text-h3", {
        duration: 1,
        ease: "power4.out",
        opacity: 1,
      });
  });
</script>

<section class="w-fit">
  <div class="text-center quote relative w-fit mx-auto">
    <span class="text-primary text-h1 absolute right-1/2 bottom-0 opacity-0"
      >"</span
    >
    <span class="text-h3 text-nowrap inline-block opacity-0"
      >I use Svelte BTW</span
    >
    <span class="text-primary text-h1 absolute left-1/2 bottom-0 opacity-0"
      >"</span
    >
  </div>
  <div class="relative w-fit isolate image__container opacity-0">
    <img
      src="landing/misc/seal-cropped.png"
      alt="Seal portrait"
      class="w-[470px]"
    />
  </div>
</section>

<style>
  .image__container::before {
    content: "";
    position: absolute;
    outline: 4px var(--primary) solid;
    border-radius: 4px;
    width: 100%;
    aspect-ratio: 10/9;
    bottom: 0;
    left: 0;
    z-index: -99;
  }
</style>
