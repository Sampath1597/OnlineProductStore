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

// Search Products (Fixing case sensitivity & ensuring smooth filtering)
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase().trim();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h2").innerText.toLowerCase();
        product.style.display = productName.includes(input) ? "block" : "none";
    });
}

// Add to Cart Functionality (Ensure cart updates dynamically)
let cart = [];

function addToCart(product) {
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart)); // Saving cart items
    alert(product + " added to cart!");
}

// Firebase Authentication
function signUp() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter a valid email and password.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert("Welcome, " + user.email + "! Sign-Up Successful.");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

function signIn() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            alert("Welcome back, " + user.email + "! You are now signed in.");
            document.getElementById("auth-form").style.display = "none"; // Hide login form after login
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

// Check if User is Signed In Automatically
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector(".signin-btn").innerText = "Welcome, " + user.email;
    }
});

// Logout Functionality (Optional)
function signOut() {
    firebase.auth().signOut().then(() => {
        alert("You have been signed out.");
        document.querySelector(".signin-btn").innerText = "Sign In";
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}
