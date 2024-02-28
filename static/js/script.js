// Example JavaScript for adding an item to the cart

function addToCart(productName, price) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let product = cart.find(p => p.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    // alert(`${productName} added to cart at $${price}`);
}
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = ''; // Clear previous contents

    cart.forEach((item, index) => {
        let row = cartItemsContainer.insertRow();
        let cellNumber = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellPrice = row.insertCell(2);
        let cellQuantity = row.insertCell(3);
        let cellTotal = row.insertCell(4);
        let cellAction = row.insertCell(5);

        cellNumber.innerHTML = index + 1;
        cellName.innerHTML = item.name;
        cellPrice.innerHTML = `$${item.price}`;
        cellQuantity.innerHTML = `
            <div class="d-flex align-items-center">
                <button class="btn btn-sm btn-outline-primary me-2" onclick="decrementQuantity(${index})">-</button>
                <span id="quantity${index}">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-primary ms-2" onclick="incrementQuantity(${index})">+</button>
            </div>
        `;
        let itemTotal = item.price * item.quantity;
        cellTotal.innerHTML = `$${itemTotal.toFixed(2)}`;
        cellAction.innerHTML = `<button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>`;

        total += itemTotal;
    });

    if (cart.length > 0) {
        let rowTotal = cartItemsContainer.insertRow();
        rowTotal.insertCell(0).colSpan = 4;
        rowTotal.insertCell(1).innerHTML = '<strong>Total</strong>';
        rowTotal.insertCell(2).innerHTML = `$${total.toFixed(2)}`;
        rowTotal.insertCell(3);
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Remove the item at index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in local storage
    displayCart(); // Refresh the page to reflect changes
}

function incrementQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += 1; // Increment quantity
    localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in local storage
    displayCart(); // Refresh the page to reflect changes
}

function decrementQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // Decrement quantity if it's greater than 1
        localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart in local storage
        displayCart(); // Refresh the page to reflect changes
    }
}

// Define a function to perform the search
function performSearch() {
    // Get the search query from the input field
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    // Get all product cards (assuming they have a common class)
    const productCards = document.querySelectorAll('.col-sm-4');

    // Loop through each product card
    productCards.forEach((card) => {
        // Get the card title
        const cardTitle = card.querySelector('.card-title');
        if (cardTitle) {
            // Convert card title to lowercase
            const cardTitleText = cardTitle.textContent.toLowerCase();

            // Check if the search query is found in the card title
            if (cardTitleText.includes(searchQuery)) {
                // If found, display the product card
                card.style.display = 'block';
            } else {
                // If not found, hide the product card
                card.style.display = 'none';
            }
        }
    });
}

// Attach a click event listener to the search button
document.getElementById('search-button').addEventListener('click', performSearch);

// Optionally, you can listen for user input in real-time (while typing)
document.getElementById('search-input').addEventListener('input', performSearch);


// Function to validate form inputs
function validateForm() {
    // Check if all required inputs are filled
    const productName = document.getElementById("product-name").value;
    const productCategory = document.getElementById("product-category").value;
    const productPrice = document.getElementById("product-price").value;

    if (productName && productCategory && productPrice) {
        // All required inputs are filled, show a message
        alert("Product submitted successfully!");
        return true; // Form will be submitted
    } else {
        // Not all required inputs are filled, prevent form submission
        alert("Please fill in all required fields.");
        return false; // Form will not be submitted
    }
}
