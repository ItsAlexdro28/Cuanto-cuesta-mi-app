import { LitElement, html } from "lit";

//Crear el objeto con la pregunta, como si fuera todo un conjunto 
const listaPreguntas = [
    {
    preguntaTitulo:"¿Qué nivel de calidad estás buscando?",
    opciones: [
        {texto: "Calidad óptima", imagen: URL('../images/pag1-img1.png')},
        {texto: "Buena relación calidad/precio", imagen: URL('../images/pag1-img2.png')},
        {texto: "No me importa tanto la calidad", imagen: URL('../images/pag1-img3.png')}
        ]
    },
    {
        // COMPLETAR CON LA MISMA ESTRUCTURA
    }
]
{
    title: "¿Qué nivel de calidad estás buscando?",
    opciones: [
      { texto: "Calidad óptima", imagen: "url_imagen1" },
      { texto: "BBB", imagen: "url_imagen2" },
      { texto: "No importa la calidad", imagen: "url_imagen3" }
    ]
  },
    


//Generar botones de opciones, tomando el objeto como argumento y genera boton para cada opcion
const generar = ({opciones}) => {
    let respuesta = " ";

    for (let i = 0; i < opciones.length; ++i) {
        const pregunta = opciones[i];
        respuesta += `
            <button>${pregunta}</button>
        `;
        }
    return respuesta;
}

//Definir un aclase que extienda LitElement

// ~  Con export default, cuando importemos este módulo en otro archivo JavaScript, esta clase será la que se importe por defecto.~
export default class Question extends LitElement {
    constructor() {
        super()
    }
    content= html `
        <div>
            <h2>${pregunta1.pregunta}</h2>
            ${generar(pregunta1)}
        </div>
    `;
    render(){
        return this.content;
    }
}

//Registarr componente web
customElements.define("elemento-generar-clase-Question")


window.customElements.define('my-element', MyElement)
