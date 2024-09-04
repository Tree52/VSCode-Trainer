import copyLineDown from "$lib/videos/copyLineDown.mp4";
import copyLineUp from "$lib/videos/copyLineUp.mp4";
import deleteLine from "$lib/videos/deleteLine.mp4";
import insertLineAbove from "$lib/videos/insertLineAbove.mp4";
import insertLineBelow from "$lib/videos/insertLineBelow.mp4";
import moveLineDown from "$lib/videos/moveLineDown.mp4";
import moveLineUp from "$lib/videos/moveLineUp.mp4";

export const tasks = {
  "Copy line down": { combos: [["Alt", "Shift", "ArrowDown"], ["Shift", "Alt", "ArrowDown"]], src: copyLineDown },
  "Copy line up": { combos: [["Alt", "Shift", "ArrowUp"], ["Shift", "Alt", "ArrowUp"]], src: copyLineUp },
  "Delete line": { combos: [["Control", "Shift", "K"], ["Shift", "Control", "K"]], src: deleteLine },
  "Insert line above": { combos: [["Control", "Shift", "Enter"], ["Shift", "Control", "Enter"]], src: insertLineAbove },
  "Insert line below": { combos: [["Control", "Enter"]], src: insertLineBelow },
  "Move line down": { combos: [["Alt", "ArrowDown"]], src: moveLineDown },
  "Move line up": { combos: [["Alt", "ArrowUp"]], src: moveLineUp },
};
