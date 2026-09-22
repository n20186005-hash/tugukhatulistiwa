import type { Locale } from "./i18n";

export type GuideTopic = "sejarah" | "tiket-jam-buka" | "rute-lokasi" | "kulminasi-matahari";

export interface GuideContent {
  title: string;
  description: string;
  intro: string[];
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const guides: Record<GuideTopic, Record<Locale, GuideContent>> = {
  sejarah: {
    id: {
      title: "Sejarah Tugu Khatulistiwa",
      description: "Sejarah Tugu Khatulistiwa Pontianak, dari tonggak kayu 1928 hingga monumen ikonik yang melindungi jejak penanda awal.",
      intro: [
        "Tugu Khatulistiwa menandai kawasan yang dilalui garis khatulistiwa di Jalan Khatulistiwa, Batu Layang, Pontianak Utara. Lebih dari sekadar titik foto, tempat ini menghubungkan geografi, astronomi, dan sejarah pemetaan.",
        "Bentuknya tidak lahir sekaligus. Monumen saat ini adalah hasil beberapa tahap penandaan yang dimulai sebagai alat survei geografis pada awal abad ke-20.",
      ],
      sections: [
        { heading: "Awal penandaan (1928)", body: "Tim ekspedisi menggunakan tonggak kayu untuk menandai lokasi garis lintang nol derajat di Pontianak. Ini menjadi titik awal pengenalan kawasan bagi publik." },
        { heading: "Evolusi bentuk (1930–1938)", body: "Penanda diperbarui menjadi tonggak besi berbentuk silinder, lalu struktur dengan panah dan lingkaran yang memperjelas posisi lintang nol derajat bagi pengunjung." },
        { heading: "Ekspansi modern (1990)", body: "Perluasan besar membentuk tampilan monumen yang dikenal pengunjung saat ini, sekaligus melindungi jejak penanda awal di dalam kompleksnya." },
      ],
      faq: [
        { q: "Kapan Tugu Khatulistiwa pertama kali dibangun?", a: "Versi pertama didirikan pada 1928 sebagai penanda survei geografis, bukan monumen wisata seperti yang dikenal sekarang." },
        { q: "Mengapa bentuknya berubah beberapa kali?", a: "Bentuk berkembang seiring perkembangan penelitian pemetaan dan perluasan kawasan hingga menjadi monumen utuh di tahun 1990." },
        { q: "Apakah penanda awal masih ada?", a: "Jejak penanda awal dilindungi di dalam kompleks monumen saat ini, sehingga pengunjung dapat melihat evolusi penandaan tersebut." },
      ],
    },
    en: {
      title: "History of the Equator Monument",
      description: "The history of the Equator Monument in Pontianak, from a 1928 wooden stake to the landmark that now protects traces of the original marker.",
      intro: [
        "Tugu Khatulistiwa marks the area crossed by the equator on Jalan Khatulistiwa in Batu Layang, North Pontianak. More than a photo stop, it connects geography, astronomy and the history of mapping.",
        "Its form did not appear all at once. The present monument is the result of several marking stages that began as a geographical-survey tool in the early 20th century.",
      ],
      sections: [
        { heading: "First marking (1928)", body: "An expedition team used a wooden stake to mark the zero-degree latitude at Pontianak. This became the public's first introduction to the area." },
        { heading: "Evolving form (1930–1938)", body: "The marker was renewed as a cylindrical iron post, then a structure with an arrow and ring that clarified the zero-degree position for visitors." },
        { heading: "Modern expansion (1990)", body: "A major expansion created the monument visitors recognise today, while protecting traces of the early marker within its complex." },
      ],
      faq: [
        { q: "When was the Equator Monument first built?", a: "The first version was installed in 1928 as a geographical-survey marker, not the visitor monument known today." },
        { q: "Why did its form change several times?", a: "The shape evolved with mapping research and site expansion until it became the complete monument in 1990." },
        { q: "Does the original marker still exist?", a: "Traces of the early marker are preserved within the present monument complex, so visitors can see how the marking evolved." },
      ],
    },
  },
  "tiket-jam-buka": {
    id: {
      title: "Tiket & Jam Buka Tugu Khatulistiwa",
      description: "Informasi tiket masuk, jam buka, fasilitas, dan durasi kunjungan Tugu Khatulistiwa Pontianak sebelum Anda berangkat.",
      intro: [
        "Gunakan halaman ini sebagai daftar persiapan. Informasi operasional dapat berubah, sehingga periksa kembali melalui kanal resmi atau petugas di lokasi.",
        "Data berikut disusun dari sistem pariwisata nasional dan keterangan Pemerintah Kota Pontianak.",
      ],
      sections: [
        { heading: "Jam operasional", body: "Sistem pariwisata nasional mencantumkan kunjungan setiap hari pukul 08.00–16.00. Waktu dapat berubah, jadi konfirmasikan sebelum datang." },
        { heading: "Harga tiket masuk", body: "Tiket masuk tugu tercantum Rp5.000. Pemerintah kota juga menyatakan retribusi berlaku sejak Februari 2024. Harga dapat berubah; konfirmasi sebelum berangkat." },
        { heading: "Fasilitas", body: "Kompleks diketahui memiliki area parkir, toilet, area istirahat, dan ruang informasi atau pajangan. Ketersediaan dan kondisi dapat berubah—tanyakan langsung saat tiba." },
        { heading: "Durasi kunjungan", body: "Sediakan sekitar 45–90 menit untuk penanda, ruang edukasi, dan foto. Tambahkan waktu pada akhir pekan atau saat ada acara." },
      ],
      faq: [
        { q: "Berapa harga tiket masuk Tugu Khatulistiwa?", a: "Sistem pariwisata nasional mencantumkan Rp5.000 untuk masuk tugu. Pemerintah kota juga menyatakan retribusi berlaku sejak Februari 2024. Konfirmasi harga terbaru sebelum berangkat." },
        { q: "Apakah ada biaya lain di lokasi?", a: "Informasi menyebut retribusi kunjungan sejak 2024. Biaya parkir atau layanan lain dapat berubah; tanyakan petugas di lokasi untuk detail terkini." },
        { q: "Berapa lama waktu yang diperlukan?", a: "Sebagai saran perencanaan, sisihkan 45–90 menit. Waktu lebih panjang mungkin diperlukan pada akhir pekan atau saat ada acara." },
      ],
    },
    en: {
      title: "Tickets & Opening Hours",
      description: "Entry ticket, opening hours, facilities and visit duration for the Equator Monument in Pontianak, before you travel.",
      intro: [
        "Use this page as a preparation list. Operational information can change, so check official channels or speak to on-site staff before travelling.",
        "The following data is compiled from Indonesia’s national tourism system and statements by Pontianak City Government.",
      ],
      sections: [
        { heading: "Opening hours", body: "The national tourism system lists daily visits from 08:00 to 16:00. Times can change, so confirm before arriving." },
        { heading: "Entry ticket", body: "The monument entry fee is listed at IDR 5,000. The city also says a visitor levy has applied since February 2024. Fees can change; confirm before travelling." },
        { heading: "Facilities", body: "The complex is known to include parking, toilets, rest areas and information or display space. Availability and condition may change—ask on arrival." },
        { heading: "Visit duration", body: "Allow around 45–90 minutes for the marker, educational area and photographs. Add time on weekends or during events." },
      ],
      faq: [
        { q: "How much is the entry ticket?", a: "The national tourism system lists IDR 5,000 for entry. The city also says a visitor levy has applied since February 2024. Confirm the latest fee before travelling." },
        { q: "Are there other on-site charges?", a: "Public information mentions a visitor levy since 2024. Parking or other services may change; ask staff on site for current details." },
        { q: "How long should I allow?", a: "As a planning suggestion, set aside 45–90 minutes. Longer may be needed on weekends or during events." },
      ],
    },
  },
  "rute-lokasi": {
    id: {
      title: "Rute & Lokasi Tugu Khatulistiwa",
      description: "Cara menuju Tugu Khatulistiwa Pontianak dari bandara dan pusat kota, lengkap dengan koordinat dan tips transportasi umum.",
      intro: [
        "Tugu Khatulistiwa berada di Jalan Khatulistiwa, Batu Layang, Pontianak Utara, sekitar 3 km di utara pusat kota menurut Indonesia.travel.",
        "Lalu lintas dan angkutan berubah. Pilihan berikut menjelaskan jenis perjalanan yang dapat dipertimbangkan tanpa mempromosikan operator tertentu.",
      ],
      sections: [
        { heading: "Lokasi & koordinat", body: "Alamat: Jl. Khatulistiwa, Batu Layang, Pontianak Utara. Koordinat: 0,000721° Lintang, 109,322105° Bujur. Monumen berada ±3 km utara pusat kota." },
        { heading: "Dari Bandara Supadio", body: "Taksi bandara atau transportasi berbasis aplikasi biasanya pilihan paling langsung. Perjalanan sekitar 30–45 menit bergantung lalu lintas." },
        { heading: "Dari pusat Pontianak", body: "Gunakan kendaraan pribadi, taksi, ojek, atau angkutan umum yang menuju Pontianak Utara/Jalan Khatulistiwa." },
        { heading: "Transportasi umum", body: "Cari rute lokal yang melewati Jalan Khatulistiwa atau ke Pontianak Utara. Tanyakan pengemudi sebelum naik apakah kendaraan melewati kawasan tugu." },
        { heading: "Berkendara & parkir", body: "Area parkir tercantum dalam informasi kunjungan umum. Datang lebih awal pada akhir pekan atau masa kulminasi, dan ikuti arahan petugas." },
      ],
      faq: [
        { q: "Di mana persisnya lokasi Tugu Khatulistiwa?", a: "Di Jalan Khatulistiwa, Batu Layang, Pontianak Utara, pada koordinat 0° lintang. Jaraknya sekitar 3 km utara pusat kota." },
        { q: "Bagaimana cara ke sana dari bandara?", a: "Taksi bandara atau transportasi berbasis aplikasi adalah pilihan paling langsung, dengan perjalanan sekitar 30–45 menit tergantung lalu lintas." },
        { q: "Apakah mudah dijangkau transportasi umum?", a: "Ada rute lokal menuju Pontianak Utara, namun jaringan dapat berubah. Tanyakan pengemudi sebelum naik agar tidak salah turun." },
      ],
    },
    en: {
      title: "Route & Location",
      description: "How to get to the Equator Monument in Pontianak from the airport and city centre, with coordinates and public-transport tips.",
      intro: [
        "Tugu Khatulistiwa is on Jalan Khatulistiwa, Batu Layang, North Pontianak, about 3 km north of the city centre according to Indonesia.travel.",
        "Traffic and public transport change. The options below describe types of journey to consider without promoting a particular operator.",
      ],
      sections: [
        { heading: "Location & coordinates", body: "Address: Jl. Khatulistiwa, Batu Layang, North Pontianak. Coordinates: 0.000721° N, 109.322105° E. The monument is about 3 km north of the city centre." },
        { heading: "From Supadio Airport", body: "Airport taxis and app-based transport are typically the most direct choices. The journey is roughly 30–45 minutes depending on traffic." },
        { heading: "From central Pontianak", body: "Use a private vehicle, taxi, motorcycle ride or local public transport travelling to North Pontianak / Jalan Khatulistiwa." },
        { heading: "Public transport", body: "Look for local routes that pass Jalan Khatulistiwa or head to North Pontianak. Ask the driver before boarding whether the vehicle passes the monument area." },
        { heading: "Driving & parking", body: "Parking is listed in general visitor information. Arrive earlier on weekends or during culmination season, and follow staff directions." },
      ],
      faq: [
        { q: "Where exactly is the Equator Monument?", a: "On Jalan Khatulistiwa, Batu Layang, North Pontianak, at 0° latitude. It is about 3 km north of the city centre." },
        { q: "How do I get there from the airport?", a: "Airport taxis or app-based transport are the most direct choices, with a journey of roughly 30–45 minutes depending on traffic." },
        { q: "Is it easy to reach by public transport?", a: "Local routes head to North Pontianak, but networks can change. Ask the driver before boarding so you do not miss the stop." },
      ],
    },
  },
  "kulminasi-matahari": {
    id: {
      title: "Kulminasi Matahari di Tugu Khatulistiwa",
      description: "Fenomena kulminasi matahari di Tugu Khatulistiwa: kapan terjadi, mengapa bayangan menghilang, dan tips mengamatinya.",
      intro: [
        "Sekitar 21–23 Maret dan 21–23 September, matahari dapat berada sangat dekat di atas kepala pada tengah hari. Pada saat kulminasi, bayangan benda tegak seakan bersembunyi tepat di bawahnya.",
        "Tanggal dan jam pengamatan dipengaruhi perhitungan astronomi serta cuaca. Anggap rentang ini sebagai petunjuk, bukan janji waktu yang tetap.",
      ],
      sections: [
        { heading: "Apa itu kulminasi?", body: "Kulminasi matahari terjadi ketika matahari mencapai titik tertinggi di langit pada siang hari. Di garis khatulistiwa, hal ini terjadi pada saat matahari hampir tepat di atas." },
        { heading: "Kapan terjadi?", body: "Secara umum sekitar 21–23 Maret dan 21–23 September setiap tahun. Waktu pastinya bergantung pada perhitungan astronomi tahun berjalan." },
        { heading: "Mengapa bayangan menghilang?", body: "Saat matahari sangat dekat di atas kepala, bayangan benda tegak menyusut dan tampak berada tepat di bawah objek, sehingga seakan menghilang." },
        { heading: "Tips mengamati", body: "Periksa agenda lokal untuk tanggal dan jam perkiraan, datang lebih awal, dan siapkan hari cerah karena cuaca memengaruhi pengamatan." },
      ],
      faq: [
        { q: "Kapan fenomena kulminasi terjadi?", a: "Biasanya sekitar 21–23 Maret dan 21–23 September setiap tahun, bergantung perhitungan astronomi tahun berjalan." },
        { q: "Mengapa bayangan seakan menghilang?", a: "Karena matahari berada sangat dekat di atas kepala, bayangan benda tegak menyusut ke titik di bawah objek sehingga tampak menghilang." },
        { q: "Apakah waktu kulminasi bisa diprediksi pasti?", a: "Tanggal dan jam dipengaruhi perhitungan astronomi serta cuaca, sehingga lebih baik memeriksa agenda lokal daripada menganggapnya waktu tetap." },
      ],
    },
    en: {
      title: "Solar Culmination at the Equator Monument",
      description: "The solar culmination phenomenon at the Equator Monument: when it happens, why shadows disappear, and tips for observing it.",
      intro: [
        "Around 21–23 March and 21–23 September, the sun can sit very near overhead at midday. At culmination, the shadow of an upright object seems to gather directly beneath it.",
        "Dates and observation times depend on astronomical calculations and weather. Treat these windows as a cue to check local schedules, not as a fixed appointment.",
      ],
      sections: [
        { heading: "What is culmination?", body: "Solar culmination occurs when the sun reaches its highest point in the sky at noon. At the equator, this happens when the sun is almost directly overhead." },
        { heading: "When does it happen?", body: "Generally around 21–23 March and 21–23 September each year. The exact time depends on the astronomical calculation for that year." },
        { heading: "Why do shadows disappear?", body: "When the sun is almost directly overhead, the shadow of an upright object shrinks to a point directly beneath it, so it seems to vanish." },
        { heading: "Observation tips", body: "Check local listings for the expected date and time, arrive early, and hope for clear weather since conditions affect the view." },
      ],
      faq: [
        { q: "When does the culmination happen?", a: "Usually around 21–23 March and 21–23 September each year, depending on the astronomical calculation for that year." },
        { q: "Why do shadows seem to disappear?", a: "Because the sun is almost directly overhead, the shadow of an upright object shrinks to a point beneath it and appears to vanish." },
        { q: "Can the culmination time be predicted exactly?", a: "Dates and times depend on astronomical calculations and weather, so it is better to check local listings than treat it as a fixed time." },
      ],
    },
  },
};
