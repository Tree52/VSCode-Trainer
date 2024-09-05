<script lang="ts">
  import { enterPressed } from "$lib/refs.svelte";

  import UploadJSON from "./UploadJSON.svelte";
</script>

<header class="flex items-center justify-center">
  {#if !enterPressed.v}
    <UploadJSON />
  {/if}
</header>
