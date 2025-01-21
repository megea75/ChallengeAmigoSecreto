// Array para almacenar los nombres de los amigos
const listaAmigos = [];

// Función para adicionar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    // Validar entrada
    if (amigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    // Agregar al array y actualizar la lista
    listaAmigos.push(amigo);
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

                // Función para sortear un amigo
                function sortearAmigo() {
                    if (listaAmigos.length === 0) {
                                    alert('No hay amigos en la lista para sortear');
                                    return;
                    }

                    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
                    const amigoSorteado = listaAmigos[indiceAleatorio];

                    // Mostrar el resultado
                    const resultado = document.getElementById('resultado');
                    resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
    }