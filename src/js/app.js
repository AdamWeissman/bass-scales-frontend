import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const scale = new Scale("A");
const modeSelected = document.getElementById("scale-root-mode");
const rootNoteSelected = document.getElementById("scale-root-note");
const display = new Display("adapter");

display.load;
display.scaleCard(scale);
display.addRootNoteEventListener(rootNoteSelected,modeSelected);
display.addModeEventListener(rootNoteSelected, modeSelected);
