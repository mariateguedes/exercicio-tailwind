import "../App.css";
import thumb_article21 from "../assets/thumb_article21.png";
import thumb_article25 from "../assets/thumb_article25.png";
import thumb_article19 from "../assets/thumb_article19.png";
import thumb_article18 from "../assets/thumb_article18.png";
import thumb_article17 from "../assets/thumb_article17.png";

const data = [
  {
    image: thumb_article21,
    date: "Januari 20, 2022",
    title:
      "Membuat Kumpulan referensi UI Design sebagai alat bantu saat membuat design",
    text: "Cara saya mengumpulkan dan menggunakan referensi sebagai alat bantu saat membuat UI design.",
  },
  {
    image: thumb_article25,
    date: "Februari 26, 2022",
    title: "Beberapa pertanyaan saat memulai project design dengan klien",
    text: "Cari tahu bisnisya, Cari tahu opa yang ditawarkan kepada customer, cari tahu kebutuhan project nya.",
  },
  {
    image: thumb_article19,
    date: "Januari 08, 2022",
    title: "Pembuatan UI Design harus selalu pakai riset?",
    text: "Apakah mengubah bentuk tombol dari kotak menjadi rounded juda harus menggunakan riset? Terlalu memakan waktu enggak sih?",
  },
  {
    image: thumb_article18,
    date: "Januari 05, 2022",
    title: "UI Designer sebaiknya memahami bisnis klien",
    text: "Memahami bisnis dan mengerti kebutuhan klien adalah pondasi awal untuk membuat design yang baik",
  },
  {
    image: thumb_article17,
    date: "Januari 02, 2022",
    title: "Handover File Design Website ke Developer",
    text: "UI/UX tidak hanya tentang memudahkan user atau pengguna tapi juga memudahkan rekan kerja seperti developer",
  },
];

const data2 = [
  {
    date: "Desember 26",
    title: "Longkah Membuat Dashboard Responsive",
  },
  {
    date: "Augustus 13",
    title: "Belajar pola design dari mencoba aplikasi",
  },
  {
    date: "Juli 27",
    title: "Cara cepat belajar design landing page",
  },
  {
    date: "April 13",
    title: "Eksplorasi design presentasi dengan Figma",
  },
  {
    date: "Maret 16",
    title: "Mengenai benar dan salah pada UI Design",
  },
  {
    date: "Maret 15",
    title: "Tentang membuat design responsive",
  },
  {
    date: "Maret 05",
    title: "Tentang Creativity Block pada UI Designer",
  },
  {
    date: "Maret 01",
    title: "Memelih foto yang cocok untuk desain website",
  },
  {
    date: "Februari 28",
    title: "Membuat Desain header yang proporsional",
  },
  {
    date: "Februari 23",
    title: "Sebaiknya Belajar UI Design mulai dari mana?",
  },
  {
    date: "Februari 21",
    title: "Beberapa Pertanyaan tentang terjun di industri UI/UX",
  },
  {
    date: "Februari 18",
    title: "Dari Website Programmer Menjadi UI Designer",
  },
];

function SecondWhiteContainer() {
  return (
    <div className="container mx-auto bg-base p-12 flex gap-10">
      <div className="basis-2/3">
        <p className="text-title-gray">ARTIKEL LAINNYA</p>
        <div className="flex">
          <div className="">
            {data.map((item) => (
              <div className="flex gap-8 mb-10">
                <div className="grid content-start gap-1.5">
                  <p className="text-data-primary-base-low">{item.date}</p>
                  <p className="text-primary text-xl font-black">
                    {item.title}
                  </p>
                  <p className="text-primary-base-low text-sm tracking-wide">
                    {item.text}
                  </p>
                </div>
                <div className="max-w-[20rem] min-w-[20rem]">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-1/3">
        <p className="text-title-gray">ARSIP 2021</p>
        <div className="divide-y divide-slate-200">
          {data2.map((item) => (
            <div className="p-2 pb-4">
              <p className="text-data-primary-base-low">{item.date}</p>
              <p className="text-primary text-lg font-extrabold tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondWhiteContainer;
