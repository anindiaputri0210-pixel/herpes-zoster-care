// JavaScript Document
// Validasi formulir konsultasi
function validasiForm() {

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" || telepon == "" || pesan == "") {
        alert("Mohon lengkapi semua formulir!");
        return false;
    }

    document.getElementById("hasil").innerHTML =
        "<h3>Data Konsultasi Berhasil Diisi</h3>" +
        "<p>Nama: " + nama + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Nomor Telepon: " + telepon + "</p>" +
        "<p>Pesan: " + pesan + "</p>";

    return false;
}

// Menampilkan jam digital
function tampilkanJam() {
    var waktu = new Date();
    var jam = waktu.toLocaleTimeString("id-ID");

    var elemenJam = document.getElementById("jam");

    if (elemenJam) {
        elemenJam.innerHTML = jam;
    }
}

setInterval(tampilkanJam, 1000);
