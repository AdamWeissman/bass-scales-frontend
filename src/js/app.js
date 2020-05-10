import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const scale = new Scale("A", "III");
const modeSelected = document.getElementById("scale-root-mode");
const rootNoteSelected = document.getElementById("scale-root-note");

Display.load();
Display.scaleCard(scale);
Display.addRootNoteEventListener(rootNoteSelected,modeSelected);

// const changeRoot = (rootNoteValue) => {
//   console.log(rootNoteValue);
//   const scale = new Scale(rootNoteValue);
//   Display.scaleCard(scale);
// };
// 
// const rootNote = document.getElementById("scale-root-note");
// rootNote.addEventListener("change", changeRoot(rootNote.value), false); 



modeSelected.addEventListener('change', (e) => {
  const scale = new Scale(rootNoteSelected.value, e.target.value);
  Display.scaleCard(scale);
});


// setTimeout( () => {
//   const scale1 = new Scale("B", "III");
//   Display.scaleCard(scale1);
// }, 5000)
