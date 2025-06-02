// Error handling utility
const ErrorHandler = {
  ErrorTypes: {
    NETWORK: 'network',
    DATA: 'data',
    RENDERING: 'rendering',
    FILTER: 'filter',
    UNKNOWN: 'unknown'
  },
  ErrorMessages: {
    network: 'Failed to connect to the server. Please check your internet connection.',
    data: 'Invalid or incomplete data received. Please try refreshing the page.',
    rendering: 'Error displaying the gallery items. Please try again later.',
    filter: 'There was a problem with the filters. Please reset and try again.',
    unknown: 'Something went wrong. Please try again or contact support.'
  },
  handleError: function(error, type = this.ErrorTypes.UNKNOWN, context = '') {
    console.error(`[${type.toUpperCase()}] ${context}:`, error);
    return this.ErrorMessages[type];
  },
  showError: function(message, elementId, isWarning = false) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = `
        <div class="error-container ${isWarning ? 'warning' : 'error'}">
          <div class="error-icon">${isWarning ? '⚠️' : '❌'}</div>
          <div class="error-message">${message}</div>
          ${!isWarning ? '<button class="retry-button">Try Again</button>' : ''}
        </div>
      `;
      if (!isWarning) {
        const retryButton = element.querySelector('.retry-button');
        if (retryButton) {
          retryButton.addEventListener('click', () => {
            window.location.reload();
          });
        }
      }
    }
  },
  handleFetchError: function(error, resourceName) {
    let errorType = this.ErrorTypes.NETWORK;
    let errorMessage = '';
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      errorMessage = `Failed to load ${resourceName}. Please check your connection.`;
    } else if (error.status === 404) {
      errorMessage = `The ${resourceName} resource could not be found.`;
    } else if (error.status >= 500) {
      errorMessage = `Server error while loading ${resourceName}. Please try again later.`;
    } else {
      errorType = this.ErrorTypes.UNKNOWN;
      errorMessage = `Error loading ${resourceName}: ${error.message}`;
    }
    return { type: errorType, message: errorMessage };
  }
};

// Cart storage
const Cart = {
  items: [],
  addItem: function(item) {
      this.items.push(item);
      console.log('Cart updated:', this.items);
      // Optionally, dispatch an event or update UI
  },
  getItems: function() {
      return this.items;
  }
};

// Enhanced fetch function with error handling
async function fetchWithErrorHandling(url, resourceName) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw {
        status: response.status,
        message: `HTTP error ${response.status}: ${response.statusText}`
      };
    }
    const data = await response.json();
    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw {
        status: 200,
        message: `Empty or invalid ${resourceName} data`
      };
    }
    return data;
  } catch (error) {
    const errorDetails = ErrorHandler.handleFetchError(error, resourceName);
    throw {
      type: errorDetails.type,
      message: errorDetails.message,
      originalError: error
    };
  }
}

// Validate data structure
function validateData(galleryItems, products) {
  if (!Array.isArray(galleryItems) || typeof products !== 'object') {
    return false;
  }
  const allowedInsertSizes = ['standard', 'medium', 'tight', 'large', 'large-ribbed'];
  const allowedCervixDepths = ['3', '5', '7'];
  for (const item of galleryItems) {
    if (
      (!item.image && (!item.images || !Array.isArray(item.images) || item.images.length === 0)) ||
      !item.product ||
      !item.options ||
      !item.createdAt
    ) {
      console.error('Invalid gallery item:', item);
      return false;
    }
    if (!products[item.product]) {
      console.error('Unknown product:', item.product);
      return false;
    }
    const productConfig = products[item.product];
    for (const [key, value] of Object.entries(item.options)) {
      if (!productConfig.required[key] && !productConfig.optional[key]) {
        console.error('Invalid option:', key, 'in product:', item.product);
        return false;
      }
      const allowedValues = productConfig.required[key] || productConfig.optional[key] || [];
      if (!allowedValues.includes(value)) {
        console.error('Invalid value:', value, 'for option:', key, 'in product:', item.product);
        return false;
      }
      if (key === 'insertSize' || key === 'vaginalInsert' || key === 'analInsert') {
        if (!allowedInsertSizes.some(allowed => allowed.toLowerCase() === value.toLowerCase())) {
          console.error('Invalid insertSize:', value, 'in product:', item.product);
          return false;
        }
      }
      if (key === 'cervixDepth') {
        if (!allowedCervixDepths.some(allowed => allowed.toLowerCase() === value.toLowerCase())) {
          console.error('Invalid cervixDepth:', value, 'in product:', item.product);
          return false;
        }
      }
    }
  }
  for (const [key, product] of Object.entries(products)) {
    if (!product.required || !product.optional) {
      console.error('Invalid product structure:', key, product);
      return false;
    }
    if (product.required.insertSize || product.required.vaginalInsert || product.required.analInsert) {
      const requiredSizes = [
        ...(product.required.insertSize || []),
        ...(product.required.vaginalInsert || []),
        ...(product.required.analInsert || [])
      ].filter(size => allowedInsertSizes.some(allowed => allowed.toLowerCase() === size.toLowerCase()));
      if (requiredSizes.length === 0 && (product.required.insertSize || product.required.vaginalInsert || product.required.analInsert)) {
        console.error('No valid insertSize values for product:', key);
        return false;
      }
    }
    if (product.optional.insertSize || product.optional.vaginalInsert || product.optional.analInsert) {
      const optionalSizes = [
        ...(product.optional.insertSize || []),
        ...(product.optional.vaginalInsert || []),
        ...(product.optional.analInsert || [])
      ].filter(size => allowedInsertSizes.some(allowed => allowed.toLowerCase() === size.toLowerCase()));
      if (optionalSizes.length === 0 && (product.optional.insertSize || product.optional.vaginalInsert || product.optional.analInsert)) {
        console.error('No valid insertSize values for product:', key);
        return false;
      }
    }
    if (product.required.cervixDepth) {
      const requiredDepths = product.required.cervixDepth.filter(depth =>
        allowedCervixDepths.some(allowed => allowed.toLowerCase() === depth.toLowerCase())
      );
      if (requiredDepths.length === 0) {
        console.error('No valid cervixDepth values for product:', key);
        return false;
      }
    }
    if (product.optional.cervixDepth) {
      const optionalDepths = product.optional.cervixDepth.filter(depth =>
        allowedCervixDepths.some(allowed => allowed.toLowerCase() === depth.toLowerCase())
      );
      if (optionalDepths.length === 0) {
        console.error('No valid cervixDepth values for product:', key);
        return false;
      }
    }
  }
  return true;
}

// Enhanced populate filters with error handling
function populateFilters(products, colorValues) {
  try {
    const colorFilter = document.getElementById('color-filter');
    const productTypeFilter = document.getElementById('product-type-filter');
    const optionTypeFilter = document.getElementById('option-type-filter');
    if (!colorFilter || !productTypeFilter || !optionTypeFilter) {
      throw new Error('Filter elements not found in the DOM');
    }

    // Colors from all attributes
    try {
      const colors = [...new Set(
        Object.values(products)
          .flatMap(p => [
            ...(p.required?.bodyColor || []),
            ...(p.optional?.marblingColor || []),
            ...(p.optional?.internalClitoral || []),
            ...(p.optional?.internalClitoralHood || []),
            ...(p.optional?.analRing || []),
            ...(p.optional?.fur || []),
            ...(p.optional?.fullFace || []),
            ...(p.optional?.bovineSpot || []),
            ...(p.optional?.vulvaAnalHighlight || []),
            ...(p.optional?.vulvaAnalTeat || []),
            ...(p.optional?.vulvaHighlight || []),
            ...(p.optional?.internals || [])
          ])
          .filter(c => c && c !== 'none' && c !== '5' && c !== 'medium' && c !== 'standard')
      )];
      const colorOptions = colorFilter.querySelector('.select-options');
      colorOptions.innerHTML = '';
      colors.forEach(color => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${color}">
          ${formatColorValue(color)}
        `;
        colorOptions.appendChild(label);
      });
    } catch (error) {
      console.error('Error populating color filter:', error);
    }

    // Product Types
    try {
      const productTypes = Object.keys(products);
      const productOptions = productTypeFilter.querySelector('.select-options');
      productOptions.innerHTML = '';
      productTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}">
          ${formatFilterKey(type)}
        `;
        productOptions.appendChild(label);
      });
    } catch (error) {
      console.error('Error populating product type filter:', error);
    }

    // Option Types
    try {
      const optionTypesRaw = [
        ...new Set(
          Object.values(products)
            .flatMap(p => [
              ...Object.keys(p.required || {}),
              ...Object.keys(p.optional || {})
            ])
            .filter(opt => opt !== 'insertSize' && opt !== 'cervixDepth' && opt !== 'analInsert' && opt !== 'vaginalInsert' && opt !== 'bodyColor')
        )
      ];
      const optionTypesWithValues = [...new Set(
        colorValues.galleryItems
          ? colorValues.galleryItems
              .flatMap(item =>
                Object.entries(item.options)
                  .filter(([key, value]) => value !== 'none')
                  .map(([key]) => key.toLowerCase().includes('internal') ? 'internals' : key)
              )
              .filter(opt => optionTypesRaw.includes(opt) || opt === 'internals')
          : optionTypesRaw.map(opt => opt.toLowerCase().includes('internal') ? 'internals' : opt)
      )];
      const optionTypeOptions = optionTypeFilter.querySelector('.select-options');
      optionTypeOptions.innerHTML = '';
      optionTypesWithValues.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}">
          ${formatFilterKey(type)}
        `;
        optionTypeOptions.appendChild(label);
      });
    } catch (error) {
      console.error('Error populating option type filter:', error);
    }

    // Set initial placeholder text to "Select" for all filters
    ['color-filter', 'product-type-filter', 'option-type-filter'].forEach(filterId => {
      const filter = document.getElementById(filterId);
      if (filter) {
        const display = filter.querySelector('.select-display');
        if (display) {
          display.textContent = 'Select';
        }
      }
    });
  } catch (error) {
    throw error;
  }
}

function updateOptionTypes(products, selectedProducts) {
  const optionTypeFilter = document.getElementById('option-type-filter');
  if (!optionTypeFilter) return;

  try {
    let optionTypes = [];
    if (selectedProducts.length === 0) {
      optionTypes = [...new Set(
        Object.values(products)
          .flatMap(p => [
            ...Object.keys(p.required || {}),
            ...Object.keys(p.optional || {})
          ])
          .filter(opt => opt !== 'insertSize' && opt !== 'cervixDepth' && opt !== 'analInsert' && opt !== 'vaginalInsert' && opt !== 'bodyColor')
      )];
    } else {
      optionTypes = [...new Set(
        selectedProducts
          .flatMap(product => {
            const p = products[product];
            return [
              ...Object.keys(p.required || {}),
              ...Object.keys(p.optional || {})
            ];
          })
          .filter(opt => opt !== 'insertSize' && opt !== 'cervixDepth' && opt !== 'analInsert' && opt !== 'vaginalInsert' && opt !== 'bodyColor')
      )];
    }

    optionTypes = [...new Set(
      optionTypes.map(opt => opt.toLowerCase().includes('internal') ? 'internals' : opt)
    )];

    const optionTypeOptions = optionTypeFilter.querySelector('.select-options');
    if (optionTypeOptions) {
      const selectedOptionTypes = Array.from(optionTypeOptions.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
      optionTypeOptions.innerHTML = '';
      optionTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}" ${selectedOptionTypes.includes(type) ? 'checked' : ''}>
          ${formatFilterKey(type)}
        `;
        optionTypeOptions.appendChild(label);
      });
    }
  } catch (error) {
    console.error('Error updating option type filter:', error);
  }
}

// Safe version of update gallery
function updateGallery(galleryItems, products, colorValues) {
  try {
    console.log('updateGallery called with items:', galleryItems.map(item => ({ product: item.product, createdAt: item.createdAt })));
    
    // Get filter elements
    const colorFilter = document.getElementById('color-filter');
    const productTypeFilter = document.getElementById('product-type-filter');
    const optionTypeFilter = document.getElementById('option-type-filter');
    const sort = document.getElementById('sort')?.value || 'newest';
    console.log('Sort value:', sort);

    // Get selected values from checkboxes
    const selectedColors = colorFilter
      ? Array.from(colorFilter.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
      : [];
    const selectedProductTypes = productTypeFilter
      ? Array.from(productTypeFilter.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
      : [];
    const selectedOptionTypes = optionTypeFilter
      ? Array.from(optionTypeFilter.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value)
      : [];

    // Update option types based on selected products
    try {
      updateOptionTypes(products, selectedProductTypes);
    } catch (error) {
      console.error('Error updating option types:', error);
    }

    // Filter items with validation
    let filteredItems = [];
    try {
      filteredItems = galleryItems.filter(item => {
        if (!item || !item.product || !item.options || (!item.image && (!item.images || !Array.isArray(item.images) || item.images.length === 0)) || !item.createdAt) {
          console.warn('Invalid gallery item:', item);
          return false;
        }

        // Product type filter (additive: match any selected product type)
        const matchesProductType = selectedProductTypes.length === 0 || selectedProductTypes.includes(item.product);

        // Color filter (subtractive: must match all selected colors)
        let matchesColor = true;
        if (selectedColors.length > 0) {
          if (selectedOptionTypes.length > 0) {
            matchesColor = selectedColors.every(color =>
              selectedOptionTypes.some(optionType => {
                if (optionType === 'internals') {
                  return ['internalClitoralHood', 'internals', 'internalClitoral'].some(key =>
                    item.options[key] && item.options[key] !== 'none' && item.options[key] === color
                  );
                }
                return item.options[optionType] && item.options[optionType] !== 'none' && item.options[optionType] === color;
              })
            );
          } else {
            matchesColor = selectedColors.every(color =>
              Object.entries(item.options).some(([key, value]) => value !== 'none' && value === color)
            );
          }
        }

        // Option type filter (subtractive: must have all selected option types with non-"none" values)
        const matchesOptionType = selectedOptionTypes.length === 0 ||
          selectedOptionTypes.every(optionType => {
            if (optionType === 'internals') {
              return ['internalClitoralHood', 'internals', 'internalClitoral'].some(key =>
                item.options.hasOwnProperty(key) && item.options[key] !== 'none'
              );
            }
            return item.options.hasOwnProperty(optionType) && item.options[optionType] !== 'none';
          });

        return matchesColor && matchesProductType && matchesOptionType;
      });
      console.log('Filtered items:', filteredItems.map(item => ({ product: item.product, createdAt: item.createdAt })));
    } catch (error) {
      console.error('Error filtering gallery items:', error);
      filteredItems = [...galleryItems]; // Fallback to all items on error
      ErrorHandler.showError('Filter error: Showing all items.', 'filter-warning', true);
    }

    // Sort items
    try {
      filteredItems.sort((a, b) => {
        try {
          const dateA = new Date(a.createdAt || 0);
          const dateB = new Date(b.createdAt || 0);
          console.log('Sorting:', { productA: a.product, dateA, productB: b.product, dateB });
          return sort === 'newest' ? dateB - dateA : dateA - dateB;
        } catch (error) {
          console.warn('Sorting error:', error, { itemA: a, itemB: b });
          return 0;
        }
      });
      console.log('Sorted items:', filteredItems.map(item => ({ product: item.product, createdAt: item.createdAt })));
    } catch (error) {
      console.error('Error sorting gallery items:', error);
    }

    // Update filter options
    try {
      updateFilterOptions(filteredItems, products, { selectedColors, selectedProductTypes, selectedOptionTypes });
    } catch (error) {
      console.error('Error updating filter options:', error);
      ErrorHandler.showError('Filter update error: Options may not display correctly.', 'filter-warning', true);
    }

       // Render gallery
    try {
      renderGallery(filteredItems);
    } catch (error) {
      ErrorHandler.showError(
        ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.RENDERING, 'Error rendering gallery'),
        'gallery-grid'
      );
    }
  } catch (error) {
    ErrorHandler.showError(
      ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.UNKNOWN, 'Error updating gallery'),
      'gallery-grid'
    );
  }
}

// Update filter options based on filtered items
function updateFilterOptions(filteredItems, products, selections) {
  const colorFilter = document.getElementById('color-filter');
  const productTypeFilter = document.getElementById('product-type-filter');
  const optionTypeFilter = document.getElementById('option-type-filter');

  // Update colors
  if (colorFilter) {
    const colorOptions = colorFilter.querySelector('.select-options');
    if (colorOptions) {
      const selectedColors = selections.selectedColors || [];
      const availableColors = [...new Set(
        filteredItems.length > 0
          ? filteredItems.flatMap(item => Object.values(item.options))
          : []
      )].filter(c => c !== 'none' && c !== '5' && c !== 'medium' && c !== 'standard');
      const allColors = [...new Set([...availableColors, ...selectedColors])];
      colorOptions.innerHTML = '';
      allColors.forEach(color => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${color}" ${selectedColors.includes(color) ? 'checked' : ''}>
          ${formatColorValue(color)}
        `;
        colorOptions.appendChild(label);
      });
    }
  }

  // Update product types
  if (productTypeFilter) {
    const productOptions = productTypeFilter.querySelector('.select-options');
    if (productOptions) {
      const selectedProductTypes = selections.selectedProductTypes || [];
      const availableProductTypes = [...new Set(
        filteredItems.length > 0
          ? filteredItems.map(item => item.product)
          : Object.keys(products)
      )];
      const allProductTypes = [...new Set([...availableProductTypes, ...selectedProductTypes])];
      productOptions.innerHTML = '';
      allProductTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}" ${selectedProductTypes.includes(type) ? 'checked' : ''}>
          ${formatFilterKey(type)}
        `;
        productOptions.appendChild(label);
      });
    }
  }

  // Update option types
  if (optionTypeFilter) {
    const optionTypeOptions = optionTypeFilter.querySelector('.select-options');
    if (optionTypeOptions) {
      const selectedOptionTypes = selections.selectedOptionTypes || [];
      const availableOptionTypesRaw = [...new Set(
        filteredItems.length > 0
          ? filteredItems.flatMap(item =>
              Object.entries(item.options)
                .filter(([key, value]) => value !== 'none')
                .map(([key]) => key)
            )
          : Object.values(products)
              .flatMap(p => [
                ...Object.keys(p.required || {}),
                ...Object.keys(p.optional || {})
              ])
      )].filter(opt => opt !== 'insertSize' && opt !== 'cervixDepth' && opt !== 'analInsert' && opt !== 'vaginalInsert' && opt !== 'bodyColor');
      const availableOptionTypes = [...new Set(
        availableOptionTypesRaw.map(opt => opt.toLowerCase().includes('internal') ? 'internals' : opt)
      )];


      const allOptionTypes = [...new Set([...availableOptionTypes, ...selectedOptionTypes])];
      optionTypeOptions.innerHTML = '';
      allOptionTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}" ${selectedOptionTypes.includes(type) ? 'checked' : ''}>
          ${formatFilterKey(type)}
        `;
        optionTypeOptions.appendChild(label);
      });
    }
  }

  // Update option types (consolidate internal* to internals, exclude others, only non-"none" values)
  if (optionTypeFilter) {
    const optionTypeOptions = optionTypeFilter.querySelector('.select-options');
    if (optionTypeOptions) {
      const selectedOptionTypes = selections.selectedOptionTypes || [];
      const availableOptionTypesRaw = [...new Set(
        filteredItems.length > 0
          ? filteredItems.flatMap(item =>
              Object.entries(item.options)
                .filter(([key, value]) => value !== 'none')
                .map(([key]) => key)
            )
          : Object.values(products)
              .flatMap(p => [
                ...Object.keys(p.required || {}),
                ...Object.keys(p.optional || {})
              ])
      )].filter(opt => opt !== 'insertSize' && opt !== 'cervixDepth' && opt !== 'analInsert' && opt !== 'vaginalInsert' && opt !== 'bodyColor');
      // Map internal* options to 'internals'
      const availableOptionTypes = [...new Set(
        availableOptionTypesRaw.map(opt => opt.toLowerCase().includes('internal') ? 'internals' : opt)
      )];
      // Include selected option types to preserve them
      const allOptionTypes = [...new Set([...availableOptionTypes, ...selectedOptionTypes])];
      optionTypeOptions.innerHTML = '';
      allOptionTypes.forEach(type => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="checkbox" value="${type}" ${selectedOptionTypes.includes(type) ? 'checked' : ''}>
          ${formatFilterKey(type)}
        `;
        optionTypeOptions.appendChild(label);
      });
    }
  }
}

// Format camelCase/snakeCase to user-friendly text
function formatFilterKey(key) {
  // Special case mappings
  const specialCases = {
    marblingColor: 'Marble',
    internalClitoral: 'Internals',
    internalClitoralHood: 'Internals',
    bodyColor: 'Body Color',
    vaginalInsert: 'Vaginal Insert',
    cervixDepth: 'Cervix Depth',
    analInsert: 'Anal Insert',
    analRing: 'Anal Ring',
    fullFace: 'Full Face',
    bovineSpot: 'Bovine Spot',
    vulvaAnalTeat: 'Vulva Anal Teat',
    vulvaAnalHighlight: 'Vulva Anal Highlight',
    vulvaHighlight: 'Vulva Highlight',
  };

  if (specialCases[key]) {
    return specialCases[key];
  }

  // Convert camelCase or snake_case to Title Case
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize first letter of each word
    .trim();
}

// Format color values (e.g., NeonBlue -> Neon Blue)
function formatColorValue(value) {
  if (value === 'none') return 'None';
  return value
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize first letter of each word
    .trim();
}

function renderGallery(items) {
  const galleryGrid = document.getElementById('gallery-grid');
  const filtersContainer = document.getElementById('filters-container');
  if (!galleryGrid || !filtersContainer) {
    throw new Error('Gallery grid or filters container element not found');
  }

  galleryGrid.innerHTML = '';

  let resetLinkContainer = filtersContainer.querySelector('.reset-filters-link');
  if (!resetLinkContainer) {
    resetLinkContainer = document.createElement('div');
    resetLinkContainer.className = 'reset-filters-link';
    resetLinkContainer.innerHTML = `<a id="reset-filters">Reset Filters</a>`;
    filtersContainer.appendChild(resetLinkContainer);
  }

  if (!items || items.length === 0) {
    galleryGrid.innerHTML = `
      <div class="no-results">
        <p>No items match the selected filters. Try unselecting some filters or <a href="#" id="reset-filters-inline">reset all filters</a>.</p>
      </div>
    `;
    const resetInline = document.getElementById('reset-filters-inline');
    if (resetInline) {
      resetInline.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('reset-filters').click();
      });
    }
  } else {
    const fragment = document.createDocumentFragment();
    let failedItems = 0;

    items.forEach((item, index) => {
      try {
        if (!item || (!item.image && !item.images) || !item.product || !item.options) {
          failedItems++;
          return;
        }

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const optionsHtml = Object.entries(item.options)
          .map(([key, value]) => `<p><strong>${formatFilterKey(key)}:</strong> ${formatColorValue(value)}</p>`)
          .join('');

        // Use first image from images array or single image
        const imagesArray = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image || '../images/placeholder.jpg'];
        const displayImage = imagesArray[0];
        const imageData = JSON.stringify(imagesArray);

        // Create dots HTML for items with multiple images
        let dotsHtml = '';
        if (imagesArray.length > 1) {
          dotsHtml = '<div class="gallery-image-dots">';
          imagesArray.forEach((_, dotIndex) => {
            dotsHtml += `<span class="gallery-dot ${dotIndex === 0 ? 'active' : ''}" data-index="${dotIndex}"></span>`;
          });
          dotsHtml += '</div>';
        }

        galleryItem.innerHTML = `
          <div class="gallery-image-container">
            <img src="${displayImage}" alt="${item.product}" class="gallery-image" data-images='${imageData}' data-index="${index}" data-current-image="0" onerror="this.onerror=null; this.src='../images/placeholder.jpg';">
            ${dotsHtml}
          </div>
          <div class="gallery-item-info">
            <p><strong>Product:</strong> ${formatFilterKey(item.product)}</p>
            ${optionsHtml}
            <p><strong>Created:</strong> ${item.createdAt}</p>
          </div>
        `;

        fragment.appendChild(galleryItem);
      } catch (error) {
        failedItems++;
        console.error('Error rendering gallery item:', error, item);
      }
    });

    galleryGrid.appendChild(fragment);

    if (failedItems > 0) {
      const warningElement = document.createElement('div');
      warningElement.className = 'gallery-warning';
      warningElement.innerHTML = `<p>Note: ${failedItems} item(s) could not be displayed due to errors.</p>`;
      galleryGrid.appendChild(warningElement);
    }

    // Add click event listeners for images
    const images = galleryGrid.querySelectorAll('.gallery-image');
    images.forEach((image, imgIndex) => {
      image.addEventListener('click', () => {
        const imagesArray = JSON.parse(image.dataset.images);
        const itemIndex = parseInt(image.dataset.index);
        const galleryItem = items[itemIndex];
        openImageModal(imagesArray, parseInt(image.dataset.currentImage), galleryItem);
      });
    });

    // Add click event listeners for dots
    const dots = galleryGrid.querySelectorAll('.gallery-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the image click event
        const galleryItem = dot.closest('.gallery-item');
        const image = galleryItem.querySelector('.gallery-image');
        const imagesArray = JSON.parse(image.dataset.images);
        const newIndex = parseInt(dot.dataset.index);

        // Update the displayed image
        image.src = imagesArray[newIndex] || '../images/placeholder.jpg';
        image.dataset.currentImage = newIndex;

        // Update active dot
        const allDots = galleryItem.querySelectorAll('.gallery-dot');
        allDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  }
}

function openImageModal(images, initialIndex, galleryItem) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const imageDots = document.getElementById('image-dots');
  const openCustomBuilderBtn = document.getElementById('open-custom-builder');
  const addToCartBtn = document.getElementById('add-to-cart');
  if (!modal || !modalImage || !imageDots || !openCustomBuilderBtn || !addToCartBtn) return;

  // Reset modal state
  imageDots.innerHTML = '';
  imageDots.style.display = 'block';
  modalImage.src = '';
  modalImage.alt = '';
  modalImage.classList.remove('zoomed');
  modalImage.style.transform = 'scale(1)';
  const existingArrows = modal.querySelectorAll('.nav-arrow');
  existingArrows.forEach(arrow => arrow.remove());

  // Track current index
  let currentIndex = initialIndex;

  // Set initial image
  modalImage.src = images[currentIndex] || '../images/placeholder.jpg';
  modalImage.alt = 'Enlarged product image';
  modal.style.display = 'block';

  // Populate navigation dots and arrows
  if (images.length > 1) {
    images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = index;
        updateModalImage(images, currentIndex);
      });
      imageDots.appendChild(dot);
    });

    // Add navigation arrows
    const leftArrow = document.createElement('span');
    leftArrow.className = 'nav-arrow left';
    leftArrow.innerHTML = '‹';
    leftArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateModalImage(images, currentIndex);
    });

    const rightArrow = document.createElement('span');
    rightArrow.className = 'nav-arrow right';
    rightArrow.innerHTML = '›';
    rightArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      updateModalImage(images, currentIndex);
    });

    const modalContent = modal.querySelector('.modal-content');
    modalContent.appendChild(leftArrow);
    modalContent.appendChild(rightArrow);
  } else {
    imageDots.style.display = 'none';
  }

  // Zoom functionality
  let isZoomed = false;
  modalImage.addEventListener('click', () => {
    isZoomed = !isZoomed;
    modalImage.classList.toggle('zoomed', isZoomed);
    modalImage.style.transform = isZoomed ? 'scale(2)' : 'scale(1)';
  });

  modalImage.addEventListener('mousemove', (e) => {
    if (!isZoomed) return;
    const rect = modalImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    modalImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  });

  modalImage.addEventListener('mouseleave', () => {
    if (isZoomed) {
      modalImage.style.transformOrigin = 'center';
    }
  });

  // Keyboard navigation
  handleKeyNavigation = (e) => {
    if (modal.style.display !== 'block') return;
    if (e.key === 'ArrowLeft' && images.length > 1) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateModalImage(images, currentIndex);
    } else if (e.key === 'ArrowRight' && images.length > 1) {
      currentIndex = (currentIndex + 1) % images.length;
      updateModalImage(images, currentIndex);
    }
  };
  document.addEventListener('keydown', handleKeyNavigation);

  // Open Custom Builder button
  openCustomBuilderBtn.onclick = () => {
    try {
      if (!galleryItem?.product || !galleryItem?.options) {
        throw new Error('Product or options information missing');
      }
      // Normalize options to match products.json schema
      const normalizedOptions = {};
      Object.entries(galleryItem.options).forEach(([key, value]) => {
        normalizedOptions[key] = value !== null && value !== undefined ? value.toString().toLowerCase() : 'none';
      });
      const queryParams = new URLSearchParams({
        fromGallery: 'true',
        product: galleryItem.product.toLowerCase(),
        ...normalizedOptions
      });
      const customBuilderUrl = `../../custom-order-page/public/index.html?${queryParams.toString()}`;
      console.log('Navigating to Custom Builder URL:', customBuilderUrl);
      window.location.href = customBuilderUrl; // Navigate in same tab
    } catch (error) {
      ErrorHandler.showError(
        ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.UNKNOWN, 'Error opening custom builder'),
        'global-error-container',
        true
      );
    }
  };

  // Add to Cart button
  addToCartBtn.onclick = () => {
    try {
      if (!galleryItem) {
        throw new Error('Gallery item data missing');
      }
      openSizeSelectionModal(galleryItem);
    } catch (error) {
      ErrorHandler.showError(
        ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.UNKNOWN, 'Error opening size selection'),
        'global-error-container',
        true
      );
    }
  };

  // Reattach modal listeners
  setupModalListeners();
}

function updateModalImage(images, index) {
  const modalImage = document.getElementById('modal-image');
  const imageDots = document.getElementById('image-dots');
  if (!modalImage || !imageDots) return;

  modalImage.src = images[index] || '../images/placeholder.jpg';
  modalImage.classList.remove('zoomed');
  modalImage.style.transform = 'scale(1)';

  // Update active dot
  const dots = imageDots.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function openSizeSelectionModal(galleryItem) {
  const modal = document.getElementById('size-selection-modal');
  const form = document.getElementById('size-selection-form');
  const confirmBtn = document.getElementById('size-selection-confirm');
  const cancelBtn = document.getElementById('size-selection-cancel');
  const closeBtn = document.querySelector('#size-selection-modal .size-selection-close');
  if (!modal || !form || !confirmBtn || !cancelBtn || !closeBtn) return;

  // Log galleryItem for debugging
  console.log('galleryItem:', galleryItem);

  // Define size options based on product
  let sizeOptions = {};
  const productName = galleryItem.product.toLowerCase();

  if (['deer', 'dragon'].includes(productName)) {
    // No size selection needed
    sizeOptions = null;
  } else if (['two-hole-pony', 'two-hole-cheval'].includes(productName)) {
    sizeOptions = {
      vaginalInsert: ['Tight', 'Standard', 'Large-Ribbed'],
      analInsert: ['Tight', 'Standard', 'Large-Ribbed']
    };
  } else if (productName === 'terlingua') {
    sizeOptions = {
      vaginalInsert: ['Medium', 'Large'],
      analInsert: ['Medium', 'Large'],
      cervixDepth: [
        { display: '3 inches', value: '3' },
        { display: '5 inches', value: '5' },
        { display: '7 inches', value: '7' }
      ]
    };
  } else if (['two-hole-canine', 'one-hole-canine'].includes(productName)) {
    sizeOptions = {
      vaginalInsert: ['Medium', 'Large'],
      analInsert: ['Medium', 'Large']
    };
  } else {
    sizeOptions = {
      vaginalInsert: ['Medium', 'Large'],
      analInsert: ['Medium', 'Large']
    };
  }

  // If no size selection is needed, add to cart directly
  if (!sizeOptions) {
    const cartItem = {
      product: galleryItem.product,
      options: { ...galleryItem.options },
      images: Array.isArray(galleryItem.images) ? galleryItem.images : [galleryItem.image],
      createdAt: galleryItem.createdAt
    };
    Cart.addItem(cartItem);
    modal.style.display = 'none';
    return;
  }

  // Generate form
  form.innerHTML = '';
  const defaultOptions = galleryItem.options || {};

  for (const [key, values] of Object.entries(sizeOptions)) {
    const div = document.createElement('div');
    div.className = 'size-selection-field';
    const label = document.createElement('label');
    label.textContent = formatFilterKey(key);
    const select = document.createElement('select');
    select.name = key;

    // Log values for debugging
    console.log(`Generating options for ${key}:`, values);

    // Handle cervixDepth specially for terlingua
    if (key === 'cervixDepth' && Array.isArray(values) && values[0]?.display) {
      values.forEach(({ display, value }) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = display;
        if (defaultOptions[key] && defaultOptions[key] === value) {
          option.selected = true;
        }
        select.appendChild(option);
      });
    } else {
      // Handle string arrays (e.g., vaginalInsert, analInsert)
      values.forEach(value => {
        // Skip non-string values to prevent errors
        if (typeof value !== 'string') {
          console.warn(`Skipping non-string value for ${key}:`, value);
          return;
        }
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        if (
          defaultOptions[key] &&
          typeof defaultOptions[key] === 'string' &&
          defaultOptions[key].toLowerCase() === value.toLowerCase()
        ) {
          option.selected = true;
        }
        select.appendChild(option);
      });
    }

    div.appendChild(label);
    div.appendChild(select);
    form.appendChild(div);
  }

  // Show modal
  modal.style.display = 'block';

  // Confirm button
  confirmBtn.onclick = () => {
    try {
      const selectedOptions = { ...galleryItem.options };
      const selects = form.querySelectorAll('select');
      selects.forEach(select => {
        selectedOptions[select.name] = select.value;
      });

      const cartItem = {
        product: galleryItem.product,
        options: selectedOptions,
        images: Array.isArray(galleryItem.images) ? galleryItem.images : [galleryItem.image],
        createdAt: galleryItem.createdAt
      };
      Cart.addItem(cartItem);
      modal.style.display = 'none';
    } catch (error) {
      ErrorHandler.showError(
        ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.UNKNOWN, 'Error adding to cart'),
        'global-error-container',
        true
      );
    }
  };

  // Cancel button
  cancelBtn.onclick = () => {
    modal.style.display = 'none';
  };

  // Close button
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  // Close on click outside
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// Debounce utility to prevent rapid updates
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Attach event listeners with error handling
function attachFilterEventListeners(galleryItems, products, colorValues) {
  try {
    // Handle custom dropdowns (color, product type, and option type)
    const customFilters = ['color-filter', 'product-type-filter', 'option-type-filter'];
    customFilters.forEach(filterId => {
      const filter = document.getElementById(filterId);
      if (filter) {
        const display = filter.querySelector('.select-display');
        const options = filter.querySelector('.select-options');
        if (!display || !options) {
          console.warn(`Display or options not found for filter '${filterId}'`);
          return;
        }

        // Toggle dropdown on click
        display.addEventListener('click', (event) => {
          event.stopPropagation();
          options.style.display = options.style.display === 'none' ? 'block' : 'none';
        });

        // Update gallery on checkbox change with debounce
        const debouncedUpdate = debounce(() => updateGallery(galleryItems, products, { galleryItems }), 100);
        options.addEventListener('change', (event) => {
          if (event.target.type === 'checkbox') {
            try {
              // Update display text
              const checkedOptions = Array.from(options.querySelectorAll('input[type="checkbox"]:checked')).map(input => formatFilterKey(input.value) || formatColorValue(input.value));
              display.textContent = checkedOptions.length > 0 ? checkedOptions.join(', ') : `Select`;

              // Close dropdown after selection
              options.style.display = 'none';
              
              debouncedUpdate();
            } catch (error) {
              ErrorHandler.showError(
                ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.FILTER, `Error on ${filterId} change`),
                'filter-warning',
                true
              );
            }
          }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
          if (!filter.contains(event.target)) {
            options.style.display = 'none';
          }
        });
      } else {
        console.warn(`Filter element '${filterId}' not found`);
      }
    });

    // Handle standard select (sort)
    const standardFilters = ['sort'];
    standardFilters.forEach(filterId => {
      const element = document.getElementById(filterId);
      if (element) {
        const debouncedUpdate = debounce(() => updateGallery(galleryItems, products, { galleryItems }), 100);
        element.addEventListener('change', debouncedUpdate);
      } else {
        console.warn(`Filter element '${filterId}' not found`);
      }
    });

    // Add reset filters link listener
    const resetButton = document.getElementById('reset-filters');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        try {
          // Clear custom dropdown checkboxes
          customFilters.forEach(filterId => {
            const filter = document.getElementById(filterId);
            if (filter) {
              const checkboxes = filter.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach(checkbox => (checkbox.checked = false));
              const display = filter.querySelector('.select-display');
              if (display) {
                display.textContent = `Select`;
              }
              const options = filter.querySelector('.select-options');
              if (options) {
                options.style.display = 'none';
              }
            }
          });

          // Reset sort select to default
          const sortSelect = document.getElementById('sort');
          if (sortSelect) {
            sortSelect.value = 'newest';
          }

          // Trigger update with all items
          updateGallery(galleryItems, products, { galleryItems });
        } catch (error) {
          ErrorHandler.showError(
            ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.FILTER, 'Error resetting filters'),
            'filter-warning',
            true
          );
        }
      });
    } else {
      console.warn('Reset filters link not found');
    }
  } catch (error) {
    console.error('Error attaching filter event listeners:', error);
  }
}

// Function to close the modal
function closeModal(modalId = 'image-modal') {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    // Clean up dynamic event listeners
    document.removeEventListener('keydown', handleKeyNavigation);
    if (modalId === 'image-modal') {
      const imageDots = document.getElementById('image-dots');
      const modalImage = document.getElementById('modal-image');
      if (imageDots) imageDots.innerHTML = '';
      if (modalImage) {
        modalImage.src = '';
        modalImage.alt = '';
        modalImage.classList.remove('zoomed');
        modalImage.style.transform = 'scale(1)';
      }
      const existingArrows = modal.querySelectorAll('.nav-arrow');
      existingArrows.forEach(arrow => arrow.remove());
    } else if (modalId === 'size-selection-modal') {
      const form = document.getElementById('size-selection-form');
      if (form) form.innerHTML = '';
    }
  }
}

// Function to set up modal event listeners
function setupModalListeners() {
  const imageModal = document.getElementById('image-modal');
  const sizeModal = document.getElementById('size-selection-modal');
  const imageCloseBtn = imageModal?.querySelector('.modal-close');
  const sizeCloseBtn = sizeModal?.querySelector('.size-selection-close');

  // Remove existing listeners to prevent duplicates
  const removeExistingListeners = (element, event, handler) => {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
    clone.addEventListener(event, handler);
    return clone;
  };

  if (imageModal && imageCloseBtn) {
    removeExistingListeners(imageCloseBtn, 'click', () => closeModal('image-modal'));
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        closeModal('image-modal');
      }
    }, { once: true });
  }

  if (sizeModal && sizeCloseBtn) {
    removeExistingListeners(sizeCloseBtn, 'click', () => closeModal('size-selection-modal'));
    sizeModal.addEventListener('click', (e) => {
      if (e.target === sizeModal) {
        closeModal('size-selection-modal');
      }
    }, { once: true });
  }

  // Single Escape key listener
  document.removeEventListener('keydown', handleEscape);
  document.addEventListener('keydown', handleEscape, { once: true });
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    const imageModal = document.getElementById('image-modal');
    const sizeModal = document.getElementById('size-selection-modal');
    if (imageModal?.style.display === 'block') {
      closeModal('image-modal');
    }
    if (sizeModal?.style.display === 'block') {
      closeModal('size-selection-modal');
    }
    // Reattach for next modal open
    document.addEventListener('keydown', handleEscape, { once: true });
  }
}

// Initialize modal listeners on page load
document.addEventListener('DOMContentLoaded', () => {
  setupModalListeners();
  // ... other existing DOMContentLoaded code ...
});

// Function to gracefully handle failed image loads
function setupImageErrorHandling() {
  document.addEventListener('error', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      console.log('Image failed to load:', event.target.src);
      event.target.alt = 'Image not available';
    }
  }, true);
}

// Setup global error handlers
function setupGlobalErrorHandlers() {
  window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    if (event.target && (event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK' || event.target.tagName === 'IMG')) {
      return;
    }
    let errorContainer = document.getElementById('global-error-container');
    if (!errorContainer) {
      errorContainer = document.createElement('div');
      errorContainer.id = 'global-error-container';
      errorContainer.style.position = 'fixed';
      errorContainer.style.bottom = '20px';
      errorContainer.style.right = '20px';
      errorContainer.style.zIndex = '1000';
      document.body.appendChild(errorContainer);
    }
    const errorNotification = document.createElement('div');
    errorNotification.className = 'error-notification';
    errorNotification.innerHTML = `
      <div class="error-container warning">
        <div class="error-icon">⚠️</div>
        <div class="error-message">An error occurred. Some functionality may be affected.</div>
        <button class="close-button">×</button>
      </div>
    `;
    const closeButton = errorNotification.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      errorContainer.removeChild(errorNotification);
    });
    setTimeout(() => {
      if (errorContainer.contains(errorNotification)) {
        errorContainer.removeChild(errorNotification);
      }
    }, 5000);
    errorContainer.appendChild(errorNotification);
  });
  window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
  });
}

// Enhanced initialize function with error handling
document.addEventListener('DOMContentLoaded', async () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterContainer = document.getElementById('filters-container');
  if (!galleryGrid) {
      ErrorHandler.showError('Gallery container not found.', 'app-container', true);
      return;
  }
  galleryGrid.innerHTML = '<p>Loading gallery items...</p>';
  try {
      const galleryItems = await fetchWithErrorHandling('../data/galleryItems.json', 'gallery items');
      const products = await fetchWithErrorHandling('../data/products.json', 'products');
      console.log('Gallery Items:', galleryItems);
      console.log('Products:', products);
      if (!validateData(galleryItems, products)) {
          throw {
              type: ErrorHandler.ErrorTypes.DATA,
              message: 'Data validation failed. Some required fields are missing or invalid.'
          };
      }
      try {
          populateFilters(products, { galleryItems });
      } catch (error) {
          ErrorHandler.showError(
              ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.FILTER, 'Error populating filters'),
              'filters-container',
              true
          );
      }
      try {
          updateGallery(galleryItems, products, { galleryItems });
      } catch (error) {
          ErrorHandler.showError(
              ErrorHandler.handleError(error, ErrorHandler.ErrorTypes.RENDERING, 'Error rendering gallery'),
              'gallery-grid'
          );
      }
      attachFilterEventListeners(galleryItems, products, { galleryItems });
  } catch (error) {
      const errorType = error.type || ErrorHandler.ErrorTypes.UNKNOWN;
      const errorMessage = error.message || 'Unknown error occurred';
      ErrorHandler.showError(errorMessage, 'gallery-grid');
      if (filterContainer) {
          filterContainer.style.opacity = '0.5';
          filterContainer.style.pointerEvents = 'none';
      }
  }
});

// Call global setup functions when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupImageErrorHandling();
  setupGlobalErrorHandlers();
});