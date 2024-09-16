<script lang="ts">
  import { browser } from "$app/environment";
  import { codeToKey } from "$lib/codeToKey";
  import Header from "$lib/components/Header.svelte";
  import { enterPressed, isRandomized, selectedTaskList } from "$lib/refs.svelte";
  import { shortcuts } from "$lib/shortcuts";

  import "../app.css";

  // #region Utils
  const getRandomIntInclusive = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const isModifierKey = (code: string) => {
    const modifierKeys = ["ControlLeft", "ControlRight", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight"];
    return modifierKeys.includes(code);
  };

  const getOS = () => {
    if (browser) {
      const userAgent = window.navigator.userAgent;

      if (/Windows/i.test(userAgent)) return "Windows";
      else if (/Mac/i.test(userAgent)) return "macOS";
      else if (/Linux/i.test(userAgent)) return "Linux";
      // else if (/Android/i.test(userAgent)) return "Android";
      // else if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    }
  };
  // #endregion

  const os = getOS();

  let numNonModifierKeysPressed = 0;
  let randomTaskIndex = $state(0);
  let isLoading = $state(false);
  let result = $state("");
  let heldKeys = [""];
  let time = 0;

  const filteredEntries = $derived([...shortcuts.entries()].filter(([, value]) => value.list === selectedTaskList.v));
  const values = $derived(filteredEntries.map(([, value]) => value));
  const keys = $derived(filteredEntries.map(([key]) => key));

  const randomTask = $derived({ combos: values[randomTaskIndex].combos, key: keys[randomTaskIndex], src: values[randomTaskIndex].src });
  const isSolved = $derived(randomTask.combos.includes(result));

  const styleHeldKeys = (code: string) => {
    const _result: string[] = [];

    if (heldKeys.includes("ControlLeft") || heldKeys.includes("ControlRight")) _result.push("ctrl");
    if (heldKeys.includes("ShiftLeft") || heldKeys.includes("ShiftRight")) _result.push("shift");
    if (heldKeys.includes("AltLeft") || heldKeys.includes("AltRight")) _result.push("alt");
    if (heldKeys.includes("MetaLeft") || heldKeys.includes("MetaRight")) {
      switch (os) {
        case "Linux": _result.push("meta"); break;
        case "macOS": _result.push("cmd"); break;
        case "Windows": _result.push("win"); break;
      }
    }
    if (!isModifierKey(code)) _result.push(codeToKey.get(code)!);

    return _result.join("+");
  };

  const reset = () => {
    numNonModifierKeysPressed = 0;
    heldKeys = [];
    result = "";
  };

  const onkeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.repeat) return;

    clearTimeout(time);
    time = setTimeout(reset, 500);

    if (!isModifierKey(e.code)) numNonModifierKeysPressed++;
    if (e.code === "Enter") enterPressed.v = true;

    heldKeys.push(e.code);

    if (numNonModifierKeysPressed < 2) result = styleHeldKeys(e.code);
    else if (numNonModifierKeysPressed === 2) result = result + " " + styleHeldKeys(e.code);
  };

  const onkeyup = (e: KeyboardEvent) => { heldKeys = heldKeys.filter(code => code !== e.code); };

  const onSolved = () => {
    reset();
    if (isRandomized.v) {
      const currentTaskIndex = randomTaskIndex;
      while (currentTaskIndex === randomTaskIndex) randomTaskIndex = getRandomIntInclusive(0, filteredEntries.length - 1);
    }
    else {
      randomTaskIndex === filteredEntries.length - 1 ? randomTaskIndex = 0 : randomTaskIndex++;
    }
  };

  // Need this b/c otherwise "Uncaught TypeError: $.get(...)[$.get(...)] is undefined"
  // when switching from a big list to a small list and randomTaskIndex is out of bounds.
  $effect(() => { if (!enterPressed.v) randomTaskIndex = 0; });

  $effect(() => { if (isSolved) onSolved(); });
</script>

<Header />

<div class="absolute right-0 top-0 scale-50">
  <a href="https://github.com/Tree52/VSCode-Trainer">
    <svg height="96" width="98" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" fill-rule="evenodd"/>
    </svg>
  </a>
</div>

<main class="flex flex-1 flex-col items-center justify-center gap-2">
  {#if !enterPressed.v}
    <button class="border-2 border-white px-2 py-1 text-3xl font-bold" onclick={() => { enterPressed.v = true; }}>Enter</button>
  {:else}
    <div>{result}</div>
    <div>{randomTask.key}</div>
    <video autoplay class="w-1/2" class:isLoading loop muted oncanplay={() => { isLoading = false; }} onloadstart={() => { isLoading = true; }} src={randomTask.src}></video>
    {#if isLoading}
      <div class="spinner"></div>
    {/if}
    <div class="bg-white hover:bg-primary-color">{randomTask.combos.map(combo => `"${combo}"`).join(" ")}</div>
    <button onclick={onSolved}>Skip</button>
  {/if}
</main>

<svelte:head>
  <title>VSCode Trainer</title>
</svelte:head>

<svelte:window onblur={() => { heldKeys = []; }} {onkeydown} {onkeyup}></svelte:window>

<style>
  .isLoading {
    display: none;
  }

  .spinner {
    width: 56px;
    height: 56px;
    border: 11.2px #ffffff double;
    border-left-style: solid;
    border-radius: 50%;
    animation: spinner-aib1d7 0.75s infinite linear;
  }

  @keyframes spinner-aib1d7 {
    to {
      transform: rotate(360deg);
    }
  }
</style>
