const getApi = async () => {
    const dadosResponse = await fetch('http://localhost:3000/usuarios');
    const dadosJSON = await dadosResponse.json();       

      dadosJSON.forEach(dado => {
        primeiro_nome.innerHTML += `<li>${dado.primeiro_nome}</li>`
      });

      dadosJSON.forEach(dado => {
        avatar.innerHTML += `<img src=${dado.avatar}></img>`
      });

      dadosJSON.forEach(dado => {
        ultimo_nome.innerHTML += `<li>${dado.ultimo_nome}</li>`
      });

      dadosJSON.forEach(dado => {
        email.innerHTML += `<li>${dado.email}</li>`
      });

      dadosJSON.forEach(dado => {
        telefone.innerHTML += `<li>${dado.telefone}</li>`
      });  
}
    getApi();

    const buscar = document.querySelector('#buscar');
    const primeiro_nome = document.querySelector('#primeiro_nome');
    const ultimo_nome = document.querySelector('#ultimo_nome');
    const avatar = document.querySelector('#avatar');
    const email = document.querySelector('#email');
    const telefone = document.querySelector('#telefone');

const body = document.querySelector("body"),
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})


let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = './../login/login.html'
}


function sair(){
  localStorage.removeItem('token')
  window.location.href = './../login/login.html'
}
