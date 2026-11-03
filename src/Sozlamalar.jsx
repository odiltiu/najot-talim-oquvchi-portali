// Foydalanuvchi ma'lumotlari — hozircha statik
const profil = {
  ism: "Odiljon",
  familiya: "Xusanov",
  telefon: "(+998) 97 770 94 30",
  jinsi: "Male",
  tugilgan: "29 Yan, 1994",
  hhId: "44797",
};

function Sozlamalar() {
  return (
    <div className="space-y-5">
      {/* Shaxsiy ma'lumotlar bloki */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-5">Shaxsiy ma'lumotlar</h2>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 items-start">
          {/* Rasm maydoni */}
          <div className="flex gap-4 items-start">
            <div className="w-28 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-5xl">👨</span>
            </div>
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-10 2-10 6v2h20v-2c0-4-6-6-10-6z" />
                </svg>
              </div>
              <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center cursor-pointer">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z" />
                </svg>
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-1">Yuklanmagan</p>
            </div>
          </div>

          {/* Ikkita ustun — ism/telefon/jinsi va familiya/sana/HH ID */}
          <div className="space-y-5">
            <Field label="Ism"          value={profil.ism} />
            <Field label="Telefon raqam" value={profil.telefon} />
            <Field label="Jinsi"        value={profil.jinsi} />
          </div>

          <div className="space-y-5">
            <Field label="Familiya"     value={profil.familiya} />
            <Field label="Tug'ilgan sana" value={profil.tugilgan} />
            <Field label="HH ID"         value={profil.hhId} />
          </div>
        </div>
      </div>

      {/* Pastki uchta karta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card title="Kirish">
          <p className="text-gray-700">{profil.hhId}</p>
        </Card>

        <Card title="Parol" editable>
          {/* Yulduzchalar — haqiqiy parol o'rniga */}
          <p className="text-gray-700 tracking-widest">••••••••</p>
        </Card>

        <Card title="Bildirishnoma sozlamalari" editable>
          <p className="text-gray-400 text-sm">—</p>
        </Card>
      </div>

      {/* Shartnomalar bloki */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-800">Shartnomalarim</h2>
        <p className="text-gray-400 text-sm mt-6">Hozircha shartnomalar yo'q</p>
      </div>
    </div>
  );
}

// Yorliq va qiymat — kichik yordamchi komponent
function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="font-bold text-gray-800">{value}</p>
    </div>
  );
}

// Pastki uchta kartani bir ko'rinishga keltirish uchun
function Card({ title, editable, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-800">{title}</h3>
        {editable && (
          <button className="text-gray-400 hover:text-amber-600 cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z" />
            </svg>
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default Sozlamalar;
