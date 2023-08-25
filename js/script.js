$(document).ready(function() {
  var navbar = $('.navbar');
  var navbarOffset = navbar.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > navbarOffset) {
      navbar.addClass('fixed-top');
    } else {
      navbar.removeClass('fixed-top');
    }
  });

  $('.order-btn').click(function() {
    var productId = $(this).data('product-id');
    var product = products.find(p => p.id === productId);
    
    if (product) {
      console.log('Product ordered:', product);
      // Add your cart functionality here
    }
  });


  // Add to Cart Functionality
  var cart = []; // Array to store cart items

  $('.order-btn').click(function(e) {
    e.preventDefault();
    var productId = $(this).data('product-id');

    // Find the product details based on productId
    var product = findProductById(productId);

    if (product) {
      cart.push(product);
      updateCartCount();
    }
  });

  // Helper function to find product by ID (you need to define this)
  function findProductById(productId) {
    // You should implement your own logic here to find the product details
    // based on the productId. For now, let's assume you have a list of products
    // with their details in an array called 'products'.

    // Example:
    var products = [
        { id: 1, name: "Sweaters and warmers", price: 29.99 },
        { id: 2, name: "Casuals", price: 24.99 },
        { id: 3, name: "Jackets", price: 19.99 },
        // Add more products here
    ];

    return products.find(product => product.id === productId);
  }

  // Helper function to update cart count
  function updateCartCount() {
    var cartCount = cart.length;
    $('.cart-count').text(cartCount);
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
