import { useNavigate } from "react-router-dom";

function Topbar({ onMenu, menuOpen }) {
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Hamburger tugmasi */}
        <button
          type="button"
          onClick={onMenu}
          aria-label="Menyuni ochish"
          aria-controls="yon-panel"
          aria-expanded={menuOpen}
          className="md:invisible w-10 h-10 rounded-lg bg-[#F5A623] hover:bg-[#E89510] transition-colors flex items-center justify-center cursor-pointer">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* O'ng tomon: bildirishnoma va chiqish */}
        <div className="flex items-center gap-5">
          {/* Qo'ng'iroq — ustida qizil sanoq */}
          <button type="button" aria-label="Bildirishnomalar: 27 ta yangi" className="relative text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            {/* absolute — qo'ng'iroqning o'ng yuqori burchagiga yopishadi */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              27
            </span>
          </button>

          {/* Chiqish — Najot Ta'lim bosh sahifasiga qaytaradi */}
          <button type="button" onClick={() => navigate("/najot-talim")} aria-label="Chiqish" title="Chiqish" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
