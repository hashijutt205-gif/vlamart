
const hamburger = document.getElementById('hamburger');
const logo = document.getElementById('logo');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar (open / close)
function toggleSidebar() {
  sidebar.classList.toggle('open');
}

// Hamburger: OPEN + CLOSE
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSidebar();
});

// Logo: OPEN only (mobile)
logo.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    e.stopPropagation();
    sidebar.classList.add('open');
  }
});

// Click outside → close sidebar
document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target) &&
    !logo.contains(e.target)
  ) {
    sidebar.classList.remove('open');
  }
});

// Prevent sidebar clicks from closing it
sidebar.addEventListener('click', (e) => {
  e.stopPropagation();
});
/* landing page appear */
document.querySelector('.landing-cta-btn').addEventListener('click', (e) => {
  // Your animation code...
  window.location.href = 'index.html';  // Force navigation
});
/* show index page */
// Perfect smooth transition to your store
document.getElementById('vlamart-btn').addEventListener('click', function (e) {
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Store...';
  setTimeout(() => {
    window.location.href = 'index.html';  // Goes to your store!
  }, 500);
});
/* landingpage appear after refresh */
// If user did NOT come from the button, redirect to landing
if (!sessionStorage.getItem("fromLanding")) {
  window.location.href = "landing.html";
}
/* for smooth effects */
window.addEventListener("load", function () {
  const saleCards = document.querySelectorAll(".sale-card");

  saleCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show"); // trigger slide-in
    }, index * 150); // stagger each card by 150ms
  });
});

/* for cart  */
document.querySelectorAll(".add-to-cart").forEach(button => {

  button.addEventListener("click", function () {

    const card = this.closest(".sale-card");

    const product = {
      id: card.dataset.id,
      name: card.dataset.name,
      price: parseInt(card.dataset.price),
      image: card.dataset.image,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart");
  });

});
// Show message only if we're on index.html
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' ) {

    // Function to show cart message
    function showCartMessage() {
        const msg = document.getElementById('cart-message');
        if(!msg) return; // safety check
        msg.style.display = 'block';

        // Hide after 2 seconds
        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    }

    // Add event listeners to all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Show message
            showCartMessage();

            // Optional: Add your cart logic here
            // Example: addToCart(itemId);
        });
    });
}

