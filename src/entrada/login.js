let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')
  let msgSuccess = document.querySelector('#msgSuccess')
  let listaUser = JSON.parse(localStorage.getItem('label-float'))

  let chave = {
    user: 'falqon',
    senha: '123456asd'
  }

  localStorage.setItem('listaUser', JSON.stringify(listaUser))

  if(usuario.value == chave.user && senha.value == chave.senha){
    window.location.href = 'http://127.0.0.1:5500/index.html'
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(chave))
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Usuario logado com sucesso!</strong>'
  
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  } 
}