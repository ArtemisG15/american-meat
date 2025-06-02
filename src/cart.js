// Cart management functions
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartItemQuantity(itemId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item && quantity > 0) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}