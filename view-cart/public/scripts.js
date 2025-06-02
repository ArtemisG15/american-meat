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
        switch (item.category) {
            case 'custom':
            case 'gallery':
                renderCustomItemGroup(item, cartItemsContainer);
                total += calculateCustomItemTotal(item) * item.quantity;
                break;
            case 'order update':
                renderOrderUpdateGroup(item, cartItemsContainer);
                total += calculateOrderUpdateTotal(item) * item.quantity;
                break;
            case 'ready to ship':
            case 'dildos':
            case 'accessories':
                renderRegularItem(item, cartItemsContainer);
                total += item.price * item.quantity;
                break;
            default:
                // Fallback for legacy items
                renderRegularItem(item, cartItemsContainer);
                total += (item.price || 0) * item.quantity;
                break;
        }
    });

    totalAmount.textContent = total.toFixed(2);
    setupCheckoutButton();
}

function setupCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
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

function calculateOrderUpdateTotal(item) {
    // Only charge for added/changed options, not the base product
    let totalPrice = 0;
    
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
    
    // Only charge for the changes specified in changedOptions
    Object.entries(item.changedOptions || {}).forEach(([feature, value]) => {
        if (value && value !== 'none' && optionalPricing[feature]) {
            totalPrice += optionalPricing[feature];
        }
    });
    
    return totalPrice;
}

function renderCustomItemGroup(item, container) {
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
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 15px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
    `;

    // Add SVG preview to header
    const svgPreview = createSvgPreview(item, 80); // 80px size for header
    groupHeader.appendChild(svgPreview);

    const headerText = document.createElement('div');
    headerText.textContent = `${item.name} (Qty: ${item.quantity})`;
    groupHeader.appendChild(headerText);

    // Make preview clickable for modal
    svgPreview.style.cursor = 'pointer';
    svgPreview.addEventListener('click', () => {
        openProductModal(item);
    });

    groupContainer.appendChild(groupHeader);

    // Base product line item
    const baseItem = createCustomLineItem(
        'Base Product',
        89.00,
        item.quantity,
        null, // No separate image needed since we have SVG preview
        item.id,
        true
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
                null,
                item.id,
                false
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

function renderOrderUpdateGroup(item, container) {
    const groupContainer = document.createElement('div');
    groupContainer.className = 'order-update-group';
    groupContainer.style.cssText = `
        border: 2px solid #ffc107;
        border-radius: 12px;
        margin-bottom: 20px;
        padding: 15px;
        background: #fff8e1;
    `;

    // Group header with order update indicator
    const groupHeader = document.createElement('div');
    groupHeader.className = 'group-header';
    groupHeader.style.cssText = `
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 15px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
    `;

    // Add SVG preview showing the complete updated product
    const svgPreview = createSvgPreview(item, 80);
    groupHeader.appendChild(svgPreview);

    const headerText = document.createElement('div');
    headerText.innerHTML = `
        <div>Order Update: ${item.name} (Qty: ${item.quantity})</div>
        <div style="font-size: 0.8rem; color: #666; font-weight: 400;">
            Order #${item.orderNumber || 'N/A'} - ${item.email || 'No email'}
        </div>
    `;
    groupHeader.appendChild(headerText);

    // Make preview clickable for modal
    svgPreview.style.cursor = 'pointer';
    svgPreview.addEventListener('click', () => {
        openProductModal(item);
    });

    groupContainer.appendChild(groupHeader);

    // Original product (no charge)
    const originalItem = createCustomLineItem(
        `Original ${item.product.replace(/-/g, ' ').toUpperCase()}`,
        0.00, // No charge for original
        item.quantity,
        null,
        item.id,
        true
    );
    groupContainer.appendChild(originalItem);

    // Changed options (charged items)
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

    Object.entries(item.changedOptions || {}).forEach(([feature, value]) => {
        if (value && value !== 'none' && optionalPricing[feature]) {
            const optionData = optionalPricing[feature];
            const colorDisplay = value.replace(/([A-Z])/g, ' $1').trim();
            const optionItem = createCustomLineItem(
                `Added: ${optionData.label} - ${colorDisplay}`,
                optionData.price,
                item.quantity,
                null,
                item.id,
                false
            );
            groupContainer.appendChild(optionItem);
        }
    });

    // Group total (only charge for changes)
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
    const totalPrice = calculateOrderUpdateTotal(item) * item.quantity;
    groupTotal.textContent = `Update Total: $${totalPrice.toFixed(2)}`;
    groupContainer.appendChild(groupTotal);

    container.appendChild(groupContainer);
}

function createSvgPreview(item, size = 100) {
    const preview = document.createElement('div');
    preview.className = 'svg-preview';
    preview.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        background: #f9f9f9;
        border: 1px solid #ddd;
        flex-shrink: 0;
    `;

    // Build SVG layers like in order tracker
    const svgLayers = buildSvgLayers(item);
    
    svgLayers.forEach((layer, index) => {
        if (!layer.condition || layer.condition === true) {
            const svg = document.createElement('object');
            svg.type = 'image/svg+xml';
            svg.className = 'preview-layer';
            svg.id = `cart-preview-${item.id}-${layer.id}-${index}`;
            svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
            svg.style.cssText = `
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                pointer-events: none;
            `;
            preview.appendChild(svg);

            if (layer.color) {
                svg.addEventListener('load', () => {
                    applySvgColor(svg, layer.color, layer.hasGradient);
                });
            }
        }
    });

    // Add error handling
    const errorDiv = document.createElement('div');
    errorDiv.className = 'preview-error';
    errorDiv.textContent = 'No Preview';
    errorDiv.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10px;
        color: #999;
        display: none;
    `;
    preview.appendChild(errorDiv);

    return preview;
}

function buildSvgLayers(item) {
    if (!item.product || !item.options) return [];

    const layers = [
        { id: 'body', file: `${item.product}-body.svg`, color: item.options.bodyColor },
        { id: 'marbling', file: `${item.product}-marble.svg`, color: item.options.marblingColor, condition: item.options.marblingColor && item.options.marblingColor !== 'none' }
    ];

    // Add product-specific layers
    switch (item.product) {
        case 'terlingua':
            layers.push(
                { id: 'fur', file: `${item.product}-fur.svg`, color: item.options.fur, condition: item.options.fur && item.options.fur !== 'none' },
                { id: 'anal-ring', file: `${item.product}-anal-ring.svg`, color: item.options.analRing, condition: item.options.analRing && item.options.analRing !== 'none' },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internalClitoralHood, condition: item.options.internalClitoralHood && item.options.internalClitoralHood !== 'none' }
            );
            break;
        case 'two-hole-pony':
        case 'two-hole-cheval':
            layers.push(
                { id: 'full-face', file: `${item.product}-full-face.svg`, color: item.options.fullFace, condition: item.options.fullFace && item.options.fullFace !== 'none' },
                { id: 'bovine-spot', file: `${item.product}-bovine-spot.svg`, color: item.options.bovineSpot, condition: item.options.bovineSpot && item.options.bovineSpot !== 'none' },
                { id: 'anal-ring', file: `${item.product}-anal-ring.svg`, color: item.options.analRing, condition: item.options.analRing && item.options.analRing !== 'none' },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internalClitoral, condition: item.options.internalClitoral && item.options.internalClitoral !== 'none' }
            );
            break;
        case 'two-hole-canine':
            layers.push(
                { id: 'vat', file: `${item.product}-vat.svg`, color: item.options.vulvaAnalTeat, condition: item.options.vulvaAnalTeat && item.options.vulvaAnalTeat !== 'none' },
                { id: 'fur', file: `${item.product}-fur.svg`, color: item.options.fur, condition: item.options.fur && item.options.fur !== 'none' },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internalClitoral, condition: item.options.internalClitoral && item.options.internalClitoral !== 'none' }
            );
            break;
        case 'deer':
            layers.push(
                { id: 'vah', file: `${item.product}-vah.svg`, color: item.options.vulvaAnalHighlight, condition: item.options.vulvaAnalHighlight && item.options.vulvaAnalHighlight !== 'none' },
                { id: 'fur', file: `${item.product}-fur.svg`, color: item.options.fur, condition: item.options.fur && item.options.fur !== 'none' },
                { id: 'tail', file: `${item.product}-tail.svg`, color: item.options.fur, condition: item.options.fur && item.options.fur !== 'none', hasGradient: true },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internalClitoral, condition: item.options.internalClitoral && item.options.internalClitoral !== 'none' }
            );
            break;
        case 'dragon':
            layers.push(
                { id: 'vh', file: `${item.product}-vh.svg`, color: item.options.vulvaHighlight, condition: item.options.vulvaHighlight && item.options.vulvaHighlight !== 'none' },
                { id: 'anal-ring', file: `${item.product}-anal-ring.svg`, color: item.options.analRing, condition: item.options.analRing && item.options.analRing !== 'none', hasGradient: true },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internalClitoral, condition: item.options.internalClitoral && item.options.internalClitoral !== 'none' }
            );
            break;
        case 'one-hole-canine':
            layers.push(
                { id: 'fur', file: `${item.product}-fur.svg`, color: item.options.fur, condition: item.options.fur && item.options.fur !== 'none' },
                { id: 'anal-ring', file: `${item.product}-anal-ring.svg`, color: item.options.analRing, condition: item.options.analRing && item.options.analRing !== 'none' },
                { id: 'internals', file: `${item.product}-internals.svg`, color: item.options.internals, condition: item.options.internals && item.options.internals !== 'none' }
            );
            break;
    }

    // Add outline last
    layers.push({ id: 'outline', file: `${item.product}-outline.svg`, color: null });

    return layers;
}

function openProductModal(item) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content product-modal">
            <h3>${item.name || item.product.replace(/-/g, ' ').toUpperCase()}</h3>
            <div class="modal-views">
                <div class="view-container">
                    <h4>Exterior View</h4>
                    <div class="modal-preview exterior-preview"></div>
                </div>
                <div class="view-container">
                    <h4>Interior View</h4>
                    <div class="modal-preview interior-preview"></div>
                </div>
            </div>
            <button id="closeModal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Load exterior and interior SVGs
    loadModalPreviews(item, modal);

    // Close modal
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.remove();
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function loadModalPreviews(item, modal) {
    const exteriorPreview = modal.querySelector('.exterior-preview');
    const interiorPreview = modal.querySelector('.interior-preview');

    // Build exterior layers
    const exteriorLayers = buildSvgLayers(item);
    // Build interior layers (similar but with internal-view path)
    const interiorLayers = buildInteriorSvgLayers(item);

    // Load exterior SVGs
    exteriorLayers.forEach((layer, index) => {
        if (!layer.condition || layer.condition === true) {
            const svg = document.createElement('object');
            svg.type = 'image/svg+xml';
            svg.className = 'preview-layer';
            svg.id = `modal-exterior-${item.id}-${layer.id}-${index}`;
            svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
            exteriorPreview.appendChild(svg);

            if (layer.color) {
                svg.addEventListener('load', () => {
                    applySvgColor(svg, layer.color, layer.hasGradient);
                });
            }
        }
    });

    // Load interior SVGs
    interiorLayers.forEach((layer, index) => {
        if (!layer.condition || layer.condition === true) {
            const svg = document.createElement('object');
            svg.type = 'image/svg+xml';
            svg.className = 'preview-layer';
            svg.id = `modal-interior-${item.id}-${layer.id}-${index}`;
            svg.data = `../../src/assets/images/${layer.path || 'internal-view'}/${layer.file}`;
            interiorPreview.appendChild(svg);

            if (layer.color) {
                svg.addEventListener('load', () => {
                    applySvgColor(svg, layer.color, layer.hasGradient);
                });
            }
        }
    });
}

function buildInteriorSvgLayers(item) {
    if (!item.product || !item.options) return [];

    // Get sizing info
    const validPonyChevalSizes = ['tight', 'standard', 'large-ribbed'];
    const validOtherSizes = ['medium', 'large'];
    const validCervixDepths = ['3', '5', '7'];

    const vaginalInsert = item.options.vaginalInsert && 
        (['two-hole-pony', 'two-hole-cheval'].includes(item.product) 
            ? validPonyChevalSizes.includes(item.options.vaginalInsert.toLowerCase()) 
            : validOtherSizes.includes(item.options.vaginalInsert.toLowerCase()))
        ? item.options.vaginalInsert.toLowerCase()
        : (['deer', 'dragon'].includes(item.product) ? 'medium' : null);

    const analInsert = item.options.analInsert && 
        (['two-hole-pony', 'two-hole-cheval'].includes(item.product) 
            ? validPonyChevalSizes.includes(item.options.analInsert.toLowerCase()) 
            : validOtherSizes.includes(item.options.analInsert.toLowerCase()))
        ? item.options.analInsert.toLowerCase()
        : null;

    const cervixDepth = item.options.cervixDepth && validCervixDepths.includes(item.options.cervixDepth)
        ? item.options.cervixDepth
        : '3';

    const layers = [
        { id: 'internal-body', file: `${item.product}-body.svg`, color: item.options.bodyColor, path: 'internal-view' },
        { id: 'internal-marbling', file: `${item.product}-marble.svg`, color: item.options.marblingColor, condition: item.options.marblingColor && item.options.marblingColor !== 'none', path: 'internal-view' }
    ];

    // Add product-specific interior layers
    switch (item.product) {
        case 'terlingua':
            const internalColorTerlingua = item.options.internalClitoralHood;
            layers.push(
                { id: 'hood', file: `${item.product}-hood.svg`, color: internalColorTerlingua, condition: internalColorTerlingua && internalColorTerlingua !== 'none', path: 'internal-view' },
                { id: 'internal-insert-vaginal', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v.svg`, color: internalColorTerlingua, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-vaginal-outline', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
                { id: 'internal-insert-anal', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: internalColorTerlingua, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-anal-outline', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
            );
            break;
        case 'two-hole-pony':
        case 'two-hole-cheval':
            const internalColorPony = item.options.internalClitoral;
            layers.push(
                { id: 'internal-full-face', file: `${item.product}-full-face.svg`, color: item.options.fullFace, condition: item.options.fullFace && item.options.fullFace !== 'none', path: 'internal-view', hasGradient: true },
                { id: 'internal-insert-vaginal', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: internalColorPony, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-vaginal-outline', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
                { id: 'internal-insert-anal', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: internalColorPony, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-anal-outline', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
            );
            break;
        case 'two-hole-canine':
            const internalColorCanine = item.options.internalClitoral;
            layers.push(
                { id: 'teat', file: `${item.product}-teat.svg`, color: item.options.vulvaAnalTeat, condition: item.options.vulvaAnalTeat && item.options.vulvaAnalTeat !== 'none', path: 'internal-view' },
                { id: 'internal-insert-vaginal', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: internalColorCanine, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-vaginal-outline', file: `${item.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
                { id: 'internal-insert-anal', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: internalColorCanine, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-anal-outline', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
            );
            break;
        case 'deer':
            layers.push(
                { id: 'internal-insert-vaginal', file: `${item.product}-medium-v.svg`, color: item.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true }
            );
            break;
        case 'dragon':
            layers.push(
                { id: 'internal-insert-vaginal', file: `${item.product}-medium-v.svg`, color: item.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true }
            );
            break;
        case 'one-hole-canine':
            layers.push(
                { id: 'internal-insert-anal', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: item.options.internals, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
                { id: 'internal-anal-outline', file: `${item.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
            );
            break;
    }

    // Add outline last
    layers.push({ id: 'outline', file: `${item.product}-body-outline.svg`, color: null, path: 'internal-view' });

    return layers;
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

    // Add indent for option items
    if (!isBaseProduct) {
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
    textContainer.textContent = `${name} - ${price.toFixed(2)}`;
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
    itemElement.style.cssText = `
        display: flex;
        align-items: center;
        padding: 15px;
        margin-bottom: 15px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border: 2px solid #e0e0e0;
    `;
    
    // Construct proper image path
    let imagePath = item.image || '../../src/assets/images/placeholder.png';
    if (item.image && !item.image.startsWith('http') && !item.image.startsWith('../../')) {
        imagePath = `../../src/assets/images/${item.image}`;
    }
    
    itemElement.innerHTML = `
        <div class="product-container" style="display: flex; align-items: center; flex: 1; gap: 15px;">
            <div class="product-preview" style="width: 80px; height: 80px; position: relative; overflow: hidden; border-radius: 8px; background: #f9f9f9; border: 1px solid #ddd; flex-shrink: 0;">
                <img src="${imagePath}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="preview-error" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; color: #999; display: none;">No Preview</div>
            </div>
            <div class="product-text" style="flex: 1; font-size: 1rem; color: #333;">
                <div style="font-weight: 600; margin-bottom: 5px;">${item.name}</div>
                <div style="font-size: 0.9rem; color: #666;">
                    ${item.price.toFixed(2)} x ${item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </div>
                ${item.options ? `<div style="font-size: 0.8rem; color: #888; margin-top: 5px;">${Object.entries(item.options).map(([k, v]) => `${k}: ${v}`).join(', ')}</div>` : ''}
            </div>
        </div>
        <div class="product-actions" style="display: flex; align-items: center; gap: 10px;">
            <div class="quantity-control" style="display: flex; align-items: center; gap: 5px;">
                <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" style="padding: 5px 8px; background: #2c6e7f; color: white; border: none; border-radius: 4px; cursor: pointer;">-</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)" style="width: 50px; text-align: center; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" style="padding: 5px 8px; background: #2c6e7f; color: white; border: none; border-radius: 4px; cursor: pointer;">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}'); renderCart();" style="padding: 8px 12px; background: #e63946; color: white; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
        </div>
    `;
    container.appendChild(itemElement);

    // Handle image load errors
    const img = itemElement.querySelector('img');
    const errorDiv = itemElement.querySelector('.preview-error');
    if (img && errorDiv) {
        img.addEventListener('load', () => {
            errorDiv.style.display = 'none';
        });
        img.addEventListener('error', () => {
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
function applySvgColor(svg, color, hasGradient = false) {
    const svgDoc = svg.contentDocument;
    if (!svgDoc) {
        console.error(`SVG contentDocument not available for ${svg.id}, data: ${svg.data}`);
        return;
    }

    const colorValue = colorValues[color] || 'transparent';

    if (hasGradient) {
        const isInternalSvg = svg.id.includes('internal') || svg.id.includes('preview-internal');
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