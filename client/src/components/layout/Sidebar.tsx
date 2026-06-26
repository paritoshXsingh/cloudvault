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
  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-200 bg-white lg:flex">
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

      {/* Storage Card */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-2xl bg-slate-100 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">Storage</h3>

            <span className="text-xs text-slate-500">25%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-300">
            <div className="h-full w-1/4 rounded-full bg-indigo-600"></div>
          </div>

          <p className="mt-3 text-xs text-slate-500">2.5 GB of 10 GB used</p>
        </div>

        <button className="mt-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
