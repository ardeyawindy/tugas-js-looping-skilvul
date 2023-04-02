// Soal no.1
document.write("1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100. Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML. Lakukan FOR LOOP pada Javascript." + "<br>");
document.write("jawaban:" + "<br>");
for (i = 1; i <= 100; i++) {
  document.write("User ke " + i + "<br>");
}

// Soal no.2
document.write(
  "2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali." +
    "<br>" +
    "Nilai awal = 0" +
    "<br>" +
    "Pengulangan = 10 kali" +
    "<br>" +
    "Nilai awal ditambah 2 setiap pengulangan" +
    "<br>" +
    "Tampilan hasil penambahan pada setiap pengulangan" +
    "<br>"
);
document.write("jawaban:" + "<br>");
let nilaiAwal = 0;
for (i = 0; i < 10; i++) {
  nilaiAwal += 2;
  document.write("Nilai perulangan: " + nilaiAwal + "<br>");
}

// Soal no.3
document.write(
  "3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0...20." +
    "<br>" +
    "- Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap." +
    "<br>" +
    "- Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan" +
    "<br>"
);
document.write("jawaban:" + "<br>");
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write("Nilai genap: " + i + "<br>");
  } else {
    document.write("Nilai ganjil: " + i + "<br>");
  }
}

// Soal no.4
document.write(
  "4.Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();" +
    "<br>" +
    "Berikan teks ‘Apakah anda mau mengulang’ pada box confirm" +
    "<br>" +
    "Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama" +
    "<br>" +
    "Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user" +
    "<br>"
);
document.write("jawaban:" + "pop up ditampilkan di awal");
var count = 0;
while (confirm("Apakah anda mau mengulang?")) {
  count++;
}
alert("Perulangan sudah dilakukan sebanyak " + count + " kali.");

// Soal no.5
document.write(
  "<br>" +
    "5. Buat sebuah program kuis." +
    "<br>" +
    "Tampilkan prompt() untuk meminta inputan dari user." +
    "<br>" +
    "Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’" +
    "<br>" +
    "Lakukan pengecekan apakah jawaban dari user sudah benar" +
    "<br>" +
    "Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’" +
    "<br>" +
    "Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar" +
    "<br>"
);
document.write("jawaban: pop up ditampilkan di awal");
var correctAnswer = "Impact Byte";
var userAnswer;
do {
  userAnswer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  if (userAnswer === correctAnswer) {
    alert("Selamat jawaban kamu benar!");
  } else {
    alert("Maaf, jawaban kamu salah. Silakan coba lagi.");
  }
} while (userAnswer !== correctAnswer);
