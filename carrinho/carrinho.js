document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produto');
    const totalDisplay = document.querySelector('.total p');
    let total = 5000030;

    function atualizarTotal(valor) {
        total -= valor;
        totalDisplay.textContent = `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }

    produtos.forEach(produto => {
        const botaoRemover = produto.querySelector('button');
        const precoTexto = produto.querySelector('p').textContent;
        const preco = parseFloat(precoTexto.replace('Preço: R$', '').replace(/\./g, '').replace(',', '.'));

        botaoRemover.addEventListener('click', function() {
            produto.remove(); 
            atualizarTotal(preco);
        });
    });

    document.querySelector('.finalizar-compra').addEventListener('click', function() {
        alert('Compra finalizada! Total: R$ ' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
    });
});
