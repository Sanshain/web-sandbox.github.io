// @ts-check

import initializeEditor, { compileSingleFileComponent } from "./aceInitialize"
import { createPage, webCompile } from './pageBuilder';

import { expand } from "./features/expantion"
import { initResizers } from "./features/resizing"
import {
    babelCompiler,
    compilersSet,
    defaultValues,
    singleFileEnv,
    versionController,
    playgroundObject,
    compilerNames
} from './features/compiler';
import { commonStorage, loadScripts, getExtension, typeFromExtention, isSingleFC } from "./utils/utils"
import { fileAttach } from "./features/tabs"

import { ChoiceMenu } from "./ui/ChoiceMenu"
import { modes } from "./features/base.js"

// import { dropMode, initialize as tsInitialize } from "ts-a-editor";

/**
 * @typedef {import("typescript").LanguageServiceHost} LanguageServiceHost
 * @typedef {import("typescript").CompilerOptions} CompilerOptions
 */

// tsInitialize({

// })

import "./features/consoleDebug"
import { saveFile, saveScript } from './features/fs/store';

/**
 * @typedef {import("./ui/ChoiceMenu").ChoiceDetails} ChoiceDetails
 */

/**
 * @type { Array<keyof compilersSet>}
 */
const frameworkEnvironment = []

/**
 * @type {string[]?}
 */
let cachedEnvironment = null

/**
 * @description Do full environment cleaning and filling from scratch
 * @param {string[]} environment - environment - list of external (or internal) scripts or another resources to load content
 * @param {keyof compilersSet} envName - framework environment name
 * @param {string} [entryPoint=''] - code
 */
function updateEnvironment(environment, envName, entryPoint) {
   const isJSX = Object.keys(compilersSet).indexOf(envName) % 2

   environment.splice(0, environment.length)

   if (versionController[envName] && !entryPoint && cachedEnvironment) {
      cachedEnvironment.forEach((link) => environment.push(link))
      return environment
   } else if (versionController[envName] && entryPoint) {
      let entries = Object.entries(versionController[envName])

      /**
       * @type {[string, [string]]?}
       */
      let ver = entries.find(([k, v]) => ~entryPoint.indexOf(k))
      if (ver && ver.length && ver[1].length) {
         // version x.x.x
         let verNum = ver[1][0].match(/\d+\.\d+\.\d+/)
         if (verNum) {
            console.log(envName, "version: ", verNum.pop())
         }

         ;(cachedEnvironment = ver[1].concat(isJSX ? [babelCompiler.link] : [])).forEach((link) => environment.push(link))
         return environment
      }
   }

   const libs = compilersSet[envName] || []

   libs.forEach((/** @type {string} */ lib) => {
      environment.push(lib)
   })

   // window['__DEBUG'] && console.log(environment);

   return environment
}

window.addEventListener("message", function (event) {
   console.log("root.onmessage << ", event.data)
   if (!event.data.value) {
      return
   }

   // let value = event.data.value;
   let consoleJar = document.querySelector(".console .lines")
   if (consoleJar) {
      let line = consoleJar.appendChild(document.createElement("div"))

      // line.innerText = event.data.value;
      let snipElem = line.appendChild(document.createElement("div"))
      snipElem.textContent =
         "> " + typeof event.data.value === "object"
            ? ~event.data.value.toString().indexOf("HTML")
               ? event.data.value
               : JSON.stringify(event.data.value)
            : event.data.value

      if (event.data.error) {
         snipElem.style.color = "red"
         // resultElem.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
         snipElem.style.fontFamily = "monospace"
      }

      consoleJar.scrollTo(0, consoleJar.scrollHeight)

      // event.target.focus()
   }

   // let line = window.parent.document.querySelector('.console .lines').appendChild(document.createElement('div'));
   // line.innerText = typeof value === 'object' ? JSON.stringify(value) : value;
})

/**
 *
 * @typedef {{
 *  [k: string]: {
 *      extension?: `.${string}`,
 *      src?: string | string[],
 *      inside?: boolean,
 *      prehandling?: (code: string) => string,
 *      mode?: string,
 *      tabs?: boolean,
 *      runtimeService?: {
 *           loadPackages(libFiles?: string[]): LanguageServiceHost,                                                         // to load Vue etc
 *           loadContent(filename: string, content: string, keepExistContent: true): void,                                   // load entry point content on tab creation
 *           changeSelectFileName(filename: string): void;                                                                   // change select file on tab switching
 *           getFileContent(name: string): string,
 *           getSelectFileName(): string,
 *           removeFile: (fileName: string) => void;                                                                         // remove file from host on remove tab
 *           getLoadedFilenames: () => string[];
 *           hasFile: (fileName: any) => boolean;
 *           updateFile: (fileName: string, content: string) => void;                                                        // update file content for type checking on tab switching (when works - its autoupdates)
 *           setCompilationSettings: (settings: CompilerOptions) => void;
 *           getCompilationSettings: () => CompilerOptions;
 *           _$editFile: (fileName: string, minChar: number, limChar: number, newText: string) => void;
 *      },
 *      onModeChange?: (arg: {enable: boolean, disable?: boolean, editor: AceEditor, editors?: ReturnType<initializeEditor>}) => void,
 *      target?:{
 *          external?: boolean,
 *          tag?: 'link'|'script'|'style'|'body',
 *          attributes?: string
 *      }
 *  }
 * }} LangMode
 *
 * @typedef { 0 | 1 | 2 | 3 } SyntaxMode - keyof (Object.keys(compilers) | ['vanile', 'preact', 'vue', 'react'])
 * @typedef {import("./aceInitialize").AceEditor} AceEditor
 *
 * @param {[string, string, string, Storage|object?]} values
 * @param {{
 *      onControlSave?: Function,                                                           // on ctrl+save callback
 *      tabAttachSelector?: string,                                                         // selector for tab attach (tabs must be decorated in DOM outside the package)
 *      modes?: [LangMode?, LangMode?, LangMode?],                                          // list of modes sets
 *      onModeChange?: (a: {editor: AceEditor, mode: string, prevMode?: string}) => void,   // on chenge mode (for example less => scss)
 *      onfilerename?: Function,                                                            // on file reneme event
 *      onfileRemove?: (s: string) => void,                                                 // on file remove event
 *      additionalFiles?: Storage|object,                                                   // ? implemented?
 *      quickCompileMode?: boolean,                                                         // ? not implemented - the quick mode compilation via onmessages iver sandbox communication
 *      syntaxMode?: SyntaxMode,                                                            // index of initial selected  framawork
 *      frameworkJug?: string,                                                              // html selector for input element w actual framework
 *      clarifyframework?: (code: string, fwmode: number | SyntaxMode) => SyntaxMode        // ? identifier rfamework on depend of source code
 * }?} options
 * @returns {ReturnType<initializeEditor>} {unknown[]}
 */
export function initialize(values, options) {
   options = options || {}

   /**
    * @type {number} - 0 | 1 | 2 | 3 - its mean vanile|preact|vue|react
    */
   let frameworkID = options.syntaxMode != undefined ? options.syntaxMode : Number.parseInt((commonStorage || localStorage).getItem("mode") || "0")

   playgroundObject.frameworkID = frameworkID = options.clarifyframework && values ? options.clarifyframework(values[2], frameworkID) : frameworkID

   window.location.hash.startsWith("#debug") && console.log("frameworkID", frameworkID)

   //@ts-expect-error
   document.getElementById("compiler_mode").selectedIndex = frameworkID

   // js mode:
   const jsxMode = !!(frameworkID % 2)
   if (jsxMode) {
      // document.getElementById('jseditor').classList.add('dis_errors');
   }

   playgroundObject.modes = options.modes
   playgroundObject.onfilerename = options.onfilerename
   playgroundObject.onfileRemove = options.onfileRemove

   const frameworkName = Object.keys(compilersSet)[frameworkID]

   updateEnvironment(
      frameworkEnvironment,
      //@ts-expect-error
      frameworkName,
      values[2] || commonStorage.getItem(frameworkID + "__" + modes[2])
   )

   // Object.values(compilers)[syntaxMode].forEach(link => frameworkEnvironment.push(link));
   const updateEnv = updateEnvironment.bind(null, frameworkEnvironment)

   // @ts-ignore
   let compileFunc = frameworkID ? webCompile.bind(null, jsxMode) : webCompile

   initResizers()

   // let compileFunc = mode ? webCompile.bind(null, mode > 1, mode) : webCompile;
   // console.log(mode);
   // console.log(Object.values(compilers)[mode]);

   /**
    * @_type // TODO
    */
   const editorOptions = {
      compileFunc,
      frameworkEnvironment,
      quickCompileMode: options.quickCompileMode,
      controlSave: options.onControlSave,
      storage: commonStorage,
      frameworkID,
      updateEnv
   }

   if (options.additionalFiles) {
      // @ts-expect-error
      values = values || []
      values[3] = options.additionalFiles
   }

   // @ts-expect-error
   let editors = (playgroundObject.editors = initializeEditor(ace, editorOptions, values))

   /**
    * Choice arg settings:
    */
   if (options.modes) {
      !customElements.get("choice-menu") && customElements.define("choice-menu", ChoiceMenu)
      console.log(options.modes)

      options.modes.forEach(function (/** @type {LangMode} */ mode, /** @type {number} */ i) {
         let items = [] // ['css','less','stylus']

         if (mode && (items = Object.keys(mode)).length > 1) {
            /**
             * @type {ChoiceMenu}
             */
            //@ts-expect-error
            const settingsElement = editors[i].container.appendChild(document.createElement("choice-menu"))
            settingsElement.className = "settings"

            //@ts-expect-error
            settingsElement.addEventListener("selected_changed", (/** @type { CustomEvent<ChoiceDetails> } */ ev) => {
               /**
                * @_type {{src?: string, tabs?: true, mode?: 'html'|'css'|'javascript', extension?: string}}
                * @type {LangMode[string]}
                */
               onLangModeChanged(mode, ev, { globalOptions: options, editors, i })
            })

            const markLine = editors[i].session.getLine(0) // editors[i].getValue()

            const list = settingsElement.appendChild(document.createElement("ul"))
            items.forEach((point, j) => {
               let itemElement = list.appendChild(document.createElement("li"))
               itemElement.innerText = point

               let mark = markLine.match(new RegExp("/\\* (" + point + ") \\*/"))

               if (!j) settingsElement.selectedElement = itemElement
               else if (mark) {
                  // mark[1]
                  settingsElement.selectedElement = itemElement
                  settingsElement.dispatchEvent(new CustomEvent("selected_changed", { detail: { value: point } }))
               }
            })
         }
      })
   }

   /**
    * terminal button:
    */
   let terminal = editors[2].container.appendChild(document.createElement("div"))
   terminal.className = "terminal"
   terminal.onclick = () => {
      const logContainer = document.querySelector(".console")
      const play = document.querySelector(".play")
      const save = document.querySelector(".save")

      // don`t work for mobile chrome (for some reason):
      // logContainer.parentElement.style.zIndex = 6 + '';

      //@ts-ignore
      if (logContainer && !logContainer.classList.toggle("hidden")) {
         let input = logContainer.querySelector("input")
         input.focus()
      }

      play.classList.toggle("hidden")
      save && save.classList.toggle("hidden")
   }

   // tabs initial renaming:
   
   const tabs = document.querySelector(".tabs");
   if (tabs) {
      const firstTab = tabs.children[0]
      const frameworkExtension = isSingleFC()
      if (frameworkExtension && firstTab) {
         firstTab['innerText'] = 'App.' + frameworkExtension
      }
   }

   const extension = typeFromExtention(frameworkName)
   if (singleFileEnv[extension]) {
      compileSingleFileComponent(extension, frameworkEnvironment, editors)
   } //
   else {
      const [iframe, curUrl] = createPage(playgroundObject.curUrl, frameworkEnvironment, jsxMode ? babelCompiler.mode : undefined, {
         frameworkName: frameworkName
      }) // editorOptions

      playgroundObject.iframe = iframe
      playgroundObject.curUrl = curUrl
   }

   document.querySelector(".play").addEventListener("click", () => {
      const frameworkEnvironment = editorOptions.updateEnv(Object.keys(compilersSet)[frameworkID], editors[2].getValue())
      const extension = typeFromExtention(frameworkName)

      if (singleFileEnv[extension]) compileSingleFileComponent(extension, frameworkEnvironment, editors)
      else {
         webCompile(jsxMode, frameworkEnvironment)
      }
   })

   document.querySelector(".expand")["onclick"] = (/** @type {{ currentTarget: any; }} */ e) => {
      //
      expand(e, frameworkEnvironment, jsxMode ? babelCompiler.mode : undefined)
   }

   document.getElementById("compiler_mode").onchange = function (event) {
      // @ts-ignore
      ;(editorOptions.storage || localStorage).setItem("mode", event.target.selectedIndex)

      // @ts-ignore
      if (event.target.selectedIndex || true) location.reload()
      else {
         for (let i = 0; i < editors.length; i++) {
            //@ts-ignore
            let value = (editorOptions.storage || localStorage).getItem(event.target.selectedIndex + "__" + modes[i]) || ""
            editors[i].session.setValue(value)
         }
         // document.querySelector('.play').click();
      }

      // localStorage.setItem('mode', event.target.selectedOptions[event.target.selectedIndex].value)
      // console.log(event.target.selectedIndex);
   }

   options.tabAttachSelector &&
      document.querySelector(options.tabAttachSelector).addEventListener("click", function (e) {
         e["editors"] = editors
         fileAttach(e)
      })

   editors.playgroundObject = playgroundObject
   editors.updateEnv = updateEnv

   return editors
}

/**
 * 
 * @param {LangMode} mode 
 * @param {CustomEvent<ChoiceDetails>} ev 
 * @param {{
 *    globalOptions: Parameters<initialize>[1], 
 *    editors: EditorsEnv, 
 *    i: number
 * }} options 
 */
function onLangModeChanged(mode, ev, {globalOptions, editors, i}) {
   const modeOptions = mode[ev.detail.value] || {
      extension: ".js"
      // mode: 'javascript'
   }
   // const link = options.modes[i][e.detail.value];
   window.__debug && console.log(ev.detail.value)

   globalOptions.onModeChange && globalOptions.onModeChange({ mode: ev.detail.value, prevMode: ev.detail.previousValue, editor: editors[i] })

   if (globalOptions.modes[i]) {
      let langmode = globalOptions.modes[i][ev.detail.value] || globalOptions.modes[i][ev.detail.previousValue]

      if (langmode && langmode.onModeChange) {
         let currentMode = (modeOptions.mode || "").split("/").pop() || modes[i]

         langmode.onModeChange({
            disable: currentMode === ev.detail.value,
            enable: currentMode === ev.detail.previousValue,
            editor: editors[i],
            editors: editors
         })
      }
   }

   if (!(globalOptions.modes[i] && globalOptions.modes[i][ev.detail.value] && globalOptions.modes[i][ev.detail.value].onModeChange)) {
      // upload to frame will in pageBuilder, here just is highlight change
      i === 1 && editors[i].session.setMode("ace/mode/" + ((modeOptions && modeOptions.mode) || ev.detail.value))

      if (i === 2) {
         const mode = playgroundObject.frameworkID % 2 ? "jsx" : (modeOptions && modeOptions.mode) || ev.detail.value

         Object.values(editors[i].session.getMarkers(true)).forEach((m) => editors[i].session.removeMarker(+m.id))

         editors[i].session.setMode("ace/mode/" + mode)
         // editors[i].session.setMode("ace/mode/" + ((modeOptions && modeOptions.mode) || ev.detail.value))
      }
   }

   // MULTITABS visible MODE:
   if (i && i - 1) {
      const multitabs = modeOptions && modeOptions.tabs
      var tabs = document.querySelector(".tabs") //  + (multitabs ? '' : '.enabled')
      if (tabs) {
         //@ts-ignore
         tabs.style.transition = null
         if (multitabs) {
            if (!tabs.classList.contains("enabled")) {
               // enable tab:
               tabs.classList.add("enabled")
            } else {
               // switch to first tab:
               // debugger
               //@ts-expect-erro r
               // tabs.children[0] && tabs.children[0].click()
            }
         } else if (!multitabs && tabs.classList.contains("enabled")) {
            tabs.classList.remove("enabled")
         }
      }
   }

   // REPLACE TITLE MARK OF THE MODE (FLAG) IN BEGIN OF FILE:
   //@ts-ignore
   var Range = ace.require("ace/range").Range

   // let markLine = editors[i].session.getLine(0)
   let _markLineJug = playgroundObject.fileStorage[playgroundObject.entryPointName];
   const markedContent = typeof _markLineJug == 'string' ? _markLineJug : _markLineJug[2]
   const markValue = "/* " + ev.detail.value + " */"

   const saveRoot = saveScript.bind(null, playgroundObject.entryPointName);
   if (markedContent.startsWith("/*")) {
      // editors[i].session.replace(new Range(0, 0, 0, markedContent.length), markValue)      
      saveRoot(markedContent.replace(/\/\*[\s\S]+?\*\//m, markValue))
   } //
   else {
      // editors[i].session.insert({ row: 0, column: 0 }, markValue + "\n\n")
      saveRoot(markValue + "\n\n" + markedContent)
   }

   // editors[i].clearSelection()

   // RENAME FILES:
   if (tabs) {
      //
      console.log("initial tab rename")

      renameTabs(tabs, { editors: editors, extension: modeOptions.extension })
   }
}



/**
 *
 * @param {*} tabs
 * @param {{
 *    editors: [AceEditor, AceEditor, AceEditor],
 *    extension?: string
 * }} options
 */
function renameTabs(tabs, options) {
   // TODO .vue and .svelte support

   // const fraworkExtName = isSingleFC()

   // const modeExt = (modeOptions || { ext: '.js' }).extension; // TODO may be fix error on modeOptions = undefined
   // debugger

   if (Object.keys(playgroundObject.fileStorage).length > 1) {

      if (!playgroundObject.fileStorage["app" + options.extension]) {
         // rename tabs:
         const jsPattern = /([\w_\d]+)\.js(x)?$/m
         const tsPattern = /([\w_\d]+)\.ts(x)?$/m
         ;[].slice.call(tabs.querySelectorAll(".tab")).forEach((/** @type {HTMLElement} */ element) => {
            if (options.extension) {
               if (!element.innerText.endsWith(options.extension)) {
                  element.innerText = element.innerText.replace(jsPattern, "$1.ts$2")
               }
            } else if (!element.innerText.endsWith(".js")) {
               element.innerText = element.innerText.replace(tsPattern, "$1.js$2")
            }
         })

         // file name rename:
         /**
          * @type {[RegExp, string]}
          */
         const extensions = options.extension ? [jsPattern, "$1.ts$2"] : [tsPattern, "$1.js$2"]

         let storageFiles = Object.keys(playgroundObject.fileStorage).map((k) => ({
            [k.replace(extensions[0], extensions[1])]: playgroundObject.fileStorage[k]
         }))
         playgroundObject.fileStorage = Object.assign({}, ...storageFiles)

         // imports refactoring:
         for (let file in playgroundObject.fileStorage) {
            const fileContent = playgroundObject.fileStorage[file]
            if (typeof fileContent === "string") {
               playgroundObject.fileStorage[file] = fileContent.replace(extensions[0], extensions[1])
            }
         }

         let cursor = options.editors[2].selection.getCursor()
         options.editors[2].session.setValue(
            options.editors[2].session
               .getValue()
               .replace(new RegExp(extensions[0].toString().slice(1, -2).replace("$", "(['\"])$"), "m"), extensions[1] + "$3")
         )
         options.editors[2].moveCursorTo(cursor.row, cursor.column)

         // let pos = editors[2].find(new RegExp(extensions[0].toString().slice(1, -2).replace('$', '([\'"])$'), 'm'))
         /// replace value idoes not applying as regex value (with groups $1, $2 etc)
         // pos && editors[2].getSession().replace(pos, extensions[1])
      }
   }

   if (options.extension) {
      /**
       * @type {HTMLElement}
       */
      const firstTab = tabs.children[0]

      // if (fraworkExtName) firstTab.innerText = "App." + fraworkExtName
      const nameChunks = firstTab.innerText.split(".")
      const currentExtension = nameChunks.pop();      

      // if (!~firstTab.innerText.indexOf(options.extension, firstTab.innerText.length - options.extension.length)) {
      if (!~[options.extension.slice(1), compilerNames[playgroundObject.frameworkID]].indexOf(currentExtension)) {
         // firstTab.innerText = firstTab.innerText.split(".").shift() + options.extension         
         firstTab.innerText = nameChunks.shift() + options.extension
      }
   }
}
// export const {editors}
