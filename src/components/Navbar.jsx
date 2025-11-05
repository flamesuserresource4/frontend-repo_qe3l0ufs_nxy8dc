import { useState } from 'react';
import { Zap, Menu, X, Car, Building2 } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 text-sm font-medium">
      <li className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">
        <Car className="w-4 h-4" />
        For Drivers
      </li>
      <li className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">
        <Building2 className="w-4 h-4" />
        For Operators
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">ZapStation</span>
          </div>

          <div className="hidden lg:block">
            <NavLinks />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition-colors">Get Started</button>
          </div>

          <button
            aria-label="Toggle Menu"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-200 mt-2">
            <div className="pt-4 flex flex-col gap-4">
              <NavLinks />
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors">Sign in</button>
                <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 transition-colors">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
