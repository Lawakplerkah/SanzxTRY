// Daftar produk
const produk = [
  { nama: "Paket Sewa Bot", harga: "Rp15.000 - Rp50.000", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket Premium", harga: "Rp5.000 - Rp30.000", gambar: "https://files.catbox.moe/7prydh.jpg" },
  { nama: "Paket Custom", harga: "Hubungi Admin", gambar: "https://files.catbox.moe/7prydh.jpg" }
];

// Render daftar produk
const produkContainer = document.getElementById("produk-container");
produk.forEach((item) => {
  const produkItem = document.createElement("div");
  produkItem.className = "produk-item";
  produkItem.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}">
    <h3>${item.nama}</h3>
    <p>${item.harga}</p>
  `;
  produkContainer.appendChild(produkItem);
});

// Modal untuk daftar harga
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

closeModal.onclick = () => (modal.style.display = "none");

window.onclick = (event) => {
  if (event.target === modal) modal.style.display = "none";
};

document.getElementById("btn-sewa").onclick = () => {
  modal.style.display = "flex";
  modalText.innerHTML = `<pre>
*LIST HARGA SEWA BOT*

*PAKET S1*: Rp15.000 / Group
*PAKET S2*: Rp25.000 / Group
*PAKET S3*: Rp40.000 / Group
Berminat? <a href="https://wa.me/6283894064758" target="_blank">Hubungi Admin</a>
</pre>`;
};

document.getElementById("btn-premium").onclick = () => {
  modal.style.display = "flex";
  modalText.innerHTML = `<pre>
*LIST HARGA PREMIUM*

*PAKET P1*: Rp5.000 / 7 Hari
*PAKET P2*: Rp10.000 / 15 Hari
*PAKET P3*: Rp20.000 / 30 Hari
Berminat? <a href="https://wa.me/6283894064758" target="_blank">Hubungi Admin</a>
</pre>`;
};
