---
judul: "Perulangan/Loop"
desc: "Kali ini kita akan belajar perulangan atau loop"
sumber: "https://www.belajarpython.com"
---

### Perulangan dalam Python

Perulangan (looping) digunakan untuk menjalankan serangkaian pernyataan berulang kali. Dalam bahasa pemrograman Python, terdapat beberapa jenis perulangan yang dapat digunakan:

#### 1. Perulangan `while`

Perulangan `while` akan menjalankan blok kode selama kondisi yang diberikan bernilai benar (True).

Contoh penggunaan perulangan `while`:

```python
count = 0
while count < 9:
    print("The count is:", count)
    count = count + 1

print("Good bye!")
```

#### 2. Perulangan `for`

Perulangan `for` digunakan untuk mengulangi item dari urutan tertentu, seperti list atau string.

Contoh penggunaan perulangan `for`:

```python
angka = [1, 2, 3, 4, 5]
for x in angka:
    print(x)

buah = ["nanas", "apel", "jeruk"]
for makanan in buah:
    print("Saya suka makan", makanan)
```

#### 3. Nested Loop (Perulangan Bersarang)

Nested loop adalah penggunaan satu perulangan di dalam perulangan lain. Ini memungkinkan untuk menjalankan serangkaian pernyataan secara terstruktur.

Contoh penggunaan nested loop:

```python
i = 2
while i < 100:
    j = 2
    while j <= (i/j):
        if not(i%j):
            break
        j = j + 1
    if j > i/j:
        print(i, " is prime")
    i = i + 1

print("Good bye!")
```

Dalam contoh di atas, perulangan nested digunakan untuk mencari bilangan prima dari 2 hingga 100.

Dengan menggunakan perulangan, Anda dapat melakukan tugas yang berulang dengan efisien dan menjalankan blok kode berdasarkan kondisi yang ditentukan. Perulangan adalah alat yang kuat dalam pemrograman yang memungkinkan Anda mengotomatiskan tugas-tugas berulang dan membuat program Anda lebih fleksibel.
