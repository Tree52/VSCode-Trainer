type Task = {
  combos: string[];
  commands: string[];
  list: string;
  src: string;
};

// Order is ctrl+shift+alt+(win/cmd/meta)
// Preferences: Open Default Keyboard Shortcuts (JSON)
// https://github.com/codebling/vs-code-default-keybindings
// #region shortcuts
const basicEditing = new Map<string, Task>([
  ["Add Selection To Next Find Match", { combos: ["cmd+d", "ctrl+d"], commands: ["editor.action.addSelectionToNextFindMatch"], list: "Basic Editing", src: "" }],
  ["Copy line (empty selection)", { combos: ["cmd+c", "ctrl+c"], commands: ["editor.action.clipboardCopyAction"], list: "Basic Editing", src: "videos/basicEditing/clipboardCopyAction.mp4" }],
  ["Copy Line Down", { combos: ["shift+alt+down", "ctrl+shift+alt+down"], commands: ["editor.action.copyLinesDownAction"], list: "Basic Editing", src: "videos/basicEditing/copyLinesDownAction.mp4" }],
  ["Copy Line Up", { combos: ["shift+alt+up", "ctrl+shift+alt+up"], commands: ["editor.action.copyLinesUpAction"], list: "Basic Editing", src: "videos/basicEditing/copyLinesUpAction.mp4" }],
  ["Cut line (empty selection)", { combos: ["cmd+x", "ctrl+x"], commands: ["editor.action.clipboardCutAction"], list: "Basic Editing", src: "videos/basicEditing/clipboardCutAction.mp4" }],
  ["Delete Line", { combos: ["shift+cmd+k", "ctrl+shift+k"], commands: ["editor.action.deleteLines"], list: "Basic Editing", src: "videos/basicEditing/deleteLines.mp4" }],
  ["Find Next", { combos: ["enter"], commands: ["editor.action.nextMatchFindAction"], list: "Basic Editing", src: "" }],
  ["Find Previous", { combos: ["shift+enter"], commands: ["editor.action.previousMatchFindAction"], list: "Basic Editing", src: "" }],
  ["Find", { combos: ["cmd+f", "ctrl+f"], commands: ["actions.find"], list: "Basic Editing", src: "" }],
  ["Fold (collapse) all regions", { combos: ["cmd+k cmd+0", "ctrl+k ctrl+0"], commands: ["editor.foldAll"], list: "Basic Editing", src: "videos/basicEditing/foldAll.mp4" }],
  ["Fold (collapse) all subregions", { combos: ["cmd+k cmd+[", "ctrl+k ctrl+["], commands: ["editor.foldRecursively"], list: "Basic Editing", src: "" }],
  ["Fold (collapse) region", { combos: ["alt+cmd+[", "ctrl+shift+["], commands: ["editor.fold"], list: "Basic Editing", src: "videos/basicEditing/fold.mp4" }],
  ["Go to Beginning of File", { combos: ["cmd+up", "ctrl+home"], commands: ["cursorTop"], list: "Basic Editing", src: "videos/basicEditing/cursorTop.mp4" }],
  ["Go to Beginning of Line", { combos: ["home"], commands: ["cursorHome"], list: "Basic Editing", src: "videos/basicEditing/cursorHome.mp4" }],
  ["Go to End of File", { combos: ["cmd+down", "ctrl+end"], commands: ["cursorBottom"], list: "Basic Editing", src: "videos/basicEditing/cursorBottom.mp4" }],
  ["Go to End of Line", { combos: ["end"], commands: ["cursorEnd"], list: "Basic Editing", src: "videos/basicEditing/cursorEnd.mp4" }],
  ["Indent Line", { combos: ["cmd+]", "ctrl+]"], commands: ["editor.action.indentLines"], list: "Basic Editing", src: "videos/basicEditing/indentLines.mp4" }],
  ["Insert Cursor Above", { combos: ["alt+cmd+up", "ctrl+alt+up", "shift+alt+up"], commands: ["editor.action.insertCursorAbove"], list: "Basic Editing", src: "" }],
  ["Insert cursor at end of each line selected", { combos: ["shift+alt+i"], commands: ["editor.action.insertCursorAtEndOfEachLineSelected"], list: "Basic Editing", src: "" }],
  ["Insert Cursor Below", { combos: ["alt+cmd+down", "ctrl+alt+down", "shift+alt+down"], commands: ["editor.action.insertCursorBelow"], list: "Basic Editing", src: "" }],
  ["Insert Line Above", { combos: ["shift+cmd+enter", "ctrl+shift+enter"], commands: ["editor.action.insertLineBefore"], list: "Basic Editing", src: "videos/basicEditing/insertLineBefore.mp4" }],
  ["Insert Line Below", { combos: ["cmd+enter", "ctrl+enter"], commands: ["editor.action.insertLineAfter"], list: "Basic Editing", src: "videos/basicEditing/insertLineAfter.mp4" }],
  ["Jump to matching bracket", { combos: ["shift+cmd+\\", "ctrl+shift+\\"], commands: ["editor.action.jumpToBracket"], list: "Basic Editing", src: "videos/basicEditing/jumpToBracket.mp4" }],
  ["Move Last Selection To Next Find Match", { combos: ["cmd+k cmd+d", "ctrl+k ctrl+d"], commands: ["editor.action.moveSelectionToNextFindMatch"], list: "Basic Editing", src: "" }],
  ["Move Line Down", { combos: ["alt+down"], commands: ["editor.action.moveLinesDownAction"], list: "Basic Editing", src: "videos/basicEditing/moveLinesDownAction.mp4" }],
  ["Move Line Up", { combos: ["alt+up"], commands: ["editor.action.moveLinesUpAction"], list: "Basic Editing", src: "videos/basicEditing/moveLinesUpAction.mp4" }],
  ["Outdent Line", { combos: ["cmd+[", "ctrl+[", "shift+tab"], commands: ["editor.action.outdentLines", "outdent"], list: "Basic Editing", src: "videos/basicEditing/outdentLines.mp4" }],
  ["Paste", { combos: ["cmd+v", "ctrl+v"], commands: ["editor.action.clipboardPasteAction"], list: "Basic Editing", src: "" }],
  ["Redo", { combos: ["shift+cmd+z", "ctrl+y"], commands: ["redo"], list: "Basic Editing", src: "" }],
  ["Remove Line Comment", { combos: ["cmd+k cmd+u", "ctrl+k ctrl+u"], commands: ["editor.action.removeCommentLine"], list: "Basic Editing", src: "" }],
  ["Replace", { combos: ["alt+cmd+f", "ctrl+h"], commands: ["editor.action.startFindReplaceAction"], list: "Basic Editing", src: "" }],
  ["Scroll Line Down", { combos: ["ctrl+pagedown", "ctrl+down"], commands: ["scrollLineDown"], list: "Basic Editing", src: "videos/basicEditing/scrollLineDown.mp4" }],
  ["Scroll Line Up", { combos: ["ctrl+pageup", "ctrl+up"], commands: ["scrollLineUp"], list: "Basic Editing", src: "videos/basicEditing/scrollLineUp.mp4" }],
  ["Scroll Page Down", { combos: ["cmd+pagedown", "alt+pagedown"], commands: ["scrollPageDown"], list: "Basic Editing", src: "videos/basicEditing/scrollPageDown.mp4" }],
  ["Scroll Page Up", { combos: ["cmd+pageup", "alt+pageup"], commands: ["scrollPageUp"], list: "Basic Editing", src: "videos/basicEditing/scrollPageUp.mp4" }],
  ["Select all occurrences of current selection", { combos: ["shift+cmd+l", "ctrl+shift+l"], commands: ["editor.action.selectHighlights"], list: "Basic Editing", src: "" }],
  ["Select all occurrences of current word", { combos: ["cmd+f2", "ctrl+f2"], commands: ["editor.action.changeAll"], list: "Basic Editing", src: "" }],
  ["Select All Occurrences of Find Match", { combos: ["alt+enter"], commands: ["editor.action.selectAllMatches"], list: "Basic Editing", src: "" }],
  ["Select current line", { combos: ["cmd+l", "ctrl+l"], commands: ["expandLineSelection"], list: "Basic Editing", src: "" }],
  ["Toggle Block Comment", { combos: ["shift+alt+a", "ctrl+shift+a"], commands: ["editor.action.blockComment"], list: "Basic Editing", src: "videos/basicEditing/blockComment.mp4" }],
  ["Toggle Find Case Sensitive", { combos: ["alt+cmd+c", "alt+c"], commands: ["toggleFindCaseSensitive"], list: "Basic Editing", src: "" }],
  ["Toggle Find Regex", { combos: ["alt+cmd+r", "alt+r"], commands: ["toggleFindRegex"], list: "Basic Editing", src: "" }],
  ["Toggle Find Whole Word", { combos: ["alt+cmd+w", "alt+w"], commands: ["toggleFindWholeWord"], list: "Basic Editing", src: "" }],
  ["Toggle Fold region", { combos: ["cmd+k cmd+l", "ctrl+k ctrl+l"], commands: ["editor.toggleFold"], list: "Basic Editing", src: "" }],
  ["Toggle Line Comment", { combos: ["cmd+/", "ctrl+/"], commands: ["editor.action.commentLine"], list: "Basic Editing", src: "videos/basicEditing/commentLine.mp4" }],
  ["Toggle Use of Tab Key for Setting Focus", { combos: ["ctrl+shift+m", "ctrl+m"], commands: ["editor.action.toggleTabFocusMode"], list: "Basic Editing", src: "videos/basicEditing/toggleTabFocusMode.mp4" }],
  ["Toggle Word Wrap", { combos: ["alt+z"], commands: ["editor.action.toggleWordWrap"], list: "Basic Editing", src: "videos/basicEditing/toggleWordWrap.mp4" }],
  ["Undo last cursor operation", { combos: ["cmd+u", "ctrl+u"], commands: ["cursorUndo"], list: "Basic Editing", src: "" }],
  ["Undo", { combos: ["cmd+z", "ctrl+z"], commands: ["undo"], list: "Basic Editing", src: "" }],
  ["Unfold (uncollapse) all regions", { combos: ["cmd+k cmd+j", "ctrl+k ctrl+j"], commands: ["editor.unfoldAll"], list: "Basic Editing", src: "videos/basicEditing/unfoldAll.mp4" }],
  ["Unfold (uncollapse) all subregions", { combos: ["cmd+k cmd+]", "ctrl+k ctrl+]"], commands: ["editor.unfoldRecursively"], list: "Basic Editing", src: "" }],
  ["Unfold (uncollapse) region", { combos: ["alt+cmd+]", "ctrl+shift+]"], commands: ["editor.unfold"], list: "Basic Editing", src: "videos/basicEditing/unfold.mp4" }],
]);

const debug = new Map<string, Task>([
  ["Continue", { combos: ["f5"], commands: ["workbench.action.debug.continue"], list: "Debug", src: "" }],
  ["Pause", { combos: ["f6"], commands: ["workbench.action.debug.pause"], list: "Debug", src: "" }],
  ["Start (without debugging)", { combos: ["ctrl+f5"], commands: ["workbench.action.debug.run"], list: "Debug", src: "" }],
  ["Start", { combos: ["f5"], commands: ["workbench.action.debug.start"], list: "Debug", src: "" }],
  ["Step Into", { combos: ["f11"], commands: ["workbench.action.debug.stepInto"], list: "Debug", src: "" }],
  ["Toggle Breakpoint", { combos: ["f9"], commands: ["editor.debug.action.toggleBreakpoint"], list: "Debug", src: "" }],
]);

const display = new Map<string, Task>([
  ["Leave Zen Mode", { combos: ["escape escape"], commands: ["workbench.action.exitZenMode"], list: "Display", src: "" }],
  ["Open New Command Prompt", { combos: ["shift+cmd+c", "ctrl+shift+c"], commands: ["workbench.action.terminal.openNativeConsole"], list: "Display", src: "" }],
  ["Open Preview to the Side", { combos: ["cmd+k v", "ctrl+k v"], commands: ["markdown.showPreviewToSide"], list: "Display", src: "" }],
  ["Quick Open View", { combos: ["ctrl+q"], commands: ["workbench.action.quickOpenView"], list: "Display", src: "" }],
  ["Reset Zoom", { combos: ["cmd+numpad0", "ctrl+numpad0"], commands: ["workbench.action.zoomReset"], list: "Display", src: "" }],
  ["Show Explorer / Toggle Focus", { combos: ["shift+cmd+e", "ctrl+shift+e"], commands: ["workbench.view.explorer"], list: "Display", src: "" }],
  ["Show Extensions", { combos: ["shift+cmd+x", "ctrl+shift+x"], commands: ["workbench.view.extensions"], list: "Display", src: "" }],
  ["Show Output", { combos: ["shift+cmd+u", "ctrl+shift+u", "ctrl+k ctrl+h"], commands: ["workbench.action.output.toggleOutput"], list: "Display", src: "" }],
  ["Show Run", { combos: ["shift+cmd+d", "ctrl+shift+d"], commands: ["workbench.view.debug"], list: "Display", src: "" }],
  ["Show Search", { combos: ["shift+cmd+f", "ctrl+shift+f"], commands: ["workbench.view.search"], list: "Display", src: "" }],
  ["Show Source Control", { combos: ["ctrl+shift+g"], commands: ["workbench.view.scm"], list: "Display", src: "" }],
  ["Toggle Full Screen", { combos: ["ctrl+cmd+f", "f11"], commands: ["workbench.action.toggleFullScreen"], list: "Display", src: "" }],
  ["Toggle Integrated Terminal", { combos: ["ctrl+`"], commands: ["workbench.action.terminal.toggleTerminal"], list: "Display", src: "" }],
  ["Toggle Markdown Preview", { combos: ["shift+cmd+v", "ctrl+shift+v"], commands: ["markdown.showPreview"], list: "Display", src: "" }],
  ["Toggle Sidebar Visibility", { combos: ["cmd+b", "ctrl+b"], commands: ["workbench.action.toggleSidebarVisibility"], list: "Display", src: "" }],
  ["Toggle Zen Mode", { combos: ["cmd+k z", "ctrl+k z"], commands: ["workbench.action.toggleZenMode"], list: "Display", src: "" }],
  ["Zoom in", { combos: ["cmd+=", "ctrl+="], commands: ["workbench.action.zoomIn"], list: "Display", src: "" }],
  ["Zoom out", { combos: ["cmd+-", "ctrl+-"], commands: ["workbench.action.zoomOut"], list: "Display", src: "" }],
]);

const editorWindowManagement = new Map<string, Task>([
  ["Close Editor", { combos: ["cmd+w", "ctrl+f4", "ctrl+w"], commands: ["workbench.action.closeActiveEditor"], list: "Editor/Window Management", src: "" }],
  ["Close Folder", { combos: ["cmd+k f", "ctrl+k f"], commands: ["workbench.action.closeFolder"], list: "Editor/Window Management", src: "" }],
  ["Close Window", { combos: ["cmd+w", "alt+f4"], commands: ["workbench.action.closeWindow"], list: "Editor/Window Management", src: "" }],
  ["Focus into First Editor Group", { combos: ["cmd+1", "ctrl+1"], commands: ["workbench.action.focusFirstEditorGroup"], list: "Editor/Window Management", src: "" }],
  ["Focus into Second Editor Group", { combos: ["cmd+2", "ctrl+2"], commands: ["workbench.action.focusSecondEditorGroup"], list: "Editor/Window Management", src: "" }],
  ["Focus into Third Editor Group", { combos: ["cmd+3", "ctrl+3"], commands: ["workbench.action.focusThirdEditorGroup"], list: "Editor/Window Management", src: "" }],
  ["Move Active Editor Group Left", { combos: ["cmd+k left", "ctrl+k left"], commands: ["workbench.action.moveActiveEditorGroupLeft"], list: "Editor/Window Management", src: "" }],
  ["Move Active Editor Group Right", { combos: ["cmd+k right", "ctrl+k right"], commands: ["workbench.action.moveActiveEditorGroupRight"], list: "Editor/Window Management", src: "" }],
  ["Move Editor into Next Group", { combos: ["ctrl+cmd+right", "ctrl+alt+right"], commands: ["workbench.action.moveEditorToNextGroup"], list: "Editor/Window Management", src: "" }],
  ["Move Editor into Previous Group", { combos: ["ctrl+cmd+left", "ctrl+alt+left"], commands: ["workbench.action.moveEditorToPreviousGroup"], list: "Editor/Window Management", src: "" }],
  ["Move Editor Left", { combos: ["cmd+k shift+cmd+left", "ctrl+shift+pageup"], commands: ["workbench.action.moveEditorLeftInGroup"], list: "Editor/Window Management", src: "" }],
  ["Move Editor Right", { combos: ["cmd+k shift+cmd+right", "ctrl+shift+pagedown"], commands: ["workbench.action.moveEditorRightInGroup"], list: "Editor/Window Management", src: "" }],
  ["New Window", { combos: ["shift+cmd+n", "ctrl+shift+n"], commands: ["workbench.action.newWindow"], list: "Editor/Window Management", src: "" }],
  ["Split Editor", { combos: ["cmd+\\", "ctrl+\\"], commands: ["workbench.action.splitEditor"], list: "Editor/Window Management", src: "" }],
]);

const fileManagement = new Map<string, Task>([
  ["Close Group", { combos: ["cmd+k w", "ctrl+k w"], commands: ["workbench.action.closeEditorsInGroup"], list: "File Management", src: "" }],
  ["Close Others", { combos: ["alt+cmd+t"], commands: ["workbench.action.closeOtherEditors"], list: "File Management", src: "" }],
  ["Copy Path of Active File", { combos: ["cmd+k p", "ctrl+k p"], commands: ["workbench.action.files.copyPathOfActiveFile"], list: "File Management", src: "" }],
  ["Keep Open", { combos: ["cmd+k enter", "ctrl+k enter"], commands: ["workbench.action.keepEditor"], list: "File Management", src: "" }],
  ["New File", { combos: ["cmd+n", "ctrl+n"], commands: ["workbench.action.files.newUntitledFile"], list: "File Management", src: "" }],
  ["Open File...", { combos: ["cmd+o", "ctrl+o"], commands: ["workbench.action.files.openFile"], list: "File Management", src: "" }],
  ["Open Folder...", { combos: ["ctrl+k ctrl+o"], commands: ["workbench.action.files.openFolder"], list: "File Management", src: "" }],
  ["Reopen Closed Editor", { combos: ["shift+cmd+t", "ctrl+shift+t"], commands: ["workbench.action.reopenClosedEditor"], list: "File Management", src: "" }],
  ["Reveal Active File in Windows", { combos: ["cmd+k r", "ctrl+k r"], commands: ["workbench.action.files.revealActiveFileInWindows"], list: "File Management", src: "" }],
  ["Save All", { combos: ["alt+cmd+s", "ctrl+k s"], commands: ["saveAll"], list: "File Management", src: "" }],
  ["Save As...", { combos: ["shift+cmd+s", "ctrl+shift+s"], commands: ["workbench.action.files.saveAs"], list: "File Management", src: "" }],
  ["Save", { combos: ["cmd+s", "ctrl+s"], commands: ["workbench.action.files.save"], list: "File Management", src: "" }],
]);

const navigation = new Map<string, Task>([
  ["Focus and Select Breadcrumbs", { combos: ["shift+cmd+.", "ctrl+shift+."], commands: ["breadcrumbs.focusAndSelect"], list: "Navigation", src: "" }],
  ["Focus Breadcrumbs", { combos: ["shift+cmd+;", "ctrl+shift+;"], commands: ["breadcrumbs.focus"], list: "Navigation", src: "" }],
  ["Go back in Quick Input", { combos: ["ctrl+-", "alt+left", "ctrl+alt+-"], commands: ["workbench.action.quickInputBack"], list: "Navigation", src: "" }],
  ["Go Back", { combos: ["ctrl+-", "alt+left", "ctrl+alt+-"], commands: ["workbench.action.navigateBack"], list: "Navigation", src: "" }],
  ["Go Forward", { combos: ["alt+right", "ctrl+shift+-"], commands: ["workbench.action.navigateForward"], list: "Navigation", src: "" }],
  ["Go to File..., Quick Open", { combos: ["cmd+p", "ctrl+p"], commands: ["workbench.action.quickOpen"], list: "Navigation", src: "" }],
  ["Go to Line...", { combos: ["ctrl+g"], commands: ["workbench.action.gotoLine"], list: "Navigation", src: "" }],
  ["Go to Next Error or Warning", { combos: ["f8"], commands: ["editor.action.marker.nextInFiles"], list: "Navigation", src: "" }],
  ["Go to Previous Error or Warning", { combos: ["shift+f8"], commands: ["editor.action.marker.prevInFiles"], list: "Navigation", src: "" }],
  ["Go to Symbol...", { combos: ["shift+cmd+o", "ctrl+shift+o"], commands: ["workbench.action.gotoSymbol"], list: "Navigation", src: "" }],
  ["Navigate Editor Group History", { combos: ["ctrl+tab"], commands: ["workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"], list: "Navigation", src: "" }],
  ["Show All Commands", { combos: ["shift+cmd+p", "ctrl+shift+p", "f1"], commands: ["workbench.action.showCommands"], list: "Navigation", src: "" }],
  ["Show All Symbols", { combos: ["cmd+t", "ctrl+t"], commands: ["workbench.action.showAllSymbols"], list: "Navigation", src: "" }],
  ["Show Problems", { combos: ["shift+cmd+m", "ctrl+shift+m"], commands: ["workbench.actions.view.problems"], list: "Navigation", src: "" }],
]);

const preferences = new Map<string, Task>([
  ["Open Keyboard Shortcuts", { combos: ["cmd+k cmd+s", "ctrl+k ctrl+s"], commands: ["workbench.action.openGlobalKeybindings"], list: "Preferences", src: "" }],
  ["Open Settings", { combos: ["cmd+,", "ctrl+,"], commands: ["workbench.action.openSettings"], list: "Preferences", src: "" }],
  ["Select Color Theme", { combos: ["cmd+k cmd+t", "ctrl+k ctrl+t"], commands: ["workbench.action.selectTheme"], list: "Preferences", src: "" }],
]);

const richLanguageEditing = new Map<string, Task>([
  ["Expand AST Selection", { combos: ["ctrl+shift+cmd+right", "shift+alt+right"], commands: ["editor.action.smartSelect.expand"], list: "Rich Languages Editing", src: "" }],
  ["Format Document", { combos: ["shift+alt+f", "ctrl+shift+i"], commands: ["editor.action.formatDocument"], list: "Rich Languages Editing", src: "" }],
  ["Format Selection", { combos: ["cmd+k cmd+f", "ctrl+k ctrl+f"], commands: ["editor.action.formatSelection"], list: "Rich Languages Editing", src: "" }],
  ["Go to Definition", { combos: ["f12"], commands: ["editor.action.revealDefinition"], list: "Rich Languages Editing", src: "" }],
  ["Go to References", { combos: ["shift+f12"], commands: ["editor.action.goToReferences"], list: "Rich Languages Editing", src: "" }],
  ["Open Definition to the Side", { combos: ["cmd+k f12", "ctrl+k f12"], commands: ["editor.action.revealDefinitionAside"], list: "Rich Languages Editing", src: "" }],
  ["Peek Definition", { combos: ["alt+f12", "ctrl+shift+f10"], commands: ["editor.action.peekDefinition"], list: "Rich Languages Editing", src: "" }],
  ["Quick Fix", { combos: ["cmd+.", "ctrl+."], commands: ["editor.action.quickFix"], list: "Rich Languages Editing", src: "" }],
  ["Rename Symbol", { combos: ["f2"], commands: ["editor.action.rename"], list: "Rich Languages Editing", src: "" }],
  ["Replace with Next Value", { combos: ["shift+cmd+.", "ctrl+shift+."], commands: ["editor.action.inPlaceReplace.down"], list: "Rich Languages Editing", src: "" }],
  ["Replace with Previous Value", { combos: ["shift+cmd+,", "ctrl+shift+,"], commands: ["editor.action.inPlaceReplace.up"], list: "Rich Languages Editing", src: "" }],
  ["Show Hover", { combos: ["cmd+k cmd+i", "ctrl+k ctrl+i"], commands: ["editor.action.showHover"], list: "Rich Languages Editing", src: "" }],
  ["Shrink AST Selection", { combos: ["ctrl+shift+cmd+left", "shift+alt+left"], commands: ["editor.action.smartSelect.shrink"], list: "Rich Languages Editing", src: "" }],
  ["Trigger Parameter Hints", { combos: ["shift+cmd+space", "ctrl+shift+space"], commands: ["editor.action.triggerParameterHints"], list: "Rich Languages Editing", src: "" }],
  ["Trigger Suggest", { combos: ["ctrl+space"], commands: ["editor.action.triggerSuggest"], list: "Rich Languages Editing", src: "" }],
  ["Trim Trailing Whitespace", { combos: ["cmd+k cmd+x", "ctrl+k ctrl+x"], commands: ["editor.action.trimTrailingWhitespace"], list: "Rich Languages Editing", src: "" }],
]);

const search = new Map<string, Task>([
  ["Focus Next Search Result", { combos: ["f4"], commands: ["search.action.focusNextSearchResult"], list: "Search", src: "" }],
  ["Focus Previous Search Result", { combos: ["shift+f4"], commands: ["search.action.focusPreviousSearchResult"], list: "Search", src: "" }],
  ["Replace in Files", { combos: ["shift+cmd+h", "ctrl+shift+h"], commands: ["workbench.action.replaceInFiles"], list: "Search", src: "" }],
  ["Show Next Search Term", { combos: ["down"], commands: ["history.showNext"], list: "Search", src: "" }],
  ["Show Previous Search Term", { combos: ["up"], commands: ["history.showPrevious"], list: "Search", src: "" }],
  ["Toggle Match Case", { combos: ["alt+cmd+c", "alt+c"], commands: ["toggleSearchCaseSensitive"], list: "Search", src: "" }],
  ["Toggle Match Whole Word", { combos: ["alt+cmd+w", "alt+w"], commands: ["toggleSearchWholeWord"], list: "Search", src: "" }],
  ["Toggle Search Details", { combos: ["shift+cmd+j", "ctrl+shift+j"], commands: ["workbench.action.search.toggleQueryDetails"], list: "Search", src: "" }],
  ["Toggle Use Regular Expression", { combos: ["alt+cmd+r", "alt+r"], commands: ["toggleSearchRegex"], list: "Search", src: "" }],
]);

const searchEditor = new Map<string, Task>([
  ["Delete File Results", { combos: ["shift+cmd+backspace", "ctrl+shift+backspace"], commands: ["search.searchEditor.action.deleteFileResults"], list: "Search Editor", src: "" }],
  ["Focus Search Editor Input", { combos: ["escape"], commands: ["search.action.focusQueryEditorWidget"], list: "Search Editor", src: "" }],
  ["Open Results In Editor", { combos: ["cmd+enter", "alt+enter"], commands: ["search.action.openInEditor"], list: "Search Editor", src: "" }],
  ["Search Again", { combos: ["shift+cmd+r", "ctrl+shift+r"], commands: ["rerunSearchEditorSearch"], list: "Search Editor", src: "" }],
]);

// const tasks = new Map<string, Task>([
//   ["Run Build Task", { combos: ["shift+cmd+b", "ctrl+shift+b"], commands: ["workbench.action.tasks.build"], list: "Tasks", src: "" }],
// ]);
// #endregion

export const tasks = new Map<string, Task>([...basicEditing, ...debug, ...display, ...editorWindowManagement, ...fileManagement, ...navigation, ...preferences, ...richLanguageEditing, ...search, ...searchEditor]);
