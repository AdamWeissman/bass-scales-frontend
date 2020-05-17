import { Scale } from './Scale.js';

export class Display {
  constructor(adapter){
    this.adapter = adapter
  }

  get load() {
    window.addEventListener('DOMContentLoaded', (e) => {
      this.banner;
      this.logo;
    });
  }

  get banner() {
    const scalesBanner = document.getElementById("scales-banner");
    scalesBanner.innerHTML = `
      <h1 class="scales-banner--text">SCALES</h1>
      <h1 class="scales-banner--text-shift">SCALES</h1>
    `;
  }

  get logo(){
    const scalesLogo = document.getElementById("scales-logo");
    scalesLogo.innerHTML = `
      <h1 class="scales-logo--text">SCALES</h1>
      <h1 class="scales-logo--text-shift">SCALES</h1>
    `;
  }

  scaleCard(scale){
    const scaleCard = document.getElementById("scale-card");
    this.scaleNotes(scaleCard, scale);
  }

  noteCard(note){
    const noteCard = document.createElement("div");
    noteCard.classList.add("scale-card--note-card");

    const noteText = document.createElement("span");
    noteText.classList.add("scale-card--note-text");

    noteText.innerText = note;
    noteCard.appendChild(noteText);

    return noteCard;
  }

  scaleNotes(scaleCard, scale){
    this.removeElements(".scale-card--notes");
    const scaleCardNotes = document.createElement('div');
    scaleCardNotes.classList.add("scale-card--notes");

    scale.notes.map( note => {
      scaleCardNotes.appendChild(this.noteCard(note));
    });

    scaleCard.appendChild(scaleCardNotes);
  }

  removeElements(classOrId){
    document.querySelectorAll(classOrId).forEach(e => e.parentNode.removeChild(e));
  }

  addRootNoteEventListener(rootNoteSelected, modeSelected){
    rootNoteSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use rootNoteSelected.value
      const scale = new Scale(e.target.value, modeSelected.value);
      this.scaleCard(scale);
    });
  }

  addModeEventListener(rootNoteSelected, modeSelected){
    modeSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use modeSelected.value
      const scale = new Scale(rootNoteSelected.value, e.target.value);
      this.scaleCard(scale);
    });
  }
}
