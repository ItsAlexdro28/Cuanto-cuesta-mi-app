import { LitElement, html, css, unsafeCSS } from 'lit';
import { listaPreguntas } from '../recursos/matrizDatos.js';
// import estilos from '../css/style.css' assert { type: 'css' }

class componentesCuestionario extends LitElement {
  static properties = {
    indexCuestionario: { type: Number },
    cuestionarioCompletado: {type: Boolean}
  };

  constructor() {
    super();
    this.indexCuestionario=0;
    this.cuestionarioCompletado=false
  }

  
  // static styles = css`${unsafeCSS(estilos)}`;

  siguiente() {
    this.indexCuestionario++;
    if (this.indexCuestionario >= listaPreguntas.length) {
      // final del cuestionario
      console.log('¡Cuestionario completado!');
      this.cuestionarioCompletado= true
    }
  }

  render() {
    if (this.cuestionarioCompletado) {
      return html `
      <style>
        @import "../css/style.css"
      </style>
      <div class="resultado-componente">
        <h2>¡Cuestionario completado!</h2>
      </div>
      `;
    } else {
    const pregunta = listaPreguntas[this.indexCuestionario];
    return html `
    <style>
      @import "../css/style.css"
    </style>
      <div>
        <h2>${pregunta.preguntaTitulo}</h2>
        <ul>
          ${pregunta.opciones.map(
            (opcion, index) => html`
              <li @click=${() => this.siguiente()}>
                <img src=${opcion.imagen} alt="Imagen opción">
                <span>${opcion.texto}</span>
              </li>
            `
          )}
        </ul>
      </div>
    `;}
}
}
customElements.define('preguntas-component', componentesCuestionario);