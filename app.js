// Array para almacenar los nombres de los amigos
const listaAmigos = [];

// Función para adicionar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    // Validar entrada
    if (amigo === '') {
        alert('Por favor, inserte un amigo');
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