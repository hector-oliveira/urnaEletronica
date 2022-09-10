const spanHeader = document.querySelector('.header-voto span');
const cargo = document.querySelector('.cargo span');
const information = document.querySelector('.info-geral');
const infoRodape = document.querySelector('.info');
const ladoDireito = document.querySelector('.voto-right');
const digite = document.querySelector('.digite');
const buttons = document.querySelectorAll('.botao');


let candidatoAtual = 0;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.innerHTML);
  });
});

