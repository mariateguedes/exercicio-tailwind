import "../App.css";
import thumb_article23 from "../assets/thumb_article23.png";
import thumb_article15 from "../assets/thumb_article15.png";
import thumb_article4 from "../assets/thumb_article4.png";
import thumb_article14 from "../assets/thumb_article14.png";

const data = [
  {
    image: thumb_article23,
    date: "Januari 24, 2022",
    title: "Membuat kontrak project design dengan klien",
    text: "Kontrak project adalah perjanjian tertulis untuk menjamin pekerja dan pemberi berada di posisi aman dan tidak saling mencurangi.",
  },
  {
    image: thumb_article15,
    date: "December 22, 2021",
    title: "Berlatih UX Writing dengan Prindip Dasar Microcopy",
    text: "Clear, Concise, Consistent dan Functional, prinsip dasar microcopy sebagai panduan menulis UX Writing",
  },
  {
    image: thumb_article4,
    date: "Februari 24, 2021",
    title: "Cara memakai inspirasi dari referensi",
    text: "Cari tahu apa yang membuat nya bagus ambil lalu terapkan pada design mu.",
  },
  {
    image: thumb_article14,
    date: "Desember 21, 2021",
    title: "Kadang sebuah UX perlu dibikin susah",
    text: "UX enggak melulu tentang membuat alur yang serba mudah dan cepat. Ada beberapa bagian dari sebuah produk yang musti dibikin susah.",
  },
];

function FirstWhiteContainer() {
  return (
    <div className="container mx-auto bg-base p-12">
      <p className="text-primary-base-lowest text-sm font-semibold pb-4">
        PILIHAN EDITOR
      </p>
      <div className="flex gap-8 divide-x divide-slate-200">
        {data.map((item) => (
          <div className="grid gap-1.5 basis-1/4 pl-6">
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

export default FirstWhiteContainer;
