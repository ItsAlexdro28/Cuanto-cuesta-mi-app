import { LitElement, html, css, unsafeCSS } from 'lit';
import { listaPreguntas } from '../recursos/matrizDatos.js';

class ComponentesCuestionario extends LitElement {
  static properties = {
    indexCuestionario: { type: Number },
    cuestionarioCompletado: { type: Boolean },
    subOpciones: { type: Array },
    enIncio:{type: Boolean}
  };

  constructor() {
    super();
    this.indexCuestionario = 0;
    this.cuestionarioCompletado = false;
    this.subOpciones = null; // Nueva propiedad para manejar subopciones
    this.enIncio = true;
  }

  getProgress() {
  return `${this.indexCuestionario + 1} / ${listaPreguntas.length}`;
  }
  getLast() {
    if (this.indexCuestionario > 0) {
      this.indexCuestionario--;
    }
  }
  empezarCuestionario(){
    this.enIncio = false;
  }
  siguiente(opcion) {
    if (opcion.subOpciones) {
      this.subOpciones = opcion.subOpciones; // Mostrar subopciones en lugar de avanzar
    } else {
      this.indexCuestionario++;
      this.subOpciones = null; // Reiniciar subopciones
      if (this.indexCuestionario >= listaPreguntas.length) {
        // final del cuestionario
        console.log('¡Cuestionario completado!');
        this.cuestionarioCompletado = true;
      }
    }
  }

  renderOpciones(opciones) {
    return opciones.map(
      (opcion) => html `
        <li @click=${() => this.siguiente(opcion)}>
          <img src=${opcion.imagen} alt="Imagen opción">
          <span>${opcion.texto}</span>
        </li>
      `
    );
  }

  render() {
    if(this.enIncio){
      return html `
      <style>
        @import "../css/style.css";
      </style>
      <div class="intro">
          <img src="images/intro.png" class="imagen" id="imagen-intro">
          <h1 class="titulo">¿Cuánto cuesta desarrollar mi app?</h1>
          <h2 class="subtitulo">Calcula de forma rápida el costo para crear tu app, contestando estas sencillas preguntas.</h2>
          <button @click=${this.empezarCuestionario} class="intro-boton">EMPEZAR</button>
      </div>
      `;
    }

    if (this.cuestionarioCompletado) {
      return html `
      <style>
        @import "../css/style.css";
      </style>
      <div class="resultado-componente">
        <h2>¡Cuestionario completado!</h2>
      </div>
      `;
    } else {
      const pregunta = listaPreguntas[this.indexCuestionario];
      return html `
      <style>
        @import "../css/style.css";
      </style>
      <div>
      <button @click=${() => this.getLast()} ?disabled=${this.indexCuestionario === 0}>Anterior</button>
      <p id="numeroPagina">${this.getProgress()}</p>
        <h2>${pregunta.preguntaTitulo}</h2>
        <ul>
          ${this.renderOpciones(this.subOpciones || pregunta.opciones)}
        </ul>
      </div>
    `
      ;}
  }
}

customElements.define('preguntas-component', ComponentesCuestionario);      