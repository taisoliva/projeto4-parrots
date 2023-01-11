let face ;
let verso ;

const baralho = ["bobrossparrot.gif", "explodyparrot.gif"];
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