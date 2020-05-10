import { Scale } from './Scale.js';

export class Display {

  static load() {
    window.addEventListener('DOMContentLoaded', (e) => {
      Display.banner();
      Display.logo();
    });
  }

  static banner() {
    const scalesBanner = document.getElementById("scales-banner");
    scalesBanner.innerHTML = `
      <h1 class="scales-banner--text">SCALES</h1>
      <h1 class="scales-banner--text-shift">SCALES</h1>
    `;
  }

  static logo(){
    const scalesLogo = document.getElementById("scales-logo");
    scalesLogo.innerHTML = `
      <h1 class="scales-logo--text">SCALES</h1>
      <h1 class="scales-logo--text-shift">SCALES</h1>
    `;
  }

  static scaleCard(scale){
    const scaleCard = document.getElementById("scale-card");
    Display.scaleNotes(scaleCard, scale);
  }

  static noteCard(note){
    const noteCard = document.createElement("div");
    noteCard.classList.add("scale-card--note-card");

    const noteText = document.createElement("span");
    noteText.classList.add("scale-card--note-text");

    noteText.innerText = note;
    noteCard.appendChild(noteText);

    return noteCard;
  }

  static scaleNotes(scaleCard, scale){
    Display.removeElements(".scale-card--notes");
    const scaleCardNotes = document.createElement('div');
    scaleCardNotes.classList.add("scale-card--notes");

    scale.notes.map( note => {
      scaleCardNotes.appendChild(Display.noteCard(note));
    });

    scaleCard.appendChild(scaleCardNotes);
  }

  static removeElements(classOrId){
    document.querySelectorAll(classOrId).forEach(e => e.parentNode.removeChild(e));
  }

  static addRootNoteEventListener(rootNoteSelected,modeSelected){
    rootNoteSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use rootNoteSelected.value
      const scale = new Scale(e.target.value, modeSelected.value);
      Display.scaleCard(scale);
    });
  }
}
