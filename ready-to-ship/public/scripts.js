document.addEventListener('DOMContentLoaded', () => {
    // Sample products (replace with your actual product data)
    const products = [
        {
            id: 'ready-to-ship-001',
            category: 'ready-to-ship',
            name: 'Pre-Made Two-Hole Pony',
            price: 149.99,
            image: '../src/assets/images/external-view/two-hole-pony-body.svg',
            options: { color: 'Neon Pink', size: 'Standard' }
        },
        {
            id: 'ready-to-ship-002',
            category: 'ready-to-ship',
            name: 'Pre-Made Dragon',
            price: 129.99,
            image: '../src/assets/images/external-view/dragon-body.svg',
            options: { color: 'Dragon Blue', size: 'Medium' }
        }
    ];

    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div class="product-preview">
                ${product.image.endsWith('.svg') ? 
                    `<object type="image/svg+xml" data="${product.image}" class="preview-layer"></object>` :
                    `<img src="${product.image}" alt="${product.name}">`
                }
                <div class="preview-error">No Preview</div>
            </div>
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${Object.entries(product.options).map(([k, v]) => `${k}: ${v}`).join(', ')}</p>
            <button class="add-to-cart" onclick="addToCart({
                id: '${product.id}',
                category: '${product.category}',
                name: '${product.name}',
                price: ${product.price},
                quantity: 1,
                image: '${product.image}',
                options: ${JSON.stringify(product.options)}
            })">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);

        // Handle SVG/image load errors
        const preview = productElement.querySelector('.product-preview');
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
});