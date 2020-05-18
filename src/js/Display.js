export class Display {
  constructor(adapter, scale){
    this.adapter = adapter;
    this.scale = scale;
  }

  get load() {
    window.addEventListener('DOMContentLoaded', (e) => {
      this.banner;
      this.logo;
      this.scaleCard;
      this.scaleFeelings;
    });
  }

  addEventListeners(rootNoteSelected, modeSelected){
    this.addRootNoteEventListener(rootNoteSelected, modeSelected);
    this.addModeEventListener(rootNoteSelected, modeSelected);
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

  get scaleCard(){
    const scaleCard = document.getElementById("scale-card");
    this.scaleNotes(scaleCard);
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

  scaleNotes(scaleCard){
    this.removeElements(".scale-card--notes");
    const scaleCardNotes = document.createElement('div');
    scaleCardNotes.classList.add("scale-card--notes");

    this.scale.notes.map( note => {
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
      this.scale.root = e.target.value;
      this.scale.mode = modeSelected.value;
      this.scaleCard;
      this.scaleFeelings;
    });
  }

  addModeEventListener(rootNoteSelected, modeSelected){
    modeSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use modeSelected.value
      this.scale.root = rootNoteSelected.value;
      this.scale.mode = e.target.value;
      this.scaleCard;
      this.scaleFeelings;
    });
  }

  buildScaleFeelings(feelings){
    this.removeElements("#feelings-show-card div")
    const feelingsShowCard = document.getElementById("feelings-show-card");

    for(const feeling of feelings){
      const feelingDiv = document.createElement('div');
      feelingDiv.innerHTML = `
        <span>${feeling.adjective}</span>
        <span>${feeling.count}</span>
      `;
      feelingsShowCard.appendChild(feelingDiv);
    }
  }

  get scaleFeelings(){
    const endpoint = `/scales/${this.scale.dbIndex}`;
    this.adapter.get(endpoint)
      .then(json => {
        this.buildScaleFeelings(json.data.top_feelings);
      });
  }

  get createScaleFeeling(){
    const endpoint = `/scales/${this.scale.dbIndex}/feelings`;
    const scale_id = this.scale.dbIndex;
    const feelingAdjective = "Weirdness";
    const data = {"scale_id": scale_id, "feeling_adjective": feelingAdjective};

    this.adapter.post(endpoint, data)
      .then(json => {
        console.log(json);
      });
  }
}
