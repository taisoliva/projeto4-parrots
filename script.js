let facePrimeira ;
let versoPrimeira ;

let faceSegunda ;
let versoSegunda ;

let primeiraCarta;
let segundaCarta;

let cartaVirada = false;

let travar = false;

const baralho = ["bobrossparrot.gif", "explodyparrot.gif", ];

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

  const local = document.querySelector(".tela");
  console.log(local);

  for(let i = 0; i<valorEscolhido; i++){
    local.innerHTML = local.innerHTML + ` <div onclick="selecionarCarta(this)" class="card">
                                                    <div class="face">
                                                        <img src="Imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt="">
                                                    </div>

                                                    <div class="back-face face">
                                                            <img src="Imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/desktop.png" alt="">
                                                    </div>
                                            </div> `
  }
}

function selecionarCarta(carta){

    carta.classList.add("active");

    // impedir que outras cartas sejam viradas.
    if(travar === true){
        return;
    }

    if(cartaVirada === false){
        cartaVirada = true;
        primeiraCarta = carta; // dados da primeira carta virada

        facePrimeira = primeiraCarta.querySelector("div:nth-child(1)");
        versoPrimeira = primeiraCarta.querySelector("div:nth-child(2)");

        facePrimeira.classList.add("vira-frente");
        versoPrimeira.classList.add("vira-verso");

        return;
    }

    segundaCarta = carta;

    //verifica se a primeira carta foi clicada duas vezes.
    if(segundaCarta === primeiraCarta){
        return;
    }

    travar = true; // quando a segunda carta é desvirada impede que outras sejam viradas;

    faceSegunda = segundaCarta.querySelector("div:nth-child(1)");
    versoSegunda = segundaCarta.querySelector("div:nth-child(2)");

    faceSegunda.classList.add("vira-frente");
    versoSegunda.classList.add("vira-verso");


    cartaVirada = false; 


    console.log(primeiraCarta);
    console.log(segundaCarta);


    checkMatch()

}


function checkMatch (){

    let imagemPrimeira = versoPrimeira.querySelector("img").src;
    let imagemSegunda = versoSegunda.querySelector("img").src;

    if(imagemPrimeira === imagemSegunda){
        console.log("são iguais");

        /*primeiraCarta.removeEventListener('click', selecionarCarta);
        segundaCarta.removeEventListener('click', selecionarCarta);*/
        return;
    }


}

function unflipCards(){
    setTimeout(() =>{
        face.classList.remove("vira-frente");
        verso.classList.remove("vira-verso");

    }, 1500);
}