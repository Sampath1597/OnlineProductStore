// Toggle Hamburger Menu
function toggleMenu() {
    let menu = document.getElementById("menu-list");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Search Products
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h2").innerText.toLowerCase();
        product.style.display = productName.includes(input) ? "block" : "none";
    });
}

// Add to Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(product + " added to cart!");
}

// Sign-In Function
function signIn() {
    alert("Sign-In functionality coming soon!");
}