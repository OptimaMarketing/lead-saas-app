import Link from 'next/link';
import { BarChart3, Bell, CalendarDays, Home, MoreHorizontal, Trophy, UsersRound } from 'lucide-react';
import { Sidebar } from './sidebar';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar />
      <main className="flex-1 md:ml-[286px] p-4 md:p-8 mobile-safe">{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 flex justify-around px-2 py-3 text-[11px] font-bold text-slate-500">
        <Link className="grid place-items-center gap-1 text-emerald" href="/dashboard"><Home size={20}/>Home</Link>
        <Link className="grid place-items-center gap-1" href="/leads"><UsersRound size={20}/>Lead</Link>
        <Link className="grid place-items-center gap-1" href="/leads"><CalendarDays size={20}/>Attività</Link>
        <Link className="grid place-items-center gap-1" href="/gamification"><Trophy size={20}/>Classifica</Link>
        <Link className="grid place-items-center gap-1" href="/reports"><BarChart3 size={20}/>Report</Link>
      </nav>
    </div>
  );
}

export function Topbar() {
  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight">Dashboard</h1>
        <p className="text-slate-500 text-sm">Bentornato, Marco! 👋</p>
      </div>
      <div className="flex items-center gap-3">
        <select className="hidden md:block input w-[230px] text-sm font-bold"><option>TechSolutions S.r.l.</option></select>
        <button className="relative h-12 w-12 rounded-2xl bg-white shadow-soft grid place-items-center"><Bell size={19}/><span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1.5">8</span></button>
      </div>
    </div>
  );
}
