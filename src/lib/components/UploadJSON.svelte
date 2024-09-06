<script lang="ts">
  import { tasks } from "$lib/refs.svelte";

  function search2DArray(array: string[][], target: string): [number, number] | null {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array[row].length; col++) {
        if (array[row][col] === target) return [row, col];
      }
    }

    return null;
  }

  let files: FileList | undefined = $state();

  const onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          // Remove single-line and multi-line comments
          const fileContent = (reader.result as string).replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//gm, "");

          let keyBindings: { command: string; key: string }[] = JSON.parse(fileContent);

          const keys = Object.keys(tasks.v);
          const commands = Object.values(tasks.v).map(task => task.commands);
          for (let i = 0; i < keyBindings.length; i++) {
            const location = search2DArray(commands, keyBindings[i].command);
            if (location !== null) tasks.v[keys[location[0]]].combos.push(keyBindings[i].key);
          }

          alert("Custom keybindings added.");
        }
        catch (error) {
          console.log(error);
          alert("It didn't work, sorry. Check console.");
        }
      };

      reader.readAsText(file);
    }
  };
</script>

<div class="p-2">
  <label class="cursor-pointer" for="file-upload">Upload keybindings.json</label>
  <input accept=".json" bind:files class="hidden" id="file-upload" {onchange} type="file" />
</div>
