import {
  LayoutDashboard,
  FolderOpen,
  Star,
  Share2,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import Logo from "@/components/common/Logo";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "My Files",
    icon: FolderOpen,
    path: "/files",
  },
  {
    name: "Starred",
    icon: Star,
    path: "/starred",
  },
  {
    name: "Shared",
    icon: Share2,
    path: "/shared",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };
  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto border-t border-slate-200 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
