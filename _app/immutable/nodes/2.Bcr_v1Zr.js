import{a as S,t as L,c as Pe}from"../chunks/disclose-version.BmLDqCXR.js";import{h as y,x as te,Q as We,i as Ie,v as Ke,t as Ge,a1 as Ee,H as Oe,w as ge,y as ce,C as I,z as Se,A as _e,B as Ue,ak as He,n as fe,s as E,al as $e,am as Ve,G as qe,a as ue,an as ze,ao as je,a0 as Qe,ap as Ze,aq as Je,W as Ye,Z as Xe,V as eo,ar as oo,as as to,a6 as ye,F as co,O as he,aj as U,g,I as Z,K as J,M,j as N,N as A,L as D,J as q,b as be,at as io,au as ie,ae as K}from"../chunks/runtime.B-n-TQZU.js";import{s as z,d as le,a as so,e as G}from"../chunks/render.DIb2hytw.js";import{g as ve,a as ro,p as H,i as j}from"../chunks/if.YmsW27np.js";import{i as Le}from"../chunks/lifecycle.BqeIShQG.js";import{r as Fe}from"../chunks/misc.BWHCYCJY.js";let se=null;function no(t,e){return e}function ao(t,e,o,n){for(var s=[],a=e.length,i=0;i<a;i++)je(e[i].e,s,!0);var d=a>0&&s.length===0&&o!==null;if(d){var l=o.parentNode;Qe(l),l.append(o),n.clear(),B(t,e[0].prev,e[a-1].next)}Ze(s,()=>{for(var c=0;c<a;c++){var r=e[c];d||(n.delete(r.k),B(t,r.prev,r.next)),Je(r.e,!d)}})}function lo(t,e,o,n,s,a=null){var i=t,d={flags:e,items:new Map,first:null};{var l=t;i=y?te(Ye(l)):l.appendChild(We())}y&&Ie();var c=null;Ke(()=>{var r=o(),f=Ge(r)?r:r==null?[]:Ee(r),u=f.length;let p=!1;if(y){var b=i.data===Oe;b!==(u===0)&&(i=ge(),te(i),ce(!1),p=!0)}if(y){for(var k=null,h,w=0;w<u;w++){if(I.nodeType===8&&I.data===Xe){i=I,p=!0,ce(!1);break}var T=f[w],F=n(T,w);h=Ae(I,d,k,null,T,F,w,s,e),d.items.set(F,h),k=h}u>0&&te(ge())}y||mo(f,d,i,s,e,n),a!==null&&(u===0?c?Se(c):c=_e(()=>a(i)):c!==null&&Ue(c,()=>{c=null})),p&&ce(!0)}),y&&(i=I)}function mo(t,e,o,n,s,a){var i=t.length,d=e.items,l=e.first,c=l,r,f=null,u=[],p=[],b,k,h,w;for(w=0;w<i;w+=1){if(b=t[w],k=a(b,w),h=d.get(k),h===void 0){var T=c?c.e.nodes_start:o;f=Ae(T,e,f,f===null?e.first:f.next,b,k,w,n,s),d.set(k,f),u=[],p=[],c=f.next;continue}if(go(h,b,w),h.e.f&He&&Se(h.e),h!==c){if(r!==void 0&&r.has(h)){if(u.length<p.length){var F=p[0],_;f=F.prev;var P=u[0],x=u[u.length-1];for(_=0;_<u.length;_+=1)pe(u[_],F,o);for(_=0;_<p.length;_+=1)r.delete(p[_]);B(e,P.prev,x.next),B(e,f,P),B(e,x,F),c=F,f=x,w-=1,u=[],p=[]}else r.delete(h),pe(h,c,o),B(e,h.prev,h.next),B(e,h,f===null?e.first:f.next),B(e,f,h),f=h;continue}for(u=[],p=[];c!==null&&c.k!==k;)(r??(r=new Set)).add(c),p.push(c),c=c.next;if(c===null)continue;h=c}u.push(h),f=h,c=h.next}if(c!==null||r!==void 0){for(var C=r===void 0?[]:Ee(r);c!==null;)C.push(c),c=c.next;var V=C.length;if(V>0){var Y=i===0?o:null;ao(e,C,Y,d)}}fe.first=e.first&&e.first.e,fe.last=f&&f.e}function go(t,e,o,n){E(t.v,e),t.i=o}function Ae(t,e,o,n,s,a,i,d,l){var c=se;try{var r=(l&$e)!==0,f=(l&Ve)===0,u=r?f?qe(s):ue(s):s,p=l&ze?ue(i):i,b={i:p,v:u,k:a,a:null,e:null,prev:o,next:n};return se=b,b.e=_e(()=>d(t,u,p),y),b.e.prev=o&&o.e,b.e.next=n&&n.e,o===null?e.first=b:(o.next=b,o.e.next=b.e),n!==null&&(n.prev=b,n.e.prev=b.e),b}finally{se=c}}function pe(t,e,o){for(var n=t.next?t.next.e.nodes_start:o,s=e?e.e.nodes_start:o,a=t.e.nodes_start;a!==n;){var i=eo(a);s.before(a),a=i}}function B(t,e,o){e===null?t.first=o:(e.next=o,e.e.next=o&&o.e),o!==null&&(o.prev=e,o.e.prev=e&&e.e)}let we=!1;function Be(){we||(we=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const o of t.target.elements)(e=o.__on_r)==null||e.call(o)})},{capture:!0}))}function fo(t){if(y){var e=!1,o=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var n=t.value;$(t,"value",null),t.value=n}if(t.hasAttribute("checked")){var s=t.checked;$(t,"checked",null),t.checked=s}}};t.__on_r=o,oo(o),Be()}}function $(t,e,o,n){o=o==null?null:o+"";var s=t.__attributes??(t.__attributes={});y&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=o)&&(e==="loading"&&(t[to]=o),o===null?t.removeAttribute(e):t.setAttribute(e,o))}function uo(t,e,o){if(o){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Me(t,e,o,n=o){t.addEventListener(e,o);const s=t.__on_r;s?t.__on_r=()=>{s(),n()}:t.__on_r=n,Be()}const re=new Set;function ho(t,e,o,n,s){var a=o.getAttribute("type")==="checkbox",i=t;let d=!1;if(e!==null)for(var l of e)i=i[l]??(i[l]=[]);i.push(o),Me(o,"change",()=>{var c=o.__value;a&&(c=ke(i,c,o.checked)),s(c)},()=>s(a?[]:null)),ye(()=>{var c=n();if(y&&o.defaultChecked!==o.checked){d=!0;return}a?(c=c||[],o.checked=ve(c).includes(ve(o.__value))):o.checked=ro(o.__value,c)}),co(()=>{var c=i.indexOf(o);c!==-1&&i.splice(c,1)}),re.has(i)||(re.add(i),he(()=>{i.sort((c,r)=>c.compareDocumentPosition(r)===4?-1:1),re.delete(i)})),he(()=>{if(d){var c;if(a)c=ke(i,c,o.checked);else{var r=i.find(f=>f.checked);c=r==null?void 0:r.__value}s(c)}})}function ke(t,e,o){for(var n=new Set,s=0;s<t.length;s+=1)t[s].checked&&n.add(t[s].__value);return o||n.delete(e),Array.from(n)}function bo(t,e,o){Me(t,"change",()=>{o(t.files)}),ye(()=>{t.files=e()})}const vo=!0,Ko=Object.freeze(Object.defineProperty({__proto__:null,prerender:vo},Symbol.toStringTag,{value:"Module"})),po=new Map([["AltLeft","alt"],["AltRight","alt"],["ArrowDown","down"],["ArrowLeft","left"],["ArrowRight","right"],["ArrowUp","up"],["AudioVolumeDown","audiovolumedown"],["AudioVolumeMute","audiovolumemute"],["AudioVolumeUp","audiovolumeup"],["Backquote","`"],["Backslash","\\"],["Backspace","backspace"],["BracketLeft","["],["BracketRight","]"],["BrowserBack","browserback"],["BrowserFavorites","browserfavorites"],["BrowserForward","browserforward"],["BrowserHome","browserhome"],["BrowserRefresh","browserrefresh"],["BrowserSearch","browsersearch"],["BrowserStop","browserstop"],["CapsLock","capslock"],["Comma",","],["ContextMenu","contextmenu"],["ControlLeft","ctrl"],["ControlRight","ctrl"],["Delete","delete"],["Digit0","0"],["Digit1","1"],["Digit2","2"],["Digit3","3"],["Digit4","4"],["Digit5","5"],["Digit6","6"],["Digit7","7"],["Digit8","8"],["Digit9","9"],["End","end"],["Enter","enter"],["Equal","="],["Escape","escape"],["F1","f1"],["F10","f10"],["F11","f11"],["F12","f12"],["F13","f13"],["F14","f14"],["F15","f15"],["F16","f16"],["F17","f17"],["F18","f18"],["F19","f19"],["F2","f2"],["F20","f20"],["F3","f3"],["F4","f4"],["F5","f5"],["F6","f6"],["F7","f7"],["F8","f8"],["F9","f9"],["Fn","fn"],["FnLock","fnlock"],["Home","home"],["Insert","insert"],["KeyA","a"],["KeyB","b"],["KeyC","c"],["KeyD","d"],["KeyE","e"],["KeyF","f"],["KeyG","g"],["KeyH","h"],["KeyI","i"],["KeyJ","j"],["KeyK","k"],["KeyL","l"],["KeyM","m"],["KeyN","n"],["KeyO","o"],["KeyP","p"],["KeyQ","q"],["KeyR","r"],["KeyS","s"],["KeyT","t"],["KeyU","u"],["KeyV","v"],["KeyW","w"],["KeyX","x"],["KeyY","y"],["KeyZ","z"],["MediaPlayPause","mediaplaypause"],["MediaStop","mediastop"],["MediaTrackNext","mediatracknext"],["MediaTrackPrevious","mediatrackprevious"],["MetaLeft","meta"],["MetaRight","meta"],["Minus","-"],["NumLock","numlock"],["Numpad0","0"],["Numpad1","1"],["Numpad2","2"],["Numpad3","3"],["Numpad4","4"],["Numpad5","5"],["Numpad6","6"],["Numpad7","7"],["Numpad8","8"],["Numpad9","9"],["NumpadAdd","+"],["NumpadDecimal","."],["NumpadDivide","/"],["NumpadEnter","enter"],["NumpadMultiply","*"],["NumpadSubtract","-"],["PageDown","pagedown"],["PageUp","pageup"],["Pause","pause"],["Period","."],["PrintScreen","printscreen"],["Quote","'"],["ScrollLock","scrolllock"],["Semicolon",";"],["ShiftLeft","shift"],["ShiftRight","shift"],["Slash","/"],["Space","space"],["Tab","tab"]]),Te=t=>{let e=U(H(t));return{reset:()=>E(e,H(t)),set v(n){E(e,H(n))},get v(){return g(e)}}},Re=Te("Basic Editing"),O=Te(!1);var ne=Fe(()=>Re),wo=L('<input class="hidden svelte-19ofji9" name="algorithm" type="radio"> <label class="cursor-pointer bg-secondary-color px-2 py-1 transition-colors hover:bg-white hover:text-primary-color svelte-19ofji9"> </label>',1),ko=L("<div></div>");function Eo(t,e){Z(e,!1);const o=[],n=["Basic Editing","Rich Languages Editing","Navigation","Editor/Window Management","File Management","Display","Search","Search Editor","Preferences","Debug"];Le();var s=ko();lo(s,5,()=>n,no,(a,i)=>{var d=wo(),l=N(d);fo(l);var c,r=A(l,2),f=D(r);M(r),q(()=>{$(l,"id",g(i)),c!==(c=g(i))&&(l.value=(l.__value=g(i))==null?"":g(i)),$(r,"for",g(i)),z(f,g(i))}),ho(o,[],l,()=>(g(i),ne().v),u=>ne(ne().v=u)),S(a,d)}),M(s),S(t,s),J()}const Q=new Map([["Add Line Comment",{combos:["cmd+k cmd+c","ctrl+k ctrl+c"],commands:["editor.action.addCommentLine"],list:"Basic Editing",src:""}],["Add Selection To Next Find Match",{combos:["cmd+d","ctrl+d"],commands:["editor.action.addSelectionToNextFindMatch"],list:"Basic Editing",src:""}],["Change Language Mode",{combos:["cmd+k m","ctrl+k m"],commands:["workbench.action.editor.changeLanguageMode"],list:"Rich Languages Editing",src:""}],["Close All",{combos:["cmd+k cmd+w","ctrl+k ctrl+w"],commands:["workbench.action.closeAllEditors"],list:"File Management",src:""}],["Close Editor",{combos:["cmd+w","ctrl+f4","ctrl+w"],commands:["workbench.action.closeActiveEditor"],list:"Editor/Window Management",src:""}],["Close Folder",{combos:["cmd+k f","ctrl+k f"],commands:["workbench.action.closeFolder"],list:"Editor/Window Management",src:""}],["Close Group",{combos:["cmd+k w","ctrl+k w"],commands:["workbench.action.closeEditorsInGroup"],list:"File Management",src:""}],["Close Others",{combos:["alt+cmd+t"],commands:["workbench.action.closeOtherEditors"],list:"File Management",src:""}],["Close Window",{combos:["cmd+w","alt+f4"],commands:["workbench.action.closeWindow"],list:"Editor/Window Management",src:""}],["Close",{combos:["cmd+w","ctrl+f4","ctrl+w"],commands:["workbench.action.closeActiveEditor"],list:"File Management",src:""}],["Continue",{combos:["f5"],commands:["workbench.action.debug.continue"],list:"Debug",src:""}],["Copy line (empty selection)",{combos:["cmd+c","ctrl+c"],commands:["editor.action.clipboardCopyAction"],list:"Basic Editing",src:"videos/basicEditing/clipboardCopyAction.mp4"}],["Copy Line Down",{combos:["shift+alt+down","ctrl+shift+alt+down"],commands:["editor.action.copyLinesDownAction"],list:"Basic Editing",src:"videos/basicEditing/copyLinesDownAction.mp4"}],["Copy Line Up",{combos:["shift+alt+up","ctrl+shift+alt+up"],commands:["editor.action.copyLinesUpAction"],list:"Basic Editing",src:"videos/basicEditing/copyLinesUpAction.mp4"}],["Copy Path of Active File",{combos:["cmd+k p","ctrl+k p"],commands:["workbench.action.files.copyPathOfActiveFile"],list:"File Management",src:""}],["Cut line (empty selection)",{combos:["cmd+x","ctrl+x"],commands:["editor.action.clipboardCutAction"],list:"Basic Editing",src:"videos/basicEditing/clipboardCutAction.mp4"}],["Delete File Results",{combos:["shift+cmd+backspace","ctrl+shift+backspace"],commands:["search.searchEditor.action.deleteFileResults"],list:"Search Editor",src:""}],["Delete Line",{combos:["shift+cmd+k","ctrl+shift+k"],commands:["editor.action.deleteLines"],list:"Basic Editing",src:"videos/basicEditing/deleteLines.mp4"}],["Expand AST Selection",{combos:["ctrl+shift+cmd+right","shift+alt+right"],commands:["editor.action.smartSelect.expand"],list:"Rich Languages Editing",src:""}],["Find Next",{combos:["enter"],commands:["editor.action.nextMatchFindAction"],list:"Basic Editing",src:""}],["Find Previous",{combos:["shift+enter"],commands:["editor.action.previousMatchFindAction"],list:"Basic Editing",src:""}],["Find",{combos:["cmd+f","ctrl+f"],commands:["actions.find"],list:"Basic Editing",src:""}],["Focus and Select Breadcrumbs",{combos:["shift+cmd+.","ctrl+shift+."],commands:["breadcrumbs.focusAndSelect"],list:"Navigation",src:""}],["Focus Breadcrumbs",{combos:["shift+cmd+;","ctrl+shift+;"],commands:["breadcrumbs.focus"],list:"Navigation",src:""}],["Focus into First Editor Group",{combos:["cmd+1","ctrl+1"],commands:["workbench.action.focusFirstEditorGroup"],list:"Editor/Window Management",src:""}],["Focus into Second Editor Group",{combos:["cmd+2","ctrl+2"],commands:["workbench.action.focusSecondEditorGroup"],list:"Editor/Window Management",src:""}],["Focus into Third Editor Group",{combos:["cmd+3","ctrl+3"],commands:["workbench.action.focusThirdEditorGroup"],list:"Editor/Window Management",src:""}],["Focus Next Search Result",{combos:["f4"],commands:["search.action.focusNextSearchResult"],list:"Search",src:""}],["Focus Previous Search Result",{combos:["shift+f4"],commands:["search.action.focusPreviousSearchResult"],list:"Search",src:""}],["Focus Search Editor Input",{combos:["escape"],commands:["search.action.focusQueryEditorWidget"],list:"Search Editor",src:""}],["Fold (collapse) all regions",{combos:["cmd+k cmd+0","ctrl+k ctrl+0"],commands:["editor.foldAll"],list:"Basic Editing",src:"videos/basicEditing/foldAll.mp4"}],["Fold (collapse) all subregions",{combos:["cmd+k cmd+[","ctrl+k ctrl+["],commands:["editor.foldRecursively"],list:"Basic Editing",src:""}],["Fold (collapse) region",{combos:["alt+cmd+[","ctrl+shift+["],commands:["editor.fold"],list:"Basic Editing",src:"videos/basicEditing/fold.mp4"}],["Format Document",{combos:["shift+alt+f","ctrl+shift+i"],commands:["editor.action.formatDocument"],list:"Rich Languages Editing",src:""}],["Format Selection",{combos:["cmd+k cmd+f","ctrl+k ctrl+f"],commands:["editor.action.formatSelection"],list:"Rich Languages Editing",src:""}],["Go back in Quick Input",{combos:["ctrl+-","alt+left","ctrl+alt+-"],commands:["workbench.action.quickInputBack"],list:"Navigation",src:""}],["Go Back",{combos:["ctrl+-","alt+left","ctrl+alt+-"],commands:["workbench.action.navigateBack"],list:"Navigation",src:""}],["Go Forward",{combos:["alt+right","ctrl+shift+-"],commands:["workbench.action.navigateForward"],list:"Navigation",src:""}],["Go to Beginning of File",{combos:["cmd+up","ctrl+home"],commands:["cursorTop"],list:"Basic Editing",src:"videos/basicEditing/cursorTop.mp4"}],["Go to Beginning of Line",{combos:["home"],commands:["cursorHome"],list:"Basic Editing",src:"videos/basicEditing/cursorHome.mp4"}],["Go to Definition",{combos:["f12"],commands:["editor.action.revealDefinition"],list:"Rich Languages Editing",src:""}],["Go to End of File",{combos:["cmd+down","ctrl+end"],commands:["cursorBottom"],list:"Basic Editing",src:"videos/basicEditing/cursorBottom.mp4"}],["Go to End of Line",{combos:["end"],commands:["cursorEnd"],list:"Basic Editing",src:"videos/basicEditing/cursorEnd.mp4"}],["Go to File..., Quick Open",{combos:["cmd+p","ctrl+p"],commands:["workbench.action.quickOpen"],list:"Navigation",src:""}],["Go to Line...",{combos:["ctrl+g"],commands:["workbench.action.gotoLine"],list:"Navigation",src:""}],["Go to Next Error or Warning",{combos:["f8"],commands:["editor.action.marker.nextInFiles"],list:"Navigation",src:""}],["Go to Previous Error or Warning",{combos:["shift+f8"],commands:["editor.action.marker.prevInFiles"],list:"Navigation",src:""}],["Go to References",{combos:["shift+f12"],commands:["editor.action.goToReferences"],list:"Rich Languages Editing",src:""}],["Go to Symbol...",{combos:["shift+cmd+o","ctrl+shift+o"],commands:["workbench.action.gotoSymbol"],list:"Navigation",src:""}],["Indent Line",{combos:["cmd+]","ctrl+]"],commands:["editor.action.indentLines"],list:"Basic Editing",src:"videos/basicEditing/indentLines.mp4"}],["Insert Cursor Above",{combos:["alt+cmd+up","ctrl+alt+up","shift+alt+up"],commands:["editor.action.insertCursorAbove"],list:"Basic Editing",src:""}],["Insert cursor at end of each line selected",{combos:["shift+alt+i"],commands:["editor.action.insertCursorAtEndOfEachLineSelected"],list:"Basic Editing",src:""}],["Insert Cursor Below",{combos:["alt+cmd+down","ctrl+alt+down","shift+alt+down"],commands:["editor.action.insertCursorBelow"],list:"Basic Editing",src:""}],["Insert Line Above",{combos:["shift+cmd+enter","ctrl+shift+enter"],commands:["editor.action.insertLineBefore"],list:"Basic Editing",src:"videos/basicEditing/insertLineBefore.mp4"}],["Insert Line Below",{combos:["cmd+enter","ctrl+enter"],commands:["editor.action.insertLineAfter"],list:"Basic Editing",src:"videos/basicEditing/insertLineAfter.mp4"}],["Jump to matching bracket",{combos:["shift+cmd+\\","ctrl+shift+\\"],commands:["editor.action.jumpToBracket"],list:"Basic Editing",src:"videos/basicEditing/jumpToBracket.mp4"}],["Keep Open",{combos:["cmd+k enter","ctrl+k enter"],commands:["workbench.action.keepEditor"],list:"File Management",src:""}],["Leave Zen Mode",{combos:["escape escape"],commands:["workbench.action.exitZenMode"],list:"Display",src:""}],["Move Active Editor Group Left",{combos:["cmd+k left","ctrl+k left"],commands:["workbench.action.moveActiveEditorGroupLeft"],list:"Editor/Window Management",src:""}],["Move Active Editor Group Right",{combos:["cmd+k right","ctrl+k right"],commands:["workbench.action.moveActiveEditorGroupRight"],list:"Editor/Window Management",src:""}],["Move Editor into Next Group",{combos:["ctrl+cmd+right","ctrl+alt+right"],commands:["workbench.action.moveEditorToNextGroup"],list:"Editor/Window Management",src:""}],["Move Editor into Previous Group",{combos:["ctrl+cmd+left","ctrl+alt+left"],commands:["workbench.action.moveEditorToPreviousGroup"],list:"Editor/Window Management",src:""}],["Move Editor Left",{combos:["cmd+k shift+cmd+left","ctrl+shift+pageup"],commands:["workbench.action.moveEditorLeftInGroup"],list:"Editor/Window Management",src:""}],["Move Editor Right",{combos:["cmd+k shift+cmd+right","ctrl+shift+pagedown"],commands:["workbench.action.moveEditorRightInGroup"],list:"Editor/Window Management",src:""}],["Move Last Selection To Next Find Match",{combos:["cmd+k cmd+d","ctrl+k ctrl+d"],commands:["editor.action.moveSelectionToNextFindMatch"],list:"Basic Editing",src:""}],["Move Line Down",{combos:["alt+down"],commands:["editor.action.moveLinesDownAction"],list:"Basic Editing",src:"videos/basicEditing/moveLinesDownAction.mp4"}],["Move Line Up",{combos:["alt+up"],commands:["editor.action.moveLinesUpAction"],list:"Basic Editing",src:"videos/basicEditing/moveLinesUpAction.mp4"}],["Navigate Editor Group History",{combos:["ctrl+tab"],commands:["workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup"],list:"Navigation",src:""}],["New File",{combos:["cmd+n","ctrl+n"],commands:["workbench.action.files.newUntitledFile"],list:"File Management",src:""}],["New Window",{combos:["shift+cmd+n","ctrl+shift+n"],commands:["workbench.action.newWindow"],list:"Editor/Window Management",src:""}],["Open Definition to the Side",{combos:["cmd+k f12","ctrl+k f12"],commands:["editor.action.revealDefinitionAside"],list:"Rich Languages Editing",src:""}],["Open File...",{combos:["cmd+o","ctrl+o"],commands:["workbench.action.files.openFile"],list:"File Management",src:""}],["Open Keyboard Shortcuts",{combos:["cmd+k cmd+s","ctrl+k ctrl+s"],commands:["workbench.action.openGlobalKeybindings"],list:"Preferences",src:""}],["Open New Command Prompt",{combos:["shift+cmd+c","ctrl+shift+c"],commands:["workbench.action.terminal.openNativeConsole"],list:"Display",src:""}],["Open Preview to the Side",{combos:["cmd+k v","ctrl+k v"],commands:["markdown.showPreviewToSide"],list:"Display",src:""}],["Open Results In Editor",{combos:["cmd+enter","alt+enter"],commands:["search.action.openInEditor"],list:"Search Editor",src:""}],["Open Settings",{combos:["cmd+,","ctrl+,"],commands:["workbench.action.openSettings"],list:"Preferences",src:""}],["Outdent Line",{combos:["cmd+[","ctrl+[","shift+tab"],commands:["editor.action.outdentLines","outdent"],list:"Basic Editing",src:"videos/basicEditing/outdentLines.mp4"}],["Paste",{combos:["cmd+v","ctrl+v"],commands:["editor.action.clipboardPasteAction"],list:"Basic Editing",src:""}],["Pause",{combos:["f6"],commands:["workbench.action.debug.pause"],list:"Debug",src:""}],["Peek Definition",{combos:["alt+f12","ctrl+shift+f10"],commands:["editor.action.peekDefinition"],list:"Rich Languages Editing",src:""}],["Quick Fix",{combos:["cmd+.","ctrl+."],commands:["editor.action.quickFix"],list:"Rich Languages Editing",src:""}],["Quick Open View",{combos:["ctrl+q"],commands:["workbench.action.quickOpenView"],list:"Display",src:""}],["Redo",{combos:["shift+cmd+z","ctrl+y"],commands:["redo"],list:"Basic Editing",src:""}],["Remove Line Comment",{combos:["cmd+k cmd+u","ctrl+k ctrl+u"],commands:["editor.action.removeCommentLine"],list:"Basic Editing",src:""}],["Rename Symbol",{combos:["f2"],commands:["editor.action.rename"],list:"Rich Languages Editing",src:""}],["Reopen Closed Editor",{combos:["shift+cmd+t","ctrl+shift+t"],commands:["workbench.action.reopenClosedEditor"],list:"File Management",src:""}],["Replace in Files",{combos:["shift+cmd+h","ctrl+shift+h"],commands:["workbench.action.replaceInFiles"],list:"Search",src:""}],["Replace with Next Value",{combos:["shift+cmd+.","ctrl+shift+."],commands:["editor.action.inPlaceReplace.down"],list:"Rich Languages Editing",src:""}],["Replace with Previous Value",{combos:["shift+cmd+,","ctrl+shift+,"],commands:["editor.action.inPlaceReplace.up"],list:"Rich Languages Editing",src:""}],["Replace",{combos:["alt+cmd+f","ctrl+h"],commands:["editor.action.startFindReplaceAction"],list:"Basic Editing",src:""}],["Reset Zoom",{combos:["cmd+numpad0","ctrl+numpad0"],commands:["workbench.action.zoomReset"],list:"Display",src:""}],["Reveal Active File in Windows",{combos:["cmd+k r","ctrl+k r"],commands:["workbench.action.files.revealActiveFileInWindows"],list:"File Management",src:""}],["Save All",{combos:["alt+cmd+s","ctrl+k s"],commands:["saveAll"],list:"File Management",src:""}],["Save As...",{combos:["shift+cmd+s","ctrl+shift+s"],commands:["workbench.action.files.saveAs"],list:"File Management",src:""}],["Save",{combos:["cmd+s","ctrl+s"],commands:["workbench.action.files.save"],list:"File Management",src:""}],["Scroll Line Down",{combos:["ctrl+pagedown","ctrl+down"],commands:["scrollLineDown"],list:"Basic Editing",src:"videos/basicEditing/scrollLineDown.mp4"}],["Scroll Line Up",{combos:["ctrl+pageup","ctrl+up"],commands:["scrollLineUp"],list:"Basic Editing",src:"videos/basicEditing/scrollLineUp.mp4"}],["Scroll Page Down",{combos:["cmd+pagedown","alt+pagedown"],commands:["scrollPageDown"],list:"Basic Editing",src:"videos/basicEditing/scrollPageDown.mp4"}],["Scroll Page Up",{combos:["cmd+pageup","alt+pageup"],commands:["scrollPageUp"],list:"Basic Editing",src:"videos/basicEditing/scrollPageUp.mp4"}],["Search Again",{combos:["shift+cmd+r","ctrl+shift+r"],commands:["rerunSearchEditorSearch"],list:"Search Editor",src:""}],["Select all occurrences of current selection",{combos:["shift+cmd+l","ctrl+shift+l"],commands:["editor.action.selectHighlights"],list:"Basic Editing",src:""}],["Select all occurrences of current word",{combos:["cmd+f2","ctrl+f2"],commands:["editor.action.changeAll"],list:"Basic Editing",src:""}],["Select All Occurrences of Find Match",{combos:["alt+enter"],commands:["editor.action.selectAllMatches"],list:"Basic Editing",src:""}],["Select Color Theme",{combos:["cmd+k cmd+t","ctrl+k ctrl+t"],commands:["workbench.action.selectTheme"],list:"Preferences",src:""}],["Select current line",{combos:["cmd+l","ctrl+l"],commands:["expandLineSelection"],list:"Basic Editing",src:""}],["Show All Commands",{combos:["shift+cmd+p","ctrl+shift+p","f1"],commands:["workbench.action.showCommands"],list:"Navigation",src:""}],["Show All Symbols",{combos:["cmd+t","ctrl+t"],commands:["workbench.action.showAllSymbols"],list:"Navigation",src:""}],["Show Explorer / Toggle Focus",{combos:["shift+cmd+e","ctrl+shift+e"],commands:["workbench.view.explorer"],list:"Display",src:""}],["Show Extensions",{combos:["shift+cmd+x","ctrl+shift+x"],commands:["workbench.view.extensions"],list:"Display",src:""}],["Show Hover",{combos:["cmd+k cmd+i","ctrl+k ctrl+i"],commands:["editor.action.showHover"],list:"Rich Languages Editing",src:""}],["Show Next Search Term",{combos:["down"],commands:["history.showNext"],list:"Search",src:""}],["Show Output",{combos:["shift+cmd+u","ctrl+shift+u","ctrl+k ctrl+h"],commands:["workbench.action.output.toggleOutput"],list:"Display",src:""}],["Show Previous Search Term",{combos:["up"],commands:["history.showPrevious"],list:"Search",src:""}],["Show Problems",{combos:["shift+cmd+m","ctrl+shift+m"],commands:["workbench.actions.view.problems"],list:"Navigation",src:""}],["Show Run",{combos:["shift+cmd+d","ctrl+shift+d"],commands:["workbench.view.debug"],list:"Display",src:""}],["Show Search",{combos:["shift+cmd+f","ctrl+shift+f"],commands:["workbench.view.search"],list:"Display",src:""}],["Show Source Control",{combos:["ctrl+shift+g"],commands:["workbench.view.scm"],list:"Display",src:""}],["Shrink AST Selection",{combos:["ctrl+shift+cmd+left","shift+alt+left"],commands:["editor.action.smartSelect.shrink"],list:"Rich Languages Editing",src:""}],["Split Editor",{combos:["cmd+\\","ctrl+\\"],commands:["workbench.action.splitEditor"],list:"Editor/Window Management",src:""}],["Start (without debugging)",{combos:["ctrl+f5"],commands:["workbench.action.debug.run"],list:"Debug",src:""}],["Start",{combos:["f5"],commands:["workbench.action.debug.start"],list:"Debug",src:""}],["Step Into",{combos:["f11"],commands:["workbench.action.debug.stepInto"],list:"Debug",src:""}],["Toggle Block Comment",{combos:["shift+alt+a","ctrl+shift+a"],commands:["editor.action.blockComment"],list:"Basic Editing",src:"videos/basicEditing/blockComment.mp4"}],["Toggle Breakpoint",{combos:["f9"],commands:["editor.debug.action.toggleBreakpoint"],list:"Debug",src:""}],["Toggle Find Case Sensitive",{combos:["alt+cmd+c","alt+c"],commands:["toggleFindCaseSensitive"],list:"Basic Editing",src:""}],["Toggle Find Regex",{combos:["alt+cmd+r","alt+r"],commands:["toggleFindRegex"],list:"Basic Editing",src:""}],["Toggle Find Whole Word",{combos:["alt+cmd+w","alt+w"],commands:["toggleFindWholeWord"],list:"Basic Editing",src:""}],["Toggle Fold region",{combos:["cmd+k cmd+l","ctrl+k ctrl+l"],commands:["editor.toggleFold"],list:"Basic Editing",src:""}],["Toggle Full Screen",{combos:["ctrl+cmd+f","f11"],commands:["workbench.action.toggleFullScreen"],list:"Display",src:""}],["Toggle Integrated Terminal",{combos:["ctrl+`"],commands:["workbench.action.terminal.toggleTerminal"],list:"Display",src:""}],["Toggle Line Comment",{combos:["cmd+/","ctrl+/"],commands:["editor.action.commentLine"],list:"Basic Editing",src:"videos/basicEditing/commentLine.mp4"}],["Toggle Markdown Preview",{combos:["shift+cmd+v","ctrl+shift+v"],commands:["markdown.showPreview"],list:"Display",src:""}],["Toggle Match Case",{combos:["alt+cmd+c","alt+c"],commands:["toggleSearchCaseSensitive"],list:"Search",src:""}],["Toggle Match Whole Word",{combos:["alt+cmd+w","alt+w"],commands:["toggleSearchWholeWord"],list:"Search",src:""}],["Toggle Search Details",{combos:["shift+cmd+j","ctrl+shift+j"],commands:["workbench.action.search.toggleQueryDetails"],list:"Search",src:""}],["Toggle Sidebar Visibility",{combos:["cmd+b","ctrl+b"],commands:["workbench.action.toggleSidebarVisibility"],list:"Display",src:""}],["Toggle Use of Tab Key for Setting Focus",{combos:["ctrl+shift+m","ctrl+m"],commands:["editor.action.toggleTabFocusMode"],list:"Basic Editing",src:"videos/basicEditing/toggleTabFocusMode.mp4"}],["Toggle Use Regular Expression",{combos:["alt+cmd+r","alt+r"],commands:["toggleSearchRegex"],list:"Search",src:""}],["Toggle Word Wrap",{combos:["alt+z"],commands:["editor.action.toggleWordWrap"],list:"Basic Editing",src:"videos/basicEditing/toggleWordWrap.mp4"}],["Toggle Zen Mode",{combos:["cmd+k z","ctrl+k z"],commands:["workbench.action.toggleZenMode"],list:"Display",src:""}],["Trigger Parameter Hints",{combos:["shift+cmd+space","ctrl+shift+space"],commands:["editor.action.triggerParameterHints"],list:"Rich Languages Editing",src:""}],["Trigger Suggest",{combos:["ctrl+space"],commands:["editor.action.triggerSuggest"],list:"Rich Languages Editing",src:""}],["Trim Trailing Whitespace",{combos:["cmd+k cmd+x","ctrl+k ctrl+x"],commands:["editor.action.trimTrailingWhitespace"],list:"Rich Languages Editing",src:""}],["Undo last cursor operation",{combos:["cmd+u","ctrl+u"],commands:["cursorUndo"],list:"Basic Editing",src:""}],["Undo",{combos:["cmd+z","ctrl+z"],commands:["undo"],list:"Basic Editing",src:""}],["Unfold (uncollapse) all regions",{combos:["cmd+k cmd+j","ctrl+k ctrl+j"],commands:["editor.unfoldAll"],list:"Basic Editing",src:"videos/basicEditing/unfoldAll.mp4"}],["Unfold (uncollapse) all subregions",{combos:["cmd+k cmd+]","ctrl+k ctrl+]"],commands:["editor.unfoldRecursively"],list:"Basic Editing",src:""}],["Unfold (uncollapse) region",{combos:["alt+cmd+]","ctrl+shift+]"],commands:["editor.unfold"],list:"Basic Editing",src:"videos/basicEditing/unfold.mp4"}],["Zoom in",{combos:["cmd+=","ctrl+="],commands:["workbench.action.zoomIn"],list:"Display",src:""}],["Zoom out",{combos:["cmd+-","ctrl+-"],commands:["workbench.action.zoomOut"],list:"Display",src:""}]]),So=(t,e)=>{const o=t.target,n=o.files?o.files[0]:null;if(n){const s=new FileReader;s.onload=()=>{try{const a=s.result.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//gm,"");let i=JSON.parse(a);const d=[...Q.keys()],l=[...Q.values()].map(c=>c.commands);for(let c=0;c<i.length;(c+=1)-1){const r=e(l,i[c].command);r!==null&&Q.get(d[r]).combos.push(i[c].key)}alert("Custom keybindings added.")}catch(a){console.log(a),alert("It didn't work, sorry. Check console.")}},s.readAsText(n)}};var _o=L('<label class="absolute left-2 cursor-pointer" for="file-upload">Upload keybindings.json</label> <input accept=".json" class="hidden" id="file-upload" type="file">',1);function yo(t,e){Z(e,!0);const o=(i,d)=>{for(let l=0;l<i.length;(l+=1)-1)for(let c=0;c<i[l].length;(c+=1)-1)if(i[l][c]===d)return l;return null};let n=U(void 0);var s=_o(),a=A(N(s),2);a.__change=[So,o],bo(a,()=>g(n),i=>E(n,i)),S(t,s),J()}le(["change"]);var ae=Fe(()=>O),Lo=L('<!> <header class="flex items-center justify-center"><!></header>',1),Fo=L('<div class="absolute left-2"><button>Back</button></div>');function Ao(t,e){Z(e,!1),Le();var o=Pe(),n=N(o);j(n,()=>!ae().v,s=>{var a=Lo(),i=N(a);yo(i,{});var d=A(i,2),l=D(d);Eo(l,{}),M(d),S(s,a)},s=>{var a=Fo(),i=D(a);i.__click=()=>{ae(ae().v=!1)},M(a),S(s,a)}),S(t,o),J()}le(["click"]);var Bo=L('<button class="border-2 border-white px-2 py-1 text-3xl font-bold">Enter</button>'),Mo=L('<video autoplay class="w-1/2 svelte-18c3q72" loop muted></video>'),To=L('<div class="spinner svelte-18c3q72"></div>'),Ro=L('<div> </div> <div> </div> <!> <!> <div class="bg-white hover:bg-primary-color"> </div> <button>Skip</button>',1),Do=L('<!> <div class="absolute right-0 top-0 scale-50"><a href="https://github.com/Tree52/VSCode-Trainer"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" fill-rule="evenodd"></path></svg></a></div> <main class="flex flex-1 flex-col items-center justify-center gap-2"><!></main>',1);function Go(t,e){Z(e,!0);const o=(m,v)=>Math.floor(Math.random()*(v-m+1))+m,n=m=>["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft","AltRight","MetaLeft","MetaRight"].includes(m),a=(()=>{{const m=window.navigator.userAgent;if(/Windows/i.test(m))return"Windows";if(/Mac/i.test(m))return"macOS";if(/Linux/i.test(m))return"Linux"}})();let i=0,d=U(0),l=U(!1),c=U(""),r=[""],f=0;const u=K(()=>[...Q.entries()].filter(([,m])=>m.list===Re.v)),p=K(()=>g(u).map(([,m])=>m)),b=K(()=>g(u).map(([m])=>m)),k=K(()=>({combos:g(p)[g(d)].combos,key:g(b)[g(d)],src:g(p)[g(d)].src})),h=K(()=>g(k).combos.includes(g(c))),w=m=>{const v=[];if((r.includes("ControlLeft")||r.includes("ControlRight"))&&v.push("ctrl"),(r.includes("ShiftLeft")||r.includes("ShiftRight"))&&v.push("shift"),(r.includes("AltLeft")||r.includes("AltRight"))&&v.push("alt"),r.includes("MetaLeft")||r.includes("MetaRight"))switch(a){case"Linux":v.push("meta");break;case"macOS":v.push("cmd");break;case"Windows":v.push("win");break}return n(m)||v.push(po.get(m)),v.join("+")},T=()=>{i=0,r=[],E(c,"")},F=m=>{m.preventDefault(),!m.repeat&&(clearTimeout(f),f=setTimeout(T,500),n(m.code)||(i+=1),m.code==="Enter"&&(O.v=!0),r.push(m.code),i<2?E(c,H(w(m.code))):i===2&&E(c,g(c)+" "+w(m.code)))},_=m=>{r=r.filter(v=>v!==m.code)},P=()=>{T();const m=g(d);for(;m===g(d);)E(d,H(o(0,g(u).length-1)))};be(()=>{O.v||E(d,0)}),be(()=>{g(h)&&P()});var x=Do();so(m=>{io.title="VSCode Trainer"}),G("blur",ie,()=>{r=[]}),G("keydown",ie,F),G("keyup",ie,_);var C=N(x);Ao(C,{});var V=A(C,4),Y=D(V);j(Y,()=>!O.v,m=>{var v=Bo();v.__click=()=>{O.v=!0},S(m,v)},m=>{var v=Ro(),X=N(v),De=D(X);M(X);var ee=A(X,2),xe=D(ee);M(ee);var de=A(ee,2);j(de,()=>g(k).src!=="",W=>{var R=Mo();q(()=>{$(R,"src",g(k).src),uo(R,"isLoading",g(l))}),G("canplay",R,()=>{E(l,!1)}),G("loadstart",R,()=>{E(l,!0)}),S(W,R)});var me=A(de,2);j(me,()=>g(l),W=>{var R=To();S(W,R)});var oe=A(me,2),Ce=D(oe);q(()=>z(Ce,g(k).combos.map(W=>`"${W}"`).join(" "))),M(oe);var Ne=A(oe,2);Ne.__click=P,q(()=>{z(De,g(c)),z(xe,g(k).key)}),S(m,v)}),M(V),S(t,x),J()}le(["click"]);export{Go as component,Ko as universal};
