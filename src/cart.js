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

// Pricing structure for custom products
const customProductPricing = {
    basePrice: 89.00,
    options: {
        marblingColor: 20.00,
        fur: 15.00,
        fullFace: 25.00,
        bovineSpot: 12.00,
        analRing: 10.00,
        vulvaAnalTeat: 8.00,
        vulvaAnalHighlight: 8.00,
        vulvaHighlight: 8.00,
        internalClitoralHood: 5.00,
        internalClitoral: 5.00,
        internals: 5.00
    }
};

function calculateCustomProductPrice(options) {
    let price = customProductPricing.basePrice;
    
    Object.entries(options).forEach(([key, value]) => {
        if (value && value !== 'none' && customProductPricing.options[key]) {
            price += customProductPricing.options[key];
        }
    });
    
    return price;
}

// Product options map for validation
const productOptionsMap = {
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

// Check what options would be affected by removing a specific option
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

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});