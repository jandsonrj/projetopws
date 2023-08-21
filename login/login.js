function entrar() {
    let email = document.querySelector('#email');
    let emailLabel = document.querySelector('#emailLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    };

    listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let foundUser = listaUser.find(item => email.value === item.emailCad && senha.value === item.senhaCad);

    if (foundUser) {
        userValid = {
            nome: foundUser.nomeCad,
            email: foundUser.emailCad,
            senha: foundUser.senhaCad
        };

        if (email.value === '') return;

        setTimeout(function() {
            window.location.href = './../dashboard/index.html';
        }, 3000);

        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
        emailLabel.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.textContent = 'Email ou senha incorretos';
        email.focus();
    }
}
