import { Phone, Mail, MessageCircle, CalendarPlus } from 'lucide-react';
import { StatusChip } from './status-chip';
export function LeadCard({ lead }: { lead: any }) {
  return <div className="card p-5 space-y-4">
    <div className="flex items-start justify-between gap-3">
      <div><h3 className="font-black text-lg">{lead.name}</h3><p className="text-sm text-slate-500">{lead.source} · {lead.owner}</p></div>
      <div className="text-right"><div className="text-2xl font-black text-emerald">{lead.score}</div><p className="text-[11px] text-slate-400 font-bold">AI Score</p></div>
    </div>
    <div className="flex flex-wrap gap-2"><StatusChip status={lead.status}/><span className="chip bg-slate-100 text-slate-600">{lead.next}</span><span className="chip bg-amber/10 text-amber">{lead.value}</span></div>
    <div className="grid grid-cols-4 gap-2">
      <button className="btn bg-slate-100 text-ink px-2"><Phone size={17}/></button>
      <button className="btn bg-emerald text-white px-2"><MessageCircle size={17}/></button>
      <button className="btn bg-slate-100 text-ink px-2"><Mail size={17}/></button>
      <button className="btn bg-ink text-white px-2"><CalendarPlus size={17}/></button>
    </div>
  </div>
}
