<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.fromTo(
      "#main-nav",
      {
        y: -300,
      },
      {
        duration: 1,
        ease: "power2.out",
        y: 0,
      }
    );
  });
</script>

<nav id="main-nav" class="w-fit mx-auto relative h-16">
  <ul class="flex h-full">
    <li
      class="active bg-landing-bg rounded-l-full border border-secondary border-r-0 hover:border-primary duration-100"
    >
      <a href="#home" class="px-12 h-full grid items-center">
        <span class="relative">Home</span>
      </a>
    </li>
    <li class="line inline-block"></li>
    <li
      class="bg-landing-bg border border-secondary border-x-0 hover:border-primary duration-100"
    >
      <a href="#projects" class="px-12 h-full grid items-center">
        <span class="relative">Projects</span>
      </a>
    </li>
    <li class="line"></li>
    <li
      class="bg-landing-bg border border-secondary border-l-0 hover:border-primary duration-100"
    >
      <a href="#stack" class="px-12 h-full grid items-center">
        <span class="relative">Stack</span>
      </a>
    </li>
    <li class="line"></li>
    <li
      class="bg-landing-bg rounded-r-full border border-secondary border-l-0 hover:border-primary duration-100"
    >
      <a href="#hobbies" class="px-12 h-full grid items-center">
        <span class="relative">Hobbies</span>
      </a>
    </li>
  </ul>
</nav>

<style>
  .line {
    display: block;
    width: 2px;
    height: 100%;
    background-color: var(--secondary);
    transition: 100ms;
  }

  li:not(.line):hover + .line {
    background-color: var(--primary);
  }

  .line:has(+ li:not(.line):hover) {
    background-color: var(--primary);
  }

  .active a span::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
    box-shadow: 0px 3px 10px 1px var(--primary);
  }
</style>
