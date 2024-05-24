//gracias andrey, te amo <3

export const sendApi = async () => {
    let storedUserData = sessionStorage.getItem('user'); //este valor exportar
    let userData = JSON.parse(storedUserData); //este valor exportar
    try {
        const response = await fetch('https://664f72d3ec9b4a4a602ed425.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error al enviar POST al MockAPI');
        }

        const responseData = await response.json();
        console.log('Respuesta de la API:', responseData);
    } catch (error) {
        console.error('Error al enviar POST a la API:', error);
    }
}