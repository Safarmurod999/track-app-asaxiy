# Valyuta Konvertori va Tranzaksiya menejeri

## 1. Loyiha haqida

Bu loyiha **Valyuta konvertori** (Currency Converter) deb nomlanadi va foydalanuvchilarga turli valyutalar orasida konversiya qilish imkonini beradi. Loyiha quyidagi asosiy funktsiyalarni taqdim etadi:

- **Base valyuta** va **Target valyuta** o'rtasida miqdorni konvertatsiya qilish.
- **1 unit base valyuta** ning boshqa valyutalarga nisbatan o'zgarish miqdorlarini ko'rsatish.
- Exchange Rate API orqali valyuta kurslarini olish va ularni real vaqt rejimida yangilash.

## 2. Loyihaning ishlash tamoyili

Loyiha quyidagi tarzda ishlaydi:
1. **Base valyuta** (masalan, USD) va **Target valyuta** (masalan, EUR) tanlanadi.
2. Foydalanuvchi bir miqdor kiritsa (masalan, 10 USD), tizim ushbu miqdorni target valyutaga avtomatik konvertatsiya qiladi.
3. Shuningdek, boshqa valyutalar (masalan, GBP, JPY, CNY) ham **1 unit base valyuta** ga nisbatan konvertatsiya kurslarini ko'rsatish uchun jadvalda keltirilgan.
4. Real vaqt rejimida valyuta kurslari API orqali yangilanadi.

## 3. Loyihani ishga tushirish

Loyihani ishga tushirish uchun quyidagi qadamlarni bajaring:

### 1. Loyihani klonlash

```bash
git clone https://github.com/username/project-name.git
```

### 2. Loyiha ishlashi uchun kerakli paketlarni o'rnatish
```bash
npm i
```

### 3 Loyihani ishga tushirish
```bash
npm run dev
```

### 4. Qisqacha sharh
- **Duch kelgan muammolar:**
 -API’dan valyuta kurslarini olishda ba'zi vaqtlarda kechikish yoki tarmoq xatoliklari yuzaga keldi. Buni hal qilish uchun API javobining xatoliklarini ushlab, foydalanuvchiga tegishli xabar ko'rsatish implementatsiya qilindi.
 -React state boshqaruvi bilan bog'liq muammolar bo'ldi, ayniqsa yangi kurslar yuklanganda, ba'zi state'lar yangilanmaydi. Bu muammoni useEffect hook yordamida hal qildik, shu bilan kurslar o'zgarishi bilan interfeys yangilanadi.
Yaxshilash bo'yicha takliflar:

-Ko'proq valyutalar: Foydalanuvchilarga boshqa valyutalarni qo'shish imkoniyatini berish. Boshqa ommabop API'lar orqali valyutalar sonini kengaytirish.
-Offline rejim: Foydalanuvchi internetga ulanmaganida ham oxirgi olingan valyuta kurslarini ishlatishga imkon berish.
-Grafik ko'rinish: Valyuta kurslarining vaqt davomida o'zgarishini grafik tarzda ko'rsatish.
### 5. Qo'shimcha
-API: Ushbu loyiha ExchangeRate-API dan foydalanadi. API bepul va cheklangan so'rovlar bilan ishlaydi, shuning uchun ko'proq so'rov yuborilsa, API o'zi cheklovlar qo'yadi.