type Task = {
  combos: string[];
  commands: string[];
  src: string;
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

// Order is ctrl+shift+alt+(win/cmd/meta)
// Preferences: Open Default Keyboard Shortcuts (JSON)
// https://github.com/codebling/vs-code-default-keybindings
export const tasks = ref(new Map([
  ["Add Line Comment / Toggle Comment", { combos: ["ctrl+k ctrl+c", "cmd+k cmd+c", "ctrl+/", "cmd+/"], commands: ["editor.action.addCommentLine", "editor.action.commentLine"], src: "videos/basicEditing/addLineComment.mp4" }],
  ["Copy Line Down", { combos: ["shift+alt+down", "ctrl+shift+alt+down"], commands: ["editor.action.copyLinesDownAction"], src: "videos/basicEditing/copyLinesDownAction.mp4" }],
  ["Copy Line Up", { combos: ["shift+alt+up", "ctrl+shift+alt+up"], commands: ["editor.action.copyLinesUpAction"], src: "videos/basicEditing/copyLinesUpAction.mp4" }],
  ["Delete Line", { combos: ["ctrl+shift+k", "shift+cmd+k"], commands: ["editor.action.deleteLines"], src: "videos/basicEditing/deleteLines.mp4" }],
  ["Fold", { combos: ["ctrl+shift+[", "alt+cmd+["], commands: ["editor.fold"], src: "videos/basicEditing/fold.mp4" }],
  ["Go to Bracket", { combos: ["ctrl+shift+\\", "shift+cmd+\\"], commands: ["editor.action.jumpToBracket"], src: "videos/basicEditing/jumpToBracket.mp4" }],
  ["Indent Line", { combos: ["ctrl+]", "cmd+]"], commands: ["editor.action.indentLines"], src: "videos/basicEditing/indentLines.mp4" }],
  ["Insert Line Above", { combos: ["ctrl+shift+enter", "shift+cmd+enter"], commands: ["editor.action.insertLineBefore"], src: "videos/basicEditing/insertLineBefore.mp4" }],
  ["Insert Line Below", { combos: ["ctrl+enter", "cmd+enter"], commands: ["editor.action.insertLineAfter"], src: "videos/basicEditing/insertLineAfter.mp4" }],
  ["Move Line Down", { combos: ["alt+down"], commands: ["editor.action.moveLinesDownAction"], src: "videos/basicEditing/moveLinesDownAction.mp4" }],
  ["Move Line Up", { combos: ["alt+up"], commands: ["editor.action.moveLinesUpAction"], src: "videos/basicEditing/moveLinesUpAction.mp4" }],
  ["Outdent Line / outdent", { combos: ["ctrl+[", "shift+tab", "cmd+["], commands: ["editor.action.outdentLines", "outdent"], src: "videos/basicEditing/outdentLines.mp4" }],
  ["Unfold", { combos: ["ctrl+shift+]", "alt+cmd+]"], commands: ["editor.unfold"], src: "videos/basicEditing/unfold.mp4" }],
  ["View: Toggle Word Wrap", { combos: ["alt+z"], commands: ["editor.action.toggleWordWrap"], src: "videos/basicEditing/toggleWordWrap.mp4" }],
]));

export const enterPressed = ref(false);
