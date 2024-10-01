function adicionarAoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produtoExistente = carrinho.find(p => p.id === id);
    if (!produtoExistente) {
        const produto = produtos.find(p => p.id === id);
        console.log(produto);
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        alert('Produto adicionado ao carrinho!');
    } else {
        alert('Produto já está no carrinho.');
    }
}

function removerDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho = carrinho.filter(p => p.id !== id);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}

function renderizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.querySelector('#carrinho');
    carrinhoContainer.innerHTML = ''; 

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

    let total = 0;

    carrinho.forEach(produto => {
        total += produto.preco;

        const produtoHTML = `
            <h2><b>Seu Carrinho de Compras</b></h2>
            <div class="produto-caixa">
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
                    <div class="info-produto">
                        <h3>${produto.nome}</h3>
                        <p>R$ ${produto.preco.toFixed(2)}</p>
                        <button onclick="removerDoCarrinho(${produto.id})">Remover</button>
                    </div>
                </div>
            </div>
        `;
        carrinhoContainer.innerHTML += produtoHTML;
    });

    const totalContainer = document.querySelector('#total');
    totalContainer.innerHTML = `
        <div>
            <p>Total: R$ ${total.toFixed(2)}</p>
            <button onclick="finalizarCompra()" class="finalizar-compra">Finalizar Compra</button>
        </div>
    `;
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    renderizarCarrinho();
}

document.addEventListener('DOMContentLoaded', renderizarCarrinho);
