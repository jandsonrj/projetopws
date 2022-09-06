let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarsenha = document.querySelector('#confirmarsenha')
let labelConfirmarsenha = document.querySelector('#labelConfirmarsenha') 
let validConfirmarsenha = false

// validação de cadastro
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// validação de nome
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Primeiro Nome *Insira no mínimo 3 caracteres'
      nome.setAttribute('style', 'border-color: red')
      validNome = false
    } else {
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Primeiro Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
  })
// validação de ultimo nome
  sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 2){
      labelSobrenome.setAttribute('style', 'color: red')
      labelSobrenome.innerHTML = 'Sobrenome *Insira no mínimo 3 caracteres'
      sobrenome.setAttribute('style', 'border-color: red')
      validSobrenome = false
    } else {
      labelSobrenome.setAttribute('style', 'color: green')
      labelSobrenome.innerHTML = 'Sobrenome'
     sobrenome.setAttribute('style', 'border-color: green')
      validSobrenome = true
    }
  })
// validação de email
  email.addEventListener('keyup', () => {
    if(email.value.length <= 7){
      labelEmail.setAttribute('style', 'color: red')
      labelEmail.innerHTML = 'Email *Insira no mínimo 8 caracteres'
      email.setAttribute('style', 'border-color: red')
      validEmail = false
    } else {
      labelEmail.setAttribute('style', 'color: green')
      labelEmail.innerHTML = 'Email'
      email.setAttribute('style', 'border-color: green')
      validEmail = true
    }
  })
// validação de telefone
  telefone.addEventListener('keyup', () => {
    if(telefone.value.length <= 9){
      labelTelefone.setAttribute('style', 'color: red')
      labelTelefone.innerHTML = 'Telefone *Insira no mínimo 10 números'
      telefone.setAttribute('style', 'border-color: red')
      validTelefone = false
    } else {
      labelTelefone.setAttribute('style', 'color: green')
      labelTelefone.innerHTML = 'Telefone'
      telefone.setAttribute('style', 'border-color: green')
      validTelefone = true
    }
  })
// validação de senha
  senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
      email.setAttribute('style', 'border-color: red')
      validSenha = false
    } else {
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validSenha = true
    }
  })
// validação de confoirmar senha 
  confirmarsenha.addEventListener('keyup', () => {
    if(senha.value != confirmarsenha.value){
      labelConfirmarsenha.setAttribute('style', 'color: red')
      labelConfirmarsenha.innerHTML = 'Confirmar Senha *As senhas não coincidem'
      confirmarsenha.setAttribute('style', 'border-color: red')
      validConfirmarsenha = false
    } else {
      labelConfirmarsenha.setAttribute('style', 'color: green')
      labelConfirmarsenha.innerHTML = 'Confirmar Senha'
      confirmarsenha.setAttribute('style', 'border-color: green')
      validConfirmarsenha = true
    }
  })

function cadastrar(){
    if(validNome && validSobrenome && validEmail && validTelefone && validSenha && validConfirmarsenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
        listaUser.push(
        {
          nomeCad: nome.value,
          sobrenomeCad: sobrenome.value,
          emailCad: email.value,
          telefoneCad: telefone.value,
          senhaCad: senha.value
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
       
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = /Sucesso/sucesso.html'
        }, 3000)
      
        
      } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente </strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
      }
    }
