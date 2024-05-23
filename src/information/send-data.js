//gracias andrey, te amo <3
let storedUserData = sessionStorage.getItem('user'); //este valor exportar
let userData = JSON.parse(storedUserData); //este valor exportar

const response = await fetch('https://664f72d3ec9b4a4a602ed425.mockapi.io/users', { // url mock api
    method: 'POST',
    headers: { // se pone siempre
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
});
        
if (!response.ok) {
    throw new Error('Error al enviar POST al MockAPI');
}
        
const responseData = await response.json();
console.log('Respuesta de la API:', responseData);
// Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje al usuario
