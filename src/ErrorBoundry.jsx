import { Link, useRouteError } from "react-router-dom";

// Sahifada kutilmagan xato bo'lsa, oq ekran o'rniga shu sahifa chiqadi
function ErrorBoundry() {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1f8] p-6">
      <div className="max-w-md text-center bg-white border border-gray-200 rounded-2xl p-8">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Nimadir xato ketdi</h1>
        <p className="text-gray-500 text-sm mb-6">{error?.statusText || error?.message || "Sahifani yuklab bo'lmadi."}</p>
        <Link to="/" className="inline-block bg-[#F5A623] hover:bg-[#E89510] text-white px-5 py-2.5 rounded-xl text-sm font-medium">
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundry;
