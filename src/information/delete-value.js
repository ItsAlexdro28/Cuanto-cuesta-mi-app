// toma la pagina actual para elminiar el valor agregado de la anterior

/**
 * 
 * @param {Number} page 
 */
export const deletePrevValue = async (page) => {
    let storedUserData = sessionStorage.getItem('user');
    let storedHisrory =  sessionStorage.getItem('history');
    let userData = JSON.parse(storedUserData);
    let history = JSON.parse(storedHisrory);

    let lastAddition = Number(history[history.length - 1]);
    let price = userData.finalValue;

    price -= lastAddition;
    let deletedValue = history.pop();

    userData.finalValue = price;
    storedHisrory = history;
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('history', JSON.stringify(history));
} 