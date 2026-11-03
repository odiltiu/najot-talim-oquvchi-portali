import { useState } from "react";

// Yetakchilar ro'yxati
const talabalar = [
  { reyting: 1, ism: "Abdug'aniyev Asilbek",            kurs: ["1. Start Junior"], xp: 41 },
  { reyting: 2, ism: "Amirilloxon Rustamov Avazxon o'g'li", kurs: ["1. Start Junior"], xp: 41 },
  { reyting: 3, ism: "Sunnatillo Abduvahobov Akbarovich", kurs: ["1. Start Junior"], xp: 38 },
  { reyting: 4, ism: "Ulug'bek Rajabov Ravshanovich",    kurs: ["1. Start Junior"], xp: 38 },
  { reyting: 5, ism: "Xurshidbek Musayev Said o'g'li",   kurs: ["1. Start Junior"], xp: 37 },
  { reyting: 6, ism: "Shahina Shodiyeva Shodmon qizi",   kurs: ["1. Start Junior"], xp: 35 },
  { reyting: 7, ism: "Nurdavlat Abdumalikov",            kurs: ["1. Full Stack (standart)", "2. Start Junior"], xp: 35 },
  { reyting: 8, ism: "Samir Gulommirzayev Dilshodovich", kurs: ["1. Start Junior"], xp: 35 },
  { reyting: 9, ism: "Ulug'bek Davronov Hayrullo og'li", kurs: ["1. Start Junior"], xp: 34 },
];

// Filtr tugmalari — ikkita guruh
const filialTablar = ["Guruhim bo'yicha", "Filial bo'yicha", "Barcha filiallar bo'yicha"];
const vaqtTablar   = ["Haftalik", "Oylik", "3 oy"];

function Reyting() {
  // Har bir filtrning tanlangan qiymati — alohida state
  const [filial, setFilial] = useState("Filial bo'yicha");
  const [vaqt, setVaqt] = useState("Oylik");

  return (
    <div className="flex gap-6">
      {/* Chapdagi filtr paneli */}
      <aside className="w-72 shrink-0">
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-2">
          {/* Birinchi guruh */}
          {filialTablar.map((text, i) => (
            <button
              key={text}
              onClick={() => setFilial(text)}
              className={`w-full py-3 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                filial === text
                  ? "bg-amber-500 text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-50"
              } ${i === 0 ? "text-base" : ""}`}
            >
              {text}
            </button>
          ))}

          {/* Ikkinchi guruh — alohida blok */}
          <div className="pt-2">
            {vaqtTablar.map((text, i) => (
              <button
                key={text}
                onClick={() => setVaqt(text)}
                className={`w-full py-3 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
                  vaqt === text
                    ? "bg-amber-500 text-white"
                    : "bg-transparent text-gray-700 hover:bg-gray-50"
                } ${i === 0 ? "text-base" : ""}`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* O'ngda jadval */}
      <div className="flex-1 min-w-0">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Filial bo'yicha yetakchilar</h1>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="px-6 py-4 font-bold text-gray-700 w-24">Reyting</th>
                <th className="px-6 py-4 font-bold text-gray-700">Ism-familiya</th>
                <th className="px-6 py-4 font-bold text-gray-700">Kurs</th>
                <th className="px-6 py-4 font-bold text-gray-700 w-20 text-right">XP</th>
              </tr>
            </thead>

            <tbody>
              {talabalar.map((t) => (
                <tr key={t.reyting} className="border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4 text-gray-700">{t.reyting}</td>
                  <td className="px-6 py-4 text-gray-700">{t.ism}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {/* Ba'zi talabalarda bir nechta kurs bor */}
                    {t.kurs.map((k, i) => <div key={i}>{k}</div>)}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-right">{t.xp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reyting;
