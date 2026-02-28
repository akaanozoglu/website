# Ali Kaan Özoğlu - Kişisel Web Sitesi

Modern, hızlı ve dinamik bir yapıyla kodlanmış olan Ali Kaan Özoğlu'nun kişisel web sitesi projesidir. Site üzerinde eğitim hizmetleri, uygulamalı atölyeler ve iletişim bölümü yer almaktadır.

## 🚀 Teknolojiler
Bu proje modern web standartlarına ve **SOLID/DRY** prensiplerine uygun olarak geliştirilmiştir.
- **Framework:** Next.js 15 (App Router)
- **Kütüphane:** React 19
- **Stil & Tasarım:** Tailwind CSS v4
- **Animasyon:** Framer Motion
- **İkonlar:** Lucide React
- **Dil:** TypeScript

## 🎨 Öne Çıkan Özellikler
- **Glassmorphism UI:** Özel cam efekti (`.glass-panel`) tasarımları.
- **Karanlık Mod (Dark Mode):** Sistem temasına duyarlı, kusursuz aydınlık/karanlık mod geçişleri.
- **Dinamik Sayaç (Stats):** Görüş alanına girdiğinde yukarı doğru sayan etkileşimli istatistik bölümü.
- **Tam Duyarlı (Responsive):** Mobil, tablet ve masaüstü ekranlar için optimize edilmiştir.

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/akaanozoglu/website.git
cd website
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## 🏗️ Proje Yapısı

```bash
src/
├── app/                  # Next.js App Router (Sayfalar, API ve Global stiller)
│   ├── globals.css       # Tailwind ayarları ve global değişkenler
│   ├── layout.tsx        # Kök yapı (Fontlar ve Meta tagleri)
│   └── page.tsx          # Ana Sayfa bileşenlerinin birleştirildiği yer
├── components/           # Bütün ana sayfa bileşenleri
│   ├── About.tsx         # Hakkımda bölümü
│   ├── Contact.tsx       # İletişim Formu
│   ├── Header.tsx        # Navigasyon Çubuğu
│   ├── Hero.tsx          # Karşılama Ekranı
│   └── Stats.tsx         # Animasyonlu Sayaç
│   └── ui/               # Tekrar kullanılabilir (DRY) alt bileşenler (Button.tsx vb.)
└── lib/                  # Yardımcı (Utility) Fonksiyonlar
    └── utils.ts          # Tailwind Class birleştirici fonksiyon (cn)
```

## 👨‍💻 Geliştirici
- **Tasarım & Kodlama:** Fabri-Lab
- **Sahip:** Ali Kaan Özoğlu
