---
judul: "Modul"
desc: "Materi kali ini kita akan belajar apa itu modul pada python"
sumber: "https://www.belajarpython.com"
---

# Modul Python

Modul memungkinkan Anda mengatur kode Python secara logis dan membaginya menjadi file-file terpisah. Setiap file terpisah disebut modul dan dapat berisi definisi fungsi, kelas, variabel, atau kode lain yang dapat dijalankan.

## Membuat Modul

Modul pada Python adalah file dengan ekstensi .py yang berisi kode Python. Anda dapat membuat modul dengan membuat file baru dan menuliskan kode di dalamnya. Misalnya, berikut adalah contoh modul sederhana yang disimpan dalam file support.py:

```python
# File: support.py

def print_func(par):
    print("Halo:", par)
    return
```

## Mengimpor Modul

Anda dapat menggunakan modul yang telah Anda buat dengan melakukan impor ke dalam file Python lain. Dengan menggunakan pernyataan `import`, Anda dapat mengakses fungsi, kelas, dan variabel yang didefinisikan dalam modul tersebut. Misalnya, jika Anda ingin menggunakan modul `support.py`, Anda dapat menggunakan pernyataan berikut di file Python lainnya:

```python
# File: main.py

import support

# Anda dapat memanggil fungsi yang didefinisikan dalam modul sebagai berikut
support.print_func("Andy")
```

Dalam contoh di atas, modul `support` diimpor menggunakan pernyataan `import`. Setelah impor, Anda dapat menggunakan fungsi `print_func` yang didefinisikan dalam modul tersebut.

## Alias Modul

Anda juga dapat memberikan alias (nama lain) untuk modul saat mengimpor. Ini berguna jika nama modul terlalu panjang atau konflik dengan nama lain yang ada dalam program Anda. Berikut adalah contoh penggunaan alias modul:

```python
# File: main.py

import support as sp

sp.print_func("Andy")
```

Dalam contoh di atas, modul `support` diimpor dengan alias `sp`. Dengan menggunakan alias `sp`, Anda dapat mengakses fungsi `print_func` yang didefinisikan dalam modul tersebut dengan menggunakan `sp.print_func()`.

## Mengimpor Fungsi Tertentu dari Modul

Jika Anda hanya membutuhkan beberapa fungsi dari modul yang diimpor, Anda dapat mengimpor fungsi-fungsi tersebut secara terpisah. Ini mengurangi kebutuhan untuk menuliskan nama modul setiap kali Anda menggunakan fungsi. Berikut adalah contoh penggunaan impor fungsi tertentu:

```python
# File: main.py

from support import print_func

print_func("Andy")
```

Dalam contoh di atas, hanya fungsi `print_func` yang diimpor dari modul `support`. Anda dapat langsung menggunakan fungsi tersebut tanpa menuliskan nama modulnya.

Dengan menggunakan modul, Anda dapat mengorganisir kode Python Anda dengan lebih baik dan mengakses kode yang telah ditulis kembali menggunakan pernyataan impor. Modul memudahkan Anda dalam mengelola proyek Python yang lebih besar dan membuat kode Anda lebih mudah dipahami dan digunakan.
