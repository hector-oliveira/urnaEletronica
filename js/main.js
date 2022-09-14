const spanHeader = document.querySelector('.header-voto span');
const cargo = document.querySelector('.cargo span');
const info = document.querySelector('.info-geral');
const infoRodape = document.querySelector('.info');
const ladoDireito = document.querySelector('.voto-right');
const digite = document.querySelector('.digite');
const botoes = document.querySelectorAll('.botao');


let secaoAtual = 0;
let numeroDigitando = '';

const exibirSecao = () => {
  let secao = secoes[secaoAtual];
  let digitoHTML = '';

  for(let i = 0; i < secao.quantidadeNumeros; i++)  {
    if(i === 0 ) {
      digitoHTML += '<div class="quadrado pisca"></div>'  
    } else {
      digitoHTML += '<div class="quadrado"></div>'
    }
    
  }

  spanHeader.style.display = 'none';
  cargo.innerHTML = secao.cargo;
  info.innerHTML = '';
  infoRodape.style.display = 'none';
  ladoDireito.innerHTML = '';
  digite.innerHTML = digitoHTML;
};

const atualizarInterface = () => {
  let secao = secoes[secaoAtual];
  let candidato = secao.descricao.filter((item) => {
    if(item.numero === numeroDigitando) {
      return true;
    } else {
      return false;
    }
  });
  console.log("Candidato: ", candidato);
};

const clicar = (n) => {
  let numero = document.querySelector('.pisca');
  if (numero !== null) {
    numero.innerHTML = n;
    numeroDigitando = `${numeroDigitando}${n}`;

    numero.classList.remove('pisca');
    if (numero.nextElementSibling !== null) {
      numero.nextElementSibling.classList.add('pisca');
    } else {
      atualizarInterface();
    }
  }
}


exibirSecao();

