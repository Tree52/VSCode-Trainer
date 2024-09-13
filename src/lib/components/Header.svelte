<script lang="ts">
  import List from "$lib/components/List.svelte"; import UploadJSON from "$lib/components/UploadJSON.svelte";
  import { enterPressed } from "$lib/refs.svelte";
</script>

{#if !enterPressed.v}
  <UploadJSON />
  <header class="flex items-center justify-center">
    <List />
  </header>
{:else}
  <div class="absolute left-2">
    <button onclick={() => { enterPressed.v = false; }}>Back</button>
  </div>
{/if}
