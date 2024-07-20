<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  const backgroundEffectText = "EFFIO";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("#effio1", {
      translateX: "-100%",
    });

    gsap.set("#effio2", {
      translateX: "-100%",
    });

    gsap.set("#effio3", {
      translateX: "100%",
    });

    gsap.set("#effio4", {
      translateX: "100%",
    });

    const tl = gsap.timeline();

    tl.to("#effio1", {
      scrollTrigger: {
        trigger: "#effio1",
        start: "center center",
        end: "end top",
        scrub: 1,
      },
      translateX: 0,
    })
      .to("#effio2", {
        scrollTrigger: {
          trigger: "#effio2",
          start: "center center",
          end: "end top",
          scrub: 1,
        },
        translateX: 0,
      })
      .to("#effio3", {
        scrollTrigger: {
          trigger: "#effio3",
          start: "top bottom",
          end: "top bottom-=200px",
          scrub: 1,
        },
        translateX: 0,
      })
      .to("#effio4", {
        scrollTrigger: {
          trigger: "#effio4",
          start: "top bottom",
          end: "top bottom-=200px",
          scrub: 1,
        },
        translateX: 0,
      });
  });
</script>

<div class="relative py-[200px] grid place-content-center isolate">
  <div
    class="absolute text-landing-bg flex flex-col leading-[80%] items-center rotate-[20deg] opacity-5 -translate-x-1/2 left-1/2 select-none z-[-99]"
  >
    <span id="effio1">{backgroundEffectText}</span>
    <div class="flex">
      <span id="effio2">{backgroundEffectText}</span>
      <span id="effio3">{backgroundEffectText}</span>
    </div>
    <span id="effio4">{backgroundEffectText}</span>
  </div>
  <h3 class="text-landing text-center leading-[1]">Effio</h3>
  <p class="text-text-darker text-h3 leading-[1]">Online Test Creation Tool</p>
</div>
