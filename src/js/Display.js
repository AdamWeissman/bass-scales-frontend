export class Display {
  constructor(adapter, scale){
    this.adapter = adapter;
    this.scale = scale;
    this.modeSelected = document.getElementById("scale-root-mode");
    this.rootNoteSelected = document.getElementById("scale-root-note");
  }

  get load() {
    window.addEventListener('DOMContentLoaded', (e) => {
      // this.banner;
      this.logo;
      this.scaleCard;
      this.scaleFeelings;
    });
  }

  get addEventListeners() {
    this.addRootNoteEventListener;
    this.addModeEventListener;
    this.addFeelingListener;
  }

  get banner() {
    const scalesBanner = document.getElementById("scales-banner");
    scalesBanner.innerHTML = `
      <img src="src/img/scales.png" alt="SCALES">
    `;
  }

  get logo(){
    const scalesLogo = document.getElementById("scales-logo");
    scalesLogo.innerHTML = `
      <img src="src/img/scales.png" alt="SCALES">
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

  get updateView(){
    this.scaleCard;
    this.scaleFeelings;
  }

  get addRootNoteEventListener(){
    this.rootNoteSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use this.rootNoteSelected.value
      this.scale.root = e.target.value;
      this.scale.mode = this.modeSelected.value;
      this.updateView;
    });
  }

  get addModeEventListener(){
    this.modeSelected.addEventListener('change', (e) => {
      // instead of e.target.value, could also use this.modeSelected.value
      this.scale.root = this.rootNoteSelected.value;
      this.scale.mode = e.target.value;
      this.updateView;
    });
  }

  buildScaleFeelings(feelings){
    this.removeElements("#feelings-show-card div")
    this.removeElements("#feeling-input-form--errors li");
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

  get addFeelingListener(){
    const feelingInput = document.querySelector("#feeling-input-form");
    feelingInput.addEventListener('submit', (event) => {
      event.preventDefault();
      const feelingAdjective = feelingInput.querySelector("#adjective").value;
      this.createScaleFeeling(feelingAdjective);
    }, false);
  }

  updateScaleFeelings(json){
    const errors = json.errors;
    if (errors === false){
      this.scaleFeelings;
    }
    else{
      const etag = document.getElementById("feeling-input-form--errors");
      for(const error of errors){
        const errorLi = document.createElement("li");
        errorLi.innerText = error;
        etag.appendChild(errorLi);
      }
    }
  }

  createScaleFeeling(feelingAdjective){
    const endpoint = `/scales/${this.scale.dbIndex}/feelings`;
    const scale_id = this.scale.dbIndex;
    const data = {"scale_id": scale_id, "feeling_adjective": feelingAdjective};

    this.adapter.post(endpoint, data)
      .then(json => {
        this.updateScaleFeelings(json);
      });
  }
}
