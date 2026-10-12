/**
 * WIWI SHOP — Interactive Client Application
 * Pusheen Shop aesthetic • Handmade with Love • Hecho en México
 */

// =============================================================================
// 1. PRODUCTS DATASET (3 Core Sections: Crochet, Jewelry, Cruz Azulito)
// =============================================================================
const PRODUCTS_DATA = [
  // --- CROCHET ---
  {
    id: 'crochet-wiwi',
    category: 'crochet',
    categoryName: 'Crochet Artesanal',
    title: 'Peluche Amigurumi Wiwi Clásico',
    priceMXN: 380,
    badge: 'Bestseller',
    badgeType: 'badge-popular',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/crochet-wiwi-plush.svg',
    description: 'Tierno gatito Wiwi tejido a mano con estambre de algodón premium hipoalergénico. Incluye cascabel suave y corazón bordado.',
    details: 'Material: 100% Algodón peinado • Relleno: Delcrón siliconado antialérgico • Altura: 16 cm • Lavable a mano.',
    stock: 8
  },
  {
    id: 'crochet-memo-keychain',
    category: 'crochet',
    categoryName: 'Crochet Artesanal',
    title: 'Llavero Amigurumi Memo el Michi',
    priceMXN: 180,
    badge: 'Favorito',
    badgeType: 'badge-handmade',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/crochet-memo-keychain.svg',
    description: 'Mini Memo para llevar a todas partes. Tejido punto por punto con sus distintivos ojos celestes y rayitas atigradas.',
    details: 'Herraje: Aro de acero inoxidable reforzado • Tamaño: 7 cm • Detalles bordados con hilo mouliné.',
    stock: 12
  },
  {
    id: 'crochet-cat-hat',
    category: 'crochet',
    categoryName: 'Crochet Artesanal',
    title: 'Gorro Pescador con Orejitas de Gato',
    priceMXN: 350,
    badge: 'Nuevo',
    badgeType: 'badge-new',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/crochet-cat-hat.svg',
    description: 'Bucket hat tejido en suave tono rosa pastel con adorables orejitas michi 3D y huellita bordada. Ajuste súper cómodo.',
    details: 'Talla: Unitalla para adultos y jóvenes • Estambre acrílico ultrasuave • Protección con estilo.',
    stock: 6
  },
  {
    id: 'crochet-paw-coasters',
    category: 'crochet',
    categoryName: 'Crochet Artesanal',
    title: 'Set de 4 Portavasos Patitas de Michi',
    priceMXN: 220,
    badge: 'Popular',
    badgeType: 'badge-handmade',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/crochet-paw-coasters.svg',
    description: 'Pack de 4 portavasos tejidos con forma de huellita felina en tonos pastel. Protegen tus mesas y añaden pura ternura a tu café.',
    details: 'Incluye: 4 piezas • Diámetro: 11 cm • Resistente al calor y lavable.',
    stock: 15
  },

  // --- JOYERÍA ---
  {
    id: 'jewelry-wiwi-necklace',
    category: 'jewelry',
    categoryName: 'Joyería con Amor',
    title: 'Collar Dije Silueta Wiwi Chapa de Oro',
    priceMXN: 340,
    badge: 'Exclusivo',
    badgeType: 'badge-popular',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/jewelry-wiwi-necklace.svg',
    description: 'Dije artesanal silueta Wiwi con corazón calado en chapa de oro de 18k de 4 capas. Delicado, brillante e hipoalergénico.',
    details: 'Cadena: 45 cm + extensión de 5 cm • Chapa de oro 18k sobre latón libre de níquel • Incluye cajita de regalo Wiwi.',
    stock: 10
  },
  {
    id: 'jewelry-cat-earrings',
    category: 'jewelry',
    categoryName: 'Joyería con Amor',
    title: 'Aretes Perla Michi & Corazón Colgante',
    priceMXN: 260,
    badge: 'Elegante',
    badgeType: 'badge-handmade',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/jewelry-cat-earrings.svg',
    description: 'Aretes colgantes con perla cultivada enmarcada por orejitas de gato y un corazón rubí de cristal facetado.',
    details: 'Poste: Plata 925 hipoalergénica • Ligereza extrema (menos de 4g el par) • Cierre de mariposa seguro.',
    stock: 9
  },
  {
    id: 'jewelry-pastel-bracelet',
    category: 'jewelry',
    categoryName: 'Joyería con Amor',
    title: 'Pulsera de Cuentas Pasteles & Dije Wiwi',
    priceMXN: 190,
    badge: 'Bestseller',
    badgeType: 'badge-handmade',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/jewelry-pastel-bracelet.svg',
    description: 'Pulsera elástica artesanal ensartada con perlas acrílicas de colores pasteles y dije metálico esmaltado grabado Wiwi.',
    details: 'Elástico de silicona reforzado • Diámetro: 17 cm ajustable • Acabado esmaltado a mano.',
    stock: 20
  },
  {
    id: 'jewelry-cat-ring',
    category: 'jewelry',
    categoryName: 'Joyería con Amor',
    title: 'Anillo Ajustable Orejitas & Huella Plata',
    priceMXN: 290,
    badge: 'Ajustable',
    badgeType: 'badge-new',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/jewelry-wiwi-necklace.svg',
    description: 'Anillo abierto ajustable con orejitas estilizadas en un extremo y una huellita con circona rosa en el otro.',
    details: 'Material: Plata ley 925 mexicana • Talla: Ajustable del número 5 al 9 • Brillo espejo.',
    stock: 7
  },

  // --- CRUZ AZULITO MERCHANDISE ---
  {
    id: 'cruz-azul-llavero-costalito',
    category: 'cruz-azulito',
    categoryName: 'Mercancía Cruz Azulito',
    title: 'Llavero de Peluche Cruz Azulito (100% Original)',
    priceMXN: 290,
    badge: '100% Original',
    badgeType: 'badge-official-cruz',
    isOfficial: true,
    handmadeText: 'Oficial Cruz Azul',
    officialNotice: 'Producto 100% original y adquirido en tiendas oficiales de Cruz Azul con holograma de autenticidad.',
    image: 'images/products/cruz-azul-costalito-1.jpg',
    images: [
      'images/products/cruz-azul-costalito-1.jpg',
      'images/products/cruz-azul-costalito-2.png',
      'images/products/cruz-azul-costalito-3.jpg'
    ],
    description: 'El entrañable y carismático Cruz Azulito de Cemento Cruz Azul en versión llavero / mini peluche con casco de constructor y guantes. ¡Producto 100% original adquirido en tiendas oficiales de Cruz Azul!',
    details: 'Autenticidad Garantizada: Producto 100% original adquirido directamente en tiendas oficiales de Cruz Azul. Incluye etiqueta oficial con holograma de seguridad del Club Deportivo Cruz Azul • Material: Felpa suave de colección • Medidas: 14 cm aprox. con gancho metálico reforzado para llaves o mochila.',
    stock: 12
  },
  {
    id: 'cruz-azulito-plush',
    category: 'cruz-azulito',
    categoryName: 'Mercancía Cruz Azulito',
    title: 'Peluche Liebre Azulito Cruz Azul Oficial',
    priceMXN: 420,
    badge: 'La Máquina',
    badgeType: 'badge-cruz',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/cruz-azulito-plush.svg',
    images: [
      'images/products/cruz-azulito-plush.svg',
      'images/products/cruz-azul-costalito-2.png'
    ],
    description: 'Nuestra adorable mascota inspirada en la Liebre de Cruz Azul. Tejida a mano con su camiseta celeste número 9 y cruz bordada.',
    details: 'Altura: 24 cm • Estambre deportivo de alta durabilidad • Escudo bordado a mano con hilo de seda.',
    stock: 10
  },
  {
    id: 'cruz-azulito-jersey',
    category: 'cruz-azulito',
    categoryName: 'Mercancía Cruz Azulito',
    title: 'Jersey Michi Cruz Azulito Colección',
    priceMXN: 290,
    badge: 'Para Mascotas',
    badgeType: 'badge-cruz',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/cruz-azulito-jersey.svg',
    images: [
      'images/products/cruz-azulito-jersey.svg',
      'images/products/cruz-azulito-michi-bandana.svg'
    ],
    description: 'Camisetita oficial para tu gato o perrito pequeño inspirada en el uniforme de Cruz Azul. Tela fresca y cómoda con el dorsal WIWI.',
    details: 'Tallas: S (gatitos hasta 3.5kg) y M (gatos hasta 6kg) • Algodón elástico respirable • No aprieta el cuello.',
    stock: 14
  },
  {
    id: 'cruz-azulito-michi-bandana',
    category: 'cruz-azulito',
    categoryName: 'Mercancía Cruz Azulito',
    title: 'Bandana Triangular Michi Cruz Azulito',
    priceMXN: 160,
    badge: 'Popular',
    badgeType: 'badge-cruz',
    handmadeText: '100% Hecho a mano',
    image: 'images/products/cruz-azulito-michi-bandana.svg',
    images: [
      'images/products/cruz-azulito-michi-bandana.svg',
      'images/products/cruz-azulito-bucket-hat.svg'
    ],
    description: 'Bandana de algodón azul marino con cuello ajustable de seguridad para gatos. Letras bordadas AZULITO y huella michi blanca.',
    details: 'Broche de seguridad anti-ahogo • Lavable a máquina • Ajuste de cuello de 18 a 30 cm.',
    stock: 25
  }
];

// Currency Exchange rate (1 USD ~ 19.5 MXN)
const USD_RATE = 19.5;
let currentCurrency = 'MXN';

// Shopping Cart State
let cart = JSON.parse(localStorage.getItem('wiwi_cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('wiwi_favs') || '[]');
let activeFilter = 'all';

// =============================================================================
// 2. INTRO ANIMATION CONTROLLER (3 Seconds Welcome)
// =============================================================================
function initIntroAnimation() {
  const introOverlay = document.getElementById('wiwi-intro-screen');
  const skipBtn = document.getElementById('intro-skip-btn');
  const replayBtn = document.getElementById('replay-intro-btn');

  if (!introOverlay) return;

  function closeIntro() {
    introOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Prevent scroll during intro
  document.body.style.overflow = 'hidden';

  // Automatically fade out after 3.0 seconds (3000 ms)
  const introTimer = setTimeout(() => {
    closeIntro();
  }, 3000);

  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearTimeout(introTimer);
      closeIntro();
    });
  }

  function triggerIntro(e) {
    if (e) e.preventDefault();
    introOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Reset timer bar animation
    const fillBar = document.querySelector('.intro-timer-fill');
    if (fillBar) {
      fillBar.style.animation = 'none';
      fillBar.offsetHeight; // trigger reflow
      fillBar.style.animation = 'timerProgress 3s linear forwards';
    }

    setTimeout(() => {
      closeIntro();
    }, 3000);
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', triggerIntro);
  }

  const footerReplayBtn = document.getElementById('footer-replay-intro');
  if (footerReplayBtn) {
    footerReplayBtn.addEventListener('click', triggerIntro);
  }
}

// Photo Reel State per Product
const productReelIndex = {};
let activeModalProdId = null;
let modalActiveImageIndex = 0;

function getProductImages(prod) {
  if (Array.isArray(prod.images) && prod.images.length > 0) {
    return prod.images;
  }
  return [prod.image];
}

function getProductActiveImageIndex(prodId) {
  return productReelIndex[prodId] || 0;
}

function changeProductReel(prodId, delta, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;
  const images = getProductImages(prod);
  if (images.length <= 1) return;

  let curIdx = productReelIndex[prodId] || 0;
  curIdx = (curIdx + delta + images.length) % images.length;
  productReelIndex[prodId] = curIdx;

  const card = document.querySelector(`.product-card[data-id="${prodId}"]`);
  if (card) {
    const imgEl = card.querySelector('.product-img');
    const counterEl = card.querySelector('.reel-count-text');
    const dots = card.querySelectorAll('.reel-dot');

    if (imgEl) {
      imgEl.classList.add('fading');
      setTimeout(() => {
        imgEl.src = images[curIdx];
        imgEl.classList.remove('fading');
      }, 100);
    }
    if (counterEl) {
      counterEl.textContent = `${curIdx + 1}/${images.length}`;
    }
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === curIdx);
    });
  }
}
window.changeProductReel = changeProductReel;

function setProductReel(prodId, targetIdx, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;
  const images = getProductImages(prod);
  if (targetIdx < 0 || targetIdx >= images.length) return;

  productReelIndex[prodId] = targetIdx;

  const card = document.querySelector(`.product-card[data-id="${prodId}"]`);
  if (card) {
    const imgEl = card.querySelector('.product-img');
    const counterEl = card.querySelector('.reel-count-text');
    const dots = card.querySelectorAll('.reel-dot');

    if (imgEl) {
      imgEl.classList.add('fading');
      setTimeout(() => {
        imgEl.src = images[targetIdx];
        imgEl.classList.remove('fading');
      }, 100);
    }
    if (counterEl) {
      counterEl.textContent = `${targetIdx + 1}/${images.length}`;
    }
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === targetIdx);
    });
  }
}
window.setProductReel = setProductReel;

// =============================================================================
// 3. PRODUCT CATALOG RENDERING & FILTERING
// =============================================================================
function formatPrice(amountMXN) {
  if (currentCurrency === 'USD') {
    const usd = (amountMXN / USD_RATE).toFixed(2);
    return `$${usd} <small>USD</small>`;
  }
  return `$${amountMXN} <small>MXN</small>`;
}

function handleCardClick(prodId, event) {
  // If clicked an interactive control (favorite, add to cart, reel arrows, dots), do not open modal
  if (
    event.target.closest('.product-fav-btn') ||
    event.target.closest('.btn-add-cart') ||
    event.target.closest('.reel-nav-btn') ||
    event.target.closest('.reel-dot') ||
    event.target.closest('button') ||
    event.target.closest('a')
  ) {
    return;
  }
  openQuickView(prodId);
}
window.handleCardClick = handleCardClick;

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const bannerEl = document.getElementById('catalog-category-banner');
  if (bannerEl) {
    if (activeFilter === 'cruz-azulito') {
      bannerEl.innerHTML = `
        <div class="cruz-official-banner">
          <div class="cruz-banner-icon"><i class="fa-solid fa-certificate"></i></div>
          <div class="cruz-banner-content">
            <strong>Mercancía Oficial La Máquina Celeste ⚽</strong>
            <span>Productos 100% originales y adquiridos en tiendas Cruz Azul. Cuentan con hologramas y etiquetas de autenticidad.</span>
          </div>
        </div>
      `;
    } else {
      bannerEl.innerHTML = '';
    }
  }

  const searchTerm = (document.getElementById('catalog-search')?.value || '').toLowerCase().trim();
  const sortOption = document.getElementById('catalog-sort')?.value || 'featured';

  // Filter products
  let filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = (activeFilter === 'all') || (prod.category === activeFilter);
    const matchesSearch = !searchTerm || 
      prod.title.toLowerCase().includes(searchTerm) || 
      prod.description.toLowerCase().includes(searchTerm) || 
      prod.categoryName.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (sortOption === 'price-low') {
    filtered.sort((a, b) => a.priceMXN - b.priceMXN);
  } else if (sortOption === 'price-high') {
    filtered.sort((a, b) => b.priceMXN - a.priceMXN);
  } else if (sortOption === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--mocha-light);">
        <i class="fa-solid fa-cat" style="font-size: 3rem; color: var(--pink-300); margin-bottom: 12px; display: block;"></i>
        <h3 style="font-size: 1.4rem; color: var(--mocha-dark);">No encontramos michi-productos con ese filtro</h3>
        <p>Prueba con otra palabra clave o haz clic en "Todos los Productos".</p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="setCatalogFilter('all')">Ver Todo el Catálogo</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const isFav = favorites.includes(prod.id);
    const images = getProductImages(prod);
    const curIdx = getProductActiveImageIndex(prod.id);
    const hasReel = images.length > 1;

    return `
      <article class="product-card" data-id="${prod.id}" onclick="handleCardClick('${prod.id}', event)" title="Haz clic para ver fotos y detalles de ${prod.title}">
        <div class="product-badges">
          <span class="product-badge ${prod.badgeType}">${prod.badge}</span>
          ${prod.isOfficial ? `
            <span class="product-badge badge-official-tag"><i class="fa-solid fa-shield-halved"></i> Tienda Cruz Azul</span>
          ` : `
            <span class="product-badge badge-handmade">🐾 ${prod.handmadeText}</span>
          `}
        </div>

        <button class="product-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${prod.id}', event)" title="Favorito" aria-label="Favorito">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="product-img-wrapper ${hasReel ? 'has-reel' : ''}">
          <img src="${images[curIdx]}" alt="${prod.title}" class="product-img" loading="lazy">
          
          ${hasReel ? `
            <button class="reel-nav-btn reel-prev" onclick="changeProductReel('${prod.id}', -1, event)" aria-label="Foto anterior" title="Foto anterior">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="reel-nav-btn reel-next" onclick="changeProductReel('${prod.id}', 1, event)" aria-label="Siguiente foto" title="Siguiente foto">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            
            <div class="reel-counter"><i class="fa-solid fa-camera"></i> <span class="reel-count-text">${curIdx + 1}/${images.length}</span></div>

            <div class="reel-dots">
              ${images.map((_, i) => `
                <button class="reel-dot ${i === curIdx ? 'active' : ''}" onclick="setProductReel('${prod.id}', ${i}, event)" aria-label="Foto ${i + 1}" title="Foto ${i + 1}"></button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="product-info">
          <span class="product-cat">${prod.categoryName}</span>
          <h3 class="product-title">${prod.title}</h3>

          ${prod.isOfficial ? `
            <div class="product-official-legend">
              <i class="fa-solid fa-shield-halved"></i>
              <span><strong>100% original</strong> y adquirido en tiendas Cruz Azul</span>
            </div>
          ` : ''}

          <p class="product-desc">${prod.description}</p>
          <div class="product-meta">
            <span class="product-price">${formatPrice(prod.priceMXN)}</span>
            <button class="btn-add-cart" onclick="addToCart('${prod.id}', 1, event)">
              <i class="fa-solid fa-bag-shopping"></i> Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function setCatalogFilter(category) {
  activeFilter = category;

  // Update tabs visual state
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  // Update department cards
  document.querySelectorAll('.dept-card').forEach(card => {
    card.classList.toggle('active', card.dataset.dept === category);
  });

  // Update nav links
  document.querySelectorAll('.nav-link[data-nav-dept]').forEach(link => {
    link.classList.toggle('active', link.dataset.navDept === category);
  });

  renderProducts();

  // Scroll smoothly to catalog if user clicked from top menu
  const catalogEl = document.getElementById('catalog-section');
  if (catalogEl && window.scrollY < 200) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// Global hook for inline onclicks
window.setCatalogFilter = setCatalogFilter;

// =============================================================================
// 4. FAVORITES & WISHLIST
// =============================================================================
function toggleFavorite(prodId, event) {
  if (event) event.stopPropagation();
  const idx = favorites.indexOf(prodId);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(prodId);
    triggerFloatingHeart(event.clientX, event.clientY);
  }
  localStorage.setItem('wiwi_favs', JSON.stringify(favorites));
  renderProducts();
  updateFavBadge();
}
window.toggleFavorite = toggleFavorite;

function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  if (badge) {
    badge.textContent = favorites.length;
    badge.style.display = favorites.length > 0 ? 'flex' : 'none';
  }
}

function triggerFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = `${x || window.innerWidth / 2}px`;
  heart.style.top = `${y || window.innerHeight / 2}px`;
  heart.style.fontSize = '1.5rem';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '99999';
  heart.style.transition = 'all 0.8s ease-out';
  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = 'translate(-50%, -60px) scale(1.4)';
    heart.style.opacity = '0';
  });

  setTimeout(() => heart.remove(), 800);
}

// =============================================================================
// 5. SHOPPING CART SYSTEM & DRAWER
// =============================================================================
function addToCart(prodId, qty = 1, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;

  const existing = cart.find(item => item.id === prodId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: prod.id, qty });
  }

  saveCart();
  renderCart();
  openCart();
  playPurrChime();
}
window.addToCart = addToCart;

function updateCartQty(prodId, delta) {
  const item = cart.find(i => i.id === prodId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== prodId);
  }

  saveCart();
  renderCart();
}
window.updateCartQty = updateCartQty;

function removeFromCart(prodId) {
  cart = cart.filter(i => i.id !== prodId);
  saveCart();
  renderCart();
}
window.removeFromCart = removeFromCart;

function saveCart() {
  localStorage.setItem('wiwi_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  if (badge) {
    badge.textContent = count;
  }
}

function renderCart() {
  const body = document.getElementById('cart-drawer-body');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const shippingFill = document.getElementById('shipping-progress-fill');
  const shippingText = document.getElementById('shipping-tracker-text');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping cart-empty-icon"></i>
        <h3>Tu canastita está vacía</h3>
        <p>Aún no has agregado michi-creaciones. ¡Navega por nuestro crochet, joyería o cosas de Cruz Azulito!</p>
        <button class="btn-primary" onclick="closeCart()" style="margin-top: 10px;">Continuar Comprando</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerHTML = formatPrice(0);
    if (shippingFill) shippingFill.style.width = '0%';
    if (shippingText) shippingText.textContent = 'Envío gratis en compras mayores a $499 MXN';
    return;
  }

  let subtotalMXN = 0;
  body.innerHTML = cart.map(item => {
    const prod = PRODUCTS_DATA.find(p => p.id === item.id);
    if (!prod) return '';
    const itemTotal = prod.priceMXN * item.qty;
    subtotalMXN += itemTotal;

    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${prod.title}</div>
          <div class="cart-item-price">${formatPrice(prod.priceMXN)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${prod.id}', -1)" aria-label="Menos">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${prod.id}', 1)" aria-label="Más">+</button>
          </div>
        </div>
        <button class="cart-item-del" onclick="removeFromCart('${prod.id}')" title="Eliminar" aria-label="Eliminar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.innerHTML = formatPrice(subtotalMXN);

  // Free shipping tracker ($499 MXN threshold)
  const freeShippingThreshold = 499;
  const pct = Math.min(100, Math.round((subtotalMXN / freeShippingThreshold) * 100));
  if (shippingFill) shippingFill.style.width = `${pct}%`;

  if (shippingText) {
    if (subtotalMXN >= freeShippingThreshold) {
      shippingText.innerHTML = '🎉 <strong>¡Felicidades! Tienes Envío Gratis en México</strong>';
    } else {
      const diff = freeShippingThreshold - subtotalMXN;
      shippingText.innerHTML = `¡Agrega <strong>${formatPrice(diff)}</strong> más para envío gratis en México!`;
    }
  }
}

function openCart() {
  document.getElementById('cart-drawer-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openCart = openCart;

function closeCart() {
  document.getElementById('cart-drawer-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}
window.closeCart = closeCart;

// =============================================================================
// 6. QUICK VIEW MODAL (Interactive Photo Reel Gallery & Authenticity Guarantee)
// =============================================================================
function openQuickView(prodId) {
  const prod = PRODUCTS_DATA.find(p => p.id === prodId);
  if (!prod) return;

  activeModalProdId = prodId;
  modalActiveImageIndex = productReelIndex[prodId] || 0;

  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  renderQuickViewModalContent(prod);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openQuickView = openQuickView;

function closeQuickView() {
  document.getElementById('quick-view-modal')?.classList.remove('active');
  document.body.style.overflow = '';
  activeModalProdId = null;
}
window.closeQuickView = closeQuickView;

function renderQuickViewModalContent(prod) {
  const content = document.getElementById('quick-view-content');
  if (!content) return;

  const images = getProductImages(prod);
  const curIdx = modalActiveImageIndex;
  const hasReel = images.length > 1;

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="modal-gallery-col">
        <div class="modal-main-img-box">
          <img id="modal-main-img" src="${images[curIdx]}" alt="${prod.title}" class="quick-view-img">
          
          ${hasReel ? `
            <button class="modal-reel-btn prev" onclick="changeModalReel(-1)" aria-label="Foto anterior" title="Foto anterior">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="modal-reel-btn next" onclick="changeModalReel(1)" aria-label="Siguiente foto" title="Siguiente foto">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="modal-reel-counter">
              <i class="fa-solid fa-camera"></i> Foto ${curIdx + 1} de ${images.length}
            </div>
          ` : ''}
        </div>

        ${hasReel ? `
          <div class="modal-thumbs-row">
            ${images.map((img, i) => `
              <button class="modal-thumb-btn ${i === curIdx ? 'active' : ''}" onclick="setModalReel(${i})" aria-label="Ver foto ${i + 1}" title="Foto ${i + 1}">
                <img src="${img}" alt="Miniatura ${i + 1}">
              </button>
            `).join('')}
          </div>
        ` : ''}

        <div style="text-align: center; margin-top: 14px;">
          ${prod.isOfficial ? `
            <div class="modal-official-badge">
              <i class="fa-solid fa-shield-halved"></i> 100% Original de Tiendas Cruz Azul
            </div>
          ` : `
            <span class="product-badge badge-handmade" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; font-size: 0.85rem;">
              ✨ 100% Hecho a Mano en México
            </span>
          `}
        </div>
      </div>

      <div class="modal-info-col" style="display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--pink-600); text-transform: uppercase;">${prod.categoryName}</span>
          ${hasReel ? `<span class="modal-reel-pill"><i class="fa-solid fa-images"></i> Reel de ${images.length} fotos</span>` : ''}
        </div>

        <h2 style="font-size: 1.6rem; margin: 4px 0 10px; color: var(--mocha-dark);">${prod.title}</h2>
        
        <div style="font-size: 1.65rem; font-weight: 800; color: var(--pink-600); margin-bottom: 12px;">
          ${formatPrice(prod.priceMXN)}
        </div>

        ${prod.isOfficial ? `
          <div class="official-authenticity-card">
            <div class="auth-icon-box">
              <i class="fa-solid fa-certificate"></i>
            </div>
            <div class="auth-text-box">
              <strong>Autenticidad 100% Garantizada</strong>
              <p>Productos 100% originales y adquiridos en tiendas cruz azul. Cuentan con hologramas y licencias oficiales del club.</p>
            </div>
          </div>
        ` : ''}

        <p style="font-size: 0.95rem; color: var(--mocha-medium); line-height: 1.6; margin-bottom: 14px;">
          ${prod.description}
        </p>

        <div style="background: var(--bg-soft-pink); border: 1px dashed var(--pink-300); border-radius: var(--radius-sm); padding: 14px; font-size: 0.85rem; color: var(--mocha-dark); margin-bottom: 20px;">
          <strong>Detalles de la pieza:</strong><br>
          ${prod.details}
        </div>

        <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="addToCart('${prod.id}'); closeQuickView();">
          <i class="fa-solid fa-bag-shopping"></i> Agregar al Carrito
        </button>
      </div>
    </div>
  `;
}

function changeModalReel(delta) {
  if (!activeModalProdId) return;
  const prod = PRODUCTS_DATA.find(p => p.id === activeModalProdId);
  if (!prod) return;
  const images = getProductImages(prod);
  modalActiveImageIndex = (modalActiveImageIndex + delta + images.length) % images.length;
  renderQuickViewModalContent(prod);
}
window.changeModalReel = changeModalReel;

function setModalReel(idx) {
  if (!activeModalProdId) return;
  const prod = PRODUCTS_DATA.find(p => p.id === activeModalProdId);
  if (!prod) return;
  const images = getProductImages(prod);
  if (idx < 0 || idx >= images.length) return;
  modalActiveImageIndex = idx;
  renderQuickViewModalContent(prod);
}
window.setModalReel = setModalReel;

// =============================================================================
// 7. CHECKOUT MODAL & SIMULATOR
// =============================================================================
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();

  const modal = document.getElementById('checkout-modal');
  const summaryBox = document.getElementById('checkout-summary-box');
  if (!modal) return;

  let totalMXN = 0;
  const itemsText = cart.map(item => {
    const p = PRODUCTS_DATA.find(x => x.id === item.id);
    if (!p) return '';
    const itemSub = p.priceMXN * item.qty;
    totalMXN += itemSub;
    return `• ${item.qty}x ${p.title} (${formatPrice(itemSub)})`;
  }).join('<br>');

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div style="background: var(--bg-cream); border: 2px solid var(--border-soft); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 16px; font-size: 0.9rem;">
        <strong>Resumen de tu pedido Wiwi Shop:</strong>
        <div style="margin: 8px 0; color: var(--mocha-medium);">${itemsText}</div>
        <div style="border-top: 1px dashed var(--border-soft); padding-top: 8px; font-weight: 800; font-size: 1.1rem; color: var(--pink-600);">
          Total a pagar: ${formatPrice(totalMXN)}
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openCheckout = openCheckout;

function closeCheckout() {
  document.getElementById('checkout-modal')?.classList.remove('active');
  document.body.style.overflow = '';
}
window.closeCheckout = closeCheckout;

function completeOrder(method) {
  const name = document.getElementById('checkout-name')?.value || 'Amigo de Wiwi';
  const address = document.getElementById('checkout-address')?.value || 'México';
  const phone = document.getElementById('checkout-phone')?.value || '55-0000-0000';

  let totalMXN = 0;
  const itemsList = cart.map(item => {
    const p = PRODUCTS_DATA.find(x => x.id === item.id);
    if (!p) return '';
    totalMXN += p.priceMXN * item.qty;
    return `${item.qty}x ${p.title}`;
  }).filter(Boolean).join(', ');

  if (method === 'whatsapp') {
    const text = encodeURIComponent(
      `¡Hola Wiwi Shop! 🐾 Quiero realizar un pedido:\n\n` +
      `📦 Productos: ${itemsList}\n` +
      `💰 Total: $${totalMXN} MXN\n` +
      `👤 Nombre: ${name}\n` +
      `📍 Dirección: ${address}\n` +
      `📞 Teléfono: ${phone}\n\n` +
      `¡Hecho a mano con amor!`
    );
    window.open(`https://wa.me/525500000000?text=${text}`, '_blank');
  }

  // Clear cart and show confirmation
  cart = [];
  saveCart();
  renderCart();
  closeCheckout();

  alert(`¡Gracias por tu compra en Wiwi Shop, ${name}! 🐾❤️\nTus michi-creaciones 100% artesanales ya se están preparando con mucho amor en México.`);
}
window.completeOrder = completeOrder;

// =============================================================================
// 8. INTERACTIVE MEMO THE CAT FEEDING ANIMATION
// =============================================================================
const MEMO_PHRASES = [
  "¡Ñom ñom ñom! ¡Ese pescadito estaba delicioso! 😻",
  "¡Miau! ¡Muchas gracias por el pollito crujiente! ❤️",
  "¡Purrrrrr...! *Memo se acurruca agradecido en tus piernas*",
  "¡Catnip! *Memo empieza a rodar de la emoción por el piso* 🌿",
  "¡Michi-sushi gourmet! Memo te da 5 estrellas como humano favorito ⭐️",
  "¡Slurp! Esa lechita estaba en su punto. ¡Memo te quiere mucho!",
  "¡Panza llena, michi contento! Memo da un bostezo adorable 🐾",
  "¡Purrr! Memo ronronea a 40 Hz de pura felicidad mexicana."
];

let memoFedCount = parseInt(localStorage.getItem('memo_fed_count') || '0', 10);
let memoHappiness = Math.min(100, memoFedCount * 10 + 20);

function initMemoStation() {
  updateMemoStats();

  const memoBox = document.getElementById('memo-cat-box');
  if (memoBox) {
    memoBox.addEventListener('click', petMemo);
  }
}

function feedMemo(treatType, event) {
  const memoBox = document.getElementById('memo-cat-box');
  const speechBubble = document.getElementById('memo-speech-text');
  const foodContent = document.getElementById('bowl-food-content');

  // Trigger audio chime
  playEatingChime();

  // Trigger particles
  spawnTreatParticles(event);

  // Animate Memo
  if (memoBox) {
    memoBox.classList.remove('eating');
    void memoBox.offsetWidth; // reflow
    memoBox.classList.add('eating');
    setTimeout(() => memoBox.classList.remove('eating'), 1800);
  }

  // Update bowl appearance based on food
  if (foodContent) {
    const foodColors = {
      fish: '#38bdf8',
      chicken: '#f59e0b',
      milk: '#ffffff',
      catnip: '#22c55e',
      sushi: '#f43f5e'
    };
    foodContent.style.background = foodColors[treatType] || '#ca8a04';
    foodContent.style.transform = 'scale(1.2)';
    setTimeout(() => { foodContent.style.transform = 'scale(1)'; }, 1000);
  }

  // Random cute phrase
  if (speechBubble) {
    const phrase = MEMO_PHRASES[Math.floor(Math.random() * MEMO_PHRASES.length)];
    speechBubble.style.opacity = '0';
    setTimeout(() => {
      speechBubble.textContent = phrase;
      speechBubble.style.opacity = '1';
    }, 200);
  }

  // Increment stats
  memoFedCount++;
  memoHappiness = Math.min(100, memoHappiness + 12);
  localStorage.setItem('memo_fed_count', memoFedCount.toString());
  updateMemoStats();
}
window.feedMemo = feedMemo;

function petMemo() {
  const memoBox = document.getElementById('memo-cat-box');
  const speechBubble = document.getElementById('memo-speech-text');

  playPurrChime();

  if (memoBox) {
    memoBox.classList.add('purring');
    setTimeout(() => memoBox.classList.remove('purring'), 1200);
  }

  spawnHeartParticlesAroundMemo();

  if (speechBubble) {
    speechBubble.textContent = "¡Prrr prrr prrr! A Memo le encantan las caricias en sus orejitas 🐱💖";
  }

  memoHappiness = Math.min(100, memoHappiness + 5);
  updateMemoStats();
}
window.petMemo = petMemo;

function updateMemoStats() {
  const countEl = document.getElementById('memo-fed-count');
  const happyEl = document.getElementById('memo-happiness-level');

  if (countEl) countEl.textContent = `${memoFedCount} premios`;
  if (happyEl) happyEl.textContent = `${memoHappiness}% Ronroneo`;
}

function spawnTreatParticles(event) {
  const layer = document.getElementById('memo-particles-layer');
  if (!layer) return;

  const items = ['✨', '❤️', '🐟', '🐾', '⭐', '💖'];
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('span');
    p.className = 'particle-item';
    p.textContent = items[Math.floor(Math.random() * items.length)];
    p.style.setProperty('--tx', `${(Math.random() - 0.5) * 120}px`);
    p.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
    p.style.top = `${60 + (Math.random() - 0.5) * 30}%`;
    layer.appendChild(p);

    setTimeout(() => p.remove(), 1200);
  }
}

function spawnHeartParticlesAroundMemo() {
  const layer = document.getElementById('memo-particles-layer');
  if (!layer) return;

  for (let i = 0; i < 5; i++) {
    const p = document.createElement('span');
    p.className = 'particle-item';
    p.textContent = '❤️';
    p.style.setProperty('--tx', `${(Math.random() - 0.5) * 90}px`);
    p.style.left = `${50 + (Math.random() - 0.5) * 30}%`;
    p.style.top = `${40 + (Math.random() - 0.5) * 20}%`;
    layer.appendChild(p);

    setTimeout(() => p.remove(), 1200);
  }
}

// Web Audio API Synthesized Chimes (Zero external dependencies!)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playEatingChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(1150, now + 0.25);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  } catch (e) {
    // Audio context may be restricted before user gesture
  }
}

function playPurrChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(660, now + 0.2);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  } catch (e) {}
}

// =============================================================================
// 9. EVENT LISTENERS & INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Intro Animation
  initIntroAnimation();

  // 2. Initial Render
  renderProducts();
  renderCart();
  updateCartBadge();
  updateFavBadge();
  initMemoStation();
  initFloatingMemoBadge();

  // 3. Search and Sort handlers
  document.getElementById('catalog-search')?.addEventListener('input', () => {
    renderProducts();
  });

  document.getElementById('catalog-sort')?.addEventListener('change', () => {
    renderProducts();
  });

  // 4. Currency switcher
  document.getElementById('currency-toggle-btn')?.addEventListener('click', () => {
    currentCurrency = (currentCurrency === 'MXN') ? 'USD' : 'MXN';
    const btn = document.getElementById('currency-toggle-btn');
    if (btn) btn.textContent = currentCurrency;
    renderProducts();
    renderCart();
  });

  // 5. Drawer open/close buttons
  document.getElementById('cart-open-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('cart-drawer-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cart-drawer-overlay') closeCart();
  });

  // 6. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    const toggleIcon = mobileToggle.querySelector('i');
    
    const closeMobileMenu = () => {
      navMenu.classList.remove('is-active');
      if (toggleIcon) {
        toggleIcon.className = 'fa-solid fa-bars';
      }
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('is-active');
      if (toggleIcon) {
        toggleIcon.className = isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close when tapping any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // 7. Newsletter discount code prompt
  document.getElementById('newsletter-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email')?.value;
    if (email) {
      alert(`¡Gracias por unirte al Michi Club de Wiwi! 🐾\nUsa el código WIWI10 para un 10% de descuento en tu primer pedido hecho a mano.`);
      document.getElementById('newsletter-email').value = '';
    } else {
      alert('Por favor ingresa tu correo electrónico 🐾');
    }
  });

  // 8. Interactive Hero Wiwi Mascot Head Turn
  const wiwiMascot = document.getElementById('hero-wiwi-interactive');
  let currentTilt = 0;

  if (wiwiMascot) {
    wiwiMascot.addEventListener('click', (e) => {
      playPurrChime();
      currentTilt = 1 - currentTilt;

      if (currentTilt === 1) {
        wiwiMascot.classList.remove('selected');
        wiwiMascot.classList.add('tilt-left');
      } else {
        wiwiMascot.classList.remove('tilt-left');
        wiwiMascot.classList.add('selected');
      }

      spawnHeartParticlesAroundWiwi(e);

      setTimeout(() => {
        wiwiMascot.classList.remove('selected', 'tilt-left');
      }, 2400);
    });
  }
});

function spawnHeartParticlesAroundWiwi(event) {
  const layer = document.getElementById('wiwi-head-sparkles');
  if (!layer) return;

  const items = ['✨', '💖', '🐾', '⭐', '🌸'];
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('span');
    p.className = 'particle-item';
    p.textContent = items[Math.floor(Math.random() * items.length)];
    p.style.setProperty('--tx', `${(Math.random() - 0.5) * 110}px`);
    p.style.left = `${50 + (Math.random() - 0.5) * 50}%`;
    p.style.top = `${30 + (Math.random() - 0.5) * 30}%`;
    layer.appendChild(p);

    setTimeout(() => p.remove(), 1200);
  }
}

// =============================================================================
// 10. GLOBAL FLOATING MEMO COMPANION BADGE
// =============================================================================
function initFloatingMemoBadge() {
  const badge = document.getElementById('floating-memo-badge');
  const feedMemo = document.getElementById('feed-memo');
  if (!badge) return;

  const updateBadgeState = () => {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // 1. Extended near top of page (scrollY <= 260px), collapses into yellow-ringed avatar on scroll
    if (scrollY > 260) {
      badge.classList.add('is-collapsed');
    } else {
      badge.classList.remove('is-collapsed');
    }

    // 2. Hide automatically when reaching #feed-memo section
    if (feedMemo) {
      const rect = feedMemo.getBoundingClientRect();
      // Hide if top of #feed-memo enters near viewport bottom (within 82% of window height) or scrolled past it
      if (rect.top <= window.innerHeight * 0.82) {
        badge.classList.add('is-hidden');
      } else {
        badge.classList.remove('is-hidden');
      }
    }
  };

  // 3. Smooth scroll down to #feed-memo on click
  badge.addEventListener('click', (e) => {
    e.preventDefault();
    if (feedMemo) {
      feedMemo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  window.addEventListener('scroll', updateBadgeState, { passive: true });
  window.addEventListener('resize', updateBadgeState, { passive: true });

  // Initial calculation
  updateBadgeState();
}
