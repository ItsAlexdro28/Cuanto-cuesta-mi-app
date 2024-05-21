// Crea la plantilla de los elementos a enviar al mockAPI

export const createData = async () => {
    const userBlank = {
        "name": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "country": "",
        "city": "",
        "finalValue": 0,
        "options": []
    };
    const priceHistory = []
    sessionStorage.setItem('user', JSON.stringify(userBlank));
    sessionStorage.setItem('history', JSON.stringify(priceHistory));
}