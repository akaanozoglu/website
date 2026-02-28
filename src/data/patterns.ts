// Emoji bazlı arkaplan desenleri - organik/rastgele yerleşim, yüksek görünürlük
// Her eğitim için konuya uygun emojilerden oluşan desen

function createEmojiPattern(emojis: string[]): string {
    // Büyük tile alanında rastgele ama çakışmayan konumlarda emojiler yerleştir
    const size = 200;
    const positions = [
        // Organik, doğal görünümlü saçılma deseni - hiçbiri düz çizgide değil
        { x: 12, y: 18, rot: -15, s: 14 },
        { x: 68, y: 8, rot: 20, s: 12 },
        { x: 140, y: 22, rot: -8, s: 15 },
        { x: 38, y: 52, rot: 12, s: 13 },
        { x: 105, y: 45, rot: -22, s: 14 },
        { x: 170, y: 55, rot: 5, s: 12 },
        { x: 22, y: 88, rot: 18, s: 12 },
        { x: 82, y: 78, rot: -12, s: 15 },
        { x: 148, y: 90, rot: 10, s: 13 },
        { x: 55, y: 120, rot: -20, s: 14 },
        { x: 120, y: 115, rot: 15, s: 12 },
        { x: 185, y: 125, rot: -5, s: 14 },
        { x: 8, y: 148, rot: 8, s: 13 },
        { x: 90, y: 155, rot: -18, s: 15 },
        { x: 160, y: 160, rot: 22, s: 12 },
        { x: 42, y: 185, rot: -10, s: 14 },
        { x: 130, y: 188, rot: 6, s: 13 },
    ];

    let texts = '';
    positions.forEach((pos, i) => {
        const emoji = emojis[i % emojis.length];
        texts += `<text x='${pos.x}' y='${pos.y}' font-size='${pos.s}' text-anchor='middle' fill='rgba(0,0,0,0.12)' transform='rotate(${pos.rot} ${pos.x} ${pos.y})' style='filter:grayscale(1)'>${emoji}</text>`;
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
