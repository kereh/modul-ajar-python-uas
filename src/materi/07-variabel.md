---
judul: "Variabel"
desc: "Pada materi ini kita akan belajar variabel"
sumber: "https://belajarpython.com/"
---

### Variabel Python

Variabel adalah lokasi memori yang digunakan untuk menyimpan nilai-nilai dalam program. Dalam Python, variabel tidak perlu dideklarasikan dengan tipe data tertentu dan dapat diubah nilainya selama program berjalan. Penulisan variabel dalam Python memiliki aturan tertentu:

- Karakter pertama harus berupa huruf atau garis bawah/underscore (\_).
- Karakter selanjutnya dapat berupa huruf, garis bawah/underscore (\_), atau angka.
- Karakter pada nama variabel bersifat case-sensitive, artinya huruf kecil dan huruf besar dibedakan.

Berikut adalah contoh penggunaan variabel dalam bahasa pemrograman Python:

<Syntax language="python">
{`
# Memasukkan data ke dalam variabel
nama = "John Doe"

# Mencetak nilai variabel

print(nama)

# Nilai dan tipe data dalam variabel dapat diubah

umur = 20 # nilai awal
print(umur) # mencetak nilai umur
type(umur) # mengecek tipe data umur

umur = "dua puluh satu" # nilai setelah diubah
print(umur) # mencetak nilai umur
type(umur) # mengecek tipe data umur

namaDepan = "Budi"
namaBelakang = "Susanto"
nama = namaDepan + " " + namaBelakang
umur = 22
hobi = "Berenang"
print("Biodata\n", nama, "\n", umur, "\n", hobi)

# Contoh variabel lainnya

inivariabel = "Halo"
ini_juga_variabel = "Hai"
\_inivariabeljuga = "Hi"
inivariabel222 = "Bye"

panjang = 10
lebar = 5
luas = panjang \* lebar
print(luas)
`}

</Syntax>

Dalam contoh di atas, variabel "nama" digunakan untuk menyimpan data berupa string "John Doe" dan kemudian dicetak. Selanjutnya, nilai dan tipe data dalam variabel "umur" dapat diubah dari angka 20 menjadi string "dua puluh satu". Variabel "namaDepan", "namaBelakang", "umur", dan "hobi" digunakan untuk membentuk sebuah kalimat dalam variabel "nama" yang kemudian dicetak sebagai biodata.

Contoh terakhir menunjukkan penggunaan variabel dengan nama yang berbeda, termasuk penggunaan garis bawah sebagai karakter pertama dalam nama variabel. Variabel "panjang" dan "lebar" digunakan untuk menghitung luas dengan operasi perkalian, dan hasilnya disimpan dalam variabel "luas" yang kemudian dicetak.
