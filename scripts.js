// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque
// função para chamar e fechar o formulário

let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
    formulario.style.left = "50%"
}

function desaparecerFormulario(){
    formulario.style.left = "-50%"
}