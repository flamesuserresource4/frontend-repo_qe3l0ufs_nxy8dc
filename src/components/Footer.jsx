import { Zap, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">ZapStation</p>
              <p className="text-sm text-slate-500">Charge ahead sustainably</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Terms</a>
            <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Status</a>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-slate-100">
              <Twitter className="w-5 h-5" />
            </a>
            <a aria-label="GitHub" href="#" className="p-2 rounded-md hover:bg-slate-100">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} ZapStation.com — All rights reserved.</p>
      </div>
    </footer>
  );
}
