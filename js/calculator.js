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

// Toggle sidebar di mobile
document.getElementById("burger-menu").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("open");
  this.classList.toggle("open");
});

// Menutup sidebar ketika overlay diklik
document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
  document.getElementById("burger-menu").classList.remove("open");
});

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
    
    // Memperbarui nama kategori yang dipilih
    document.getElementById("selected-category").textContent = 
      `${currentCategoryName}`;
    
    // Menghitung ulang harga
    calculatePrice();
    
    // Jika di mobile, tutup sidebar setelah memilih kategori
    if (window.innerWidth <= 768) {
      document.getElementById("sidebar").classList.remove("open");
      document.getElementById("overlay").classList.remove("open");
      document.getElementById("burger-menu").classList.remove("open");
    }
  });
});

// Inisialisasi tampilan
updateDisplay();