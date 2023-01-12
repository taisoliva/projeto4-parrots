let facePrimeira ;
let versoPrimeira ;

let faceSegunda ;
let versoSegunda ;

let primeiraCarta;
let segundaCarta;

let cartaVirada = false;

let travar = false;

const baralho = [];

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

function comparador() { 
	return Math.random() - 0.5; 
}

function montarCartas (valorEscolhido){

    for(let i = 0; i<(valorEscolhido/2) ; i++){
        baralho.push("parrot"+(i+1));
        baralho.push("parrot"+((valorEscolhido/2) - i));
    }

    baralho.sort(comparador) // embaralhar cartas;

    console.log();

    const local = document.querySelector(".tela");
    console.log(local);

  for(let i = 0; i<valorEscolhido; i++){
    local.innerHTML = local.innerHTML + ` <div onclick="selecionarCarta(this)" class="card">
                                                    <div class="face">
                                                        <img src="Imagens/back.png" alt="">
                                                    </div>

                                                    <div class="back-face face">
                                                            <img src="Imagens/${baralho[i]}.gif" alt="">
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

        primeiraCarta.removeAttribute("onclick");
        segundaCarta.removeAttribute("onclick");
        
        travar = false;
        return;
    } else{
        unflipCards();
    }


}

function unflipCards(){
    setTimeout(() =>{

        travar = false;
        facePrimeira.classList.remove("vira-frente");
        versoPrimeira.classList.remove("vira-verso");
        faceSegunda.classList.remove("vira-frente");
        versoSegunda.classList.remove("vira-verso");

    }, 1500);
}