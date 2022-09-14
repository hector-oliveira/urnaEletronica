const spanHeader = document.querySelector('.header-voto span');
const cargo = document.querySelector('.cargo span');
const info = document.querySelector('.info-geral');
const infoRodape = document.querySelector('.info');
const ladoDireito = document.querySelector('.voto-right');
const digite = document.querySelector('.digite');
const botoes = document.querySelectorAll('.botao');


let secaoAtual = 0;
let numeroDigitando = '';

let votoEmBranco = true;

const exibirSecao = () => {
  let secao = secoes[secaoAtual];
  let digitoHTML = '';
  numeroDigitando = '';
  votoEmBranco = false;

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
  
  if(candidato.length > 0) {
    candidato = candidato[0];
    spanHeader.style.display = 'block';
    infoRodape.style.display = 'block';
    info.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

    let fotosHTML = '';
    for(let i in candidato.foto) {
      fotosHTML += `
      <div class="content-img small">
        <img class="image-cargo" src="./assets/images/${candidato.foto[i].url}" alt=""/>${candidato.foto[i].legenda}
      </div>`
    }

    ladoDireito.innerHTML = fotosHTML;
  } else {
    spanHeader.style.display = 'block';
    infoRodape.style.display = 'block';
    info.innerHTML = `<h2>VOTO NULO</h2>`
    ladoDireito.innerHTML = `<div class="content-img small">
      <img class="image-cargo" src="./assets/images/desconhecido.png" alt="" /></div>`

  }
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

const branco = () => {
  votoEmBranco = true;
  numeroDigitando = '';
  digitoHTML = '';
  spanHeader.style.display = 'block';
  infoRodape.style.display = 'block';
  info.innerHTML = `<h2>VOTO EM BRANCO</h2>`
  
};
const corrigir = () => exibirSecao();

const confirmar = () => {
  let secao = secoes[secaoAtual];

  let votoConfirmado = false;
  if(votoEmBranco) {
    votoConfirmado = true;
    console.log('voto branco');
  } else if (numeroDigitando.length === secao.quantidadeNumeros) {
    votoConfirmado = true;
    console.log('você votou em: ' + numeroDigitando);
  }

  if (votoConfirmado) {
    secaoAtual++;
    if(secoes[secaoAtual] !== undefined) {
      exibirSecao();
    } else {
      console.log('fim');
    }
  }
};

exibirSecao();

