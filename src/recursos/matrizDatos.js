import { LitElement, html } from "lit";

//ese es mi objeto
//Crear el objeto con la pregunta, como si fuera todo un conjunto 

export const listaPreguntas = [
    {
    preguntaTitulo:"¿Qué nivel de calidad estás buscando?",
    opciones: [
        {texto: "Calidad óptima", imagen: ('../src/images/pag1-img1.png'), id: "1"},
        {texto: "Buena relación calidad/precio", imagen: ('../src/images/pag1-img2.png'), id: "2"},
        {texto: "No me importa tanto la calidad", imagen: ('../src/images/pag1-img3.png'), id: "3"},
        ]
    },
    {
    preguntaTitulo:"¿Qué tipo de App necesitas?",
    opciones: [
        {texto: "Aplicación Android", imagen: ('../src/images/pag2-img1.png'), id: "1"},
        {texto: "Aplicación iOS", imagen: ('../src/images/pag2-img2.png'), id: "2"},
        {texto: "Aplicación Windows Phone", imagen: ('../src/images/pag2-img3.png'), id: "3"},
        {texto: "Aplicación Android + iOS", imagen: ('../src/images/pag2-img4.png'), id: "7"},
        {texto: "Aplicación para escritorio", imagen: ('../src/images/pag2-img5.webp'), subOpciones: [
                {texto: "SPA", imagen: ('../src/images/pagDesk-img2.webp'), id: "4"},
                {texto: "PWA", imagen: ('../src/images/pagDesk-img1.webp'), id: "5"},
                {texto: "NATIVE", imagen: ('../src/images/pagDesk-img3.webp'), id: "6"},
            ]
        },
        ]
    },
    {
    preguntaTitulo:"¿Qué diseño quieres que tenga tu App?",
    opciones: [
        {texto: "Interfaz sencilla", imagen: ('../src/images/pag3-img1.png'), id: "1"},
        {texto: "Interfaz personalizada", imagen: ('../src/images/pag3-img2.png'), id: "2"},
        {texto: "Interfaz replicada de la web", imagen: ('../src/images/pag3-img3.png'), id: "3"},
        {texto: "No necesito diseño", imagen: ('../src/images/pag3-img4.png'), id: "4"},
        ]
    },
    {
    preguntaTitulo:"¿Cómo quieres sacar beneficio a tu App?",
    opciones: [
        {texto: "Aplicación gratuita con publicidad", imagen: ('../src/images/pag4-img1.png'), id: "1"},
        {texto: "Aplicación de pago", imagen: ('../src/images/pag4-img2.png'), id: "2"},
        {texto: "Compras dentro de la app", imagen: ('../src/images/pag4-img3.png.png'), id: "3"},
        {texto: "Otros / No lo sé todavía", imagen: ('../src/images/pag4-img4.png'), id: "4"},
        ]
    },
    {
    preguntaTitulo:"¿Tu App necesita un sistema de login ?",
    opciones: [
        {texto: "Sí, con redes sociales y email", imagen: ('../src/images/pag5-img1.png'), id: "1"},
        {texto: "Sí, con email", imagen: ('../src/images/pag5-img2.png'), id: "2"},
        {texto: "No", imagen: ('../src/images/pag5-img3.png'), id: "3"},
        {texto: "No lo sé todavía", imagen: ('../src/images/pag5-img4.png'), id: "4"},
        ]
    },
    {
    preguntaTitulo:"Tu App tiene que estar integrada con un sitio web?",
    opciones: [
        {texto: "Sí", imagen: ('../src/images/pag6-img1.png'), id: "1"},
        {texto: "No", imagen: ('../src/images/pag6-img2.png'), id: "2"},
        {texto: "No lo sé", imagen: ('../src/images/pag6-img3.png'), id: "3"},
        ]
    },
    {
    preguntaTitulo:"¿Los usuarios tienen sus propios perfiles?",
    opciones: [
        {texto: "Sí", imagen: ('../src/images/pag7-img1.png'), id: "1"},
        {texto: "No", imagen: ('../src/images/pag7-img2.png'), id: "2"},
        {texto: "No lo sé", imagen: ('../src/images/pag7-img3.png'), id: "3"},
        ]
    },
    {
     preguntaTitulo:"¿Tu app necesita un panel de administración?",
     opciones: [
        {texto: "Sí", imagen: ('../src/images/pag8-img1.png'), id: "1"},
        {texto: "No", imagen: ('../src/images/pag8-img2.png'), id: "2"},
        {texto: "No lo sé", imagen: ('../src/images/pag8-img3.png'), id: "3"},
        ]
    },
    {
    preguntaTitulo:"¿Qué idiomas usará tu aplicación?",
    opciones: [
        {texto: "Un único idioma", imagen: ('../src/images/pag9-img1.png'), id: "1"},
        {texto: "Bilingüe", imagen: ('../src/images/pag9-img2.png'), id: "2"},
        {texto: "Multilingüe", imagen: ('../src/images/pag9-img3.png'), id: "3"},
        ]
    },
    {
    preguntaTitulo:"¿En qué estado se encuentra tu proyecto?",
    opciones: [
        {texto: "Sólo es una idea", imagen: ('../src/images/pag10-img1.png'), id: "1"},
        {texto: "Boceto ya preparado", imagen: ('../src/images/pag10-img2.png'), id: "2"},
        {texto: "App en desarrollo", imagen: ('../src/images/pag10-img3.png'), id: "3"},
        {texto: "App ya desarrollada", imagen: ('../src/images/pag10-img4.png'), id: "4"},
        ]
    },
]


