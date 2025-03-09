let currentInput = "0";
let currentRate = 100; // Default untuk kantong kresek
let currentCategoryName = "Kantong Kresek";
let calculated = false;

// Fungsi untuk memperbarui tampilan
function updateDisplay() {
  document.getElementById("weight-display").textContent = currentInput;
  calculatePrice();
}

// Fungsi untuk menghitung harga
function calculatePrice() {
  const weight = parseFloat(currentInput) || 0;
  const price = weight * currentRate;
  document.getElementById("price-display").textContent = "Rp " + price.toLocaleString('id-ID');
}

// Fungsi untuk menambahkan angka
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

// Fungsi untuk menambahkan desimal
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

// Fungsi untuk menghapus angka terakhir
function deleteNumber() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

// Fungsi untuk membersihkan semua
function clearAll() {
  currentInput = "0";
  updateDisplay();
}

// Fungsi untuk menghitung
function calculate() {
  calculatePrice();
  calculated = true;
}

// Menambahkan event listener untuk kategori
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
  category.addEventListener('click', function() {
    // Menghapus kelas aktif dari semua kategori
    categories.forEach(c => c.classList.remove('active'));
    
    // Menambahkan kelas aktif ke kategori yang dipilih
    this.classList.add('active');
    
    // Mengatur tarif dan nama kategori baru
    currentCategoryName = this.getAttribute('data-name');
    
    // Mengambil nilai harga dari teks kategori
    const priceText = this.querySelector('span:last-child').textContent;
    const rateMatch = priceText.match(/Rp\s*([\d.,]+)\/kg/);
    if (rateMatch && rateMatch[1]) {
      // Mengonversi teks harga ke angka
      currentRate = parseFloat(rateMatch[1].replace(/\./g, '').replace(',', '.'));
    }
    
    // Memperbarui nama kategori yang dipilih
    document.getElementById("selected-category").textContent = currentCategoryName;
    
    // Menghitung ulang harga
    calculatePrice();
  });
});

// Menambahkan event listener untuk input dari keyboard
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) && key !== " ") { // Memeriksa apakah tombol yang ditekan adalah angka
    appendNumber(key);
  } else if (key === ".") { // Memeriksa apakah tombol yang ditekan adalah titik desimal
    appendDecimal();
  } else if (key === "Delete") { // Memeriksa apakah tombol yang ditekan adalah Delete
    clearAll();
  } else if (key === "Backspace") { // Memeriksa apakah tombol yang ditekan adalah backspace
    deleteNumber();
  } else if (key === "Enter") { // Memeriksa apakah tombol yang ditekan adalah enter
    calculate();
  }
});

// Inisialisasi tampilan
updateDisplay();