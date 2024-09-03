<script lang="ts">
  import "../app.css";
  import { tasks } from "$lib/tasks";

  let heldKeys: string[] = $state([]);
  let isSolved = $derived(heldKeys.toString() === Object.values(tasks)[1].toString());

  const onkeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.repeat) return;
    heldKeys.push(e.key);
  }

  const onkeyup = (e: KeyboardEvent) => { heldKeys = heldKeys.filter(key => key !== e.key); }
</script>

<main class="flex flex-1 flex-col items-center justify-center">
  <div class="text-white">
    {#each heldKeys as key, i}
      {#if i === 0}
        {key}
      {:else}
        {" + " + key}
      {/if}
    {/each}
  </div>
  <div>
    {Object.keys(tasks)[1]}
  </div>
  <div>
    {isSolved}
  </div>
</main>

<svelte:window {onkeydown} {onkeyup} onblur={() => { heldKeys = []; }}></svelte:window>
