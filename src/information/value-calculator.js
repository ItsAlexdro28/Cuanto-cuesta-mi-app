/**
 * 
 * @param { number } page
 * @param { number } buttonId
 * 
 */
let quality = 0;

export const updateValue = async (page, buttonId) => {
    //con base en la pagina y el id del boton precionado, calcula el valor final y guarda la informacion en el sessionstorage
    let storedUserData = sessionStorage.getItem('user'); //este valor exportar
    let storedHisrory =  sessionStorage.getItem('history'); 
    let userData = JSON.parse(storedUserData); //este valor exportar
    let history = JSON.parse(storedHisrory);
    //userData.finalValue = Number(userData.finalValue) + 1;
    let price = userData.finalValue; //este valor exportar
    let userOptions = userData.options; 
    switch (true) {
        case page == "1":
            if (buttonId == "1") {
                quality = 3;            
                price += 3000000;
                userOptions.push({"quality": "Optima"}); 
                history.push(3000000) 
            } else if (buttonId == "2") {
                quality = 2;
                price += 2000000;
                userOptions.push({"quality": "Calidad/preico"}); 
                history.push(2000000) 
            } else if (buttonId == "3") {
                quality = 1;
                price += 1000000; 
                userOptions.push({"quality": "No importa"}); 
                history.push(1000000) 
            }
            break;
        case page == "2": //pwa, spa, nativa
            if (buttonId == "1" ) {
                price += 2000000 * quality;
                userOptions.push({"type": "Android"}); 
                history.push(2000000 * quality) 
            } else if (buttonId == "2") {
                price += 2000000 * quality;
                userOptions.push({"type": "iOS"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"type": "Windows Phone"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "4") {
                price += 1000000 * quality;
                userOptions.push({"type": "PWA"}); 
                history.push(1000000 * quality); 
            } else if (buttonId == "5") {
                price += 1000000 * quality;
                userOptions.push({"type": "SPA"}); 
                history.push(1000000 * quality); 
            } else if (buttonId == "6") {
                price += 1000000 * quality;
                userOptions.push({"type": "Nativo"}); 
                history.push(1000000 * quality); 
            } else if (buttonId == "7") {
                price += 4000000 * quality;
                userOptions.push({"type": "Android + iOS"}); 
                history.push(4000000 * quality); 
            }
            break;
        case page == "3":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"desing": "Sencillo"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "2") {
                price += 6000000 * quality;
                userOptions.push({"desing": "Personalizada"}); 
                history.push(6000000 * quality); 
            } else if (buttonId == "3") {
                price += 4000000 * quality;
                userOptions.push({"desing": "Replica"}); 
                history.push(4000000 * quality); 
            } else if (buttonId == "4") {
                price += 0
                userOptions.push({"desing": "No Necesito"}); 
                history.push(0); 
            }
            break;
        case page == "4":
            if (buttonId == "1" ) {
                price += 250000 * quality;
                userOptions.push({"payment": "Gratis y Publicidad"}); 
                history.push(250000 * quality); 
            } else if (buttonId == "2") {
                price += 250000 * quality;
                userOptions.push({"payment": "App Pago"}); 
                history.push(250000 * quality); 
            }else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"payment": "Compras Dentro"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "4") {
                price += 500000 * quality;
                userOptions.push({"payment": "Otros"}); 
                history.push(500000 * quality); 
            }
            break;
        case page == "5":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"login": "Email y Sociales"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "2") {
                price += 1250000 * quality;
                userOptions.push({"login": "Email"}); 
                history.push(1250000 * quality); 
            } else if (buttonId == "3") {
                price += 0;
                userOptions.push({"login": "No"}); 
                history.push(0); 
            } else if (buttonId == "4") {
                price += 1000000 * quality;
                userOptions.push({"login": "No lo se"}); 
                history.push(1000000 * quality); 
            }
            break;
        case page == "6":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"web": "Si"}); 
                history.push(2000000 * quality); 
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"web": "No"});
                history.push(0); 
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"web": "No Se"}); 
                history.push(1000000 * quality); 
            }
            break;
        case page == "7":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"profile": "Si"});
                history.push(2000000 * quality); 
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"profile": "No"});
                history.push(0); 
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"profile": "No Se"});
                history.push(1000000 * quality); 
            }
            break;
        case page == "8":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"admin": "Si"});
                history.push(2000000 * quality); 
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"admin": "No"});
                history.push(0); 
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"admin": "No Se"});
                history.push(1000000 * quality); 
            }
            break;
        case page == "9":
            if (buttonId == "1") {
                price += 0;
                userOptions.push({"language": "Uno"});
                history.push(0); 
            } else if (buttonId == "2") {
                price += 1000000 * quality;
                userOptions.push({"language": "Dos"});
                history.push(1000000 * quality); 
            } else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"language": "Muchos"});
                history.push(2000000 * quality); 
            }
            break;
        case page == "10":
            if (buttonId == "1") {
                userOptions.push({"state": "Idea"});
            } else if (buttonId == "2") {
                userOptions.push({"state": "Boceto"});
            } else if (buttonId == "3") {
                userOptions.push({"state": "Desarrollo"});
            } else if (buttonId == "4") {
                userOptions.push({"state": "Completo"});
            }
            break;
    }
    userData.options = userOptions;
    userData.finalValue = price;
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('history', JSON.stringify(history));
    console.log(userData);
}  
export const returnValor =async()=>{
    let storedUserData = sessionStorage.getItem('user');
    let userData = JSON.parse(storedUserData);
    let price = userData.finalValue;
    console.log(price)
    return price 
}