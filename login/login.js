function entrar() {

    const email = window.document.getElementById('email').value;
    const password = window.document.getElementById('password').value;
  
    if (email == "" || password == "") {
      window.alert('Os campos email e senha precisam ser preenchidos para acessar sua conta Yu-gi-oh.');
    
    } else if (email == 'daiane@serratec.com' && password == '123') {
      window.alert('Seja bem-vindo à sua conta Yu-gi-oh!');
      window.location.href = 'http://127.0.0.1:5500/home/home.html';
  
    } else {
      window.alert('Verifique seus dados e tente novamente.');
    }
  }
  
  function criarConta() {
    window.onclick('criarConta');
    window.location.href = 'http://127.0.0.1:5500/cadastro/cadastro.html';
  }  