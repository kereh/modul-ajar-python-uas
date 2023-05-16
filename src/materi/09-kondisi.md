---
judul: "Kondisi"
desc: "Belajar kondisi di python untuk pemula"
sumber: "https://www.belajarpython.com"
---

### Kondisi dalam Python

Pada pemrograman Python, kondisi digunakan untuk mengontrol alur eksekusi program berdasarkan nilai kebenaran suatu kondisi. Python menyediakan beberapa pernyataan kondisional, seperti `if`, `else`, dan `elif`, yang memungkinkan kita untuk mengambil keputusan berdasarkan kondisi yang diberikan.

Berikut adalah penjelasan singkat tentang kondisi-kondisi tersebut:

- **Kondisi `if`**: Digunakan untuk menjalankan blok kode jika kondisi yang diberikan bernilai benar (True).

  ```python
  if kondisi:
      # Blok kode yang dieksekusi jika kondisi benar
  ```

- **Kondisi `if` - `else`**: Digunakan untuk menjalankan blok kode dalam `if` jika kondisi benar, dan menjalankan blok kode dalam `else` jika kondisi salah (False).

  ```python
  if kondisi:
      # Blok kode yang dieksekusi jika kondisi benar
  else:
      # Blok kode yang dieksekusi jika kondisi salah
  ```

- **Kondisi `if` - `elif` - `else`**: Digunakan untuk mengevaluasi beberapa kondisi dan menjalankan blok kode sesuai dengan kondisi yang pertama kali bernilai benar.
  ```python
  if kondisi1:
      # Blok kode yang dieksekusi jika kondisi1 benar
  elif kondisi2:
      # Blok kode yang dieksekusi jika kondisi2 benar
  elif kondisi3:
      # Blok kode yang dieksekusi jika kondisi3 benar
  else:
      # Blok kode yang dieksekusi jika semua kondisi salah
  ```

Dalam contoh-contoh di atas, blok kode yang dieksekusi ditentukan oleh hasil evaluasi kondisi yang diberikan. Anda dapat menggabungkan kondisi-kondisi ini dengan operator logika (seperti `and`, `or`, `not`) untuk mengatur alur eksekusi program secara lebih kompleks.

Dengan menggunakan kondisi-kondisi ini, Anda dapat mengontrol alur program berdasarkan situasi yang diberikan, menjalankan perintah yang sesuai dengan kondisi yang terpenuhi, dan membuat program Anda lebih dinamis dan responsif.
