// Toggle Hamburger Menu
function toggleMenu() {
    let menu = document.getElementById("menu-list");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Toggle Sign-In Form
function toggleAuth() {
    let authForm = document.getElementById("auth-form");
    authForm.style.display = authForm.style.display === "block" ? "none" : "block";
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

// Firebase Authentication
function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert("Welcome, " + user.email + "! Sign-Up Successful.");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })
        .catch((error) => {
            alert(error.message);
        });
}

function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert("Welcome back, " + user.email + "! You are now signed in.");
        })
        .catch((error) => {
            alert(error.message);
        });
}
