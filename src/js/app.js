import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const scale = new Scale("A");
const modeSelected = document.getElementById("scale-root-mode");
const rootNoteSelected = document.getElementById("scale-root-note");

Display.load();
Display.scaleCard(scale);
Display.addRootNoteEventListener(rootNoteSelected,modeSelected);
Display.addModeEventListener(rootNoteSelected, modeSelected);
