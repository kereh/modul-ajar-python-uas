---
judul: "Tuple"
desc: "Pada materi kali ini kita akan belajar Tuple pada python"
sumber: "https://www.belajarpython.com"
---

# Tuple Python

Sebuah **tupel** adalah urutan objek Python yang tidak berubah. Tupel mirip dengan list, namun memiliki perbedaan utama yaitu tupel tidak dapat diubah setelah dibuat, sedangkan list dapat diubah. Tupel menggunakan tanda kurung `()` sedangkan list menggunakan tanda kurung siku `[]`.

## Membuat Tuple

Membuat tuple sangat sederhana, Anda hanya perlu memasukkan nilai-nilai yang dipisahkan oleh koma. Opsionalnya, Anda dapat mengelilingi nilai-nilai tersebut dengan tanda kurung. Berikut adalah contoh pembuatan tuple dalam Python:

```python
tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5)
tup3 = "a", "b", "c", "d"
```

Anda juga dapat membuat tuple kosong dengan menuliskan dua tanda kurung tanpa nilai di dalamnya, misalnya: `tup1 = ()`. Jika Anda ingin membuat tuple dengan hanya satu nilai, pastikan untuk menambahkan tanda koma setelah nilai tersebut, misalnya: `tup1 = (50,)`.

## Akses Nilai dalam Tuple

Untuk mengakses nilai dalam tuple, Anda dapat menggunakan indeks yang dimulai dari 0. Gunakan tanda kurung siku `[]` dan indeks yang sesuai untuk mengakses nilai pada posisi tertentu dalam tuple. Berikut adalah contoh cara mengakses nilai dalam tuple Python:

```python
tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5, 6, 7)

print("tup1[0]: ", tup1[0])
print("tup2[1:5]: ", tup2[1:5])
```

Outputnya akan menjadi:

```
tup1[0]: fisika
tup2[1:5]: (2, 3, 4, 5)
```

## Menggabungkan Tuple

Anda dapat menggabungkan dua tuple menggunakan operator `+` untuk membuat tuple baru yang berisi elemen dari kedua tuple tersebut. Berikut adalah contoh penggabungan tuple:

```python
tup1 = (12, 34.56)
tup2 = ('abc', 'xyz')

tup3 = tup1 + tup2
print(tup3)
```

Outputnya akan menjadi:

```
(12, 34.56, 'abc', 'xyz')
```

## Menghapus Tuple

Karena tuple tidak dapat diubah, Anda tidak dapat menghapus elemen individu dalam tuple. Namun, Anda dapat menghapus seluruh tuple menggunakan pernyataan `del`. Berikut adalah contoh penghapusan tuple:

```python
tup = ('fisika', 'kimia', 1993, 2017)
print(tup)

# Hapus tuple dengan pernyataan del
del tup

# Buat tuple baru dengan elemen yang diinginkan
tup = ('Bahasa', 'Literasi', 2020)
print("Setelah menghapus tuple:", tup)
```

Outputnya akan menjadi:

```
('fisika', 'kimia', 1993, 2017)
Setelah menghapus tuple: ('Bahasa', 'Literasi', 202

0)
```

Tuple merupakan struktur data yang berguna ketika Anda ingin menyimpan beberapa nilai yang tidak dapat diubah dalam urutan tertentu. Meskipun tidak dapat diubah, tuple masih dapat digunakan untuk akses dan pengolahan data yang efisien.
