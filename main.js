import { updateValue } from "./src/information/value-calculator";
import { createData } from "./src/information/create-data"; 

const boton = document.querySelector(".intro-boton");
boton.addEventListener('click', (e) => {
    updateValue(1,1);
});
const button = document.querySelector(".intro-button");
button.addEventListener('click', (e) => {
    createData();
});