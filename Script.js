document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.getElementById("total-price");
    const confirmOrderButton = document.getElementById("confirm-order");

    let cart = [];

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);
        });

        totalPrice.textContent = total.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const dessert = this.parentElement;
            const name = dessert.getAttribute("data-name");
            const price = parseFloat(dessert.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    confirmOrderButton.addEventListener("click", function () {
        alert("Your order has been placed!");
        cart = [];
        updateCart();
    });
});
