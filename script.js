// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', () => {
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório

function handlerCorrect(input, helper) {
    input.classList.remove('error')
    helper.classList.remove('visible')
    input.classList.add('correct')
}

usernameInput.addEventListener('blur', (event) => {
    usernameLabel.classList.remove('required-popup')

    const valorInseridoPeloUsuario = event.target.value

    if (valorInseridoPeloUsuario.length > 3) {
        handlerCorrect(usernameInput,usernameHelper)
    } else {
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error')
        usernameHelper.innerText = 'O username deve ter ou mais de três caracteres'
        usernameHelper.classList.add('visible')   
    }
    
})

// Validar email
const emailInput = document.getElementById('email');
const emailLabel = document.getElementById('email_label');
const emailHelper = document.getElementById('email-helper');

emailInput.addEventListener('blur', (event) => {
    const valorInseridoPeloUsuario = event.target.value

    if(valorInseridoPeloUsuario.includes('@') && valorInseridoPeloUsuario.includes('.com')){
        handlerCorrect(emailInput, emailHelper)
    } else {
        emailInput.classList.remove('correct')
        emailInput.classList.add('error')
        emailHelper.innerText = 'Digite o email corretamente com @ e um .com'
        emailHelper.classList.add('visible')
    }
} )

//Validadar idade
const idadeInput = document.getElementById('idade');
const idadeLabel = documente.getElementById('idade_label');
const idadeHelper = documente.getElementById('idade-helper');

idadeInput.addEventListener('blur', (event) => {
    const valorInseridoPeloUsuario = event.target.value

    if(valorInseridoPeloUsuario > 0) {
        handlerCorrect(idadeInput, idadeHelper)
    } else {
        idadeInput.classList.remove('correct')
        idadeInput.classList.add('error')
        idadeInput.innerText = 'Digite a idade maior que 0.'
        idadeHelper.classList.add('visible')
    }
} )

//validar senha