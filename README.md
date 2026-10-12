# Wiwi Shop 🐾 Handmade with Love • Hecho en México

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Frontend: Vanilla JS / HTML5 / CSS3](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20VanillaJS-orange)
![Design: Pusheen Aesthetic](https://img.shields.io/badge/Design-Pusheen%20Kawaii%20Aesthetic-pink)

Handcrafted artisanal merchandise, amigurumis de crochet, cat-themed jewelry, and official Cruz Azulito merchandise storefront. Built with a responsive, mobile-first design, interactive cart, WhatsApp order forwarding, and an interactive michi mini-game.

---

## Features

- **Artisanal Catalog**: Interactive product grid with category filtering (Amigurumis, Joyería Michi, Cruz Azulito, Accesorios).
- **Interactive Michi Companion**: Virtual pet widget with feeding mechanics and responsive animations.
- **Client-Side Shopping Cart**: Persistent localStorage cart management with badge indicators and real-time total calculations.
- **WhatsApp Checkout**: Generates pre-formatted order summary links directly targeting seller WhatsApp channels.
- **Kawaii Design System**: Pastel Pusheen-inspired styling with custom CSS micro-animations and typography (`Fredoka` & `Quicksand`).
- **Zero Heavy Dependencies**: Pure standard HTML5, CSS3, and modern Vanilla JavaScript.

---

## Directory Layout

```
wiwishop/
├── app.js          # Cart logic, catalog filter, state persistence, WhatsApp dispatcher
├── index.html      # Responsive storefront structure, modal templates, SEO meta
├── style.css       # Complete aesthetic stylesheet, responsive media queries, animations
├── images/         # Product vectors, SVG illustrations, brand assets
├── LICENSE         # MIT License
└── README.md       # Project documentation
```

---

## Local Usage & Deployment

This project requires no build tools or package managers. Simply serve the directory with any static HTTP server:

```bash
# Using Python
python3 -m http.server 8080

# Or using npx serve
npx serve .
```

Open `http://localhost:8080` in your browser.

---

## License & Copyright

Copyright (c) 2026 Luis Rodrigo García Hernández.  
Released under the [MIT License](LICENSE).
