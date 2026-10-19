var unidades= ["Segurança da Informação", "Game Designer", "Ciência da Computação"];

function unidadeEscolhida(numero){
return unidades[numero];
}

console.log(unidadeEscolhida(0));
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}