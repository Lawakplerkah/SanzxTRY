// Produk Data
const produkSewa = [
  { nama: "Paket S1", harga: "Rp15.000 / Group", deskripsi: "Masa aktif 15 Hari", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket S2", harga: "Rp25.000 / Group", deskripsi: "Masa aktif 1 Bulan", gambar: "https://files.catbox.moe/7prydh.jpg" },
  // Produk lainnya
];

const produkPremium = [
  { nama: "Paket P1", harga: "Rp5.000 / 7 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket P2", harga: "Rp10.000 / 15 Day", deskripsi: "Unlock Feature Premium", gambar: "https://files.catbox.moe/7prydh.jpg" },
  // Produk lainnya
];

let currentPage = 1;
const productsPerPage = 6;

const updatePagination = () => {
  const allProducts = [...produkSewa, ...produkPremium];
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const currentProducts = allProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  
  // Update halaman produk
  displayProducts(currentProducts);
  // Update halaman
  document.getElementById('page-number').
