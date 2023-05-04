let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#Usuarioo')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#Senhaa')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelCconfirmSenha')
let validConfirmSenha = false

let msgCdastro = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 4){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome 🧒🏻 "Digite no minimo 5 caracteres"'
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: blue')
    labelNome.innerHTML = 'Nome 🧒🏻'
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Nome de úsuario 🧒🏻 "Digite no minimo 5 caracteres"'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: blue')
    labelUsuario.innerHTML = 'Nome de úsuario 🧒🏻'
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha 🔒 "Digite no minimo 6 caracteres"'
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: blue')
    labelSenha.innerHTML = 'Senha 🔒'
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirme sua Senha 🔒 "As senhas não estão iguais"'
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: blue')
    labelConfirmSenha.innerHTML = 'Confirme sua Senha 🔒'
    validConfirmSenha = true
  }
})

function cadastrar() 
{
localStorage.setItem("nome", document.getElementById("Usuarioo").value);
localStorage.setItem("senha", document.getElementById("Senhaa").value);

 msgCadastro.setAttribute('style', 'display: block')
 msgCadastro.innerHTML = '<strong>Cadastrando usuário...</strong>'
   
alert("Dados cadastrados!");
}
    function entrar()
    {
    localStorage.setItem("nnome", document.getElementById("loginNome").value);
    localStorage.setItem("ssenha", document.getElementById("loginSenha").value);
    }

function acesso()
{
    if (localStorage.getItem("nnome") == localStorage.getItem("nome") && localStorage.getItem("ssenha") == localStorage.getItem("senha"))
    {
                document.getElementById("erro").textContent = " 🎉🎉Acesso realizado com sucesso! 🎉🎉 ---------------- Parabéns você recebeu MB!";
    }
}