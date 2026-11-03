// Kalendar ma'lumotlari
const oyNomi = "Okt 2026";
const haftaKunlari = ["D", "S", "C", "P", "J", "S", "Y"];

// 1-oktabr payshanbaga to'g'ri keladi, shuning uchun oldida 3 ta bo'sh katak
const boshBoshliq = 3;
const kunlarSoni = 31;
const bugun = 9;
const darsKunlari = [12, 14, 16, 19, 21, 23, 26, 28, 30];

function BoshSahifa() {
  // 1 dan 31 gacha raqamlar ro'yxatini yasaymiz
  const kunlar = Array.from({ length: kunlarSoni }, (_, i) => i + 1);

  return (
    <div className="max-w-5xl">
      {/* Sarlavha */}
      <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-5">
        Kumushlar: 644
        <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 3h12l4 6-10 12L2 9z" />
        </svg>
      </h1>

      {/* Statistika kartasi */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 w-full max-w-sm">
        {/* Bosqich */}
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l6-6 4 4 7-7M14 7h7v7" />
          </svg>
          <span className="font-semibold text-gray-700">Bosqich:</span>
          <span className="font-bold text-gray-900">0</span>
        </div>

        {/* Progress — yashil ko'rsatkich */}
        <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
          161 / 200
        </span>
        {/* Tashqi kulrang chiziq, ichida yashil to'ldirilgan qism */}
        <div className="h-2 bg-emerald-100 rounded-full overflow-hidden mb-4">
          {/* 161/200 = 80.5% */}
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "80.5%" }} />
        </div>

        {/* XP */}
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
          </svg>
          <span className="font-semibold text-gray-700">XP:</span>
          <span className="font-bold text-gray-900">161</span>
        </div>

        {/* Reyting */}
        <p className="font-bold text-gray-800 mb-1">Reyting</p>
        <p className="text-gray-700">
          Umumiy: <span className="text-amber-600 font-medium">9796 - o'rin</span>
        </p>
      </div>

      {/* Dars jadvali */}
      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Dars jadvali</h2>

      <div className="flex flex-wrap gap-6 items-start">
        {/* Kalendar */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 w-[360px]">
          {/* Oy nomi va strelkalar */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-1 font-semibold text-gray-700 cursor-pointer">
              {oyNomi}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer">
                <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hafta kunlari sarlavhasi — 7 ta ustun */}
          <div className="grid grid-cols-7 mb-2">
            {haftaKunlari.map((kun, i) => (
              <div key={i} className="text-center text-sm text-gray-400 font-medium">
                {kun}
              </div>
            ))}
          </div>

          {/* Kunlar */}
          <div className="grid grid-cols-7 gap-y-1">
            {/* Oy boshidagi bo'sh kataklar */}
            {Array.from({ length: boshBoshliq }, (_, i) => (
              <div key={`bosh-${i}`} />
            ))}

            {kunlar.map((kun) => (
              <div key={kun} className="relative flex justify-center pt-2">
                {/* Dars bo'lgan kunlar ustida qizil nuqta */}
                {darsKunlari.includes(kun) && (
                  <span className="absolute top-0 w-2 h-2 bg-red-500 rounded-full" />
                )}

                <span
                  className={`w-8 h-8 flex items-center justify-center text-sm rounded-full ${
                    kun === bugun
                      ? "border border-gray-400 text-gray-800"
                      : "text-gray-600"
                  }`}
                >
                  {kun}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Yaqin dars kartasi */}
        <div className="bg-emerald-50 rounded-xl p-5 w-[300px]">
          <p className="font-semibold text-gray-800 mb-3">Dars 9 (3oy)</p>
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            16:00 - 18:00
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoshSahifa;
