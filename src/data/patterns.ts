// Emoji bazlı arkaplan desenleri - organik yerleşim, yüksek yoğunluk, iyi görünürlük

function createEmojiPattern(emojis: string[]): string {
    const size = 200;
    // 26 pozisyon = %50 daha yoğun (eskisi 17'ydi)
    const positions = [
        { x: 10, y: 14, rot: -12, s: 14 },
        { x: 55, y: 8, rot: 18, s: 13 },
        { x: 100, y: 18, rot: -6, s: 15 },
        { x: 150, y: 10, rot: 22, s: 12 },
        { x: 190, y: 20, rot: -15, s: 14 },
        { x: 30, y: 42, rot: 10, s: 13 },
        { x: 78, y: 38, rot: -20, s: 14 },
        { x: 125, y: 45, rot: 8, s: 12 },
        { x: 172, y: 40, rot: -10, s: 15 },
        { x: 12, y: 68, rot: 15, s: 12 },
        { x: 58, y: 72, rot: -8, s: 14 },
        { x: 105, y: 65, rot: 20, s: 13 },
        { x: 152, y: 70, rot: -18, s: 14 },
        { x: 192, y: 68, rot: 5, s: 12 },
        { x: 35, y: 98, rot: -14, s: 15 },
        { x: 82, y: 92, rot: 12, s: 13 },
        { x: 130, y: 100, rot: -5, s: 14 },
        { x: 178, y: 95, rot: 16, s: 12 },
        { x: 15, y: 125, rot: 8, s: 13 },
        { x: 62, y: 120, rot: -22, s: 14 },
        { x: 110, y: 128, rot: 10, s: 15 },
        { x: 160, y: 122, rot: -12, s: 13 },
        { x: 40, y: 155, rot: 18, s: 14 },
        { x: 90, y: 150, rot: -8, s: 12 },
        { x: 140, y: 158, rot: 14, s: 15 },
        { x: 185, y: 152, rot: -20, s: 13 },
        { x: 18, y: 182, rot: -6, s: 14 },
        { x: 68, y: 188, rot: 22, s: 13 },
        { x: 118, y: 180, rot: -16, s: 12 },
        { x: 168, y: 185, rot: 10, s: 14 },
    ];

    let texts = '';
    positions.forEach((pos, i) => {
        const emoji = emojis[i % emojis.length];
        texts += `<text x='${pos.x}' y='${pos.y}' font-size='${pos.s}' text-anchor='middle' fill='rgba(0,0,0,0.21)' transform='rotate(${pos.rot} ${pos.x} ${pos.y})' style='filter:grayscale(1)'>${emoji}</text>`;
    });

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}' width='${size}' height='${size}'>${texts}</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const trainingPatterns: Record<string, string> = {
    "algoritmik-dusunme": createEmojiPattern(['💻', '🧠', '⚙️', '🔢', '📊', '🔄', '💡', '🎯', '📐', '🔧', '⌨️', '🖥️']),
    "tasarim-odakli-dusunme": createEmojiPattern(['🎨', '💡', '✏️', '🖌️', '❤️', '🔍', '📝', '🧩', '🎭', '🪄', '🖼️', '✨']),
    "girisimcilik-101": createEmojiPattern(['🚀', '📈', '💰', '🎯', '🏆', '💼', '⭐', '📊', '🔑', '💎', '🌟', '🏗️']),
    "dongusel-ekonomi": createEmojiPattern(['♻️', '🌿', '🔄', '🌍', '🌱', '💚', '🍃', '📦', '🏭', '⚡', '🔋', '🌾']),
    "surdurulebilirlik": createEmojiPattern(['🌍', '🌿', '☀️', '💧', '🌳', '🏔️', '🦋', '🌊', '🌻', '🕊️', '🌈', '⚖️']),
    "karbon-ayak-izi": createEmojiPattern(['👣', '🏭', '💨', '🌡️', '🔥', '⚡', '🌍', '📉', '🌬️', '☁️', '🔋', '🌿']),
    "su-ayak-izi": createEmojiPattern(['💧', '🌊', '🐟', '🚿', '💦', '🏞️', '☔', '🐳', '🌧️', '🧊', '🫧', '🌿']),
    "iklim-degisikligi": createEmojiPattern(['🌡️', '🌍', '🔥', '❄️', '🌊', '☀️', '⛈️', '🏔️', '🌪️', '🌋', '🐻‍❄️', '🌿']),
    "etkili-cv-hazirlama": createEmojiPattern(['📄', '✍️', '⭐', '🎓', '💼', '✅', '📋', '🏅', '📎', '🖊️', '📌', '🎯']),
    "linkedin-kullanimi": createEmojiPattern(['🔗', '👤', '💼', '🌐', '📱', '🤝', '📊', '💬', '📧', '🏢', '👥', '⭐']),
    "etkili-portfolyo-hazirlama": createEmojiPattern(['🖼️', '📁', '🎨', '💎', '📂', '✨', '🎬', '📸', '🏆', '🎯', '📐', '🌟']),
    "proje-yazma": createEmojiPattern(['📋', '📝', '✅', '📊', '🎯', '📅', '⏱️', '🗂️', '📌', '🔗', '📈', '🏗️']),
    "excel": createEmojiPattern(['📊', '📈', '🔢', '📉', '💹', '🗃️', '📋', '⚡', '🔣', '📐', '🧮', '💡']),
    "diksiyon-ve-etkili-iletisim": createEmojiPattern(['🎤', '💬', '🗣️', '👂', '📢', '🎯', '✨', '📖', '🎭', '🎵', '💡', '🌟']),
};
