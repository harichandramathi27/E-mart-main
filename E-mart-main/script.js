// Product data
const products = [{
        id: 1,
        name: "Fresh Apples",
        price: 2.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 1.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Fresh Carrots",
        price: 1.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Whole Milk",
        price: 3.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Orange Juice",
        price: 4.99,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Fresh Strawberries",
        price: 3.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Red Grapes",
        price: 4.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Fresh Tomatoes",
        price: 2.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1546104474-dfb34282e760?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Green Bell Peppers",
        price: 1.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1509377244-dd5d1e09065b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Broccoli",
        price: 2.29,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Greek Yogurt",
        price: 4.49,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Cheese Block",
        price: 5.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Coca Cola",
        price: 1.99,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Green Tea",
        price: 3.49,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Sparkling Water",
        price: 2.49,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Mangoes",
        price: 2.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Cucumber",
        price: 1.29,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        name: "Butter",
        price: 3.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        name: "Smoothie",
        price: 4.99,
        category: "beverages",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        name: "Watermelon",
        price: 5.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Cart data
let cart = [];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display products
function displayProducts(category = 'all') {
    const filteredProducts = category === 'all' ?
        products :
        products.filter(product => product.category === category);

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <a href="product-details.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="event.preventDefault(); addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </a>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showNotification(`${product.name} added to cart!`);
}

// Update cart
function updateCart() {
    // Update cart items display
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
        </div>
    `).join('');

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);

    // Update cart count
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        cart = cart.filter(item => item.id !== productId);
    } else {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
        }
    }
    updateCart();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Cart modal
document.querySelector('.cart-icon').addEventListener('click', () => {
    cartModal.style.display = 'block';
});

document.querySelector('.close-cart').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close cart modal when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Filter products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter products
        displayProducts(button.dataset.category);
    });
});

// Checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    showNotification('Thank you for your purchase!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    showNotification('Thank you for your message! We will get back to you soon.');

    // Reset the form
    document.getElementById('contactForm').reset();

    return false;
}

// Product Details Page Functions
function loadProductDetails() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Update product details
    document.getElementById('product-main-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-price').textContent = product.price.toFixed(2);
    document.getElementById('product-description').textContent = getProductDescription(product);
}

function getProductDescription(product) {
    // Add detailed descriptions based on product category
    const descriptions = {
        fruits: "Fresh and juicy, hand-picked from local farms. Rich in vitamins and natural goodness.",
        vegetables: "Farm-fresh vegetables, carefully selected for the best quality and nutritional value.",
        dairy: "Premium dairy products from grass-fed cows, ensuring the highest quality.",
        beverages: "Refreshing drinks made with natural ingredients, perfect for any occasion."
    };
    return descriptions[product.category] || "High-quality product from E MART.";
}

function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newValue = parseInt(quantityInput.value) + change;
    newValue = Math.max(1, Math.min(10, newValue)); // Limit between 1 and 10
    quantityInput.value = newValue;
}

function addToCartFromDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const quantity = parseInt(document.getElementById('quantity').value);

    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
}

function proceedToCheckout() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const quantity = parseInt(document.getElementById('quantity').value);

    // Add to cart first
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// Checkout Page Functions
function handleCheckout(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value,
        saveInfo: document.querySelector('input[name="saveInfo"]').checked
    };

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    showNotification('Order placed successfully! Thank you for shopping with us.');

    // Clear cart
    cart = [];
    updateCart();

    // Redirect to home page after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);

    return false;
}

function updateOrderSummary() {
    const summaryItems = document.getElementById('summary-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    // Display cart items
    summaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <div class="item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            </div>
            <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.00;
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    // Update summary
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Initialize page-specific functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products page
    if (document.getElementById('products-container')) {
        displayProducts();

        // Initialize filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displayProducts(button.dataset.category);
            });
        });
    }

    // Initialize product details page
    if (document.querySelector('.product-details-section')) {
        loadProductDetails();
    }

    // Initialize checkout page
    if (document.querySelector('.checkout-section')) {
        updateOrderSummary();
    }

    // Initialize cart modal
    if (document.querySelector('.cart-icon')) {
        document.querySelector('.cart-icon').addEventListener('click', () => {
            cartModal.style.display = 'block';
        });

        document.querySelector('.close-cart').addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }

    // Initialize checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }
});