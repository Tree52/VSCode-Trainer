<script lang="ts">
  import { selectedTaskList } from "$lib/refs.svelte";

  const taskLists = ["Basic Editing", "Rich Languages Editing", "Navigation", "Editor/Window Management", "File Management", "Display", "Search", "Search Editor", "Preferences", "Debug"];
</script>

<div>
  {#each taskLists as taskList}
    <input bind:group={selectedTaskList.v} class="hidden" id={taskList} name="algorithm" type="radio" value={taskList} />
    <label class="cursor-pointer bg-secondary-color px-2 py-1 transition-colors hover:bg-white hover:text-primary-color" for={taskList}>{taskList}</label>
  {/each}
</div>

<style>
  input[type="radio"]:checked + label {
    background-color: white;
    color: var(--primary-color);
  }
</style>
