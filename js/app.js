const listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (!nomeAmigo || nomeAmigo.trim() === "") {
        alert("Preencha um nome válido.");
        return;
    }
    
    if (listaAmigos.includes(nomeAmigo)) {
        alert('O nome já está na lista, coloque um sobrenome para diferenciar');
        return;
    } else{
        listaAmigos.push(nomeAmigo);
    }
    
    document.getElementById('lista-amigos').textContent = listaAmigos;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralhar(listaAmigos);

    if(listaAmigos.length <= 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    let sorteio = document.getElementById('lista-sorteio');

    for(let i=0; i < listaAmigos.length ; i++){
        if (i === (listaAmigos.length-1)){
            sorteio.innerHTML += `${listaAmigos[i]} => ${listaAmigos[0]} <br>`;
        }else{
        sorteio.innerHTML += `${listaAmigos[i]} => ${listaAmigos[i+1]} <br>`;
    }
    }
}

function embaralhar(lista) {
    let indice = lista.length;
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar() {
    listaAmigos.splice(0,listaAmigos.length-1);
    listaAmigos.splice(0,listaAmigos.length-1);
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}