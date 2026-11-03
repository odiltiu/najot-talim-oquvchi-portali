import { useNavigate } from "react-router-dom";

import { monitoring, jamiXP, jamiKumush, BOSQICH_XP } from "./data/kumush";

function Korsatgichlarim() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Sarlavha va kumushlar — bir qatorga */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Mening natijalarim</h1>
        <div className="flex items-center gap-2 text-gray-600 font-semibold">
          <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 3h12l4 6-10 12L2 9z" />
          </svg>
          Kumushlar: <span className="text-gray-800">{jamiKumush}</span>
        </div>
      </div>

      {/* Statistika kartasi — bosh sahifa bilan bir xil */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-5 max-w-xl">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l6-6 4 4 7-7M14 7h7v7" />
          </svg>
          <span className="font-semibold text-gray-700">Bosqich: 0</span>
        </div>

        <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {jamiXP} / {BOSQICH_XP}
        </span>
        <div className="h-2 bg-emerald-100 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-emerald-500" style={{ width: `${Math.min(100, (jamiXP / BOSQICH_XP) * 100)}%` }} />
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
          </svg>
          <span className="font-semibold text-gray-700">XP: {jamiXP}</span>
        </div>
      </div>

      {/* Monitoring bloki */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <h2 className="text-lg font-bold text-gray-800 px-6 py-4 border-b border-gray-100">
          Yig'ilgan natijalar monitoringi
        </h2>

        {monitoring.map((m) => (
          <div
            key={m.id}
            className="flex items-center justify-between px-6 py-4 border-b border-gray-100 text-gray-600"
          >
            <span>{m.nomi} bo'yicha jami XP {m.xp}, Jami Kumush {m.kumush}</span>

            {/* Tafsilot tugmasi — ikonka */}
            <button
              onClick={() => navigate(`/korsatgichlarim/${m.id}`)}
              className="text-gray-400 hover:text-amber-600 cursor-pointer"
              title="Batafsil"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M14 10l7-7M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
              </svg>
            </button>
          </div>
        ))}

        {/* Jami */}
        <div className="px-6 py-4 space-y-1">
          <div className="flex items-center gap-2 font-bold text-gray-700">
            <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
            </svg>
            Jami yig'ilgan XP: <span className="text-emerald-600">{jamiXP}</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-700">
            <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 3h12l4 6-10 12L2 9z" />
            </svg>
            Jami yig'ilgan Kumushlar: <span className="text-gray-800">{jamiKumush}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korsatgichlarim;
