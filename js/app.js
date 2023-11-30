let arrayAmigos = []
    const listaSorteio = document.getElementById('lista-sorteio')
    const listaAmigos = document.getElementById('lista-amigos')

function adicionar() {
    const nomeAmigo = ` ${document.getElementById('nome-amigo').value}`; // Adiciona espaço no início do nome   
    arrayAmigos.push(nomeAmigo)

    listaAmigos.textContent = arrayAmigos
}

function sortear() {
    listaSorteio.textContent = ''
    embaralharArray(arrayAmigos)

    for (let i = 0; i < arrayAmigos.length; i++) {
        if (i == arrayAmigos.length-1) {
            listaSorteio.innerHTML += `${arrayAmigos[i]} -> ${arrayAmigos[0]} <br>`
        } else {
            listaSorteio.innerHTML += `${arrayAmigos[i]} -> ${arrayAmigos[i + 1]} <br>`
        }
    }
}

function reiniciar() {
    arrayAmigos = []
    listaAmigos.textContent = arrayAmigos
    listaSorteio.textContent = ''
}



function embaralharArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}