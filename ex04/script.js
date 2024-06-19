const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

function renderizarProdutos() {
    const container = document.getElementById('produtos');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        const nome = document.createElement('h2');
        nome.textContent = produto.nome;
        
        const valor = document.createElement('p');
        valor.textContent = `R$ ${produto.valor.toFixed(2)}`;
        
        const botao = document.createElement('button');
        botao.textContent = 'Comprar';
        botao.onclick = () => alert(`Você comprou: ${produto.nome}`);
        
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(valor);
        produtoDiv.appendChild(botao);
        
        container.appendChild(produtoDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);