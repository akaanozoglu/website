// Her eğitim slug'ına ait görsellerin listesi.
// Yeni eğitim görselleri eklendiğinde buraya eklenir.
// Görseller public/egitimler/{slug}/ klasöründe 1.jpeg, 2.jpeg... şeklinde saklanır.

export const trainingImages: Record<string, string[]> = {
    "algoritmik-dusunme": [
        "/egitimler/algoritmik-dusunme/1.jpeg",
        "/egitimler/algoritmik-dusunme/2.jpeg",
        "/egitimler/algoritmik-dusunme/3.jpeg",
        "/egitimler/algoritmik-dusunme/4.jpeg",
        "/egitimler/algoritmik-dusunme/5.jpeg",
    ],
    "etkili-cv-hazirlama": [
        "/egitimler/etkili-cv-hazirlama/1.jpeg",
        "/egitimler/etkili-cv-hazirlama/2.jpeg",
        "/egitimler/etkili-cv-hazirlama/3.jpeg",
    ],
    "linkedin-kullanimi": [
        "/egitimler/linkedin-kullanimi/1.jpeg",
        "/egitimler/linkedin-kullanimi/2.jpeg",
        "/egitimler/linkedin-kullanimi/3.jpeg",
        "/egitimler/linkedin-kullanimi/4.jpeg",
    ],
};
