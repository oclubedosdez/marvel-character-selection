const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;

        if (idSelecionado === 'ultron') return;
        /*OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:*/
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /*OBJETIVO 2 - qunado passar o mouse em cima do personagem da listagem, troca a imagem e nome do personagem grande*/

       const imagemJogador1 = document.getElementById('personagem-jogador-1')
       imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

       const nomejogador1 = document.getElementById('nome-jogador-1')
       const nomeSeleceionado = personagem.getAttribute('data-name');

       nomejogador1.innerHTML = nomeSeleceionado;
    });
});

let video = document.getElementsByClassName("video-screen")[0];

function play() {
    video.play();
}

function pause() {
    video.pause();
}


