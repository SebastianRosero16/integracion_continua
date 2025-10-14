import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPalette, FaHourglassStart, FaClock, FaSearch, FaHome } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Componentes</h1>
        <nav className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaHome />
              Inicio
            </div>
          </NavLink>
          <NavLink
            to="/colorpicker"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaPalette />
              Color Picker
            </div>
          </NavLink>
          <NavLink
            to="/countdowntimer"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaHourglassStart />
              Countdown Timer
            </div>
          </NavLink>
          <NavLink
            to="/digitalclock"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaClock />
              Digital Clock
            </div>
          </NavLink>
          <NavLink
            to="/searchlist"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaSearch />
              Search List
            </div>
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
