function iniciar() {
    const firstName = window.prompt("Informe seu nome")
    if (firstName) {
        const lastName = window.prompt("Informe seu sobrenome")
        const confirmation = window.confirm(`Olá ${firstName} ${lastName}, seja bem vindo. Você deseja continuar?`)
        
    if (confirmation) {
            alert(`Olá ${firstName} ${lastName},você está logado em nosso sistema.`)
        }
    if (!confirmation) {
            alert("Você não efetuou login em nosso sistema")
    }
}
else {
    alert("Insira seu nome para fazer login no sistema")
}
}