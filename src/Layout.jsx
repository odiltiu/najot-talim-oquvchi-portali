import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Layout — barcha sahifalar uchun umumiy ramka.
// Chapda yon panel, o'ngda tepa panel va sahifa contenti.
function Layout() {
  return (
    <div className="flex min-h-screen bg-[#eef1f8]">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />

        {/* Outlet — bu yerga marshrutga mos sahifa chiziladi */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
