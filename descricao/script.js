function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderizarDetalhes() {
    const id = getIdFromUrl();
    const produto = produtos.find(p => p.id == id);

    if (produto) {
        const detalhesContainer = document.getElementById('detalhes-produto');
        detalhesContainer.innerHTML = `
            <div class="container-fluid card-container d-flex justify-content-center mb-5">
                <!-- Coluna com as imagens menores -->
                <div class="d-flex flex-column" style="margin-right: 15px;">
                    <div class="card full-img-card" style="width: 8rem;">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    </div>
                    <div class="card" style="width: 8rem;">
                        <img src="../assets/cartas/Untitled.jpeg" class="card-img-top" alt="Imagem 2">
                    </div>
                </div>

                <!-- Imagem principal do produto -->
                <div class="card full-img-card equal-height" style="width: 18rem;">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                </div>

                <!-- Card com os detalhes do produto -->
                <div class="card equal-height" style="width: 18rem; margin-left: 20px; background-color: rgba(255,253,232,1);">
                    <div class="card-body">
                        <h5 class="card-title">Detalhes do Produto</h5>
                        <p class="card-text"><strong>Nome:</strong> ${produto.nome}</p>
                        <p class="card-text"><strong>Preço:</strong> R$ ${produto.preco}</p>
                        <p class="card-text"><strong>Raridade:</strong> ${produto.raridade}</p>
                        <p class="card-text"><strong>Disponibilidade:</strong> ${produto.disponibilidade}</p>
                        <hr>
                        <h6 class="text-black">Controle de Pedido</h6>
                        <div class="mb-3">
                            <label for="quantity" class="form-label text-black">Quantidade:</label>
                            <input type="number" id="quantity" class="form-control" min="1" value="1">
                        </div>
                        <button class="btn btn-primary" onclick="calcularFrete()">Calcular Frete</button>
                        <div class="mt-3" id="resultadoFrete"></div>
                        <button onclick="adicionarAoCarrinho(${produto.id})" class="btn btn-success mt-2">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        document.getElementById('detalhes-produto').innerHTML = '<p>Produto não encontrado</p>';
    }
}

document.addEventListener('DOMContentLoaded', renderizarDetalhes);
