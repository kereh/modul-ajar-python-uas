---
judul: "List"
desc: "Kita akan belajar apa itu list pada python"
sumber: "https://www.belajarpython.com"
---

# List Python

Dalam bahasa pemrograman Python, struktur data yang paling dasar adalah urutan atau _lists_. Setiap elemen-elemen berurutan akan diberi nomor posisi atau indeksnya. Indeks pertama dalam list adalah nol, indeks kedua adalah satu dan seterusnya.

Python memiliki enam jenis urutan _built-in_, namun yang paling umum adalah _list_ dan _tuple_. Ada beberapa hal yang dapat Anda lakukan dengan semua jenis _list_. Operasi ini meliputi pengindeksan, pengiris, penambahan, perbanyak, dan pengecekan keanggotaan. Selain itu, Python memiliki fungsi _built-in_ untuk menemukan panjang list dan untuk menemukan elemen terbesar dan terkecilnya.

## Membuat List Python

_List_ adalah tipe data yang paling serbaguna yang tersedia dalam bahasa Python, yang dapat ditulis sebagai daftar nilai yang dipisahkan koma (item) antara tanda kurung siku. Hal penting tentang daftar adalah item dalam list tidak boleh sama jenisnya.

Membuat list sangat sederhana, tinggal memasukkan berbagai nilai yang dipisahkan koma di antara tanda kurung siku. Dibawah ini adalah contoh sederhana pembuatan list dalam bahasa Python.

```python
# Contoh sederhana pembuatan list pada bahasa pemrograman python
list1 = ['kimia', 'fisika', 1993, 2017]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]
```

## Akses Nilai Dalam List Python

Untuk mengakses nilai dalam list python, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut.

Berikut adalah contoh cara mengakses nilai di dalam list python:

```python
# Cara mengakses nilai di dalam list Python
list1 = ['fisika', 'kimia', 1993, 2017]
list2 = [1, 2, 3, 4, 5, 6, 7]

print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])
```

Setelah Anda mengeksekusi kode diatas, hasilnya akan seperti berikut:

```
list1[0]: fisika
list2[1:5]: [2, 3, 4, 5]
```

## Update Nilai Dalam List Python

Anda dapat memperbarui satu atau beberapa nilai di dalam list dengan memberikan potongan di sisi kiri operator penugasan, dan Anda dapat menambahkan nilai ke dalam list dengan metode `append()`. Sebagai contoh:

```python
list = ['fisika', 'kimia', 1993, 2017]
print ("Nilai ada pada index 2: ", list[2])

list[2] = 2001
print ("Nilai baru ada pada index 2: ", list[2])
```

## Hapus Nilai Dalam List Python

Untuk menghapus nilai di dalam list python, Anda dapat menggunakan salah satu pernyataan `del` jika Anda tahu persis elemen yang Anda hapus. Anda dapat menggunakan metode `remove()` jika Anda tidak tahu persis item mana

yang akan dihapus. Sebagai contoh:

```python
# Contoh cara menghapus nilai pada list python
list = ['fisika', 'kimia', 1993, 2017]

print (list)
del list[2]
print ("Setelah dihapus nilai pada index 2: ", list)
```
