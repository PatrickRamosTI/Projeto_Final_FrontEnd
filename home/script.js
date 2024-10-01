function renderizarProdutos(filtro = '') {
    const container = document.querySelector('#produtos');
    container.innerHTML = '';

    const produtosFiltrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    if (produtosFiltrados.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
    } else {
        produtosFiltrados.forEach(produto => {
            const card = `
                <a class="aCard" href="/descricao/descricao.html?id=${produto.id}">
                    <div class="card" style="width: 18rem;">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${produto.nome}</h5>
                            <p class="card-text">R$ ${produto.preco}</p>
                        </div>
                    </div>
                </a>
            `;
            container.innerHTML += card;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();

    const filterInput = document.querySelector('#filterInput');
    filterInput.addEventListener('input', (event) => {
        renderizarProdutos(event.target.value);
    });
});

console.log(produtos);