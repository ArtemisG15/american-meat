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

const countryStates = {
  'USA': [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ],
  'Canada': [
    'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK',
    'NT', 'NU', 'YT'
  ],
  'United Kingdom': [],
  'Australia': ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'],
  'New Zealand': ['AUK', 'BOP', 'CAN', 'GIS', 'HKB', 'MBH', 'NSN', 'NTL', 'OTA', 'STL', 'TAS', 'TKI', 'WGN', 'WKO', 'WTC'],
  'Germany': [
    'BW', 'BY', 'BE', 'BB', 'HB', 'HH', 'HE', 'MV', 'NI', 'NW',
    'RP', 'SL', 'SN', 'ST', 'SH', 'TH'
  ],
  'France': [],
  'Japan': [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47'
  ],
  'Brazil': [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ],
  'India': [
    'AN', 'AP', 'AR', 'AS', 'BR', 'CH', 'CG', 'DH', 'DL', 'GA',
    'GJ', 'HR', 'HP', 'JK', 'JH', 'KA', 'KL', 'LD', 'MP', 'MH',
    'MN', 'ML', 'MZ', 'NL', 'OR', 'PY', 'PB', 'RJ', 'SK', 'TN',
    'TS', 'TR', 'UP', 'UK', 'WB'
  ],
  'Mexico': [
    'AGU', 'BCN', 'BCS', 'CAM', 'CHP', 'CHH', 'COA', 'COL', 'DIF',
    'DUR', 'GUA', 'GRO', 'HID', 'JAL', 'MEX', 'MIC', 'MOR', 'NAY',
    'NLE', 'OAX', 'PUE', 'QUE', 'ROO', 'SLP', 'SIN', 'SON', 'TAB',
    'TAM', 'TLA', 'VER', 'YUC', 'ZAC'
  ],
  'South Africa': ['EC', 'FS', 'GP', 'KZN', 'LP', 'MP', 'NC', 'NW', 'WC'],
  'Italy': [],
  'Spain': [
    'AN', 'AR', 'AS', 'CN', 'CB', 'CM', 'CL', 'CT', 'VC', 'EX',
    'GA', 'MD', 'MC', 'NV', 'PV', 'PM', 'RI'
  ],
  'Netherlands': [],
  'Sweden': [],
  'Switzerland': [
    'AG', 'AR', 'AI', 'BL', 'BS', 'BE', 'FR', 'GE', 'GL', 'GR',
    'JU', 'LU', 'NE', 'NW', 'OW', 'SG', 'SH', 'SZ', 'SO', 'TG',
    'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH'
  ],
  'Argentina': [
    'B', 'C', 'K', 'H', 'U', 'X', 'W', 'E', 'P', 'Y', 'L', 'F',
    'M', 'N', 'Q', 'R', 'A', 'J', 'D', 'Z', 'S', 'G', 'V', 'T'
  ],
  'South Korea': [],
  'China': [],
  'Russia': [],
};

const countryRequirements = {
  'USA': ['street', 'city', 'state', 'zip'],
  'Canada': ['street', 'city', 'state', 'zip'],
  'United Kingdom': ['street', 'city', 'zip'],
  'Australia': ['street', 'city', 'state', 'zip'],
  'New Zealand': ['street', 'city', 'state', 'zip'],
  'Germany': ['street', 'city', 'state', 'zip'],
  'France': ['street', 'city', 'zip'],
  'Japan': ['street', 'city', 'state', 'zip'],
  'Brazil': ['street', 'city', 'state', 'zip'],
  'India': ['street', 'city', 'state', 'zip'],
  'Mexico': ['street', 'city', 'state', 'zip'],
  'South Africa': ['street', 'city', 'state', 'zip'],
  'Italy': ['street', 'city', 'zip'],
  'Spain': ['street', 'city', 'state', 'zip'],
  'Netherlands': ['street', 'city', 'zip'],
  'Sweden': ['street', 'city', 'zip'],
  'Switzerland': ['street', 'city', 'state', 'zip'],
  'Argentina': ['street', 'city', 'state', 'zip'],
  'South Korea': ['street', 'city', 'zip', 'pccc'],
  'China': ['street', 'city', 'zip'],
  'Russia': ['street', 'city', 'zip'],
};

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

// Store the current order for button actions
let currentOrder = null;
let pendingChanges = {};
let committedItems = {};

// Map progress to subStatus for Order Placed
const progressToSubStatus = {
  1: 'green-1',
  2: 'green-2',
  3: 'yellow-1',
  4: 'yellow-2',
  5: 'red'
};

// Form submission logic
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const orderNumber = document.getElementById('orderNumber').value;
  const email = document.getElementById('email').value;
  const error = document.getElementById('error');
  const orderDetails = document.getElementById('orderDetails');

  // Ensure orders array is available
  if (!orders) {
    error.textContent = 'Error: Order data not loaded';
    orderDetails.classList.add('hidden');
    console.error('orders array is undefined');
    return;
  }

  const order = orders.find(
    o => o.orderNumber === orderNumber && o.email === email
  );

  if (order) {
    // Check if items exists and is an array
    if (!order.items || !Array.isArray(order.items)) {
      error.textContent = 'Error: Invalid order items data';
      orderDetails.classList.add('hidden');
      console.error('order.items is invalid:', order);
      currentOrder = null;
      return;
    }

    error.textContent = '';
    orderDetails.classList.remove('hidden');
    currentOrder = order; // Store the current order

    document.getElementById('orderNumberDisplay').textContent = order.orderNumber;
    document.getElementById('emailDisplay').textContent = order.email;
    document.getElementById('statusDisplay').textContent = order.status;
    document.getElementById('addressDisplay').textContent = order.address;

    // Group identical products
const groupedItems = [];
order.items.forEach((item, index) => {
  if (!item || !item.product || !item.options) {
    console.warn(`Invalid item at index ${index}:`, item);
    return;
  }
  console.log(`Item ${index} options:`, item.options); // Debug log
  // Create a sorted version of options for comparison
  const sortedOptions = {};
  Object.keys(item.options)
    .sort() // Sort keys alphabetically
    .forEach(key => {
      sortedOptions[key] = item.options[key];
    });
    console.log(`Item ${index} sorted options:`, sortedOptions); // Debug log

  const existingGroup = groupedItems.find(group =>
    group.product === item.product &&
    JSON.stringify(group.sortedOptions) === JSON.stringify(sortedOptions)
  );
  if (existingGroup) {
    existingGroup.quantity += 1;
    existingGroup.indices.push(index);
  } else {
    groupedItems.push({
      product: item.product,
      options: { ...item.options },
      sortedOptions, // Store sorted options for comparison
      quantity: 1,
      indices: [index],
      item: item
    });
  }
});
    console.log('Grouped items:', groupedItems);

    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    if (groupedItems.length === 0) {
      productsList.innerHTML = '<li>No valid items to display</li>';
      console.warn('No grouped items created');
      return;
    }

    groupedItems.forEach((group, groupIndex) => {
      console.log(`Rendering group ${groupIndex}:`, group);
      if (!group.item || !group.item.product || !group.item.options) {
        console.error(`Invalid group item at group ${groupIndex}:`, group);
        return;
      }

      const li = document.createElement('li');
      li.className = 'product-item';

      // Create container for preview and text
      const container = document.createElement('div');
      container.className = 'product-container';

      // Create preview container
      const previewContainer = document.createElement('div');
      previewContainer.className = 'product-preview';

      // Determine which item to display (pending changes or original)
      const firstIndex = group.indices[0];
      const displayItem = pendingChanges[firstIndex] || group.item;

      // Define SVG layers to load (based on custom order page's updateSvgDisplay)
      const svgLayers = [
        { id: 'preview-body', file: `${displayItem.product}-body.svg`, color: displayItem.options.bodyColor },
        { id: 'preview-marbling', file: `${displayItem.product}-marble.svg`, color: displayItem.options.marblingColor, condition: displayItem.options.marblingColor && displayItem.options.marblingColor !== 'none' },
      ];

      // Add product-specific SVGs (based on custom order page's logic)
      if (displayItem.product === 'terlingua') {
        svgLayers.push(
          { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
          { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoralHood, condition: displayItem.options.internalClitoralHood && displayItem.options.internalClitoralHood !== 'none' }
        );
      } else if (displayItem.product === 'two-hole-pony' || displayItem.product === 'two-hole-cheval') {
        svgLayers.push(
          { id: 'preview-full-face', file: `${displayItem.product}-full-face.svg`, color: displayItem.options.fullFace, condition: displayItem.options.fullFace && displayItem.options.fullFace !== 'none' },
          { id: 'preview-bovine-spot', file: `${displayItem.product}-bovine-spot.svg`, color: displayItem.options.bovineSpot, condition: displayItem.options.bovineSpot && displayItem.options.bovineSpot !== 'none' },
          { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
        );
      } else if (displayItem.product === 'two-hole-canine') {
        svgLayers.push(
          { id: 'preview-vat', file: `${displayItem.product}-vat.svg`, color: displayItem.options.vulvaAnalTeat, condition: displayItem.options.vulvaAnalTeat && displayItem.options.vulvaAnalTeat !== 'none' },
          { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
        );
      } else if (displayItem.product === 'deer') {
        svgLayers.push(
          { id: 'preview-vah', file: `${displayItem.product}-vah.svg`, color: displayItem.options.vulvaAnalHighlight, condition: displayItem.options.vulvaAnalHighlight && displayItem.options.vulvaAnalHighlight !== 'none' },
          { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
          { id: 'preview-tail', file: `${displayItem.product}-tail.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none', hasGradient: true },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
        );
      } else if (displayItem.product === 'dragon') {
        svgLayers.push(
          { id: 'preview-vh', file: `${displayItem.product}-vh.svg`, color: displayItem.options.vulvaHighlight, condition: displayItem.options.vulvaHighlight && displayItem.options.vulvaHighlight !== 'none' },
          { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none', hasGradient: true },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
        );
      } else if (displayItem.product === 'one-hole-canine') {
        svgLayers.push(
          { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
          { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
          { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internals, condition: displayItem.options.internals && displayItem.options.internals !== 'none' }
        );
      }

      // Add outline last to ensure it’s on top
      svgLayers.push({ id: 'preview-outline', file: `${displayItem.product}-outline.svg`, color: null });

      // Load SVGs for preview
      svgLayers.forEach(layer => {
        if (!layer.condition || layer.condition === true) {
          const svg = document.createElement('object');
          svg.type = 'image/svg+xml';
          svg.className = 'preview-layer';
          svg.id = `preview-group-${groupIndex}-${layer.id}`; // Unique ID per group
          svg.data = `../../src/assets/images/external-view/${layer.file}`;
          previewContainer.appendChild(svg);

          // Apply color when SVG loads
          if (layer.color) {
            svg.addEventListener('load', () => {
              const svgDoc = svg.contentDocument;
              if (svgDoc) {
                const colorValue = colorValues[layer.color] || 'transparent';
                if (layer.hasGradient) {
                  // Handle gradients (mimicking custom order page’s updateSvgColor)
                  const gradients = svgDoc.querySelectorAll('linearGradient, radialGradient');
                  gradients.forEach(gradient => {
                    const stops = gradient.querySelectorAll('stop');
                    stops.forEach((stop, stopIndex) => {
                      stop.setAttribute('stop-color', colorValue);
                      stop.style.stopColor = colorValue;
                      // Match custom order page’s gradient opacity
                      const isInternalSvg = ['preview-internals', 'preview-internal-full-face'].includes(layer.id);
                      stop.setAttribute('stop-opacity', isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0'));
                      stop.style.stopOpacity = isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0');
                    });
                    // Handle referenced gradients
                    const refId = gradient.getAttribute('xlink:href');
                    if (refId) {
                      const refGradient = svgDoc.querySelector(refId);
                      if (refGradient) {
                        const refStops = refGradient.querySelectorAll('stop');
                        refStops.forEach((stop, stopIndex) => {
                          stop.setAttribute('stop-color', colorValue);
                          stop.style.stopColor = colorValue;
                          const isInternalSvg = ['preview-internals', 'preview-internal-full-face'].includes(layer.id);
                          stop.setAttribute('stop-opacity', isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0'));
                          stop.style.stopOpacity = isInternalSvg ? (stopIndex === 0 ? '0' : '1') : (stopIndex === 0 ? '1' : '0');
                        });
                      }
                    }
                  });
                  // Force redraw
                  svg.style.display = 'none';
                  svg.offsetHeight;
                  svg.style.display = '';
                } else {
                  // Solid fill
                  const elements = svgDoc.querySelectorAll('path, g, rect, circle, polygon');
                  elements.forEach(element => {
                    element.setAttribute('fill', colorValue);
                    element.style.fill = colorValue;
                  });
                }
              }
            });
          }
        }
      });

      // Add error handling
      const errorDiv = document.createElement('div');
      errorDiv.className = 'preview-error';
      errorDiv.textContent = 'No Preview';
      errorDiv.style.display = 'none';
      previewContainer.appendChild(errorDiv);

      // Check if any SVGs loaded successfully
      let loadedCount = 0;
      const svgs = previewContainer.querySelectorAll('.preview-layer');
      svgs.forEach(svg => {
        svg.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === svgs.length) {
            errorDiv.style.display = 'none';
          }
        }, { once: true });
        svg.addEventListener('error', () => {
          errorDiv.style.display = 'block';
          console.warn(`Failed to load SVG: ${svg.data}`);
        }, { once: true });
      });

      // Add click event for modal
      previewContainer.addEventListener('click', () => {
        console.log(`Opening modal for group ${groupIndex}, item index ${firstIndex}:`, displayItem);
        openProductModal(displayItem, firstIndex);
      });

      container.appendChild(previewContainer);

      // Create text content
      const textContainer = document.createElement('div');
      textContainer.className = 'product-text';
      let optionsText = Object.entries(displayItem.options)
        .filter(([key, value]) => {
          // Exclude vaginalInsert for deer and dragon
          if (['deer', 'dragon'].includes(displayItem.product) && key === 'vaginalInsert') {
            return false;
          }
          // Include other options if they have a value and are not 'none'
          return value && String(value).toLowerCase() !== 'none';
        })
        .map(([key, value]) => {
          const displayKey = key
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
          const displayValue = String(value)
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
          return `${displayKey}: ${displayValue}`;
        })
        .join(', ');
      textContainer.textContent = `${displayItem.product.replace(/-/g, ' ').toUpperCase()} (Qty: ${group.quantity}${optionsText ? ', ' + optionsText : ''})`;
      container.appendChild(textContainer);

      li.appendChild(container);
      productsList.appendChild(li);
    });

    // Update button text based on status
    document.getElementById('updateOrderBtn').textContent = order.status === 'Canceled' ? 'New Order' : 'Update Order';
    document.getElementById('cancelOrderBtn').textContent = order.status === 'Canceled' ? 'Reorder' : 'Cancel Order';

    // Convert progress to subStatus for Order Placed
    const subStatus = order.status === 'Order Placed' ? progressToSubStatus[order.progress] || 'green-1' : '';
    renderProgressBar(order.status, subStatus);
  } else {
    error.textContent = 'Invalid order number or email';
    orderDetails.classList.add('hidden');
    currentOrder = null;
  }
});

function openProductModal(item, index) {
  // Group items
  const groupedItems = [];
  currentOrder.items.forEach((item, idx) => {
    const existingGroup = groupedItems.find(group =>
      group.product === item.product &&
      JSON.stringify(group.options) === JSON.stringify(item.options)
    );
    if (existingGroup) {
      existingGroup.quantity += 1;
      existingGroup.indices.push(idx);
    } else {
      groupedItems.push({
        product: item.product,
        options: { ...item.options },
        quantity: 1,
        indices: [idx]
      });
    }
  });

  const group = groupedItems.find(g => g.indices.includes(index)) || {
    product: item.product,
    options: { ...item.options },
    quantity: 1,
    indices: [index]
  };
  const displayItem = {
    product: group.product,
    options: { ...group.options, ...(pendingChanges[index]?.options || {}) }
  };

  // Validate and set vaginalInsert and analInsert
  const validPonyChevalSizes = ['tight', 'standard', 'large-ribbed'];
  const validOtherSizes = ['medium', 'large'];
  const validCervixDepths = ['3', '5', '7'];

  const vaginalInsert = displayItem.options.vaginalInsert && 
      (['two-hole-pony', 'two-hole-cheval'].includes(displayItem.product) 
          ? validPonyChevalSizes.includes(displayItem.options.vaginalInsert.toLowerCase()) 
          : validOtherSizes.includes(displayItem.options.vaginalInsert.toLowerCase()))
      ? displayItem.options.vaginalInsert.toLowerCase()
      : (['deer', 'dragon'].includes(displayItem.product) ? 'medium' : null);

  const analInsert = displayItem.options.analInsert && 
      (['two-hole-pony', 'two-hole-cheval'].includes(displayItem.product) 
          ? validPonyChevalSizes.includes(displayItem.options.analInsert.toLowerCase()) 
          : validOtherSizes.includes(displayItem.options.analInsert.toLowerCase()))
      ? displayItem.options.analInsert.toLowerCase()
      : null;

  const cervixDepth = displayItem.options.cervixDepth && validCervixDepths.includes(displayItem.options.cervixDepth)
      ? displayItem.options.cervixDepth
      : '3'; // Default to 3 for terlingua if invalid

  // Create modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content product-modal">
      <h3>${displayItem.product.replace(/-/g, ' ').toUpperCase()}</h3>
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

  // Define SVG layers for exterior and interior views
  const exteriorLayers = [
    { id: 'preview-body', file: `${displayItem.product}-body.svg`, color: displayItem.options.bodyColor },
    { id: 'preview-marbling', file: `${displayItem.product}-marble.svg`, color: displayItem.options.marblingColor, condition: displayItem.options.marblingColor && displayItem.options.marblingColor !== 'none' },
  ];
  const interiorLayers = [
    { id: 'preview-internal-body', file: `${displayItem.product}-body.svg`, color: displayItem.options.bodyColor, path: 'internal-view' },
    { id: 'preview-internal-marbling', file: `${displayItem.product}-marble.svg`, color: displayItem.options.marblingColor, condition: displayItem.options.marblingColor && displayItem.options.marblingColor !== 'none', path: 'internal-view' },
  ];

  const internalColor = displayItem.product === 'terlingua' ? displayItem.options.internalClitoralHood :
                       ['two-hole-pony', 'two-hole-cheval', 'two-hole-canine', 'deer', 'dragon'].includes(displayItem.product) ? displayItem.options.internalClitoral :
                       displayItem.product === 'one-hole-canine' ? displayItem.options.internals : 'none';

  // Add product-specific exterior SVGs
  if (displayItem.product === 'terlingua') {
    exteriorLayers.push(
      { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
      { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoralHood, condition: displayItem.options.internalClitoralHood && displayItem.options.internalClitoralHood !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-vat', file: `${displayItem.product}-hood.svg`, color: displayItem.options.internalClitoralHood, condition: displayItem.options.internalClitoralHood && displayItem.options.internalClitoralHood !== 'none', path: 'internal-view' },
      { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v.svg`, color: displayItem.options.internalClitoralHood, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
      { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoralHood, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' },
    );
  } else if (displayItem.product === 'two-hole-pony' || displayItem.product === 'two-hole-cheval') {
    exteriorLayers.push(
      { id: 'preview-full-face', file: `${displayItem.product}-full-face.svg`, color: displayItem.options.fullFace, condition: displayItem.options.fullFace && displayItem.options.fullFace !== 'none' },
      { id: 'preview-bovine-spot', file: `${displayItem.product}-bovine-spot.svg`, color: displayItem.options.bovineSpot, condition: displayItem.options.bovineSpot && displayItem.options.bovineSpot !== 'none' },
      { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-internal-full-face', file: `${displayItem.product}-full-face.svg`, color: displayItem.options.fullFace, condition: displayItem.options.fullFace && displayItem.options.fullFace !== 'none', path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: displayItem.options.internalClitoral, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
      { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoral, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
    );
  } else if (displayItem.product === 'two-hole-canine') {
    exteriorLayers.push(
      { id: 'preview-vat', file: `${displayItem.product}-vat.svg`, color: displayItem.options.vulvaAnalTeat, condition: displayItem.options.vulvaAnalTeat && displayItem.options.vulvaAnalTeat !== 'none' },
      { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-vat', file: `${displayItem.product}-teat.svg`, color: displayItem.options.vulvaAnalTeat, condition: displayItem.options.vulvaAnalTeat && displayItem.options.vulvaAnalTeat !== 'none', path: 'internal-view' },
      { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: displayItem.options.internalClitoral, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
      { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoral, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
    );
  } else if (displayItem.product === 'deer') {
    exteriorLayers.push(
      { id: 'preview-vah', file: `${displayItem.product}-vah.svg`, color: displayItem.options.vulvaAnalHighlight, condition: displayItem.options.vulvaAnalHighlight && displayItem.options.vulvaAnalHighlight !== 'none' },
      { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
      { id: 'preview-tail', file: `${displayItem.product}-tail.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none', hasGradient: true },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-medium-v.svg`, color: displayItem.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true },
    );
  } else if (displayItem.product === 'dragon') {
    exteriorLayers.push(
      { id: 'preview-vh', file: `${displayItem.product}-vh.svg`, color: displayItem.options.vulvaHighlight, condition: displayItem.options.vulvaHighlight && displayItem.options.vulvaHighlight !== 'none' },
      { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none', hasGradient: true },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-medium-v.svg`, color: displayItem.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true },
    );
  } else if (displayItem.product === 'one-hole-canine') {
    exteriorLayers.push(
      { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
      { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
      { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internals, condition: displayItem.options.internals && displayItem.options.internals !== 'none' }
    );
    interiorLayers.push(
      { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internals, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
      { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
    );
  }

  // Add outlines last for both views
  exteriorLayers.push({ id: 'preview-outline', file: `${displayItem.product}-outline.svg`, color: null });
  interiorLayers.push({ id: 'preview-outline', file: `${displayItem.product}-body-outline.svg`, color: null, path: 'internal-view' });

  // Load SVGs for exterior view
  const exteriorPreview = modal.querySelector('.exterior-preview');
  exteriorLayers.forEach(layer => {
    if (!layer.condition || layer.condition === true) {
      const svg = document.createElement('object');
      svg.type = 'image/svg+xml';
      svg.className = 'preview-layer';
      svg.id = `modal-exterior-${index}-${layer.id}`;
      svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
      exteriorPreview.appendChild(svg);

      if (layer.color) {
        svg.addEventListener('load', () => applySvgColor(svg, layer.color, layer.hasGradient, index));
      }
    }
  });

  // Load SVGs for interior view
  const interiorPreview = modal.querySelector('.interior-preview');
  interiorLayers.forEach(layer => {
    if (!layer.condition || layer.condition === true) {
      const svg = document.createElement('object');
      svg.type = 'image/svg+xml';
      svg.className = 'preview-layer';
      svg.id = `modal-interior-${index}-${layer.id}`;
      svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
      interiorPreview.appendChild(svg);

      if (layer.color) {
        svg.addEventListener('load', () => applySvgColor(svg, layer.color, layer.hasGradient, index));
      }
    }
  });

  // Add error handling for modal previews
  [exteriorPreview, interiorPreview].forEach(preview => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'preview-error';
    errorDiv.textContent = 'No Preview';
    errorDiv.style.display = 'none';
    preview.appendChild(errorDiv);

    let loadedCount = 0;
    const svgs = preview.querySelectorAll('.preview-layer');
    svgs.forEach(svg => {
      svg.addEventListener('load', () => {
        loadedCount++;
        if (loadedCount === svgs.length) {
          errorDiv.style.display = 'none';
        }
      }, { once: true });
      svg.addEventListener('error', () => {
        errorDiv.style.display = 'block';
      }, { once: true });
    });
  });

  // Close modal
  document.getElementById('closeModal').addEventListener('click', () => {
    modal.remove();
  });
}

// Function to apply colors to SVGs (mimicking custom order page’s updateSvgColor)
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

// Handle query parameters on page load to restore order details
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderNumber = urlParams.get('orderNumber');
  const email = urlParams.get('email');
  const showUpdateModal = urlParams.get('showUpdateModal');
  const updatedItem = urlParams.get('updatedItem');
  const productIndex = urlParams.get('productIndex');
  const pendingChangesParam = urlParams.get('pendingChanges');

  // Restore pendingChanges if present
  if (pendingChangesParam) {
    try {
      pendingChanges = JSON.parse(pendingChangesParam);
    } catch (e) {
      console.error('Error parsing pendingChanges from URL:', e);
      pendingChanges = {};
    }
  }

  if (orderNumber && email) {
    document.getElementById('orderNumber').value = orderNumber;
    document.getElementById('email').value = email;
    // Trigger form submission to display order details
    const event = new Event('submit', { bubbles: true, cancelable: true });
    document.getElementById('orderForm').dispatchEvent(event);
    // If showUpdateModal is true, open the update modal
    if (showUpdateModal === 'true' && currentOrder) {
      updateOrder(updatedItem ? JSON.parse(updatedItem) : null, productIndex);
    }
  }
});

// Cancel Order / Reorder Function
function cancelOrder() {
  if (!currentOrder) {
    alert('No order selected');
    return;
  }

  if (currentOrder.status === 'Canceled') {
    // Reorder: Confirm reactivation
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Confirm Reorder</h3>
        <p>Are you sure you want to reactivate order #${currentOrder.orderNumber}?</p>
        <button id="confirmReorder">Confirm</button>
        <button id="cancelReorder">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('confirmReorder').addEventListener('click', () => {
      currentOrder.status = 'Order Placed';
      currentOrder.progress = 1; // First stage of Order Placed
      document.getElementById('statusDisplay').textContent = currentOrder.status;
      // Update button text
      document.getElementById('updateOrderBtn').textContent = 'Update Order';
      document.getElementById('cancelOrderBtn').textContent = 'Cancel Order';
      // Refresh progress bar
      renderProgressBar(currentOrder.status, progressToSubStatus[1]);
      modal.remove();
    });

    document.getElementById('cancelReorder').addEventListener('click', () => {
      modal.remove();
    });
  } else {
    // Cancel: Prevent for Shipped or Delivered
    if (['Shipped', 'Delivered'].includes(currentOrder.status)) {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <h3>Cannot Cancel Order</h3>
          <p>Sorry, your order cannot be canceled as it is ${currentOrder.status.toLowerCase()}.</p>
          <button id="closeModal">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
      document.getElementById('closeModal').addEventListener('click', () => {
        modal.remove();
      });
      return;
    }

    // Create cancellation prompt
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Confirm Cancellation</h3>
        <p>Are you sure you want to cancel order #${currentOrder.orderNumber}?</p>
        <button id="confirmCancel">Confirm</button>
        <button id="cancelCancel">Cancel</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('confirmCancel').addEventListener('click', () => {
      currentOrder.status = 'Canceled';
      currentOrder.progress = 0;
      document.getElementById('statusDisplay').textContent = currentOrder.status;
      // Update button text
      document.getElementById('updateOrderBtn').textContent = 'New Order';
      document.getElementById('cancelOrderBtn').textContent = 'Reorder';
      renderProgressBar(currentOrder.status, '');
      modal.remove();
    });

    document.getElementById('cancelCancel').addEventListener('click', () => {
      modal.remove();
    });
  }
}

// Change Address Function
function changeAddress() {
  if (!currentOrder) {
    alert('No order selected');
    return;
  }

  // Parse current address
  let street = '', city = '', state = '', zip = '', country = 'USA', customFields = currentOrder.customFields || {};
  try {
    const parts = currentOrder.address.split(', ');
    if (parts.length >= 4) {
      // Format: "Street, City, State PostalCode, Country" or "Street, City, PostalCode, Country"
      street = parts[0];
      city = parts[1];
      const stateZipCountry = parts.slice(2).join(', ');
      const stateZipParts = stateZipCountry.split(', ');
      const stateZip = stateZipParts[0].split(' ');
      if (stateZip.length > 1) {
        state = stateZip[0];
        zip = stateZip[1];
      } else {
        zip = stateZip[0];
      }
      country = stateZipParts[1] || 'USA';
    } else {
      street = currentOrder.address; // Fallback
    }
  } catch (e) {
    console.error('Address parsing error:', e);
    street = currentOrder.address;
  }

  // Get states and requirements for the country
  const states = countryStates[country] || [];
  const requiredFields = countryRequirements[country] || ['street', 'city', 'zip'];

  // Create initial modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  const isShippedOrDelivered = ['Shipped', 'Delivered'].includes(currentOrder.status);
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Change Address</h3>
      <p>Current Address: ${currentOrder.address}</p>
      ${isShippedOrDelivered ? `
        <p style="color: red;">
          Your product has already shipped! You can change your address for future orders, 
          but you must email us at americanmeattoys@gmail.com if there's an issue with your current order.
        </p>
      ` : ''}
      <button id="promptChangeAddressBtn">Change Address</button>
      <button id="keepAddressBtn">Keep Address</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('keepAddressBtn').addEventListener('click', () => {
    modal.remove();
  });

  document.getElementById('promptChangeAddressBtn').addEventListener('click', () => {
    // Generate form based on country
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Enter New Address</h3>
        <form id="newAddressForm">
          <input type="hidden" id="country" value="${country}">
          <div class="form-group">
            <label for="street">Street Address</label>
            <input type="text" id="street" value="${street}" required>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" id="city" value="${city}" required>
          </div>
          <div class="form-group" id="stateGroup" style="display: ${states.length ? 'block' : 'none'};">
            <label for="state">State/Province</label>
            <select id="state" ${states.length ? 'required' : ''}>
              <option value="">Select State/Province</option>
              ${states.map(s => `
                <option value="${s}" ${s === state ? 'selected' : ''}>${s}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label for="zip">Postal Code</label>
            <input type="text" id="zip" value="${zip}" required>
          </div>
          ${requiredFields.includes('pccc') ? `
            <div class="form-group">
              <label for="pccc">Personal Customs Clearance Code (PCCC)</label>
              <input type="text" id="pccc" value="${customFields.pccc || ''}" required>
            </div>
          ` : ''}
          <button type="submit">Submit</button>
          <button type="button" id="cancelChange">Cancel</button>
        </form>
      </div>
    `;

    // Handle form submission
    setTimeout(() => {
      const form = document.getElementById('newAddressForm');
      const cancelBtn = document.getElementById('cancelChange');
      if (!form || !cancelBtn) {
        console.error('Form or cancel button not found');
        modal.remove();
        return;
      }

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const country = document.getElementById('country').value;
        const street = document.getElementById('street').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state')?.value || '';
        const zip = document.getElementById('zip').value.trim();
        const pccc = document.getElementById('pccc')?.value.trim();

        // Validate required fields
        const requiredFields = countryRequirements[country] || ['street', 'city', 'zip'];
        for (const field of requiredFields) {
          if (field === 'street' && !street) {
            alert('Street is required');
            return;
          }
          if (field === 'city' && !city) {
            alert('City is required');
            return;
          }
          if (field === 'zip' && !zip) {
            alert('Postal code is required');
            return;
          }
          if (field === 'state' && !state && countryStates[country]?.length > 0) {
            alert('State/Province is required for this country');
            return;
          }
          if (field === 'pccc' && !pccc) {
            alert('Personal Customs Clearance Code (PCCC) is required for South Korea');
            return;
          }
        }

        // Validate PCCC format for South Korea
        if (country === 'South Korea' && pccc) {
          if (!/^P\d{12}$/.test(pccc) && !/^[A-Za-z\s]+[0-9A-Za-z-]+$/.test(pccc)) {
            alert('PCCC must be a 12-digit number prefixed with "P" (e.g., P123456789012) or a valid nationality/passport number');
            return;
          }
        }

        // Format address
        const newAddress = state ?
          `${street}, ${city}, ${state} ${zip}, ${country}` :
          `${street}, ${city}, ${zip}, ${country}`;

        // Update order
        currentOrder.address = newAddress;
        currentOrder.customFields = { ...currentOrder.customFields };
        if (country === 'South Korea' && pccc) {
          currentOrder.customFields.pccc = pccc;
        } else {
          delete currentOrder.customFields.pccc;
        }

        document.getElementById('addressDisplay').textContent = currentOrder.address;
        modal.remove();
      });

      cancelBtn.addEventListener('click', () => {
        modal.remove();
      });
    }, 0);
  });
}

function updateOrder(updatedItem = null, productIndex = null) {
  if (!currentOrder) {
    alert('Select a product to change');
    return;
  }

  if (currentOrder.status === 'Canceled') {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>New Order</h3>
        <p>Select a category for your new order:</p>
        <form id="newOrderForm">
          <div class="form-group">
            <label for="category">Category</label>
            <select id="category" required>
              <option value="">Select Category</option>
              <option value="Custom Toy">Custom Toy</option>
              <option value="Accessories">Accessories</option>
              <option value="Dildos">Dildos</option>
              <option value="Ready to Ship">Ready to Ship</option>
              <option value="Meat of the Week">Meat of the Week</option>
            </select>
          </div>
          <button type="submit">Confirm</button>
          <button type="button" id="cancelNewOrder">Cancel</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('newOrderForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const category = document.getElementById('category').value;
      if (!category) {
        alert('Please select a category');
        return;
      }
      if (category === 'Custom Toy') {
        const queryParams = new URLSearchParams({
          orderNumber: currentOrder.orderNumber,
          email: currentOrder.email
        });
        const targetUrl = `/custom-order-page/public/index.html?${queryParams.toString()}`;console.log('Redirecting to:', targetUrl); // Debug log
window.location.href = targetUrl;
      } else {
        alert(`You selected: ${category}`);
      }
      modal.remove();
    });

    document.getElementById('cancelNewOrder').addEventListener('click', () => {
      modal.remove();
    });
    return;
  }

  if (currentOrder.status !== 'Order Placed') {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Update Order</h3>
        <p>Sorry, your order is already in progress.</p>
        <button id="closeModal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeModal').addEventListener('click', () => {
      modal.remove();
    });
    return;
  }

  // Queue updatedItem if provided
  if (updatedItem && productIndex !== null) {
    const urlParams = new URLSearchParams(window.location.search);
    const applyToAll = urlParams.get('applyToAll') === 'true';
    let groupIndices = [];
    try {
      groupIndices = JSON.parse(urlParams.get('groupIndices')) || [parseInt(productIndex)];
    } catch (e) {
      console.error('Error parsing groupIndices:', e);
      groupIndices = [parseInt(productIndex)];
    }

    // Apply updatedItem to all indices if applyToAll is true, otherwise only to the selected index
    if (applyToAll) {
      // Deep copy the updatedItem for each index to ensure individual updates
      groupIndices.forEach(idx => {
        pendingChanges[idx] = JSON.parse(JSON.stringify(updatedItem));
      });
    } else {
      pendingChanges[productIndex] = updatedItem;
    }
  }

  // Group items for dropdown with normalization, considering pending changes
  const groupedItems = [];
  currentOrder.items.forEach((item, idx) => {
    if (!item || !item.product || !item.options) {
      console.warn(`Invalid item at index ${idx}:`, item);
      return;
    }
    // Apply pending changes if they exist for this item
    const displayItem = pendingChanges[idx] || item;
    // Normalize options by ensuring all expected keys exist
    const expectedOptions = productOptionsMap[displayItem.product] || [];
    const normalizedOptions = {};
    expectedOptions.forEach(key => {
      normalizedOptions[key] = displayItem.options[key] !== undefined ? displayItem.options[key] : 'none';
    });
    // Create a sorted version of options for comparison
    const sortedOptions = {};
    Object.keys(normalizedOptions)
      .sort()
      .forEach(key => {
        sortedOptions[key] = normalizedOptions[key];
      });

    const existingGroup = groupedItems.find(group =>
      group.product === displayItem.product &&
      JSON.stringify(group.sortedOptions) === JSON.stringify(sortedOptions)
    );
    if (existingGroup) {
      existingGroup.quantity += 1;
      existingGroup.indices.push(idx);
    } else {
      groupedItems.push({
        product: displayItem.product,
        options: { ...displayItem.options },
        sortedOptions,
        quantity: 1,
        indices: [idx]
      });
    }
  });

  // Create modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content update-modal-content">
      <h3>Update Order #${currentOrder.orderNumber}</h3>
      <p>Select the product to update${Object.keys(pendingChanges).length > 0 ? ' or confirm pending changes:' : ':'}</p>
      <div class="modal-previews hidden">
        <div class="preview-container">
          <h4>Exterior View</h4>
          <div class="modal-preview exterior-preview"></div>
        </div>
        <div class="preview-container">
          <h4>Interior View</h4>
          <div class="modal-preview interior-preview"></div>
        </div>
      </div>
      <form id="selectProductForm">
        <div class="form-group">
          <label for="productSelect">Product</label>
          <select id="productSelect">
            <option value="">Select Product</option>
            ${groupedItems.map((group) => `
              <option value="${group.indices[0]}">${group.product.replace(/-/g, ' ').toUpperCase()} (Qty: ${group.quantity})${Object.keys(pendingChanges).some(idx => group.indices.includes(parseInt(idx))) ? ' (Pending Changes)' : ''}</option>
            `).join('')}
          </select>
        </div>
        <div class="modal-buttons">
          <button type="submit" id="makeChangesBtn">Make Changes</button>
          <button type="button" id="removeChangesBtn" style="display: none;">Remove Changes</button>
          ${Object.keys(pendingChanges).length > 0 ? `
            <button type="button" id="confirmChangesBtn">Confirm Changes</button>
          ` : ''}
        </div>
      </form>
      <button type="button" id="cancelUpdate">Cancel</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Function to load previews for the selected product
  function loadProductPreviews(selectedIndex) {
    const previewsContainer = modal.querySelector('.modal-previews');
    const exteriorPreview = modal.querySelector('.exterior-preview');
    const interiorPreview = modal.querySelector('.interior-preview');
    exteriorPreview.innerHTML = '';
    interiorPreview.innerHTML = '';

    if (selectedIndex === '') {
      previewsContainer.classList.add('hidden');
      [exteriorPreview, interiorPreview].forEach(preview => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'preview-error';
        errorDiv.textContent = 'Select a product';
        preview.appendChild(errorDiv);
      });
      return;
    }

    previewsContainer.classList.remove('hidden');

    const group = groupedItems.find(g => g.indices.includes(parseInt(selectedIndex)));
    if (!group) {
      console.error('Group not found for index:', selectedIndex);
      return;
    }
    const displayItem = pendingChanges[selectedIndex] || {
      product: group.product,
      options: { ...group.options }
    };

    const validPonyChevalSizes = ['tight', 'standard', 'large-ribbed'];
    const validOtherSizes = ['medium', 'large'];
    const validCervixDepths = ['3', '5', '7'];

    const vaginalInsert = displayItem.options.vaginalInsert && 
        (['two-hole-pony', 'two-hole-cheval'].includes(displayItem.product) 
            ? validPonyChevalSizes.includes(displayItem.options.vaginalInsert.toLowerCase()) 
            : validOtherSizes.includes(displayItem.options.vaginalInsert.toLowerCase()))
        ? displayItem.options.vaginalInsert.toLowerCase()
        : (['deer', 'dragon'].includes(displayItem.product) ? 'medium' : null);

    const analInsert = displayItem.options.analInsert && 
        (['two-hole-pony', 'two-hole-cheval'].includes(displayItem.product) 
            ? validPonyChevalSizes.includes(displayItem.options.analInsert.toLowerCase()) 
            : validOtherSizes.includes(displayItem.options.analInsert.toLowerCase()))
        ? displayItem.options.analInsert.toLowerCase()
        : null;

    const cervixDepth = displayItem.options.cervixDepth && validCervixDepths.includes(displayItem.options.cervixDepth)
        ? displayItem.options.cervixDepth
        : '3';

    const exteriorLayers = [
      { id: 'preview-body', file: `${displayItem.product}-body.svg`, color: displayItem.options.bodyColor },
      { id: 'preview-marbling', file: `${displayItem.product}-marble.svg`, color: displayItem.options.marblingColor, condition: displayItem.options.marblingColor && displayItem.options.marblingColor !== 'none' },
    ];
    const interiorLayers = [
      { id: 'preview-internal-body', file: `${displayItem.product}-body.svg`, color: displayItem.options.bodyColor, path: 'internal-view' },
      { id: 'preview-internal-marbling', file: `${displayItem.product}-marble.svg`, color: displayItem.options.marblingColor, condition: displayItem.options.marblingColor && displayItem.options.marblingColor !== 'none', path: 'internal-view' },
    ];

    const internalColor = displayItem.product === 'terlingua' ? displayItem.options.internalClitoralHood :
                         ['two-hole-pony', 'two-hole-cheval', 'two-hole-canine', 'deer', 'dragon'].includes(displayItem.product) ? displayItem.options.internalClitoral :
                         displayItem.product === 'one-hole-canine' ? displayItem.options.internals : 'none';

      if (displayItem.product === 'terlingua') {
      exteriorLayers.push(
        { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
        { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoralHood, condition: displayItem.options.internalClitoralHood && displayItem.options.internalClitoralHood !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-vat', file: `${displayItem.product}-hood.svg`, color: displayItem.options.internalClitoralHood, condition: displayItem.options.internalClitoralHood && displayItem.options.internalClitoralHood !== 'none', path: 'internal-view' },
        { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v.svg`, color: displayItem.options.internalClitoralHood, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-${cervixDepth}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
        { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoralHood, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' },
      );
    } else if (displayItem.product === 'two-hole-pony' || displayItem.product === 'two-hole-cheval') {
      exteriorLayers.push(
        { id: 'preview-full-face', file: `${displayItem.product}-full-face.svg`, color: displayItem.options.fullFace, condition: displayItem.options.fullFace && displayItem.options.fullFace !== 'none' },
        { id: 'preview-bovine-spot', file: `${displayItem.product}-bovine-spot.svg`, color: displayItem.options.bovineSpot, condition: displayItem.options.bovineSpot && displayItem.options.bovineSpot !== 'none' },
        { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-internal-full-face', file: `${displayItem.product}-full-face.svg`, color: displayItem.options.fullFace, condition: displayItem.options.fullFace && displayItem.options.fullFace !== 'none', path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: displayItem.options.internalClitoral, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
        { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoral, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
      );
    } else if (displayItem.product === 'two-hole-canine') {
      exteriorLayers.push(
        { id: 'preview-vat', file: `${displayItem.product}-vat.svg`, color: displayItem.options.vulvaAnalTeat, condition: displayItem.options.vulvaAnalTeat && displayItem.options.vulvaAnalTeat !== 'none' },
        { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-vat', file: `${displayItem.product}-teat.svg`, color: displayItem.options.vulvaAnalTeat, condition: displayItem.options.vulvaAnalTeat && displayItem.options.vulvaAnalTeat !== 'none', path: 'internal-view' },
        { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v.svg`, color: displayItem.options.internalClitoral, condition: vaginalInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-vaginal-outline', file: `${displayItem.product}-${vaginalInsert === 'large-ribbed' ? 'large' : vaginalInsert}-v-outline.svg`, color: null, condition: vaginalInsert !== null, path: 'internal-view' },
        { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internalClitoral, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
      );
    } else if (displayItem.product === 'deer') {
      exteriorLayers.push(
        { id: 'preview-vah', file: `${displayItem.product}-vah.svg`, color: displayItem.options.vulvaAnalHighlight, condition: displayItem.options.vulvaAnalHighlight && displayItem.options.vulvaAnalHighlight !== 'none' },
        { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
        { id: 'preview-tail', file: `${displayItem.product}-tail.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none', hasGradient: true },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-medium-v.svg`, color: displayItem.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true },
      );
    } else if (displayItem.product === 'dragon') {
      exteriorLayers.push(
        { id: 'preview-vh', file: `${displayItem.product}-vh.svg`, color: displayItem.options.vulvaHighlight, condition: displayItem.options.vulvaHighlight && displayItem.options.vulvaHighlight !== 'none' },
        { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none', hasGradient: true },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internalClitoral, condition: displayItem.options.internalClitoral && displayItem.options.internalClitoral !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-internal-insert-vaginal', file: `${displayItem.product}-medium-v.svg`, color: displayItem.options.internalClitoral, condition: true, path: 'internal-view', hasGradient: true },
      );
    } else if (displayItem.product === 'one-hole-canine') {
      exteriorLayers.push(
        { id: 'preview-fur', file: `${displayItem.product}-fur.svg`, color: displayItem.options.fur, condition: displayItem.options.fur && displayItem.options.fur !== 'none' },
        { id: 'preview-anal-ring', file: `${displayItem.product}-anal-ring.svg`, color: displayItem.options.analRing, condition: displayItem.options.analRing && displayItem.options.analRing !== 'none' },
        { id: 'preview-internals', file: `${displayItem.product}-internals.svg`, color: displayItem.options.internals, condition: displayItem.options.internals && displayItem.options.internals !== 'none' }
      );
      interiorLayers.push(
        { id: 'preview-internal-insert-anal', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a.svg`, color: displayItem.options.internals, condition: analInsert !== null, path: 'internal-view', hasGradient: true },
        { id: 'preview-internal-anal-outline', file: `${displayItem.product}-${analInsert === 'large-ribbed' ? 'large' : analInsert}-a-outline.svg`, color: null, condition: analInsert !== null, path: 'internal-view' }
      );
    }

    exteriorLayers.push({ id: 'preview-outline', file: `${displayItem.product}-outline.svg`, color: null });
    interiorLayers.push({ id: 'preview-outline', file: `${displayItem.product}-body-outline.svg`, color: null, path: 'internal-view' });

    exteriorLayers.forEach(layer => {
      if (!layer.condition || layer.condition === true) {
        const svg = document.createElement('object');
        svg.type = 'image/svg+xml';
        svg.className = 'preview-layer';
        svg.id = `update-exterior-${selectedIndex}-${layer.id}`;
        svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
        exteriorPreview.appendChild(svg);

        if (layer.color) {
          svg.addEventListener('load', () => applySvgColor(svg, layer.color, layer.hasGradient, selectedIndex));
        }
      }
    });

    interiorLayers.forEach(layer => {
      if (!layer.condition || layer.condition === true) {
        const svg = document.createElement('object');
        svg.type = 'image/svg+xml';
        svg.className = 'preview-layer';
        svg.id = `update-interior-${selectedIndex}-${layer.id}`;
        svg.data = `../../src/assets/images/${layer.path || 'external-view'}/${layer.file}`;
        interiorPreview.appendChild(svg);

        if (layer.color) {
          svg.addEventListener('load', () => applySvgColor(svg, layer.color, layer.hasGradient, selectedIndex));
        }
      }
    });

    [exteriorPreview, interiorPreview].forEach(preview => {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'preview-error';
      errorDiv.textContent = 'No Preview';
      errorDiv.style.display = 'none';
      preview.appendChild(errorDiv);

      let loadedCount = 0;
      const svgs = preview.querySelectorAll('.preview-layer');
      svgs.forEach(svg => {
        svg.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === svgs.length) {
            errorDiv.style.display = 'none';
          }
        }, { once: true });
        svg.addEventListener('error', () => {
          errorDiv.style.display = 'block';
        }, { once: true });
      });
    });
  }

  // Function to format option names
  function formatOptionName(key) {
    return key
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  // Function to format option values
  function formatOptionValue(value) {
    if (!value || value.toLowerCase() === 'none') return 'None';
    return value
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  function applyChanges() {
    console.log('Applying pending changes:', JSON.stringify(pendingChanges, null, 2));
  
    // Group pending changes by product and options
    const groupedPendingChanges = {};
    Object.entries(pendingChanges).forEach(([index, updatedItem]) => {
      const key = `${updatedItem.product}:${JSON.stringify(updatedItem.options)}`;
      if (!groupedPendingChanges[key]) {
        groupedPendingChanges[key] = {
          product: updatedItem.product,
          options: { ...updatedItem.options },
          indices: []
        };
      }
      groupedPendingChanges[key].indices.push(parseInt(index));
    });
  
    // Apply changes for each group
    Object.values(groupedPendingChanges).forEach(group => {
      // Normalize and sort options
      if (['deer', 'dragon'].includes(group.product)) {
        group.options.vaginalInsert = group.options.vaginalInsert || 'medium';
      }
      const expectedOptions = productOptionsMap[group.product] || [];
      const normalizedOptions = {};
      expectedOptions.forEach(key => {
        normalizedOptions[key] = group.options[key] !== undefined ? group.options[key] : 'none';
      });
      const sortedOptions = {};
      Object.keys(normalizedOptions)
        .sort()
        .forEach(key => {
          sortedOptions[key] = normalizedOptions[key];
        });
  
      // Update all items in the group
      const updatedItem = {
        product: group.product,
        options: sortedOptions
      };
      group.indices.forEach(index => {
        // Ensure index is within bounds
        if (index >= currentOrder.items.length) {
          currentOrder.items.push(JSON.parse(JSON.stringify(updatedItem)));
        } else {
          currentOrder.items[index] = JSON.parse(JSON.stringify(updatedItem));
        }
      });
    });
  
    // Update committedItems to match currentOrder.items
    committedItems = {};
    currentOrder.items.forEach((item, index) => {
      committedItems[index] = JSON.parse(JSON.stringify(item));
    });
    console.log('Updated committedItems:', JSON.stringify(committedItems, null, 2));
  
    // Clear pending changes
    pendingChanges = {};
  
    // Update the global orders array
    const orderIndex = orders.findIndex(o => o.orderNumber === currentOrder.orderNumber && o.email === currentOrder.email);
    if (orderIndex !== -1) {
      orders[orderIndex] = currentOrder;
      console.log('Updated global orders array:', JSON.stringify(orders[orderIndex], null, 2));
    }
  
    // Trigger form submission to refresh order details with updated grouping
    const event = new Event('submit', { bubbles: true, cancelable: true });
    document.getElementById('orderForm').dispatchEvent(event);
  
    // Clear URL query parameters
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  setTimeout(() => {
    const productSelect = document.getElementById('productSelect');
    const removeChangesBtn = document.getElementById('removeChangesBtn');
    const cancelUpdateBtn = document.getElementById('cancelUpdate');

    if (!productSelect || !removeChangesBtn || !cancelUpdateBtn) {
      console.error('Modal elements not found');
      modal.remove();
      return;
    }

    // Ensure the selected product is highlighted in the dropdown
    if (productIndex !== null) {
      productSelect.value = productIndex;
      loadProductPreviews(productIndex);
      if (pendingChanges[productIndex]) {
        removeChangesBtn.style.display = 'inline-block';
      }
    } else {
      loadProductPreviews('');
    }

    productSelect.addEventListener('change', () => {
      const selectedIndex = productSelect.value;
      loadProductPreviews(selectedIndex);
      removeChangesBtn.style.display = selectedIndex && pendingChanges[selectedIndex] ? 'inline-block' : 'none';
    });

    document.getElementById('selectProductForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedIndex = productSelect.value;
      if (selectedIndex === '') {
        alert('Please select a product');
        return;
      }

      const group = groupedItems.find(g => g.indices.includes(parseInt(selectedIndex)));
      const item = currentOrder.items[selectedIndex];

      if (group.quantity > 1) {
        const choiceModal = document.createElement('div');
        choiceModal.className = 'modal';
        choiceModal.innerHTML = `
          <div class="modal-content changes-modal-content">
            <h3>Update ${item.product.replace(/-/g, ' ').toUpperCase()} (Qty: ${group.quantity})</h3>
            <p>Do you want to apply changes to all ${group.quantity} identical products or just one?</p>
            <div class="changes-modal-buttons">
              <button id="changeAll">All (${group.quantity})</button>
              <button id="changeOne">One</button>
              <button id="cancelChoice">Cancel</button>
            </div>
          </div>
        `;
        document.body.appendChild(choiceModal);

        document.getElementById('changeAll').addEventListener('click', () => {
          const queryParams = new URLSearchParams({
            orderNumber: currentOrder.orderNumber,
            email: currentOrder.email,
            product: item.product,
            productIndex: selectedIndex,
            applyToAll: 'true',
            groupIndices: JSON.stringify(group.indices),
            pendingChanges: JSON.stringify(pendingChanges),
            ...item.options
          });
          const targetUrl = `/custom-order-page/public/index.html?${queryParams.toString()}`;console.log('Redirecting to:', targetUrl); // Debug log
window.location.href = targetUrl;
          choiceModal.remove();
          modal.remove();
        });

        document.getElementById('changeOne').addEventListener('click', () => {
          const queryParams = new URLSearchParams({
            orderNumber: currentOrder.orderNumber,
            email: currentOrder.email,
            product: item.product,
            productIndex: selectedIndex,
            applyToAll: 'false',
            groupIndices: JSON.stringify([parseInt(selectedIndex)]),
            pendingChanges: JSON.stringify(pendingChanges),
            ...item.options
          });
          const targetUrl = `/custom-order-page/public/index.html?${queryParams.toString()}`;console.log('Redirecting to:', targetUrl); // Debug log
window.location.href = targetUrl;
          choiceModal.remove();
          modal.remove();
        });

        document.getElementById('cancelChoice').addEventListener('click', () => {
          choiceModal.remove();
        });
      } else {
        const queryParams = new URLSearchParams({
          orderNumber: currentOrder.orderNumber,
          email: currentOrder.email,
          product: item.product,
          productIndex: selectedIndex,
          applyToAll: 'false',
          groupIndices: JSON.stringify([parseInt(selectedIndex)]),
          pendingChanges: JSON.stringify(pendingChanges),
          ...item.options
        });
        const targetUrl = `/custom-order-page/public/index.html?${queryParams.toString()}`;console.log('Redirecting to:', targetUrl); // Debug log
window.location.href = targetUrl;
        modal.remove();
      }
    });

    const confirmChangesBtn = document.getElementById('confirmChangesBtn');
    if (confirmChangesBtn) {
      confirmChangesBtn.addEventListener('click', () => {
        const changesModal = document.createElement('div');
        changesModal.className = 'modal';
      
        let hasAddedOptions = false;
        let hasRemovedOptions = false;
        const changesList = [];
      
        // Group pending changes by product and options
        const groupedPendingChanges = {};
        Object.entries(pendingChanges).forEach(([index, updatedItem]) => {
          const key = `${updatedItem.product}:${JSON.stringify(updatedItem.options)}`;
          if (!groupedPendingChanges[key]) {
            groupedPendingChanges[key] = {
              product: updatedItem.product,
              options: { ...updatedItem.options },
              indices: [],
              quantity: 0
            };
          }
          groupedPendingChanges[key].indices.push(parseInt(index));
          groupedPendingChanges[key].quantity += 1;
        });
      
        // Detect added or removed items
        const pendingIndices = Object.keys(pendingChanges).map(idx => parseInt(idx));
        const committedIndices = Object.keys(committedItems).map(idx => parseInt(idx));
        const maxCurrentIndex = currentOrder.items.length - 1;
      
        // Added items: indices in pendingChanges that exceed currentOrder.items.length
        const addedIndices = pendingIndices.filter(idx => idx > maxCurrentIndex);
      
        // Removed items: indices in committedItems that are not in pendingChanges and within currentOrder.items bounds
        const removedIndices = committedIndices.filter(idx => idx <= maxCurrentIndex && !pendingIndices.includes(idx));
      
        // Handle added items
        addedIndices.forEach(idx => {
          const addedItem = pendingChanges[idx];
          const productName = addedItem.product.replace(/-/g, ' ').toUpperCase();
          changesList.push({
            productName,
            changes: [{
              text: `Item added x 1`,
              message: `Additional charges will be added for this item.`,
              type: 'added'
            }]
          });
          hasAddedOptions = true;
        });
      
        // Handle removed items
        removedIndices.forEach(idx => {
          const removedItem = committedItems[idx];
          const productName = removedItem.product.replace(/-/g, ' ').toUpperCase();
          changesList.push({
            productName,
            changes: [{
              text: `Item removed x 1`,
              message: `You'll receive a refund for this item.`,
              type: 'removed'
            }]
          });
          hasRemovedOptions = true;
        });
      
        // Handle option changes for existing items
        Object.values(groupedPendingChanges).forEach(group => {
          // Skip if all indices are for added items
          if (group.indices.every(idx => addedIndices.includes(idx))) {
            return;
          }
      
          const productName = group.product.replace(/-/g, ' ').toUpperCase();
          const productChanges = [];
      
          // Use the first index to get the original item
          const firstIndex = group.indices.find(idx => idx <= maxCurrentIndex) || group.indices[0];
          const originalItem = committedItems[firstIndex] || currentOrder.items[firstIndex];
      
          // Normalize options for both pending and original item
          const expectedOptions = productOptionsMap[group.product] || [];
          const normalizedPendingOptions = {};
          const normalizedOriginalOptions = {};
          expectedOptions.forEach(key => {
            normalizedPendingOptions[key] = group.options[key] !== undefined ? group.options[key] : 'none';
            normalizedOriginalOptions[key] = originalItem.options[key] !== undefined ? originalItem.options[key] : 'none';
          });
      
          Object.entries(normalizedPendingOptions).forEach(([key, newValue]) => {
            // Skip vaginalInsert for deer/dragon as it's fixed
            if (key === 'vaginalInsert' && ['deer', 'dragon'].includes(group.product)) {
              return;
            }
            const oldValue = normalizedOriginalOptions[key];
            const newValueLower = typeof newValue === 'string' ? newValue.toLowerCase() : newValue;
            const oldValueLower = typeof oldValue === 'string' ? oldValue.toLowerCase() : oldValue;
      
            if (oldValueLower !== newValueLower) {
              const formattedKey = formatOptionName(key);
              const formattedOldValue = formatOptionValue(oldValue);
              const formattedNewValue = formatOptionValue(newValue);
      
              if (oldValueLower && oldValueLower !== 'none' && newValueLower === 'none') {
                productChanges.push({
                  text: `${formattedKey} removed x ${group.quantity}`,
                  message: `You'll receive a refund for these changes.`,
                  type: 'removed'
                });
                hasRemovedOptions = true;
              } else if ((!oldValueLower || oldValueLower === 'none') && newValueLower && newValueLower !== 'none') {
                productChanges.push({
                  text: `${formattedKey} added: ${formattedNewValue} x ${group.quantity}`,
                  message: `Additional charges will be added with these changes.`,
                  type: 'added'
                });
                hasAddedOptions = true;
              } else if (oldValueLower && newValueLower && oldValueLower !== 'none' && newValueLower !== 'none') {
                productChanges.push({
                  text: `${formattedKey} changed from ${formattedOldValue} to ${formattedNewValue} x ${group.quantity}`,
                  message: null,
                  type: 'changed'
                });
              }
            }
          });
      
          if (productChanges.length > 0) {
            changesList.push({ productName, changes: productChanges });
          }
        });
      
        const costMessage = !hasAddedOptions && !hasRemovedOptions 
          ? '<div class="cost-message">These changes will not impact cost.</div>'
          : '';
        const buttons = hasAddedOptions
          ? `
            <button type="button" id="cancelChanges">Cancel</button>
            <button type="button" id="checkOutChanges">Check Out</button>
          `
          : `
            <button type="button" id="cancelChanges">Cancel</button>
            <button type="button" id="applyChanges">Apply Changes</button>
          `;
      
        changesModal.innerHTML = `
          <div class="modal-content changes-modal-content">
            <h3>Review Changes</h3>
            <div class="changes-list">
              ${changesList.length > 0 ? changesList.map(product => `
                <div>
                  <h4>${product.productName}</h4>
                  ${product.changes.map(change => `
                    <div class="change-item">
                      <span>${change.text}</span>
                      ${change.message ? `<span class="change-message">${change.message}</span>` : ''}
                    </div>
                  `).join('')}
                </div>
              `).join('') : '<p>No changes to review.</p>'}
            </div>
            ${costMessage}
            <div class="changes-modal-buttons">
              ${buttons}
            </div>
          </div>
        `;
        document.body.appendChild(changesModal);
      
        document.getElementById('cancelChanges').addEventListener('click', () => {
          changesModal.remove();
        });
      
        const applyChangesBtn = document.getElementById('applyChanges');
        if (applyChangesBtn) {
          applyChangesBtn.addEventListener('click', () => {
            applyChanges();
            alert('Changes applied successfully!');
            changesModal.remove();
            modal.remove();
          });
        }
      
        const checkOutChangesBtn = document.getElementById('checkOutChanges');
        if (checkOutChangesBtn) {
          checkOutChangesBtn.addEventListener('click', () => {
            applyChanges();
            alert('Changes applied successfully! Proceeding to checkout...');
            changesModal.remove();
            modal.remove();
          });
        }
      });
    }

    removeChangesBtn.addEventListener('click', () => {
      const selectedIndex = productSelect.value;
      if (selectedIndex && pendingChanges[selectedIndex]) {
        const group = groupedItems.find(g => g.indices.includes(parseInt(selectedIndex)));
        if (group.quantity > 1 && group.indices.every(idx => pendingChanges[idx])) {
          const choiceModal = document.createElement('div');
          choiceModal.className = 'modal';
          choiceModal.innerHTML = `
            <div class="modal-content changes-modal-content">
              <h3>Remove Changes for ${group.product.replace(/-/g, ' ').toUpperCase()} (Qty: ${group.quantity})</h3>
              <p>Do you want to remove changes for all ${group.quantity} identical products or just one?</p>
              <div class="changes-modal-buttons">
                <button id="removeAll">All (${group.quantity})</button>
                <button id="removeOne">One</button>
                <button id="cancelRemove">Cancel</button>
              </div>
            </div>
          `;
          document.body.appendChild(choiceModal);

          document.getElementById('removeAll').addEventListener('click', () => {
            group.indices.forEach(idx => {
              delete pendingChanges[idx];
            });
            alert('Pending changes removed for all identical products.');
            choiceModal.remove();
            modal.remove();
            updateOrder(null, parseInt(selectedIndex));
          });

          document.getElementById('removeOne').addEventListener('click', () => {
            delete pendingChanges[selectedIndex];
            alert('Pending changes removed for the selected product.');
            choiceModal.remove();
            modal.remove();
            updateOrder(null, parseInt(selectedIndex));
          });

          document.getElementById('cancelRemove').addEventListener('click', () => {
            choiceModal.remove();
          });
        } else {
          delete pendingChanges[selectedIndex];
          alert('Pending changes removed for the selected product.');
          modal.remove();
          updateOrder(null, parseInt(selectedIndex));
        }
      } else {
        alert('No pending changes to remove for the selected product.');
      }
    });

    cancelUpdateBtn.addEventListener('click', () => {
      modal.remove();
      window.history.replaceState({}, document.title, window.location.pathname);
    });
  }, 0);
}

function renderProgressBar(status, subStatus) {
  const stages = [
    { name: 'Order Placed', subStages: ['green-1', 'green-2', 'yellow-1', 'yellow-2', 'red'] },
    { name: 'In Production', subStages: [] },
    { name: 'Shipped', subStages: [] },
    { name: 'Delivered', subStages: [] }
  ];

  const progressBar = document.getElementById('progressBar');
  progressBar.innerHTML = '';

  stages.forEach((stage, index) => {
    const isActive = status === stage.name || stages.findIndex(s => s.name === status) > index;
    const div = document.createElement('div');
    div.className = 'stage';

    const label = document.createElement('div');
    label.className = 'stage-label';
    label.textContent = stage.name;
    div.appendChild(label);

    const bar = document.createElement('div');
    bar.className = 'bar';
    if (stage.name === 'Order Placed' && status === 'Order Placed') {
      stage.subStages.forEach((sub, i) => {
        const subDiv = document.createElement('div');
        subDiv.className = 'sub-bar';
        subDiv.style.width = `${100 / stage.subStages.length}%`;
        const subActive = subStatus === sub || stage.subStages.indexOf(subStatus) > i;
        if (subActive) {
          subDiv.className += sub.includes('green') ? ' green' : sub.includes('yellow') ? ' yellow' : ' red';
        }
        bar.appendChild(subDiv);
      });
    } else {
      // Apply short bar styling for In Production, Shipped, Delivered
      if (['In Production', 'Shipped', 'Delivered'].includes(stage.name)) {
        bar.className += ' short-bar';
        if (isActive && status !== 'Canceled') {
          bar.className += ' red checkmark';
        } else if (status === 'Canceled') {
          bar.className += ' gray';
        }
      } else {
        bar.className += isActive && status !== 'Canceled' ? ' red' : status === 'Canceled' ? ' gray' : '';
      }
    }
    div.appendChild(bar);
    progressBar.appendChild(div);
  });
}