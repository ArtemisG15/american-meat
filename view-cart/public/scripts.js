document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Color values from your order tracker
const colorValues = {
    Black: '#161d1e',
    DarkGray: '#323a3b',
    MediumGray: '#757575',
    LightGray: '#bababa',
    White: '#ffffff',
    CottonCandyPink: '#ffd3ed',
    Pink: '#ff98d5',
    NeonPink: '#ff0497',
    Red: '#A51A1A',
    CherryPie: '#5b0000',
    DrakeRed: '#480000',
    BurntOrange: '#a83208',
    FireOrange: '#c53e15',
    NeonOrange: '#Ff6700',
    Salmon: '#ea653c',
    Flesh: '#e29f8c',
    PineappleSmoothie: '#f8d296',
    Orange: '#F5A767',
    NeonTangerine: '#e85325',
    FlutterYellow: '#fbf2bb',
    NeonYellow: '#f7fd04',
    BananaYellow: '#fff755',
    CustardYellow: '#f3d62b',
    GoldMetallic: '#fad046',
    Tan: '#b08e4e',
    Buckskin: '#dcb262',
    OriginalDogBrown: '#8f7957',
    CopperRed: '#8f644e',
    Brown: '#5a3c30',
    Chocolate: '#58332d',
    DarkChocolate: '#231412',
    MintGreen: '#c1f398',
    CartoonDragonGreen: '#62dc6d',
    Cyan: '#76dce0',
    LyricGreen: '#74edd6',
    ClassicGreen: '#42c54e',
    NeonGreen: '#00ff00',
    Olive: '#3F8654',
    DragonGreen: '#122911',
    TwilightSpinachMetallic: '#13241b',
    FrostedMetallic: '#e9f2fa',
    CottonCandyBlue: '#d4f2ff',
    RainbowBlue: '#76cbe0',
    PupperBlue: '#007eff',
    NeonBlue: '#0e89ff',
    GrayBlue: '#16537E',
    DragonBlue: '#071c4a',
    LunarBlue: '#04102c',
    Blurple: '#5c4b87',
    CottonCandyPurple: '#A5C7E7',
    DragonPurple: '#5b3070',
    MagicPurple: '#bf75a6',
    Lilac: '#bf75be',
    NeonPurple: '#8517A7',
    DarkMagicPurple: '#987798',
    RedishPurple: '#511231',
    FleshyPink: '#cc6969',
    BubbleGumPink: '#f4a6bc',
    MarshmallowPink: '#ffb6e1',
    none: 'transparent'
};

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
        if (item.category === 'custom') {
            // Render custom items as grouped line items
            renderCustomItemGroup(item, cartItemsContainer);
            total += calculateCustomItemTotal(item) * item.quantity;
        } else {
            // Render regular items normally
            total += item.price * item.quantity;
            renderRegularItem(item, cartItemsContainer);
        }
    });

    totalAmount.textContent = total.toFixed(2);

    // Setup checkout button (remove existing listener first to avoid duplicates)
    setupCheckoutButton();
}

function setupCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        // Clone and replace to remove all event listeners
        const newCheckoutBtn = checkoutBtn.cloneNode(true);
        checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
        newCheckoutBtn.addEventListener('click', handleCheckout);
    }
}

function calculateCustomItemTotal(item) {
    const basePrice = 89.00;
    let totalPrice = basePrice;
    
    const optionalPricing = {
        'marblingColor': 30.00,
        'fullFace': 30.00,
        'bovineSpot': 30.00,
        'fur': 25.00,
        'vulvaAnalTeat': 25.00,
        'vulvaAnalHighlight': 25.00,
        'vulvaHighlight': 25.00,
        'internalClitoralHood': 20.00,
        'internalClitoral': 20.00,
        'internals': 20.00,
        'analRing': 15.00
    };
    
    Object.entries(item.options || {}).forEach(([feature, value]) => {
        if (value && value !== 'none' && optionalPricing[feature]) {
            totalPrice += optionalPricing[feature];
        }
    });
    
    return totalPrice;
}

function renderCustomItemGroup(item, container) {
    // Create a group container
    const groupContainer = document.createElement('div');
    groupContainer.className = 'custom-item-group';
    groupContainer.style.cssText = `
        border: 2px solid #e0e0e0;
        border-radius: 12px;
        margin-bottom: 20px;
        padding: 15px;
        background: #fafafa;
    `;

    // Group header
    const groupHeader = document.createElement('div');
    groupHeader.className = 'group-header';
    groupHeader.style.cssText = `
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 10px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
    `;
    groupHeader.textContent = `${item.name} (Qty: ${item.quantity})`;
    groupContainer.appendChild(groupHeader);

    // Base product line item
    const baseItem = createCustomLineItem(
        'Base Product',
        89.00,
        item.quantity,
        item.image,
        item.id,
        true // isBaseProduct
    );
    groupContainer.appendChild(baseItem);

    // Optional features as separate line items
    const optionalPricing = {
        'marblingColor': { price: 30.00, label: 'Marbling Color' },
        'fullFace': { price: 30.00, label: 'Full Face' },
        'bovineSpot': { price: 30.00, label: 'Bovine Spot' },
        'fur': { price: 25.00, label: 'Fur' },
        'vulvaAnalTeat': { price: 25.00, label: 'Vulva Anal Teat' },
        'vulvaAnalHighlight': { price: 25.00, label: 'Vulva Anal Highlight' },
        'vulvaHighlight': { price: 25.00, label: 'Vulva Highlight' },
        'internalClitoralHood': { price: 20.00, label: 'Internal Clitoral Hood' },
        'internalClitoral': { price: 20.00, label: 'Internal Clitoral' },
        'internals': { price: 20.00, label: 'Internal' },
        'analRing': { price: 15.00, label: 'Anal Ring' }
    };

    Object.entries(item.options || {}).forEach(([feature, value]) => {
        if (value && value !== 'none' && optionalPricing[feature]) {
            const optionData = optionalPricing[feature];
            const colorDisplay = value.replace(/([A-Z])/g, ' $1').trim();
            const optionItem = createCustomLineItem(
                `${optionData.label}: ${colorDisplay}`,
                optionData.price,
                item.quantity,
                null, // no image for options
                item.id,
                false // not base product
            );
            groupContainer.appendChild(optionItem);
        }
    });

    // Group total
    const groupTotal = document.createElement('div');
    groupTotal.className = 'group-total';
    groupTotal.style.cssText = `
        margin-top: 10px;
        padding-top: 8px;
        border-top: 1px solid #ddd;
        font-weight: 600;
        text-align: right;
        color: #333;
    `;
    const totalPrice = calculateCustomItemTotal(item) * item.quantity;
    groupTotal.textContent = `Group Total: $${totalPrice.toFixed(2)}`;
    groupContainer.appendChild(groupTotal);

    container.appendChild(groupContainer);
}

function createCustomLineItem(name, price, quantity, image, itemId, isBaseProduct) {
    const lineItem = document.createElement('div');
    lineItem.className = 'custom-line-item';
    lineItem.style.cssText = `
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    `;

    const content = document.createElement('div');
    content.className = 'line-item-content';
    content.style.cssText = `
        display: flex;
        align-items: center;
        flex: 1;
        gap: 10px;
    `;

    // Image/icon (only for base product)
    if (isBaseProduct && image) {
        const preview = document.createElement('div');
        preview.className = 'line-item-preview';
        preview.style.cssText = `
            width: 50px;
            height: 50px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        // Construct proper SVG path
        const imagePath = image.endsWith('.svg') ? 
            `../../src/assets/images/external-view/${image}` : 
            `../../src/assets/images/${image}`;
        
        if (imagePath.endsWith('.svg')) {
            const svgObject = document.createElement('object');
            svgObject.type = 'image/svg+xml';
            svgObject.data = imagePath;
            svgObject.style.cssText = 'width: 100%; height: 100%;';
            preview.appendChild(svgObject);
            
            // Add error handling
            svgObject.addEventListener('error', () => {
                preview.innerHTML = '<div style="font-size: 10px; color: #999;">No Preview</div>';
            });
        } else {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = name;
            img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
            preview.appendChild(img);
            
            // Add error handling
            img.addEventListener('error', () => {
                preview.innerHTML = '<div style="font-size: 10px; color: #999;">No Preview</div>';
            });
        }
        
        content.appendChild(preview);
    } else if (!isBaseProduct) {
        // Add indent for option items
        const indent = document.createElement('div');
        indent.style.cssText = `width: 20px; height: 20px;`;
        content.appendChild(indent);
    }

    // Text content
    const textContainer = document.createElement('div');
    textContainer.className = 'line-item-text';
    textContainer.style.cssText = `
        flex: 1;
        font-size: ${isBaseProduct ? '1rem' : '0.9rem'};
        color: ${isBaseProduct ? '#333' : '#666'};
        font-weight: ${isBaseProduct ? '500' : '400'};
    `;
    textContainer.textContent = `${name} - $${price.toFixed(2)}`;
    content.appendChild(textContainer);

    lineItem.appendChild(content);

    // Actions (only for base product)
    if (isBaseProduct) {
        const actions = document.createElement('div');
        actions.className = 'line-item-actions';
        actions.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
        `;

        const quantityControl = document.createElement('div');
        quantityControl.className = 'quantity-control';
        quantityControl.innerHTML = `
            <button onclick="updateQuantity('${itemId}', ${quantity - 1})" style="padding: 5px 8px; background: #2c6e7f; color: white; border: none; border-radius: 4px; cursor: pointer;">-</button>
            <input type="number" value="${quantity}" min="1" onchange="updateQuantity('${itemId}', this.value)" style="width: 50px; text-align: center; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
            <button onclick="updateQuantity('${itemId}', ${quantity + 1})" style="padding: 5px 8px; background: #2c6e7f; color: white; border: none; border-radius: 4px; cursor: pointer;">+</button>
        `;
        actions.appendChild(quantityControl);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.style.cssText = `
            padding: 5px 10px;
            background: #e63946;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        `;
        removeBtn.onclick = () => {
            removeFromCart(itemId);
            renderCart();
        };
        actions.appendChild(removeBtn);

        lineItem.appendChild(actions);
    }

    return lineItem;
}

function renderRegularItem(item, container) {
    const itemElement = document.createElement('div');
    itemElement.className = 'product-item';
    
    // Construct proper image path
    let imagePath = item.image || '../../src/assets/images/placeholder.png';
    if (item.image && item.image.endsWith('.svg')) {
        imagePath = `../../src/assets/images/external-view/${item.image}`;
    }
    
    itemElement.innerHTML = `
        <div class="product-container">
            <div class="product-preview">
                ${imagePath.endsWith('.svg') ? 
                    `<object type="image/svg+xml" data="${imagePath}" class="preview-layer"></object>` :
                    `<img src="${imagePath}" alt="${item.name}">`
                }
                <div class="preview-error" style="display: none;">No Preview</div>
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
    container.appendChild(itemElement);

    // Handle SVG/image load errors like in order tracker
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
}

function updateQuantity(itemId, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        updateCartItemQuantity(itemId, qty);
        renderCart();
    }
}

function handleCheckout() {
    alert('Proceeding to checkout... (Placeholder)');
}

// Function to apply colors to SVGs (copied from order tracker)
function applySvgColor(svg, color, hasGradient = false, index) {
    const svgDoc = svg.contentDocument;
    if (!svgDoc) {
        console.error(`SVG contentDocument not available for ${svg.id}, data: ${svg.data}`);
        return;
    }

    const colorValue = colorValues[color] || 'transparent';

    if (hasGradient) {
        const isInternalSvg = svg.id.includes('preview-internals') || svg.id.includes('preview-internal-');
        const gradients = svgDoc.querySelectorAll('linearGradient, radialGradient');
        gradients.forEach(gradient => {
            const stops = gradient.querySelectorAll('stop');
            stops.forEach((stop, stopIndex) => {
                stop.setAttribute('stop-color', colorValue);
                stop.style.stopColor = colorValue;
                const targetOpacity = isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0');
                stop.setAttribute('stop-opacity', targetOpacity);
                stop.style.stopOpacity = targetOpacity;
            });
            const refId = gradient.getAttribute('xlink:href');
            if (refId) {
                const refGradient = svgDoc.querySelector(refId);
                if (refGradient) {
                    const refStops = refGradient.querySelectorAll('stop');
                    refStops.forEach((stop, stopIndex) => {
                        stop.setAttribute('stop-color', colorValue);
                        stop.style.stopColor = colorValue;
                        const targetOpacity = isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0');
                        stop.setAttribute('stop-opacity', targetOpacity);
                        stop.style.stopOpacity = targetOpacity;
                    });
                }
            }
        });
        // Force redraw
        svg.style.display = 'none';
        svg.offsetHeight;
        svg.style.display = '';
    } else {
        const elements = svgDoc.querySelectorAll('path, g, rect, circle, polygon');
        elements.forEach(element => {
            element.setAttribute('fill', colorValue);
            element.style.fill = colorValue;
        });
    }
}