<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  let pathLine: SVGPathElement | null = null;

  function animate() {
    if (!pathLine) return;
    const length = pathLine.getTotalLength();
    pathLine.style.strokeDasharray = length + " " + length;
    gsap.fromTo(
      pathLine,
      {
        strokeDashoffset: length,
      },
      {
        strokeDashoffset: 0,
        delay: 0.5,
        duration: 3,
        ease: "power4.out",
      }
    );
  }

  onMount(() => {
    animate();
  });
</script>

<div class="grid__container">
  <svg viewBox="0 0 886 292" fill="none" preserveAspectRatio="xMaxYMid meet">
    <path
      class="resetted_path"
      bind:this={pathLine}
      d="M1 2.00002C80.5 45.8334 287.7 254.9 210.5 112.5C133.3 -29.9 706.833 142.333 884 290"
      stroke="white"
      stroke-width="4"
    />
  </svg>
  <!-- <svg viewBox="0 0 886 292" fill="none" preserveAspectRatio="xMaxYMid meet">
    <path
      class="resetted_path"
      bind:this={pathLine}
      d="M1 2.00002C80.5 45.8334 287.7 254.9 210.5 112.5C133.3 -29.9 706.833 142.333 884 290"
      stroke="white"
      stroke-width="4"
    />
  </svg> -->
</div>

<style>
  .resetted_path {
    stroke-dasharray: 0 1;
    stroke-dashoffset: 0;
  }
</style>
