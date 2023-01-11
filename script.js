let face ;
let verso ;

let condicaoInicialCartas = false;

let quantidadeDeCartas = prompt("Só pode inserir números pares de 4 a 14. \n Quantas cartas quer jogar:");

while(condicaoInicialCartas === false){

    if((quantidadeDeCartas % 2 == 0) && (quantidadeDeCartas > 3) && (quantidadeDeCartas < 15) ){
        condicaoInicialCartas = true;
    }else{
        quantidadeDeCartas = prompt("Só pode inserir números pares de 4 a 14. \n Quantas cartas quer jogar:");
    }
}

montarCartas(quantidadeDeCartas);

function montarCartas (valorEscolhido){

    const local = document.querySelector("tela");
    local.innerHTML = "<div></div>";
}




const baralho = ["bobrossparrot.gif", "explodyparrot.gif", ];
function selecionarCarta(carta){
    
    face = carta.querySelector ("div:nth-child(1)");
    verso = carta.querySelector ("div:nth-child(2)");

    const imagem = verso.querySelector("img");
    imagem.setAttribute("src"," Imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/" + baralho[1]);

    carta.classList.add("active");
    face.classList.add("vira-frente");
    verso.classList.add("vira-verso");

    unflipCards()

}

function unflipCards(){
    setTimeout(() =>{
        face.classList.remove("vira-frente");
        verso.classList.remove("vira-verso");
    }, 1500);
}