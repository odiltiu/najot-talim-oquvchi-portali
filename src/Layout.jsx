import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Layout — barcha sahifalar uchun umumiy ramka.
// Chapda yon panel, o'ngda tepa panel va sahifa contenti.
// Telefonda yon panel yashirin, hamburger tugmasi bilan ochiladi.
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // Sahifa almashganda telefondagi menyu yopiladi (render paytida, effektsiz)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  return (
    <div className="flex min-h-screen bg-[#eef1f8]">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar onMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />

        {/* Outlet — bu yerga marshrutga mos sahifa chiziladi */}
        <main className="flex-1 p-4 md:p-6 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
