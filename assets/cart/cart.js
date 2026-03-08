// assets/cart/cart.js

function openCart() {
    const overlay = document.getElementById("cart-overlay");
    const container = document.getElementById("cart-container");

    container.innerHTML = `
        <div class="cart-page">
            <div class="cart-page-header">
                <h1>Cart</h1>
                <button class="cart-close" onclick="closeCart()">×</button>
            </div>
            <div class="cart-page-body"></div>
        </div>
    `;

    overlay.style.display = "flex";
}

function closeCart() {
    const overlay = document.getElementById("cart-overlay");
    const container = document.getElementById("cart-container");

    overlay.style.display = "none";
    container.innerHTML = "";
}

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", e => {
    const page = document.querySelector(".cart-page");
    const overlay = document.getElementById("cart-overlay");

    if (page && overlay.style.display === "flex" && !page.contains(e.target)) {
        closeCart();
    }
});
