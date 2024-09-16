<script lang="ts">
  import { selectedTaskList } from "$lib/refs.svelte";

  const taskLists = ["Cursor Control", "Editing", "Environment Management"];
</script>

<div>
  {#each taskLists as taskList}
    <input bind:group={selectedTaskList.v} class="fixed opacity-0 pointer-events-none" id={taskList} name="algorithm" type="radio" value={taskList} />
    <label class="cursor-pointer bg-secondary-color px-2 py-1 transition-colors hover:bg-white hover:text-primary-color" for={taskList}>{taskList}</label>
  {/each}
</div>

<style>
  input[type="radio"]:checked + label {
    background-color: white;
    color: var(--primary-color);
  }
</style>
