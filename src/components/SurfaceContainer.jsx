import "../App.css";
import logo from "../assets/logo.png";
import thumb_article20 from "../assets/thumb_article20.png";
import thumb_article30 from "../assets/thumb_article30.png";
import thumb_article24 from "../assets/thumb_article24.png";
import thumb_article12 from "../assets/thumb_article12.png";
import Group from "../assets/Group.png";
import Icons from "./Icons";

const data = [
  {
    image: thumb_article30,
    date: "Maret 27, 2022",
    title:
      "Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun ke Industri",
  },
  {
    image: thumb_article24,
    date: "Februari 15, 2022",
    title: "Proses membuat layout dan komposisi pada UI Design",
  },
  {
    image: thumb_article12,
    date: "Agustus 11, 2021",
    title: "Apakah menggunakan Grid akan membatasi kreatitas UI Designer?",
  },
];

function SurfaceContainer() {
  return (
    <div className="container mx-auto bg-surface shadow border px-12">
      <div className="container h-36 flex grow justify-around">
        <div className="flex grow gap-8 items-center basis-3/4">
          <div className="w-10">
            <img src={logo} alt="Logo" />
          </div>
          <button className="btn">LEARN</button>
          <button className="btn">BLOG</button>
          <button className="btn">BOOKMARKS</button>
          <button className="btn">UI KIT</button>
          <button className="btn">LAIN NYA</button>
        </div>
        <Icons />
      </div>
      <div className="justify-center p-8 flex grow">
        <div className="opacity-100">
          <img src={Group} alt="The Blog" />
        </div>
      </div>
      <div className="py-10 flex gap-8">
        <div className="grid gap-0.5 w-96 basis-2/4">
          <img src={thumb_article20} alt="thumb_article20" />
          <p className="text-data-surface-low">January 11, 2022</p>
          <p className="text-surface-high text-xl font-black">
            Eksplorasi design untuk melamar pekerjaan UI Designer
          </p>
          <p className="text-surface-low text-sm opacity-75">
            Belum pernah mengerjakan project tapi sering melakukan eksplorasi
            design, bisa kah melamar pekerjaan sebagai design?
          </p>
        </div>
        <div className="basis-2/4 grid">
          <div className="flex">
            <div className="">
              {data.map((item) => (
                <div className="flex gap-8 mb-10">
                  <div className="max-w-[12rem] min-w-[12rem]">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="gap-8">
                    <p className="text-data-surface-low">{item.date}</p>
                    <p className="ext-surface-high text-base font-extrabold opacity-75">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurfaceContainer;
