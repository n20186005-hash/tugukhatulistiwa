import type { Locale } from "./i18n";

export type LegalDoc = "privacy" | "terms" | "cookies";

export interface LegalContent {
  kicker: string;
  title: string;
  updated: string;
  lede: string;
  sections: { heading: string; body: string }[];
  labels?: { save: string; reject: string; saved: string; alwaysOn: string };
}

export const legal: Record<LegalDoc, Record<Locale, LegalContent>> = {
  privacy: {
    id: {
      kicker: "DOKUMEN · 01",
      title: "Kebijakan<br /><em>Privasi.</em>",
      updated: "Terakhir diperbarui: Agustus 2026",
      lede: "Kami mengumpulkan jumlah data minimum yang diperlukan untuk menjalankan situs panduan independen ini dan memahami penggunaan secara agregat.",
      sections: [
        { heading: "Informasi yang kami kumpulkan", body: "Data dapat mencakup informasi penelusuran dasar seperti alamat IP, tipe browser dan halaman yang dikunjungi; cookie serta teknologi serupa; dan informasi yang Anda berikan secara sukarela melalui kontak atau email." },
        { heading: "Cara kami menggunakannya", body: "Kami menggunakannya untuk memperbaiki isi dan pengalaman situs, memahami pola penggunaan secara agregat, menanggapi permintaan, dan memenuhi kewajiban hukum yang berlaku." },
        { heading: "Layanan pihak ketiga", body: "Situs ini dapat memuat Google Maps untuk peta lokasi. Google Analytics hanya dimuat bila Anda mengizinkan cookie analitik. Layanan tersebut memiliki kebijakan privasinya sendiri." },
        { heading: "Hak Anda", body: "Sesuai GDPR dan peraturan yang relevan, Anda dapat meminta akses, koreksi atau penghapusan data pribadi, menolak pemrosesan tertentu, atau mengajukan keluhan kepada otoritas terkait." },
      ],
    },
    en: {
      kicker: "DOCUMENT · 01",
      title: "Privacy<br /><em>Policy.</em>",
      updated: "Last updated: August 2026",
      lede: "We collect the minimum data needed to run this independent guide and to understand use in aggregate.",
      sections: [
        { heading: "Information we collect", body: "This may include basic browsing information such as IP address, browser type and pages visited; cookies and similar technologies; and information you voluntarily provide through contact or email." },
        { heading: "How we use it", body: "We use it to improve site content and experience, understand aggregate usage patterns, respond to requests, and meet applicable legal obligations." },
        { heading: "Third-party services", body: "This site may embed Google Maps for location mapping. Google Analytics is loaded only when you allow analytics cookies. These services maintain their own privacy policies." },
        { heading: "Your rights", body: "Under the GDPR and relevant regulations, you may request access, correction or deletion of personal data, object to certain processing, or lodge a complaint with a relevant authority." },
      ],
    },
  },
  terms: {
    id: {
      kicker: "DOKUMEN · 02",
      title: "Ketentuan<br /><em>Layanan.</em>",
      updated: "Terakhir diperbarui: Agustus 2026",
      lede: "Dengan mengakses dan menggunakan situs ini, Anda setuju pada ketentuan ini.",
      sections: [
        { heading: "Penggunaan konten", body: "Semua materi pada situs ini disediakan hanya sebagai referensi. Kami adalah situs informasi perjalanan independen pihak ketiga dan tidak berafiliasi dengan tempat wisata, lembaga pemerintah, atau operator komersial mana pun." },
        { heading: "Ketepatan informasi", body: "Kami berupaya membuat informasi akurat dan tepat waktu, tetapi tidak menjamin kelengkapan atau ketepatannya. Rute, kondisi, layanan, biaya dan jadwal dapat berubah; verifikasi hal penting melalui kanal resmi sebelum bepergian." },
        { heading: "Kekayaan intelektual", body: "Desain dan teks asli situs ini dilindungi. Foto ditampilkan sesuai lisensinya dan tetap menjadi hak fotografernya. Peta Google digunakan sesuai ketentuan layanan Google." },
        { heading: "Batasan tanggung jawab", body: "Situs ini disediakan “sebagaimana adanya” tanpa jaminan. Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan informasi ini, termasuk keputusan perjalanan yang dibuat berdasarkan konten situs." },
      ],
    },
    en: {
      kicker: "DOCUMENT · 02",
      title: "Terms of<br /><em>Service.</em>",
      updated: "Last updated: August 2026",
      lede: "By accessing and using this site, you agree to these terms.",
      sections: [
        { heading: "Use of content", body: "All material on this site is supplied for reference only. We are an independent third-party travel information site and are not affiliated with any attraction, government institution or commercial operator." },
        { heading: "Accuracy of information", body: "We aim to make information accurate and timely, but do not guarantee its completeness or accuracy. Routes, conditions, services, fees and schedules can change; verify important details through official channels before travelling." },
        { heading: "Intellectual property", body: "The site’s original design and text are protected. Photos are displayed under their stated licences and remain the rights of their photographers. Google Maps is used under Google’s terms of service." },
        { heading: "Limitation of liability", body: "This site is provided “as is” without warranty. We are not liable for loss resulting from use of this information, including travel decisions made from site content." },
      ],
    },
  },
  cookies: {
    id: {
      kicker: "DOKUMEN · 03",
      title: "Pengaturan<br /><em>Cookie.</em>",
      updated: "Terakhir diperbarui: Agustus 2026",
      lede: "Cookie membantu situs mengingat preferensi Anda. Anda dapat mengelola izin analitik di bawah ini kapan saja.",
      sections: [
        { heading: "Cookie penting", body: "Diperlukan agar pengaturan dasar situs berfungsi dan tidak dapat dimatikan di halaman ini." },
        { heading: "Cookie analitik", body: "Jika diizinkan, Google Analytics mengumpulkan data penggunaan anonim untuk membantu memahami bagaimana panduan ini digunakan." },
        { heading: "Preferensi", body: "Pilihan bahasa disimpan secara lokal di browser Anda agar kunjungan berikutnya konsisten." },
      ],
      labels: { save: "Simpan preferensi", reject: "Tolak analitik", saved: "Preferensi Anda telah disimpan.", alwaysOn: "Selalu aktif" },
    },
    en: {
      kicker: "DOCUMENT · 03",
      title: "Cookie<br /><em>Settings.</em>",
      updated: "Last updated: August 2026",
      lede: "Cookies help the site remember your preferences. You can manage analytics permission below at any time.",
      sections: [
        { heading: "Essential cookies", body: "These are needed for basic site settings to work and cannot be turned off on this page." },
        { heading: "Analytics cookies", body: "If allowed, Google Analytics collects anonymous usage data to help us understand how this guide is used." },
        { heading: "Preferences", body: "Your language choice is saved locally in your browser so later visits remain consistent." },
      ],
      labels: { save: "Save preferences", reject: "Reject analytics", saved: "Your preferences have been saved.", alwaysOn: "Always active" },
    },
  },
};
