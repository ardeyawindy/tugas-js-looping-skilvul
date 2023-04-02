Tugas Java Script - Looping

1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
   Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
   Lakukan FOR LOOP pada Javascript.
   jawaban:

   > menggunakan for loop untuk pengulangan
   > for (i = 1; i <= 100; i++): inisialisasi loop dimulai dari variabel i dengan nilai awal 1. Selama i kurang dari atau sama dengan 100, loop akan terus berjalan dengan menambahkan nilai i dengan 1 pada setiap iterasi loop.
   > document.write("User ke " + i + "<br>");: pada setiap iterasi loop, program akan menampilkan teks "User ke " yang diikuti dengan nilai i, dan menambahkan tag <br> untuk membuat baris baru pada halaman web.

2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
   Nilai awal = 0
   Pengulangan = 10 kali
   Nilai awal ditambah 2 setiap pengulangan
   Tampilan hasil penambahan pada setiap pengulangan
   jawaban:

   > menggunakan for loop untuk pengulangan
   > let nilaiAwal = 0;: variabel nilaiAwal dideklarasikan dengan nilai awal 0.
   > for (i = 0; i < 10; i++): inisialisasi loop dimulai dari variabel i dengan nilai awal 0. Selama i kurang dari 10, loop akan terus berjalan dengan menambahkan nilai i dengan 1 pada setiap iterasi loop.
   > nilaiAwal += 2;: pada setiap iterasi loop, variabel nilaiAwal akan ditambahkan dengan 2.
   > document.write("Nilai perulangan: " + nilaiAwal + "<br>");: pada setiap iterasi loop, program akan menampilkan teks "Nilai perulangan: " yang diikuti dengan nilai nilaiAwal, dan menambahkan tag <br> untuk membuat baris baru pada halaman web.

3. Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
   Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
   Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
   jawaban:

   > for (i = 1; i <= 20; i++): inisialisasi loop dimulai dari variabel i dengan nilai awal 1. Selama i kurang dari atau sama dengan 20, loop akan terus berjalan dengan menambahkan nilai i dengan 1 pada setiap iterasi loop.
   > if (i % 2 == 0) { document.write("Nilai genap: " + i + "<br>"); }: jika nilai i adalah bilangan genap (dapat dibagi dengan 2 tanpa sisa), maka program akan menampilkan teks "Nilai genap: " yang diikuti dengan nilai i dan menambahkan tag <br> untuk membuat baris baru pada halaman web.
   > else { document.write("Nilai ganjil: " + i + "<br>"); }: jika nilai i adalah bilangan ganjil (tidak dapat dibagi dengan 2 tanpa sisa), maka program akan menampilkan teks "Nilai ganjil: " yang diikuti dengan nilai i dan menambahkan tag <br> untuk membuat baris baru pada halaman web.
   > Dengan begitu, pada setiap iterasi loop, program akan mengecek apakah nilai i genap atau ganjil, kemudian menampilkan teks "Nilai genap: " atau "Nilai ganjil: " yang diikuti dengan nilai tersebut pada halaman web.

4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
   Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
   Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
   Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
   jawaban:

   > var count = 0; adalah variabel untuk menghitung jumlah kali user mengklik OK pada pop up.
   > while (confirm("Apakah anda mau mengulang?")) adalah perintah untuk menampilkan pop up dengan teks "Apakah anda mau mengulang?" dan melakukan loop jika user memilih OK.
   > count++; adalah perintah untuk menambah nilai variabel count setiap kali user mengklik OK pada pop up.
   > alert("Perulangan sudah dilakukan sebanyak " + count + " kali."); adalah perintah untuk menampilkan alert yang menampilkan jumlah kali user telah mengklik OK pada pop up.

5. Buat sebuah program kuis.
   Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
   Lakukan pengecekan apakah jawaban dari user sudah benar
   Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
   Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
   jawaban:

   > menggunakan do-while loop
   > var correctAnswer = "Impact Byte"; adalah variabel yang berisi jawaban yang benar untuk pertanyaan pada kuis ini.
   > var userAnswer; adalah variabel yang akan menampung jawaban yang diinputkan oleh user.
   > do { ... } while (userAnswer !== correctAnswer); adalah perintah untuk melakukan loop yang pertama kali akan menampilkan prompt dengan pertanyaan "Sebutkan kepanjangan dari nama IB (Impact Byte)?" dan akan terus menampilkan prompt yang sama berulang-ulang selama jawaban yang diberikan oleh user masih salah.
   > userAnswer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?"); adalah perintah untuk menampilkan prompt yang meminta input dari user dengan pertanyaan yang telah ditentukan.
   > if (userAnswer === correctAnswer) { ... } adalah perintah yang akan dieksekusi jika jawaban dari user telah benar. Akan muncul alert dengan teks "Selamat jawaban kamu benar!".
   > else { ... } adalah perintah yang akan dieksekusi jika jawaban dari user masih salah. Akan muncul alert dengan teks "Maaf, jawaban kamu salah. Silakan coba lagi.".
   > while (userAnswer !== correctAnswer); adalah perintah yang akan mengevaluasi apakah jawaban yang diberikan oleh user masih salah. Jika jawaban masih salah, maka perintah akan kembali ke loop pertama dan akan menampilkan prompt yang sama kembali hingga user menjawab dengan benar. Jika jawaban sudah benar, maka loop akan berhenti.
