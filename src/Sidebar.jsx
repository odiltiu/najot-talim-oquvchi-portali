import { NavLink } from "react-router-dom";

const menu = [
  { path: "/", text: "Bosh sahifa", icon: "home" },
  { path: "/tolovlarim", text: "To'lovlarim", icon: "card" },
  { path: "/guruhlarim", text: "Guruhlarim", icon: "people" },
  { path: "/korsatgichlarim", text: "Ko'rsatgichlarim", icon: "chart" },
  { path: "/reyting", text: "Reyting", icon: "bars" },
  { path: "/dokon", text: "Do`kon", icon: "cart" },
  { path: "/qoshimcha-darslar", text: "Qo'shimcha darslar", icon: "screen" },
  { path: "/sozlamalar", text: "Sozlamalar", icon: "gear" },
];

function Icon({ name }) {
  const paths = {
    home: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z",
    card: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm0 3h20",
    people: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 2.13a4 4 0 0 1 0 7.75",
    chart: "M3 3v18h18M7 15v3M12 9v9M17 5v13",
    bars: "M4 20V10M10 20V4M16 20v-7M22 20v-3",
    cart: "M3 3h2l2.4 12h10.2L21 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    screen: "M3 5h18v11H3zM8 21h8M12 16v5",
    gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8-3a8 8 0 0 0-.2-1.7l2-1.6-2-3.4-2.4 1a8 8 0 0 0-2.9-1.7L14 2h-4l-.5 2.6a8 8 0 0 0-3 1.7l-2.3-1-2 3.4 2 1.6a8 8 0 0 0 0 3.4l-2 1.6 2 3.4 2.3-1a8 8 0 0 0 3 1.7L10 22h4l.5-2.6a8 8 0 0 0 2.9-1.7l2.4 1 2-3.4-2-1.6c.1-.6.2-1.1.2-1.7z",
  };

  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 min-h-screen">
      {/* Logo — SVG fayli (ichida ikonka + "NAJOT TA'LIM" matni birga) */}
      <div className="px-6 py-5 flex items-center gap-2">
        <img src="/logo.svg" alt="Najot Ta'lim" className="h-7" />
        <span className="text-[10px] font-bold bg-[#F5A623] text-white px-2 py-0.5 rounded-md">
          Beta
        </span>
      </div>

      <nav className="px-3 pb-6 flex flex-col gap-1">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] transition-colors ${
                isActive
                  ? "bg-amber-50 text-amber-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <Icon name={item.icon} />
            {item.text}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
