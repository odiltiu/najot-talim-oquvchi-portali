import { useState } from "react";

// Qo'shimcha kurslar ro'yxati — har birining ichida darslar
const bolimlar = [
  { id: 1, nom: "Ish izlash va suhbatgacha bo'lgan jarayonlar", darslar: ["Rezyume tuzish", "Portfolio tayyorlash"] },
  { id: 2, nom: "Ish izlash va suhbatgacha bo'lgan jarayonlar: Rezyume", darslar: ["Rezyume shabloni", "Keng tarqalgan xatolar"] },
  { id: 3, nom: "Ish izlash va suhbatgacha bo'lgan jarayonlar: Linkedin", darslar: ["Profilni to'ldirish", "Networking"] },
  { id: 4, nom: "Ish suhbati", darslar: ["Texnik savollar", "Behavioral savollar"] },
  { id: 5, nom: "HR: Ishga kirgandan keyingi jarayonlar", darslar: ["Onboarding", "Jamoaga qo'shilish"] },
  { id: 6, nom: "HR: Ishdan bo'shash", darslar: ["Rasmiy jarayonlar", "Keyingi qadamlar"] },
];

function QoshimchaDarslar() {
  // Qaysi akkordion ochiq ekanini saqlaymiz — bitta vaqtda bittasi
  const [ochiqId, setOchiqId] = useState(null);

  // Bir xil tugmani qayta bossa — yopiladi
  const toggle = (id) => {
    setOchiqId(ochiqId === id ? null : id);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-800 mb-4">HR Suhbatlari kursi</h1>

      <div className="space-y-3">
        {bolimlar.map((b) => {
          const ochiq = ochiqId === b.id;
          return (
            <div key={b.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Sarlavha — bosiladi */}
              <button
                onClick={() => toggle(b.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50"
              >
                <span className="font-bold text-gray-800">
                  {b.id}. {b.nom}
                </span>

                {/* Strelka — ochilsa 180 gradus aylanadi */}
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${ochiq ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Faqat ochiq bo'lsa — ichki ro'yxat */}
              {ochiq && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <ul className="space-y-2">
                    {b.darslar.map((d, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QoshimchaDarslar;
