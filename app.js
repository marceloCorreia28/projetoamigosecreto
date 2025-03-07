//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Captura o input
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array
    listaAmigos.push(nomeAmigo);

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();

    // Limpa o campo de input
    inputAmigo.value = '';
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos'); // Captura o elemento <ul>
    listaAmigosElemento.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    listaAmigos.forEach((amigo) => {
        const itemLista = document.createElement('li'); // Cria um <li>
        itemLista.textContent = amigo; // Define o texto do <li>
        listaAmigosElemento.appendChild(itemLista); // Adiciona o <li> ao <ul>
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado]; // Captura o nome sorteado

    // Exibe o resultado na tela
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`; // Adiciona o nome sorteado ao <ul>
}