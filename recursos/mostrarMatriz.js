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
        <div @click=${() => this.siguiente(opcion)} class="opcion">
          <div class="tarjeta">
            <img src=${opcion.imagen} alt="Imagen opción" class="imagenOpcion">
            <br>
            <span>${opcion.texto}</span>
          </div>
        </div>

      `
    );
  }

  render() {
    if(this.enIncio){
      return html `
      <style>
        @import "../css/style.css";
      </style>
    <section id="pagina1">
      <div class="intro">
          <img src="images/intro.png" class="imagen" id="imagen-intro">
          <h1 class="titulo">¿Cuánto cuesta desarrollar mi <strong class="app">app</strong>?</h1>
          <h2 class="subtitulo">Calcula de forma rápida el costo para crear tu app, contestando estas sencillas preguntas.</h2>
          <button @click=${this.empezarCuestionario} class="intro-boton">EMPEZAR</button>
      </div>
    </section>
      `
    }

    if (this.cuestionarioCompletado) {
      return html `
      <style>
        @import "../css/style.css";
      </style>
      <section class="ultimaPagina">
      <p>Bien! ¡Hemos terminado!</p>
      <h3>¡Compártenos si te ha gustado!</h3>
      <div class="redesSociales">
        <div id="facebook" class="red">
          <img src="images/facebook-removebg-preview.png" class="icon">
          <p class="textoPequeño">Share</p>
        </div>
        <div id="link" class="red">
          <img src="images/LinkedIn.webp" class="icon">
          <p>Share</p>
        </div>
        <div id="google" class="red">
          <img src="images/google.png" class="icon">
          <p>Google +</p>
        </div>
        <div id="twitter" class="red">
          <img src="images/twitter.webp" class="icon">
          <p>Tweet</p>
        </div>

      </div>

      <h1>El costo estimado de tu app es</h1>
      <h1 id="costo">COSTO</h1>

    </section>
      `;
    } else {
      const pregunta = listaPreguntas[this.indexCuestionario];
      return html `
      <style>
        @import "../css/style.css";
      </style>
      <button @click=${() => this.getLast()} ?disabled=${this.indexCuestionario === 0} class="anteriorBoton">← Anterior</button>
      <p class="numeroPagina">${this.getProgress()}</p>

      <div class="tarjetaContainer">

        <div class="tituloTarjeta">
          <h2>${pregunta.preguntaTitulo}</h2>
        </div>

        <div class="cargaDatos">
          ${this.renderOpciones(this.subOpciones || pregunta.opciones)}
        </div>
          
      </div>
      `
      ;}
  }
}

customElements.define('preguntas-component', ComponentesCuestionario);      