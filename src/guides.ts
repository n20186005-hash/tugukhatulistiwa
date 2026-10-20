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
  "sejarah": {
    "id": {
      "title": "Sejarah Tugu Khatulistiwa",
      "description": "Sejarah Tugu Khatulistiwa Pontianak, dari tonggak kayu 1928 hingga monumen ikonik yang melindungi jejak penanda awal.",
      "intro": [
        "Tugu Khatulistiwa menandai kawasan yang dilalui garis khatulistiwa di Jalan Khatulistiwa, Batu Layang, Pontianak Utara. Lebih dari sekadar titik foto, tempat ini menghubungkan geografi, astronomi, dan sejarah pemetaan.",
        "Bentuknya tidak lahir sekaligus. Monumen saat ini adalah hasil beberapa tahap penandaan yang dimulai sebagai alat survei geografis pada awal abad ke-20."
      ],
      "sections": [
        {
          "heading": "1928–1938: tahapan penanda",
          "body": "Indonesia.travel menjelaskan tonggak dan panah pada 1928, penambahan lingkaran serta panah pada 1930, dan pengembangan 1938 dengan empat tonggak belian."
        },
        {
          "heading": "1990–1991: perlindungan dan duplikat",
          "body": "Sumber pariwisata nasional menjelaskan bangunan pelindung dan duplikat yang dikembangkan 1990–1991 lalu diresmikan September 1991. Tugu sebelumnya berada di dalam; konfirmasikan area yang sedang dibuka."
        }
      ],
      "faq": [
        {
          "q": "Kapan Tugu Khatulistiwa pertama kali dibangun?",
          "a": "Versi pertama didirikan pada 1928 sebagai penanda survei geografis, bukan monumen wisata seperti yang dikenal sekarang."
        },
        {
          "q": "Mengapa bentuknya berubah beberapa kali?",
          "a": "Monumen berkembang melalui beberapa penanda, kemudian bangunan pelindung dan duplikat yang diresmikan 1991."
        },
        {
          "q": "Apakah penanda awal masih ada?",
          "a": "Sumber pariwisata resmi menyatakan tugu sebelumnya berada di dalam bangunan pelindung. Akses ruang saat ini perlu dikonfirmasi kepada petugas."
        }
      ]
    },
    "en": {
      "title": "History of the Equator Monument",
      "description": "The history of the Equator Monument in Pontianak, from a 1928 wooden stake to the landmark that now protects traces of the original marker.",
      "intro": [
        "Tugu Khatulistiwa marks the area crossed by the equator on Jalan Khatulistiwa in Batu Layang, North Pontianak. More than a photo stop, it connects geography, astronomy and the history of mapping.",
        "Its form did not appear all at once. The present monument is the result of several marking stages that began as a geographical-survey tool in the early 20th century."
      ],
      "sections": [
        {
          "heading": "1928–1938: successive markers",
          "body": "Indonesia.travel describes a stake-and-arrow marker in 1928, a ring and arrow added in 1930, and a 1938 development with four belian posts."
        },
        {
          "heading": "1990–1991: protection and replica",
          "body": "The national tourism account describes a protective building and enlarged replica developed in 1990–1991 and inaugurated in September 1991. The earlier monument remains inside; confirm which areas are open."
        }
      ],
      "faq": [
        {
          "q": "When was the Equator Monument first built?",
          "a": "The first version was installed in 1928 as a geographical-survey marker, not the visitor monument known today."
        },
        {
          "q": "Why did its form change several times?",
          "a": "The monument developed through successive markers, then a protective building and replica inaugurated in 1991."
        },
        {
          "q": "Does the original marker still exist?",
          "a": "The official tourism account says the earlier monument remains inside the protective building. Current room access must be confirmed with staff."
        }
      ]
    }
  },
  "tiket-jam-buka": {
    "id": {
      "title": "Tiket & Jam Buka Tugu Khatulistiwa",
      "description": "Informasi tiket masuk, jam buka, fasilitas, dan durasi kunjungan Tugu Khatulistiwa Pontianak sebelum Anda berangkat.",
      "intro": [
        "Gunakan listing bertanggal di bawah untuk persiapan, kemudian konfirmasikan akses dan biaya kepada petugas."
      ],
      "sections": [
        {
          "heading": "Jam: listing Maps bertanggal",
          "body": "Google Maps diperiksa 19 Oktober 2026 mencantumkan 08.00–17.00 setiap hari. Ini bukan jaminan akses hari ini, semua ruang atau pengaturan acara."
        },
        {
          "heading": "Tiket: konfirmasi biaya terkini",
          "body": "Indonesia.travel mencatat retribusi sejak Februari 2024. Nominal saat ini, kategori dan layanan yang termasuk belum terverifikasi; tanyakan kepada petugas sebelum membayar."
        },
        {
          "heading": "Fasilitas dan saran durasi",
          "body": "Tanyakan toilet, parkir, kapasitas dan jalur akses. Sebagai saran perencanaan, sisihkan 45–90 menit sesuai ruang yang dibuka, kebutuhan Anda serta antrean."
        }
      ],
      "faq": [
        {
          "q": "Kapan jam buka?",
          "a": "Maps diperiksa 19 Oktober 2026 mencantumkan 08.00–17.00 setiap hari. Konfirmasikan akses terkini kepada petugas."
        },
        {
          "q": "Berapa harga tiket?",
          "a": "Harga terkini belum terverifikasi. Catatan retribusi historis tidak menetapkan nominal hari ini; tanyakan di pintu masuk."
        },
        {
          "q": "Apakah fasilitas dijamin?",
          "a": "Tidak. Tanyakan toilet, parkir dan aksesibilitas kepada petugas sebelum mengandalkannya."
        }
      ]
    },
    "en": {
      "title": "Tickets & Opening Hours",
      "description": "Entry ticket, opening hours, facilities and visit duration for the Equator Monument in Pontianak, before you travel.",
      "intro": [
        "Use the dated listing below for preparation, then confirm access and charges with staff."
      ],
      "sections": [
        {
          "heading": "Hours: dated Maps listing",
          "body": "Google Maps checked on 19 October 2026 lists 08:00–17:00 daily. This is not a guarantee of today’s access, every room or event arrangements."
        },
        {
          "heading": "Admission: confirm current charges",
          "body": "Indonesia.travel notes a visitor levy introduced in February 2024. Current amounts, categories and included services have not been verified; ask staff before paying."
        },
        {
          "heading": "Facilities and suggested duration",
          "body": "Ask about toilets, parking, capacity and accessible routes. As a planning suggestion, allow 45–90 minutes, adjusted to open rooms, your needs and any queues."
        }
      ],
      "faq": [
        {
          "q": "What are the opening hours?",
          "a": "Maps checked 19 October 2026 lists 08:00–17:00 daily. Confirm current access with staff."
        },
        {
          "q": "How much is admission?",
          "a": "Current prices are unverified. A historical levy reference does not establish today’s amount; ask at the entrance."
        },
        {
          "q": "Are facilities guaranteed?",
          "a": "No. Ask staff about toilets, parking and accessibility before relying on them."
        }
      ]
    }
  },
  "rute-lokasi": {
    "id": {
      "title": "Rute & Lokasi Tugu Khatulistiwa",
      "description": "Cara menuju Tugu Khatulistiwa Pontianak dari bandara dan pusat kota, lengkap dengan koordinat dan tips transportasi umum.",
      "intro": [
        "Tugu berada di Jalan Khatulistiwa, Batu Layang, Pontianak Utara, Pontianak, Kalimantan Barat 78244. Rencanakan dari titik berangkat Anda yang sebenarnya."
      ],
      "sections": [
        {
          "heading": "Pin peta",
          "body": "Pin Maps diperiksa 19 Oktober 2026: 0.000921, 109.3223955. Ini bantuan orientasi, bukan jaminan akses jalan atau pintu masuk."
        },
        {
          "heading": "Dari bandara dan pusat kota",
          "body": "Gunakan perencana perjalanan terkini dan operator pilihan Anda. Konfirmasikan biaya, titik jemput, turun serta opsi pulang; durasi bergantung lalu lintas dan titik berangkat."
        },
        {
          "heading": "Angkutan umum dan parkir",
          "body": "Layanan langsung saat ini belum terverifikasi. Tanyakan kepada operator sebelum naik dan kepada petugas mengenai lokasi parkir yang diizinkan, kapasitas serta biaya."
        }
      ],
      "faq": [
        {
          "q": "Di mana lokasi tugu?",
          "a": "Tugu berada di Jalan Khatulistiwa, Batu Layang, Pontianak Utara, Pontianak, Kalimantan Barat 78244. Rencanakan dari titik berangkat Anda yang sebenarnya."
        },
        {
          "q": "Apakah ada waktu perjalanan bandara yang tetap?",
          "a": "Tidak ada durasi tetap yang dijamin. Periksa rute, lalu lintas dan pengaturan transportasi pada hari perjalanan."
        },
        {
          "q": "Apakah bus langsung sudah dikonfirmasi?",
          "a": "Belum ada rute langsung atau jadwal terkini yang terverifikasi. Konfirmasikan kepada operator sebelum mengandalkannya."
        }
      ]
    },
    "en": {
      "title": "Equator Monument: Route & Location",
      "description": "How to get to the Equator Monument in Pontianak from the airport and city centre, with coordinates and public-transport tips.",
      "intro": [
        "The monument is on Jalan Khatulistiwa, Batu Layang, North Pontianak, Pontianak, West Kalimantan 78244. Plan from your actual departure point."
      ],
      "sections": [
        {
          "heading": "Map pin",
          "body": "Maps pin checked 19 October 2026: 0.000921, 109.3223955. This is a location aid, not a guarantee of road or entrance access."
        },
        {
          "heading": "Airport and city journeys",
          "body": "Use a current journey planner and your chosen transport operator. Confirm fare, pick-up, drop-off and return options; journey duration depends on traffic and the departure point."
        },
        {
          "heading": "Public transport and parking",
          "body": "A current direct service has not been verified. Ask operators before boarding and staff about permitted parking, capacity and charges."
        }
      ],
      "faq": [
        {
          "q": "Where is the monument?",
          "a": "The monument is on Jalan Khatulistiwa, Batu Layang, North Pontianak, Pontianak, West Kalimantan 78244. Plan from your actual departure point."
        },
        {
          "q": "Is there a fixed airport journey time?",
          "a": "No fixed duration is guaranteed. Check your route, traffic and transport arrangements on the day."
        },
        {
          "q": "Is a direct bus confirmed?",
          "a": "No current direct route or timetable has been verified. Confirm with an operator before planning around it."
        }
      ]
    }
  },
  "kulminasi-matahari": {
    "id": {
      "title": "Kulminasi Matahari di Tugu Khatulistiwa",
      "description": "Fenomena kulminasi matahari di Tugu Khatulistiwa: kapan terjadi, mengapa bayangan menghilang, dan tips mengamatinya.",
      "intro": [
        "Kulminasi utama terjadi ketika Matahari berada di zenit. Bayangan benda tegak dapat tampak sangat pendek; ini bukan pertunjukan harian atau janji pukul dua belas."
      ],
      "sections": [
        {
          "heading": "Waktu dan keterlihatan",
          "body": "Waktu astronomis dihitung untuk lokasi dan tahun tertentu. Awan dan cuaca memengaruhi apa yang dapat diamati, bukan saat perhitungannya. Periksa informasi BMKG terkini."
        },
        {
          "heading": "Kegiatan bertanggal bukan jadwal berikutnya",
          "body": "Berita Pemerintah Kota Pontianak 23 Maret 2026 menjelaskan kegiatan periode itu. Ini tidak menetapkan program harian atau acara berikutnya; periksa pengumuman kota baru sebelum datang khusus untuk pengamatan."
        }
      ],
      "faq": [
        {
          "q": "Apakah terjadi setiap hari pukul dua belas?",
          "a": "Tidak. Periksa waktu BMKG terkini untuk lokasi dan tahun; panduan ini tidak menetapkan menit tepat 2026 atau masa depan."
        },
        {
          "q": "Apakah cuaca mengubah saat perhitungan?",
          "a": "Tidak. Cuaca memengaruhi keterlihatan pengamatan, sedangkan waktunya ditentukan perhitungan astronomi."
        },
        {
          "q": "Apakah kegiatan Maret 2026 adalah jadwal rutin?",
          "a": "Laporan bertanggal itu tidak menetapkan program rutin. Periksa pengumuman resmi terkini."
        }
      ]
    },
    "en": {
      "title": "Solar Culmination at the Equator Monument",
      "description": "The solar culmination phenomenon at the Equator Monument: when it happens, why shadows disappear, and tips for observing it.",
      "intro": [
        "Main culmination occurs when the Sun is at the zenith. Upright objects can cast very short shadows; this is not a daily show or fixed noon appointment."
      ],
      "sections": [
        {
          "heading": "Timing and visibility",
          "body": "Astronomical timing is calculated for a location and year. Clouds and weather affect what observers can see, not the calculated instant. Consult current BMKG information."
        },
        {
          "heading": "A dated event is not the next schedule",
          "body": "Pontianak City’s 23 March 2026 report describes that period’s activity. It does not establish a daily programme or the next event; check a new city announcement before travelling for an observation."
        }
      ],
      "faq": [
        {
          "q": "Does it happen every day at noon?",
          "a": "No. Check current BMKG timing for the location and year; no exact 2026 or future time is asserted here."
        },
        {
          "q": "Does weather change the calculated instant?",
          "a": "No. Weather affects visibility of the observation, while timing is astronomical."
        },
        {
          "q": "Is the March 2026 event a recurring schedule?",
          "a": "No recurring programme is established by that dated report. Check a current official announcement."
        }
      ]
    }
  }
};
