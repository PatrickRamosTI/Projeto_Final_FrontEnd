let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

sobrenome.addEventListener('keyup', () => {
  if (sobrenome.value.length <= 4) {
    labelSobrenome.setAttribute('style', 'color: red')
    labelSobrenome.innerHTML = 'Insira no mínimo 5 caracteres'
    sobrenome.setAttribute('style', 'border-color: red')
    validSobrenome = false
  } else {
    labelSobrenome.setAttribute('style', 'color: green')
    labelSobrenome.innerHTML = 'Sobrenome'
    sobrenome.setAttribute('style', 'border-color: green')
    validSobrenome = true
  }
})

email.addEventListener('keyup', () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log('Validando email:', email.value);

  if (!regexEmail.test(email.value)) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'Insira um email válido';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'Email';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
});


senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha, as senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar() {
  if (validNome && validSobrenome && validEmail && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    const emailJaCadastrado = listaUser.some(usuario => usuario.emailCad === email.value);

    if (emailJaCadastrado) {
      msgError.setAttribute('style', 'display: block');
      msgError.innerHTML = '<strong>E-mail já cadastrado. Por favor, use outro.</strong>';
      msgSuccess.setAttribute('style', 'display: none');
      msgSuccess.innerHTML = '';
      return;
    }

    listaUser.push({
      nomeCad: nome.value,
      sobrenomeCad: sobrenome.value,
      emailCad: email.value,
      senhaCad: senha.value,
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';

    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';

    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    senha.value = '';
    confirmSenha.value = '';

    setTimeout(() => {
      window.location.href = '../login/login.html';
    }, 2000);
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.setAttribute('style', 'display: none');
    msgSuccess.innerHTML = '';
  }
}
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
