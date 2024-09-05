<script lang="ts">
  import { tasks } from "$lib/refs.svelte";

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
          const commands = Object.values(tasks.v).map(task => task.command);
          for (let i = 0; i < keyBindings.length; i++) {
            const indexOf = commands.indexOf(keyBindings[i].command);
            if (indexOf !== -1) tasks.v[keys[indexOf]].combos.push(keyBindings[i].key);
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
