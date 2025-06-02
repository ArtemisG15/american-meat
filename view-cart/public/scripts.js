document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartTotal = document.getElementById('cart-total');
    const totalAmount = document.getElementById('total-amount');
    const cart = getCart();

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartEmpty.classList.remove('hidden');
        cartTotal.classList.add('hidden');
        return;
    }

    cartEmpty.classList.add('hidden');
    cartTotal.classList.remove('hidden');

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'product-item';
        itemElement.innerHTML = `
            <div class="product-container">
                <div class="product-preview">
                    ${item.image.endsWith('.svg') ? 
                        `<object type="image/svg+xml" data="${item.image}" class="preview-layer"></object>` :
                        `<img src="${item.image}" alt="${item.name}">`
                    }
                    <div class="preview-error">No Preview</div>
                </div>
                <div class="product-text">
                    ${item.name}${item.options ? ` (${Object.entries(item.options).map(([k, v]) => `${k}: ${v}`).join(', ')})` : ''} - $${item.price.toFixed(2)} x ${item.quantity}
                </div>
            </div>
            <div class="product-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}'); renderCart();">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        // Handle SVG/image load errors
        const preview = itemElement.querySelector('.product-preview');
        const errorDiv = preview.querySelector('.preview-error');
        const imgOrSvg = preview.querySelector('img, object');
        if (imgOrSvg) {
            imgOrSvg.addEventListener('load', () => {
                errorDiv.style.display = 'none';
            });
            imgOrSvg.addEventListener('error', () => {
                errorDiv.style.display = 'block';
            });
        }
    });

    totalAmount.textContent = total.toFixed(2);

    // Placeholder checkout action
    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout... (Placeholder)');
    });
}

function updateQuantity(itemId, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        updateCartItemQuantity(itemId, qty);
        renderCart();
    }
}