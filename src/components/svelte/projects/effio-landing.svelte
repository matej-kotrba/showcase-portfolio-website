<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  const backgroundEffectText = "EFFIO";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
</script>

<div
  class="relative py-[200px] grid place-content-center border border-red-400"
>
  <div
    class="absolute text-landing-bg flex flex-col leading-[80%] items-center rotate-[20deg] opacity-5 -translate-x-1/2 left-1/2"
  >
    <span>{backgroundEffectText}</span>
    <div class="flex">
      <span>{backgroundEffectText}</span>
      <span>{backgroundEffectText}</span>
    </div>
    <span>{backgroundEffectText}</span>
  </div>
  <h3 class="text-landing text-center leading-[1]">Effio</h3>
  <p class="text-text-darker text-h3 leading-[1]">Online Test Creation Tool</p>
</div>
