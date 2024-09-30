
function renderizarProdutos() {
    const container = document.querySelector('#produtos');
    container.innerHTML = '';

    produtos.forEach(produto => {
        const card = `
            <a href="/descricao/descricao.html?id=${produto.id}">
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
document.addEventListener('DOMContentLoaded', renderizarProdutos);
console.log(produtos);