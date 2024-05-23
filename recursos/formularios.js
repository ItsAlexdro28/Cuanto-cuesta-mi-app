import { LitElement, css, html } from 'lit';
import data from '../src/pages.json';

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
    render(){
        return html`
            <form class="customerForm">
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
                <button class="submit">Submit</button>
            </form>
    `}

    firstUpdated(){
        const submitButton=this.shadowRoot.querySelector('.submit')
        submitButton.addEventListener('click',async(event)=>{
            event.preventDefault();
            const customerForm=this.shadowRoot.querySelector('.customerForm');
            const data = Object.fromEntries(new FormData(customerForm).entries());
            const customerData = JSON.parse(JSON.stringify(data));
            const {Name,lastName,email,country,city,phone}=customerData;
            const customerInfo ={
                Name:Name,
                Lastname:lastName,
                Email:email,
                Country:country,
                City:city,
                Phone:phone
            };
            let storedUserData = sessionStorage.getItem('user');
            let userData = JSON.parse(storedUserData);
            sessionStorage.setItem('user', JSON.stringify(customerInfo));
        })
    }

}
customElements.define("page-form",pageForm)