import Link from 'next/link';
import { BarChart3, Bot, BriefcaseBusiness, CalendarDays, LayoutDashboard, MessageCircle, Settings, Trophy, UsersRound } from 'lucide-react';

const items = [
  ['Dashboard', '/dashboard', LayoutDashboard],
  ['Lead', '/leads', UsersRound],
  ['Pipeline', '/leads', BriefcaseBusiness],
  ['Comunicazioni', '/leads', MessageCircle],
  ['Calendario', '/calendar', CalendarDays],
  ['Report', '/reports', BarChart3],
  ['Gamification', '/gamification', Trophy],
  ['AI Insights', '/ai-insights', Bot],
  ['Impostazioni', '/settings', Settings],
] as const;

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-[286px] min-h-screen bg-ink text-white p-6 flex-col fixed left-0 top-0 bottom-0">
      <div className="flex items-center gap-3 text-2xl font-black mb-10">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald to-mint grid place-items-center text-ink">▲</div>
        <span>AXIORA</span>
      </div>
      <nav className="space-y-2">
        {items.map(([label, href, Icon], index) => (
          <Link key={label} href={href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${index === 0 ? 'bg-gradient-to-r from-emerald to-mint text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}>
            <Icon size={19} /> {label}
            {label === 'Comunicazioni' && <span className="ml-auto rounded-full bg-emerald px-2 py-0.5 text-xs text-white">12</span>}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-[24px] bg-white/10 p-4">
        <p className="text-xs text-slate-300">AI Coach attivo</p>
        <p className="mt-1 font-black text-mint">12 lead prioritari oggi</p>
      </div>
    </aside>
  );
}
