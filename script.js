// Daftar produk
const produk = [
  { nama: "Produk 1", harga: "Rp50.000" },
  { nama: "Produk 2", harga: "Rp75.000" },
  { nama: "Produk 3", harga: "Rp100.000" }
];

// Render daftar produk
const produkContainer = document.getElementById("produk-container");
produk.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `${item.nama} - ${item.harga}`;
  produkContainer.appendChild(li);
});

// Event listener untuk metode pembayaran
const metodeSelect = document.getElementById("metode-select");
metodeSelect.addEventListener("change", (event) => {
  alert(`Anda memilih metode pembayaran: ${event.target.value}`);
});
