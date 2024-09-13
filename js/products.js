var ul = document.getElementById("ul_pr");
var totalPrice = 0;

function add(id) {
    // Split product name and price from the ID
    var productDetails = id.split('||');
    var productName = productDetails[0].trim();
    var productPrice = parseInt(productDetails[1].replace('Rs.', '').trim());

    // Create a new list item
    var li_new = document.createElement("li");
    var li_inp = document.createTextNode(productName + " - Rs. " + productPrice);
    li_new.appendChild(li_inp);

    // Add delete button
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = function() {
        ul.removeChild(li_new);
        totalPrice -= productPrice;
        updateTotalPrice();
    };
    li_new.appendChild(delBtn);

    // Add the list item to the cart
    ul.appendChild(li_new);
    ul.appendChild(document.createElement("br"));

    // Update total price
    totalPrice += productPrice;
    updateTotalPrice();

    // Show "Added to Cart" message
    showAddedToCartMessage();
}

// Function to update total price
function updateTotalPrice() {
    var cartHeading = document.querySelector(".head-of-cart");
    cartHeading.innerHTML = "Your Cart (Total Price: Rs. " + totalPrice + ")";
}

// Function to show "Added to Cart" message
function showAddedToCartMessage() {
    var messageBox = document.getElementById("cart-message");
    messageBox.style.display = "block";
    setTimeout(function() {
        messageBox.style.display = "none";
    }, 2000);
}

// Function to empty the cart
window.emptyList = function () {
    ul.innerHTML = "";
    totalPrice = 0;
    updateTotalPrice();
};
