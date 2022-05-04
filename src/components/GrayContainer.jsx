import "../App.css";
import thumb_article28 from "../assets/thumb_article28.png";
import thumb_article27 from "../assets/thumb_article27.png";
import thumb_article31 from "../assets/thumb_article31.png";
import thumb_article29 from "../assets/thumb_article29.png";
import thumb_article26 from "../assets/thumb_article26.png";
import thumb_article22 from "../assets/thumb_article22.png";

const data = [
  {
    image: thumb_article28,
    date: "Maret 20, 2022",
    title: "Referenci Design 02: Halaman detail artikel pada blog",
    text: "Beberapa referensi halaman artikel yang bisa kamu terapkan untuk design blog pada project atau blog pribadimu",
  },
  {
    image: thumb_article27,
    date: "Maret 19, 2022",
    title: "Referenci Design 01: Bold Number pada design landing page",
    text: "Beberapa layout favorit saya untuk menampilkan angka pencapaian atau statistik pada design landing page",
  },
  {
    image: thumb_article31,
    date: "April 10, 2022",
    title: "Binging saat eksplorasi design? mungkin kurang fokus",
    text: "Jika kamu pernah bingung saat membuat eksplorasi design, saya harap artikel ini bisa membantu mu.",
  },
  {
    image: thumb_article29,
    date: "Maret 25, 2022",
    title: "Kapan menggunakan Switch atau Single Checkbox?",
    text: "Kemiripan konsep Switch dan SIngle Checkbox sering membuat bingung designer untuk menentukan kapan menggunakan nya.",
  },
  {
    image: thumb_article26,
    date: "Maret 11, 2022",
    title: "Pertimbangkan branding sebelum menambahkan faktor deligtful",
    text: "Menambahkan faktor delighful tidak hanya sekedar menambahkan sesuatu yang menyenangkan tapi juga harus selaras dengan branding",
  },
  {
    image: thumb_article22,
    date: "Januari 23, 2022",
    title: "Proses design dalam pembuatan data visual",
    text: "Ada tahapan sebelum ke pemilihan grafik, seperti mengetahui siapa yang akan membaca data",
  },
];

function GrayContainer() {
  return (
    <div className="container mx-auto bg-neutral p-12">
      <p className="text-primary-base-lowest text-sm font-semibold pb-4">
        ARTIKEL TERBARU
      </p>
      <div className="flex gap-8 columns-3">
        {data.slice(0, 3).map((item) => (
          <div className="grid gap-1.5 basis-1/3 mb-8">
            <img src={item.image} alt={item.title} />
            <p className="text-data-primary-base-low">{item.date}</p>
            <p className="text-primary text-lg font-extrabold">{item.title}</p>
            <p className="text-primary-base-low text-xs">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-8 columns-3">
        {data.slice(3, 6).map((item) => (
          <div className="grid gap-1.5 basis-1/3">
            <img src={item.image} alt={item.title} />
            <p className="text-data-primary-base-low">{item.date}</p>
            <p className="text-primary text-lg font-extrabold">{item.title}</p>
            <p className="text-primary-base-low text-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrayContainer;
