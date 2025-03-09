const products = [
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
  {
    name: "Tas Daur Ulang",
    currency: "Rp",
    price: "50.000",
    image: "./assets/image/recycle-bag.png",
    desc: "Tas ramah lingkungan dari bahan daur ulang, kuat, stylish, dan cocok untuk penggunaan sehari-hari. Bantu kurangi sampah plastik dengan pilihan yang lebih berkelanjutan!",
  },
];
const cardContainer = document.querySelector(".card-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("onclick", "openPopup(this)");

  card.setAttribute("data-name", product.name);
  card.setAttribute("data-currency", product.currency);
  card.setAttribute("data-price", product.price);
  card.setAttribute("data-image", product.image);
  card.setAttribute("data-desc", product.desc);

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="card-content">
            <h4>${product.name}</h4>
            <p>${product.currency}${product.price}</p>
        </div>
    `;

  cardContainer.appendChild(card);
});
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
    document.getElementById("popup-price").innerHTML = `<span class="currency">${productCurrency}</span> ${productPrice}`;
    document.getElementById("popup-desc").innerText = productDesc;

    // Buat pesan WhatsApp
    const whatsappMessage = `Halo, saya ingin membeli ${productName} dengan harga ${productCurrency}${productPrice}. Deskripsi: ${productDesc}`;
    const whatsappLink = `https://wa.me/089509956233?text=${encodeURIComponent(whatsappMessage)}`;

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
