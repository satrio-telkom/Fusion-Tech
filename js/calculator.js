let currentInput = "0";
let currentRate = 100; // Default for Kantong Kresek
let currentCategoryName = "Kantong Kresek";
let calculated = false;

// Function to update the display
function updateDisplay() {
    document.getElementById("weight-display").textContent = currentInput;
    calculatePrice();
}

// Function to calculate price
function calculatePrice() {
    const weight = parseFloat(currentInput) || 0;
    const price = weight * currentRate;
    document.getElementById("price-display").textContent = "Rp " + price.toLocaleString('id-ID');
}

// Function to append number
function appendNumber(num) {
    if (calculated) {
        currentInput = "0";
        calculated = false;
    }
    
    if (currentInput === "0") {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay();
}

// Function to append decimal
function appendDecimal() {
    if (calculated) {
        currentInput = "0";
        calculated = false;
    }
    
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Function to delete last number
function deleteNumber() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

// Function to clear all
function clearAll() {
    currentInput = "0";
    updateDisplay();
}

function Jual() {
    // Get the selected category name
    const productName = document.getElementById("selected-category").textContent.trim();

    // Get the calculated price
    const priceDisplay = document.getElementById("price-display").textContent.trim();
    let productPrice = priceDisplay.replace("Rp ", "").replace(/\./g, '').trim();

    // Get the weight
    const weight = currentInput.trim();

    // Check if weight and price are empty
    if (weight === "0" || productPrice === "0") {
        openModal("Peringatan", "Berat dan harga tidak boleh kosong. Silakan masukkan nilai yang valid.");
        return; // Exit the function if validation fails
    }

    // Construct the WhatsApp message
    const whatsappMessage = `Halo, saya ingin menjual ${productName} dengan berat ${weight} kg dan harga Rp${parseInt(productPrice).toLocaleString()}.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/+6289509956233?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
}


// Function to open the modal
function openModal(title, message) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-message").textContent = message;
    document.getElementById("popup-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("popup-modal").style.display = "none";
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) && key !== " ") { // Check if the pressed key is a number
        appendNumber(key);
    } else if (key === ".") { // Check if the pressed key is a decimal point
        appendDecimal();
    } else if (key === "Delete") { // Check if the pressed key is Delete
        clearAll();
    } else if (key === "Backspace") { // Check if the pressed key is Backspace
        deleteNumber();
    } else if (key === "Enter") { // Check if the pressed key is Enter
        Jual();
    }
});

// Initialize display
updateDisplay();
