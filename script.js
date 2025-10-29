const resepData = [
  {
    nama: "Nasi Liwet Sunda",
    gambar: "liwet.jpg",
    bahan: [
      "3 gelas beras",
      "4 siung bawang merah (iris tipis)",
      "2 batang serai (memarkan)",
      "2 lembar daun salam",
      "200 ml santan",
      "Garam secukupnya"
    ],
    cara: [
      "Cuci bersih beras, tiriskan.",
      "Tumis bawang merah hingga harum.",
      "Masukkan daun salam, serai, dan santan.",
      "Masak hingga matang seperti nasi biasa.",
      "Sajikan dengan ikan asin, tempe, tahu, dan lalapan."
    ]
  },
  {
    nama: "Karedok",
    gambar: "karedok.jpg",
    bahan: [
      "Kacang panjang, timun, kol, tauge, kemangi",
      "100 gram kacang tanah goreng",
      "1 siung bawang putih",
      "1 cm kencur",
      "2 buah cabai rawit",
      "Gula merah & garam secukupnya"
    ],
    cara: [
      "Haluskan kacang tanah, bawang putih, cabai, dan kencur.",
      "Tambahkan gula merah, garam, dan air matang.",
      "Iris semua sayuran mentah.",
      "Campurkan dengan bumbu kacang, aduk rata.",
      "Sajikan dengan kerupuk."
    ]
  },
  {
    nama: "Sayur Asem",
    gambar: "asem.jpeg",
    bahan: [
      "100 gram kacang panjang",
      "1 buah labu siam",
      "1 buah jagung manis",
      "2 lembar daun salam",
      "1 ruas lengkuas",
      "Asam jawa secukupnya"
    ],
    cara: [
      "Rebus air hingga mendidih, masukkan daun salam dan lengkuas.",
      "Tambahkan jagung, kacang panjang, dan labu siam.",
      "Masukkan asam jawa dan bumbu halus.",
      "Masak hingga sayur matang.",
      "Sajikan hangat."
    ]
  },
  {
    nama: "Pepes Ikan Mas",
    gambar: "pepes.jpg",
    bahan: [
      "2 ekor ikan mas",
      "Daun pisang untuk membungkus",
      "2 batang serai",
      "Daun kemangi secukupnya",
      "Bumbu halus: bawang merah, bawang putih, kunyit, jahe, garam"
    ],
    cara: [
      "Lumuri ikan dengan bumbu halus.",
      "Tambahkan kemangi dan serai.",
      "Bungkus dengan daun pisang.",
      "Kukus ±30 menit lalu bakar sebentar.",
      "Sajikan dengan nasi hangat."
    ]
  },
  {
    nama: "Sate Maranggi",
    gambar: "Sate.jpg",
    bahan: [
      "500 gram daging sapi (potong dadu)",
      "3 siung bawang putih",
      "1 sdt ketumbar",
      "2 sdm kecap manis",
      "1 sdm air jeruk nipis"
    ],
    cara: [
      "Haluskan bawang putih dan ketumbar.",
      "Campur dengan kecap manis dan air jeruk.",
      "Lumuri daging, diamkan 30 menit.",
      "Tusuk daging dan bakar hingga matang.",
      "Sajikan dengan sambal tomat."
    ]
  },
  {
    nama: "Empal Gepuk",
    gambar: "empal.jpeg",
    bahan: [
      "500 gram daging sapi",
      "3 siung bawang putih",
      "2 sdm ketumbar",
      "1 sdt garam",
      "2 sdm gula merah"
    ],
    cara: [
      "Rebus daging hingga empuk.",
      "Geprek daging sampai melebar.",
      "Tumis bumbu halus, masukkan daging.",
      "Masak hingga bumbu meresap dan kering.",
      "Goreng sebentar dan sajikan."
    ]
  },
  {
    nama: "Lotek",
    gambar: "image.jpg",
    bahan: [
      "Kangkung, bayam, tauge, kol",
      "100 gram kacang tanah goreng",
      "2 siung bawang putih",
      "1 cm kencur",
      "Gula merah, garam, dan cabai secukupnya"
    ],
    cara: [
      "Rebus sayuran, tiriskan.",
      "Haluskan bumbu kacang, kencur, dan cabai.",
      "Tambahkan air matang secukupnya.",
      "Campurkan semua sayuran ke bumbu.",
      "Sajikan dengan lontong dan kerupuk."
    ]
  }
];

// Render ke halaman
const container = document.getElementById("resep-container");

resepData.forEach((r) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${r.gambar}" alt="${r.nama}">
    <div class="card-content">
      <h3>${r.nama}</h3>
      <h4>Bahan-bahan:</h4>
      <ul class="bahan">
        ${r.bahan.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <h4>Cara Membuat:</h4>
      <ol class="cara">
        ${r.cara.map(step => `<li>${step}</li>`).join("")}
      </ol>
    </div>
  `;
  container.appendChild(card);
});