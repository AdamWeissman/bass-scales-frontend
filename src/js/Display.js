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
}
