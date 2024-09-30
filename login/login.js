function entrar() {
  const email = window.document.getElementById('email').value;
  const password = window.document.getElementById('password').value;

  const usuarios = JSON.parse(localStorage.getItem('listaUser')) || [];
  const usuarioEncontrado = usuarios.find(usuario => usuario.emailCad === email && usuario.senhaCad === password);
  
  if (email === "" || password === "") {
    window.alert('Os campos email e senha precisam ser preenchidos para acessar sua conta Yu-gi-oh.');
  } else if (usuarioEncontrado) {
    window.alert('Seja bem-vindo à sua conta Yu-gi-oh!');
    window.location.href = 'http://127.0.0.1:5501/home/home.html';
  } else {
    window.alert('Verifique seus dados e tente novamente.');
  }
}

function criarConta() {
  window.location.href = 'http://127.0.0.1:5501/cadastro/cadastro.html';
}

