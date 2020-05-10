import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const scale = new Scale("A", "III");

Display.load();
Display.scaleCard(scale);

// const changeRoot = (rootNoteValue) => {
//   console.log(rootNoteValue);
//   const scale = new Scale(rootNoteValue);
//   Display.scaleCard(scale);
// };
// 
// const rootNote = document.getElementById("scale-root-note");
// rootNote.addEventListener("change", changeRoot(rootNote.value), false); 


const rootNoteSelected = document.getElementById("scale-root-note");
const modeSelected = document.getElementById("scale-root-mode");

rootNoteSelected.addEventListener('change', (e) => {
  const scale = new Scale(e.target.value, modeSelected.value);
  Display.scaleCard(scale);
});

modeSelected.addEventListener('change', (e) => {
  const scale = new Scale(rootNoteSelected.value, e.target.value);
  Display.scaleCard(scale);
});


// setTimeout( () => {
//   const scale1 = new Scale("B", "III");
//   Display.scaleCard(scale1);
// }, 5000)
