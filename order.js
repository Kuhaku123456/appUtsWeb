// Daftar harga untuk setiap jenis manisan
const hargaManisan = {
    mangga: 5000,
    salak: 7000,
    nanas: 8000,
    anggur: 10000,
    pepaya: 6000,
    pisang: 4000,
    jeruk: 9000,
    apel: 7500
  };
  
  // Fungsi untuk menambahkan item ke dalam keranjang dan menghitung total harga
  function addToCart(jenisManisan) {
    const inputElem = document.querySelector(`input[name="jumlah-manisan-${jenisManisan}"]`);
    const jumlah = parseInt(inputElem.value);
    const totalHargaElem = document.getElementById('total-harga-span');
    const totalHargaSebelumnya = parseInt(totalHargaElem.innerText.substring(3)); // Mengambil angka saja dari teks "Rp 0"
    const hargaSatuan = hargaManisan[jenisManisan];
    const totalHarga = totalHargaSebelumnya + (jumlah * hargaSatuan);
    totalHargaElem.innerText = 'Rp ' + totalHarga;
  }
  
  // Menambahkan event listener untuk gambar
  document.querySelectorAll('.manisan-item img').forEach(function(img) {
    img.addEventListener('click', function() {
      const jenisManisan = this.parentElement.getAttribute('onclick').split("'")[1];
      addToCart(jenisManisan);
    });
  });
  
  // Fungsi untuk menghitung total harga ketika tombol "Hitung Total" ditekan
  document.getElementById('hitung-total').addEventListener('click', function() {
    const totalHargaElem = document.getElementById('total-harga-span');
    let totalHarga = 0;
    // Mengambil nilai total harga dari setiap item yang ada
    document.querySelectorAll('.manisan-item').forEach(function(item) {
      const jenisManisan = item.getAttribute('onclick').split("'")[1];
      const inputElem = item.querySelector(`input[name="jumlah-manisan-${jenisManisan}"]`);
      const jumlah = parseInt(inputElem.value);
      totalHarga += jumlah * hargaManisan[jenisManisan];
    });
    totalHargaElem.innerText = 'Rp ' + totalHarga;
  });
  