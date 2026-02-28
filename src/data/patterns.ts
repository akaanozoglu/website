// Emoji bazlı arkaplan desenleri - gri tonlarda, yüksek yoğunluklu, WhatsApp tarzı
// Her eğitim için konuya uygun emojilerden oluşan yoğun desen

function createEmojiPattern(emojis: string[], size = 60): string {
    // Emojileri sık bir grid halinde dizerek yoğun bir desen oluştur
    const rows = 6;
    const cols = 6;
    const cellW = size / cols;
    const cellH = size / rows;
    let texts = '';

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const emoji = emojis[(r * cols + c) % emojis.length];
            const x = c * cellW + cellW / 2;
            const y = r * cellH + cellH / 2 + 3;
            // Her diğer satırı biraz kaydır (tuğla desenli yerleşim)
            const offset = r % 2 === 0 ? 0 : cellW / 2;
            texts += `<text x='${x + offset}' y='${y}' font-size='7' text-anchor='middle' fill='rgba(0,0,0,0.07)' style='filter:grayscale(1)'>${emoji}</text>`;
        }
    }

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}' width='${size}' height='${size}'>${texts}</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const trainingPatterns: Record<string, string> = {
    // Algoritmik Düşünme: kod, mantık, akış
    "algoritmik-dusunme": createEmojiPattern(['💻', '🧠', '⚙️', '🔢', '📊', '🔄', '💡', '🎯', '📐', '🔧', '⌨️', '🖥️']),

    // Tasarım Odaklı Düşünme: yaratıcılık, empati, prototip
    "tasarim-odakli-dusunme": createEmojiPattern(['🎨', '💡', '✏️', '🖌️', '❤️', '🔍', '📝', '🧩', '🎭', '🪄', '🖼️', '✨']),

    // Girişimcilik 101: iş, büyüme, para
    "girisimcilik-101": createEmojiPattern(['🚀', '📈', '💰', '🎯', '🏆', '💼', '⭐', '📊', '🔑', '💎', '🌟', '🏗️']),

    // Döngüsel Ekonomi: geri dönüşüm, çevre, döngü
    "dongusel-ekonomi": createEmojiPattern(['♻️', '🌿', '🔄', '🌍', '🌱', '💚', '🍃', '📦', '🏭', '⚡', '🔋', '🌾']),

    // Sürdürülebilirlik: doğa, denge, gelecek
    "surdurulebilirlik": createEmojiPattern(['🌍', '🌿', '☀️', '💧', '🌳', '🏔️', '🦋', '🌊', '🌻', '🕊️', '🌈', '⚖️']),

    // Karbon Ayak İzi: emisyon, enerji, ölçüm
    "karbon-ayak-izi": createEmojiPattern(['👣', '🏭', '💨', '🌡️', '🔥', '⚡', '🌍', '📉', '🌬️', '☁️', '🔋', '🌿']),

    // Su Ayak İzi: su, damla, okyanus
    "su-ayak-izi": createEmojiPattern(['💧', '🌊', '🐟', '🚿', '💦', '🏞️', '☔', '🐳', '🌧️', '🧊', '🫧', '🌿']),

    // İklim Değişikliği: hava, sıcaklık, doğa
    "iklim-degisikligi": createEmojiPattern(['🌡️', '🌍', '🔥', '❄️', '🌊', '☀️', '⛈️', '🏔️', '🌪️', '🌋', '🐻‍❄️', '🌿']),

    // Etkili CV Hazırlama: belge, kariyer, başarı
    "etkili-cv-hazirlama": createEmojiPattern(['📄', '✍️', '⭐', '🎓', '💼', '✅', '📋', '🏅', '📎', '🖊️', '📌', '🎯']),

    // LinkedIn Kullanımı: ağ, profil, bağlantı
    "linkedin-kullanimi": createEmojiPattern(['🔗', '👤', '💼', '🌐', '📱', '🤝', '📊', '💬', '📧', '🏢', '👥', '⭐']),

    // Etkili Portfolyo Hazırlama: sunum, galeri, tasarım
    "etkili-portfolyo-hazirlama": createEmojiPattern(['🖼️', '📁', '🎨', '💎', '📂', '✨', '🎬', '📸', '🏆', '🎯', '📐', '🌟']),

    // Proje Yazma: planlama, yönetim, görev
    "proje-yazma": createEmojiPattern(['📋', '📝', '✅', '📊', '🎯', '📅', '⏱️', '🗂️', '📌', '🔗', '📈', '🏗️']),

    // Excel: tablo, grafik, veri
    "excel": createEmojiPattern(['📊', '📈', '🔢', '📉', '💹', '🗃️', '📋', '⚡', '🔣', '📐', '🧮', '💡']),

    // Diksiyon & Etkili İletişim: konuşma, mikrofon, ses
    "diksiyon-ve-etkili-iletisim": createEmojiPattern(['🎤', '💬', '🗣️', '👂', '📢', '🎯', '✨', '📖', '🎭', '🎵', '💡', '🌟']),
};
