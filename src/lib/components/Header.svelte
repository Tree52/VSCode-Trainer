<script lang="ts">
  import List from "$lib/components/List.svelte"; import UploadJSON from "$lib/components/UploadJSON.svelte";
  import { enterPressed, isRandomized } from "$lib/refs.svelte";
</script>

{#if !enterPressed.v}
  <UploadJSON />
  <header class="flex flex-col items-center justify-center gap-1">
    <List />
    <div>
      <label for="randomized">Randomized:</label>
      <input bind:checked={isRandomized.v} id="randomized" type="checkbox">
    </div>
</header>
{:else}
  <div class="absolute left-2">
    <button onclick={() => { enterPressed.v = false; }}>Back</button>
  </div>
{/if}
