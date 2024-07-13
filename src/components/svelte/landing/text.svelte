<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    tl.to(".cover", {
      scaleX: 0,
      duration: 6,
      stagger: 1,
      ease: "power4.out",
    });
  });
</script>

<section>
  <h1 class="text-h1 relative">
    <div class="cover"></div>
    <span class="text-text-darker">Hi, I am</span>
    <span>Matěj Kotrba</span>
  </h1>
  <h3 class="text-h3 mt-4">
    <div class="relative">
      <div class="cover"></div>
      <span class="text-text-darker">A</span>
      <span>Passionate Web Developer</span>
      <span class="text-text-darker">,</span>
    </div>
    <div class="relative">
      <div class="cover"></div>
      <span>University Student</span>
      <span class="text-text-darker">and a</span>
      <span>Seal Lover</span>
    </div>
  </h3>
</section>

<style>
  h3 {
    line-height: 1.2;
  }

  .cover {
    content: "";
    position: absolute;
    inset: 0;
    transform-origin: right;
    background-color: var(--background);
  }
</style>
