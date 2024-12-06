// Produk Data
const produkSewa = [
  { nama: "Paket S1", harga: "Rp15.000 / Group", deskripsi: "Masa aktif 15 Hari", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S2", harga: "Rp25.000 / Group", deskripsi: "Masa aktif 1 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S3", harga: "Rp40.000 / Group", deskripsi: "Masa aktif 2 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S4", harga: "Rp50.000 / Group", deskripsi: "Masa aktif 3 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  // Produk lainnya...
];

const produkPremium = [
  { nama: "Paket P1", harga: "Rp5.000 / 7 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P2", harga: "Rp10.000 / 15 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P3", harga: "Rp20.000 / 30 Day", deskripsi: "Perpanjang Rp15.000 (hemat 25%)", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P4", harga: "Rp30.000 / 60 Day", deskripsi: "Perpanjang Rp25.000 (hemat 17%)", gambar: "https://files.catbox.moe/7prydh.jpg" },
  // Produk lainnya...
];

let currentPage = 1;
const productsPerPage = 6;

// Fungsi untuk menampilkan produk
const displayProducts = (products) => {
  const produkSewaContainer = document.getElementById("produk-sewa");
  const produkPremiumContainer = document.getElementById("produk-premium");
  
  // Clear containers
  produkSewaContainer.innerHTML = "";
  produkPremiumContainer.innerHTML = "";

  // Menampilkan produk Sewa
  products.forEach(product => {
    const produkItem = document.createElement("div");
    produkItem.classList.add("produk-item");
    
    produkItem.innerHTML = `
      <img src="${product.gambar}" alt="${product.nama}" class="produk-image">
      <h3 class="produk-name">${product.nama}</h3>
      <p class="produk-description">${product.deskripsi}</p>
      <p class="produk-price">${product.harga}</p>
      <button class="button-buy">Beli Sekarang</button>
    `;
    
    // Menambahkan produk ke container yang sesuai
    if (produkSewa.includes(product)) {
      produkSewaContainer.appendChild(produkItem);
    } else {
      produkPremiumContainer.appendChild(produkItem);
    }
  });
};

// Fungsi pagination
const updatePagination = () => {
  const allProducts = [...produkSewa, ...produkPremium];
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  // Update tombol navigasi
  document.getElementById('page-number').textContent = `Page ${currentPage} of ${totalPages}`;

  // Navigasi Prev & Next
  document.getElementById('prev-page').disabled = currentPage === 1;
  document.getElementById('next-page').disabled = currentPage === totalPages;

  // Menampilkan produk sesuai halaman
  const currentProducts = allProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  displayProducts(currentProducts);
};

// Fungsi untuk pindah ke halaman berikutnya
document.getElementById('next-page').addEventListener('click', () => {
  currentPage++;
  updatePagination();
});

// Fungsi untuk pindah ke halaman sebelumnya
document.getElementById('prev-page').addEventListener('click', () => {
  currentPage--;
  updatePagination();
});

// Fungsi pencarian produk
const filterProducts = () => {
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  
  const filteredSewa = produkSewa.filter(product => product.nama.toLowerCase().includes(searchQuery));
  const filteredPremium = produkPremium.filter(product => product.nama.toLowerCase().includes(searchQuery));

  // Gabungkan hasil pencarian
  const allFilteredProducts = [...filteredSewa, ...filteredPremium];
  displayProducts(allFilteredProducts);
};

// Fungsi rating produk
const setRating = (rating) => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = "gold";
    } else {
      star.style.color = "#ccc";
    }
  });
};

// Fungsi untuk submit review
const submitReview = () => {
  const reviewText = document.getElementById("review-text").value;
  if (reviewText) {
    alert("Review Anda telah dikirim!");
    document.getElementById("review-text").value = ""; // Reset textarea
  } else {
    alert("Mohon isi review Anda.");
  }
};

// Menampilkan produk awal saat halaman dimuat
window.onload = () => {
  updatePagination();
};
