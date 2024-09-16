type Shortcut = {
  combos: string[];
  commands: string[];
  list: string;
  src: string;
};

// Order is ctrl+shift+alt+(win/cmd/meta)
// Preferences: Open Default Keyboard Shortcuts (JSON)
// https://github.com/codebling/vs-code-default-keybindings
// #region Shortcuts
const cursorControl = new Map<string, Shortcut>([
  ["Go to Beginning of File", { combos: ["cmd+up", "ctrl+home"], commands: ["cursorTop"], list: "Cursor Control", src: "videos/cursorControl/cursorTop.mp4" }],
  ["Go to Beginning of Line", { combos: ["home"], commands: ["cursorHome"], list: "Cursor Control", src: "videos/cursorControl/cursorHome.mp4" }],
  ["Go to Beginning of Word", { combos: ["alt+left", "ctrl+left"], commands: ["cursorWordLeft"], list: "Cursor Control", src: "videos/cursorControl/cursorWordLeft.mp4" }],
  ["Go to Definition", { combos: ["cmd+f12", "f12", "ctrl+f12"], commands: ["editor.action.revealDefinition"], list: "Cursor Control", src: "videos/cursorControl/revealDefinition.mp4" }],
  ["Go to End of File", { combos: ["cmd+down", "ctrl+end"], commands: ["cursorBottom"], list: "Cursor Control", src: "videos/cursorControl/cursorBottom.mp4" }],
  ["Go to End of Line", { combos: ["end"], commands: ["cursorEnd"], list: "Cursor Control", src: "videos/cursorControl/cursorEnd.mp4" }],
  ["Go to End of Word", { combos: ["alt+right", "ctrl+right"], commands: ["cursorWordRight"], list: "Cursor Control", src: "videos/cursorControl/cursorWordRight.mp4" }],
  ["Go to File..., Quick Open", { combos: ["cmd+p", "ctrl+p", "ctrl+e"], commands: ["workbench.action.quickOpen"], list: "Cursor Control", src: "videos/cursorControl/quickOpen.mp4" }],
  ["Go to Line...", { combos: ["ctrl+g"], commands: ["workbench.action.gotoLine"], list: "Cursor Control", src: "videos/cursorControl/gotoLine.mp4" }],
  ["Go to Symbol...", { combos: ["shift+cmd+o", "ctrl+shift+o"], commands: ["workbench.action.gotoSymbol"], list: "Cursor Control", src: "videos/cursorControl/gotoSymbol.mp4" }],
  ["Insert Cursor Above", { combos: ["alt+cmd+up", "ctrl+alt+up", "shift+alt+up"], commands: ["editor.action.insertCursorAbove"], list: "Cursor Control", src: "videos/cursorControl/insertCursorAbove.mp4" }],
  ["Insert cursor at end of each line selected", { combos: ["shift+alt+i"], commands: ["editor.action.insertCursorAtEndOfEachLineSelected"], list: "Cursor Control", src: "videos/cursorControl/insertCursorAtEndOfEachLineSelected.mp4" }],
  ["Insert Cursor Below", { combos: ["alt+cmd+down", "ctrl+alt+down", "shift+alt+down"], commands: ["editor.action.insertCursorBelow"], list: "Cursor Control", src: "videos/cursorControl/insertLineBefore.mp4" }],
  ["Jump to matching bracket", { combos: ["shift+cmd+\\", "ctrl+shift+\\"], commands: ["editor.action.jumpToBracket"], list: "Cursor Control", src: "videos/cursorControl/jumpToBracket.mp4" }],
  ["Undo last cursor operation", { combos: ["cmd+u", "ctrl+u"], commands: ["cursorUndo"], list: "Cursor Control", src: "videos/cursorControl/cursorUndo.mp4" }],
]);

const editing = new Map<string, Shortcut>([
  ["Add Selection To Next Find Match", { combos: ["cmd+d", "ctrl+d"], commands: ["editor.action.addSelectionToNextFindMatch"], list: "Editing", src: "" }],
  ["Copy line (empty selection)", { combos: ["cmd+c", "ctrl+c"], commands: ["editor.action.clipboardCopyAction"], list: "Editing", src: "videos/editing/clipboardCopyAction.mp4" }],
  ["Copy Line Down", { combos: ["shift+alt+down", "ctrl+shift+alt+down"], commands: ["editor.action.copyLinesDownAction"], list: "Editing", src: "videos/editing/copyLinesDownAction.mp4" }],
  ["Copy Line Up", { combos: ["shift+alt+up", "ctrl+shift+alt+up"], commands: ["editor.action.copyLinesUpAction"], list: "Editing", src: "videos/editing/copyLinesUpAction.mp4" }],
  ["Cut line (empty selection)", { combos: ["cmd+x", "ctrl+x"], commands: ["editor.action.clipboardCutAction"], list: "Editing", src: "videos/editing/clipboardCutAction.mp4" }],
  ["Delete Left Word", { combos: ["alt+backspace", "ctrl+backspace"], commands: ["deleteWordLeft"], list: "Editing", src: "" }],
  ["Delete Line", { combos: ["shift+cmd+k", "ctrl+shift+k"], commands: ["editor.action.deleteLines"], list: "Editing", src: "videos/editing/deleteLines.mp4" }],
  ["Delete Right Word", { combos: ["alt+delete", "ctrl+delete"], commands: ["deleteWordRight"], list: "Editing", src: "" }],
  ["Find", { combos: ["cmd+f", "ctrl+f"], commands: ["actions.find"], list: "Editing", src: "" }],
  ["Indent Line", { combos: ["cmd+]", "ctrl+]"], commands: ["editor.action.indentLines"], list: "Editing", src: "videos/editing/indentLines.mp4" }],
  ["Insert Line Above", { combos: ["shift+cmd+enter", "ctrl+shift+enter"], commands: ["editor.action.insertLineBefore"], list: "Editing", src: "videos/editing/insertLineBefore.mp4" }],
  ["Insert Line Below", { combos: ["cmd+enter", "ctrl+enter"], commands: ["editor.action.insertLineAfter"], list: "Editing", src: "videos/editing/insertLineAfter.mp4" }],
  ["Move Last Selection To Next Find Match", { combos: ["cmd+k cmd+d", "ctrl+k ctrl+d"], commands: ["editor.action.moveSelectionToNextFindMatch"], list: "Editing", src: "" }],
  ["Move Line Down", { combos: ["alt+down"], commands: ["editor.action.moveLinesDownAction"], list: "Editing", src: "videos/editing/moveLinesDownAction.mp4" }],
  ["Move Line Up", { combos: ["alt+up"], commands: ["editor.action.moveLinesUpAction"], list: "Editing", src: "videos/editing/moveLinesUpAction.mp4" }],
  ["Outdent Line", { combos: ["cmd+[", "ctrl+[", "shift+tab"], commands: ["editor.action.outdentLines", "outdent"], list: "Editing", src: "videos/editing/outdentLines.mp4" }],
  ["Paste", { combos: ["cmd+v", "ctrl+v"], commands: ["editor.action.clipboardPasteAction"], list: "Editing", src: "" }],
  ["Redo", { combos: ["shift+cmd+z", "ctrl+y"], commands: ["redo"], list: "Editing", src: "" }],
  ["Rename Symbol", { combos: ["f2"], commands: ["editor.action.rename"], list: "Editing", src: "" }],
  ["Save All", { combos: ["alt+cmd+s", "ctrl+k s"], commands: ["saveAll"], list: "Editing", src: "" }],
  ["Save", { combos: ["cmd+s", "ctrl+s"], commands: ["workbench.action.files.save"], list: "Editing", src: "" }],
  ["Select all occurrences of current selection", { combos: ["shift+cmd+l", "ctrl+shift+l"], commands: ["editor.action.selectHighlights"], list: "Editing", src: "" }],
  ["Select All", { combos: ["cmd+a", "ctrl+a"], commands: ["editor.action.selectAll"], list: "Editing", src: "" }],
  ["Select current line", { combos: ["cmd+l", "ctrl+l"], commands: ["expandLineSelection"], list: "Editing", src: "" }],
  ["Toggle Block Comment", { combos: ["shift+alt+a", "ctrl+shift+a"], commands: ["editor.action.blockComment"], list: "Editing", src: "videos/editing/blockComment.mp4" }],
  ["Toggle Line Comment", { combos: ["cmd+/", "ctrl+/"], commands: ["editor.action.commentLine"], list: "Editing", src: "videos/editing/commentLine.mp4" }],
  ["Undo", { combos: ["cmd+z", "ctrl+z"], commands: ["undo"], list: "Editing", src: "" }],
]);

const environmentManagement = new Map<string, Shortcut>([
  ["Create New Terminal", { combos: ["ctrl+shift+`"], commands: ["workbench.action.terminal.new"], list: "Environment Management", src: "" }],
  ["Move Active Editor Group Left", { combos: ["cmd+k left", "ctrl+k left"], commands: ["workbench.action.moveActiveEditorGroupLeft"], list: "Environment Management", src: "" }],
  ["Move Active Editor Group Right", { combos: ["cmd+k right", "ctrl+k right"], commands: ["workbench.action.moveActiveEditorGroupRight"], list: "Environment Management", src: "" }],
  ["Move Editor into Next Group", { combos: ["ctrl+cmd+right", "ctrl+alt+right"], commands: ["workbench.action.moveEditorToNextGroup"], list: "Environment Management", src: "" }],
  ["Move Editor into Previous Group", { combos: ["ctrl+cmd+left", "ctrl+alt+left"], commands: ["workbench.action.moveEditorToPreviousGroup"], list: "Environment Management", src: "" }],
  ["New Window", { combos: ["shift+cmd+n", "ctrl+shift+n"], commands: ["workbench.action.newWindow"], list: "Environment Management", src: "" }],
  ["Open File...", { combos: ["cmd+o", "ctrl+o"], commands: ["workbench.action.files.openFile"], list: "Environment Management", src: "" }],
  ["Open Folder...", { combos: ["ctrl+k ctrl+o"], commands: ["workbench.action.files.openFolder"], list: "Environment Management", src: "" }],
  ["Quick Open View", { combos: ["ctrl+q"], commands: ["workbench.action.quickOpenView"], list: "Environment Management", src: "" }],
  ["Reopen Closed Editor", { combos: ["shift+cmd+t", "ctrl+shift+t"], commands: ["workbench.action.reopenClosedEditor"], list: "Environment Management", src: "" }],
  ["Scroll Line Down", { combos: ["ctrl+pagedown", "ctrl+down"], commands: ["scrollLineDown"], list: "Environment Management", src: "videos/environmentManagement/scrollLineDown.mp4" }],
  ["Scroll Line Up", { combos: ["ctrl+pageup", "ctrl+up"], commands: ["scrollLineUp"], list: "Environment Management", src: "videos/environmentManagement/scrollLineUp.mp4" }],
  ["Show or Focus Hover", { combos: ["cmd+k cmd+i", "ctrl+k ctrl+i"], commands: ["editor.action.showHover"], list: "Environment Management", src: "" }],
  ["Show Problems", { combos: ["shift+cmd+m", "ctrl+shift+m"], commands: ["workbench.actions.view.problems"], list: "Environment Management", src: "" }],
  ["Split Editor", { combos: ["cmd+\\", "ctrl+\\"], commands: ["workbench.action.splitEditor"], list: "Environment Management", src: "" }],
  ["Toggle Fold region", { combos: ["cmd+k cmd+l", "ctrl+k ctrl+l"], commands: ["editor.toggleFold"], list: "Environment Management", src: "" }],
  ["Toggle Integrated Terminal", { combos: ["ctrl+`"], commands: ["workbench.action.terminal.toggleTerminal"], list: "Environment Management", src: "" }],
  ["Toggle Markdown Preview", { combos: ["shift+cmd+v", "ctrl+shift+v"], commands: ["markdown.showPreview"], list: "Environment Management", src: "" }],
  ["Toggle Sidebar Visibility", { combos: ["cmd+b", "ctrl+b"], commands: ["workbench.action.toggleSidebarVisibility"], list: "Environment Management", src: "" }],
  ["Toggle Word Wrap", { combos: ["alt+z"], commands: ["editor.action.toggleWordWrap"], list: "Environment Management", src: "videos/environmentManagement/toggleWordWrap.mp4" }],
  ["Toggle Zen Mode", { combos: ["cmd+k z", "ctrl+k z"], commands: ["workbench.action.toggleZenMode"], list: "Environment Management", src: "" }],
  ["Trigger Suggest", { combos: ["ctrl+space"], commands: ["editor.action.triggerSuggest"], list: "Environment Management", src: "" }],
  ["Zoom in", { combos: ["cmd+=", "ctrl+="], commands: ["workbench.action.zoomIn"], list: "Environment Management", src: "" }],
  ["Zoom out", { combos: ["cmd+-", "ctrl+-"], commands: ["workbench.action.zoomOut"], list: "Environment Management", src: "" }],
]);
// #endregion

export const shortcuts = new Map<string, Shortcut>([...cursorControl, ...editing, ...environmentManagement]);
