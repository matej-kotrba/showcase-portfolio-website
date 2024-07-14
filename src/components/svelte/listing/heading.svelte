<script lang="ts">
  export let number: number;
  export let title: string;
</script>

<p class="text-8xl">
  <span class="inline-flex">
    {#if number.toString().length === 1}
      <span class="stroked">0</span>
      <span class="">{number}</span>
    {:else}
      <span>{number}</span>
    {/if}
  </span>
  <span class="text-h1">
    {title}
  </span>
</p>

<style>
  .stroked {
    -webkit-text-stroke: 2px var(--text-darker);
    color: transparent;
  }
</style>
