// Her eÄŸitim iÃ§in WhatsApp sohbet arkaplanÄ± benzeri SVG desen oluÅŸturucu.
// Desenler o eÄŸitime Ã¶zgÃ¼ ikon ve ÅŸekillerden oluÅŸur.

function createSvgPattern(pathsContent: string, viewBox = "0 0 100 100"): string {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}' width='100' height='100'>${pathsContent}</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const trainingPatterns: Record<string, string> = {
    // Algoritmik DÃ¼ÅŸÃ¼nme: Kod parantezleri, akÄ±ÅŸ ÅŸemalarÄ±, ikili sayÄ±lar, dÃ¶ngÃ¼ler
    "algoritmik-dusunme": createSvgPattern(`
        <text x='10' y='20' font-size='12' fill='rgba(59,130,246,0.20)' font-family='monospace'>&lt;/&gt;</text>
        <text x='60' y='45' font-size='10' fill='rgba(59,130,246,0.18)' font-family='monospace'>{ }</text>
        <text x='5' y='70' font-size='9' fill='rgba(59,130,246,0.16)' font-family='monospace'>01010</text>
        <text x='55' y='85' font-size='11' fill='rgba(59,130,246,0.20)' font-family='monospace'>if()</text>
        <rect x='35' y='8' width='12' height='8' rx='2' fill='none' stroke='rgba(59,130,246,0.18)' stroke-width='0.8'/>
        <line x1='41' y1='16' x2='41' y2='22' stroke='rgba(59,130,246,0.16)' stroke-width='0.6'/>
        <path d='M38 22 L41 28 L44 22' fill='none' stroke='rgba(59,130,246,0.16)' stroke-width='0.6'/>
        <circle cx='80' cy='25' r='5' fill='none' stroke='rgba(6,182,212,0.16)' stroke-width='0.7'/>
        <text x='76' y='28' font-size='7' fill='rgba(6,182,212,0.20)' font-family='monospace'>âˆ</text>
        <text x='25' y='50' font-size='8' fill='rgba(59,130,246,0.14)' font-family='monospace'>â†’</text>
    `),

    // TasarÄ±m OdaklÄ± DÃ¼ÅŸÃ¼nme: Ampuller, kalpler (empati), kalemler, prototip ÅŸekilleri
    "tasarim-odakli-dusunme": createSvgPattern(`
        <circle cx='15' cy='15' r='6' fill='none' stroke='rgba(249,115,22,0.20)' stroke-width='0.8'/>
        <line x1='15' y1='21' x2='15' y2='26' stroke='rgba(249,115,22,0.18)' stroke-width='0.7'/>
        <line x1='12' y1='24' x2='18' y2='24' stroke='rgba(249,115,22,0.18)' stroke-width='0.5'/>
        <path d='M65 10 L70 18 L75 10' fill='none' stroke='rgba(236,72,153,0.18)' stroke-width='0.7'/>
        <rect x='55' y='55' width='14' height='10' rx='1' fill='none' stroke='rgba(249,115,22,0.16)' stroke-width='0.7'/>
        <circle cx='62' cy='60' r='2' fill='rgba(249,115,22,0.14)'/>
        <path d='M25 75 C25 70 30 65 35 70 C40 65 45 70 45 75 C45 82 35 88 35 88 C35 88 25 82 25 75' fill='none' stroke='rgba(236,72,153,0.16)' stroke-width='0.6'/>
        <line x1='80' y1='70' x2='80' y2='90' stroke='rgba(249,115,22,0.16)' stroke-width='0.7'/>
        <polygon points='78,70 80,64 82,70' fill='rgba(249,115,22,0.16)'/>
        <text x='10' y='50' font-size='14' fill='rgba(249,115,22,0.16)'>âœ</text>
    `),

    // GiriÅŸimcilik 101: Roket, hedef (target), grafik, para iÅŸareti
    "girisimcilik-101": createSvgPattern(`
        <polygon points='20,5 23,15 17,15' fill='rgba(168,85,247,0.18)'/>
        <rect x='18' y='15' width='4' height='6' fill='rgba(168,85,247,0.16)'/>
        <line x1='16' y1='21' x2='14' y2='25' stroke='rgba(168,85,247,0.16)' stroke-width='0.6'/>
        <line x1='24' y1='21' x2='26' y2='25' stroke='rgba(168,85,247,0.16)' stroke-width='0.6'/>
        <circle cx='70' cy='20' r='8' fill='none' stroke='rgba(99,102,241,0.16)' stroke-width='0.7'/>
        <circle cx='70' cy='20' r='4' fill='none' stroke='rgba(99,102,241,0.18)' stroke-width='0.6'/>
        <circle cx='70' cy='20' r='1.5' fill='rgba(99,102,241,0.20)'/>
        <text x='55' y='70' font-size='14' fill='rgba(168,85,247,0.18)'>â‚º</text>
        <polyline points='10,90 25,80 40,85 55,65 70,70 85,55' fill='none' stroke='rgba(99,102,241,0.16)' stroke-width='0.7'/>
        <text x='80' y='90' font-size='10' fill='rgba(168,85,247,0.16)'>ğŸ“ˆ</text>
    `),

    // DÃ¶ngÃ¼sel Ekonomi: Geri dÃ¶nÃ¼ÅŸÃ¼m oklarÄ±, dÃ¶ngÃ¼, yapraklar
    "dongusel-ekonomi": createSvgPattern(`
        <path d='M20 15 A10 10 0 0 1 30 25' fill='none' stroke='rgba(16,185,129,0.20)' stroke-width='0.8'/>
        <polygon points='30,23 33,27 27,27' fill='rgba(16,185,129,0.20)'/>
        <path d='M30 25 A10 10 0 0 1 20 35' fill='none' stroke='rgba(16,185,129,0.18)' stroke-width='0.8'/>
        <polygon points='20,33 17,37 23,37' fill='rgba(16,185,129,0.18)'/>
        <path d='M20 35 A10 10 0 0 1 20 15' fill='none' stroke='rgba(16,185,129,0.16)' stroke-width='0.8'/>
        <polygon points='18,15 22,15 20,11' fill='rgba(16,185,129,0.16)'/>
        <path d='M70 70 C72 65 78 65 80 70 L75 80 L70 70Z' fill='rgba(34,197,94,0.14)'/>
        <path d='M60 45 C62 40 68 40 70 45 L65 55 L60 45Z' fill='rgba(34,197,94,0.16)'/>
        <circle cx='80' cy='20' r='3' fill='none' stroke='rgba(16,185,129,0.16)' stroke-width='0.5' stroke-dasharray='2 2'/>
    `),

    // SÃ¼rdÃ¼rÃ¼lebilirlik: AÄŸaÃ§lar, dÃ¼nya, gÃ¼neÅŸ, yapraklar
    "surdurulebilirlik": createSvgPattern(`
        <circle cx='15' cy='25' r='8' fill='rgba(20,184,166,0.14)'/>
        <rect x='13' y='33' width='4' height='8' fill='rgba(20,184,166,0.16)'/>
        <path d='M65 10 C67 5 73 5 75 10 L70 20 L65 10Z' fill='rgba(16,185,129,0.16)'/>
        <circle cx='50' cy='55' r='10' fill='none' stroke='rgba(20,184,166,0.16)' stroke-width='0.7'/>
        <path d='M45 55 Q50 45 55 55 Q50 65 45 55' fill='rgba(20,184,166,0.12)'/>
        <circle cx='85' cy='75' r='7' fill='none' stroke='rgba(16,185,129,0.14)' stroke-width='0.5'/>
        <line x1='85' y1='68' x2='85' y2='62' stroke='rgba(251,191,36,0.18)' stroke-width='0.7'/>
        <line x1='79' y1='70' x2='75' y2='66' stroke='rgba(251,191,36,0.16)' stroke-width='0.6'/>
        <line x1='91' y1='70' x2='95' y2='66' stroke='rgba(251,191,36,0.16)' stroke-width='0.6'/>
        <path d='M20 80 C22 75 28 75 30 80 L25 90 L20 80Z' fill='rgba(16,185,129,0.14)'/>
    `),

    // Karbon Ayak Ä°zi: Ayak izi, baca, rÃ¼zgar tÃ¼rbini, bulut
    "karbon-ayak-izi": createSvgPattern(`
        <ellipse cx='20' cy='25' rx='5' ry='8' fill='rgba(100,116,139,0.16)' transform='rotate(-10 20 25)'/>
        <circle cx='16' cy='16' r='2' fill='rgba(100,116,139,0.14)'/>
        <circle cx='19' cy='14' r='1.8' fill='rgba(100,116,139,0.14)'/>
        <circle cx='22' cy='14' r='1.6' fill='rgba(100,116,139,0.12)'/>
        <rect x='70' y='50' width='6' height='25' fill='rgba(100,116,139,0.14)'/>
        <path d='M65 50 L73 40 L81 50Z' fill='rgba(100,116,139,0.12)'/>
        <ellipse cx='75' cy='38' rx='8' ry='4' fill='rgba(100,116,139,0.12)'/>
        <circle cx='50' cy='80' r='4' fill='none' stroke='rgba(100,116,139,0.14)' stroke-width='0.6'/>
        <line x1='50' y1='76' x2='50' y2='68' stroke='rgba(100,116,139,0.14)' stroke-width='0.6'/>
        <line x1='50' y1='76' x2='44' y2='80' stroke='rgba(100,116,139,0.14)' stroke-width='0.5'/>
        <line x1='50' y1='76' x2='56' y2='80' stroke='rgba(100,116,139,0.14)' stroke-width='0.5'/>
    `),

    // Su Ayak Ä°zi: Damla, dalgalar, nehir
    "su-ayak-izi": createSvgPattern(`
        <path d='M20 20 Q25 10 30 20 Q25 30 20 20Z' fill='rgba(6,182,212,0.16)'/>
        <path d='M70 50 Q75 40 80 50 Q75 60 70 50Z' fill='rgba(59,130,246,0.14)'/>
        <path d='M45 80 Q48 74 51 80 Q48 86 45 80Z' fill='rgba(6,182,212,0.18)'/>
        <path d='M5 65 Q15 60 25 65 Q35 70 45 65' fill='none' stroke='rgba(6,182,212,0.16)' stroke-width='0.7'/>
        <path d='M5 70 Q15 65 25 70 Q35 75 45 70' fill='none' stroke='rgba(59,130,246,0.14)' stroke-width='0.6'/>
        <path d='M55 25 Q58 19 61 25 Q58 31 55 25Z' fill='rgba(6,182,212,0.12)'/>
        <circle cx='85' cy='15' r='3' fill='none' stroke='rgba(59,130,246,0.14)' stroke-width='0.5'/>
        <circle cx='85' cy='15' r='5' fill='none' stroke='rgba(59,130,246,0.12)' stroke-width='0.4'/>
    `),

    // Ä°klim DeÄŸiÅŸikliÄŸi: Termometre, gÃ¼neÅŸ, buz, alev
    "iklim-degisikligi": createSvgPattern(`
        <rect x='18' y='10' width='4' height='25' rx='2' fill='none' stroke='rgba(239,68,68,0.18)' stroke-width='0.7'/>
        <circle cx='20' cy='38' r='5' fill='rgba(239,68,68,0.16)'/>
        <circle cx='70' cy='15' r='8' fill='none' stroke='rgba(249,115,22,0.16)' stroke-width='0.6'/>
        <line x1='70' y1='5' x2='70' y2='1' stroke='rgba(249,115,22,0.18)' stroke-width='0.5'/>
        <line x1='78' y1='15' x2='82' y2='15' stroke='rgba(249,115,22,0.18)' stroke-width='0.5'/>
        <line x1='62' y1='15' x2='58' y2='15' stroke='rgba(249,115,22,0.18)' stroke-width='0.5'/>
        <polygon points='50,60 55,75 60,65 65,80 45,80 50,65 45,75' fill='rgba(239,68,68,0.14)'/>
        <path d='M80 70 L82 65 L85 72 L88 62 L90 70' fill='none' stroke='rgba(147,197,253,0.20)' stroke-width='0.8'/>
        <polygon points='80,70 85,78 90,70' fill='rgba(147,197,253,0.14)'/>
    `),

    // Etkili CV HazÄ±rlama: Belge, yÄ±ldÄ±z, onay iÅŸaretleri, kalem
    "etkili-cv-hazirlama": createSvgPattern(`
        <rect x='10' y='10' width='20' height='28' rx='2' fill='none' stroke='rgba(244,63,94,0.18)' stroke-width='0.7'/>
        <line x1='14' y1='17' x2='26' y2='17' stroke='rgba(244,63,94,0.16)' stroke-width='0.5'/>
        <line x1='14' y1='21' x2='24' y2='21' stroke='rgba(244,63,94,0.14)' stroke-width='0.5'/>
        <line x1='14' y1='25' x2='22' y2='25' stroke='rgba(244,63,94,0.12)' stroke-width='0.5'/>
        <line x1='14' y1='29' x2='26' y2='29' stroke='rgba(244,63,94,0.14)' stroke-width='0.5'/>
        <polygon points='70,10 72,16 78,16 73,20 75,26 70,22 65,26 67,20 62,16 68,16' fill='rgba(219,39,119,0.16)'/>
        <path d='M55 70 L60 75 L70 60' fill='none' stroke='rgba(244,63,94,0.20)' stroke-width='1'/>
        <line x1='80' y1='60' x2='80' y2='90' stroke='rgba(244,63,94,0.14)' stroke-width='0.7'/>
        <polygon points='78,60 80,54 82,60' fill='rgba(244,63,94,0.14)'/>
        <text x='15' y='80' font-size='12' fill='rgba(244,63,94,0.16)'>A+</text>
    `),

    // LinkedIn KullanÄ±mÄ±: AÄŸ dÃ¼ÄŸÃ¼mleri, profil, baÄŸlantÄ± Ã§izgileri
    "linkedin-kullanimi": createSvgPattern(`
        <circle cx='20' cy='20' r='6' fill='none' stroke='rgba(37,99,235,0.18)' stroke-width='0.7'/>
        <circle cx='20' cy='17' r='2.5' fill='rgba(37,99,235,0.16)'/>
        <path d='M15 25 Q20 22 25 25' fill='none' stroke='rgba(37,99,235,0.16)' stroke-width='0.5'/>
        <circle cx='70' cy='30' r='4' fill='none' stroke='rgba(79,70,229,0.16)' stroke-width='0.6'/>
        <circle cx='85' cy='15' r='4' fill='none' stroke='rgba(79,70,229,0.16)' stroke-width='0.6'/>
        <line x1='74' y1='28' x2='81' y2='17' stroke='rgba(79,70,229,0.14)' stroke-width='0.5'/>
        <circle cx='50' cy='70' r='5' fill='none' stroke='rgba(37,99,235,0.16)' stroke-width='0.6'/>
        <circle cx='30' cy='80' r='3' fill='none' stroke='rgba(37,99,235,0.14)' stroke-width='0.5'/>
        <circle cx='75' cy='75' r='3' fill='none' stroke='rgba(37,99,235,0.14)' stroke-width='0.5'/>
        <line x1='45' y1='72' x2='33' y2='78' stroke='rgba(37,99,235,0.12)' stroke-width='0.4'/>
        <line x1='55' y1='72' x2='72' y2='74' stroke='rgba(37,99,235,0.12)' stroke-width='0.4'/>
        <text x='60' y='60' font-size='8' fill='rgba(37,99,235,0.16)' font-family='sans-serif'>in</text>
    `),

    // Etkili Portfolyo HazÄ±rlama: Ã‡erÃ§eve, galeri, sunum ekranÄ±
    "etkili-portfolyo-hazirlama": createSvgPattern(`
        <rect x='10' y='10' width='22' height='16' rx='1' fill='none' stroke='rgba(139,92,246,0.18)' stroke-width='0.7'/>
        <line x1='10' y1='15' x2='32' y2='15' stroke='rgba(139,92,246,0.14)' stroke-width='0.4'/>
        <rect x='13' y='17' width='7' height='6' fill='rgba(139,92,246,0.12)'/>
        <rect x='22' y='17' width='7' height='6' fill='rgba(139,92,246,0.10)'/>
        <rect x='60' y='55' width='25' height='18' rx='1' fill='none' stroke='rgba(147,51,234,0.16)' stroke-width='0.7'/>
        <polygon points='67,60 67,70 75,65' fill='rgba(147,51,234,0.14)'/>
        <rect x='45' y='15' width='12' height='14' fill='none' stroke='rgba(139,92,246,0.16)' stroke-width='0.6'/>
        <path d='M47 25 L50 21 L53 24 L55 20' fill='none' stroke='rgba(139,92,246,0.14)' stroke-width='0.5'/>
        <circle cx='20' cy='70' r='8' fill='none' stroke='rgba(147,51,234,0.14)' stroke-width='0.6'/>
        <polygon points='17,68 17,73 23,70.5' fill='rgba(147,51,234,0.14)'/>
    `),

    // Proje Yazma: Pano, akÄ±ÅŸ diyagramÄ±, onay kutusu, takvim
    "proje-yazma": createSvgPattern(`
        <rect x='10' y='5' width='22' height='30' rx='2' fill='none' stroke='rgba(245,158,11,0.18)' stroke-width='0.7'/>
        <rect x='16' y='2' width='10' height='5' rx='1' fill='rgba(245,158,11,0.16)'/>
        <rect x='14' y='13' width='4' height='4' fill='none' stroke='rgba(245,158,11,0.16)' stroke-width='0.5'/>
        <path d='M15 15 L16 16.5 L18 13.5' fill='none' stroke='rgba(245,158,11,0.20)' stroke-width='0.6'/>
        <line x1='20' y1='15' x2='28' y2='15' stroke='rgba(245,158,11,0.14)' stroke-width='0.5'/>
        <rect x='14' y='20' width='4' height='4' fill='none' stroke='rgba(245,158,11,0.16)' stroke-width='0.5'/>
        <line x1='20' y1='22' x2='26' y2='22' stroke='rgba(245,158,11,0.14)' stroke-width='0.5'/>
        <rect x='60' y='60' width='30' height='5' rx='1' fill='rgba(234,88,12,0.14)'/>
        <rect x='60' y='68' width='22' height='5' rx='1' fill='rgba(234,88,12,0.12)'/>
        <rect x='60' y='76' width='15' height='5' rx='1' fill='rgba(234,88,12,0.10)'/>
        <circle cx='75' cy='45' r='3' fill='none' stroke='rgba(245,158,11,0.16)' stroke-width='0.6'/>
        <text x='73' y='47' font-size='5' fill='rgba(245,158,11,0.18)'>âœ“</text>
    `),

    // Excel: Tablo hÃ¼creleri, grafikler, formÃ¼ller
    "excel": createSvgPattern(`
        <rect x='10' y='10' width='35' height='25' fill='none' stroke='rgba(22,163,74,0.16)' stroke-width='0.6'/>
        <line x1='10' y1='17' x2='45' y2='17' stroke='rgba(22,163,74,0.14)' stroke-width='0.4'/>
        <line x1='10' y1='22' x2='45' y2='22' stroke='rgba(22,163,74,0.12)' stroke-width='0.4'/>
        <line x1='10' y1='29' x2='45' y2='29' stroke='rgba(22,163,74,0.12)' stroke-width='0.4'/>
        <line x1='22' y1='10' x2='22' y2='35' stroke='rgba(22,163,74,0.12)' stroke-width='0.4'/>
        <line x1='33' y1='10' x2='33' y2='35' stroke='rgba(22,163,74,0.12)' stroke-width='0.4'/>
        <rect x='60' y='80' width='5' height='12' fill='rgba(22,163,74,0.16)'/>
        <rect x='68' y='74' width='5' height='18' fill='rgba(22,163,74,0.18)'/>
        <rect x='76' y='70' width='5' height='22' fill='rgba(22,163,74,0.14)'/>
        <rect x='84' y='65' width='5' height='27' fill='rgba(22,163,74,0.16)'/>
        <text x='55' y='55' font-size='8' fill='rgba(22,163,74,0.18)' font-family='monospace'>Î£</text>
        <text x='15' y='55' font-size='7' fill='rgba(22,163,74,0.14)' font-family='monospace'>fx</text>
    `),

    // Diksiyon & Etkili Ä°letiÅŸim: Mikrofon, konuÅŸma balonu, ses dalgalarÄ±
    "diksiyon-ve-etkili-iletisim": createSvgPattern(`
        <ellipse cx='20' cy='20' rx='6' ry='10' fill='none' stroke='rgba(236,72,153,0.18)' stroke-width='0.7'/>
        <line x1='14' y1='27' x2='26' y2='27' stroke='rgba(236,72,153,0.16)' stroke-width='0.6'/>
        <line x1='20' y1='30' x2='20' y2='36' stroke='rgba(236,72,153,0.16)' stroke-width='0.6'/>
        <line x1='15' y1='36' x2='25' y2='36' stroke='rgba(236,72,153,0.16)' stroke-width='0.5'/>
        <path d='M60 55 Q60 45 70 45 L85 45 Q90 45 90 50 L90 62 Q90 67 85 67 L70 67 L63 73 L65 67 Q60 67 60 62Z' fill='none' stroke='rgba(244,114,182,0.16)' stroke-width='0.7'/>
        <path d='M30 70 Q38 68 38 76 Q38 82 30 82' fill='none' stroke='rgba(236,72,153,0.16)' stroke-width='0.6'/>
        <path d='M30 66 Q42 64 42 76 Q42 86 30 86' fill='none' stroke='rgba(236,72,153,0.12)' stroke-width='0.5'/>
        <path d='M30 62 Q48 58 48 76 Q48 92 30 90' fill='none' stroke='rgba(236,72,153,0.10)' stroke-width='0.4'/>
        <text x='70' y='60' font-size='6' fill='rgba(244,114,182,0.16)'>Aa</text>
    `)
};

