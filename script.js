function validateField(inputElement, labelElement, minLength, errorMessage) {
  if (inputElement.value.length < minLength) {
      labelElement.style.color = 'red';
      labelElement.innerHTML = errorMessage;
      inputElement.style.borderColor = 'red';
      return false;
  } else {
      labelElement.style.color = 'green';
      labelElement.innerHTML = inputElement.getAttribute('data-label');
      inputElement.style.borderColor = 'green';
      return true;
  }
}

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let sobrenome = document.querySelector('#sobrenome');
let labelSobrenome = document.querySelector('#labelSobrenome');
let validSobrenome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let telefone = document.querySelector('#telefone');
let labelTelefone = document.querySelector('#labelTelefone');
let validTelefone = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarsenha = document.querySelector('#confirmarsenha');
let labelConfirmarsenha = document.querySelector('#labelConfirmarsenha');
let validConfirmarsenha = false;

// validação de cadastro
let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
  validNome = validateField(nome, labelNome, 3, 'Primeiro Nome *Insira no mínimo 3 caracteres');
});

sobrenome.addEventListener('keyup', () => {
  validSobrenome = validateField(sobrenome, labelSobrenome, 3, 'Sobrenome *Insira no mínimo 3 caracteres');
});

email.addEventListener('keyup', () => {
  validEmail = validateField(email, labelEmail, 8, 'Email *Insira no mínimo 8 caracteres');
});

telefone.addEventListener('keyup', () => {
  validTelefone = validateField(telefone, labelTelefone, 10, 'Telefone *Insira no mínimo 10 números');
});

senha.addEventListener('keyup', () => {
  validSenha = validateField(senha, labelSenha, 6, 'Senha *Insira no mínimo 6 caracteres');
});

confirmarsenha.addEventListener('keyup', () => {
  validConfirmarsenha = validateField(confirmarsenha, labelConfirmarsenha, 1, 'Confirmar Senha *As senhas não coincidem');
  if (validConfirmarsenha && senha.value !== confirmarsenha.value) {
      validConfirmarsenha = false;
      labelConfirmarsenha.style.color = 'red';
      labelConfirmarsenha.innerHTML = 'Confirmar Senha *As senhas não coincidem';
      confirmarsenha.style.borderColor = 'red';
  }
});

function cadastrar() {
  if (validNome && validSobrenome && validEmail && validTelefone && validSenha && validConfirmarsenha) {
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  
      listaUser.push({
          nomeCad: nome.value,
          sobrenomeCad: sobrenome.value,
          emailCad: email.value,
          telefoneCad: telefone.value,
          senhaCad: senha.value
      });
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
      
      msgSuccess.style.display = 'block';
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
      msgError.style.display = 'none';
      msgError.innerHTML = '';
      
      setTimeout(() => {
          window.location.href = './Sucesso/sucesso.html';
      }, 3000);
  } else {
      msgError.style.display = 'block';
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>';
      msgSuccess.innerHTML = '';
      msgSuccess.style.display = 'none';
  }
}
