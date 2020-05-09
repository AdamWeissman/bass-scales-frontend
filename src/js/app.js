import { Bass } from './Bass.js';
import { Scale } from './Scale.js';
import { Adapter } from "./Adapter.js";
import { Display } from "./Display.js";

const scale = new Scale("A", "III");

Display.load();
Display.scaleCard(scale);
setTimeout( () => {
  const scale1 = new Scale("B", "III");
  Display.scaleCard(scale1);
}, 5000)
