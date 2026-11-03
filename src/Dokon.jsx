import { useState } from "react";

// Mahsulotlar ro'yxati
const mahsulotlar = [
  { id: 1, nom: "Najot Ta'lim ruchkasi",                          narx: 800,  emoji: "🖊️" },
  { id: 2, nom: "Ibrat farzandlaridan til o'rganish uchun chegirma", narx: 1000, emoji: "📘" },
  { id: 3, nom: "Stikerlar to'plami",                             narx: 1100, emoji: "🎉" },
  { id: 4, nom: "Ibrat farzandlari uchun chegirma",               narx: 1200, emoji: "🎁" },
  { id: 5, nom: "Najot Ta'lim krujkasi",                          narx: 1500, emoji: "☕" },
  { id: 6, nom: "Najot Ta'lim krujkasi (katta)",                  narx: 1800, emoji: "☕" },
  { id: 7, nom: "Najot Ta'lim krujkasi (bo'yoqli)",               narx: 2000, emoji: "☕" },
  { id: 8, nom: "Sichqoncha gilami",                              narx: 2200, emoji: "🖱️" },
];

// Foydalanuvchining kumushi — statik son
const KUMUSHIM = 644;

function Dokon() {
  const [tab, setTab]           = useState("sotuvda");
  const [qidir, setQidir]       = useState("");
  const [faqatArzon, setFaqatArzon] = useState(false);  // "Kumushlarim yetadi" filtri

  // Qidiruv + kumush yetadimi filtri birga
  const natija = mahsulotlar.filter((m) => {
    const nomMos = m.nom.toLowerCase().includes(qidir.toLowerCase());
    const narxMos = !faqatArzon || m.narx <= KUMUSHIM;
    return nomMos && narxMos;
  });

  return (
    <div>
      {/* Tablar */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        {[
          { key: "sotuvda", text: "Sotuvda" },
          { key: "olgan",   text: "Sotib olganlarim" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 text-sm font-semibold transition-colors cursor-pointer border-b-2 -mb-px ${
              tab === t.key
                ? "text-amber-600 border-amber-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {t.text}
          </button>
        ))}
      </div>

      {/* Filtrlar qatori */}
      <div className="flex flex-wrap items-end gap-6 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Kategoriya</label>
          <select className="w-36 bg-white border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer">
            <option>Barchasi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Akssesuar qiymati</label>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="number" className="w-16 bg-white border border-gray-300 rounded px-2 py-2" />
            <span>dan</span>
            <input type="number" className="w-16 bg-white border border-gray-300 rounded px-2 py-2" />
            <span>gacha</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Akssesuar nomi</label>
          <div className="relative">
            <input
              type="text"
              value={qidir}
              onChange={(e) => setQidir(e.target.value)}
              placeholder="Qidirish..."
              className="w-56 bg-white border border-gray-300 rounded pl-3 pr-9 py-2 text-sm"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Kumushlarim yetadi</label>
          {/* Switch tugmasi — ichidagi aylana state ga qarab suriladi */}
          <button
            onClick={() => setFaqatArzon(!faqatArzon)}
            className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
              faqatArzon ? "bg-amber-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                faqatArzon ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mahsulotlar — grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {natija.map((m) => {
          const yetadi = KUMUSHIM >= m.narx;
          return (
            <div key={m.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col">
              {/* Rasm o'rniga emoji — joy to'ldirgich */}
              <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center text-6xl mb-4">
                {m.emoji}
              </div>

              <h3 className="font-semibold text-gray-800 mb-3 min-h-[48px]">{m.nom}</h3>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-gray-700">
                  {m.narx}
                  <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 2 7v10l10 5 10-5V7z" />
                  </svg>
                </div>

                <button
                  disabled={!yetadi}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg ${
                    yetadi
                      ? "bg-amber-500 hover:bg-amber-600 text-white cursor-pointer"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                >
                  {yetadi ? "Sotib olish" : "Kumushingiz yetarli emas"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hech nima topilmasa */}
      {natija.length === 0 && (
        <p className="text-center text-gray-400 py-10">Mahsulot topilmadi</p>
      )}
    </div>
  );
}

export default Dokon;
