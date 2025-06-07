// Cart management functions - Updated to handle multiple item types

// Legacy function - still works for backward compatibility
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

// New function for custom products (from custom order page, gallery)
function addCustomItemToCart(productConfig) {
    const item = {
        id: productConfig.id || generateUniqueId(),
        name: productConfig.name || `Custom ${productConfig.product.replace(/-/g, ' ').toUpperCase()}`,
        category: productConfig.category || 'custom', // 'custom', 'gallery'
        product: productConfig.product,
        options: productConfig.options || {},
        quantity: productConfig.quantity || 1
    };
    
    let cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    saveCart(cart);
}

// New function for order updates (from order tracker)
function addOrderUpdateToCart(updateConfig) {
    const item = {
        id: updateConfig.id || generateUniqueId(),
        name: updateConfig.name || `Updated ${updateConfig.product.replace(/-/g, ' ').toUpperCase()}`,
        category: 'order update',
        product: updateConfig.product,
        options: updateConfig.options || {}, // Complete final configuration
        changedOptions: updateConfig.changedOptions || {}, // Only the new additions
        quantity: updateConfig.quantity || 1,
        // Order information
        orderNumber: updateConfig.orderNumber,
        email: updateConfig.email,
        originalOptions: updateConfig.originalOptions || {} // Store original for reference
    };
    
    let cart = getCart();
    cart.push(item); // Order updates are always unique
    saveCart(cart);
}

// New function for regular products (ready to ship, dildos, accessories)
function addRegularItemToCart(itemData) {
    const item = {
        id: itemData.id || generateUniqueId(),
        name: itemData.name,
        category: itemData.category, // 'ready to ship', 'dildos', 'accessories'
        price: itemData.price,
        image: itemData.image,
        quantity: itemData.quantity || 1,
        options: itemData.options || null,
        description: itemData.description || null
    };
    
    let cart = getCart();
    const existingItem = cart.find(cartItem => 
        cartItem.id === item.id && cartItem.category === item.category
    );
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    saveCart(cart);
}

// Generate unique ID for cart items
function generateUniqueId() {
    return 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
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
        item.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    } else if (item && quantity <= 0) {
        // Remove item if quantity is 0 or negative
        removeFromCart(itemId);
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Updated pricing structure for custom products (matching your order tracker prices)
const customProductPricing = {
    basePrice: 89.00,
    options: {
        // Updated to match order tracker pricing
        marblingColor: 30.00,
        fullFace: 30.00,
        bovineSpot: 30.00,
        fur: 25.00,
        vulvaAnalTeat: 25.00,
        vulvaAnalHighlight: 25.00,
        vulvaHighlight: 25.00,
        internalClitoralHood: 20.00,
        internalClitoral: 20.00,
        internals: 20.00,
        analRing: 15.00
    }
};

function calculateCustomProductPrice(options) {
    let price = customProductPricing.basePrice;
    
    Object.entries(options || {}).forEach(([key, value]) => {
        if (value && value !== 'none' && customProductPricing.options[key]) {
            price += customProductPricing.options[key];
        }
    });
    
    return price;
}

// Calculate price for order updates (only charge for new additions)
function calculateOrderUpdatePrice(changedOptions) {
    let price = 0;
    
    Object.entries(changedOptions || {}).forEach(([key, value]) => {
        if (value && value !== 'none' && customProductPricing.options[key]) {
            price += customProductPricing.options[key];
        }
    });
    
    return price;
}

// Get total cart value
function getCartTotal() {
    const cart = getCart();
    let total = 0;
    
    cart.forEach(item => {
        switch (item.category) {
            case 'custom':
            case 'gallery':
                total += calculateCustomProductPrice(item.options) * item.quantity;
                break;
            case 'order update':
                total += calculateOrderUpdatePrice(item.changedOptions) * item.quantity;
                break;
            case 'ready to ship':
            case 'dildos':
            case 'accessories':
            default:
                total += (item.price || 0) * item.quantity;
                break;
        }
    });
    
    return total;
}

// Product options map for validation - use a different name to avoid conflicts
const cartProductOptionsMap = {
    'two-hole-pony': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internalClitoral',
        'analRing',
        'bovineSpot',
        'fullFace',
    ],
    'two-hole-cheval': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internalClitoral',
        'analRing',
        'bovineSpot',
        'fullFace',
    ],
    'two-hole-canine': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internalClitoral',
        'vulvaAnalTeat',
        'fur',
    ],
    'terlingua': [
        'bodyColor',
        'vaginalInsert',
        'cervixDepth',
        'analInsert',
        'marblingColor',
        'internalClitoralHood',
        'analRing',
        'fur',
    ],
    'deer': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internalClitoral',
        'vulvaAnalHighlight',
        'fur',
    ],
    'dragon': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internalClitoral',
        'vulvaHighlight',
        'analRing',
    ],
    'one-hole-canine': [
        'bodyColor',
        'vaginalInsert',
        'analInsert',
        'marblingColor',
        'internals',
        'analRing',
        'fur',
    ],
};

// Helper function to validate cart item structure
function validateCartItem(item) {
    if (!item.id || !item.category) {
        return false;
    }
    
    switch (item.category) {
        case 'custom':
        case 'gallery':
            return item.product && item.options;
        case 'order update':
            return item.product && item.options && item.changedOptions && item.orderNumber && item.email;
        case 'ready to ship':
        case 'dildos':
        case 'accessories':
            return item.name && typeof item.price === 'number';
        default:
            // Legacy item - just needs name and price
            return item.name;
    }
}

// Clean up invalid items from cart
function cleanupCart() {
    let cart = getCart();
    const validItems = cart.filter(validateCartItem);
    if (validItems.length !== cart.length) {
        console.log(`Removed ${cart.length - validItems.length} invalid items from cart`);
        saveCart(validItems);
    }
}

// Check what options would be affected by removing a specific option (keeping your existing logic)
function getAffectedOptions(product, optionToRemove, currentOptions) {
    const affectedOptions = [];
    const bodyColor = currentOptions.bodyColor;
    
    // Special features that allow internal colors to match body color
    const specialFeatures = [
        'vulvaAnalTeat',
        'fullFace', 
        'bovineSpot',
        'vulvaAnalHighlight',
        'vulvaHighlight'
    ];
    
    // Internal color options
    const internalOptions = ['internals', 'internalClitoral', 'internalClitoralHood'];
    
    // If removing marbling or a special feature
    if (optionToRemove === 'marblingColor' || specialFeatures.includes(optionToRemove)) {
        const hasMarbling = currentOptions.marblingColor && currentOptions.marblingColor !== 'none';
        const hasSpecialFeature = specialFeatures.some(feat => 
            currentOptions[feat] && currentOptions[feat] !== 'none' && feat !== optionToRemove
        );
        
        // If removing the last condition that allows internal colors to match body color
        if (!hasMarbling && !hasSpecialFeature) {
            internalOptions.forEach(intOption => {
                if (currentOptions[intOption] === bodyColor) {
                    affectedOptions.push(intOption);
                }
            });
        }
    }
    
    // Product-specific conflicts
    if (['two-hole-pony', 'two-hole-cheval'].includes(product)) {
        if (optionToRemove === 'fullFace') {
            // No additional conflicts when removing fullFace
        } else if (optionToRemove === 'bovineSpot') {
            // No additional conflicts when removing bovineSpot  
        } else if (optionToRemove === 'analRing') {
            // No additional conflicts when removing analRing
        }
    }
    
    return affectedOptions;
}

// Initialize cart count on page load and cleanup invalid items
document.addEventListener('DOMContentLoaded', () => {
    cleanupCart();
    updateCartCount();
});