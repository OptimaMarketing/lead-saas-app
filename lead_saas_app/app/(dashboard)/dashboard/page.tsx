import { Shell, Topbar } from '@/components/shell';
import { Bot, CalendarCheck, Euro, LockKeyhole, TrendingUp, UsersRound } from 'lucide-react';

const kpis = [
  ['Lead totali (mese)', '342', '+18%', UsersRound],
  ['Appuntamenti fissati', '76', '+24%', CalendarCheck],
  ['Vendite chiuse', '28', '+12%', LockKeyhole],
  ['Fatturato', '€ 48.750', '+21%', Euro],
  ['Tasso conversione', '18,4%', '+3,6%', TrendingUp],
];
const team = [['Marco Bianchi',112,28,12,'21,4%','80%'],['Alessia Rossi',98,21,8,'18,7%','65%'],['Luca Moretti',76,15,6,'18,3%','55%'],['Giulia Romano',56,12,2,'7,1%','30%']];

export default function Dashboard(){
  return <Shell><Topbar />
    <section className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
      {kpis.map(([label,value,trend,Icon]) => <div className="card p-5" key={label as string}>
        <div className="flex items-center justify-between"><p className="text-xs font-bold text-slate-500">{label as string}</p><div className="h-10 w-10 rounded-2xl bg-emerald/10 text-emerald grid place-items-center"><Icon size={19}/></div></div>
        <p className="mt-4 text-3xl font-black">{value as string}</p><p className="mt-1 text-xs font-black text-emerald">▲ {trend as string}</p>
      </div>)}
    </section>

    <section className="mt-5 grid xl:grid-cols-12 gap-5">
      <div className="card p-5 xl:col-span-5"><div className="flex justify-between"><h2 className="font-black">Andamento lead</h2><span className="chip bg-slate-100">Ultimi 30 giorni</span></div><div className="mt-8 h-44 flex items-end gap-3 border-b border-slate-100">{[42,58,70,88,74,119,85,108,98,156,101,145,166].map((h,i)=><div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald/15 to-emerald" style={{height:h}} />)}</div></div>
      <div className="card p-5 xl:col-span-3"><h2 className="font-black">Lead per fonte</h2><div className="my-7 mx-auto h-40 w-40 rounded-full bg-[conic-gradient(#10B981_0_37%,#2563EB_37%_65%,#7C3AED_65%_84%,#F59E0B_84%_92%,#CBD5E1_92%)] grid place-items-center"><div className="h-24 w-24 rounded-full bg-white grid place-items-center"><b>342<br/><span className="text-xs text-slate-400">Totale</span></b></div></div><div className="space-y-2 text-sm">{['Meta Ads 37%','Google Ads 28%','Sito Web 19%','Passaparola 8%'].map(x=><p className="flex justify-between" key={x}><span>{x}</span></p>)}</div></div>
      <div className="card p-5 xl:col-span-4"><div className="flex items-start gap-3"><div className="h-12 w-12 rounded-2xl bg-slate-100 grid place-items-center text-emerald"><Bot/></div><div><h2 className="font-black">AI Insight</h2><p className="text-sm text-slate-600 mt-1">Hai 12 lead ad alta probabilità di conversione da contattare oggi.</p></div></div><div className="mt-5 space-y-3">{['Luca Verdi','Azienda Gamma','Sara Conti'].map((n,i)=><div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3" key={n}><span className="font-bold text-sm">{n}</span><span className="chip bg-emerald/10 text-emerald">Score {92-i*3}</span></div>)}</div><button className="btn-dark mt-5 w-full">Vedi lead suggeriti →</button></div>
    </section>

    <section className="mt-5 grid xl:grid-cols-12 gap-5">
      <div className="card p-5 xl:col-span-7 overflow-x-auto"><h2 className="font-black mb-4">Performance team</h2><table className="w-full text-sm"><thead className="text-slate-400 text-left"><tr>{['Commerciale','Lead','App.','Vendite','Conv.','Obiettivo'].map(h=><th className="py-3" key={h}>{h}</th>)}</tr></thead><tbody>{team.map(r=><tr className="border-t border-slate-100" key={r[0]}><td className="py-3 font-bold">{r[0]}</td>{r.slice(1,5).map(v=><td key={v}>{v}</td>)}<td><div className="h-2 w-24 bg-slate-100 rounded-full"><div className="h-2 bg-emerald rounded-full" style={{width:r[5]}}/></div></td></tr>)}</tbody></table></div>
      <div className="card p-5 xl:col-span-2"><h2 className="font-black">Obiettivo</h2><p className="mt-5 text-3xl font-black">81%</p><p className="text-sm text-slate-500">€48.750 / €60.000</p><div className="mt-4 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-emerald" style={{width:'81%'}}/></div></div>
      <div className="card p-5 xl:col-span-3"><h2 className="font-black mb-4">Classifica team</h2>{['Marco Bianchi 1250 XP','Alessia Rossi 980 XP','Luca Moretti 870 XP','Giulia Romano 540 XP'].map((x,i)=><p className="flex justify-between py-2 border-b border-slate-100" key={x}><span>{i+1}. {x.split(' ').slice(0,2).join(' ')}</span><b>{x.split(' ').slice(2).join(' ')}</b></p>)}</div>
    </section>
  </Shell>
}
