// Função para adicionar produto ao carrinho
let cart = [];

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Função para adicionar um item no carrinho
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-id');
  const productName = button.getAttribute('data-nome');
  const productPrice = button.getAttribute('data-preco');

  const product = {
    id: productId,
    nome: productName,
    preco: parseFloat(productPrice),
  };

  // Adiciona o produto no carrinho
  cart.push(product);
  updateCart();
}

// Adicionando eventos de click nos botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
