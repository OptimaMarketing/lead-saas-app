import { Shell } from '@/components/shell';
import { Mail, Phone, Plus, SlidersHorizontal } from 'lucide-react';

const columns = [
  ['Nuovo',32], ['Contattato',24], ['Interessato',18], ['Appuntamento',14], ['Trattativa',9], ['Venduto',7]
];
const names = ['Luca Verdi','Giulia Bianchi','Francesca Costa','Roberto Ferrari','Vittorio Greco','Andrea Conti','Sara Conti','Alessandro Neri','Paolo Russo','Elena Romano','Chiara Esposito','Davide Bianchi'];

export default function Leads(){return <Shell>
  <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3"><div><h1 className="text-3xl font-black">Pipeline</h1><p className="text-slate-500 text-sm">Gestisci lead, stati e follow-up commerciali</p></div><div className="flex gap-2"><button className="btn-primary"><Plus size={18}/> Nuovo lead</button><button className="btn bg-white border"><SlidersHorizontal size={18}/></button></div></div>
  <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
    {columns.map(([status,count],i)=><div className="card p-4 min-h-[520px]" key={status as string}><div className="flex justify-between mb-4"><h2 className="font-black">{status}</h2><span className="chip bg-slate-100">{count as number}</span></div>{names.slice(i,i+4).map((name,j)=><div className="rounded-2xl border border-slate-100 bg-white p-4 mb-3" key={name}><div className="flex items-center gap-2"><div className="h-8 w-8 rounded-full bg-emerald/10 text-emerald grid place-items-center text-xs font-black">{name.split(' ').map(x=>x[0]).join('')}</div><div><b className="text-sm">{name}</b><p className="text-xs text-slate-400">{j+1} ora fa</p></div></div><div className="mt-3 flex items-center justify-between"><span className="chip bg-emerald/10 text-emerald">Score {92-j*4}</span>{i===5 && <b className="text-emerald text-xs">€ {2500+j*900}</b>}</div><div className="mt-3 flex gap-2"><button className="chip bg-emerald text-white">WhatsApp</button><button className="chip bg-ink text-white"><Phone size={12}/></button><button className="chip bg-slate-100"><Mail size={12}/></button></div></div>)}<button className="mt-2 text-sm font-bold text-slate-500">+ Aggiungi lead</button></div>)}
  </div>
</Shell>}
