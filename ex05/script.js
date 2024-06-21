const inputElement = document.querySelector('input')
const buttonForm = document.querySelector('form button')
const listaInteresses = document.querySelector('.inseridos')
const btnDeletaTudo = document.querySelector('.btndelete')

var interesses = []

btnDeletaTudo.addEventListener('click', () => {
    listaInteresses.innerHTML = ""
})

buttonForm.addEventListener('click', () => {
    const value = inputElement.value
    
    if (value) {
        inputElement.value = ""
        interesses.push(value)
        listaInteresses.innerHTML = ""

        interesses.forEach((item) =>{
        let elementoLista = document.createElement('li')
        elementoLista.innerText = item
        listaInteresses.appendChild(elementoLista)
        
        const check = document.createElement('input')
        check.type = "checkbox"
        
        check.addEventListener('change', () => {
            if (check.checked) {
                elementoLista.style.textDecoration = 'line-through';
            } else {
                elementoLista.style.textDecoration = 'none';
            }
        });
        
        elementoLista.prepend(check)
})    


    } else {
        alert('Insira um interesse para ser adicionado')
    }   
})

