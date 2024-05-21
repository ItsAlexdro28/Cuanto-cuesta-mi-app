/**
 * 
 * @param { number } page
 * @param { number } buttonId
 * 
 */
let quality = 0

export const updateValue = async (page, buttonId) => {
    //con base en la pagina y el id del boton precionado, calcula el valor final y guarda la informacion en el sessionstorage
    let storedUserData = sessionStorage.getItem('user');
    let userData = JSON.parse(storedUserData);
    //userData.finalValue = Number(userData.finalValue) + 1;
    let price = userData.finalValue;
    let userOptions = userData.options; 
    switch (true) {
        case page == "1":
            if (buttonId == "1") {
                quality = 3;            
                price += 3000000;
                userOptions.push({"quality": "Optima"}); 
            } else if (buttonId == "2") {
                quality = 2;
                price += 2000000;
                userOptions.push({"quality": "Calidad/preico"}); 
            } else if (buttonId == "3") {
                quality = 1;
                price += 1000000; 
                userOptions.push({"quality": "No importa"}); 
            }
            break;
        case page == "2": //pwa, spa, nativa
            if (buttonId == "1" ) {
                price += 2000000 * quality;
                userOptions.push({"type": "Android"}); 
            } else if (buttonId == "2") {
                price += 2000000 * quality;
                userOptions.push({"type": "iOS"}); 
            } else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"type": "Windows Phone"}); 
            } else if (buttonId == "4") {
                price += 1000000 * quality;
                userOptions.push({"type": "PWA"}); 
            } else if (buttonId == "5") {
                price += 1000000 * quality;
                userOptions.push({"type": "SPA"}); 
            } else if (buttonId == "6") {
                price += 1000000 * quality;
                userOptions.push({"quality": "Nativo"}); 
            } else if (buttonId == "7") {
                price += 4000000 * quality;
                userOptions.push({"quality": "Android + iOS"}); 
            }
            break;
        case page == "3":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"desing": "Sencillo"}); 
            } else if (buttonId == "2") {
                price += 6000000 * quality;
                userOptions.push({"desing": "Personalizada"}); 
            } else if (buttonId == "3") {
                price += 4000000 * quality;
                userOptions.push({"desing": "Replica"}); 
            } else if (buttonId == "4") {
                price += 0
                userOptions.push({"desing": "No Necesito"}); 
            }
            break;
        case page == "4":
            if (buttonId == "1" ) {
                price += 250000 * quality;
                userOptions.push({"payment": "Gratis y Publicidad"}); 
            } else if (buttonId == "2") {
                price += 250000 * quality;
                userOptions.push({"payment": "App Pago"}); 
            }else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"payment": "Compras Dentro"}); 
            } else if (buttonId == "4") {
                price += 500000
                userOptions.push({"payment": "Otros"}); 
            }
            break;
        case page == "5":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"login": "Email y Sociales"}); 
            } else if (buttonId == "2") {
                price += 1250000 * quality;
                userOptions.push({"login": "Email"}); 
            } else if (buttonId == "3") {
                price += 0;
                userOptions.push({"login": "No"}); 
            } else if (buttonId == "4") {
                price += 1000000 * quality;
                userOptions.push({"login": "No lo se"}); 
            }
            break;
        case page == "6":
            if (buttonId == "1") {
                price += 1000000 * quality;
                userOptions.push({"web": "Si"}); 
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"web": "No"});
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"web": "No Se"}); 
            }
            break;
        case page == "7":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"profile": "Si"});
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"profile": "No"});
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"profile": "No Se"});
            }
            break;
        case page == "8":
            if (buttonId == "1") {
                price += 2000000 * quality;
                userOptions.push({"admin": "Si"});
            } else if (buttonId == "2") {
                price += 0;
                userOptions.push({"admin": "No"});
            } else if (buttonId == "3") {
                price += 1000000 * quality;
                userOptions.push({"admin": "No Se"});
            }
            break;
        case page == "9":
            if (buttonId == "1") {
                price += 0;
                userOptions.push({"language": "one"});
            } else if (buttonId == "2") {
                price += 1000000 * quality;
                userOptions.push({"language": "two"});
            } else if (buttonId == "3") {
                price += 2000000 * quality;
                userOptions.push({"language": "many"});
            }
            break;
        case page == "10":
            if (buttonId == "1") {
                userOptions.push({"State": "idea"});
            } else if (buttonId == "2") {
                userOptions.push({"State": "boceto"});
            } else if (buttonId == "3") {
                userOptions.push({"State": "desarrollo"});
            } else if (buttonId == "4") {
                userOptions.push({"State": "completo"});
            }
            break;
    }
    userData.options = userOptions;
    userData.finalValue = price;
    sessionStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
}  