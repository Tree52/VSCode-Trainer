import copyLineDown from "$lib/videos/copyLineDown.mp4";
import copyLineUp from "$lib/videos/copyLineUp.mp4";
import deleteLine from "$lib/videos/deleteLine.mp4";
import insertLineAbove from "$lib/videos/insertLineAbove.mp4";
import insertLineBelow from "$lib/videos/insertLineBelow.mp4";
import moveLineDown from "$lib/videos/moveLineDown.mp4";
import moveLineUp from "$lib/videos/moveLineUp.mp4";

// Order is ctrl+shift+alt+win
// Preferences: Open Default Keyboard Shortcuts (JSON)
export const tasks = {
  "Copy Line Down": { combos: ["shift+alt+down"], command: "editor.action.copyLinesDownAction", src: copyLineDown },
  "Copy Line Up": { combos: ["shift+alt+up"], command: "editor.action.copyLinesUpAction", src: copyLineUp },
  "Delete Line": { combos: ["ctrl+shift+k"], command: "editor.action.deleteLines", src: deleteLine },
  "Insert Line Above": { combos: ["ctrl+shift+enter"], command: "editor.action.insertLineBefore", src: insertLineAbove },
  "Insert Line Below": { combos: ["ctrl+enter"], command: "editor.action.insertLineAfter", src: insertLineBelow },
  "Move Line Down": { combos: ["alt+down"], command: "editor.action.moveLinesDownAction", src: moveLineDown },
  "Move Line Up": { combos: ["alt+up"], command: "editor.action.moveLinesUpAction", src: moveLineUp },
};
