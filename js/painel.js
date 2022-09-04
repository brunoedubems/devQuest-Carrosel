const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.querySelector("#seta-voltar");
const setaAvancar = document.querySelector("#seta-avancar");

let imagemAtual = 0;

/*Evento seta avançar*/
setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  imagemAtual++;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

/*Evento seta voltar*/
setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});


/*configurações das setas*/
function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
  const naoEhAprimeiraImagem = imagemAtual !== 0;
  if (naoEhAprimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (ultimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
