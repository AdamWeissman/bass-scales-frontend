import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const modeSelected = document.getElementById("scale-root-mode");
const rootNoteSelected = document.getElementById("scale-root-note");

const scale = new Scale("A");
const adapter = new Adapter("http://localhost:3000/api/v0");
const display = new Display(adapter, scale);

display.load;
display.addEventListeners(rootNoteSelected, modeSelected);
display.createScaleFeeling;
