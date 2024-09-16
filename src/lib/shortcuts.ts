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
  ["Insert Cursor Below", { combos: ["alt+cmd+down", "ctrl+alt+down", "shift+alt+down"], commands: ["editor.action.insertCursorBelow"], list: "Cursor Control", src: "videos/cursorControl/insertCursorBelow.mp4" }],
  ["Jump to matching bracket", { combos: ["shift+cmd+\\", "ctrl+shift+\\"], commands: ["editor.action.jumpToBracket"], list: "Cursor Control", src: "videos/cursorControl/jumpToBracket.mp4" }],
  ["Undo last cursor operation", { combos: ["cmd+u", "ctrl+u"], commands: ["cursorUndo"], list: "Cursor Control", src: "videos/cursorControl/cursorUndo.mp4" }],
]);

const editing = new Map<string, Shortcut>([
  ["Add Selection To Next Find Match", { combos: ["cmd+d", "ctrl+d"], commands: ["editor.action.addSelectionToNextFindMatch"], list: "Editing", src: "videos/editing/addSelectionToNextFindMatch.mp4" }],
  ["Copy line (empty selection)", { combos: ["cmd+c", "ctrl+c"], commands: ["editor.action.clipboardCopyAction"], list: "Editing", src: "videos/editing/clipboardCopyAction.mp4" }],
  ["Copy Line Down", { combos: ["shift+alt+down", "ctrl+shift+alt+down"], commands: ["editor.action.copyLinesDownAction"], list: "Editing", src: "videos/editing/copyLinesDownAction.mp4" }],
  ["Copy Line Up", { combos: ["shift+alt+up", "ctrl+shift+alt+up"], commands: ["editor.action.copyLinesUpAction"], list: "Editing", src: "videos/editing/copyLinesUpAction.mp4" }],
  ["Cut line (empty selection)", { combos: ["cmd+x", "ctrl+x"], commands: ["editor.action.clipboardCutAction"], list: "Editing", src: "videos/editing/clipboardCutAction.mp4" }],
  ["Delete Left Word", { combos: ["alt+backspace", "ctrl+backspace"], commands: ["deleteWordLeft"], list: "Editing", src: "videos/editing/deleteWordLeft.mp4" }],
  ["Delete Line", { combos: ["shift+cmd+k", "ctrl+shift+k"], commands: ["editor.action.deleteLines"], list: "Editing", src: "videos/editing/deleteLines.mp4" }],
  ["Delete Right Word", { combos: ["alt+delete", "ctrl+delete"], commands: ["deleteWordRight"], list: "Editing", src: "videos/editing/deleteWordRight.mp4" }],
  ["Find", { combos: ["cmd+f", "ctrl+f"], commands: ["actions.find"], list: "Editing", src: "videos/editing/find.mp4" }],
  ["Indent Line", { combos: ["cmd+]", "ctrl+]"], commands: ["editor.action.indentLines"], list: "Editing", src: "videos/editing/indentLines.mp4" }],
  ["Insert Line Above", { combos: ["shift+cmd+enter", "ctrl+shift+enter"], commands: ["editor.action.insertLineBefore"], list: "Editing", src: "videos/editing/insertLineBefore.mp4" }],
  ["Insert Line Below", { combos: ["cmd+enter", "ctrl+enter"], commands: ["editor.action.insertLineAfter"], list: "Editing", src: "videos/editing/insertLineAfter.mp4" }],
  ["Move Last Selection To Next Find Match", { combos: ["cmd+k cmd+d", "ctrl+k ctrl+d"], commands: ["editor.action.moveSelectionToNextFindMatch"], list: "Editing", src: "videos/editing/moveSelectionToNextFindMatch.mp4" }],
  ["Move Line Down", { combos: ["alt+down"], commands: ["editor.action.moveLinesDownAction"], list: "Editing", src: "videos/editing/moveLinesDownAction.mp4" }],
  ["Move Line Up", { combos: ["alt+up"], commands: ["editor.action.moveLinesUpAction"], list: "Editing", src: "videos/editing/moveLinesUpAction.mp4" }],
  ["Outdent Line", { combos: ["cmd+[", "ctrl+[", "shift+tab"], commands: ["editor.action.outdentLines", "outdent"], list: "Editing", src: "videos/editing/outdentLines.mp4" }],
  ["Paste", { combos: ["cmd+v", "ctrl+v"], commands: ["editor.action.clipboardPasteAction"], list: "Editing", src: "videos/editing/clipboardPasteAction.mp4" }],
  ["Redo", { combos: ["shift+cmd+z", "ctrl+y"], commands: ["redo"], list: "Editing", src: "videos/editing/redo.mp4" }],
  ["Rename Symbol", { combos: ["f2"], commands: ["editor.action.rename"], list: "Editing", src: "videos/editing/rename.mp4" }],
  ["Save All", { combos: ["alt+cmd+s", "ctrl+k s"], commands: ["saveAll"], list: "Editing", src: "videos/editing/saveAll.mp4" }],
  ["Save", { combos: ["cmd+s", "ctrl+s"], commands: ["workbench.action.files.save"], list: "Editing", src: "videos/editing/save.mp4" }],
  ["Select all occurrences of current selection", { combos: ["shift+cmd+l", "ctrl+shift+l"], commands: ["editor.action.selectHighlights"], list: "Editing", src: "videos/editing/selectHighlights.mp4" }],
  ["Select All", { combos: ["cmd+a", "ctrl+a"], commands: ["editor.action.selectAll"], list: "Editing", src: "videos/editing/selectAll.mp4" }],
  ["Select current line", { combos: ["cmd+l", "ctrl+l"], commands: ["expandLineSelection"], list: "Editing", src: "videos/editing/expandLineSelection.mp4" }],
  ["Toggle Block Comment", { combos: ["shift+alt+a", "ctrl+shift+a"], commands: ["editor.action.blockComment"], list: "Editing", src: "videos/editing/blockComment.mp4" }],
  ["Toggle Line Comment", { combos: ["cmd+/", "ctrl+/"], commands: ["editor.action.commentLine"], list: "Editing", src: "videos/editing/commentLine.mp4" }],
  ["Undo", { combos: ["cmd+z", "ctrl+z"], commands: ["undo"], list: "Editing", src: "videos/editing/undo.mp4" }],
]);

const environmentManagement = new Map<string, Shortcut>([
  ["Create New Terminal", { combos: ["ctrl+shift+`"], commands: ["workbench.action.terminal.new"], list: "Environment Management", src: "videos/environmentManagement/new.mp4" }],
  ["Move Active Editor Group Left", { combos: ["cmd+k left", "ctrl+k left"], commands: ["workbench.action.moveActiveEditorGroupLeft"], list: "Environment Management", src: "videos/environmentManagement/moveActiveEditorGroupLeft.mp4" }],
  ["Move Active Editor Group Right", { combos: ["cmd+k right", "ctrl+k right"], commands: ["workbench.action.moveActiveEditorGroupRight"], list: "Environment Management", src: "videos/environmentManagement/moveActiveEditorGroupRight.mp4" }],
  ["Move Editor into Next Group", { combos: ["ctrl+cmd+right", "ctrl+alt+right"], commands: ["workbench.action.moveEditorToNextGroup"], list: "Environment Management", src: "videos/environmentManagement/moveEditorToNextGroup.mp4" }],
  ["Move Editor into Previous Group", { combos: ["ctrl+cmd+left", "ctrl+alt+left"], commands: ["workbench.action.moveEditorToPreviousGroup"], list: "Environment Management", src: "videos/environmentManagement/moveEditorToPreviousGroup.mp4" }],
  ["New Window", { combos: ["shift+cmd+n", "ctrl+shift+n"], commands: ["workbench.action.newWindow"], list: "Environment Management", src: "videos/environmentManagement/newWindow.mp4" }],
  ["Open File...", { combos: ["cmd+o", "ctrl+o"], commands: ["workbench.action.files.openFile"], list: "Environment Management", src: "videos/environmentManagement/openFile.mp4" }],
  ["Open Folder...", { combos: ["ctrl+k ctrl+o"], commands: ["workbench.action.files.openFolder"], list: "Environment Management", src: "videos/environmentManagement/openFolder.mp4" }],
  ["Quick Open View", { combos: ["ctrl+q"], commands: ["workbench.action.quickOpenView"], list: "Environment Management", src: "videos/environmentManagement/quickOpenView.mp4" }],
  ["Reopen Closed Editor", { combos: ["shift+cmd+t", "ctrl+shift+t"], commands: ["workbench.action.reopenClosedEditor"], list: "Environment Management", src: "videos/environmentManagement/reopenClosedEditor.mp4" }],
  ["Scroll Line Down", { combos: ["ctrl+pagedown", "ctrl+down"], commands: ["scrollLineDown"], list: "Environment Management", src: "videos/environmentManagement/scrollLineDown.mp4" }],
  ["Scroll Line Up", { combos: ["ctrl+pageup", "ctrl+up"], commands: ["scrollLineUp"], list: "Environment Management", src: "videos/environmentManagement/scrollLineUp.mp4" }],
  ["Show or Focus Hover", { combos: ["cmd+k cmd+i", "ctrl+k ctrl+i"], commands: ["editor.action.showHover"], list: "Environment Management", src: "videos/environmentManagement/showHover.mp4" }],
  ["Show Problems", { combos: ["shift+cmd+m", "ctrl+shift+m"], commands: ["workbench.actions.view.problems"], list: "Environment Management", src: "videos/environmentManagement/problems.mp4" }],
  ["Split Editor", { combos: ["cmd+\\", "ctrl+\\"], commands: ["workbench.action.splitEditor"], list: "Environment Management", src: "videos/environmentManagement/splitEditor.mp4" }],
  ["Toggle Fold region", { combos: ["cmd+k cmd+l", "ctrl+k ctrl+l"], commands: ["editor.toggleFold"], list: "Environment Management", src: "videos/environmentManagement/toggleFold.mp4" }],
  ["Toggle Integrated Terminal", { combos: ["ctrl+`"], commands: ["workbench.action.terminal.toggleTerminal"], list: "Environment Management", src: "videos/environmentManagement/toggleTerminal.mp4" }],
  ["Toggle Markdown Preview", { combos: ["shift+cmd+v", "ctrl+shift+v"], commands: ["markdown.showPreview"], list: "Environment Management", src: "videos/environmentManagement/showPreview.mp4" }],
  ["Toggle Sidebar Visibility", { combos: ["cmd+b", "ctrl+b"], commands: ["workbench.action.toggleSidebarVisibility"], list: "Environment Management", src: "videos/environmentManagement/toggleSidebarVisibility.mp4" }],
  ["Toggle Word Wrap", { combos: ["alt+z"], commands: ["editor.action.toggleWordWrap"], list: "Environment Management", src: "videos/environmentManagement/toggleWordWrap.mp4" }],
  ["Toggle Zen Mode", { combos: ["cmd+k z", "ctrl+k z"], commands: ["workbench.action.toggleZenMode"], list: "Environment Management", src: "videos/environmentManagement/toggleZenMode.mp4" }],
  ["Trigger Suggest", { combos: ["ctrl+space"], commands: ["editor.action.triggerSuggest"], list: "Environment Management", src: "videos/environmentManagement/triggerSuggest.mp4" }],
  ["Zoom in", { combos: ["cmd+=", "ctrl+="], commands: ["workbench.action.zoomIn"], list: "Environment Management", src: "videos/environmentManagement/zoomIn.mp4" }],
  ["Zoom out", { combos: ["cmd+-", "ctrl+-"], commands: ["workbench.action.zoomOut"], list: "Environment Management", src: "videos/environmentManagement/zoomOut.mp4" }],
]);
// #endregion

export const shortcuts = new Map<string, Shortcut>([...cursorControl, ...editing, ...environmentManagement]);
