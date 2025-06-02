import { products } from '../products/products.js';

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
    FireOrange: '#e25d34',
    NeonOrange: '#Ff6700',
    Salmon: '#ea653c',
    Flesh: '#e29f8c',
    PineappleSmoothie: '#ffb350',
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

document.addEventListener('DOMContentLoaded', () => {
    const productSelection = document.getElementById('product-selection');
    const customization = document.getElementById('customization');
    const productName = document.getElementById('product-name');
    const requiredOptions = document.getElementById('required-options');
    const optionalOptions = document.getElementById('optional-options');
    const previewText = document.getElementById('preview-text');
    const backBtn = document.getElementById('back-btn');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const viewCartBtn = document.getElementById('view-cart-btn');
    const colorGrid = document.getElementById('color-grid');
    const colorGridHeading = document.getElementById('color-grid-heading');
    const colorGridMessage = document.getElementById('color-grid-message');

    let previewBody = document.getElementById('preview-body');
    let previewMarbling = document.getElementById('preview-marbling');
    let previewVat = document.getElementById('preview-vat');
    let previewFur = document.getElementById('preview-fur');
    let previewTail = document.getElementById('preview-tail');
    let previewFullFace = document.getElementById('preview-full-face');
    let previewBovineSpot = document.getElementById('preview-bovine-spot');
    let previewVah = document.getElementById('preview-vah');
    let previewVh = document.getElementById('preview-vh');
    let previewAnalRing = document.getElementById('preview-anal-ring');
    let previewInternals = document.getElementById('preview-internals');
    let previewOutline = document.getElementById('preview-outline');
    let previewInternalBody = document.getElementById('preview-internal-body');
    let previewInternalFullFace = document.getElementById('preview-internal-full-face');
    let previewInternalInsertVaginal = document.getElementById('preview-internal-insert-vaginal');
    let previewInternalInsertAnal = document.getElementById('preview-internal-insert-anal');
    let previewInternalAnalOutline = document.getElementById('preview-internal-anal-outline');
    let previewInternalMarbling = document.getElementById('preview-internal-marbling');
    const svgError = document.getElementById('svg-error');

    let selectedProduct = null;
    let currentConfig = {};
    let previousColors = {};
    let activeColorOption = 'bodyColor';
    let activeOption = 'bodyColor';
    let currentView = 'exterior';
    let isUpdateOrder = false;
    let isFromGallery = false;
    let orderNumber = null;
    let productIndex = null;
    let pendingChanges = {}; 

    const viewExteriorBtn = document.getElementById('view-exterior-btn');
    const viewInternalsBtn = document.getElementById('view-internals-btn');

    // Initialize cart count
    updateCartCount();

    // Parse query parameters
    const urlParams = new URLSearchParams(window.location.search);
    orderNumber = urlParams.get('orderNumber');
    const email = urlParams.get('email');
    const preselectedProduct = urlParams.get('product');
    productIndex = urlParams.get('productIndex');
    isFromGallery = urlParams.get('fromGallery') === 'true';
    const applyToAll = urlParams.get('applyToAll') === 'true';
    let groupIndices = [];
    try {
        groupIndices = JSON.parse(urlParams.get('groupIndices')) || [parseInt(productIndex)];
    } catch (e) {
        console.error('Error parsing groupIndices:', e);
        groupIndices = [parseInt(productIndex)];
    }

    const preselectedOptions = {};
    for (const [key, value] of urlParams.entries()) {
        if (key !== 'orderNumber' && key !== 'email' && key !== 'product' && key !== 'productIndex' && key !== 'fromGallery' && key !== 'applyToAll' && key !== 'groupIndices') {
            preselectedOptions[key] = value;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('#main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});

    // Confirm button for modal
const confirmBtn = document.getElementById('color-modal-confirm');
    const modal = document.getElementById('color-modal');

    if (confirmBtn && modal) {
        confirmBtn.addEventListener('click', () => {
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.classList.add('closing');
                setTimeout(() => {
                    modal.style.display = 'none';
                    modalContent.classList.remove('closing');
                    modal.classList.remove('active');
                    updatePreview();

                    // Scroll to top of options-column on mobile view
                    if (window.innerWidth <= 1300) {
                        const optionsColumn = document.querySelector('.options-column');
                        if (optionsColumn) {
                            optionsColumn.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            // Fine-tune position to account for header and preview
                            setTimeout(() => {
                                const rect = optionsColumn.getBoundingClientRect();
                                const headerHeight = document.querySelector('header').offsetHeight || 60;
                                const previewHeight = document.querySelector('.preview-column').offsetHeight || 250;
                                const desiredTop = headerHeight + previewHeight + 10; // 10px buffer
                                if (rect.top < desiredTop) {
                                    window.scrollBy({ top: rect.top - desiredTop, behavior: 'smooth' });
                                }
                            }, 300); // Match modal close animation
                        }
                    }
                }, 300); // Match modal close animation
            }
        });
    } else {
        console.warn('Modal or confirm button not found in the DOM');
    }

    // Check if this is an Update Order or Gallery flow
    if (preselectedProduct && products[preselectedProduct]) {
        if (orderNumber && email) {
            isUpdateOrder = true;
            backBtn.textContent = 'Cancel Changes';
            addToCartBtn.textContent = 'Make Changes';
            viewCartBtn.style.display = 'none';
        } else if (isFromGallery) {
            backBtn.textContent = 'Back to Gallery';
            addToCartBtn.textContent = 'Add to Cart';
            viewCartBtn.style.display = 'inline-block';
        }
        selectProduct(preselectedProduct, preselectedOptions);
    }

    viewExteriorBtn.addEventListener('click', () => {
        currentView = 'exterior';
        viewExteriorBtn.classList.add('active');
        viewInternalsBtn.classList.remove('active');
        updateSvgDisplay();
        updatePreview();
    });

    viewInternalsBtn.addEventListener('click', () => {
        currentView = 'internals';
        viewInternalsBtn.classList.add('active');
        viewExteriorBtn.classList.remove('active');
        updateSvgDisplay();
        updatePreview();
    });

    // Function to select a product and apply configuration
    function selectProduct(product, options = {}) {
    console.log('selectProduct called with:', { product, options });
    selectedProduct = product;
    productName.textContent = selectedProduct.replace(/-/g, ' ').toUpperCase();
    currentConfig = {
        bodyColor: 'Black',
        vaginalInsert: ['terlingua', 'two-hole-canine'].includes(selectedProduct) ? 'medium' :
                      ['two-hole-pony', 'two-hole-cheval'].includes(selectedProduct) ? 'standard' :
                      ['deer', 'dragon'].includes(selectedProduct) ? 'medium' : undefined,
        analInsert: ['terlingua', 'two-hole-canine', 'one-hole-canine'].includes(selectedProduct) ? 'medium' :
                    ['two-hole-pony', 'two-hole-cheval'].includes(selectedProduct) ? 'standard' : undefined,
        cervixDepth: selectedProduct === 'terlingua' ? '3' : undefined,
        marblingColor: 'none',
        analRing: 'none',
        fur: 'none',
        fullFace: 'none',
        bovineSpot: 'none',
        vulvaAnalTeat: 'none',
        vulvaAnalHighlight: 'none',
        vulvaHighlight: 'none',
        internalClitoralHood: selectedProduct === 'terlingua' ? 'none' : undefined,
        internalClitoral: ['two-hole-pony', 'two-hole-cheval', 'two-hole-canine', 'deer', 'dragon'].includes(selectedProduct) ? 'none' : undefined,
        internals: selectedProduct === 'one-hole-canine' ? 'none' : undefined
    };

    // Apply provided options
    if (options && Object.keys(options).length > 0) {
        const productConfig = products[selectedProduct];
        console.log('Product Config:', productConfig);
        Object.keys(options).forEach(key => {
            let optionValue = options[key];
            const allowedValues = [
                ...(productConfig.required[key] || []),
                ...(productConfig.optional[key] || [])
            ];
            const matchingValue = allowedValues.find(
                val => val.toLowerCase() === optionValue.toLowerCase()
            );
            if (matchingValue && optionValue !== 'undefined') {
                console.log(`Applying option ${key}=${optionValue} -> ${matchingValue}`);
                currentConfig[key] = matchingValue;
            } else {
                console.warn(`Invalid option ${key}=${optionValue}; Allowed: ${allowedValues.join(', ')}`);
            }
        });
    }

    console.log('Final currentConfig:', currentConfig);
    previousColors = { ...currentConfig };

    // Reset SVGs
    const allSvgs = [
        previewBody, previewMarbling, previewVat, previewFur, previewTail, previewFullFace,
        previewInternalFullFace, previewBovineSpot, previewVah, previewVh, previewAnalRing,
        previewInternals, previewOutline, previewInternalBody, previewInternalMarbling,
        previewInternalInsertVaginal, previewInternalInsertAnal, previewInternalAnalOutline
    ];
    allSvgs.forEach(svg => {
        if (svg) {
            svg.replaceWith(svg.cloneNode(true));
        }
    });

    // Reassign SVG elements
    previewBody = document.getElementById('preview-body');
    previewMarbling = document.getElementById('preview-marbling');
    previewVat = document.getElementById('preview-vat');
    previewFur = document.getElementById('preview-fur');
    previewTail = document.getElementById('preview-tail');
    previewFullFace = document.getElementById('preview-full-face');
    previewBovineSpot = document.getElementById('preview-bovine-spot');
    previewVah = document.getElementById('preview-vah');
    previewVh = document.getElementById('preview-vh');
    previewAnalRing = document.getElementById('preview-anal-ring');
    previewInternals = document.getElementById('preview-internals');
    previewOutline = document.getElementById('preview-outline');
    previewInternalBody = document.getElementById('preview-internal-body');
    previewInternalMarbling = document.getElementById('preview-internal-marbling');
    previewInternalFullFace = document.getElementById('preview-internal-full-face');
    previewInternalInsertVaginal = document.getElementById('preview-internal-insert-vaginal');
    previewInternalInsertAnal = document.getElementById('preview-internal-insert-anal');
    previewInternalAnalOutline = document.getElementById('preview-internal-anal-outline');

    currentView = 'exterior';
    viewExteriorBtn.classList.add('active');
    viewInternalsBtn.classList.remove('active');

    updateSvgDisplay();
    renderCustomization();
    updatePreviewText();
    productSelection.classList.remove('active');
    customization.classList.add('active');
    window.scrollTo(0, 0); // Scroll to top to ensure customization screen starts at the top
}

    const productCards = document.querySelectorAll('.product-card');
    console.log('Found product cards:', productCards.length); // Debug: Check if cards are found

    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent any default behavior
            console.log('Product card clicked:', card.dataset.product); // Debug: Confirm click
            selectProduct(card.dataset.product);
        });
    });

    backBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Back button clicked, isFromGallery:', isFromGallery, 'isUpdateOrder:', isUpdateOrder);
        if (isUpdateOrder) {
            const queryParams = new URLSearchParams({
                orderNumber: orderNumber,
                email: email,
                showUpdateModal: 'true',
                usePersistedState: 'true'
            });
            console.log('Redirecting to order tracker for update order:', queryParams.toString());
            window.location.href = `../../order-tracker/public/index.html?${queryParams.toString()}`;
        } else if (isFromGallery) {
            console.log('Redirecting to gallery');
            window.location.href = '../../gallery/public/index.html';
        } else {
        // Switch back to product selection screen
        console.log('Switching to product selection screen');
        productSelection.classList.add('active');
        customization.classList.remove('active');
        selectedProduct = null; // Reset selected product
        currentConfig = {}; // Reset configuration
        window.scrollTo(0, 0); // Scroll to top
    }
    });

    addToCartBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Add to Cart clicked, isFromGallery:', isFromGallery, 'isUpdateOrder:', isUpdateOrder);
        const cartItem = {
            id: `custom-${Date.now()}`,
            category: 'custom',
            product: selectedProduct,
            name: selectedProduct.replace(/-/g, ' ').toUpperCase(),
            price: calculatePrice(currentConfig, selectedProduct),
            quantity: 1,
            image: `../src/assets/images/external-view/${selectedProduct}-body.svg`,
            options: { ...currentConfig }
        };

        if (isUpdateOrder) {
            const updatedItem = {
                product: selectedProduct,
                options: { ...currentConfig },
                name: selectedProduct.replace(/-/g, ' ').toUpperCase()
            };
            const queryParams = new URLSearchParams({
                orderNumber: orderNumber,
                email: email,
                productIndex: productIndex,
                showUpdateModal: 'true',
                updatedItem: JSON.stringify(updatedItem),
                applyToAll: applyToAll.toString(),
                groupIndices: JSON.stringify(groupIndices),
                usePersistedState: 'true'
            });
            console.log('Redirecting to order tracker for update order:', queryParams.toString());
            window.location.href = `../../order-tracker/public/index.html?${queryParams.toString()}`;
        } else {
            console.log('Adding to cart:', cartItem);
            addToCart(cartItem);
            alert('Added to cart!\n' + previewText.textContent);
            window.location.href = '../../view-cart/public/index.html';
        }
    });

    viewCartBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        window.location.href = '../../view-cart/public/index.html';
    });

    // Update cart count in the header
    function updateCartCount() {
        const cart = getCart();
        const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = cartCount;
    }

    // Placeholder price calculation (replace with actual logic)
    function calculatePrice(config, product) {
        const basePrices = {
            'terlingua': 199.99,
            'two-hole-pony': 179.99,
            'two-hole-cheval': 179.99,
            'two-hole-canine': 169.99,
            'deer': 159.99,
            'dragon': 189.99,
            'one-hole-canine': 149.99
        };
        let price = basePrices[product] || 149.99;
        if (config.marblingColor !== 'none') price += 20.00;
        if (config.fur !== 'none') price += 15.00;
        if (config.fullFace !== 'none') price += 25.00;
        if (config.bovineSpot !== 'none') price += 20.00;
        if (config.analRing !== 'none') price += 10.00;
        return price;
    }

    function updateOptionAvailability() {
        if (!['two-hole-pony', 'two-hole-cheval'].includes(selectedProduct)) {
            return { disabledOptions: [], message: '' };
        }

        const disabledOptions = [];
        let message = '';

        if (currentConfig.fullFace !== 'none') {
            disabledOptions.push('bovineSpot', 'analRing');
            message = 'Not available with full face';
        } else if (currentConfig.bovineSpot !== 'none') {
            disabledOptions.push('fullFace');
            message = 'Not available with bovine spot';
        } else if (currentConfig.analRing !== 'none') {
            disabledOptions.push('fullFace');
            message = 'Not available with anal ring';
        }

        return { disabledOptions, message };
    }

    function renderCustomization() {
    if (!selectedProduct || !products[selectedProduct]) {
        return;
    }
    const product = products[selectedProduct];

    requiredOptions.innerHTML = '<h3>Required Options</h3>';
    Object.entries(product.required).forEach(([key, values]) => {
        const div = document.createElement('div');
        div.className = `option-group${key === activeOption ? ' selected' : ''}`;
        let displayLabel = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        
        // Customize label text for insert options
        if (key === 'vaginalInsert' && currentConfig[key]) {
            displayLabel = `VAGINAL INSERT: ${currentConfig[key].charAt(0).toUpperCase() + currentConfig[key].slice(1)}`.toUpperCase();
        } else if (key === 'analInsert' && currentConfig[key]) {
            displayLabel = `ANAL INSERT: ${currentConfig[key].charAt(0).toUpperCase() + currentConfig[key].slice(1)}`.toUpperCase();
        } else if (key === 'cervixDepth' && currentConfig[key]) {
            displayLabel = `CERVIX DEPTH: ${currentConfig[key]} INCHES`.toUpperCase();
        }

        // Create label container
        const label = document.createElement('label');
        label.textContent = displayLabel;
        label.dataset.option = key; // For click handling
        label.classList.toggle('active', key === activeColorOption && ['bodyColor', 'marblingColor', 'analRing', 'fur', 'fullFace', 'bovineSpot', 'vulvaAnalTeat', 'vulvaAnalHighlight', 'vulvaHighlight', 'internalClitoralHood', 'internalClitoral', 'internals'].includes(key)); // Active for color options
        div.appendChild(label);

        if (key === 'bodyColor') {
            const selectionBox = document.createElement('div');
            selectionBox.className = 'selection-box';
            selectionBox.classList.toggle('active', key === activeColorOption);
            selectionBox.style.backgroundColor = colorValues[currentConfig[key]] || colorValues['none'];
            selectionBox.dataset.option = key;
            selectionBox.dataset.value = currentConfig[key];
            selectionBox.dataset.previousColor = previousColors[key] || currentConfig[key];

            selectionBox.addEventListener('click', () => handleSelectionBoxClick(key));
            div.appendChild(selectionBox);

            const conflictIndicator = document.createElement('span');
            conflictIndicator.className = 'conflict-indicator';
            conflictIndicator.textContent = '!';
            conflictIndicator.style.display = 'none';
            div.appendChild(conflictIndicator);

            // Make label clickable
            label.addEventListener('click', () => handleSelectionBoxClick(key));
        } else {
            const select = document.createElement('select');
            values.forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize
                option.selected = value === currentConfig[key];
                select.appendChild(option);
            });
            select.addEventListener('change', (e) => {
                currentConfig[key] = e.target.value;
                updateSvgDisplay();
                updatePreview();
                // Update label text on change
                const newLabel = key === 'vaginalInsert' ? `VAGINAL INSERT: ${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`.toUpperCase() :
                                key === 'analInsert' ? `ANAL INSERT: ${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`.toUpperCase() :
                                key === 'cervixDepth' ? `CERVIX DEPTH: ${e.target.value} INCHES`.toUpperCase() :
                                key.replace(/([A-Z])/g, ' $1').toUpperCase();
                label.textContent = newLabel;
            });
            div.appendChild(select);
            // Make label clickable for non-color options
            label.addEventListener('click', () => handleSelectionBoxClick(key));
        }
        requiredOptions.appendChild(div);
    });

    optionalOptions.innerHTML = '<h3>Optional Options</h3>';
    const { disabledOptions } = updateOptionAvailability();

    Object.entries(product.optional).forEach(([key, values]) => {
        const div = document.createElement('div');
        div.className = `option-group${disabledOptions.includes(key) ? ' disabled' : ''}${key === activeOption ? ' selected' : ''}`;
        let displayLabel = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        if (key === 'internalClitoralHood') {
            displayLabel = 'INTERNAL CLITORAL HOOD';
        } else if (key === 'internals') {
            displayLabel = selectedProduct === 'one-hole-canine' ? 'INTERNAL' : 'INTERNAL CLITORAL';
        } else if (key === 'internalClitoral') {
            displayLabel = 'INTERNAL CLITORAL';
        }

        // Create label container
        const label = document.createElement('label');
        label.textContent = displayLabel;
        label.dataset.option = key; // For click handling
        label.classList.toggle('active', key === activeColorOption && !disabledOptions.includes(key)); // Active for color options
        div.appendChild(label);

        const selectionBox = document.createElement('div');
        selectionBox.className = 'selection-box';
        selectionBox.classList.toggle('active', key === activeColorOption && !disabledOptions.includes(key));
        selectionBox.style.backgroundColor = colorValues[currentConfig[key]] || colorValues['none'];
        selectionBox.dataset.option = key;
        selectionBox.dataset.value = currentConfig[key];
        selectionBox.dataset.previousColor = previousColors[key] || currentConfig[key];

        if (!disabledOptions.includes(key)) {
            selectionBox.addEventListener('click', () => handleSelectionBoxClick(key));
            label.addEventListener('click', () => handleSelectionBoxClick(key)); // Make label clickable
        }
        div.appendChild(selectionBox);

        const conflictIndicator = document.createElement('span');
        conflictIndicator.className = 'conflict-indicator';
        conflictIndicator.textContent = '!';
        conflictIndicator.style.display = 'none';
        div.appendChild(conflictIndicator);

        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = 'This color can’t be selected because it matches the body color.';
        note.style.display = 'none';
        div.appendChild(note);

        optionalOptions.appendChild(div);
    });

    updateConflictIndicators();
    renderColorGrid();
}

    function handleSelectionBoxClick(key) {
    const { disabledOptions } = updateOptionAvailability();
    if (disabledOptions.includes(key)) {
        return;
    }

    activeOption = key;
    const isColorOption = ['bodyColor', 'marblingColor', 'analRing', 'fur', 'fullFace', 'bovineSpot', 'vulvaAnalTeat', 'vulvaAnalHighlight', 'vulvaHighlight', 'internalClitoralHood', 'internalClitoral', 'internals'].includes(key);
    if (isColorOption) {
        activeColorOption = key;
        const displayLabel = key.replace(/([A-Z])/g, ' $1').trim();
        const colorGridHeading = document.getElementById('color-grid-heading');
        if (colorGridHeading) {
            colorGridHeading.textContent = `Pick Your ${displayLabel} Color!`;
        }
        const colorGridMessage = document.getElementById('color-grid-message');
        if (colorGridMessage) {
            colorGridMessage.style.display = 'none';
        }

        // Show modal
        const modal = document.getElementById('color-modal');
        if (modal) {
            modal.classList.add('active');
            modal.style.display = 'flex';

            const optionsColumn = document.querySelector('.options-column');
            const modalContent = modal.querySelector('.modal-content');
            const colorGrid = document.getElementById('color-grid');
            if (optionsColumn && modalContent && colorGrid) {
                modalContent.style.position = 'relative';
                modalContent.style.margin = '10px auto';
                modalContent.style.width = '100%';
                modalContent.style.top = '0';
                modalContent.style.left = 'auto';
                colorGrid.style.width = '100%';
                colorGrid.style.margin = '0';
            }

            // Scroll to modal only on screens 768px or below
            if (window.innerWidth <= 1300) {
                // Calculate absolute position of modal-content
                const modalTop = modalContent.getBoundingClientRect().top + window.scrollY;
                const headerHeight = document.querySelector('header').offsetHeight || 60;
                const previewHeight = document.querySelector('.preview-column').offsetHeight || 250;
                const desiredTop = modalTop - headerHeight - previewHeight - -50; // 10px buffer
                window.scrollTo({ top: desiredTop, behavior: 'smooth' });
            }

            // Scroll to modal only on screens 768px or below
            if (window.innerWidth <= 768) {
                // Calculate absolute position of modal-content
                const modalTop = modalContent.getBoundingClientRect().top + window.scrollY;
                const headerHeight = document.querySelector('header').offsetHeight || 60;
                const previewHeight = document.querySelector('.preview-column').offsetHeight || 250;
                const desiredTop = modalTop - headerHeight - previewHeight - 10; // 10px buffer
                window.scrollTo({ top: desiredTop, behavior: 'smooth' });
            }

            renderColorGrid();
        } else {
            console.error('Color modal not found');
        }
    }

    // Update active and selected states
    document.querySelectorAll('.option-group').forEach(group => {
        group.classList.toggle('selected', group.querySelector('label').dataset.option === key);
    });
    document.querySelectorAll('.selection-box').forEach(box => {
        box.classList.toggle('active', box.dataset.option === key && isColorOption && !disabledOptions.includes(key));
    });
    document.querySelectorAll('label').forEach(label => {
        label.classList.toggle('active', label.dataset.option === key && isColorOption && !disabledOptions.includes(key));
    });

    // Switch view based on option
    const internalOptions = ['vaginalInsert', 'analInsert', 'cervixDepth'];
    if (internalOptions.includes(key) && currentView !== 'internals') {
        currentView = 'internals';
        viewInternalsBtn.classList.add('active');
        viewExteriorBtn.classList.remove('active');
        updateSvgDisplay();
        updatePreview();
    } else if (!internalOptions.includes(key) && currentView !== 'exterior') {
        currentView = 'exterior';
        viewExteriorBtn.classList.add('active');
        viewInternalsBtn.classList.remove('active');
        updateSvgDisplay();
        updatePreview();
    }
}

    function formatColorName(color) {
        if (color === 'none') return 'None';
        return color
            .replace(/([A-Z])/g, ' $1')
            .replace(/^ /, '')
            .trim();
    }

    function renderColorGrid() {
        colorGrid.innerHTML = '';
        const product = products[selectedProduct];
        let values = [];

        if (activeColorOption === 'bodyColor') {
            values = product.required.bodyColor;
        } else {
            values = product.optional[activeColorOption] || [];
        }

        let filteredValues = values;
        if (activeColorOption !== 'bodyColor') {
            filteredValues = ['none', ...values.filter(color => color !== 'none')];
        }
        if (activeColorOption === 'marblingColor') {
            filteredValues = filteredValues.filter(color => color !== currentConfig.bodyColor);
        }

        const metallicColors = filteredValues.filter(color => color.includes('Metallic'));
        const opaqueColors = filteredValues.filter(color =>
            ['FleshyPink', 'BubbleGumPink', 'MarshmallowPink'].includes(color)
        );
        const regularColors = filteredValues.filter(color =>
            !metallicColors.includes(color) && !opaqueColors.includes(color)
        );

        const selectionBox = document.querySelector(`.selection-box[data-option="${activeColorOption}"]`);
        const previousColor = previousColors[activeColorOption];
        const highlightColor = currentConfig[activeColorOption] === 'none' ? previousColor : currentConfig[activeColorOption];

        const { disabledOptions } = updateOptionAvailability();
        const isDisabled = disabledOptions.includes(activeColorOption);

        const renderColorGroup = (colors) => {
            colors.forEach(color => {
                const swatch = document.createElement('div');
                swatch.className = 'swatch';
                swatch.style.backgroundColor = colorValues[color];
                swatch.dataset.value = color;
                swatch.dataset.tooltip = formatColorName(color);
                swatch.classList.toggle('selected', color === highlightColor);
                if (!isDisabled) {
                    swatch.addEventListener('click', (event) => {
                        event.stopPropagation();
                        handleColorSelection(activeColorOption, color);
                    });
                }
                colorGrid.appendChild(swatch);
            });
        };

        const addSeparator = (text) => {
            const separator = document.createElement('div');
            separator.className = 'color-grid-separator';
            separator.style.gridColumn = '1 / -1';
            separator.style.textAlign = 'center';
            separator.style.fontWeight = 'bold';
            separator.style.margin = '10px 0';
            separator.textContent = text;
            colorGrid.appendChild(separator);
        };

        renderColorGroup(regularColors);
        if (metallicColors.length > 0) {
            addSeparator('Metallic Colors');
            renderColorGroup(metallicColors);
        }
        if (opaqueColors.length > 0 && ['internalClitoralHood', 'internalClitoral', 'internals'].includes(activeColorOption)) {
            addSeparator('Opaque Colors');
            renderColorGroup(opaqueColors);
        }

        const { message } = updateOptionAvailability();
        if (isDisabled && message) {
            colorGridMessage.textContent = message;
            colorGridMessage.style.display = 'block';
        } else if (currentConfig[activeColorOption] === 'none' && previousColor === currentConfig.bodyColor && currentConfig.marblingColor === 'none') {
            colorGridMessage.textContent = 'This color cannot be selected unless there is a marble.';
            colorGridMessage.style.display = 'block';
        } else {
            colorGridMessage.style.display = 'none';
        }
    }

    function handleColorSelection(key, color) {
        const { disabledOptions } = updateOptionAvailability();
        if (disabledOptions.includes(key)) {
            return;
        }

        const bodyColor = currentConfig.bodyColor;
        const isMarbling = currentConfig.marblingColor !== 'none';

        const previousValues = { ...currentConfig };
        previousColors[key] = color;
        currentConfig[key] = color;

        const specialFeatures = [
            'vulvaAnalTeat',
            'fullFace',
            'bovineSpot',
            'vulvaAnalHighlight'
        ];
        const hasSpecialFeature = specialFeatures.some(feat => currentConfig[feat] !== 'none');

        console.log(`Selecting ${key}: ${color}`);
        console.log(`hasSpecialFeature: ${hasSpecialFeature}, isMarbling: ${isMarbling}`);
        console.log(`Current Config Before:`, currentConfig);

        if (key !== 'bodyColor' &&
            color !== 'none' &&
            color === bodyColor &&
            !isMarbling &&
            !((key === 'internals' || key === 'internalClitoral' || key === 'internalClitoralHood') && hasSpecialFeature)) {
            console.log(`Resetting ${key} to 'none' because it matches bodyColor (${bodyColor}) and no marbling`);
            currentConfig[key] = 'none';
            const selectionBox = document.querySelector(`.selection-box[data-option="${key}"]`);
            if (selectionBox) {
                selectionBox.style.backgroundColor = colorValues['none'];
                selectionBox.dataset.value = 'none';
                selectionBox.dataset.previousColor = color;
            }
            colorGridMessage.textContent = 'This color cannot be selected unless there is a marble.';
            colorGridMessage.style.display = 'block';
        } else {
            const selectionBox = document.querySelector(`.selection-box[data-option="${key}"]`);
            if (selectionBox) {
                selectionBox.style.backgroundColor = colorValues[color];
                selectionBox.dataset.value = color;
                selectionBox.dataset.previousColor = color;
            }
            const { message } = updateOptionAvailability();
            if (disabledOptions.includes(activeColorOption) && message) {
                colorGridMessage.textContent = message;
                colorGridMessage.style.display = 'block';
            } else {
                colorGridMessage.style.display = 'none';
            }
        }

        colorGrid.querySelectorAll('.swatch').forEach(s => {
            s.classList.toggle('selected', s.dataset.value === color);
        });

        console.log("Checking for restoration...");
        Object.keys(products[selectedProduct].optional).forEach(optKey => {
            if (currentConfig[optKey] === 'none' &&
                previousColors[optKey] !== 'none') {
                const canKeepColor = (optKey === 'internals' || optKey === 'internalClitoral' || optKey === 'internalClitoralHood') && hasSpecialFeature;
                if (canKeepColor ||
                    previousColors[optKey] !== currentConfig.bodyColor ||
                    currentConfig.marblingColor !== 'none') {
                    console.log(`Restoring ${optKey} to ${previousColors[optKey]}`);
                    currentConfig[optKey] = previousColors[optKey];
                    const optSelectionBox = document.querySelector(`.selection-box[data-option="${optKey}"]`);
                    if (optSelectionBox) {
                        optSelectionBox.style.backgroundColor = colorValues[previousColors[optKey]];
                        optSelectionBox.dataset.value = previousColors[optKey];
                    }
                }
            }
        });

        const featuresAllowingMatch = ['marblingColor', ...specialFeatures];
        if (featuresAllowingMatch.includes(key) && color === 'none') {
            const internalKeys = ['internals', 'internalClitoral', 'internalClitoralHood'];
            const anyFeatureActive = featuresAllowingMatch.some(feat => currentConfig[feat] !== 'none');
            internalKeys.forEach(intKey => {
                if (currentConfig[intKey] === bodyColor && !anyFeatureActive) {
                    console.log(`Resetting ${intKey} to 'none' because feature ${key} was deselected and no conditions allow matching body color`);
                    currentConfig[intKey] = 'none';
                    const intSelectionBox = document.querySelector(`.selection-box[data-option="${intKey}"]`);
                    if (intSelectionBox) {
                        intSelectionBox.style.backgroundColor = colorValues['none'];
                        intSelectionBox.dataset.value = 'none';
                        intSelectionBox.dataset.previousColor = previousColors[intKey];
                    }
                }
            });
        }

        console.log(`Current Config After:`, currentConfig);

        if (key === 'bodyColor') {
            const oldBodyColor = previousValues.bodyColor;
            const wasMarbling = previousValues.marblingColor !== 'none';
            if (color === currentConfig.marblingColor) {
                currentConfig.marblingColor = 'none';
                const marblingSelectionBox = document.querySelector(`.selection-box[data-option="marblingColor"]`);
                if (marblingSelectionBox) {
                    marblingSelectionBox.style.backgroundColor = colorValues['none'];
                    marblingSelectionBox.dataset.value = 'none';
                    marblingSelectionBox.dataset.previousColor = color;
                }
            }
            updatePreview();
            if (!wasMarbling || currentConfig.marblingColor === 'none') {
                resetOptionalColorsToNone(products[selectedProduct], previousValues);
            }
            renderCustomization();
        } else if (key === 'marblingColor' && color === 'none') {
            resetOptionalColorsToNone(products[selectedProduct], previousValues);
            renderCustomization();
            updatePreview();
        } else {
            updatePreview();
            if (['fullFace', 'bovineSpot', 'analRing'].includes(key)) {
                renderCustomization();
            }
        }

        updateConflictIndicators();
    }

    function resetOptionalColorsToNone(product, previousValues) {
        const hasSpecialFeature = currentConfig.vulvaAnalTeat !== 'none' ||
                                currentConfig.fullFace !== 'none' ||
                                currentConfig.bovineSpot !== 'none' ||
                                currentConfig.vulvaAnalHighlight !== 'none';

        console.log("Running resetOptionalColorsToNone...");
        console.log(`hasSpecialFeature: ${hasSpecialFeature}`);

        Object.keys(product.optional).forEach(optKey => {
            const canKeepColor = (optKey === 'internals' || optKey === 'internalClitoral' || optKey === 'internalClitoralHood') && hasSpecialFeature;
            if (optKey !== 'marblingColor' &&
                currentConfig[optKey] === currentConfig.bodyColor &&
                !canKeepColor &&
                currentConfig.marblingColor === 'none') {
                console.log(`Resetting ${optKey} to 'none' in resetOptionalColorsToNone`);
                previousColors[optKey] = currentConfig[optKey];
                currentConfig[optKey] = 'none';
                const selectionBox = document.querySelector(`.selection-box[data-option="${optKey}"]`);
                if (selectionBox) {
                    selectionBox.style.backgroundColor = colorValues['none'];
                    selectionBox.dataset.value = 'none';
                    selectionBox.dataset.previousColor = previousColors[optKey];
                }
            }
        });
        updatePreview();
    }

    function updateConflictIndicators() {
        const selectionBoxes = document.querySelectorAll('.selection-box');
        selectionBoxes.forEach(selectionBox => {
            const option = selectionBox.dataset.option;
            const optionGroup = selectionBox.closest('.option-group');
            const conflictIndicator = optionGroup.querySelector('.conflict-indicator');
            const previousColor = selectionBox.dataset.previousColor;

            if (
                currentConfig[option] === 'none' &&
                previousColor &&
                previousColor !== 'none' &&
                (
                    (option === 'marblingColor' && previousColor === currentConfig.bodyColor) ||
                    (option !== 'bodyColor' &&
                     previousColor === currentConfig.bodyColor &&
                     currentConfig.marblingColor === 'none')
                )
            ) {
                conflictIndicator.style.display = 'inline';
            } else {
                conflictIndicator.style.display = 'none';
            }
        });
    }

    function updateSvgColor(svgObject, color) {
    if (!svgObject) {
        console.warn(`SVG object is null or undefined`);
        return false;
    }
    if (!svgObject.contentDocument) {
        console.warn(`SVG contentDocument not available for ${svgObject.id || 'unknown ID'}. May load later.`);
        return false;
    }

    const svgDoc = svgObject.contentDocument;
    const colorValue = colorValues[color] || 'transparent';
    console.log(`Updating ${svgObject.id} with color: ${colorValue}`);

    const isSvgWithGradient = [
        'preview-internal-insert-vaginal',
        'preview-internal-insert-anal',
        'preview-internals',
        'preview-internal-full-face',
        'preview-tail',
        'preview-anal-ring'
    ].includes(svgObject.id) && svgDoc.querySelector('linearGradient, radialGradient');

    try {
        if (isSvgWithGradient) {
            const isInternalSvg = [
                'preview-internal-insert-vaginal',
                'preview-internal-insert-anal',
                'preview-internals',
                'preview-internal-full-face'
            ].includes(svgObject.id);

            const gradients = svgDoc.querySelectorAll('linearGradient, radialGradient');
            if (gradients.length === 0) {
                console.warn(`No gradients found in ${svgObject.id}`);
            }
            gradients.forEach(gradient => {
                const stops = gradient.querySelectorAll('stop');
                if (stops.length > 0) {
                    stops.forEach((stop, index) => {
                        let targetOpacity = isInternalSvg ? (index === 0 ? '0' : '1') :
                            (stop.getAttribute('stop-opacity') || (index === 0 ? '1' : '0'));
                        stop.setAttribute('stop-color', colorValue);
                        stop.style.stopColor = colorValue;
                        stop.setAttribute('stop-opacity', targetOpacity);
                        stop.style.stopOpacity = targetOpacity;
                    });
                } else {
                    const refId = gradient.getAttribute('xlink:href');
                    if (refId) {
                        const refGradient = svgDoc.querySelector(refId);
                        if (refGradient) {
                            const refStops = refGradient.querySelectorAll('stop');
                            refStops.forEach((stop, index) => {
                                let targetOpacity = isInternalSvg ? (index === 0 ? '0' : '1') :
                                    (stop.getAttribute('stop-opacity') || (index === 0 ? '1' : '0'));
                                stop.setAttribute('stop-color', colorValue);
                                stop.style.stopColor = colorValue;
                                stop.setAttribute('stop-opacity', targetOpacity);
                                stop.style.stopOpacity = targetOpacity;
                            });
                        }
                    }
                }
            });

            // Force redraw
            svgObject.style.display = 'none';
            svgObject.offsetHeight;
            svgObject.style.display = '';
        } else {
            const elements = svgDoc.querySelectorAll('path, g, rect, circle, polygon');
            elements.forEach(element => {
                element.setAttribute('fill', colorValue);
                element.style.fill = colorValue;
            });
        }
        return true;
    } catch (e) {
        console.error(`Error updating SVG ${svgObject.id}:`, e);
        return false;
    }
}

    function updateSvgDisplay() {
    const externalSvgBasePath = '../../src/assets/images/external-view/';
    const internalSvgBasePath = '../../src/assets/images/internal-view/';

    const exteriorSvgs = [previewBody, previewMarbling, previewVah, previewVh, previewVat, previewBovineSpot, previewFur, previewTail, previewFullFace, previewAnalRing, previewInternals, previewOutline];
    const internalSvgs = [previewInternalBody, previewInternalFullFace, previewInternalMarbling, previewInternalInsertVaginal, previewInternalInsertAnal, previewVat, previewInternals, previewInternalAnalOutline, previewOutline];

    console.log('Updating SVG display for view:', currentView, 'product:', selectedProduct);

    // Reset SVG data
        exteriorSvgs.concat(internalSvgs).forEach(svg => {
            if (svg) {
                svg.data = '';
                console.log(`Reset data for ${svg.id}`);
            }
        });

        // Set SVG data based on view
        if (currentView === 'exterior') {
            if (previewBody) {
                previewBody.data = `${externalSvgBasePath}${selectedProduct}-body.svg`;
                console.log(`Set ${previewBody.id}.data = ${previewBody.data}`);
            }
            if (previewMarbling) {
                previewMarbling.data = `${externalSvgBasePath}${selectedProduct}-marble.svg`;
                console.log(`Set ${previewMarbling.id}.data = ${previewMarbling.data}`);
            }
            if (previewOutline) {
                previewOutline.data = `${externalSvgBasePath}${selectedProduct}-outline.svg`;
                console.log(`Set ${previewOutline.id}.data = ${previewOutline.data}`);
            }

            if (selectedProduct === 'terlingua') {
                if (previewFur) previewFur.data = `${externalSvgBasePath}${selectedProduct}-fur.svg`;
                if (previewAnalRing) previewAnalRing.data = `${externalSvgBasePath}${selectedProduct}-anal-ring.svg`;
                if (previewInternals) previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
            } else if (selectedProduct === 'two-hole-pony' || selectedProduct === 'two-hole-cheval') {
                if (previewFullFace) previewFullFace.data = `${externalSvgBasePath}${selectedProduct}-full-face.svg`;
                if (previewBovineSpot) previewBovineSpot.data = `${externalSvgBasePath}${selectedProduct}-bovine-spot.svg`;
                if (previewAnalRing) previewAnalRing.data = `${externalSvgBasePath}${selectedProduct}-anal-ring.svg`;
                if (previewInternals) previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
            } else if (selectedProduct === 'two-hole-canine') {
                if (previewVat) previewVat.data = `${externalSvgBasePath}${selectedProduct}-vat.svg`;
                if (previewFur) previewFur.data = `${externalSvgBasePath}${selectedProduct}-fur.svg`;
                if (previewInternals) previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
            } else if (selectedProduct === 'deer') {
                if (previewVah) previewVah.data = `${externalSvgBasePath}${selectedProduct}-vah.svg`;
                if (previewFur) previewFur.data = `${externalSvgBasePath}${selectedProduct}-fur.svg`;
                if (previewTail) previewTail.data = `${externalSvgBasePath}${selectedProduct}-tail.svg`;
                if (previewInternals) previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
            } else if (selectedProduct === 'dragon') {
                if (previewVh) previewVh.data = `${externalSvgBasePath}${selectedProduct}-vh.svg`;
                if (previewAnalRing) previewAnalRing.data = `${externalSvgBasePath}${selectedProduct}-anal-ring.svg`;
                if (previewInternals) previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
            } else if (selectedProduct === 'one-hole-canine') {
                if (previewFur) {
                    previewFur.data = `${externalSvgBasePath}${selectedProduct}-fur.svg`;
                    console.log(`Set ${previewFur.id}.data = ${previewFur.data}`);
                }
                if (previewAnalRing) {
                    previewAnalRing.data = `${externalSvgBasePath}${selectedProduct}-anal-ring.svg`;
                    console.log(`Set ${previewAnalRing.id}.data = ${previewAnalRing.data}`);
                }
                if (previewInternals) {
                    previewInternals.data = `${externalSvgBasePath}${selectedProduct}-internals.svg`;
                    console.log(`Set ${previewInternals.id}.data = ${previewInternals.data}`);
                }
            }
        } else {
            if (previewInternalBody) {
                previewInternalBody.data = `${internalSvgBasePath}${selectedProduct}-body.svg`;
                console.log(`Set ${previewInternalBody.id}.data = ${previewInternalBody.data}`);
            }
            if (previewInternalMarbling) {
                previewInternalMarbling.data = `${internalSvgBasePath}${selectedProduct}-marble.svg`;
                console.log(`Set ${previewInternalMarbling.id}.data = ${previewInternalMarbling.data}`);
            }
            if (previewOutline) {
                previewOutline.data = `${internalSvgBasePath}${selectedProduct}-body-outline.svg`;
                console.log(`Set ${previewOutline.id}.data = ${previewOutline.data}`);
            }

            if (selectedProduct === 'two-hole-pony' || selectedProduct === 'two-hole-cheval') {
                if (previewInternalFullFace) {
                    previewInternalFullFace.data = `${internalSvgBasePath}${selectedProduct}-full-face.svg`;
                }
            }

            if (selectedProduct === 'deer' || selectedProduct === 'dragon') {
                if (previewInternalInsertVaginal && currentConfig.vaginalInsert) {
                    previewInternalInsertVaginal.data = `${internalSvgBasePath}${selectedProduct}-medium-v.svg`;
                }
            } else if (selectedProduct === 'one-hole-canine') {
                const analSize = currentConfig.analInsert;
                if (previewInternalInsertAnal && analSize) {
                    let analSvg = `${selectedProduct}-${analSize === 'large-ribbed' ? 'large' : analSize}-a`;
                    previewInternalInsertAnal.data = `${internalSvgBasePath}${analSvg}.svg`;
                    console.log(`Set ${previewInternalInsertAnal.id}.data = ${previewInternalInsertAnal.data}`);
                    if (previewInternalAnalOutline) {
                        previewInternalAnalOutline.data = `${internalSvgBasePath}${analSvg}-outline.svg`;
                        console.log(`Set ${previewInternalAnalOutline.id}.data = ${previewInternalAnalOutline.data}`);
                    }
                }
            } else {
                const vaginalSize = currentConfig.vaginalInsert;
                if (previewInternalInsertVaginal && vaginalSize) {
                    let vaginalSvg = selectedProduct === 'terlingua'
                        ? `${selectedProduct}-${vaginalSize === 'large-ribbed' ? 'large' : vaginalSize}-${currentConfig.cervixDepth}-v`
                        : `${selectedProduct}-${vaginalSize === 'large-ribbed' ? 'large' : vaginalSize}-v`;
                    previewInternalInsertVaginal.data = `${internalSvgBasePath}${vaginalSvg}.svg`;
                    if (previewInternals) previewInternals.data = `${internalSvgBasePath}${vaginalSvg}-outline.svg`;
                }
                const analSize = currentConfig.analInsert;
                if (previewInternalInsertAnal && analSize) {
                    let analSvg = `${selectedProduct}-${analSize === 'large-ribbed' ? 'large' : analSize}-a`;
                    previewInternalInsertAnal.data = `${internalSvgBasePath}${analSvg}.svg`;
                    if (previewInternalAnalOutline) previewInternalAnalOutline.data = `${internalSvgBasePath}${analSvg}-outline.svg`;
                }
                if (selectedProduct === 'terlingua' && previewVat) {
                    previewVat.data = `${internalSvgBasePath}${selectedProduct}-hood.svg`;
                } else if (selectedProduct === 'two-hole-canine' && previewVat) {
                    previewVat.data = `${internalSvgBasePath}${selectedProduct}-teat.svg`;
                }
            }

            if (currentView === 'internals' && (selectedProduct === 'terlingua' || selectedProduct === 'two-hole-canine') && previewVat && previewInternalInsertAnal) {
                const previewImages = document.getElementById('preview-images');
                previewImages.removeChild(previewVat);
                previewImages.insertBefore(previewVat, previewInternals);
            }
        }

        const visibleSvgs = currentView === 'exterior' ? exteriorSvgs : internalSvgs;
        const svgsToLoad = visibleSvgs.filter(svg => svg && svg.data && svg.data.trim() !== '');
        let hasError = false;
        let loadedCount = 0;

        if (svgsToLoad.length === 0) {
            svgError.style.display = 'block';
            previewText.textContent = 'No SVGs to display.';
            console.error('No SVGs to load for view:', currentView);
            return;
        }

        svgsToLoad.forEach(svg => {
    console.log(`Attaching load listener for ${svg.id}: ${svg.data}`);
    svg.addEventListener('load', () => {
        console.log(`Successfully loaded SVG: ${svg.id} (${svg.data})`);
        applyColorsToSvgs();
        loadedCount++;
        if (loadedCount === svgsToLoad.length) {
            svgError.style.display = 'none';
            updatePreviewText();
            console.log('All SVGs loaded successfully');
        }
    }, { once: true });
});
    }

    function applyColorsToSvgs() {
        let internalColor = selectedProduct === 'terlingua' ? currentConfig.internalClitoralHood :
                           ['two-hole-pony', 'two-hole-cheval', 'two-hole-canine', 'deer', 'dragon'].includes(selectedProduct) ? currentConfig.internalClitoral :
                           selectedProduct === 'one-hole-canine' ? currentConfig.internals : 'none';

        console.log('Applying SVG colors:', {
            bodyColor: currentConfig.bodyColor,
            marblingColor: currentConfig.marblingColor,
            analRing: currentConfig.analRing,
            fur: currentConfig.fur,
            internalColor
        });

        if (currentView === 'exterior') {
            if (previewBody) {
                updateSvgColor(previewBody, currentConfig.bodyColor);
                console.log(`Applied color ${currentConfig.bodyColor} to ${previewBody.id}`);
            }
            if (previewMarbling) {
                updateSvgColor(previewMarbling, currentConfig.marblingColor === 'none' ? 'transparent' : currentConfig.marblingColor);
                console.log(`Applied color ${currentConfig.marblingColor === 'none' ? 'transparent' : currentConfig.marblingColor} to ${previewMarbling.id}`);
            }
            if (selectedProduct === 'deer' && previewVah) updateSvgColor(previewVah, currentConfig.vulvaAnalHighlight === 'none' ? 'transparent' : currentConfig.vulvaAnalHighlight);
            if (selectedProduct === 'deer' && previewTail)
                updateSvgColor(previewTail, currentConfig.fur === 'none' ? 'transparent' : currentConfig.fur);
            if (selectedProduct === 'dragon' && previewVh) updateSvgColor(previewVh, currentConfig.vulvaHighlight === 'none' ? 'transparent' : currentConfig.vulvaHighlight);
            if (selectedProduct === 'two-hole-canine' && previewVat) updateSvgColor(previewVat, currentConfig.vulvaAnalTeat === 'none' ? 'transparent' : currentConfig.vulvaAnalTeat);
            if ((selectedProduct === 'two-hole-pony' || selectedProduct === 'two-hole-cheval') && previewBovineSpot)
                updateSvgColor(previewBovineSpot, currentConfig.bovineSpot === 'none' ? 'transparent' : currentConfig.bovineSpot);
            if ((selectedProduct === 'two-hole-pony' || selectedProduct === 'two-hole-cheval') && previewFullFace)
                updateSvgColor(previewFullFace, currentConfig.fullFace === 'none' ? 'transparent' : currentConfig.fullFace);
            if (['terlingua', 'two-hole-pony', 'two-hole-cheval', 'dragon', 'one-hole-canine'].includes(selectedProduct) && previewAnalRing) {
                updateSvgColor(previewAnalRing, currentConfig.analRing === 'none' ? 'transparent' : currentConfig.analRing);
                console.log(`Applied color ${currentConfig.analRing === 'none' ? 'transparent' : currentConfig.analRing} to ${previewAnalRing.id}`);
            }
            if (['terlingua', 'two-hole-pony', 'two-hole-cheval', 'two-hole-canine', 'deer', 'dragon', 'one-hole-canine'].includes(selectedProduct) && previewInternals) {
                updateSvgColor(previewInternals, internalColor === 'none' ? 'transparent' : internalColor);
                console.log(`Applied color ${internalColor === 'none' ? 'transparent' : internalColor} to ${previewInternals.id}`);
            }
            if (['terlingua', 'two-hole-canine', 'deer', 'one-hole-canine'].includes(selectedProduct) && previewFur) {
                updateSvgColor(previewFur, currentConfig.fur === 'none' ? 'transparent' : currentConfig.fur);
                console.log(`Applied color ${currentConfig.fur === 'none' ? 'transparent' : currentConfig.fur} to ${previewFur.id}`);
            }
        } else {
            if (previewInternalBody) {
                updateSvgColor(previewInternalBody, currentConfig.bodyColor);
                console.log(`Applied color ${currentConfig.bodyColor} to ${previewInternalBody.id}`);
            }
            if ((selectedProduct === 'two-hole-pony' || selectedProduct === 'two-hole-cheval') && previewInternalFullFace) {
                updateSvgColor(previewInternalFullFace, currentConfig.fullFace === 'none' ? 'transparent' : currentConfig.fullFace);
            }
            if (previewInternalMarbling) {
                updateSvgColor(previewInternalMarbling, currentConfig.marblingColor === 'none' ? 'transparent' : currentConfig.marblingColor);
                console.log(`Applied color ${currentConfig.marblingColor === 'none' ? 'transparent' : currentConfig.marblingColor} to ${previewInternalMarbling.id}`);
            }
            if (previewInternalInsertVaginal && currentConfig.vaginalInsert)
                updateSvgColor(previewInternalInsertVaginal, internalColor === 'none' ? 'transparent' : internalColor);
            if (previewInternalInsertAnal && currentConfig.analInsert) {
                updateSvgColor(previewInternalInsertAnal, internalColor === 'none' ? 'transparent' : internalColor);
                console.log(`Applied color ${internalColor === 'none' ? 'transparent' : internalColor} to ${previewInternalInsertAnal.id}`);
            }
            if (selectedProduct === 'terlingua' && previewVat) {
                console.log(`Applying internalClitoralHood color ${currentConfig.internalClitoralHood} (${colorValues[currentConfig.internalClitoralHood]}) to terlingua-hood.svg`);
                updateSvgColor(previewVat, currentConfig.internalClitoralHood === 'none' ? 'transparent' : currentConfig.internalClitoralHood);
            } else if (selectedProduct === 'two-hole-canine' && previewVat) {
                console.log(`Applying vulvaAnalTeat color ${currentConfig.vulvaAnalTeat} (${colorValues[currentConfig.vulvaAnalTeat]}) to two-hole-canine-teat.svg`);
                updateSvgColor(previewVat, currentConfig.vulvaAnalTeat === 'none' ? 'transparent' : currentConfig.vulvaAnalTeat);
            }
        }
    }

    function updatePreviewText() {
        let text = '';
        Object.entries(currentConfig).forEach(([key, value]) => {
            if (value && value !== 'none') {
                let displayKey = key.replace(/([A-Z])/g, ' $1').toUpperCase();
                if (key === 'internalClitoralHood') displayKey = 'INTERNAL CLITORAL HOOD';
                else if (key === 'internals') displayKey = selectedProduct === 'one-hole-canine' ? 'INTERNAL' : 'INTERNAL CLITORAL';
                else if (key === 'internalClitoral') displayKey = 'INTERNAL CLITORAL';
                else if (key === 'vaginalInsert') displayKey = 'VAGINAL INSERT SIZE';
                else if (key === 'analInsert') displayKey = 'ANAL INSERT SIZE';
                const displayValue = ['bodyColor', 'marblingColor', 'analRing', 'fur', 'fullFace', 'bovineSpot', 'vulvaAnalTeat', 'vulvaAnalHighlight', 'vulvaHighlight', 'internalClitoralHood', 'internalClitoral', 'internals'].includes(key)
                    ? formatColorName(value).toUpperCase()
                    : value.toUpperCase();
                text += `${displayKey}: ${displayValue}\n`;
            }
        });
        previewText.textContent = text.trim();
    }

    function updatePreview() {
        updatePreviewText();
        applyColorsToSvgs();
    }
});