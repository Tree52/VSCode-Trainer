type Shortcut = {
  // Note: commands and not command because, for example, Outdent Line.
  commands: string[];
  linux: string[];
  list: string;
  mac: string[];
  src: string;
  win: string[];
};

// Order is ctrl+shift+alt+(win/cmd/meta)
// https://github.com/codebling/vs-code-default-keybindings
// #region Shortcuts
const cursorControl = new Map<string, Shortcut>([
  ["Go to Beginning of File", { commands: ["cursorTop"], linux: ["ctrl+home"], list: "Cursor Control", mac: ["cmd+up"], src: "videos/cursorControl/cursorTop.mp4", win: ["ctrl+home"] }],
  ["Go to Beginning of Line", { commands: ["cursorHome"], linux: ["home"], list: "Cursor Control", mac: ["cmd+left", "home"], src: "videos/cursorControl/cursorHome.mp4", win: ["home"] }],
  ["Go to Beginning of Word", { commands: ["cursorWordLeft"], linux: ["ctrl+left"], list: "Cursor Control", mac: ["alt+left"], src: "videos/cursorControl/cursorWordLeft.mp4", win: ["ctrl+left"] }],
  ["Go to Definition", { commands: ["editor.action.revealDefinition"], linux: ["f12", "ctrl+f12"], list: "Cursor Control", mac: ["cmd+f12", "f12"], src: "videos/cursorControl/revealDefinition.mp4", win: ["f12", "ctrl+f12"] }],
  ["Go to End of File", { commands: ["cursorBottom"], linux: ["ctrl+end"], list: "Cursor Control", mac: ["cmd+down"], src: "videos/cursorControl/cursorBottom.mp4", win: ["ctrl+end"] }],
  ["Go to End of Line", { commands: ["cursorEnd"], linux: ["end"], list: "Cursor Control", mac: ["cmd+right", "end"], src: "videos/cursorControl/cursorEnd.mp4", win: ["end"] }],
  ["Go to End of Word", { commands: ["cursorWordRight"], linux: ["ctrl+right"], list: "Cursor Control", mac: ["alt+right"], src: "videos/cursorControl/cursorWordRight.mp4", win: ["ctrl+right"] }],
  ["Go to File..., Quick Open", { commands: ["workbench.action.quickOpen"], linux: ["ctrl+p", "ctrl+e"], list: "Cursor Control", mac: ["cmd+p"], src: "videos/cursorControl/quickOpen.mp4", win: ["ctrl+p", "ctrl+e"] }],
  ["Go to Line...", { commands: ["workbench.action.gotoLine"], linux: ["ctrl+g"], list: "Cursor Control", mac: ["ctrl+g"], src: "videos/cursorControl/gotoLine.mp4", win: ["ctrl+g"] }],
  ["Go to Symbol...", { commands: ["workbench.action.gotoSymbol"], linux: ["ctrl+shift+o"], list: "Cursor Control", mac: ["shift+cmd+o"], src: "videos/cursorControl/gotoSymbol.mp4", win: ["ctrl+shift+o"] }],
  ["Insert Cursor Above", { commands: ["editor.action.insertCursorAbove"], linux: ["ctrl+shift+up", "shift+alt+up"], list: "Cursor Control", mac: ["alt+cmd+up"], src: "videos/cursorControl/insertCursorAbove.mp4", win: ["ctrl+alt+up"] }],
  ["Insert cursor at end of each line selected", { commands: ["editor.action.insertCursorAtEndOfEachLineSelected"], linux: ["shift+alt+i"], list: "Cursor Control", mac: ["shift+alt+i"], src: "videos/cursorControl/insertCursorAtEndOfEachLineSelected.mp4", win: ["shift+alt+i"] }],
  ["Insert Cursor Below", { commands: ["editor.action.insertCursorBelow"], linux: ["ctrl+shift+down", "shift+alt+down"], list: "Cursor Control", mac: ["alt+cmd+down"], src: "videos/cursorControl/insertCursorBelow.mp4", win: ["ctrl+alt+down"] }],
  ["Jump to matching bracket", { commands: ["editor.action.jumpToBracket"], linux: ["ctrl+shift+\\"], list: "Cursor Control", mac: ["shift+cmd+\\"], src: "videos/cursorControl/jumpToBracket.mp4", win: ["ctrl+shift+\\"] }],
  ["Undo last cursor operation", { commands: ["cursorUndo"], linux: ["ctrl+u"], list: "Cursor Control", mac: ["cmd+u"], src: "videos/cursorControl/cursorUndo.mp4", win: ["ctrl+u"] }],
]);

const editing = new Map<string, Shortcut>([
  ["Add Selection To Next Find Match", { commands: ["editor.action.addSelectionToNextFindMatch"], linux: ["ctrl+d"], list: "Editing", mac: ["cmd+d"], src: "videos/editing/addSelectionToNextFindMatch.mp4", win: ["ctrl+d"] }],
  ["Copy line (empty selection)", { commands: ["editor.action.clipboardCopyAction"], linux: ["ctrl+c"], list: "Editing", mac: ["cmd+c"], src: "videos/editing/clipboardCopyAction.mp4", win: ["ctrl+c", "ctrl+insert"] }],
  ["Copy Line Down", { commands: ["editor.action.copyLinesDownAction"], linux: ["ctrl+shift+alt+down"], list: "Editing", mac: ["shift+alt+down"], src: "videos/editing/copyLinesDownAction.mp4", win: ["shift+alt+down"] }],
  ["Copy Line Up", { commands: ["editor.action.copyLinesUpAction"], linux: ["ctrl+shift+alt+up"], list: "Editing", mac: ["shift+alt+up"], src: "videos/editing/copyLinesUpAction.mp4", win: ["shift+alt+up"] }],
  ["Cut line (empty selection)", { commands: ["editor.action.clipboardCutAction"], linux: ["ctrl+x"], list: "Editing", mac: ["cmd+x"], src: "videos/editing/clipboardCutAction.mp4", win: ["ctrl+x", "shift+delete"] }],
  ["Delete Left Word", { commands: ["deleteWordLeft"], linux: ["ctrl+backspace"], list: "Editing", mac: ["alt+backspace"], src: "videos/editing/deleteWordLeft.mp4", win: ["ctrl+backspace"] }],
  ["Delete Line", { commands: ["editor.action.deleteLines"], linux: ["ctrl+shift+k"], list: "Editing", mac: ["shift+cmd+k"], src: "videos/editing/deleteLines.mp4", win: ["ctrl+shift+k"] }],
  ["Delete Right Word", { commands: ["deleteWordRight"], linux: ["ctrl+delete"], list: "Editing", mac: ["alt+delete"], src: "videos/editing/deleteWordRight.mp4", win: ["ctrl+delete"] }],
  ["Find", { commands: ["actions.find"], linux: ["ctrl+f"], list: "Editing", mac: ["cmd+f"], src: "videos/editing/find.mp4", win: ["ctrl+f"] }],
  ["Indent Line", { commands: ["editor.action.indentLines"], linux: ["ctrl+]"], list: "Editing", mac: ["cmd+]"], src: "videos/editing/indentLines.mp4", win: ["ctrl+]"] }],
  ["Insert Line Above", { commands: ["editor.action.insertLineBefore"], linux: ["ctrl+shift+enter"], list: "Editing", mac: ["shift+cmd+enter"], src: "videos/editing/insertLineBefore.mp4", win: ["ctrl+shift+enter"] }],
  ["Insert Line Below", { commands: ["editor.action.insertLineAfter"], linux: ["ctrl+enter"], list: "Editing", mac: ["cmd+enter"], src: "videos/editing/insertLineAfter.mp4", win: ["ctrl+enter"] }],
  ["Move Last Selection To Next Find Match", { commands: ["editor.action.moveSelectionToNextFindMatch"], linux: ["ctrl+k ctrl+d"], list: "Editing", mac: ["cmd+k cmd+d"], src: "videos/editing/moveSelectionToNextFindMatch.mp4", win: ["ctrl+k ctrl+d"] }],
  ["Move Line Down", { commands: ["editor.action.moveLinesDownAction"], linux: ["alt+down"], list: "Editing", mac: ["alt+down"], src: "videos/editing/moveLinesDownAction.mp4", win: ["alt+down"] }],
  ["Move Line Up", { commands: ["editor.action.moveLinesUpAction"], linux: ["alt+up"], list: "Editing", mac: ["alt+up"], src: "videos/editing/moveLinesUpAction.mp4", win: ["alt+up"] }],
  ["Outdent Line", { commands: ["editor.action.outdentLines", "outdent"], linux: ["ctrl+[", "shift+tab"], list: "Editing", mac: ["cmd+[", "shift+tab"], src: "videos/editing/outdentLines.mp4", win: ["ctrl+[", "shift+tab"] }],
  ["Paste", { commands: ["editor.action.clipboardPasteAction"], linux: ["ctrl+v", "shift+insert"], list: "Editing", mac: ["cmd+v"], src: "videos/editing/clipboardPasteAction.mp4", win: ["ctrl+v", "shift+insert"] }],
  ["Redo", { commands: ["redo"], linux: ["ctrl+y", "ctrl+shift+z"], list: "Editing", mac: ["shift+cmd+z"], src: "videos/editing/redo.mp4", win: ["ctrl+y", "ctrl+shift+z"] }],
  ["Rename Symbol", { commands: ["editor.action.rename"], linux: ["f2"], list: "Editing", mac: ["f2"], src: "videos/editing/rename.mp4", win: ["f2"] }],
  ["Save", { commands: ["workbench.action.files.save"], linux: ["ctrl+s"], list: "Editing", mac: ["cmd+s"], src: "videos/editing/save.mp4", win: ["ctrl+s"] }],
  ["Select All", { commands: ["editor.action.selectAll"], linux: ["ctrl+a"], list: "Editing", mac: ["cmd+a"], src: "videos/editing/selectAll.mp4", win: ["ctrl+a"] }],
  ["Select all occurrences of current selection", { commands: ["editor.action.selectHighlights"], linux: ["ctrl+shift+l"], list: "Editing", mac: ["shift+cmd+l"], src: "videos/editing/selectHighlights.mp4", win: ["ctrl+shift+l"] }],
  ["Select current line", { commands: ["expandLineSelection"], linux: ["ctrl+l"], list: "Editing", mac: ["cmd+l"], src: "videos/editing/expandLineSelection.mp4", win: ["ctrl+l"] }],
  ["Toggle Block Comment", { commands: ["editor.action.blockComment"], linux: ["ctrl+shift+a"], list: "Editing", mac: ["shift+alt+a"], src: "videos/editing/blockComment.mp4", win: ["shift+alt+a"] }],
  ["Toggle Line Comment", { commands: ["editor.action.commentLine"], linux: ["ctrl+/"], list: "Editing", mac: ["cmd+/"], src: "videos/editing/commentLine.mp4", win: ["ctrl+/"] }],
  ["Undo", { commands: ["undo"], linux: ["ctrl+z"], list: "Editing", mac: ["cmd+z"], src: "videos/editing/undo.mp4", win: ["ctrl+z"] }],
]);

const environmentManagement = new Map<string, Shortcut>([
  ["Create New Terminal", { commands: ["workbench.action.terminal.new"], linux: ["ctrl+shift+`"], list: "Environment Management", mac: ["ctrl+shift+`"], src: "videos/environmentManagement/new.mp4", win: ["ctrl+shift+`"] }],
  ["Move Active Editor Group Left", { commands: ["workbench.action.moveActiveEditorGroupLeft"], linux: ["ctrl+k left"], list: "Environment Management", mac: ["cmd+k left"], src: "videos/environmentManagement/moveActiveEditorGroupLeft.mp4", win: ["ctrl+k left"] }],
  ["Move Active Editor Group Right", { commands: ["workbench.action.moveActiveEditorGroupRight"], linux: ["ctrl+k right"], list: "Environment Management", mac: ["cmd+k right"], src: "videos/environmentManagement/moveActiveEditorGroupRight.mp4", win: ["ctrl+k right"] }],
  ["Move Editor into Next Group", { commands: ["workbench.action.moveEditorToNextGroup"], linux: ["ctrl+alt+right"], list: "Environment Management", mac: ["ctrl+cmd+right"], src: "videos/environmentManagement/moveEditorToNextGroup.mp4", win: ["ctrl+alt+right"] }],
  ["Move Editor into Previous Group", { commands: ["workbench.action.moveEditorToPreviousGroup"], linux: ["ctrl+alt+left"], list: "Environment Management", mac: ["ctrl+cmd+left"], src: "videos/environmentManagement/moveEditorToPreviousGroup.mp4", win: ["ctrl+alt+left"] }],
  ["New Window", { commands: ["workbench.action.newWindow"], linux: ["ctrl+shift+n"], list: "Environment Management", mac: ["shift+cmd+n"], src: "videos/environmentManagement/newWindow.mp4", win: ["ctrl+shift+n"] }],
  ["Open File...", { commands: ["workbench.action.files.openFile"], linux: ["ctrl+o"], list: "Environment Management", mac: ["cmd+o"], src: "videos/environmentManagement/openFile.mp4", win: ["ctrl+o"] }],
  ["Reopen Closed Editor", { commands: ["workbench.action.reopenClosedEditor"], linux: ["ctrl+shift+t"], list: "Environment Management", mac: ["shift+cmd+t"], src: "videos/environmentManagement/reopenClosedEditor.mp4", win: ["ctrl+shift+t"] }],
  ["Scroll Line Down", { commands: ["scrollLineDown"], linux: ["ctrl+down"], list: "Environment Management", mac: ["ctrl+pagedown"], src: "videos/environmentManagement/scrollLineDown.mp4", win: ["ctrl+down"] }],
  ["Scroll Line Up", { commands: ["scrollLineUp"], linux: ["ctrl+up"], list: "Environment Management", mac: ["ctrl+pageup"], src: "videos/environmentManagement/scrollLineUp.mp4", win: ["ctrl+up"] }],
  ["Show or Focus Hover", { commands: ["editor.action.showHover"], linux: ["ctrl+k ctrl+i"], list: "Environment Management", mac: ["cmd+k cmd+i"], src: "videos/environmentManagement/showHover.mp4", win: ["ctrl+k ctrl+i"] }],
  ["Show Problems", { commands: ["workbench.actions.view.problems"], linux: ["ctrl+shift+m"], list: "Environment Management", mac: ["shift+cmd+m"], src: "videos/environmentManagement/problems.mp4", win: ["ctrl+shift+m"] }],
  ["Split Editor", { commands: ["workbench.action.splitEditor"], linux: ["ctrl+\\"], list: "Environment Management", mac: ["cmd+\\"], src: "videos/environmentManagement/splitEditor.mp4", win: ["ctrl+\\"] }],
  ["Toggle Fold region", { commands: ["editor.toggleFold"], linux: ["ctrl+k ctrl+l"], list: "Environment Management", mac: ["cmd+k cmd+l"], src: "videos/environmentManagement/toggleFold.mp4", win: ["ctrl+k ctrl+l"] }],
  ["Toggle Integrated Terminal", { commands: ["workbench.action.terminal.toggleTerminal"], linux: ["ctrl+`"], list: "Environment Management", mac: ["ctrl+`"], src: "videos/environmentManagement/toggleTerminal.mp4", win: ["ctrl+`"] }],
  ["Toggle Markdown Preview", { commands: ["markdown.showPreview"], linux: ["ctrl+shift+v"], list: "Environment Management", mac: ["shift+cmd+v"], src: "videos/environmentManagement/showPreview.mp4", win: ["ctrl+shift+v"] }],
  ["Toggle Sidebar Visibility", { commands: ["workbench.action.toggleSidebarVisibility"], linux: ["ctrl+b"], list: "Environment Management", mac: ["cmd+b"], src: "videos/environmentManagement/toggleSidebarVisibility.mp4", win: ["ctrl+b"] }],
  ["Toggle Word Wrap", { commands: ["editor.action.toggleWordWrap"], linux: ["alt+z"], list: "Environment Management", mac: ["alt+z"], src: "videos/environmentManagement/toggleWordWrap.mp4", win: ["alt+z"] }],
  ["Toggle Zen Mode", { commands: ["workbench.action.toggleZenMode"], linux: ["ctrl+k z"], list: "Environment Management", mac: ["cmd+k z"], src: "videos/environmentManagement/toggleZenMode.mp4", win: ["ctrl+k z"] }],
  ["Trigger Suggest", { commands: ["editor.action.triggerSuggest"], linux: ["ctrl+space", "ctrl+i"], list: "Environment Management", mac: ["ctrl+space", "cmd+i", "alt+escape"], src: "videos/environmentManagement/triggerSuggest.mp4", win: ["ctrl+space", "ctrl+i"] }],
  ["Zoom in", { commands: ["workbench.action.zoomIn"], linux: ["ctrl+=", "ctrl+numpad_add", "ctrl+shift+="], list: "Environment Management", mac: ["cmd+=", "cmd+numpad_add", "shift+cmd+="], src: "videos/environmentManagement/zoomIn.mp4", win: ["ctrl+=", "ctrl+numpad_add", "ctrl+shift+="] }],
  ["Zoom out", { commands: ["workbench.action.zoomOut"], linux: ["ctrl+-", "ctrl+numpad_subtract"], list: "Environment Management", mac: ["cmd+-", "cmd+numpad_subtract", "shift+cmd+-"], src: "videos/environmentManagement/zoomOut.mp4", win: ["ctrl+-", "ctrl+numpad_subtract", "ctrl+shift+-"] }],
]);
// #endregion

export const shortcuts = new Map<string, Shortcut>([...cursorControl, ...editing, ...environmentManagement]);
