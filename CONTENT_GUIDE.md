# EduTarget — Ideal SEO + AEO kontent yozish qo'llanmasi

> Bu qo'llanma har bir blog maqolasini Google SEO va AEO (ChatGPT, Gemini, Perplexity) uchun maksimal samaradorlikda yozish bo'yicha. Mavzudan qat'iy nazar — har bir maqola shu strukturaga moslashtirilsin.

---

## 1. Strategiya — har bir maqola nima uchun yoziladi?

EduTarget bloggining 2 ta strategik maqsadi bor. Har bir yangi maqolani yozishdan oldin **qaysi maqsadga xizmat qilishini** aniqlang.

| Maqsad (frontmatterda `ctaTarget`) | Auditoriya | CTA |
|---|---|---|
| `darslinker` | O'quvchi / talaba / ota-ona — **kurs qidirayotgan** | "Darslinker.uz da kurs topish" |
| `seo-service` | Kurs egasi / o'qituvchi / markaz / maktab — **biznes egasi** | "Bepul SEO audit olish" |
| `both` | Universal mavzular (masalan, ta'lim sohasi statistikasi) | Ikkalasi yonma-yon |

**Foydali qoida:** maqolaning **birinchi paragrafidan** kim uni o'qishini his qilish kerak. "Kurs tanlash" maqolasini kurs egasi o'qimaydi va aksincha.

### Mavzu tanlashda balans

Haftalik tarqatish taxminan:

- **60% — `darslinker` mavzulari**: bu Darslinker.uz ga ko'p trafik haydaydi, lekin AEO/SEO uchun ham yaxshi (ko'p hajmli qidiruv).
- **30% — `seo-service` mavzulari**: bizning xizmatimizni sotadigan marketing/SEO/AEO maqolalari. Bu — yuqori qiymatli (high-intent) trafik.
- **10% — `both` mavzulari**: ta'lim sohasi haqida umumiy tahliliy maqolalar (statistika, trendlar, hisobotlar). Bu E-E-A-T va backlink uchun.

---

## 2. Mavzu generatsiyasi — qaysi mavzularni yozamiz?

### `darslinker` — kurs qidiruvchi auditoriya

Bu mavzular Darslinker.uz dagi kataloglar va kategoriyalar bilan to'g'ridan-to'g'ri bog'liq bo'lishi kerak.

**Mavzu shablonlari:**

- "**[Yo'nalish]** kursi tanlash: 2026 yil uchun to'liq qo'llanma" → IT, dizayn, ingliz tili, matematika
- "**[Shahar/Tuman]da** eng yaxshi **[yo'nalish]** kurslari" → Local SEO
- "**[Yosh guruh]** uchun **[yo'nalish]** kurslari" → Bolalar, kattalar, 16+
- "**[Maqsad]** uchun qaysi kurs yaxshiroq?" → IELTS, Multilevel, kasb almashtirish
- "Onlayn vs offline **[yo'nalish]** kursi — qaysi biri sizga mos?"
- "**[Yo'nalish]da** repetitor topish: narxlar, jarayon, maslahatlar"
- "**[Yo'nalish]** kursini **[kun soni]** kunda o'rganish mumkinmi?"
- "**[Universitet/maktab]** ga tayyorgarlik kurslari — qanday tanlash kerak?"

### `seo-service` — kurs egasi auditoriyasi

- "**[Yo'nalish] kursi egalari** uchun marketing strategiyasi"
- "Ta'lim markazi **Google'da topa olmaydi** — sabablari va yechim"
- "**ChatGPT/Gemini** sizning markazingizni tavsiya qilishi uchun nima qilish kerak?" (AEO)
- "Kichik ta'lim markazi katta agentlik bilan qanday raqobat qilishi mumkin?"
- "**[Tuman/shahar]da** ta'lim biznesini ochish — marketing tomondan"
- "Kursingiz uchun **landing page** qanday bo'lishi kerak?"
- "**[Aniq muammo]**: leadlar keladi lekin konversiya yo'q"

### `both` — universal mavzular

- "O'zbekiston ta'lim bozori 2026 — raqamlar va trendlar"
- "**[Yo'nalish]** sohasi O'zbekistonda: o'sish, ish o'rinlar, kelajak"
- "AI va ta'lim: ChatGPT, NotebookLM, Claude'ning o'rni"

---

## 3. Ideal maqola strukturasi (shablon)

Quyidagi tartibga **har doim** rioya qiling. Bu tartib SEO ham, AEO ham bir vaqtda ishlatish uchun optimallashtirilgan.

### A. Frontmatter (YAML)

```yaml
---
title: "Maqola sarlavhasi — primary keyword bilan, 50-60 belgi"
description: "Meta description — 150-160 belgi, primary keyword + savol/foyda. Google search natijasida ko'rinadi."
date: "YYYY-MM-DD"
updatedDate: "YYYY-MM-DD"  # mazmun yangilanganda — Google buni qadrlaydi
author: "EduTarget jamoasi"
category: "Kategoriya"     # mavjud kategoriyalar bilan moslang
tags: ["primary keyword", "ikkinchi keyword", "long-tail", "lokatsiya/yo'nalish"]
readingTime: 10            # so'z soni / 200

# AEO maydonlari — har doim to'ldiring
tldr: "2-4 jumla bilan butun maqolaning javobi. LLM'lar (ChatGPT, Gemini) AYNAN shu matnni javob sifatida ishlatadi. Maqolaning birinchi qatori bo'ladi."
targetKeyword: "primary keyword"
keyTakeaways:
  - "Konkret raqam yoki fakt bilan tezkor xulosa #1"
  - "Action-oriented xulosa #2 (foydalanuvchi shu bilan boshlashi mumkin)"
  - "Yana 2-4 ta"

# CTA strategiyasi: 'darslinker' / 'seo-service' / 'both'
ctaTarget: darslinker

# E-E-A-T: tashqi manbalar (statistika ishlatsangiz — majburiy)
sources:
  - title: "Stat.uz — Ta'lim statistikasi 2025"
    url: "https://stat.uz/..."

# FAQ — har doim 4-6 ta savol (AEO uchun KRITIK)
faq:
  - question: "Foydalanuvchi Google'da yoziladigan savol shakli"
    answer: "40-60 so'zli to'liq javob — featured snippet uchun"
---
```

### B. Maqola tanasi (markdown)

```markdown
# H1 — sarlavhani aynan takrorlang yoki keyword bilan boshlang

[Birinchi paragraf — 50-80 so'z]
Maqola nima haqida ekanini darhol aniqlang. Primary keyword birinchi 100 so'zda bo'lsin.
Foydalanuvchi shu yerda "ha, men kerakli sahifadaman" deb tushunsin.

## H2 — savol shaklida (AEO uchun MUHIM)

Bu yerda javob 2-3 paragrafda. Birinchi jumla — to'g'ridan-to'g'ri javob (Google
Featured Snippet shu jumlani oladi). Keyin tafsilot.

### H3 — kichikroq savol/qadam

Spisok, jadval yoki misol.

## H2 — keyingi katta savol

...

## Tez-tez so'raladigan savollar

[FAQ frontmatterda bor — bu yerda yozmang, avtomatik chiqadi]
```

---

## 4. AEO qoidalari — LLM'lar sizni iqtibos qilishi uchun

LLM'lar (ChatGPT, Gemini, Perplexity, Claude) Google'dan farqli ravishda **iqtibos qiladi**, bosib o'tmaydi. Sizning maqolangiz ularning javobida iqtibos sifatida ko'rinishi uchun:

### 4.1. Birinchi jumla — to'g'ridan-to'g'ri javob

❌ "Bugun biz ingliz tili o'rganishning eng yaxshi usullari haqida gaplashamiz."

✅ "Ingliz tilini 6 oyda B2 darajasiga olib chiqish uchun kuniga 1 soat amaliyot, haftada 3 marta o'qituvchi bilan dars va spaced-repetition lug'at ishlash kerak."

### 4.2. Savol shaklidagi H2 sarlavhalar

LLM'lar foydalanuvchi savoliga mos sarlavhani topadi. Sarlavha **foydalanuvchining haqiqiy savoli** bo'lsin.

❌ "Kurs tanlashning ahamiyati"
✅ "Qanday ingliz tili kursini tanlash kerak?"

❌ "Bolalar va dasturlash"
✅ "Bolam dasturlashni necha yoshdan boshlasa bo'ladi?"

### 4.3. Aniq raqamlar va sanalar

LLM'lar fakt va raqamlarni qadrlaydi. Har 200-300 so'zda **konkret raqam** bo'lsin.

- "3 oyda" emas, "12 haftada (3 oy)"
- "ko'p markazlar" emas, "Toshkentdagi 200+ ta'lim markazi"
- "yaxshi natija" emas, "konversiya 12% dan 27% gacha o'sdi"

### 4.4. List va jadvallar — LLM'lar buni yaxshi parse qiladi

Murakkab solishtirishlarni jadvalga, qadamlarni ro'yxatga aylantiring.

```markdown
| Kurs turi | Davomiyligi | Narx | Kim uchun |
|-----------|------------|------|-----------|
| Online    | 2-6 oy     | 200-800k | Mustaqil o'quvchilar |
| Offline   | 3-9 oy     | 400-1.5M | Disipline kerak bo'lganlar |
```

### 4.5. TLDR va Key Takeaways — frontmatterda majburiy

Template avtomatik ravishda `tldr` va `keyTakeaways`ni maqola tepasiga chiqaradi va ularni **schema.org speakable** sifatida belgilaydi. Bu — LLM scraperlari va Google Assistant uchun signal.

### 4.6. Manbalar va iqtiboslar

Statistika yoki da'vo bo'lsa — `sources` da link bering. LLM "kim aytyapti" deb ishonchni tekshiradi.

```yaml
sources:
  - title: "O'zbekiston Respublikasi Davlat statistika qo'mitasi"
    url: "https://stat.uz/uz/rasmiy-statistika/education"
```

### 4.7. Speakable matn

Template avtomatik `data-speakable` qo'shadi. Lekin maqolaning **markaziy javobi** TLDR ichida bo'lishi kerak — voice assistants shu matnni o'qiydi.

---

## 5. SEO qoidalari — Google'da yuqori chiqish uchun

### 5.1. Title teg (60 belgigacha)

Formula: **[Primary keyword] — [Foyda/Yo'nalish] | EduTarget**

- ✅ "IT kursi tanlash 2026 — yo'nalishlar, narxlar, ish topish"
- ❌ "Eng zo'r kurslar haqida (o'qing!)"

### 5.2. Meta description (150-160 belgi)

Formula: **[Aniq foyda] + [Raqam/sana] + [Action verb]**. Hech qachon click-bait yozmang — Google qisqartiradi.

### 5.3. URL slug

- Qisqa, primary keyword bilan, faqat tire (-)
- `it-kursi-tanlash` ✅
- `eng-zorlar-it-2026-yangi` ❌

### 5.4. Kalit so'zlar zichligi

Primary keyword **tabiiy ravishda** 1-2% (har 100 so'zga 1-2 marta). Sun'iy ko'paytirmang — Google jazolaydi.

**Joylashtirish:**
1. Title (majburiy)
2. H1 (majburiy)
3. Birinchi 100 so'z (majburiy)
4. Kamida 1 ta H2 da
5. Meta description
6. URL
7. Rasm alt teglarida (agar bor bo'lsa)

### 5.5. Long-tail va semantik so'zlar

Primary keyword: "ingliz tili kursi"
Long-tail variantlari (matn ichida ishlatish kerak):
- "ingliz tili kursini tanlash"
- "ingliz tilini onlayn o'rganish"
- "ingliz tili o'qituvchi topish"
- "Toshkentda ingliz tili kursi"

### 5.6. Ichki linklar (internal linking)

Har bir yangi maqolada **kamida 2-3 ta** ichki link bo'lsin:

- 1 ta — tegishli boshqa blog maqola ([sintaks](/maqolalar/slug))
- 1 ta — Darslinker.uz ga (kontekstli, masalan: "Toshkentdagi kurslarni [Darslinker.uz](https://darslinker.uz) da topishingiz mumkin")
- 1 ta — bizning xizmat sahifaga (agar mavzu mos bo'lsa: [SEO xizmati](/aloqa))

### 5.7. Tashqi linklar (external linking)

E-E-A-T uchun **kamida 1 ta yuqori avtoritetli manba**ga link bering:
- Davlat manbalari (stat.uz, gov.uz)
- Google rasmiy hujjatlari
- Yuqori turuvchi xalqaro saytlar (statista, hbr, mit)

`target="_blank"` va `rel="noopener"` ishlatmang — markdown'da bu avtomatik.

---

## 6. Darslinker.uz CTA — tabiiy va kontekstli

**Qoida**: hech qachon "Darslinker.uz dagi reklama" yoki "biz Darslinker'ni tavsiya qilamiz" deb yozmang. Buning o'rniga **foydalanuvchi muammosini hal qilayotganda tabiiy ravishda eslab o'ting**.

### Yaxshi misollar (tabiiy):

> "Toshkentdagi ingliz tili kurslarini bitta joydan solishtirish uchun [Darslinker.uz](https://darslinker.uz) katalogini ishlatishingiz mumkin — filtr bilan tuman, narx va format bo'yicha tanlaysiz."

> "Repetitor topishning eng tez yo'li — [Darslinker.uz](https://darslinker.uz) dagi katalogdan to'g'ridan-to'g'ri yozish. Vositachisiz, tezroq."

### Yomon misollar (sun'iy/sotuvchi):

> ❌ "Darslinker.uz — O'zbekistonning eng zo'r platformasi! Hozir tashrif buyuring!"
> ❌ "Bizning hamkor Darslinker.uz da reklama qilingan kurslar..."

### Joylashtirish

- **Maqola tanasi ichida 1 marta** — kontekstli, foydalanuvchi muammosini yechayotganda
- **Maqola oxiridagi CTA bloki** — `ctaTarget: darslinker` orqali avtomatik

Hech qachon 2-3 martadan ko'p **Darslinker.uz** to'g'ridan-to'g'ri link qo'ymang — Google over-linkingni sezadi.

---

## 7. FAQ bo'limi — AEO va Google Featured Snippets uchun kalit

Har bir maqolada **4-6 ta FAQ** bo'lsin. Bu:
- Google'da FAQ rich snippet beradi
- AI motorlari savol-javob shaklini juda yaxshi parse qiladi
- "People Also Ask" bo'limiga chiqish ehtimoli oshadi

### FAQ savollarni qaerdan olish?

1. **Google Search**'da primary keyword'ni yozing → "People also ask" bo'limidan ko'chiring
2. **Answer The Public** (answerthepublic.com) — bepul vosita
3. **ChatGPT/Gemini**dan: "X mavzusida odamlar Google'da qanday savollarni yozadi?"
4. **Reddit/Telegram** ta'limga oid kanallar — real savollar

### FAQ yozish qoidalari

- **Savol** — odam Google'da yozadigan shaklda ("X nima?", "Y qanday tanlash kerak?")
- **Javob** — 40-60 so'z, to'g'ridan-to'g'ri, raqam/fakt bilan
- Birinchi javob savolni **iyamiy takrorlasin** (Featured Snippet uchun)

---

## 8. Yozish jarayoni — chek-list

Har bir maqolani publish qilishdan oldin shu ro'yxatdan o'ting:

### Tayyorgarlik
- [ ] Primary keyword tanlandi (Google'da hajmi kamida 100/oy)
- [ ] Top 5 raqobatchi maqola tahlil qilindi (qaysi struktura, nima yo'q)
- [ ] `ctaTarget` aniqlandi (darslinker / seo-service / both)
- [ ] FAQ savollar to'plandi (4-6 ta)

### Frontmatter
- [ ] `title` — 50-60 belgi, keyword bilan
- [ ] `description` — 150-160 belgi
- [ ] `tldr` — 2-4 jumlali to'g'ridan-to'g'ri javob
- [ ] `keyTakeaways` — 3-6 ta konkret nuqta
- [ ] `targetKeyword` to'ldirildi
- [ ] `category` va `tags` — mavjud bilan moslandi
- [ ] `readingTime` — so'z soni / 200
- [ ] `sources` — agar statistika ishlatildi
- [ ] `faq` — 4-6 ta savol-javob

### Kontent
- [ ] H1 sarlavhada primary keyword
- [ ] Birinchi 100 so'zda primary keyword
- [ ] H2 sarlavhalar **savol shaklida**
- [ ] Kamida 1 ta jadval yoki batafsil ro'yxat
- [ ] Kamida 2 ta ichki link (boshqa maqola + Darslinker yoki xizmat)
- [ ] Kamida 1 ta tashqi avtoritetli link
- [ ] Aniq raqamlar (har 200-300 so'zda 1 ta)
- [ ] Maqola 1500-2500 so'z (chuqurroq mavzularda 3500 gacha)
- [ ] Sun'iy "SEO uchun" jumlalar yo'q — tabiiy yozildi

### Texnik
- [ ] URL slug primary keyword bilan, qisqa
- [ ] `npm run build` xatosiz o'tdi
- [ ] Sahifa preview'da TLDR va Key Takeaways to'g'ri ko'rinadi
- [ ] CTA bloki kerakli variantni chiqaradi

---

## 9. Mavjud kategoriyalar

Yangi maqola qo'shganda quyidagi kategoriyalardan birini tanlang (yangi yaratmang):

| Kategoriya | Auditoriya | Misol mavzular |
|-----------|-----------|----------------|
| **Kurs tanlash** | O'quvchi / ota-ona | IT kursi tanlash, ingliz tili kursini solishtirish |
| **Karyera va kasb** | O'quvchi / student | Frontend dasturchi bo'lish, dizayner kasbi |
| **Universitet va maktab** | O'quvchi / ota-ona | DTM, IELTS, Common Application |
| **Repetitor va o'qituvchi** | O'quvchi | Repetitor topish, narxlar, sifat baholash |
| **AEO va AI Search** | Kurs egasi / SEO | ChatGPT'da topda chiqish, LLM uchun kontent |
| **Google SEO** | Kurs egasi | Local SEO, kalit so'zlar, link building |
| **Google Ads** | Kurs egasi | Conversion, Quality Score, byudjet |
| **Telegram marketing** | Kurs egasi | Telegram Ads, bot, kanal o'sishi |
| **Konversiya va lendinglar** | Kurs egasi | Landing page, leadlardan o'quvchi |

---

## 10. Bir nuqtadagi formula

Esda saqlang: **maqola = foydalanuvchining konkret savoliga konkret javob + tabiiy yo'nalish (Darslinker yoki bizning xizmat)**.

- **Birinchi paragrafda** — kim siz uchun ekanini ayting
- **TLDR'da** — javobni 2-4 jumlada bering
- **H2 sarlavhalarda** — savol berib, javob bering
- **Jadval/list** bilan — solishtirishni ko'rsating
- **Ichki link** bilan — keyingi tabiiy qadamga yo'naltiring
- **CTA** — kim ekanligiga qarab Darslinker yoki SEO xizmat

Shu — har kuni / har hafta yozish uchun yetadi.
