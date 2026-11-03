import { useState } from "react";

// To'lovlar ro'yxati.
// sana — solishtirish uchun (YYYY-MM-DD), korinish — ekranda chiqadigan matn
const tolovlar = [
  { id: 1, miqdor: "500 000 so'm", holat: "To'langan", turi: "Payme",  sana: "2026-08-20", korinish: "20 Avg, 2026 09:17" },
  { id: 2, miqdor: "500 000 so'm", holat: "To'langan", turi: "Naqd",   sana: "2026-07-23", korinish: "23 Iyul, 2026 16:17" },
  { id: 3, miqdor: "500 000 so'm", holat: "To'langan", turi: "Payme",  sana: "2026-06-18", korinish: "18 Iyun, 2026 22:53" },
  { id: 4, miqdor: "500 000 so'm", holat: "To'langan", turi: "Paynet", sana: "2026-05-18", korinish: "18 May, 2026 11:14" },
];

const holatlar = ["Barchasi", "To'langan", "To'lanmagan", "Tasdiqlanmagan"];

function Tolovlarim() {
  const [holat, setHolat] = useState("Barchasi");
  const [boshlanish, setBoshlanish] = useState("");
  const [tugash, setTugash] = useState("");

  // Uchala filtr birga ishlaydi
  const natija = tolovlar.filter((t) => {
    const holatMos = holat === "Barchasi" || t.holat === holat;
    // Sana kiritilmagan bo'lsa — cheklamaymiz
    const boshMos = boshlanish === "" || t.sana >= boshlanish;
    const tugMos = tugash === "" || t.sana <= tugash;
    return holatMos && boshMos && tugMos;
  });

  return (
    <div>
      {/* Filtrlar */}
      <div className="flex flex-wrap items-end gap-6 mb-6">
        {/* Holat tanlash */}
        <select
          value={holat}
          onChange={(e) => setHolat(e.target.value)}
          className="w-36 bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 cursor-pointer"
        >
          {holatlar.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        {/* Boshlanish sanasi */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Boshlanish vaqti</label>
          <input
            type="date"
            value={boshlanish}
            onChange={(e) => setBoshlanish(e.target.value)}
            className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
          />
        </div>

        {/* Tugash sanasi */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Tugash vaqti</label>
          <input
            type="date"
            value={tugash}
            onChange={(e) => setTugash(e.target.value)}
            className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Jadval */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-left">
              <th className="px-6 py-4 font-bold text-gray-700 w-20">#</th>
              <th className="px-6 py-4 font-bold text-gray-700">Miqdori</th>
              <th className="px-6 py-4 font-bold text-gray-700">Holati</th>
              <th className="px-6 py-4 font-bold text-gray-700">To'lov turi</th>
              <th className="px-6 py-4 font-bold text-gray-700">Vaqti</th>
            </tr>
          </thead>

          <tbody>
            {natija.map((tolov, index) => (
              <tr key={tolov.id} className="border-b border-gray-100">
                <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                <td className="px-6 py-4 text-gray-700">{tolov.miqdor}</td>
                <td className="px-6 py-4 text-gray-700">{tolov.holat}</td>
                <td className="px-6 py-4 text-gray-700">{tolov.turi}</td>
                <td className="px-6 py-4 text-gray-700">{tolov.korinish}</td>
              </tr>
            ))}

            {/* Filtr hech narsa topmasa */}
            {natija.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-gray-400">
                  To'lovlar topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pastki qator — sahifalash */}
        <div className="flex items-center justify-end gap-4 px-6 py-4 text-sm text-gray-600">
          <select className="bg-transparent cursor-pointer">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>

          <span>
            1-{natija.length} gacha, {natija.length} tadan
          </span>

          <div className="flex gap-1">
            <button disabled className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button disabled className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tolovlarim;
