// ultimo commit agora vai
// codigo Rosy
const button = document.querySelector('.button');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputEnviar = document.querySelector('#submit-btn');

let email = false;
let senha = false;

function verificar(event) {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com') {
    email = true;
  }
  if (inputSenha.value === '123456') {
    senha = true;
  }
  if (email === true && senha === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', verificar);

// Codigo: Luan
const btnS = document.getElementById('submit-btn');
const cx = document.getElementById('agreement');
btnS.disabled = true;

function ta1() {
  if (cx.checked !== true) {
    btnS.disabled = true;
  } else {
    btnS.disabled = false;
  }
}

cx.addEventListener('click', ta1);

const t = document.getElementById('textarea');
const car = document.getElementById('counter');
car.innerHTML = 500;

function ta2() {
  const q = t.value;
  car.innerHTML = 500 - (q.length);
}

t.addEventListener('keyup', ta2);

function ta3() {
  const nome = document.getElementById('input-name');
  const tN = document.createElement('div');
  const novaDiv = document.getElementById('formulario');

  const sobreN = document.getElementById('input-lastname');
  tN.innerHTML = `Nome: ${nome.value} ${sobreN.value}`;
  tN.classList.add('subject');

  novaDiv.appendChild(tN);
  novaDiv.removeChild(nome);
  novaDiv.removeChild(sobreN);
}

btnS.addEventListener('click', ta3);

const formulario = document.querySelector('#formulario');

function emailF() {
  const divEmail = document.createElement('div');
  const emailTest = document.querySelector('#input-email');
  divEmail.innerHTML = `Email: ${emailTest.value}`;
  divEmail.classList.add('subject');
  formulario.appendChild(divEmail);
  formulario.removeChild(emailTest);
}

function casaF() {
  const divCasa = document.createElement('div');
  const casa = document.querySelector('#house');
  divCasa.innerHTML = `Casa: ${casa.value}`;
  divCasa.classList.add('subject');
  formulario.appendChild(divCasa);
  formulario.removeChild(casa);
}

function famF(event) {
  const divFamilia = document.createElement('div');
  const familia = document.querySelector(`input[name='${event}']:checked`).value;
  divFamilia.innerHTML = `Família: ${familia}`;
  divFamilia.classList.add('subject');
  formulario.appendChild(divFamilia);
}

function fam2() {
  const idfamilia = document.querySelector('#familia');
  const pegarAll = document.querySelector('#all');
  pegarAll.removeChild(idfamilia);
}

const divMat = document.createElement('div');
divMat.innerHTML = 'Matérias: ';

function valorF(event) {
  const qwe = document.getElementById('formulario');
  if (document.querySelector(`input[value='${event}']:checked`)) {
    const valor = document.querySelector(`input[value='${event}']:checked`).value;
    divMat.innerHTML = `${divMat.innerHTML} ${valor}, `;
  }
  qwe.appendChild(divMat);
}

function contF() {
  const pegarAll = document.querySelector('#all');
  divMat.classList.add('subject');
  formulario.appendChild(divMat);
  const pegarMaterias = document.querySelector('#conteudo');
  pegarAll.removeChild(pegarMaterias);
}

function pegaF(event) {
  const pegarAll = document.querySelector('#all');
  const divAvali = document.createElement('div');
  const avali = document.querySelector(`input[name='${event}']:checked`).value;
  divAvali.innerHTML = `Avaliação: ${avali}`;
  divAvali.classList.add('subject');
  formulario.appendChild(divAvali);
  const pegarAvali = document.querySelector('#nota');
  pegarAll.removeChild(pegarAvali);
}

function texF() {
  const pegarAll = document.querySelector('#all');
  const divObs = document.createElement('div');
  const obs = document.querySelector('#textarea');
  divObs.innerHTML = `Observações: ${obs.value}`;
  divObs.classList.add('subject');
  formulario.appendChild(divObs);
  const pegarObs = document.querySelector('#tArea');
  pegarAll.removeChild(pegarObs);
}

function alF() {
  valorF('HoFs');
  valorF('Jest');
  valorF('Promises');
  valorF('React');
  valorF('SQL');
  valorF('Python');
}

// codigo Rosy

function substituir(event) {
  event.preventDefault();

  emailF();

  casaF();

  famF('family');

  fam2();

  alF();

  contF();

  pegaF('rate');

  texF();
}

inputEnviar.addEventListener('click', substituir);
