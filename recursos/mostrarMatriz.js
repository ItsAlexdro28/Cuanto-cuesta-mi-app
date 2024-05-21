import { LitElement, html, css } from 'lit';
import { listaPreguntas } from './matrizDatos';


class componentesCuestionario extends LitElement {
  static properties = {
    indexCuestionario: { type: Number },
  };

  constructor() {
    super();
    this.indexCuestionario = 0;
  }

  siguiente() {
    this.indexCuestionario++;
    if (this.indexCuestionario >= listaPreguntas.length) {
      // final del cuestionario
      console.log('¡Cuestionario completado!');
    }
  }

  render() {
    const pregunta = listaPreguntas[this.indexCuestionario];
    return html`
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
    `;
  }
}

customElements.define('preguntas-component', componentesCuestionario);
