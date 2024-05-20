/**
 * 
 * @param { number } page
 * @param { number } buttonId
 * 
 */

export const updateValue = async (page, buttonId) => {
    let storedUserData = sessionStorage.getItem('user');
    let userData = JSON.parse(storedUserData);
    
    userData.finalValue = Number(userData.finalValue) + 1;
    
    switch (true) {
        case page == "1":
            console.log(test);
            break;
        case page == "2":
            console.log(test);
            break;
        case page == "3":
            console.log(test);
            break;
        case page == "4":
            console.log(test);
            break;
        case page == "5":
            console.log(test);
            break;
        case page == "6":
            console.log(test);
            break;
        case page == "7":
            console.log(test);
            break;
        case page == "8":
            console.log(test);
            break;
        case page == "9":
            console.log(test);
            break;
        case page == "10":
            console.log(test);
            break;
    }


    sessionStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
}  