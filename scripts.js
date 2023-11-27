const cart = [];
const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `${item.product} - $${item.price}`;
        cartItemsElement.appendChild(itemElement);
        total += item.price;
    });

    cartTotalElement.textContent = total.toFixed(2);
}
