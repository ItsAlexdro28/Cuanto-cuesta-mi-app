import { LitElement, css, html } from 'lit';
import { sendApi } from '../information/send-data';

export class pageForm extends LitElement {
    // constructor(){   // funciona similar al conectedcallback pero deje el otro por que permite que pageinfo se vaya actualizando cada vez que se agregue el elemento al dom
    //     super();
    //     const pageData=document.querySelector('page-price');
    //     this.pageInfo=pageData.pageAtributes;
    // }
    connectedCallback(){ 
        super.connectedCallback() 
        const pageData=document.querySelector('page-price');
    }

    openPopup() {
        const popup = this.shadowRoot.getElementById("popup");
        if (popup) {
            popup.classList.add("open-popup");
        } else {
            console.error('Popup element not found');
        }
    }

    closePopup() {
        const popup = this.shadowRoot.getElementById("popup");
        if (popup) {
            popup.classList.remove("open-popup");
        } else {
            console.error('Popup element not found');
        }
    }

    render(){
        return html`
      <style>
        @import "../src/css/style.css";
      </style>
      <form class="customerForm">
        <div class="popup" id="popup">
            <img src="../src/images/404-tick.png">
            <h2> Gracias </h2>
            <p> Sus datos fueron guardados satisfactoriamente </p>
            <button type="button" class="ok-popup">OK</button>
        </div>
                <div class="customerName">
                    <label for="Name" class="name"><b>Nombre</b></label>
                    <input type="text" id="Name" name="Name">
                </div>
                <div class="customerLastName">
                    <label for="lastName" class="lastName"><b>Apellido</b></label>
                    <input type="text" id="lastName" name="lastName">
                </div>
                <div class="customerEmail">
                    <label for="email" class="email"><b>Email</b></label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="customerCountry">
                    <label for="country" class="country"><b>Pais</b></label>
                    <input type="text" id="country" name="country">
                </div>
                <div class="customerCity">
                    <label for="city" class="city"><b>Ciudad</b></label>
                    <input type="text" id="city" name="city">
                </div>
                <div class="customerCity">
                    <label for="phone" class="phone"><b>Telefono</b></label>
                    <input type="text" id="phone" name="phone">
                </div>
                <button type="button "class="intro-boton">Submit</button>
            </form>
    `}
    updated(){
        const submitButton=this.shadowRoot.querySelector('.intro-boton');
        submitButton.addEventListener('click',async(event)=>{
            event.preventDefault();
            const customerForm=this.shadowRoot.querySelector('.customerForm');
            const data = Object.fromEntries(new FormData(customerForm).entries());
            const customerData = JSON.parse(JSON.stringify(data));
            const {Name,lastName,email,country,city,phone}=customerData;
            let storedUserData = sessionStorage.getItem('user');
            let userData = JSON.parse(storedUserData);
            const customerInfo ={
                "name":Name,
                "lastName":lastName,
                "email":email,
                "country":country,
                "city":city,
                "phone":phone,
                "finalValue":userData.finalValue,
                "options":userData.options,
            };
            sessionStorage.setItem('user', JSON.stringify(customerInfo));
            sendApi();
            this.openPopup();
        })

        const closeButton=this.shadowRoot.querySelector('.ok-popup');
        closeButton.addEventListener('click',async(event)=>{
            this.closePopup();
        })
    }

}
customElements.define("page-form",pageForm)