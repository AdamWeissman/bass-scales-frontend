export class Display {

  static banner() {
    const scalesBanner = document.getElementById("scales-banner");
    scalesBanner.innerHTML = `
      <h1 class="scales-banner--text">SCALES</h1>
      <h1 class="scales-banner--text-shift">SCALES</h1>
    `;
  }
}
