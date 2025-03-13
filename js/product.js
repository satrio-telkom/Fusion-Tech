// Menambahkan kategori ke setiap produk
const products = [
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: 50000,
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
    category: "fashion"
  },
  {
    name: "Botol Minum Stainless",
    currency: "Rp",
    price: 75000,
    image: "./assets/image/stainless-water-bottle.png",
    desc: "Botol minum stainless yang aman untuk kesehatan, mudah dibersihkan, dan tahan lama. Ideal untuk kegiatan sehari-hari!",
    category: "sehari-hari"
  },
  {
    name: "Piring Makan Daur Ulang",
    currency: "Rp",
    price: 30000,
    image: "./assets/image/recycle-plate.png",
    desc: "Piring makan dari bahan daur ulang yang ramah lingkungan, kuat, dan cocok untuk berbagai keperluan sehari-hari.",
    category: "sehari-hari"
  },
  {
    name: "Sabun Mandi Organik",
    currency: "Rp",
    price: 25000,
    image: "./assets/image/organic-shampoo.png",
    desc: "Sabun mandi organik yang bebas dari bahan kimia berbahaya, aman untuk kulit, dan memberikan perawatan yang sehat.",
    category: "perawatan"
  },
  {
    name: "Pembersih Wajah Alami",
    currency: "Rp",
    price: 35000,
    image: "./assets/image/natural-face-cleanser.png",
    desc: "Pembersih wajah alami yang mengandung bahan-bahan alami untuk membersihkan dan melembabkan kulit wajah dengan aman.",
    category: "perawatan"
  },
  {
    name: "Masker Wajah Hijau",
    currency: "Rp",
    price: 45000,
    image: "./assets/image/green-face-mask.png",
    desc: "Masker wajah hijau yang mengandung bahan-bahan alami untuk memberikan perawatan yang menyegarkan dan melembabkan kulit wajah.",
    category: "perawatan"
  },
  {
    name: "Vas Gantung",
    currency: "Rp",
    price: 60000,
    image: "./assets/image/hanging-vas.png",
    desc: "Vase gantung yang elegan dan modern, cocok untuk dekorasi ruangan dan menambah sentuhan keindahan.",
    category: "dekorasi"
  },
  {
    name: "Lampu Meja Minimalis",
    currency: "Rp",
    price: 120000,
    image: "./assets/image/minimalist-desk-lamp.png",
    desc: "Lampu meja minimalis dengan desain sederhana namun menarik, cocok untuk berbagai jenis ruangan.",
    category: "dekorasi"
  },
  {
    name: "Karpet Halaman",
    currency: "Rp",
    price: 150000,
    image: "./assets/image/outdoor-rug.png",
    desc: "Karpet halaman yang nyaman dan tahan lama, cocok untuk area luar rumah dan memberikan sentuhan hangat.",
    category: "dekorasi"
  },
  {
    name: "Kaos Polos",
    currency: "Rp",
    price: 80000,
    image: "./assets/image/plain-t-shirt.png",
    desc: "Kaos polos dengan kualitas baik, cocok untuk berbagai gaya dan kegiatan sehari-hari.",
    category: "fashion"
  },
  {
    name: "Celana Jogger",
    currency: "Rp",
    price: 100000,
    image: "./assets/image/jogger-pants.png",
    desc: "Celana jogger yang nyaman dan fleksibel, cocok untuk olahraga dan kegiatan sehari-hari.",
    category: "fashion"
  },
  {
    name: "Sepatu Sneaker",
    currency: "Rp",
    price: 200000,
    image: "./assets/image/sneakers.png",
    desc: "Sepatu sneaker dengan desain modern dan nyaman, cocok untuk berbagai kegiatan dan gaya.",
    category: "fashion"
  }
];

// Fungsi untuk menampilkan produk dengan struktur yang diperbarui
function displayProducts(productsToShow) {
  const cardContainer = document.querySelector(".card-container");
  
  // Kosongkan container
  cardContainer.innerHTML = "";
  
  // Jika tidak ada produk yang ditemukan
  if (productsToShow.length === 0) {
    const noProductsMsg = document.createElement("div");
    noProductsMsg.classList.add("no-products-msg");
    noProductsMsg.style.gridColumn = "1 / -1";  // Membentang di seluruh grid
    noProductsMsg.innerHTML = `
      <p>Tidak ada produk yang ditemukan.</p>
    `;
    cardContainer.appendChild(noProductsMsg);
    return;
  }


  // Tambahkan produk ke container
  productsToShow.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("onclick", "openPopup(this)");
    card.setAttribute("data-category", product.category);
    
    card.setAttribute("data-name", product.name);
    card.setAttribute("data-currency", product.currency);
    card.setAttribute("data-price", product.price);
    card.setAttribute("data-image", product.image);
    card.setAttribute("data-desc", product.desc);

    // Struktur HTML yang diperbarui untuk mendukung tinggi yang seragam
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h4>${product.name}</h4>
        <p>${product.currency}${product.price.toLocaleString()}</p>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}

// Fungsi untuk membuka popup modal
function openPopup(card) {
  // Ambil data dari elemen card
  const productName = card.getAttribute("data-name");
  const productPrice = card.getAttribute("data-price");
  const productDesc = card.getAttribute("data-desc");
  const productCurrency = card.getAttribute("data-currency");
  const productImage = card.getAttribute("data-image");

  // Update konten modal dengan data produk
  document.getElementById("popup-image").src = productImage;
  document.getElementById("popup-name").innerText = productName;
  document.getElementById("popup-price").innerHTML = `<span class="currency">${productCurrency}</span> ${parseInt(productPrice).toLocaleString()}`;
  document.getElementById("popup-desc").innerText = productDesc;

  // Buat pesan WhatsApp
  const whatsappMessage = `Halo, saya ingin membeli ${productName} dengan harga ${productCurrency}${parseInt(productPrice).toLocaleString()}. Deskripsi: ${productDesc}`;
  const whatsappLink = `https://wa.me/+6289509956233?text=${encodeURIComponent(whatsappMessage)}`;

  // Set tautan WhatsApp pada tombol Beli Sekarang
  const buyNowBtn = document.getElementById("buy-now-btn");
  buyNowBtn.setAttribute("href", whatsappLink);

  // Tampilkan modal
  document.getElementById("popup-modal").style.display = "flex";
}

// Tutup modal ketika klik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById("popup-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Inisialisasi filter
document.addEventListener("DOMContentLoaded", function() {
  // Tampilkan semua produk saat pertama kali dimuat
  displayProducts(products);
  
  // Set tombol "Semua" sebagai active
  document.querySelector('.pd-filter-btn').classList.add('active');
  
  // Tambahkan event listener untuk tombol filter
  const filterButtons = document.querySelectorAll('.pd-filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Hapus kelas aktif dari semua tombol
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Tambahkan kelas aktif ke tombol yang diklik
      this.classList.add('active');
      
      // Dapatkan kategori dari tombol
      const categoryText = this.textContent.toLowerCase();
      
      // Filter produk berdasarkan kategori
      let filteredProducts;
      
      if (categoryText === 'semua') {
        // Jika kategori adalah 'semua', tampilkan semua produk
        filteredProducts = products;
      } else {
        // Jika kategori spesifik, filter produk berdasarkan kategori tersebut
        filteredProducts = products.filter(product => product.category === categoryText);
      }
      
      // Tampilkan produk yang difilter
      displayProducts(filteredProducts);
      
      // Tambahkan animasi fade-in untuk produk baru
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50 * index);
      });
    });
  });
  let lastTransformOrigin = 'center center'; // Variabel untuk menyimpan transform-origin terakhir

document.querySelector('.popup-image-container').addEventListener('mousemove', function (e) {
  const container = this;
  const image = container.querySelector('.popup-image');

  // Dapatkan posisi kursor relatif terhadap container
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; // Posisi kursor horizontal
  const y = e.clientY - rect.top; // Posisi kursor vertikal

  // Hitung persentase posisi kursor relatif terhadap container
  const originX = (x / container.offsetWidth) * 100;
  const originY = (y / container.offsetHeight) * 100;

  // Simpan transform-origin terakhir
  lastTransformOrigin = `${originX}% ${originY}%`;

  // Atur transform-origin berdasarkan posisi kursor
  image.style.transformOrigin = lastTransformOrigin;
  image.style.transform = 'scale(1.2)'; // Zoom gambar
});

// Kembalikan ke ukuran normal saat kursor meninggalkan container
document.querySelector('.popup-image-container').addEventListener('mouseleave', function () {
  const image = this.querySelector('.popup-image');
  image.style.transform = 'scale(1)'; // Kembalikan ke ukuran normal
  image.style.transformOrigin = lastTransformOrigin; // Gunakan transform-origin terakhir
});
});