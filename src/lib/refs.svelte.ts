import copyLineDown from "$lib/videos/copyLineDown.mp4";
import copyLineUp from "$lib/videos/copyLineUp.mp4";
import deleteLine from "$lib/videos/deleteLine.mp4";
// import fold from "$lib/videos/fold.mp4";
// import goToBracket from "$lib/videos/goToBracket.mp4";
import indentLine from "$lib/videos/indentLine.mp4";
import insertLineAbove from "$lib/videos/insertLineAbove.mp4";
import insertLineBelow from "$lib/videos/insertLineBelow.mp4";
import moveLineDown from "$lib/videos/moveLineDown.mp4";
import moveLineUp from "$lib/videos/moveLineUp.mp4";
import outdentLine from "$lib/videos/outdentLine.mp4";
import toggleWordWrap from "$lib/videos/toggleWordWrap.mp4";
// import unfold from "$lib/videos/unfold.mp4";

type Task = {
  combos: string[];
  command: string;
  src: string;
};

type Tasks = {
  [key: string]: Task;
};

const ref = <T>(initial: T) => {
  let v = $state(initial);
  const reset = () => (v = initial);

  return {
    reset,
    set v(value) { v = value; },
    get v() { return v; },
  };
};

// Order is ctrl+shift+alt+win
// Preferences: Open Default Keyboard Shortcuts (JSON)
export const tasks = ref<Tasks>({
  "Copy Line Down": { combos: ["shift+alt+down"], command: "editor.action.copyLinesDownAction", src: copyLineDown },
  "Copy Line Up": { combos: ["shift+alt+up"], command: "editor.action.copyLinesUpAction", src: copyLineUp },
  "Delete Line": { combos: ["ctrl+shift+k"], command: "editor.action.deleteLines", src: deleteLine },
  // "Fold": { combos: ["ctrl+shift+["], command: "editor.fold", src: fold },
  // "Go to Bracket": { combos: ["ctrl+shift+\\"], command: "editor.action.jumpToBracket", src: goToBracket },
  "Indent Line": { combos: ["ctrl+]"], command: "editor.action.indentLines", src: indentLine },
  "Insert Line Above": { combos: ["ctrl+shift+enter"], command: "editor.action.insertLineBefore", src: insertLineAbove },
  "Insert Line Below": { combos: ["ctrl+enter"], command: "editor.action.insertLineAfter", src: insertLineBelow },
  "Move Line Down": { combos: ["alt+down"], command: "editor.action.moveLinesDownAction", src: moveLineDown },
  "Move Line Up": { combos: ["alt+up"], command: "editor.action.moveLinesUpAction", src: moveLineUp },
  "Outdent Line": { combos: ["ctrl+[", "shift+tab"], command: "editor.action.outdentLines", src: outdentLine },
  // "Unfold": { combos: ["ctrl+shift+]"], command: "editor.unfold", src: unfold },
  "View: Toggle Word Wrap": { combos: ["alt+z"], command: "editor.action.toggleWordWrap", src: toggleWordWrap },
});

export const enterPressed = ref(false);
