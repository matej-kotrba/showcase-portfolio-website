<section class="w-fit">
  <div class="text-center">
    <span class="text-primary text-h1">"</span>
    <span class="text-h3">I use Svelte BTW</span>
    <span class="text-primary text-h1">"</span>
  </div>
  <div class="relative w-fit isolate image__container">
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
