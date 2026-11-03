import { useState } from "react";
import { jamiKumush, loadXaridlar, saveXaridlar } from "./data/kumush";

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

// Kumush balansi = yig'ilgan kumush − xaridlar narxi

function Dokon() {
  const [tab, setTab]           = useState("sotuvda");
  const [qidir, setQidir]       = useState("");
  const [faqatArzon, setFaqatArzon] = useState(false);  // "Kumushlarim yetadi" filtri
  const [narxDan, setNarxDan] = useState("");
  const [narxGacha, setNarxGacha] = useState("");
  const [xaridlar, setXaridlar] = useState(loadXaridlar);
  const [xabar, setXabar] = useState("");

  const sarflangan = xaridlar.reduce((sum, x) => sum + x.narx, 0);
  const KUMUSHIM = jamiKumush - sarflangan;

  const sotibOl = (m) => {
    if (KUMUSHIM < m.narx) return;
    if (!window.confirm(`"${m.nom}" ni ${m.narx} kumushga sotib olasizmi?`)) return;
    const yangi = [...xaridlar, { id: m.id, nom: m.nom, narx: m.narx, emoji: m.emoji, sana: new Date().toISOString() }];
    setXaridlar(yangi);
    saveXaridlar(yangi);
    setXabar(`"${m.nom}" sotib olindi. Qolgan kumush: ${KUMUSHIM - m.narx}`);
  };

  // Tuzatildi: oldin narx oralig'i maydonlari ulanmagan edi
  const dan = narxDan === "" ? 0 : Number(narxDan);
  const gacha = narxGacha === "" ? Infinity : Number(narxGacha);
  const natija = mahsulotlar.filter((m) => {
    const nomMos = m.nom.toLowerCase().includes(qidir.toLowerCase());
    const narxMos = (!faqatArzon || m.narx <= KUMUSHIM) && m.narx >= dan && m.narx <= gacha;
    return nomMos && narxMos;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Do'kon</h1>
        <p className="font-semibold text-gray-700">Kumushim: <span className="text-amber-600">{KUMUSHIM}</span></p>
      </div>
      {xabar && <p role="status" className="mb-4 rounded-lg bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">{xabar}</p>}

      {/* Tablar */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        {[
          { key: "sotuvda", text: "Sotuvda" },
          { key: "olgan",   text: `Sotib olganlarim (${xaridlar.length})` },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
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

      {tab === "olgan" ? (
        xaridlar.length === 0 ? (
          <p className="text-center text-gray-400 py-10">Hali hech narsa sotib olmagansiz.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {xaridlar.map((x, i) => (
              <li key={`${x.id}-${i}`} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-5xl mb-3" aria-hidden="true">{x.emoji}</div>
                <p className="font-semibold text-gray-800">{x.nom}</p>
                <p className="text-sm text-gray-500 mt-1">{x.narx} kumush · {new Date(x.sana).toLocaleDateString("uz-UZ")}</p>
              </li>
            ))}
          </ul>
        )
      ) : (
      <>
      {/* Filtrlar qatori */}
      <div className="flex flex-wrap items-end gap-6 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Kategoriya</label>
          <select className="w-36 bg-white border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer">
            <option>Barchasi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Aksessuar qiymati</label>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="number" min="0" aria-label="Narx (dan)" value={narxDan} onChange={(e) => setNarxDan(e.target.value)} className="w-20 bg-white border border-gray-300 rounded px-2 py-2" />
            <span>dan</span>
            <input type="number" min="0" aria-label="Narx (gacha)" value={narxGacha} onChange={(e) => setNarxGacha(e.target.value)} className="w-20 bg-white border border-gray-300 rounded px-2 py-2" />
            <span>gacha</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Aksessuar nomi</label>
          <div className="relative">
            <input
              type="text"
              aria-label="Aksessuar nomi"
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
            type="button"
            role="switch"
            aria-checked={faqatArzon}
            aria-label="Faqat kumushim yetadiganlar"
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
                  type="button"
                  disabled={!yetadi}
                  onClick={() => sotibOl(m)}
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
      </>
      )}
    </div>
  );
}

export default Dokon;
