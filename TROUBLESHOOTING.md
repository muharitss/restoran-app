# 🔧 Cara Mengatasi Network Error

## ⚠️ PENTING: Restart Dev Server Setelah Perubahan .env

Setelah mengubah file `.env`, Anda **HARUS restart dev server**:

### Cara Restart:

1. **Stop server** yang sedang berjalan:
   - Tekan `Ctrl + C` di terminal yang menjalankan `pnpm dev`
2. **Start ulang server**:

   ```bash
   pnpm dev
   ```

3. **Refresh browser** (Ctrl + R atau F5)

## ✅ Perubahan yang Sudah Dilakukan:

### 1. File `.env` diperbaiki

**Sebelum:**

```
BASE_URL: 'https://restoran-backend-srdw.onrender.com'
```

**Sesudah:**

```
VITE_API_BASE_URL=https://restoran-backend-srdw.onrender.com
```

### 2. Axios Client diperbaiki

- ✅ Menggunakan environment variable dengan benar
- ✅ Menambahkan timeout 30 detik
- ✅ Menambahkan detailed error logging
- ✅ Better error handling untuk Network Error

### 3. Console Logging ditambahkan

Sekarang Anda akan melihat log yang jelas di console:

- 🌐 API Base URL saat app dimuat
- 📤 Request yang dikirim
- 📥 Response yang diterima
- ❌ Error detail jika ada masalah

## 🧪 Test Backend Connection

Backend sudah ditest dan **BERFUNGSI DENGAN BAIK**! ✅

Test result:

```
✅ Backend is reachable!
✅ Login endpoint works!
✅ Response: Login berhasil
```

## 🐛 Jika Masih Ada Network Error:

### Kemungkinan 1: Dev Server Belum Direstart

**Solusi:** Restart dev server (lihat cara di atas)

### Kemungkinan 2: CORS Issue

Backend mungkin belum mengizinkan request dari `http://localhost:5173`

**Cek di console browser:**

- Jika ada error: `Access-Control-Allow-Origin`
- Berarti backend perlu konfigurasi CORS

**Solusi sementara:** Gunakan browser extension untuk disable CORS saat development

### Kemungkinan 3: Cache Browser

**Solusi:**

1. Hard refresh: `Ctrl + Shift + R`
2. Clear cache browser
3. Atau buka Incognito/Private window

### Kemungkinan 4: Firewall/Antivirus

**Solusi:**

- Pastikan firewall tidak memblokir koneksi ke `restoran-backend-srdw.onrender.com`

## 📋 Checklist Troubleshooting:

- [ ] Restart dev server dengan `Ctrl+C` lalu `pnpm dev`
- [ ] Hard refresh browser dengan `Ctrl+Shift+R`
- [ ] Buka browser console (F12) dan cek error message
- [ ] Lihat tab Network di DevTools untuk detail request
- [ ] Pastikan ada log: `🌐 API Base URL: https://restoran-backend-srdw.onrender.com`
- [ ] Coba di Incognito/Private window
- [ ] Cek koneksi internet

## 🎯 Expected Console Logs Setelah Restart:

Ketika app dimuat:

```
🌐 API Base URL: https://restoran-backend-srdw.onrender.com
```

Ketika login:

```
📤 API Request: POST /api/users/login
🔵 Sending login request: {email: "...", password: "..."}
📥 API Response: POST /api/users/login {...}
✅ Login response: {success: true, ...}
```

Jika masih error:

```
❌ Login error: ...
🌐 Network Error - Cannot reach server
Check if backend is running at: https://restoran-backend-srdw.onrender.com
```

## 🚀 Next Steps:

1. **RESTART dev server** (paling penting!)
2. Buka `http://localhost:5173/login`
3. Buka console (F12)
4. Coba login dengan:
   - Email: `owner@gmail.com`
   - Password: `password123`
5. Lihat console logs

Jika masih ada error setelah restart, screenshot console dan kirim ke saya!
