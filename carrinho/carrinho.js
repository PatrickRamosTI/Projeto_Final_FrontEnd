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

    // Adicionar título apenas uma vez, fora do loop
    if (carrinho.length > 0) {
        const tituloHTML = '<h2><b>Seu Carrinho de Compras</b></h2>';
        carrinhoContainer.innerHTML = tituloHTML;
    } else {
        carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
        return;
    }

    let total = 0;

    carrinho.forEach(produto => {
        total += produto.preco;

        const produtoHTML = `
            <div class="produto-caixa">
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
                    <div class="info-produto">
                        <h3>${produto.nome}</h3>
                        <p>R$ ${produto.preco.toFixed(2)}</p>
                        <button class="remover-produto" onclick="removerDoCarrinho(${produto.id})">Remover</button>
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
            <button class="finalizar-compra" onClick="finalizarCompra()">Finalizar Compra</button>
        </div>
    `;
}

function finalizarCompra() {
    
    if (confirm('Deseja realmente finalizar a compra?')) {
        localStorage.removeItem('carrinho');
        alert('Compra finalizada com sucesso!');
        renderizarCarrinho();
    }
}

document.addEventListener('DOMContentLoaded', renderizarCarrinho);
